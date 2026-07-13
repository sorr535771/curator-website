// News & announcements data. Shared by the /news index and the per-post
// permalink pages (/news/<slug>), so each post has its own shareable URL with
// proper link-preview metadata.
//
// To add a post: prepend an entry to `posts` (newest first). `excerpt` is a
// one-line summary used as the list teaser and the post page's meta description
// (keep it under ~160 chars for search/social).
export type Post = {
  slug: string;
  date: string; // ISO date for <time datetime>
  dateDisplay: string; // human date, British style
  title: string;
  excerpt: string;
  body: string[]; // paragraphs
};

export const posts: Post[] = [
  {
    slug: "online-matching-free",
    date: "2026-07-12",
    dateDisplay: "12 July 2026",
    title: "Online matching is now included in the free tier",
    excerpt:
      "Curator's free tier now matches your files against the online databases — real titles and correct episode numbering, not just offline filename guesses.",
    body: [
      "Curator's free tier now matches your files against the online databases. Drop in a folder of cryptically-named downloads and the free app looks each one up properly — real show and film titles and the correct season and episode numbering — rather than making tidy guesses from the filename alone. (Posters and artwork stay a Premium feature.)",
      "Until now, online matching sat with the Premium features and the free tier relied on offline filename parsing. Matching is the heart of the app, though, and you shouldn't need a trial to see it work properly. So renaming and online matching are both free — forever, with no account and no card.",
      "Premium stays as it was for everything beyond the rename: subtitles, artwork and NFO files, the browsable collection and its library tools, network poster mode, duplicate detection and health reports. If all you want is your files named correctly, the free tier now does the whole job. The change is in the current build and will be in the public release at launch.",
    ],
  },
];

export const postBySlug = (slug: string): Post | undefined =>
  posts.find((p) => p.slug === slug);
