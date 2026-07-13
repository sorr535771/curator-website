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
    slug: "auto-extract-archives",
    date: "2026-07-13",
    dateDisplay: "13 July 2026",
    title: "Curator now unpacks your archives for you",
    excerpt:
      "Drop in a .zip, .rar or .7z — or point a watch folder at one — and Curator extracts it, then matches and renames the contents like any other file.",
    body: [
      "A lot of downloads still arrive wrapped in an archive — a .rar set, a .zip, a .7z. Until now you had to unpack those yourself before Curator could do anything with them. Not any more.",
      "Turn on archive extraction and Curator handles the whole thing: drop an archive into the app, or let one land in a watch folder, and it unpacks it, works out what the contents actually are, and renames and moves or copies them just like any other file. It reads .zip, .rar (including multi-part sets), .7z and .tar/.gz, and it leaves the original archive exactly where it was.",
      "The workflow is the one you'd want: drop in, extract, match the name, rename and file. Extraction is a Premium feature and is off by default — switch it on under Automation. It's in the current build and will ship in the public release at launch.",
    ],
  },
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
