import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import "./rivago-home.css";
import "./rivago-home-v2.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HireModal from "@/components/HireModal";
import HelpModal from "@/components/HelpModal";
import ScrollReveals from "@/components/ScrollReveals";
import PageNavSide from "@/components/PageNavSide";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], weight: ["400", "500"] });
const instrumentSerif = Instrument_Serif({ variable: "--font-instrument-serif", subsets: ["latin"], style: ["normal", "italic"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL("https://rivagoinfotech.com"),
  title: "Rivago — Technology-powered talent. Human-led hiring.",
  description: "Rivago combines recruiting expertise, market intelligence and technology to help ambitious companies find, evaluate and hire exceptional talent across the US, Canada, UAE and India.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
  openGraph: { type: "website", siteName: "Rivago", title: "Rivago — Technology-powered talent. Human-led hiring.", description: "Recruiting expertise, market intelligence and technology for better hiring.", url: "/", images: [{ url: "/assets/og-image.png", width: 1200, height: 630, alt: "Rivago — Technology-powered talent" }] },
  twitter: { card: "summary_large_image", title: "Rivago — Technology-powered talent. Human-led hiring.", description: "Recruiting expertise, market intelligence and technology for better hiring.", images: ["/assets/og-image.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}><body><Nav />{children}<HireModal /><Footer /><HelpModal /><PageNavSide /><ScrollReveals /></body></html>;
}
