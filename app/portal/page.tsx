"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { CATEGORIES, RELEASE_NOTES, WALKTHROUGHS } from "./data";
import { HOME } from "@/lib/generated/site-data";
import { useHelpSearch, type HelpSearchResult } from "@/lib/useHelpSearch";
import s from "./portal.module.css";

const latestReleaseHighlights = RELEASE_NOTES.flatMap((r) => r.items).slice(0, 5);

const ALL_ARTICLES = CATEGORIES.flatMap((cat) =>
  cat.articles.map((a) => ({ title: a.title, href: a.href, category: cat.name }))
);

const MOST_VISITED = HOME.mostVisited
  .map((href) => ALL_ARTICLES.find((a) => a.href === href))
  .filter((item): item is HelpSearchResult => Boolean(item));

export default function PortalOverviewPage() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  /* Support /portal/?q=... (used by the product landing page). */
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) setQuery(q);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query), 250);
    return () => clearTimeout(t);
  }, [query]);

  const filteredResults = useHelpSearch(debouncedQuery);

  const groupedResults = useMemo(() => {
    const groups: Record<string, HelpSearchResult[]> = {};
    for (const r of filteredResults) {
      if (!groups[r.category]) groups[r.category] = [];
      groups[r.category].push(r);
    }
    return groups;
  }, [filteredResults]);

  return (
    <>
      {/* ── Hero + Search ── */}
      <div className={s.hero}>
        <h2 className={s.heroTitle}>{HOME.heroTitle}</h2>
        <p className={s.heroSub}>{HOME.heroSub}</p>
        <div className={s.searchWrap}>
          <span className={s.searchIcon} aria-hidden="true">🔍</span>
          <input
            className={s.omnisearch}
            type="search"
            placeholder="Search anything… e.g. add new user, service fee, password"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search help articles"
          />
          {query && (
            <button className={s.searchClear} onClick={() => setQuery("")} aria-label="Clear search">
              ✕
            </button>
          )}
        </div>
        <div className={s.heroChips}>
          {HOME.searchChips.map((chip) => (
            <button key={chip} className={s.heroChip} onClick={() => setQuery(chip)}>
              {chip}
            </button>
          ))}
        </div>
      </div>

      <div className={s.body}>

        {/* ── Search results ── */}
        {debouncedQuery.trim() && (
          <div className={s.quickResults} aria-live="polite">
            <div className={s.searchResultsHeader}>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#1a3668" }}>
                {filteredResults.length === 0
                  ? "No results"
                  : `${filteredResults.length} result${filteredResults.length !== 1 ? "s" : ""} for "${debouncedQuery}"`}
              </h3>
            </div>
            {filteredResults.length === 0 ? (
              <p className={s.noResults}>
                Try a different keyword, or browse by topic below.
              </p>
            ) : (
              Object.entries(groupedResults).map(([category, items]) => (
                <div key={category} className={s.resultGroup}>
                  <div className={s.resultGroupLabel}>{category}</div>
                  <ul className={s.quickResultsList}>
                    {items.map((item) => (
                      <li key={item.href} className={s.quickResultItem}>
                        <Link href={item.href} className={s.quickResultLink}>
                          <span className={s.quickResultTitle}>{item.title}</span>
                          <span className={s.quickResultArrow} aria-hidden="true">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>
        )}

        {/* ── Browse by topic ── */}
        {!debouncedQuery.trim() && (
          <>
            <h2 className={s.sectionTitle}>Browse by topic</h2>
            <ul className={s.topicGrid}>
              {CATEGORIES.map((cat) => (
                <li key={cat.name}>
                  <Link href={cat.href} className={s.catCard}>
                    <span className={s.catName}>{cat.name}</span>
                    <span className={s.catDesc}>{cat.desc}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className={s.panelsRow}>

              {/* What's New */}
              <section className={s.panel} aria-labelledby="home-whats-new">
                <div className={s.panelHeader}>
                  <h2 id="home-whats-new" className={s.panelTitle}>What&apos;s New</h2>
                </div>
                <div className={s.panelBody}>
                  <div className={s.releaseVersion}>{RELEASE_NOTES[0].version}</div>
                  <ul className={s.releaseList}>
                    {latestReleaseHighlights.map((item) => <li key={item.title}>{item.title}</li>)}
                  </ul>
                  <Link href="/portal/release-notes" className={s.releaseAllLink}>
                    All GOL IBE News <span className={s.releaseAllLinkArrow} aria-hidden="true">→</span>
                  </Link>
                </div>
              </section>

              {/* Walkthroughs */}
              <section className={s.panel} aria-labelledby="home-walkthroughs">
                <div className={s.panelHeader}>
                  <h2 id="home-walkthroughs" className={s.panelTitle}>Walkthroughs</h2>
                </div>
                <div className={s.panelBody}>
                  <ul className={s.walkthroughList}>
                    {WALKTHROUGHS.map((w) => (
                      <li key={w.href}>
                        <Link href={w.href} className={s.walkthroughItem}>
                          <span className={s.walkthroughContent}>
                            <span className={s.walkthroughTitle}>{w.title}</span>
                            <span className={s.walkthroughCat}>{w.category} · {w.steps} steps</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Most visited */}
              <section className={s.panel} aria-labelledby="home-most-visited">
                <div className={s.panelHeader}>
                  <h2 id="home-most-visited" className={s.panelTitle}>Most visited</h2>
                </div>
                <div className={s.panelBody}>
                  <ul className={s.walkthroughList}>
                    {MOST_VISITED.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className={s.walkthroughItem}>
                          <span className={s.walkthroughContent}>
                            <span className={s.walkthroughTitle}>{item.title}</span>
                            <span className={s.walkthroughCat}>{item.category}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

            </div>

            {/* Secondary links — one line instead of separate blocks */}
            <p className={s.homeLinks}>
              <a href={HOME.youtubeUrl} target="_blank" rel="noopener noreferrer">
                {HOME.youtubeTitle} on YouTube ↗
              </a>
              <Link href="/portal/forms" className={s.homeLinksMuted}>Partner order forms</Link>
            </p>
          </>
        )}

      </div>
    </>
  );
}
