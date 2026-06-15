import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Static site — no adapter needed; Cloudflare Pages serves the `dist/` output.
// `site` is the live domain, used for canonical URLs, absolute social-card links,
// and the generated sitemap.
export default defineConfig({
  site: "https://yourcurator.app",
  integrations: [sitemap()],
});
