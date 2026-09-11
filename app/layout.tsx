import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { Urbanist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SiteNav, SiteFooter, SitePageNav } from "@/components/SiteChrome";
import HireModal from "@/components/HireModal";
import HelpModal from "@/components/HelpModal";
import ScrollReveals from "@/components/ScrollReveals";

/* Urbanist is the text face — a geometric sans, the same construction as the
   Euclid Circular A the reference sites license. It replaces Geist, which is
   a neo-grotesque and reads as the Vercel default.

   Weight 300 is deliberately absent: body copy now sets 400. */
const urbanist = Urbanist({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "400",
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
    <html lang="en" className={`${urbanist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
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
