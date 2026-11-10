import type { ReactNode } from "react";

/**
 * Pages outside /portal are only redirects (old URLs like /agency/detail -> /portal/agency/detail)
 * and the product landing page, so no extra header/navigation is rendered here.
 */
export function ContentWrapper({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
