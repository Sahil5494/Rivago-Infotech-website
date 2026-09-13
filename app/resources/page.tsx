import type { Metadata } from "next";
import ResourcesView from "./ResourcesView";

export const metadata: Metadata = {
  title: "Resources · Rivago Infotech",
  description: "Hiring intelligence from Rivago Infotech — compensation benchmarks, market reads and hiring playbooks, free to read with no sign-up.",
  alternates: { canonical: "https://rivagoinfotech.com/resources" },
  openGraph: {
    title: "Resources · Rivago Infotech",
    description: "Hiring intelligence from Rivago Infotech — compensation benchmarks, market reads and hiring playbooks, free to read with no sign-up.",
    url: "https://rivagoinfotech.com/resources",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rivagoinfotech.com/" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://rivagoinfotech.com/resources" },
  ],
};

/* No longer reads searchParams. ?view= selected between All, Blog and Case
   Studies; there is one library now, so any ?view=... still in the wild — a
   bookmark, an old inbound link — lands on it rather than breaking. */
export default function ResourcesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ResourcesView />
    </>
  );
}
