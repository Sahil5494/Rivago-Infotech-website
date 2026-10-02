import type { Metadata } from "next";
import { positions } from "./positions-data";
import OpenPositionsBoard from "./OpenPositionsBoard";
import { ogBase } from "@/lib/og";

export const metadata: Metadata = {
  title: "Open Positions · Careers at Rivago Infotech",
  description: "Open positions at Rivago Infotech — recruitment, business development, client and delivery roles, based at our Pune office or remote.",
  alternates: { canonical: "https://rivagoinfotech.com/open-positions" },
  openGraph: {
    ...ogBase,
    title: "Open Positions · Careers at Rivago Infotech",
    description: positions.length ? `${positions.length} open roles at Rivago Infotech — recruitment, business development, client and delivery, based in Pune or remote.` : "Careers at Rivago Infotech. We are always talking to experienced recruiters — send us your CV.",
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
