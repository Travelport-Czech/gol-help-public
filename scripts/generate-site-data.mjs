/**
 * Reads Obsidian markdown in content/ and writes lib/generated/site-data.ts
 * so the Next.js app (including client components) can import nav, homepage,
 * and article registry without reading the filesystem in the browser.
 */
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const DOCS = path.join(ROOT, "content", "docs");
const HOME_PATH = path.join(ROOT, "content", "Home.md");
const OUT_DIR = path.join(ROOT, "lib", "generated");
const OUT_FILE = path.join(OUT_DIR, "site-data.ts");
const SEARCH_FILE = path.join(OUT_DIR, "search-index.json");

/** `<!-- tags: a, b -->` comment from an article body. */
function extractTags(body) {
  const m = body.match(/<!--\s*tags:\s*([\s\S]*?)-->/i);
  return m ? m[1].split(",").map((t) => t.trim()).filter(Boolean) : [];
}

/** Markdown -> plain text for the full-text search index. */
function toPlainText(body) {
  return body
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/^#\s+.*$/m, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#*_`>|~]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parseFrontmatter(raw) {
  const text = raw.replace(/^\uFEFF/, "").replace(/\r\n/g, "\n");
  if (!text.startsWith("---")) return { data: {}, body: text };
  const end = text.indexOf("\n---", 3);
  if (end === -1) return { data: {}, body: text };
  const yaml = text.slice(3, end).replace(/^\r?\n/, "");
  const body = text.slice(end + 4).replace(/^\r?\n/, "");
  return { data: parseYaml(yaml), body };
}

function parseYaml(yaml) {
  const data = {};
  const lines = yaml.split(/\r?\n/);
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim() || line.trim().startsWith("#")) {
      i += 1;
      continue;
    }
    const keyMatch = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!keyMatch) {
      i += 1;
      continue;
    }
    const key = keyMatch[1];
    const rest = keyMatch[2];
    if (rest === "" || rest === "|" || rest === ">") {
      const items = [];
      i += 1;
      while (i < lines.length) {
        const next = lines[i];
        if (!next.trim()) {
          i += 1;
          continue;
        }
        if (/^\s+-/.test(next)) {
          if (/^\s+-\s*$/.test(next) || /^\s+-\s+[A-Za-z0-9_]+:/.test(next)) {
            const obj = {};
            if (/^\s+-\s+([A-Za-z0-9_]+):\s*(.*)$/.test(next)) {
              const om = next.match(/^\s+-\s+([A-Za-z0-9_]+):\s*(.*)$/);
              obj[om[1]] = coerce(om[2]);
            }
            i += 1;
            while (i < lines.length && /^\s{4,}[A-Za-z0-9_]+:/.test(lines[i])) {
              const fm = lines[i].match(/^\s+([A-Za-z0-9_]+):\s*(.*)$/);
              if (fm) obj[fm[1]] = coerce(fm[2]);
              i += 1;
            }
            items.push(obj);
          } else {
            items.push(coerce(next.replace(/^\s+-\s*/, "")));
            i += 1;
          }
          continue;
        }
        if (!/^\s/.test(next)) break;
        i += 1;
      }
      data[key] = items;
      continue;
    }
    data[key] = coerce(rest);
    i += 1;
  }
  return data;
}

function coerce(raw) {
  const v = String(raw).trim();
  if (v === "true") return true;
  if (v === "false") return false;
  if (v === "" || v === "null") return "";
  if (/^-?\d+$/.test(v)) return Number(v);
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    try {
      return JSON.parse(v.replace(/^'/, '"').replace(/'$/, '"'));
    } catch {
      return v.slice(1, -1);
    }
  }
  return v;
}

function extractTitle(md) {
  const m = md.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : null;
}

function tsString(value) {
  return JSON.stringify(value);
}

function tsKey(key) {
  if (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key)) return key;
  return JSON.stringify(key);
}

function tsValue(value, indent = 2) {
  const pad = " ".repeat(indent);
  if (value === null || value === undefined) return "null";
  if (typeof value === "string") return tsString(value);
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    const inner = value.map((item) => `${pad}  ${tsValue(item, indent + 2)}`).join(",\n");
    return `[\n${inner}\n${pad}]`;
  }
  const keys = Object.keys(value);
  if (keys.length === 0) return "{}";
  const inner = keys
    .map((k) => `${pad}  ${tsKey(k)}: ${tsValue(value[k], indent + 2)}`)
    .join(",\n");
  return `{\n${inner}\n${pad}}`;
}

