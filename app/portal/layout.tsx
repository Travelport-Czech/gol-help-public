"use client";

import { useState, useEffect, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { CATEGORIES, APP_TABS, EXTERNAL_LINKS } from "./data";
import { CeeBrand } from "@/components/CeeBrand";
import s from "./portal-layout.module.css";

/* ── Layout ─────────────────────────────────────────────── */
export default function PortalLayout({ children }: { children: ReactNode }) {
  const rawPathname = usePathname();
  const router = useRouter();
  const pathname = rawPathname.replace(/\/$/, "") || "/";
  const isPortalRoot = pathname === "/portal";

  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [isCzech, setIsCzech] = useState(false);

  const supportLabel = isCzech ? "Podpora" : "Support";

  function openZendeskWidget() {
    window.zE?.("webWidget", "show");
    window.zE?.("webWidget", "open");
  }

  useEffect(() => {
    setIsCzech(navigator.language.toLowerCase().startsWith("cs"));
  }, []);

  /* Close mobile sidebar on navigation */
  useEffect(() => {
    setShowMobileSidebar(false);
  }, [pathname]);

  /* The topic of the current page is expanded in the sidebar. */
  const activeCat = CATEGORIES.find(
    (cat) => cat.href === pathname || cat.articles.some((a) => a.href === pathname)
  );

  const sidebarContent = (
    <>
      <div className={s.sidebarBrand}>
        <CeeBrand height={26} onLogoClick={() => router.push("/portal")} />
      </div>

      {/* Topic navigation — on the home page the topics are the tiles, so not repeated here */}
      {!isPortalRoot && (
        <nav className={s.sidebarTopics} aria-label="Topics">
          <span className={s.sidebarLabel}>Topics</span>
          {CATEGORIES.map((cat) => {
            const isExpanded = activeCat?.name === cat.name;
            return (
              <div key={cat.name}>
                <Link
                  href={cat.href}
                  className={`${s.sidebarItem} ${isExpanded ? s.sidebarItemActive : ""}`}
                  aria-current={cat.href === pathname ? "page" : undefined}
                >
                  <span className={s.sidebarItemLeft}>
                    <span className={s.sidebarItemIcon}>{cat.icon}</span>
                    <span>{cat.name}</span>
                  </span>
                  <span className={`${s.sidebarChevron} ${isExpanded ? s.sidebarChevronOpen : ""}`} aria-hidden="true">›</span>
                </Link>

                {isExpanded && (
                  <ul className={s.sidebarSubList}>
                    {cat.articles.map((a) => (
                      <li key={a.href}>
                        <Link
                          href={a.href}
                          className={`${s.sidebarSubItem} ${a.href === pathname ? s.sidebarSubItemActive : ""}`}
                          aria-current={a.href === pathname ? "page" : undefined}
                        >
                          {a.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>
      )}

      {/* External links */}
      <div className={s.sidebarExternalLinks}>
        <span className={s.sidebarLabel}>Links</span>
        {EXTERNAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={s.appLink}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Footer actions */}
      <div className={s.sidebarFooter}>
        {APP_TABS.filter((t) => !t.isActive).map((tab) => (
          <a
            key={tab.label}
            href={tab.href}
            target="_blank"
            rel="noopener noreferrer"
            className={s.sidebarFooterBtn}
          >
            {tab.label}
          </a>
        ))}
      </div>
    </>
  );

  return (
    <>

      {/* ══ MOBILE TOP BAR ════════════════════════════════ */}
      <div className={s.mobileTopBar}>
        <button
          className={s.hamburger}
          onClick={() => setShowMobileSidebar(true)}
          aria-label="Open navigation menu"
        >
          <span className={s.hamburgerLine} />
          <span className={s.hamburgerLine} />
          <span className={s.hamburgerLine} />
        </button>
        <CeeBrand height={24} compact className={s.mobileTopBarBrand} />
      </div>

      <div className={s.portalRoot}>

        {/* ══ MOBILE BACKDROP ═══════════════════════════════ */}
        {showMobileSidebar && (
          <div
            className={s.sidebarBackdrop}
            onClick={() => setShowMobileSidebar(false)}
          />
        )}

        {/* ══ LEFT SIDEBAR ══════════════════════════════════ */}
        <aside className={`${s.sidebar} ${showMobileSidebar ? s.sidebarOpen : ""}`}>
          {/* Mobile close button */}
          <button
            className={s.sidebarCloseBtn}
            onClick={() => setShowMobileSidebar(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
          {sidebarContent}
        </aside>
        {/* ══ END SIDEBAR ═══════════════════════════════════ */}

        {/* ══ MAIN CONTENT ══════════════════════════════════ */}
        <div className={s.portalMain}>
          {children}
        </div>

      </div>

      {/* ══ FLOATING SUPPORT BUTTON ══════════════════════ */}
      <button className={s.floatingSupport} onClick={openZendeskWidget}>
        <span className={s.floatingSupportIcon}>?</span>
        {supportLabel}
      </button>

    </>
  );
}
