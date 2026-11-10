import Link from "next/link";
import { HOME } from "@/lib/generated/site-data";
import s from "../portal-layout.module.css";
import p from "../portal.module.css";

/* Partner order forms — intentionally not in the menu, topic grid or search.
 * Reached by direct URL (/portal/forms) or the small link at the bottom of the
 * home page. Links are edited in content/Home.md (partner_forms). */
export const metadata = {
  title: "Order forms",
  robots: { index: false, follow: false },
};

export default function PartnerFormsPage() {
  return (
    <div className={s.articleWrap}>
      <div className={s.articlePageHeader}>
        <div className={s.articleNav}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/portal">Home</Link>
            <span aria-hidden="true"> / </span>
            <span>Order forms</span>
          </nav>
        </div>
        <div className={s.articleTitleRow}>
          <h1 className={s.articleMainTitle}>Order forms</h1>
        </div>
      </div>

      <div className={s.articleBody}>
        <p style={{ fontSize: 14, color: "#425073", lineHeight: 1.6, marginTop: 0 }}>
          Forms for our partners. Tip: bookmark this page — <strong>/portal/forms</strong>.
        </p>
        <ul className={p.mostVisitedList}>
          {HOME.partnerForms.map((form) => (
            <li key={form.title} className={p.mostVisitedItem}>
              <p>
                <strong>{form.title}</strong>
                <br />
                <span style={{ fontSize: 13, color: "#425073" }}>{form.desc}</span>
              </p>
              {form.href ? (
                <a
                  href={form.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ whiteSpace: "nowrap", fontSize: 14 }}
                >
                  Open form ↗
                </a>
              ) : (
                <span style={{ whiteSpace: "nowrap", fontSize: 14, color: "#8a94a8" }}>Coming soon</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
