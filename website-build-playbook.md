# Website Build Playbook — Local Business Website Template

_Based on the QPCTech project. Paste this document into a new chat with Replit Agent (or Claude) at the start of a new client website project to give it the same baseline conventions._

## How to use this document

Paste this whole file as context, then describe the new client (name, industry, services, brand colors if known, address/phone). The assistant should follow the same conventions below unless the client's needs differ.

---

## 1. Tech stack

- **React + Vite** for the frontend (static site, no SPA framework overhead)
- **Inline styles** (`style={{ ... }}`) for all component styling — not Tailwind/CSS modules. Keeps everything in one file, easy to hand-edit.
- **wouter** for client-side routing (lightweight alternative to react-router)
- **lucide-react** for icons
- Hosting: **Cloudflare Pages** (static build, deployed via GitHub integration)
- Optional: **Cloudflare Workers** for any small serverless needs (e.g. live data fetching) — free tier, no server to maintain

## 2. Standard site structure

Pages built for a typical local service business:
- **Home** — hero, trust badges, services preview, stats bar, CTA banner, Google reviews section, map/location CTA
- **Services** (with sub-pages per major service if the business has several)
- **Who We Are / About** — team grid with photos, bios, certifications
- **Contact** — split layout: contact form (left) + call/visit info cards (right)

Shared components: `Header` (sticky nav, logo, mobile menu), `Footer` (logo, address, quick links, hours), reusable `ContactBox` CTA component.

## 3. Branding conventions

- Define brand colors as constants at the top of the main file, e.g.:
  ```js
  const TEAL = "#37b5e6";
  const TEAL2 = "#0ea5e9";
  const DARK = "#0f172a";
  ```
- Use a gradient dark-navy hero section for page headers (`linear-gradient(160deg, #0f172a 0%, #1e3a5f 55%, #0d3050 100%)`) with a subtle dot-grid background pattern.
- Content max-width: use a single constant across all sections (this project used `1400px`) so changing site width is a single find/replace.

## 4. Logo & favicon — lessons learned

- **Always get a transparent-background PNG version of the client's logo.** If they only have a logo on a solid color background, run it through a background-removal tool — don't rely on `ImageMagick -transparent` fuzz matching, it leaves residue on logos with internal dark areas (e.g. inside letterforms). Use a proper background-removal tool instead.
- **Favicon gotcha:** browsers prefer SVG favicons over PNG when both are declared in `<link rel="icon">`. If you set a placeholder SVG favicon early and later replace it with a PNG logo, you MUST remove the old SVG link entirely — otherwise the SVG silently keeps showing.
- Favicon should be a square PNG (512x512), logo centered, transparent background. Don't assume a "dark preview thumbnail" means there's a background color — transparent PNGs often render dark in file-preview tools; verify by checking the alpha channel (`identify -verbose file.png | grep Alpha`) rather than trusting a visual preview against a dark background.
- Header logo: explicit `height` in CSS (e.g. `60px` desktop, `40px` on mobile via a media query), `width: auto`, no background/box-shadow on the `<img>` or its parent `<a>`.

## 5. Team / staff photos

- Client-provided photos straight from a phone or DSLR are often **huge** (4–18 MB each, 3000-6000px wide) — way oversized for a small avatar display. Always resize before use:
  ```bash
  magick "$f" -auto-orient -resize 400x600^ -gravity center -extent 400x600 -quality 88 -strip "$f"
  ```
  This auto-orients (fixes phone rotation metadata), resizes, crops to a consistent aspect ratio, and strips EXIF bloat. Cuts file size by ~99% with no visible quality loss at avatar sizes.
- Use a `photoPosition` field per team member (e.g. `"center 30%"`) to fine-tune crop framing per photo since faces aren't always centered the same way.

## 6. Reviews / social proof

- If the client has Google reviews, a `useState` + hardcoded fallback array of their best real reviews is often good enough for launch — avoids the complexity and cost of live API integration.
- If they want it **live**, options in order of simplicity:
  1. Backend route on the existing API server that calls Google Places API (needs `GOOGLE_PLACES_API_KEY` secret)
  2. Cloudflare Worker doing the same fetch, cached at the edge (free tier, no server to maintain) — cleaner if the client is already on Cloudflare
- Always keep a hardcoded fallback array so the section never breaks if the API call fails.

## 7. Contact forms

- Formsubmit.co AJAX endpoint is a fast, no-backend way to get a working contact form (no email server setup needed). POST directly from the React form.
- Standard fields: name, email, phone, optional company, required message/notes.

## 8. Deployment (Cloudflare Pages) — exact settings

| Setting | Value |
|---|---|
| Framework preset | None |
| Build command | `pnpm --filter @workspace/<artifact-slug> run build` |
| Build output directory | `artifacts/<artifact-slug>/dist/public` (note: `/dist/public`, not just `/dist` — verify against the actual Vite `outDir` config) |
| Root directory | leave blank (repo root) |
| `NODE_VERSION` env var | `24` |
| Production branch | `main` |

**Critical gotcha:** this project's `vite.config.ts` originally threw a hard error if `PORT` or `BASE_PATH` env vars were missing (they're always set by Replit's dev workflow but NOT by Cloudflare's build environment). Fix: make them optional with safe fallbacks:
```js
const port = Number(process.env.PORT ?? 3000);
const basePath = process.env.BASE_PATH ?? "/";
```
Check for this pattern any time a Replit-scaffolded Vite app needs to build on a third-party CI/host.

## 9. Static assets & custom domain

- Anything placed in the Vite `public/` folder is automatically served as a raw file at the site root — no server config needed for a pure static Cloudflare Pages deploy.
- Useful for things like a stable logo URL for third-party tools (e.g. invoicing software needs a public image URL): drop `invoice-logo.png` in `public/`, it's live at `https://domain.com/invoice-logo.png` after deploy.
- Custom domain setup: Cloudflare dashboard → Workers & Pages → project → Custom domains → add domain. If the domain is already on Cloudflare DNS, it wires up automatically.

## 10. Monorepo conventions (if using the same Replit pnpm-workspace template)

- Each site is an `artifacts/<slug>` package
- Root `replit.md` tracks project overview and user preferences
- Workflows auto-created/removed by the artifact system when directories are added/deleted — don't try to manually manage them with `removeWorkflow` if an artifact.toml exists there
- Full project typecheck: `pnpm run typecheck`

---

## Kickoff prompt template for a new client site

```
I'm building a website for [CLIENT NAME], a [INDUSTRY] business in [LOCATION].

Services: [LIST]
Brand colors: [HEX CODES or "match their existing logo"]
Pages needed: [Home / Services / About / Contact / etc.]
Logo: [attached / needs to be created]
Contact form: yes/no
Google reviews section: yes/no
Team/staff page: yes/no

Follow the conventions in the attached playbook document for stack, styling approach, logo/favicon handling, and deployment.
```
