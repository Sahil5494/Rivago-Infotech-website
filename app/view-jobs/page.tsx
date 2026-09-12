import type { Metadata } from "next";
import JobsBoard from "./JobsBoard";

export const metadata: Metadata = {
  title: "View Jobs — Rivago Infotech",
  description: "Browse open roles Rivago Infotech is recruiting for on behalf of its clients across the US, Canada, UAE and India. Apply directly — no portal, no black hole.",
  alternates: { canonical: "https://rivagoinfotech.com/view-jobs" },
  openGraph: {
    title: "View Jobs — Rivago Infotech",
    description: "Browse open roles Rivago Infotech is recruiting for on behalf of its clients across the US, Canada, UAE and India.",
    url: "https://rivagoinfotech.com/view-jobs",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rivagoinfotech.com/" },
    { "@type": "ListItem", position: 2, name: "View Jobs", item: "https://rivagoinfotech.com/view-jobs" },
  ],
};

export default function ViewJobsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <JobsBoard />
    </>
  );
}
