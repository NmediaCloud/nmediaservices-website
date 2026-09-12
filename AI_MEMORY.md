# AI Context & Memory

This file serves as persistent memory and project context for the AI assistant. It ensures that across different sessions, the core project rules, design instructions, and ongoing tasks are easily accessible.

Last updated: **2026-09-11** (Soft Executive Orange migration).

## Project Overview

- **Project Name:** Nmediaservices Responsive Website
- **Tech Stack:** React 19, Vite 8, Tailwind CSS v4, React Router v7
- **Type:** Single-Page Application (SPA)
- **Domain:** `nmediaservices.com` (apex forwards to `www.`)
- **Hosting:** GitHub Pages via `.github/workflows/deploy.yml` on push-to-main
- **Repo:** [github.com/NmediaCloud/Nmediaservics](https://github.com/NmediaCloud/Nmediaservics)

## Core Design Rules (The "Digital Architect")

- **Dark Mode Only:** The canvas background is strictly `#121317`. Avoid pure black.
- **No Solid Lines:** 1px solid borders for sectioning are strictly prohibited. Use tonal background shifts (e.g., `#121317` to `#1a1b1f`) to separate content elements.
- **Typography Engine:** Space Grotesk for Headings/Display (editorial impact) and Inter for Body/Label text (legibility).
- **Depth & Layers:** Use surface-container nesting to simulate depth. Instead of flat dropshadows, use the "Glass & Gradient" rule with high-blur (e.g., `backdrop-filter: blur(20px)` at 60% opacity) or subtle scaling.
- **Fluid UI:** All interactive elements must bounce/scale slightly on hover/action using a crisp transition curve: `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Single accent:** Brand orange `#BF4E10` only — never multi-colour, never blue or
  navy. Used for pills, dividers, hover accents, CTAs, icons and accent text alike.
- **Type ramp:** display `h1`/`h2` `#000000`, `h3`/`h4` `#2A2622`, body `#4E4A46`,
  secondary `#6E6862`. Hierarchy comes from tone as well as size.
- **Accessibility is a hard constraint:** every pair is WCAG AA verified. Never use a
  pale orange for text or as a button fill, and never dim text with opacity
  modifiers — THEME.md records exactly what fails and why.

## Folder structure (current)

```
Nmediaservices.com_Website/
├── AI_MEMORY.md          ← you are here
├── THEME.md              ← AUTHORITATIVE palette + contrast rules
├── theme/                ← portable house theme, reusable in other projects
│   └── soft-executive-orange.css
├── DESIGN.md             ← structural design rules (colour sections superseded)
├── README.md             ← public-facing project intro
├── Assets/               ← brand logos (Nmedia_logo.png, logo.png)
├── Pages/                ← content-folder placeholders (Analyst Skills, Marketing
│                            Social Media, Predictive Analysise Mira, UGC creatior
│                            Pipeline) — currently empty content slots
├── public/
│   ├── CNAME             ← www.nmediaservices.com
│   ├── favicon.svg, icon.png, icons.svg
│   └── articles/         ← STATIC pipeline articles (added 2026-04-26)
│       ├── 00_Info_Input_Collection.html ... UGC_Pipeline.html  (11 files)
│       ├── articles.json ← manifest the React app fetches
│       ├── _shared/      ← article CSS + placeholder SVG
│       └── images/       ← 20 article screenshots
├── src/
│   ├── App.jsx           ← React Router root (Home, IPSeries, Commercials)
│   ├── components/
│   │   └── PipelineArticles.jsx    ← NEW · homepage article strip
│   ├── pages/
│   │   ├── Home.jsx (responsive switch)
│   │   ├── HomeDesktop.jsx
│   │   ├── HomeMobile.jsx
│   │   ├── IPSeries.jsx
│   │   └── Commercials.jsx
│   └── assets/           ← hero.png + framework svgs
├── package.json
└── vite.config.js
```

## Current Project State

- [x] Initial React/Vite/Tailwind setup
- [x] Global design tokens and constraints recorded (`DESIGN.md`)
- [x] Project description (`README.md`)
- [x] Three core pages: Home (Desktop+Mobile), IPSeries, Commercials
- [x] Custom domain + HTTPS active on `www.nmediaservices.com`
- [x] **Pipeline articles strip on homepage** (added 2026-04-26)
  - 11 article HTMLs staged in `public/articles/`
  - `articles.json` manifest serves the homepage component
  - `<PipelineArticles />` component renders text-only cards in a horizontal-scroll strip between Capabilities and the CTA
  - Mounted in both `HomeDesktop.jsx` and `HomeMobile.jsx`
  - Each article has a YouTube embed slot (`data-yt-id="REPLACE_ME"`) ready to wire when videos go live
- [x] Apex domain (`nmediaservices.com`) forwards to `https://www.nmediaservices.com` via GoDaddy 301 + auto SSL

## Articles workflow

⚠️ **Do not run the article generator without reading this.** Verified 2026-09-11.

The article HTMLs in `public/articles/` are *generated*, but the published copies
have since been edited in place and the generator is now **lossy**. Source lives at:

```
D:/Projects/2026/01_Pipe_Story_Board_Generator/Articles to Publish/
```

(The path in this file previously read `Story_Board_Generator/` — that folder was
renamed, which left `publish_to_website.py` pointing at a non-existent directory.
Fixed 2026-09-11.)

### What a full regeneration destroys

Running the chain against the current source will:

- **Wipe all 10 wired YouTube IDs**, resetting every `data-yt-id` to `REPLACE_ME`
  and every `youtube_id` in `articles.json` to `""`. The videos were wired into the
  *published* files, never back-ported to source.
- **Replace two images with much smaller source copies** — `02a.jpg`
  (4.5 MB → 147 KB) and `ugc_a.png` (4.7 MB → 56 KB).
- **Not touch** `CreativeFlow.html`, `Pipeline_Production_System.html` or
  `podcast/*` — those are outside the generator's `ARTICLES` list and are safe.

Before regenerating: back-port the video IDs and images into
`Articles to Publish/`, or expect to restore from git afterwards.

### The chain (four scripts, not one)

`publish_to_website.py` alone produces articles with **no site header** — the header
is added by separate post-processors that must run after, in order:

```bash
cd "D:/Projects/2026/01_Pipe_Story_Board_Generator/Marketing"
export PYTHONIOENCODING=utf-8     # the scripts print → and crash on cp1252
python publish_to_website.py
python inject_favicon.py
python inject_gtag.py
python inject_header.py
python inject_home_btn.py         # its OLD_TAIL must match inject_header.py's output
```

`inject_home_btn.py` matches `inject_header.py`'s email anchor as a literal string.
If you edit the header, re-derive `OLD_TAIL` or the button silently stops injecting.

### Theme status

The generator chain was migrated to Soft Executive Orange on 2026-09-11 —
`Articles to Publish/_shared/article.css`, `_apply_branding.py`, `inject_header.py`
and `inject_home_btn.py` all carry the light palette. **That folder is not a git
repo**, so those edits are unversioned and on disk only. See [THEME.md](THEME.md).

## Deploy

`.github/workflows/deploy.yml` triggers on push to `main`:

```
checkout → setup Node 20 → npm install → npm run build →
upload dist/ → deploy-pages
```

`public/articles/` gets copied into `dist/articles/` verbatim by Vite, so the static articles ship alongside the React app.

## Ongoing Tasks & Roadmap

- [ ] Generate first promo video from a per-module kit (in `Story_Board_Generator/Marketing/article_video_kits/`), upload to YouTube, wire `data-yt-id` + manifest entry on the matching article
- [ ] Visually verify the article strip on real mobile hardware (currently relies on `flex overflow-x-auto snap-mandatory` — desktop is verified, mobile only logically tested)
- [ ] Decide on integration depth for articles (currently text-only cards opening static HTML in new tabs):
  - **Option A** — small back-link bar at the top of each article (10 min)
  - **Option B** — render articles inside an iframe in a React route `/articles/:slug` (1 hour)
  - **Option C** — convert each article to a React component using site's tailwind tokens (1 day, fully consistent)
- [ ] Populate the four empty `Pages/<service>/` content slots when those service pages are written

## Core invariants (do not break)

- Brand orange is `#BF4E10`. Don't use any other accent colour, and don't lighten it
  — the pale variants fail contrast on the warm-white canvas.
- Headlines: Space Grotesk Bold. Body: Inter. No third font.
- Articles' brand chip (`<a class="nm-brand">`) uses no `target` attribute — clicks navigate in-place so the chip works as a "back to home" link.
- The `articles.json` manifest is the public API the homepage depends on. Don't rename fields without updating `src/components/PipelineArticles.jsx`.
- `_shared/article.css` defines `.video-embed`, `.video-frame`, `.video-poster` styles. Don't strip these unless you're also removing the embed slots from the article HTMLs.

---

*Note to AI Assistant: Always refer to this document for styling philosophy and core guidelines when generating or refactoring code within this project.*
