# gol_help_public

GOL IBE help portal. Live site: https://gol-help-public.vercel.app/portal/

## Stack

- Next.js (App Router, static export), versions pinned in `package.json`
- Markdown content in `content/` — edited in Obsidian
- Vercel Git integration: every push to `main` deploys production, branches/PRs get a preview

## Quick Start

1. Install dependencies: `npm install`
2. Run locally: `npm run dev` → http://localhost:3000/portal/
3. Edit content in Obsidian: open this repository as a vault and start from
   `content/00 Start here.md` (see `docs/obsidian-setup.md`).

Articles live in `content/docs/<nn Topic>/<slug>.md` and appear on the site at
`/portal/<topic>/<slug>/`. The menu and search index are generated from those files.

## Before pushing

`npm run build`, then `npm run check:links` and `npm run check:content`.

## Docs

- Site operations: `docs/site-management-guide.md`
- Technical reference: `docs/developer-guide.md`
- Editorial guide: `docs/style-guide.md`
