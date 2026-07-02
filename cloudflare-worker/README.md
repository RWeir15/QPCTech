# QPCTech Reviews Worker

Cloudflare Worker that fetches QPCTech's Google reviews and caches them at the edge for 6 hours.

## Deploy

```bash
cd cloudflare-worker
npx wrangler deploy
```

## Secrets

Set your Google Places API key as a Cloudflare secret (never in `wrangler.toml`):

```bash
npx wrangler secret put GOOGLE_PLACES_API_KEY
```

Optionally pin the Place ID so the worker skips the lookup on every cold start:

```bash
npx wrangler secret put GOOGLE_PLACE_ID
# paste the Place ID from the first deploy's logs or from Google Maps
```

## Connect via GitHub

In the Cloudflare dashboard → Workers & Pages → your worker → Settings → Git:
- Link to this repo
- Set build directory: `cloudflare-worker`
- Secrets are set once in the dashboard and persist across deploys

## Frontend env var

In your Vite build set:

```
VITE_REVIEWS_WORKER_URL=https://qpctech-reviews.<your-account>.workers.dev
```

The site will call this URL for live reviews and fall back to the hardcoded set if unreachable.
