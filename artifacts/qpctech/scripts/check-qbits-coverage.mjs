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
  [
    "PC / Endpoint Security",
    "ProtectionNinjaOneProvides preventative maintenance, patching, OS updates, and system hardening. Used alongside Huntress to remotely access computers, troubleshoot and resolve issues, and review detailed device information.",
    "DetectionHuntress EDRHuntress EDR monitors endpoints 24/7 for suspicious behavior and persistent access.",
    "ResponseHuntress SOCHuntress SOC hunts threats and isolates devices; local remediation and support are provided.",
  ],
  [
    "Network Security",
    "ProtectionUbiquiti UniFiUniFi secures network hardware with segmentation, firewalls, and VLANs.",
    "DetectionUniFiSIEMUniFi is standard; SIEM analyzes network logs for anomalies on some client setups.SIEM means Security Information and Event Management.",
    "ResponseUniFiSIEMAlerts are investigated, affected systems are isolated, and network threats are resolved.",
  ],
  [
    "Online Identity",
    "ProtectionMicrosoft Entra IDGoogle Admin ConsoleEntra ID and Google Admin Console use MFA, admin controls, and Conditional Access to help secure accounts.",
    "DetectionITDRITDR monitors for compromised credentials, unauthorized logins, and privilege abuse.",
    "ResponseITDRCompromised accounts are quickly locked down.",
  ],
  [
    "Web Presence & Email Security",
    "ProtectionDNSSPF · DKIM · DMARCDNS, SPF, DKIM, and DMARC records help protect domain reputation and secure email delivery.",
    "DetectionCloudflareCloudflare monitors traffic and helps mitigate DDoS attacks and malicious bots.",
    "ResponseCloudflareCloudflare alerts are reviewed, and web threats, DNS changes, or site-security issues are resolved.",
  ],
];
const expectedTopicSlugs = [
  "pc-protection",
  "pc-detection",
  "pc-response",
  "network-protection",
  "network-detection",
  "network-response",
  "identity-protection",
  "identity-detection",
  "identity-response",
  "web-protection",
  "web-detection",
  "web-response",
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
      topicLinks: [...(card?.querySelectorAll('a[href^="/q-bits/topics/"]') ?? [])]
        .map((link) => link.getAttribute("href"))
        .sort(),
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
  const source = route === "/q-bits" ? "q-bits" : "home";
  const expectedTopicLinks = expectedTopicSlugs
    .map((slug) => `/q-bits/topics/${slug}?from=${source}`)
    .sort();
  assert(
    JSON.stringify(page.topicLinks) === JSON.stringify(expectedTopicLinks),
    `${route}: expected every coverage box to link to its own topic page.`,
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

async function verifyTopicPage(client, baseUrl, slug) {
  const route = `/q-bits/topics/${slug}`;
  await client.send("Page.navigate", { url: new URL(route.replace(/^\//, ""), baseUrl).toString() });

  await waitFor(
    () => client.evaluate("Boolean(document.querySelector('main article h2'))"),
    `the ${slug} topic article`,
  );

  const page = await client.evaluate(`(() => {
    const article = document.querySelector("main article");
    const bounds = article?.getBoundingClientRect();
    return {
      title: document.title,
      heading: document.querySelector("h1")?.textContent.trim(),
      sectionCount: article?.querySelectorAll("section h2").length ?? 0,
      textLength: article?.textContent.trim().length ?? 0,
      hasShortVersion: article?.textContent.includes("The short version") ?? false,
      hasContinueReading: [...document.querySelectorAll("main p")]
        .some((paragraph) => paragraph.textContent.trim() === "Continue reading"),
      relatedTopicLinkCount: document.querySelectorAll('main a[href^="/q-bits/topics/"]').length,
      backHref: article?.querySelector("a")?.getAttribute("href") ?? "",
      backLink: article?.querySelector("a")?.textContent.trim() ?? "",
      articleBounds: bounds ? { left: bounds.left, right: bounds.right, width: bounds.width } : null,
      viewportWidth: window.innerWidth,
    };
  })()`);

  assert(page.title.includes("Q-BITS by QPCTech"), `${route}: page title is missing.`);
  assert(Boolean(page.heading), `${route}: article heading is missing.`);
  assert(page.sectionCount >= 2, `${route}: article needs at least two explanatory sections.`);
  assert(page.textLength > 400, `${route}: article content is too short.`);
  assert(!page.hasShortVersion, `${route}: the short-version summary should not be shown.`);
  assert(!page.hasContinueReading, `${route}: sibling article navigation should not be shown.`);
  assert(page.relatedTopicLinkCount === 0, `${route}: article links to another topic page.`);
  assert(page.backHref === "/q-bits#qbits-bingo-title", `${route}: direct-visit fallback return link is wrong.`);
  assert(page.backLink.includes("Back to the Q-BITS coverage card"), `${route}: back link is missing.`);
  assert(
    page.articleBounds && page.articleBounds.left >= -1 && page.articleBounds.right <= page.viewportWidth + 1,
    `${route}: article extends beyond the ${page.viewportWidth}px phone viewport.`,
  );

  console.log(`PASS ${route}: topic article renders and fits ${page.viewportWidth}px phone viewport.`);
}

async function verifyReturnFlow(client, baseUrl, source, expectedPath, expectedLabel) {
  const route = `/q-bits/topics/pc-protection?from=${source}`;
  await client.send("Page.navigate", { url: new URL(route.replace(/^\//, ""), baseUrl).toString() });
  await waitFor(
    () => client.evaluate("Boolean(document.querySelector('main article a'))"),
    `the ${source} return link`,
  );

  const backLink = await client.evaluate(`(() => {
    const link = document.querySelector("main article a");
    return { href: link.getAttribute("href"), text: link.textContent.trim() };
  })()`);
  const expectedHref = `${expectedPath}#qbits-bingo-title`;
  assert(backLink.href === expectedHref, `${route}: return link does not preserve its source page.`);
  assert(backLink.text.includes(expectedLabel), `${route}: return link label does not match its source page.`);

  await client.evaluate(`document.querySelector("main article a").click()`);
  await waitFor(
    () => client.evaluate(`(() => {
      const heading = document.getElementById("qbits-bingo-title");
      return location.pathname === ${JSON.stringify(expectedPath)}
        && Boolean(heading)
        && heading.getBoundingClientRect().top < window.innerHeight;
    })()`),
    `return to ${expectedPath} coverage card`,
  );
  const destination = await client.evaluate(`(() => {
    const heading = document.getElementById("qbits-bingo-title");
    return {
      pathname: location.pathname,
      hash: location.hash,
      headingTop: heading.getBoundingClientRect().top,
      viewportHeight: window.innerHeight,
    };
  })()`);
  assert(destination.hash === "#qbits-bingo-title", `${route}: return navigation lost the coverage-card anchor.`);
  assert(
    destination.headingTop >= -20 && destination.headingTop < destination.viewportHeight,
    `${route}: return navigation did not bring the original coverage card into view.`,
  );

  console.log(`PASS ${route}: return link leads back to ${expectedPath} and its coverage card.`);
}

async function verifyTopicNavigationScroll(client, baseUrl, sourceRoute, source) {
  await client.send("Page.navigate", {
    url: new URL(sourceRoute.replace(/^\//, ""), baseUrl).toString(),
  });
  const linkSelector = `a[href="/q-bits/topics/pc-protection?from=${source}"]`;
  await waitFor(
    () => client.evaluate(`Boolean(document.querySelector(${JSON.stringify(linkSelector)}))`),
    `the topic link from ${sourceRoute}`,
  );
  await client.evaluate(`(() => {
    const link = document.querySelector(${JSON.stringify(linkSelector)});
    link.scrollIntoView({ block: "center" });
    link.click();
  })()`);

  await waitFor(
    () => client.evaluate(`location.pathname === "/q-bits/topics/pc-protection" && window.scrollY <= 1`),
    `the topic page to open at the top from ${sourceRoute}`,
  );
  console.log(`PASS ${sourceRoute}: clicking a coverage box opens its article at the top.`);
}

async function verifyCoverageHover(client, baseUrl) {
  const route = "/q-bits";
  await client.send("Emulation.setDeviceMetricsOverride", {
    width: 1440,
    height: 1000,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await client.send("Page.navigate", { url: new URL("q-bits", baseUrl).toString() });
  await waitFor(
    () => client.evaluate("Boolean(document.querySelector('a[href^=\"/q-bits/topics/pc-protection\"]'))"),
    "the desktop Q-BITS coverage card",
  );

  const before = await client.evaluate(`(() => {
    const link = document.querySelector('a[href^="/q-bits/topics/pc-protection"]');
    link.scrollIntoView({ block: "center" });
    const bounds = link.getBoundingClientRect();
    return { x: bounds.left + bounds.width / 2, y: bounds.top + bounds.height / 2, top: bounds.top };
  })()`);
  await client.send("Input.dispatchMouseEvent", {
    type: "mouseMoved",
    x: before.x,
    y: before.y,
  });
  await delay(280);

  const hovered = await client.evaluate(`(() => {
    const link = document.querySelector('a[href^="/q-bits/topics/pc-protection"]');
    const style = getComputedStyle(link);
    return { top: link.getBoundingClientRect().top, transform: style.transform, borderColor: style.borderColor, boxShadow: style.boxShadow };
  })()`);

  assert(hovered.top < before.top - 3, `${route}: coverage box did not lift on hover.`);
  assert(hovered.transform !== "none", `${route}: coverage box hover transform is missing.`);
  assert(
    /^rgba?\(\s*55,\s*181,\s*230(?:\s*,|\s*\))/.test(hovered.borderColor),
    `${route}: coverage box hover border color is missing (received ${hovered.borderColor}).`,
  );
  assert(hovered.boxShadow !== "none", `${route}: coverage box hover shadow is missing.`);
  console.log("PASS /q-bits: coverage box lifts and gains the matching border and shadow on hover.");
}

async function stopProcess(child) {
  if (!child || child.exitCode !== null) return;
  const exited = new Promise((resolve) => child.once("exit", resolve));
  child.kill("SIGTERM");
  await Promise.race([exited, delay(3000)]);

  if (child.exitCode === null) {
    child.kill("SIGKILL");
    await exited;
  }
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
    for (const slug of expectedTopicSlugs) {
      await verifyTopicPage(chromium.client, vite.baseUrl, slug);
    }
    await verifyTopicNavigationScroll(chromium.client, vite.baseUrl, "/", "home");
    await verifyTopicNavigationScroll(chromium.client, vite.baseUrl, "/q-bits", "q-bits");
    await verifyReturnFlow(chromium.client, vite.baseUrl, "home", "/", "main-page");
    await verifyReturnFlow(chromium.client, vite.baseUrl, "q-bits", "/q-bits", "Q-BITS coverage card");
    await verifyCoverageHover(chromium.client, vite.baseUrl);
  } finally {
    chromium?.client.socket.close();
    await stopProcess(chromium?.browser);
    await stopProcess(vite?.server);
    if (chromium) {
      await rm(chromium.profileDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
