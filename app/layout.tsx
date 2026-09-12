import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteNav, SiteFooter, SitePageNav } from "@/components/SiteChrome";
import HireModal from "@/components/HireModal";
import HelpModal from "@/components/HelpModal";
import ScrollReveals from "@/components/ScrollReveals";

/* Geist is the only text face. The reference sets everything in one family
   (Euclid Circular A, which is licensed) at just three weights — 400, 500
   and 700 — so those are the three loaded here. There is no serif: the
   italic accent the hero used has been folded into this family. */
const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Rivago Infotech — Global Staffing & Recruitment",
  description:
    "Rivago Infotech is a global staffing firm placing senior talent across technology, finance, healthcare, legal and more — direct hire, contract and executive search in the US, Canada, the UAE and India.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: "Rivago Infotech",
    title: "Rivago Infotech — Global Staffing & Recruitment",
    description:
      "Rivago Infotech is a global staffing firm placing senior talent across technology, finance, healthcare, legal and more — direct hire, contract and executive search in the US, Canada, the UAE and India.",
    url: "/",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rivago Infotech — Global Staffing & Recruitment",
    description:
      "Rivago Infotech is a global staffing firm placing senior talent across technology, finance, healthcare, legal and more — direct hire, contract and executive search in the US, Canada, the UAE and India.",
    images: ["/assets/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <SiteNav />
        {children}
        <HireModal />
        <SiteFooter />
        <HelpModal />
        <SitePageNav />
        <ScrollReveals />
      </body>
    </html>
  );
}
