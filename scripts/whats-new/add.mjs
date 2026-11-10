/**
 * Add a raw news item to the What's New draft queue.
 * Every item starts as status "new" with no visibility decision —
 * that call is always made later by a human in review.mjs.
 *
 * Usage:
 *   node scripts/whats-new/add.mjs --source slack --lang cs --text "Raw text here"
 *   node scripts/whats-new/add.mjs   (interactive prompts)
 */
import readline from "readline/promises";
import { stdin, stdout } from "process";
import { loadDrafts, saveDrafts, nextId } from "./lib/drafts-store.mjs";

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith("--")) {
      const key = argv[i].slice(2);
      args[key] = argv[i + 1];
      i++;
    }
  }
  return args;
}

async function prompt(rl, question, fallback = "") {
  const answer = (await rl.question(question)).trim();
  return answer || fallback;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const rl = readline.createInterface({ input: stdin, output: stdout });

  const source = args.source ?? (await prompt(rl, "Source (e.g. slack, email, internal-doc): "));
  const language = args.lang ?? (await prompt(rl, "Original language code (e.g. en, cs) [cs]: ", "cs"));
  const raw_text = args.text ?? (await prompt(rl, "Raw text:\n"));

  rl.close();

  if (!raw_text.trim()) {
    console.error("Aborted: raw text cannot be empty.");
    process.exit(1);
  }

  const drafts = await loadDrafts();
  const draft = {
    id: nextId(drafts),
    source: source || "unknown",
    date_added: new Date().toISOString().slice(0, 10),
    raw_text,
    language,
    visibility: null, // "internal" | "external" — set only by a human in review.mjs
    english_text: null,
    status: "new", // new -> internal | needs_translation -> approved -> published (or rejected)
    published_at: null,
    notes: "",
  };

  drafts.push(draft);
  await saveDrafts(drafts);

  console.log(`Added draft ${draft.id}. Run "npm run whats-new:review" to sort it.`);
}

main();
