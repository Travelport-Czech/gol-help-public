import type { MetadataRoute } from "next";

import { CATEGORIES } from "@/lib/generated/site-data";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

/** Every portal page: home, What's New, each topic and each article (generated from content/docs). */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: `${base}/portal/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/portal/release-notes/`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  for (const cat of CATEGORIES) {
    routes.push({ url: `${base}${cat.href}/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 });
    for (const article of cat.articles) {
      routes.push({ url: `${base}${article.href}/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
    }
  }

  return routes;
}
