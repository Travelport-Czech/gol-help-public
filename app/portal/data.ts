/* Shared types and content for the GOL IBE Help Portal.
 *
 * Navigation, homepage copy, walkthroughs and article titles are generated
 * from markdown in `content/` (see scripts/generate-site-data.mjs).
 * Edit those files in Obsidian — do not edit the generated values here.
 */

import releaseNotesData from "../../content/whats-new/release-notes.json";
import {
  APP_TABS as GENERATED_TABS,
  CATEGORIES as GENERATED_CATEGORIES,
  EXTERNAL_LINKS as GENERATED_LINKS,
  WALKTHROUGHS as GENERATED_WALKTHROUGHS,
} from "@/lib/generated/site-data";

export type Article = {
  title: string;
  href: string;
};

export type Category = {
  icon: string;
  name: string;
  desc: string;
  href: string;
  articles: Article[];
};

export type AppTab = {
  label: string;
  href: string;
  isActive: boolean;
};

export type ReleaseNoteItem = {
  title: string;
  detail: string;
};

export type ReleaseNote = {
  version: string;
  items: ReleaseNoteItem[];
};

export type Walkthrough = {
  title: string;
  desc: string;
  steps: number;
  category: string;
  href: string;
};

export type HealthCheck = {
  label: string;
  desc: string;
  status: "ok" | "warning" | "pending";
  href: string;
};

export type ExternalLink = {
  label: string;
  href: string;
};

export const CATEGORIES: Category[] = GENERATED_CATEGORIES;

export const APP_TABS: AppTab[] = GENERATED_TABS.map((tab) => ({
  label: tab.label,
  href: tab.href,
  isActive: Boolean(tab.isActive),
}));

export const EXTERNAL_LINKS: ExternalLink[] = GENERATED_LINKS;

export const WALKTHROUGHS: Walkthrough[] = GENERATED_WALKTHROUGHS.map((w) => ({
  title: w.title,
  desc: w.desc,
  steps: Number(w.steps),
  category: w.category,
  href: w.href,
}));

export const HEALTH_CHECKS: HealthCheck[] = [];

export const RELEASE_NOTES: ReleaseNote[] = releaseNotesData;
