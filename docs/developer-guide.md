# Developer Guide — GOL IBE Help Portal

Technical reference for the portal. Content editing itself is described in
[`obsidian-setup.md`](./obsidian-setup.md) and [`site-management-guide.md`](./site-management-guide.md).

---

## Tech stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router, static export `output: "export"`), versions pinned in `package.json` |
| Language | TypeScript |
| Styling | CSS Modules (`app/portal/*.module.css`) + global CSS (`app/globals.css`) |
| Markdown rendering | `react-markdown` + `remark-gfm` + `rehype-raw` + `rehype-sanitize` |
| Search | `minisearch` over a generated index (title, tags, topic, article text) |
| Hosting | Vercel Git integration — every push to `main` deploys production (https://gol-help-public.vercel.app) |

---

## File structure

```
├── app/
│   ├── page.tsx                      # product landing page (/)
│   ├── [section]/…                   # redirects of old URLs /<topic>/<slug> -> /portal/<topic>/<slug>
│   ├── portal/
│   │   ├── layout.tsx                # sidebar, mobile menu, floating Support button
│   │   ├── page.tsx                  # portal home (search, topic tiles, panels)
│   │   ├── [category]/page.tsx       # topic page (content of _index.md + list of articles)
│   │   ├── [category]/[slug]/page.tsx# article page
│   │   ├── _articlePageContent.tsx   # shared article/topic page layout
│   │   ├── release-notes/            # What's New (content/whats-new/release-notes.json)
│   │   ├── forms/                    # partner order forms (noindex, linked from the home page)
│   │   └── data.ts                   # types + re-export of the generated data (do not add menu items here)
│   ├── sitemap.ts / robots.ts
│   └── globals.css
├── components/
│   ├── MarkdownBody.tsx              # markdown -> sanitized HTML
│   ├── PortalSearch.tsx              # search box in the article header
│   ├── ArticleVideoPanel.tsx         # video tiles, only for articles with `videos:`
│   └── ShareButton.tsx, CeeBrand.tsx, ZendeskWidget.tsx …
├── content/                          # Obsidian vault = all site content
│   ├── Home.md                       # home page copy (hero, chips, most visited, walkthroughs, partner forms)
│   ├── docs/<nn Topic>/_index.md     # topic tile + topic page
│   ├── docs/<nn Topic>/<slug>.md     # article
│   ├── docs/_inbox/                  # old imported texts, NOT published
│   └── whats-new/release-notes.json
├── lib/
│   ├── content.ts                    # reads markdown from disk at build time
│   ├── useHelpSearch.ts              # client-side full-text search hook
│   └── generated/                    # written by scripts/generate-site-data.mjs
└── scripts/
    ├── generate-site-data.mjs        # content/ -> lib/generated/site-data.ts + search-index.json (runs before dev/build)
    ├── check-content-sync.mjs        # npm run check:content
    ├── check-links.mjs               # npm run check:links (after build)
    └── whats-new/                    # npm run whats-new:add|review|publish
```

---

## How articles work

- File `content/docs/05 Prices & Markup/service-fees.md` -> URL `/portal/prices/service-fees/`
  (topic slug comes from `slug:` in the folder's `_index.md`).
- Frontmatter: `title`, `order`, optional `videos: [{label, youtubeId}]`.
- Body starts with one `# Title` (rendered as the page `<h1>`), then a `<!-- tags: a, b -->`
  comment. Tags are used by the search.
- The menu, topic tiles and search index are generated from the files — never edit
  `app/portal/data.ts` for menu entries.

### HTML in articles

Raw HTML is allowed but **sanitized**: `<script>`, `<style>`, `<form>`, event handlers
(`onclick` …) and `javascript:` links are removed. Allowed extras over the GitHub-style default:
`<iframe>` (only `https://` YouTube / youtube-nocookie / Vimeo player), `<video>`, `<source>`,
`<div align>`. To allow another iframe host, add it to `IFRAME_HOSTS` in `components/MarkdownBody.tsx`.

### Videos

Add to the article frontmatter:

```yaml
videos:
  - label: How to create a user
    youtubeId: VIDEO_ID
```

The video panel is shown only on articles that have at least one video.

---

## Checks before pushing

```bash
npm run build          # generate + static export to out/
npm run check:links    # broken links inside articles
npm run check:content  # topics valid, Home.md links resolve
```

`.github/workflows/docs-ci.yml` runs build + link check on every PR and push to `main`.

---

## Deployment

Vercel (team `cee-weby`, project `gol-help-public`) is connected to the repo through the Vercel
GitHub app. Push to `main` = production deploy, PR/branch = preview deploy. There is no deploy
workflow or token in the repo. Set `NEXT_PUBLIC_SITE_URL` in Vercel if a custom domain is added
(sitemap and metadata use it; otherwise the Vercel production domain is used).

---

## Styling

| File | Purpose |
|------|---------|
| `app/globals.css` | CSS variables (`--navy`, `--orange` …), article prose styles, breadcrumb |
| `app/portal/portal-layout.module.css` | Sidebar, article page, video panel, footer |
| `app/portal/portal.module.css` | Portal home page |

---

## Adding a new topic

1. Create `content/docs/<nn Topic>/_index.md` with frontmatter `icon, name, desc, slug, order`.
2. Add articles to the folder.
3. `npm run build` — the topic appears in the tiles, sidebar, search and sitemap.
