"use client";

import Link from "next/link";
import { useState } from "react";
import { CeeBrand } from "@/components/CeeBrand";
import s from "./home.module.css";

const PRODUCTS = [
  {
    emoji: "✈️",
    name: "GOL IBE",
    desc: "Booking engine admin — users, reservations, markup rules, email templates and more.",
    href: "/portal/",
    active: true,
  },
  {
    emoji: "🛫",
    name: "LCC",
    desc: "Low-cost carrier integration, ancillaries and direct connect configuration.",
    active: false,
  },
  {
    emoji: "🌐",
    name: "NDC",
    desc: "NDC offer & order management, airline connectivity and API references.",
    active: false,
  },
  {
    emoji: "🏨",
    name: "Hotels",
    desc: "Hotel search, property setup, rate management and booking workflows.",
    active: false,
  },
];

const CHIPS = [
  "Add user",
  "Service fee",
  "Cancel booking",
  "Markup rules",
  "Email templates",
  "Flush caches",
];

export default function HelpCenterHome() {
  const [query, setQuery] = useState("");

  function handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && query.trim()) {
      window.location.href = `/portal/?q=${encodeURIComponent(query.trim())}`;
    }
  }

  function handleChip(label: string) {
    window.location.href = `/portal/?q=${encodeURIComponent(label)}`;
  }

  return (
    <div className={s.page}>
      {/* ── Top bar ── */}
      <div className={s.topBar}>
        <CeeBrand height={28} className={s.topBarBrand} />
      </div>

      {/* ── Hero ── */}
      <div className={s.hero}>
        <h1 className={s.heroTitle}>Hi, how can we help you?</h1>
        <p className={s.heroSub}>Search the knowledge base or pick your product below.</p>

        <div className={s.searchWrap}>
          <span className={s.searchIcon}>🔍</span>
          <input
            className={s.omnisearch}
            placeholder="Search anything… e.g. add new user, service fee, cancel booking"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
            aria-label="Search help articles"
          />
          {query && (
            <button
              className={s.searchClear}
              onClick={() => setQuery("")}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        <div className={s.chips}>
          {CHIPS.map((chip) => (
            <button key={chip} className={s.chip} onClick={() => handleChip(chip)}>
              {chip}
            </button>
          ))}
        </div>
      </div>

      {/* ── Products ── */}
      <div className={s.products}>
        <p className={s.sectionLabel}>Browse by product</p>
        <div className={s.grid}>
          {PRODUCTS.map((p) => {
            const tileClass = `${s.tile}${p.active ? "" : " " + s.tileDim}`;
            const stripClass = `${s.tileStrip}${p.active ? "" : " " + s.tileStripMuted}`;
            const iconClass = `${s.tileIcon}${p.active ? " " + s.tileIconActive : ""}`;
            const ctaClass = `${s.tileCta}${p.active ? "" : " " + s.tileCtaMuted}`;

            return p.href ? (
              <Link key={p.name} href={p.href} className={tileClass}>
                <div className={stripClass} />
                <div className={s.tileBody}>
                  <div className={iconClass}>{p.emoji}</div>
                  <div className={s.tileName}>{p.name}</div>
                  <div className={s.tileDesc}>{p.desc}</div>
                  <span className={ctaClass}>Open help →</span>
                </div>
              </Link>
            ) : (
              <div key={p.name} className={tileClass}>
                <div className={stripClass} />
                <div className={s.tileBody}>
                  <div className={iconClass}>{p.emoji}</div>
                  <div className={s.tileName}>{p.name}</div>
                  <div className={s.tileDesc}>{p.desc}</div>
                  <span className={ctaClass}>Coming soon</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
