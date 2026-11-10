import Link from "next/link";
import { PortalSearch } from "@/components/PortalSearch";
import { ShareButton } from "@/components/ShareButton";
import { RELEASE_NOTES } from "../data";
import s from "../portal-layout.module.css";
import p from "../portal.module.css";

export const metadata = { title: "GOL IBE News" };

export default function ReleaseNotesPage() {
  return (
    <div className={s.articleWrap}>
      <div className={s.articlePageHeader}>
        <div className={s.articleNav}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/portal">Home</Link>
            <span aria-hidden="true"> / </span>
            <span>GOL IBE News</span>
          </nav>
          <div className={s.articleNavActions}>
            <PortalSearch />
            <ShareButton />
          </div>
        </div>
        <div className={s.articleTitleRow}>
          <h1 className={s.articleMainTitle}>GOL IBE News</h1>
        </div>
      </div>

      <div className={s.articleBody}>
        {RELEASE_NOTES.map((r) => (
          <div key={r.version} className={p.releaseEntry} style={{ marginBottom: 32 }}>
            <div className={p.releaseVersion} style={{ fontSize: 14, marginBottom: 12 }}>{r.version}</div>
            {r.items.map((item) => (
              <div key={item.title} style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#131f6b", marginBottom: 4 }}>
                  {item.title}
                </div>
                <p style={{ fontSize: 14, color: "#425073", lineHeight: 1.6, margin: 0 }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
