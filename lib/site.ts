/**
 * Public site URL for sitemap, robots, and metadata.
 * Set NEXT_PUBLIC_SITE_URL in Vercel (e.g. https://gol-help.example.com).
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  // Vercel: stable production domain first, the per-deployment URL only as a fallback.
  const vercel = (process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL)?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`;

  return "http://localhost:3000";
}

/** Prefix a public asset path with NEXT_PUBLIC_BASE_PATH (GitHub Pages subpath). */
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
