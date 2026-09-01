import type { Metadata } from "next";
import JobsBoard from "@/app/view-jobs/JobsBoard";

export const metadata: Metadata = {
  title: "Search Jobs — Rivago Infotech",
  description: "Search live client roles by title, skill or city. Rivago Infotech recruits across the US, Canada, UAE and India — apply directly to a real, current mandate.",
  alternates: { canonical: "https://rivagoinfotech.com/search-jobs" },
  openGraph: {
    title: "Search Jobs — Rivago Infotech",
    description: "Search live client roles by title, skill or city. Rivago Infotech recruits across the US, Canada, UAE and India.",
    url: "https://rivagoinfotech.com/search-jobs",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rivagoinfotech.com/" },
    { "@type": "ListItem", position: 2, name: "Search Jobs", item: "https://rivagoinfotech.com/search-jobs" },
  ],
};

export default function SearchJobsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <JobsBoard emphasizeSearch />
    </>
  );
}
