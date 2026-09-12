import Link from "next/link";
import type { Metadata } from "next";
import { routes } from "@/lib/routes";
import { positions } from "./positions-data";
import OpenPositionsBoard from "./OpenPositionsBoard";

export const metadata: Metadata = {
  title: `Open Positions (${positions.length}) — Rivago Infotech`,
  description: "Work at Rivago Infotech itself. Open internal roles across Operations, Marketing, People, Engineering, Finance and Client teams in Pune, Delaware, Ontario and remote.",
  alternates: { canonical: "https://rivagoinfotech.com/open-positions" },
  openGraph: {
    title: `Open Positions (${positions.length}) — Rivago Infotech`,
    description: "Work at Rivago Infotech itself. Open internal roles across Operations, Marketing, People, Engineering, Finance and Client teams.",
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

      <header className="page-hero">
        <div className="page-hero-inner wide">
          <div className="crumbs"><Link href={routes.home}>Home</Link><span className="crumbs-sep">/</span><Link href={routes.career}>Careers</Link><span className="crumbs-sep">/</span><span>Open Positions</span></div>
          <div className="eyebrow ew-light gs" style={{ marginBottom: 28, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Work at Rivago</div>
          <h1 className="gs">Open Positions <em>({positions.length})</em></h1>
          <p className="lead gs">These are internal roles at Rivago Infotech itself — recruiters, operators, marketers, engineers and finance partners who build the firm, not client mandates. If you want to work at a client company instead, see our <Link href={routes.viewJobs} style={{ color: "var(--green)" }}>client job board</Link>.</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <OpenPositionsBoard />
        </div>
      </section>

      <section className="clients-cta gs">
        <h2>Don&apos;t see<br />the <em>right fit?</em></h2>
        <p>We grow this list as the team scales. Send a note to our People team and we&apos;ll keep you in mind for what&apos;s next.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a className="btn btn-cream-prim" href="mailto:careers@rivagoinfotech.com">Email careers@rivagoinfotech.com</a>
          <Link className="btn btn-cream-ghost" href={routes.career}>Back to Work at Rivago</Link>
        </div>
      </section>
    </>
  );
}
