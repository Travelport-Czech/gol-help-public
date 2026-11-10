# Editorial Workflow

## Authoring

The whole portal is edited in Obsidian. Open this repository as a vault and
start from `content/00 Start here.md`. Full map: `docs/obsidian-setup.md`.

- Articles live in `content/docs/<nn Topic>/<slug>.md`
- Topic tiles live in that folder's `_index.md`
- Home page copy lives in `content/Home.md`

New articles appear in the menu automatically. Do not edit `app/portal/data.ts`
for content changes.

Run `npm run check:content` before opening a PR.

## Standard Flow

1. Author updates markdown in a branch (or via Obsidian Git).
2. Author opens Pull Request.
3. Reviewer checks clarity, structure, and links.
4. Reviewer checks the GitHub Actions build / Pages preview.
5. PR is merged to `main`.
6. GitHub Pages publishes production.

## Fast Fix Flow

For urgent fixes:

1. Open a small PR with an explicit "hotfix" label.
2. Require one fast approval.
3. Merge immediately after checks pass.
