import { defineConfig } from "astro/config";

// Static site — no adapter needed; Cloudflare Pages serves the `dist/` output.
// `site` is the live domain, used for canonical URLs + absolute social-card links.
export default defineConfig({
  site: "https://yourcurator.app",
});
