/**
 * Manual review gate for the What's New draft queue.
 * Walks through every draft that isn't finished yet (status "new" or
 * "needs_translation") and asks a human to make the calls this tool
 * will never make on its own:
 *   - is this internal-only, or OK to show customers?
 *   - if external, what's the clear English version customers should read?
 *   - is it ready to publish now, or does it need another pass?
 *
 * Usage: node scripts/whats-new/review.mjs
 */
import readline from "readline/promises";
import { stdin, stdout } from "process";
import { loadDrafts, saveDrafts } from "./lib/drafts-store.mjs";

function printDraft(d) {
  console.log("\n" + "─".repeat(60));
  console.log(`Draft ${d.id}  (source: ${d.source}, added: ${d.date_added}, lang: ${d.language})`);
  console.log("─".repeat(60));
  console.log(d.raw_text);
  if (d.english_text) {
    console.log("\n[existing English draft]");
    console.log(d.english_text);
  }
  console.log("─".repeat(60));
}

async function reviewOne(rl, d) {
  printDraft(d);
  const choice = (
    await rl.question("Mark as [i]nternal / [e]xternal / [s]kip for now / [q]uit: ")
  ).trim().toLowerCase();

  if (choice === "q") return "quit";
  if (choice === "s" || choice === "") return "next";

  if (choice === "i") {
    d.visibility = "internal";
    d.status = "internal";
    console.log(`-> ${d.id} marked internal. It will never be published.`);
    return "next";
  }

  if (choice === "e") {
    d.visibility = "external";
    console.log(
      "\nEnter the clear, customer-facing English version.\n" +
      "This is what will appear on the site — rewrite, don't just translate literally."
    );
    const defaultHint = d.english_text ? " (press Enter to keep existing draft above)" : "";
    const english = await rl.question(`English text${defaultHint}: `);
    const finalText = english.trim() || d.english_text;

    if (!finalText) {
      console.log("-> No English text given. Left as needs_translation, revisit later.");
      d.status = "needs_translation";
      return "next";
    }

    d.english_text = finalText;

    const approve = (await rl.question("Approve for publishing now? [y/N]: "))
      .trim()
      .toLowerCase();

    if (approve === "y") {
      d.status = "approved";
      console.log(`-> ${d.id} approved. Run "npm run whats-new:publish" to push it live.`);
    } else {
      d.status = "needs_translation";
      console.log(`-> ${d.id} saved as draft. Re-run review to approve later.`);
    }
    return "next";
  }

  console.log("Not understood, skipping for now.");
  return "next";
}

async function main() {
  const drafts = await loadDrafts();
  const pending = drafts.filter((d) => d.status === "new" || d.status === "needs_translation");

  if (pending.length === 0) {
    console.log("Nothing to review — draft queue is clean.");
    return;
  }

  console.log(`${pending.length} draft(s) need a decision.\n`);
  const rl = readline.createInterface({ input: stdin, output: stdout });

  for (const d of pending) {
    const result = await reviewOne(rl, d);
    await saveDrafts(drafts); // persist after every single decision, never lose progress
    if (result === "quit") break;
  }

  rl.close();
  console.log("\nDone. Draft queue saved.");
}

main();
