# Start here — edit the GOL IBE help site in Obsidian

This vault **is** the website. Folders on the left are the same topics as on the live portal. Saving a note is editing the live page (after you commit and push).

Live site: https://gol-help-public.vercel.app/portal/

## Where to click

| What you want to change | Open this |
|---|---|
| Home page headline, search chips, walkthroughs, most visited | `content/Home.md` — use **Properties** at the top |
| A topic tile (icon, name, description) | `content/docs/…/_index.md` Properties |
| An article | The note inside that topic folder |
| What's New on the home page | `content/whats-new/release-notes.json` |
| Screenshots | `public/images/docs/` — then link as `![](/images/docs/your-file.png)` |

## Edit an existing article

1. Open the topic folder (for example `01 Agency`).
2. Open the article.
3. Write in English, same as the live site.
4. Keep a single `# Title` at the top. The site uses that as the page heading.
5. Save (`Ctrl+S`).

## Add a new article

1. In the topic folder, create a new note. Name the file in lowercase with hyphens — that becomes the URL (`working-hours.md` → `/portal/agency/working-hours`).
2. Insert the **New article** template (Templates in the left sidebar, or `Ctrl+P` → *Insert template*).
3. Fill in `title` and `order` in Properties. `order` is the position in the menu (1, 2, 3…).
4. Write the page. No extra code file is needed — new notes show up in the menu automatically.

## Add a YouTube video to the right-hand panel

In the article Properties:

```yaml
videos:
  - label: Short video title
    youtubeId: dQw4w9WgXcQ
```

Use only the YouTube **id** (the part after `v=`), not the full URL.

## Publish to the live site

1. Commit the markdown files (Obsidian Git: *Commit-and-sync*, or ask Cursor / a developer).
2. Push to `main` (or open a pull request if your team reviews first).
3. GitHub Actions rebuilds the site in about 1–2 minutes.

If you want to preview on this computer first:

```
npm run content:sync
npm run dev
```

Then open http://localhost:3000/portal/

## Do not edit

Anything under `app/`, `lib/`, `components/` is website code, not help text. Those folders are hidden in this vault on purpose.
