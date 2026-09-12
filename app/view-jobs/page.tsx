import { Suspense } from "react";
import type { Metadata } from "next";
import JobsBoard from "./JobsBoard";

export const metadata: Metadata = {
  title: "Job Search · Browse All Jobs | Rivago Infotech",
  description: "Browse live client roles briefed directly to Rivago Infotech — AI, data, engineering, finance, healthcare and legal openings across the US, Canada, the UAE and India. Contract, contract-to-hire and direct hire.",
  alternates: { canonical: "https://rivagoinfotech.com/view-jobs" },
  openGraph: {
    title: "Job Search · Browse All Jobs | Rivago Infotech",
    description: "Browse live client roles briefed directly to Rivago Infotech — AI, data, engineering, finance, healthcare and legal openings across the US, Canada, the UAE and India.",
    url: "https://rivagoinfotech.com/view-jobs",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rivagoinfotech.com/" },
    { "@type": "ListItem", position: 2, name: "Careers", item: "https://rivagoinfotech.com/career" },
    { "@type": "ListItem", position: 3, name: "Search Jobs", item: "https://rivagoinfotech.com/view-jobs" },
  ],
};

export default function ViewJobsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Suspense fallback={null}>
        <JobsBoard />
      </Suspense>
    </>
  );
}