async function loadHome() {
  const raw = await fs.readFile(HOME_PATH, "utf8");
  const { data } = parseFrontmatter(raw);
  return {
    heroTitle: data.hero_title || "Hi, how can we help you?",
    heroSub: data.hero_sub || "",
    searchChips: Array.isArray(data.search_chips) ? data.search_chips : [],
    youtubeUrl: data.youtube_url || "https://www.youtube.com/@ceetravelsystems",
    youtubeTitle: data.youtube_title || "Video tutorials",
    youtubeSub: data.youtube_sub || "",
    mostVisited: Array.isArray(data.most_visited) ? data.most_visited : [],
    walkthroughs: Array.isArray(data.walkthroughs) ? data.walkthroughs : [],
    appTabs: Array.isArray(data.app_tabs) ? data.app_tabs : [],
    externalLinks: Array.isArray(data.external_links) ? data.external_links : [],
    partnerForms: Array.isArray(data.partner_forms) ? data.partner_forms : [],
  };
}

async function loadCategories() {
  let folders = [];
  try {
    folders = await fs.readdir(DOCS, { withFileTypes: true });
  } catch {
    return [];
  }

  const categories = [];
  for (const entry of folders) {
    if (!entry.isDirectory() || entry.name.startsWith("_")) continue;
    const folder = path.join(DOCS, entry.name);
    let indexRaw;
    try {
      indexRaw = await fs.readFile(path.join(folder, "_index.md"), "utf8");
    } catch {
      continue;
    }
    const { data, body } = parseFrontmatter(indexRaw);
    const slug =
      data.slug ||
      entry.name
        .replace(/^\d+\s+/, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
    const files = await fs.readdir(folder);
    const articles = [];
    for (const name of files) {
      if (!name.endsWith(".md") || name === "_index.md" || name.startsWith("_")) continue;
      const articleRaw = await fs.readFile(path.join(folder, name), "utf8");
      const parsed = parseFrontmatter(articleRaw);
      const articleSlug = parsed.data.slug || name.replace(/\.md$/, "");
      articles.push({
        title: parsed.data.title || extractTitle(parsed.body) || articleSlug,
        href: `/portal/${slug}/${articleSlug}`,
        order: Number(parsed.data.order ?? 999),
        videos: Array.isArray(parsed.data.videos) ? parsed.data.videos : [],
        tags: extractTags(parsed.body),
        text: toPlainText(parsed.body),
      });
    }
    articles.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
    categories.push({
      icon: data.icon || "📄",
      name: data.name || extractTitle(body) || slug,
      desc: data.desc || "",
      href: `/portal/${slug}`,
      slug,
      order: Number(data.order ?? 999),
      articles: articles.map(({ title, href }) => ({ title, href })),
      searchDocs: [
        {
          title: data.name || extractTitle(body) || slug,
          href: `/portal/${slug}`,
          category: data.name || extractTitle(body) || slug,
          tags: extractTags(body),
          text: toPlainText(body),
        },
        ...articles.map((a) => ({
          title: a.title,
          href: a.href,
          category: data.name || extractTitle(body) || slug,
          tags: a.tags,
          text: a.text,
        })),
      ],
      articleVideos: Object.fromEntries(
        articles.filter((a) => a.videos.length).map((a) => [a.href, a.videos])
      ),
    });
  }
  categories.sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));
  return categories;
}

async function main() {
  const [home, categories] = await Promise.all([loadHome(), loadCategories()]);
  if (categories.length === 0) {
    throw new Error("No categories found under content/docs. Run the restructure script first.");
  }

  const articleVideos = Object.assign({}, ...categories.map((c) => c.articleVideos));
  const categoriesOut = categories.map(({ articleVideos: _v, searchDocs: _d, slug: _s, order: _o, ...rest }) => rest);
  const searchDocs = categories.flatMap((c) => c.searchDocs).map((d, id) => ({ id, ...d }));

  const file = `/* Generated from content/ markdown by scripts/generate-site-data.mjs — do not edit. */\n\nexport const HOME = ${tsValue(home, 0)};\n\nexport const CATEGORIES = ${tsValue(categoriesOut, 0)};\n\nexport const WALKTHROUGHS = HOME.walkthroughs;\n\nexport const APP_TABS = HOME.appTabs;\n\nexport const EXTERNAL_LINKS = HOME.externalLinks;\n\nexport const ARTICLE_VIDEOS = ${tsValue(articleVideos, 0)};\n`;

  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.writeFile(OUT_FILE, file, "utf8");
  await fs.writeFile(SEARCH_FILE, JSON.stringify(searchDocs), "utf8");
  console.log(
    `Generated ${path.relative(ROOT, OUT_FILE)} (${categories.length} topics, ${categories.reduce((n, c) => n + c.articles.length, 0)} articles).`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
