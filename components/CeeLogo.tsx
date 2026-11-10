import { withBasePath } from "@/lib/site";

type CeeLogoProps = {
  /** Height in pixels — width scales automatically (aspect ~2.08:1) */
  height?: number;
  /** "dark" for light backgrounds (sidebar), "light" for dark backgrounds */
  variant?: "dark" | "light";
  className?: string;
};

const LOGO = {
  dark: "/cee-systems-logo-dark.svg",
  light: "/cee-systems-logo.svg",
} as const;

/**
 * CEE Systems logo — exact SVG from https://www.cee-systems.com/ (header__logo).
 * Dark variant uses brand navy #131f6b for visibility on white backgrounds.
 */
export function CeeLogo({
  height = 28,
  variant = "dark",
  className,
}: CeeLogoProps) {
  const width = Math.round(height * 2.084);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={withBasePath(LOGO[variant])}
      alt="CEE Systems"
      width={width}
      height={height}
      className={className}
      style={{ width, height, objectFit: "contain", display: "block" }}
    />
  );
}
