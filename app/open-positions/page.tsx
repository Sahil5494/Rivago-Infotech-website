import type { Metadata } from "next";
import { positions } from "./positions-data";
import OpenPositionsBoard from "./OpenPositionsBoard";
import { ogBase } from "@/lib/og";

export const metadata: Metadata = {
  title: "Careers · Rivago Infotech",
  description: "Careers at Rivago Infotech. We are always talking to experienced recruiters — send us your CV for partner-track desks across Delaware, Pune and Ontario.",
  alternates: { canonical: "https://rivagoinfotech.com/open-positions" },
  openGraph: {
    ...ogBase,
    title: "Careers · Rivago Infotech",
    description: positions.length ? `Browse ${positions.length} open senior roles at Rivago Infotech — partner-track positions across Delaware, Pune and Ontario.` : "Careers at Rivago Infotech. We are always talking to experienced recruiters — send us your CV.",
    url: "https://rivagoinfotech.com/open-positions",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rivagoinfotech.com/" },
    { "@type": "ListItem", position: 2, name: "Careers", item: "https://rivagoinfotech.com/career" },
    { "@type": "ListItem", position: 3, name: "Open Positions", item: "https://rivagoinfotech.com/open-positions" },
  ],
};

export default function OpenPositionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <OpenPositionsBoard />
    </>
  );
}
