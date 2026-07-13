# Curator website — update list (freemium + new features + Paddle)

_Drafted 2026-06-24. Source of truth for the changes: the app's feature gate
(`apps/desktop/ui/src/features.ts`) and `STATUS.md` in the app repo._

The site currently sells a **14-day trial → buy** model with **no free tier** and
describes only five features. The app has since moved to **freemium** — renaming is
**free forever**, and everything else is **Premium** — and shipped a large new
feature set. This list brings the website in line.

Prices are unchanged: **Yearly $9.99/yr**, **Lifetime $80** (current major only).
The only pricing change is **adding the Free level**.

---

## 1. The model change — add a Free level

**Today:** hero, pricing and copy all push "Download free trial / no card required",
implying the app is unusable after 14 days unless you pay.

**New story:** Curator is **free to rename, forever**. Premium unlocks online
matching, the collection and all the power features. The 14-day trial becomes a
trial **of Premium** — when it ends you drop back to the Free tier, you're never
locked out.

What this means on the page:
- Add a **third pricing card: Free — $0**, "Renaming, forever. No account, no card,
  no expiry."
- Reframe the hero CTA from _"Download free trial"_ → _"Download free"_ (keep a
  secondary "See Premium" / "See pricing" link).
- Keep "14-day Premium trial, no card" as a supporting line, not the headline.
- The nav "Free trial" button → **"Download free"**.

### What's Free vs Premium (from the app's gate — keep the site in lockstep)

**Free (no licence needed)**
- Smart / TV / Movie rename presets with live preview
- Move / copy / overwrite, safe renames, single-click undo of the last batch
- Local filename parsing (offline heuristics — episode/season/title)

**Premium (Trial or paid licence)** — the 23 gated features, grouped for the page:
- **Live matching & metadata** — TheTVDB · TheMovieDB · Trakt matching, the poster
  picker, multi-source compare, manual metadata overrides, artwork/posters
- **Your collection** — the poster-wall library, completion tracking,
  missing-episodes report, presentation mode
- **Automation** — watch folders, scheduled scans, Plex/Jellyfin/Emby refresh,
  webhooks, external hooks/scripts
- **Smart organisation** — duplicate detection, quality-upgrade detection, custom
  folder templates, rule-based routing
- **Reporting** — library-health dashboard, storage analytics, export
- **Formats & sidecars** — subtitle download, NFO sidecars, embedded artwork
- **Power user** — persistent history & undo, multiple profiles, CLI, scripting/macros
- **Anime** — AniDB ed2k hash matching, absolute-numbering, preferred fansub-group

> Note kept from current site: full studio **movie posters** switch on a little
> after launch; TV artwork is live now. Keep that caveat.

---

## 2. New features to surface on the page

The current `features` array in `index.astro` lists 5 items (matching, collection,
completion, presentation, control). These all stay. **Add new feature blocks (or a
condensed feature grid)** for the expansion set that isn't represented at all today:

- [ ] **Automation** — "Set it and forget it." Watch a downloads folder and Curator
      files new media the moment it lands; scheduled scans; refresh Plex/Jellyfin/Emby
      automatically; webhooks + hooks for your own scripts.
- [ ] **Smart organisation** — duplicate detection, automatic quality-upgrade prompts
      (keeps the best copy), custom folder templates and rule-based routing.
- [ ] **Reporting & health** — a library-health dashboard, storage analytics, and
      exportable reports.
- [ ] **Subtitles, NFO & artwork** — auto-download subtitles, write NFO sidecars and
      embed artwork for Plex/Kodi/Jellyfin.
- [ ] **Anime done right** — AniDB exact-hash matching, absolute-numbered shows
      (One Piece / Bleach) named correctly, preferred fansub-group handling.
- [ ] **Power tools** — persistent history with undo, multiple profiles, a CLI and
      scripting/macros.

**Decided (Stephen):** add these as **full alternating image/text blocks** like the
existing five (not a condensed grid) — extend the `features` array in `index.astro`.
Each new block needs a screenshot; capture any missing ones from the app/preview.

Marketing screenshots for several of these likely don't exist yet; check
`outputs/curator-marketing/` and the app's preview, capture what's missing.

---

## 3. Billing & payments — Paddle

Prices and Paddle products are **unchanged** ($9.99 yearly / $80 lifetime), so the
**Paddle catalogue needs no new product** — the Free tier has no SKU (it's just the
app with no licence). The work here is wiring, copy and verification, not new pricing.

- [ ] **Confirm the live Paddle wiring is actually deployed.** `README.md` still says
      the checkout is "BUILT BUT HELD BACK / uncommitted", but project memory records
      **Paddle live + accepting real payments since 2026-06-21** with the website Buy
      buttons live. One of these is stale — verify the deployed site and update the
      README. (The live values are already in `index.astro`: `paddleEnv=production`,
      `paddleToken=live_…`, the two `pri_…` ids.)
