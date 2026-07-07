// Site-wide launch switch. The product hasn't publicly launched yet: while
// false, every buy/download CTA site-wide shows register-your-interest /
// launching-soon copy instead, and Paddle checkout is not loaded.
// ON LAUNCH DAY: flip to true AND fill in the download URLs in
// src/pages/index.astro (`downloadUrls`).
export const launched = false;
