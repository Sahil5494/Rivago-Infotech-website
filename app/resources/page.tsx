import Link from "next/link";
import type { Metadata } from "next";
import { routes } from "@/lib/routes";
import ResourcesGrid from "./ResourcesGrid";

export const metadata: Metadata = {
  title: "Resources — Rivago Infotech",
  description: "Hiring intel, market data and real placement stories — the anti-portal manifesto, salary breakdowns, and case studies from searches Rivago has actually run.",
  alternates: { canonical: "https://rivagoinfotech.com/resources" },
  openGraph: {
    title: "Resources — Rivago Infotech",
    description: "Hiring intel, market data and real placement stories — the anti-portal manifesto, salary breakdowns, and case studies from searches Rivago has actually run.",
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

export default async function ResourcesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { view } = await searchParams;
  const initialTab = view === "cs" ? "case-study" : "all";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <header className="page-hero">
        <div className="page-hero-inner">
          <div className="crumbs"><Link href={routes.home}>Home</Link><span className="crumbs-sep">/</span><span>Resources</span></div>
          <div className="eyebrow ew-light gs" style={{ marginBottom: 28, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Resources</div>
          <h1 className="gs">Hiring intel, straight<br />from <em>inside the search.</em></h1>
          <p className="lead gs">Salary data, market notes and case studies pulled from mandates our own partners are running right now — not aggregated survey data with a nice chart wrapped around it.</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <ResourcesGrid initialTab={initialTab} />
        </div>
      </section>
    </>
  );
}
