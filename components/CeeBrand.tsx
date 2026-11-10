import Link from "next/link";
import { CeeLogo } from "@/components/CeeLogo";
import s from "./CeeBrand.module.css";

export const CEE_WEBSITE_URL = "https://www.cee-systems.com/";

type CeeBrandProps = {
  height?: number;
  /** Link target for the logo (help portal home). */
  portalHref?: string;
  /** Use button instead of Link (e.g. sidebar with router.push). */
  onLogoClick?: () => void;
  compact?: boolean;
  className?: string;
};

export function CeeBrand({
  height = 26,
  portalHref = "/portal",
  onLogoClick,
  compact = false,
  className,
}: CeeBrandProps) {
  const blockClass = [s.brandBlock, compact ? s.compact : "", className]
    .filter(Boolean)
    .join(" ");

  const logo = <CeeLogo height={height} variant="dark" />;

  return (
    <div className={blockClass}>
      {onLogoClick ? (
        <button
          type="button"
          className={s.logoLink}
          onClick={onLogoClick}
          aria-label="CEE Systems Help Portal — home"
        >
          {logo}
        </button>
      ) : (
        <Link href={portalHref} className={s.logoLink} aria-label="CEE Systems Help Portal — home">
          {logo}
        </Link>
      )}
      <a
        href={CEE_WEBSITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={s.siteLink}
      >
        cee-systems.com
      </a>
    </div>
  );
}
