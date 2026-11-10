/**
 * Publish approved What's New drafts to the live release notes.
 *
 * Only picks up drafts that are status "approved" AND visibility "external" —
 * both of which are set exclusively by a human in review.mjs. This script
 * never decides internal/external and never writes English text itself.
 *
 * It stops short of pushing or opening a PR: it only creates a local branch
 * and commit, so there's always one more human checkpoint (review the diff,
 * push, open the PR) before anything reaches production.
 *
 * Usage: node scripts/whats-new/publish.mjs
 */
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { execFile } from "child_process";
import { promisify } from "util";
import { loadDrafts, saveDrafts } from "./lib/drafts-store.mjs";

const run = promisify(execFile);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, "..", "..");
const releaseNotesPath = path.join(repoRoot, "content", "whats-new", "release-notes.json");

function monthLabel(date) {
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

async function git(args) {
  return run("git", args, { cwd: repoRoot });
}

async function main() {
  const drafts = await loadDrafts();
  const toPublish = drafts.filter(
    (d) => d.status === "approved" && d.visibility === "external"
  );

  if (toPublish.length === 0) {
    console.log("Nothing approved to publish.");
    return;
  }

  const missingText = toPublish.filter((d) => !d.english_text?.trim());
  if (missingText.length > 0) {
    console.error(
      `Refusing to publish: ${missingText.length} approved draft(s) have no English text ` +
      `(${missingText.map((d) => d.id).join(", ")}). Re-run review.mjs first.`
    );
    process.exit(1);
  }

  const releaseNotes = JSON.parse(await fs.readFile(releaseNotesPath, "utf8"));
  const label = monthLabel(new Date());

  let group = releaseNotes.find((g) => g.version === label);
  if (!group) {
    group = { version: label, items: [] };
    releaseNotes.unshift(group);
  }
  group.items.push(
    ...toPublish.map((d) => ({ title: d.english_text.trim(), detail: d.english_text.trim() }))
  );

  await fs.writeFile(releaseNotesPath, JSON.stringify(releaseNotes, null, 2) + "\n", "utf8");

  const now = new Date().toISOString();
  for (const d of toPublish) {
    d.status = "published";
    d.published_at = now;
  }
  await saveDrafts(drafts);

  const branchName = `whats-new/${new Date().toISOString().slice(0, 10)}-${toPublish.length}-items`;
  try {
    await git(["checkout", "-b", branchName]);
    await git(["add", "content/whats-new/release-notes.json", "content/whats-new/drafts.json"]);
    await git([
      "commit",
      "-m",
      `Publish ${toPublish.length} What's New item(s) for ${label}`,
    ]);
    console.log(`\nCreated branch "${branchName}" with the publish commit.`);
    console.log("Next steps (manual, on purpose):");
    console.log(`  1. git diff main ${branchName} -- content/whats-new/release-notes.json`);
    console.log(`  2. git push -u origin ${branchName}`);
    console.log("  3. Open a PR and get the Vercel preview checked before merging.");
  } catch (err) {
    console.error(
      "\nCould not create the git branch/commit automatically:",
      err.message
    );
    console.error(
      "The JSON files were updated on disk though — commit them yourself when ready."
    );
  }

  console.log(`\nPublished: ${toPublish.map((d) => d.id).join(", ")}`);
}

main();
