import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { getSiteUrl } from "@/lib/site";
import { ContentWrapper } from "./_components/ContentWrapper";
import { ZendeskWidget } from "@/components/ZendeskWidget";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Travelport-Czech-Help-Portal",
    template: "%s | Travelport-Czech-Help-Portal"
  },
  description:
    "Travelport-Czech-Help-Portal for GOL IBE guidance, onboarding, and troubleshooting.",
  openGraph: {
    type: "website",
    siteName: "Travelport-Czech-Help-Portal"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ContentWrapper>{children}</ContentWrapper>
        <ZendeskWidget />
      </body>
    </html>
  );
}
