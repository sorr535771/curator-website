import { defineConfig } from "astro/config";

// Static site — no adapter needed; Cloudflare Pages serves the `dist/` output.
// `site` is a placeholder until the real domain is set (used for canonical URLs).
export default defineConfig({
  site: "https://curator.app",
});