- [ ] **Remove the stale "sandbox" comments** in `index.astro` (the Paddle `<script>`
      comment still says "SANDBOX config… switch to production before deploying").
- [ ] **Premium naming in Paddle** — make sure the Paddle product/price display names
      read as "Curator Premium — Yearly" / "Curator Premium — Lifetime" so the
      checkout matches the new site language.
- [ ] **In-app upgrade path** — confirm the app's `UpgradePrompt` opens the live
      checkout (or the site `/#pricing`). Now that Free is a permanent tier, more users
      will hit the upgrade prompt; it must lead somewhere live. (App-side check, noted
      here so it isn't missed.)
- [ ] **Trial decision feeds billing copy** — if the 14-day Premium trial is kept,
      `terms.astro` §5 already leans on "we offer a free trial first"; reword slightly
      so it also acknowledges the permanent Free tier. If the trial is dropped, remove
      trial language from terms + pricing.
- [ ] Webhook → licence activation chain unchanged; no action unless prices/SKUs change.

---

## 4. Page-by-page edit checklist

**`src/pages/index.astro`**
- [ ] Add Free pricing card (3-up grid; make Lifetime "Best value" still featured).
- [ ] Hero CTA + nav button: "free trial" → "free" (free forever).
- [ ] Reword `cta-note` from "14-day free trial · no card required" to lead with free.
- [ ] Add the new-features content (see §2).
- [ ] Update the JSON-LD `offers` to include a $0 offer **only if** we want Google to
      show "Free" — optional; a free offer with `price: "0"` is valid Schema.org.
- [ ] Remove the stale sandbox comment on the Paddle script.

**`src/pages/vs-filebot.astro`**
- [ ] Line ~48: pricing answer still says "$9.99 a year or $80 once… 14-day free
      trial" with no mention of free — add "free to rename, forever; Premium unlocks…".
- [ ] Lines ~122/127: "Download the free trial" CTA → "Download free".
- [ ] Add a comparison row: **"Free tier"** — Curator ✓ (renaming free forever) vs
      FileBot (paid/donation-gated). Strong differentiator worth its own row.

**`src/pages/terms.astro`**
- [ ] §2/§3/§5: acknowledge the **permanent Free tier** alongside trial + paid; the
      current wording implies everything is trial-then-pay.

**`README.md`**
- [ ] Update the "⚠️ Placeholders" Paddle row to reflect live status (per §3).

**`src/pages/privacy.astro` / `contact.astro`**
- [ ] No model/feature change needed; only touch if the `support@yourcurator.app`
      routing or feature list is referenced (it isn't materially).

---

## 5. Verify before publishing
- [ ] `npm run build` clean.
- [ ] Click both Buy buttons → Paddle checkout opens on **production** with correct
      prices.
- [ ] Lighthouse / structured-data check still valid after JSON-LD edit.
- [ ] Visual pass at mobile width (the new 3-up pricing grid collapses to 1 column —
      CSS already has the `@media (max-width: 640px)` rule, confirm with the new card).

---

## 6. Licence server — no change needed

The freemium move and the new features require **no licence-server work**:
- Entitlement is **tier-based and client-side**. The server signs a licence
  carrying a `plan` (`trial` / yearly / lifetime) + validity; it does **not**
  enumerate features. The client maps tier → the feature roster locally
  (`gate.rs` → `contracts::all_feature_keys()`), so the 23 new premium features
  never touched the server.
- The server was **already built freemium** (`gate.rs`: plain renaming is always
  free and deliberately isn't a feature key). Trial/Active → premium; everything
  else → free.
- **Free = zero server contact** — free renaming is fully local; free users never
  hit the licence server or metadata proxy. No new endpoint, no added load.
- Prices/SKUs unchanged ⇒ `/trial`, `/activate`, Paddle-webhook mint and
  `/refresh` proxy-token flows all stand. There is no "Premium" plan server-side
  — it's `trial`/yearly/lifetime; "Premium" is only the marketing label.

_Unrelated, tracked elsewhere:_ the app's `STATUS.md` still lists deploy
preconditions for the **next app release** (`chown /data` on the Fly volume,
`TRUSTED_CLIENT_IP_HEADER`). Not part of this website update.

## 7. Decisions
1. ~~Keep the 14-day Premium trial, or drop it?~~ **DECIDED: keep it** — "try Premium
   free for 14 days, then stay on Free or upgrade." Trial language stays in hero,
   pricing and terms §5 (just add the permanent-Free acknowledgement).
2. ~~Five alternating blocks or a condensed grid?~~ **DECIDED: full alternating blocks**
   (see §2).
3. **Currency** — show $ only (current), or add £ for the UK audience? (Paddle
   localises at checkout regardless.) — _open._
4. **Free tier name on the card** — "Free" vs "Starter" vs "Basic". — _Recommend: "Free"; open._
