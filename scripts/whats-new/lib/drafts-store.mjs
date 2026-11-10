import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const DRAFTS_PATH = path.join(__dirname, "..", "..", "..", "content", "whats-new", "drafts.json");

export async function loadDrafts() {
  const raw = await fs.readFile(DRAFTS_PATH, "utf8");
  const data = JSON.parse(raw);
  if (!Array.isArray(data.drafts)) {
    throw new Error(`Malformed drafts file at ${DRAFTS_PATH}: missing "drafts" array`);
  }
  return data.drafts;
}

export async function saveDrafts(drafts) {
  const data = { drafts };
  await fs.writeFile(DRAFTS_PATH, JSON.stringify(data, null, 2) + "\n", "utf8");
}

export function nextId(drafts) {
  const today = new Date().toISOString().slice(0, 10);
  const todaysCount = drafts.filter((d) => d.id.startsWith(`wn-${today}`)).length;
  return `wn-${today}-${String(todaysCount + 1).padStart(3, "0")}`;
}
