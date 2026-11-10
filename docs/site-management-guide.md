# Managing the GOL IBE Help Portal

The one page to start from if you need to change content, check whether the
site deployed, or figure out which of the other docs in this folder to read.

- **Live site:** https://gol-help-public.vercel.app/portal/
- **Repo:** https://github.com/Travelport-Czech/gol_help_public (private)
- **Hosting:** Vercel (team `cee-weby`, project `gol-help-public`) via its Git
  integration — every commit that lands on `main` is built and deployed to
  production automatically; other branches and PRs get a preview URL.

## Checking whether a deploy went through

1. Open the commit on GitHub (or the PR): the **Vercel** status check shows
   a green check (deployed), red X (build failed — click *Details* for the log)
   or a yellow dot (still building).
2. Or open the Vercel dashboard of the project `gol-help-public`.
3. The **docs-ci** GitHub Action additionally runs the build and the broken-link
   check on every PR and push to `main`.

A build typically finishes in 1-2 minutes.

## Editing an existing article

1. Open this repository as an Obsidian vault and edit the markdown file
   under `content/docs/`. Full setup: [`obsidian-setup.md`](./obsidian-setup.md).
2. Save. Existing pages pick up text changes with no extra step.
3. Commit, push, open a PR, merge to `main` per
   [`editorial-workflow.md`](./editorial-workflow.md).

## Adding a brand-new article

1. In Obsidian, create `content/docs/<nn Topic>/<slug>.md` and insert the
   **New article** template. First heading must be `# Title`. Set `order` in
   Properties so it appears in the right place in the menu.
2. Run `npm run check:content` — it flags missing titles and broken Home.md
   links. Fix anything it reports.
3. Commit, push, open a PR, merge — see
   [`editorial-workflow.md`](./editorial-workflow.md).

   You do not edit `app/portal/data.ts`. The menu is generated from the files.

## Publishing a "What's New" item

Release notes are a separate system from regular articles (JSON-based, not
individual markdown files), with its own 3-step manual-gate pipeline so
nothing publishes by accident:

```bash
npm run whats-new:add       # log a raw news item (any language, any source)
npm run whats-new:review    # mark it internal-only or customer-facing, write the public text
npm run whats-new:publish   # move approved items into the live release-notes.json, commit locally
```

Full details: [`whats-new-workflow.md`](./whats-new-workflow.md). There's also
a copy-paste LLM prompt for turning a raw release-notes email/doc into the
right JSON shape: [`whats-new-triage-prompt.md`](./whats-new-triage-prompt.md).

## Running it locally before you push anything

```bash
npm install
npm run dev      # http://localhost:3000 — preview your changes live
npm run build    # must succeed — this is exactly what Vercel runs
npm run check:links
```

## Map of the other docs in this folder

| File | What it's for |
|---|---|
| [`obsidian-setup.md`](./obsidian-setup.md) | Setting up and writing articles in Obsidian |
| [`editorial-workflow.md`](./editorial-workflow.md) | The PR/review steps between writing and merging |
| [`whats-new-workflow.md`](./whats-new-workflow.md) | The What's New / release-notes pipeline in detail |
| [`whats-new-triage-prompt.md`](./whats-new-triage-prompt.md) | LLM prompt to turn raw release notes into publishable JSON |
| [`developer-guide.md`](./developer-guide.md) | Deeper technical reference: file structure, styling, embedding images/video, adding a whole new section |
| [`style-guide.md`](./style-guide.md) | Writing voice/tone conventions |
| [`vercel-setup.md`](./vercel-setup.md) | How the Vercel project is connected (Git integration) |
