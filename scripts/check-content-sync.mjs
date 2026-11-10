#!/usr/bin/env node
/**
 * Validates Obsidian content: every topic folder has _index.md metadata,
 * every article has a title, and Home.md links resolve.
 *
 * Usage: npm run check:content
 */
import fs from "fs/promises";
import path from "path";
import { spawnSync } from "child_process";

const ROOT = process.cwd();
const DOCS = path.join(ROOT, "content", "docs");

function parseFrontmatter(raw) {
  const text = raw.replace(/^\uFEFF/, "");
  if (!text.startsWith("---")) return { data: {}, body: text };
  const end = text.indexOf("\n---", 3);
  if (end === -1) return { data: {}, body: text };
  const yaml = text.slice(3, end);
  const body = text.slice(end + 4);
  const data = {};
  for (const line of yaml.split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (m && !m[1].startsWith(" ") && m[2] !== "") data[m[1]] = m[2].replace(/^"|"$/g, "");
  }
  return { data, body };
}

function extractTitle(md) {
  const m = md.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : null;
}

async function main() {
  const gen = spawnSync(process.execPath, ["scripts/generate-site-data.mjs"], {
    cwd: ROOT,
    stdio: "inherit",
  });
  if (gen.status !== 0) process.exit(gen.status ?? 1);

  const folders = (await fs.readdir(DOCS, { withFileTypes: true })).filter(
    (e) => e.isDirectory() && !e.name.startsWith("_")
  );

  const problems = [];
  const hrefs = new Set(["/portal"]);

  for (const folder of folders) {
    const dir = path.join(DOCS, folder.name);
    let indexRaw;
    try {
      indexRaw = await fs.readFile(path.join(dir, "_index.md"), "utf8");
    } catch {
      problems.push(`${folder.name}/ is missing _index.md (topic tile + overview page)`);
      continue;
    }
    const { data, body } = parseFrontmatter(indexRaw);
    if (!data.slug) problems.push(`${folder.name}/_index.md needs a slug (e.g. agency)`);
    if (!data.name) problems.push(`${folder.name}/_index.md needs a name`);
    if (!data.icon) problems.push(`${folder.name}/_index.md needs an icon emoji`);
    const slug = data.slug || folder.name;
    hrefs.add(`/portal/${slug}`);

    const files = await fs.readdir(dir);
    for (const name of files) {
      if (!name.endsWith(".md") || name === "_index.md") continue;
      const raw = await fs.readFile(path.join(dir, name), "utf8");
      const parsed = parseFrontmatter(raw);
      const title = parsed.data.title || extractTitle(parsed.body);
      if (!title) problems.push(`${folder.name}/${name} needs a title (Properties or # heading)`);
      const articleSlug = parsed.data.slug || name.replace(/\.md$/, "");
      hrefs.add(`/portal/${slug}/${articleSlug}`);
    }
  }

  const homeRaw = await fs.readFile(path.join(ROOT, "content", "Home.md"), "utf8");
  const missingHomeLinks = [...homeRaw.matchAll(/\/portal\/[A-Za-z0-9\-_/]+/g)]
    .map((m) => m[0].replace(/\/$/, ""))
    .filter((href, i, all) => all.indexOf(href) === i && !hrefs.has(href));

  for (const href of missingHomeLinks) {
    problems.push(`Home.md points at ${href} but that page does not exist`);
  }

  if (problems.length) {
    console.log(`\n⚠ ${problems.length} issue(s) in Obsidian content:\n`);
    for (const p of problems) console.log(`  - ${p}`);
    console.log("");
    process.exitCode = 1;
    return;
  }

  console.log(`✓ ${folders.length} topics are valid and Home.md links resolve.`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
