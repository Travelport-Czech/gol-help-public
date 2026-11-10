"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useHelpSearch } from "@/lib/useHelpSearch";
import s from "@/app/portal/portal-layout.module.css";

export function PortalSearch() {
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setDebounced(query), 180);
    return () => clearTimeout(t);
  }, [query]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if ((e.key === "/" || (e.key === "k" && (e.ctrlKey || e.metaKey))) &&
          !(e.target instanceof HTMLInputElement) &&
          !(e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
      if (e.key === "Escape") {
        setOpen(false);
        inputRef.current?.blur();
      }
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const results = useHelpSearch(debounced, 12);

  const showDropdown = open && debounced.trim().length > 0;

  return (
    <div className={s.portalSearch} ref={wrapRef}>
      <div className={s.portalSearchPill}>
        <svg
          className={s.portalSearchIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
        <input
          ref={inputRef}
          className={s.portalSearchInput}
          type="search"
          value={query}
          placeholder="Search help…"
          aria-label="Search help articles"
          aria-expanded={showDropdown}
          aria-controls="portal-search-results"
          autoComplete="off"
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
        />
        {query && (
          <button
            type="button"
            className={s.portalSearchClear}
            aria-label="Clear search"
            onClick={() => {
              setQuery("");
              setDebounced("");
              inputRef.current?.focus();
            }}
          >
            ✕
          </button>
        )}
      </div>

      {showDropdown && (
        <div
          id="portal-search-results"
          className={s.portalSearchResults}
          role="listbox"
        >
          {results.length === 0 ? (
            <p className={s.portalSearchEmpty}>
              No results for „{debounced.trim()}“. Try another keyword.
            </p>
          ) : (
            <>
              <div className={s.portalSearchMeta}>
                {results.length} result{results.length === 1 ? "" : "s"}
              </div>
              <ul className={s.portalSearchList}>
                {results.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className={s.portalSearchItem}
                      role="option"
                      onClick={() => {
                        setOpen(false);
                        setQuery("");
                        setDebounced("");
                      }}
                    >
                      <span className={s.portalSearchItemTitle}>{r.title}</span>
                      <span className={s.portalSearchItemCat}>{r.category}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}
