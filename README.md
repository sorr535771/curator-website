# Curator — marketing website

A static **Astro** site for the Curator landing page. No backend, no adapter —
it builds to plain HTML/CSS/JS in `dist/`, which is ideal for **Cloudflare Pages**
(free, fast, custom domains included).

## Run locally
```sh
cd "CODE/Curator Website"
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built dist/
```

## Deploy to Cloudflare Pages
Two options — either works.

**A. Connect a Git repo (recommended — auto-deploys on push):**
1. Push this folder to a GitHub/GitLab repo.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Add your custom domain under the project's **Custom domains** tab.

**B. Direct upload (no Git):**
```sh
npm run build
npx wrangler pages deploy dist --project-name curator
```
(First run will prompt you to log in to Cloudflare.)

## ⚠️ Placeholders to set before launch
Everything below is marked with `PLACEHOLDER` comments in the code.

| What | Where | Notes |
|------|-------|-------|
| ~~Pricing~~ ✅ DONE | `src/pages/index.astro` → `yearlyPrice` / `lifetimePrice` | Yearly $9.99/yr + Lifetime $80 (current major only). |
| **`support@yourcurator.app` email routing** | Cloudflare dashboard → **Email → Email Routing** | ⚠️ REQUIRED. The `/contact` page and the privacy policy both point at `support@yourcurator.app`. Until a Cloudflare Email Routing rule forwards it to a real inbox, those emails bounce. Free; no code change. |
| **Download links** | `index.astro` → the three `#` hrefs in the Download + hero sections | Point at the signed installers (host on **GitHub Releases** or Cloudflare R2). |
| ~~Buy / subscribe (Paddle)~~ ✅ LIVE | `index.astro` frontmatter (`paddleEnv` / `paddleToken` / price ids) + the Paddle `<script>` at the bottom + the `.buy` buttons | ✅ LIVE / production, accepting real payments (since 2026-06-21). `paddleEnv=production`, the live token and the two `pri_…` ids are committed in `index.astro`. Keep the `yourcurator.app` domain approved in the Paddle dashboard so the hosted checkout keeps loading. |
| ~~Domain~~ ✅ DONE | `astro.config.mjs` → `site` | Set to `https://yourcurator.app`; canonical + absolute `og:`/`twitter:` URLs derive from it. |
| **OG / social image** | `index.astro` `og:image` | Currently reuses a collection screenshot; a dedicated 1200×630 card is nicer. |
| **Logo / favicon** | `public/logo.png`, `public/favicon.png` | Using the app icon — fine, but a wordmark could be added. |

## Assets
`public/img/` holds the marketing screenshots resized to 1500px for the web (sources
live in `outputs/curator-marketing/`). `public/video/adding-media.mp4` is the
adding-media demo, transcoded to ~8 MB H.264 for an autoplaying hero loop. The
heavier presentation video isn't on the page (a still is used instead) to keep it light.

## Stack
Astro 5, static output, hand-written CSS (system font, Apple-like). One page
(`src/pages/index.astro`); all styling is in its `<style is:global>` block.
