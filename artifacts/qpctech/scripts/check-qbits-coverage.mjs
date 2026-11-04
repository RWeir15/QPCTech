import { spawn, spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import net from "node:net";
import os from "node:os";
import path from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { fileURLToPath } from "node:url";

const packageDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const viewport = { width: 390, height: 844, deviceScaleFactor: 1, mobile: true };
const routes = ["/", "/q-bits"];
const expectedRows = [
  ["PC", "Huntress", "Huntress", "Huntress"],
  ["Network", "UniFi", "UniFi", "UniFi"],
  ["Online Identity", "To be confirmed", "To be confirmed", "To be confirmed"],
  ["Web Presence", "To be confirmed", "To be confirmed", "To be confirmed"],
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function findAvailablePort() {
  const server = net.createServer();
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });
  const { port } = server.address();
  await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  return port;
}

function findChromium() {
  if (process.env.CHROMIUM_PATH) return process.env.CHROMIUM_PATH;
  const candidates = ["/repl/tools/bin/chromium", "chromium", "chromium-browser", "google-chrome"];
  for (const candidate of candidates) {
    if (candidate.startsWith("/") && candidate === "/repl/tools/bin/chromium") {
      if (existsSync(candidate)) return candidate;
      continue;
    }
    const result = spawnSync("which", [candidate], { encoding: "utf8" });
    if (result.status === 0 && result.stdout.trim()) return result.stdout.trim();
  }
  throw new Error("Chromium was not found. Set CHROMIUM_PATH to its executable.");
}

async function waitFor(check, description, timeoutMs = 20_000) {
  const deadline = Date.now() + timeoutMs;
  let lastError;
  while (Date.now() < deadline) {
    try {
      const result = await check();
      if (result) return result;
    } catch (error) {
      lastError = error;
    }
    await delay(100);
  }
  throw new Error(`Timed out waiting for ${description}${lastError ? `: ${lastError.message}` : ""}`);
}

async function getJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Request failed (${response.status}): ${url}`);
  return response.json();
}

function createCdpClient(url) {
  const socket = new WebSocket(url);
  let nextId = 0;
  const pending = new Map();

  const opened = new Promise((resolve, reject) => {
    socket.addEventListener("open", resolve, { once: true });
    socket.addEventListener("error", () => reject(new Error("Could not connect to Chromium DevTools")), { once: true });
  });
  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (!message.id) return;
    const request = pending.get(message.id);
    if (!request) return;
    pending.delete(message.id);
    if (message.error) request.reject(new Error(message.error.message));
    else request.resolve(message.result);
  });

  return {
    socket,
    async connect() {
      await opened;
    },
    send(method, params = {}) {
      const id = ++nextId;
      const result = new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
      socket.send(JSON.stringify({ id, method, params }));
      return result;
    },
    async evaluate(expression) {
      const response = await this.send("Runtime.evaluate", {
        expression,
        returnByValue: true,
        awaitPromise: true,
      });
      if (response.exceptionDetails) {
        throw new Error(response.exceptionDetails.exception?.description ?? response.exceptionDetails.text);
      }
      return response.result.value;
    },
  };
}

async function startVite(port) {
  const server = spawn(
    "pnpm",
    ["exec", "vite", "--config", "vite.config.ts", "--host", "127.0.0.1", "--port", String(port), "--strictPort"],
    {
      cwd: packageDir,
      env: { ...process.env, PORT: String(port), BASE_PATH: process.env.BASE_PATH ?? "/" },
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
  let output = "";
  server.stdout.on("data", (chunk) => { output += chunk.toString(); });
  server.stderr.on("data", (chunk) => { output += chunk.toString(); });
  const basePath = (process.env.BASE_PATH ?? "/").replace(/\/?$/, "/");
  const origin = `http://127.0.0.1:${port}`;
  const baseUrl = `${origin}${basePath}`;

  await waitFor(async () => {
    if (server.exitCode !== null) throw new Error(`Vite exited early:\n${output}`);
    const response = await fetch(baseUrl);
    return response.ok;
  }, "the QPCTech development server");

  return { server, baseUrl };
}

