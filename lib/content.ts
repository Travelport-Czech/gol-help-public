import fs from "fs/promises";
import path from "path";

const CONTENT_ROOT = path.join(process.cwd(), "content", "docs");

export type ArticleVideo = {
  label: string;
  youtubeId: string;
};

export type LoadedArticle = {
  title: string;
  body: string;
  bodyWithoutH1: string;
  videos: ArticleVideo[];
};

type CategoryMeta = {
  folder: string;
  slug: string;
  name: string;
};

function parseFrontmatter(raw: string): { data: Record<string, unknown>; body: string } {
  const text = raw.replace(/^\uFEFF/, "");
  if (!text.startsWith("---")) return { data: {}, body: text };
  const end = text.indexOf("\n---", 3);
  if (end === -1) return { data: {}, body: text };
  const yaml = text.slice(3, end).replace(/^\r?\n/, "");
  const body = text.slice(end + 4).replace(/^\r?\n/, "");
  return { data: parseSimpleYaml(yaml), body };
}

function coerce(raw: string): unknown {
  const v = raw.trim();
  if (v === "true") return true;
  if (v === "false") return false;
  if (/^-?\d+$/.test(v)) return Number(v);
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    return v.slice(1, -1);
  }
  return v;
}

function parseSimpleYaml(yaml: string): Record<string, unknown> {
  const data: Record<string, unknown> = {};
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
    if (rest === "") {
      const items: unknown[] = [];
      i += 1;
      while (i < lines.length) {
        const next = lines[i];
        if (!next.trim()) {
          i += 1;
          continue;
        }
        if (/^\s+-/.test(next)) {
          if (/^\s+-\s*$/.test(next) || /^\s+-\s+[A-Za-z0-9_]+:/.test(next)) {
            const obj: Record<string, unknown> = {};
            const om = next.match(/^\s+-\s+([A-Za-z0-9_]+):\s*(.*)$/);
            if (om) obj[om[1]] = coerce(om[2]);
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

export function extractTitle(md: string): string | null {
  const m = md.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : null;
}

export function stripLeadingH1(md: string): string {
  return md.replace(/^#\s+[^\n]+\n+/, "");
}

function slugifyFolder(name: string): string {
  return name
    .replace(/^\d+\s+/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

async function listCategoryFolders(): Promise<CategoryMeta[]> {
  const entries = await fs.readdir(CONTENT_ROOT, { withFileTypes: true });
  const out: CategoryMeta[] = [];
  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith("_")) continue;
    const indexPath = path.join(CONTENT_ROOT, entry.name, "_index.md");
    try {
      const raw = await fs.readFile(indexPath, "utf8");
      const { data, body } = parseFrontmatter(raw);
      const slug = String(data.slug || slugifyFolder(entry.name));
      out.push({
        folder: entry.name,
        slug,
        name: String(data.name || extractTitle(body) || slug),
      });
    } catch {
      continue;
    }
  }
  return out;
}

async function findCategory(slug: string): Promise<CategoryMeta | null> {
  const all = await listCategoryFolders();
  return all.find((c) => c.slug === slug) ?? null;
}

function videosFromData(data: Record<string, unknown>): ArticleVideo[] {
  if (!Array.isArray(data.videos)) return [];
  return data.videos
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const rec = item as Record<string, unknown>;
      const label = String(rec.label ?? "");
      const youtubeId = String(rec.youtubeId ?? rec.youtube_id ?? "");
      if (!label || !youtubeId) return null;
      return { label, youtubeId };
    })
    .filter((v): v is ArticleVideo => v !== null);
}

function toLoadedArticle(raw: string): LoadedArticle {
  const { data, body } = parseFrontmatter(raw);
  const title = String(data.title || extractTitle(body) || "Untitled");
  return {
    title,
    body,
    bodyWithoutH1: stripLeadingH1(body),
    videos: videosFromData(data),
  };
}

export async function listCategorySlugs(): Promise<string[]> {
  return (await listCategoryFolders()).map((c) => c.slug);
}

export async function listArticleSlugs(category: string): Promise<string[]> {
  const meta = await findCategory(category);
  if (!meta) return [];
  const dir = path.join(CONTENT_ROOT, meta.folder);
  const entries = await fs.readdir(dir, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile() && e.name.endsWith(".md") && e.name !== "_index.md" && !e.name.startsWith("_"))
    .map((e) => e.name.replace(/\.md$/, ""));
}

export async function getCategoryArticle(category: string): Promise<LoadedArticle | null> {
  const meta = await findCategory(category);
  if (!meta) return null;
  try {
    const raw = await fs.readFile(path.join(CONTENT_ROOT, meta.folder, "_index.md"), "utf8");
    return toLoadedArticle(raw);
  } catch {
    return null;
  }
}

export async function getArticle(category: string, slug: string): Promise<LoadedArticle | null> {
  const meta = await findCategory(category);
  if (!meta) return null;
  try {
    const raw = await fs.readFile(path.join(CONTENT_ROOT, meta.folder, `${slug}.md`), "utf8");
    return toLoadedArticle(raw);
  } catch {
    return null;
  }
}
