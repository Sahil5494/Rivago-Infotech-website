import type { Metadata } from "next";
import { positions } from "./positions-data";
import OpenPositionsBoard from "./OpenPositionsBoard";

export const metadata: Metadata = {
  title: "Careers · Rivago Infotech",
  description: "Browse open senior roles at Rivago Infotech and apply — partner-track positions across Delaware, Pune and Ontario.",
  alternates: { canonical: "https://rivagoinfotech.com/open-positions" },
  openGraph: {
    title: "Careers · Rivago Infotech",
    description: `Browse ${positions.length} open senior roles at Rivago Infotech and apply — partner-track positions across Delaware, Pune and Ontario.`,
    url: "https://rivagoinfotech.com/open-positions",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rivagoinfotech.com/" },
    { "@type": "ListItem", position: 2, name: "Careers", item: "https://rivagoinfotech.com/career" },
    { "@type": "ListItem", position: 3, name: "Open Positions", item: "https://rivagoinfotech.com/career/open-positions" },
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
