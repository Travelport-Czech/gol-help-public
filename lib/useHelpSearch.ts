"use client";

import { useEffect, useState } from "react";
import type MiniSearch from "minisearch";

export type HelpSearchResult = {
  title: string;
  href: string;
  category: string;
};

type SearchDoc = HelpSearchResult & { id: number; tags: string[]; text: string };

let indexPromise: Promise<MiniSearch<SearchDoc>> | null = null;

/**
 * Full-text index over title, tags, topic and article text
 * (lib/generated/search-index.json, written by scripts/generate-site-data.mjs).
 * Loaded lazily on the first search so it does not slow down page load.
 */
function loadIndex(): Promise<MiniSearch<SearchDoc>> {
  if (!indexPromise) {
    indexPromise = Promise.all([
      import("minisearch"),
      import("@/lib/generated/search-index.json"),
    ]).then(([{ default: MiniSearchCtor }, data]) => {
      const docs = (data.default ?? data) as unknown as SearchDoc[];
      const ms = new MiniSearchCtor<SearchDoc>({
        fields: ["title", "tags", "category", "text"],
        storeFields: ["title", "href", "category"],
        extractField: (doc, field) => {
          const value = doc[field as keyof SearchDoc];
          return Array.isArray(value) ? value.join(" ") : String(value ?? "");
        },
        searchOptions: {
          boost: { title: 4, tags: 3, category: 1.5, text: 1 },
          prefix: true,
          fuzzy: (term) => (term.length > 4 ? 0.2 : false),
          combineWith: "AND",
        },
      });
      ms.addAll(docs);
      return ms;
    });
  }
  return indexPromise;
}

export function useHelpSearch(query: string, limit = 50): HelpSearchResult[] {
  const [results, setResults] = useState<HelpSearchResult[]>([]);

  useEffect(() => {
    const q = query.trim();
    if (!q) {
      setResults([]);
      return;
    }
    let cancelled = false;
    loadIndex().then((ms) => {
      if (cancelled) return;
      setResults(
        ms
          .search(q)
          .slice(0, limit)
          .map((r) => ({ title: r.title, href: r.href, category: r.category }))
      );
    });
    return () => {
      cancelled = true;
    };
  }, [query, limit]);

  return results;
}
