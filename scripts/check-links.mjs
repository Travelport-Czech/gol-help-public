// Finds broken internal links in the built static site (out/).
// Run `npm run build` first, then `npm run check:links`.
// Checks links inside article text (<article class="prose">) on /portal pages
// and reports the article title + visible link text + target of every link
// that does not resolve to a file in out/. Exit code 1 if any are found.
// `--all` checks every link on every page (incl. legacy non-portal pages).
import fs from "node:fs";
import path from "node:path";
import * as cheerio from "cheerio";

const OUT = path.resolve("out");
const ALL = process.argv.includes("--all");
const BASE = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

if (!fs.existsSync(OUT)) {
  console.error("out/ not found - run `npm run build` first.");
  process.exit(2);
}

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name !== "_next") walk(p, acc);
    } else if (e.name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

function exists(urlPath) {
  let p = decodeURIComponent(urlPath.split(/[?#]/)[0]);
  if (BASE && p.startsWith(BASE)) p = p.slice(BASE.length);
  const f = path.join(OUT, p);
  return (
    fs.existsSync(path.join(f, "index.html")) ||
    (fs.existsSync(f) && fs.statSync(f).isFile()) ||
    fs.existsSync(f + ".html")
  );
}

const broken = new Map(); // page -> [{text, href}]
for (const file of walk(OUT)) {
  const rel = "/" + path.relative(OUT, file).replace(/\\/g, "/");
  if (rel.startsWith("/404") || rel.startsWith("/_not-found")) continue;
  if (!ALL && !rel.startsWith("/portal/")) continue;
  const pageUrl = rel.replace(/index\.html$/, "");
  const $ = cheerio.load(fs.readFileSync(file, "utf8"));
  const title = $("h1").first().text().trim() || pageUrl;
  $(ALL ? "a[href]" : "article.prose a[href]").each((_, a) => {
    const href = $(a).attr("href");
    if (!href || /^(https?:|mailto:|tel:|#|javascript:)/i.test(href)) return;
    const target = href.startsWith("/") ? href : new URL(href, "http://x" + pageUrl).pathname;
    if (target.startsWith("/_next")) return;
    if (!exists(target)) {
      if (!broken.has(pageUrl)) broken.set(pageUrl, { title, links: [] });
      broken.get(pageUrl).links.push({ text: $(a).text().trim(), href });
    }
  });
}

if (!broken.size) {
  console.log("No broken internal links found.");
  process.exit(0);
}
let total = 0;
for (const [url, { title, links }] of broken) {
  console.log(`\n${title}  (${url})`);
  for (const l of links) {
    total++;
    console.log(`  - "${l.text}" -> ${l.href}`);
  }
}
console.log(`\n${total} broken link(s) on ${broken.size} page(s).`);
process.exit(1);
