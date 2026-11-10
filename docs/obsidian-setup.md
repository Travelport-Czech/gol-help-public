# Editing the whole site in Obsidian

The live portal is generated from markdown in this repository. Open the
**repository folder** as an Obsidian vault (not only `content/docs`). Code
folders are hidden via Obsidian excluded files.

Live site: https://gol-help-public.vercel.app/portal/

## One-time setup

1. Open Obsidian.
2. **Open folder as vault** → select
   `C:\Users\DanielaVokálová\Desktop\Prace\new_help\gol_help_public`.
3. Open `content/00 Start here.md`.

Recommended community plugin: **Obsidian Git** (commit and push from Obsidian).
Core plugin **Templates** should point at `content/_templates`.

`.obsidian/workspace.json` stays local. Shared vault settings (`app.json`,
templates, excluded files) are committed.

## What maps to what

| Site | File |
|---|---|
| Home hero, chips, walkthroughs, most visited | `content/Home.md` (Properties) |
| Topic tile + overview page | `content/docs/<nn Topic>/_index.md` |
| Article at `/portal/<topic>/<slug>/` | `content/docs/<nn Topic>/<slug>.md` |
| What's New | `content/whats-new/release-notes.json` |
| Images | `public/images/docs/…` linked as `/images/docs/file.png` |

The first line of each article must be a single `# Title` (or set `title` in
Properties). The site strips the H1 and uses it as the page heading. GitHub
flavored markdown works (tables, checklists, strikethrough). HTML is allowed
for embeds (`iframe`, `video`).

## New articles

1. Create `content/docs/<nn Topic>/<slug>.md` (lowercase, hyphenated filename).
2. Insert the **New article** template.
3. Set `title` and `order` in Properties.
4. Run `npm run check:content` if you have Node available.

You do **not** edit `app/portal/data.ts`. The menu is built from the files
on disk (`npm run content:sync` / `prebuild`).

## Local preview

```
npm run content:sync
npm run dev
```

Open http://localhost:3000/portal/

## Publish

Commit markdown → push to `main` (or open a PR). GitHub Pages rebuilds
automatically. See `docs/editorial-workflow.md`.
