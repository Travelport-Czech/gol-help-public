# What's New pipeline

Sorts raw news items (Slack, email, internal docs — any language) into the
portal's public "What's New" section (`app/portal/data.ts` → `RELEASE_NOTES`,
sourced from `content/whats-new/release-notes.json`). Every item is manually
checked before it can reach customers — nothing publishes itself.

## Flow

```
add  →  review  →  publish
```

### 1. Add a raw item

```
npm run whats-new:add
```

Prompts for source, original language, and the raw text (paste as-is, any
language). Lands in `content/whats-new/drafts.json` with `status: "new"` and
no visibility decision — that call is never made automatically.

### 2. Review (the manual gate)

```
npm run whats-new:review
```

Walks through every unreviewed draft one at a time:

- **Internal** → marked `status: "internal"` and stops there. Never touches
  the release notes. Kept in the file only as an audit trail of what came in
  and why it was held back.
- **External** → you write (or rewrite, not just translate) the clear
  English version customers should read, then decide whether to approve it
  now or leave it as `needs_translation` to revisit later.

Progress saves after every single decision, so quitting partway never loses
work — re-running `review` picks up where you left off.

### 3. Publish

```
npm run whats-new:publish
```

Takes only drafts that are both `status: "approved"` and
`visibility: "external"` (set exclusively by a human in step 2), appends
their English text to `content/whats-new/release-notes.json` under the
current month, and marks them `published`.

It stops short of pushing: it creates a local git branch + commit and prints
next steps. You review the diff, push, and open a PR yourself — matching the
existing PR + Vercel-preview review flow in `docs/editorial-workflow.md`.
That's the second checkpoint before anything goes live.

## Files

- `content/whats-new/drafts.json` — the queue (all statuses, full history).
- `content/whats-new/release-notes.json` — what's actually live on
  `/portal`, imported by `app/portal/data.ts`.
- `scripts/whats-new/{add,review,publish}.mjs` — the three commands above.