async function startChromium(chromiumPath) {
  const profileDir = await mkdtemp(path.join(os.tmpdir(), "qbits-coverage-chromium-"));
  const browser = spawn(chromiumPath, [
    "--headless=new",
    "--no-sandbox",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--remote-debugging-port=0",
    `--user-data-dir=${profileDir}`,
    "about:blank",
  ], { stdio: ["ignore", "ignore", "pipe"] });
  let errors = "";
  browser.stderr.on("data", (chunk) => { errors += chunk.toString(); });

  try {
    const activePortFile = path.join(profileDir, "DevToolsActivePort");
    const port = await waitFor(async () => {
      if (browser.exitCode !== null) throw new Error(`Chromium exited early:\n${errors}`);
      try {
        return Number((await readFile(activePortFile, "utf8")).split("\n")[0]);
      } catch {
        return null;
      }
    }, "Chromium's DevTools endpoint");
    const targets = await waitFor(() => getJson(`http://127.0.0.1:${port}/json/list`), "a browser page target");
    const page = targets.find((target) => target.type === "page");
    assert(page, "Chromium did not open a page target.");
    return { browser, profileDir, client: createCdpClient(page.webSocketDebuggerUrl) };
  } catch (error) {
    browser.kill("SIGTERM");
    await rm(profileDir, { recursive: true, force: true });
    throw error;
  }
}

async function verifyRoute(client, baseUrl, route) {
  await client.send("Emulation.setDeviceMetricsOverride", viewport);
  await client.send("Page.navigate", { url: new URL(route.replace(/^\//, ""), baseUrl).toString() });

  await waitFor(
    () => client.evaluate("Boolean(document.querySelector('section[aria-labelledby=\"qbits-bingo-title\"]'))"),
    `the coverage card on ${route}`,
  );

  const page = await client.evaluate(`(() => {
    const card = document.querySelector('section[aria-labelledby="qbits-bingo-title"]');
    const board = card?.querySelector('[role="table"]');
    const rows = [...(board?.querySelectorAll('[role="row"]') ?? [])]
      .filter((row) => !row.querySelector('[role="columnheader"]'))
      .map((row) => [...row.querySelectorAll('[role="rowheader"], [role="cell"]')]
        .map((cell) => cell.textContent.replace(/\\\\s+/g, " ").trim()));
    const rect = (element) => {
      const bounds = element.getBoundingClientRect();
      return { left: bounds.left, right: bounds.right, width: bounds.width, scrollWidth: element.scrollWidth, clientWidth: element.clientWidth };
    };
    return {
      title: card?.querySelector("h2")?.textContent.trim(),
      headers: [...(board?.querySelectorAll('[role="columnheader"]') ?? [])].map((cell) => cell.textContent.trim()),
      rows,
      viewportWidth: window.innerWidth,
      section: rect(card),
      board: rect(board),
      descendants: [...(board?.querySelectorAll('[role="row"], [role="rowheader"], [role="cell"]') ?? [])].map(rect),
    };
  })()`);

  assert(page.title === "Q-BITS Coverage Card", `${route}: coverage card title is missing or changed.`);
  assert(
    JSON.stringify(page.headers) === JSON.stringify(["Area", "Protection", "Detection", "Response"]),
    `${route}: coverage table headers are missing or changed.`,
  );
  assert(
    JSON.stringify(page.rows) === JSON.stringify(expectedRows),
    `${route}: expected coverage rows were not found. Received: ${JSON.stringify(page.rows)}`,
  );

  const bounds = [page.section, page.board, ...page.descendants];
  for (const [index, element] of bounds.entries()) {
    assert(
      element.left >= -1 && element.right <= page.viewportWidth + 1,
      `${route}: card element ${index} extends beyond the ${page.viewportWidth}px phone viewport (${element.left}px–${element.right}px).`,
    );
    assert(
      element.scrollWidth <= element.clientWidth + 1,
      `${route}: card element ${index} has horizontal content overflow (${element.scrollWidth}px content in ${element.clientWidth}px).`,
    );
  }

  console.log(`PASS ${route}: Q-BITS rows present and card fits ${page.viewportWidth}px phone viewport.`);
}

async function main() {
  const chromiumPath = findChromium();
  const port = await findAvailablePort();
  let vite;
  let chromium;
  try {
    vite = await startVite(port);
    chromium = await startChromium(chromiumPath);
    await chromium.client.connect();
    await chromium.client.send("Page.enable");
    await chromium.client.send("Runtime.enable");

    for (const route of routes) {
      await verifyRoute(chromium.client, vite.baseUrl, route);
    }
  } finally {
    chromium?.client.socket.close();
    chromium?.browser.kill("SIGTERM");
    vite?.server.kill("SIGTERM");
    if (chromium) await rm(chromium.profileDir, { recursive: true, force: true });
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
