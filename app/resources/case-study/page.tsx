import Link from "next/link";
import type { Metadata } from "next";
import { routes } from "@/lib/routes";
import { findCaseStudy } from "../data";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
  const { id } = await searchParams;
  const cs = findCaseStudy(typeof id === "string" ? id : undefined);
  const url = `https://rivagoinfotech.com/resources/case-study?id=${cs.id}`;
  return {
    title: `${cs.title} — Rivago Infotech`,
    description: cs.title,
    alternates: { canonical: url },
    openGraph: { title: `${cs.title} — Rivago Infotech`, description: cs.title, url },
  };
}

const BackArrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 7H3M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const Arrow = () => (
  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export default async function CaseStudyPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = await searchParams;
  const cs = findCaseStudy(typeof id === "string" ? id : undefined);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.title,
    author: { "@type": "Organization", name: "Rivago Infotech" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="detail-hero">
        <div className="detail-wrap">
          <Link className="detail-back" href={`${routes.resources}?view=cs`}><BackArrow /> Back to all case studies</Link>
          <div className="detail-eyebrow">{cs.tag} · {cs.quarter}</div>
          <h1 className="detail-title">{cs.title}</h1>

          <div className="detail-stats">
            {cs.stats.map(([v, l]) => (
              <div key={l}><div className="detail-stat-v">{v}</div><div className="detail-stat-l">{l}</div></div>
            ))}
          </div>

          <div className="detail-banner">
            <h2>&ldquo;{cs.quote}&rdquo;</h2>
          </div>
        </div>
      </header>

      <div className="detail-body">
        <h2>The challenge</h2>
        {cs.challenge.map((p, i) => (<p key={i}>{p}</p>))}

        <h2>What we did</h2>
        {cs.whatWeDid.map((p, i) => (<p key={i}>{p}</p>))}

        <div className="detail-quote">
          <p>&ldquo;{cs.quote}&rdquo;</p>
          <div className="detail-quote-attr">— {cs.quoteAttribution}</div>
        </div>

        <h2>The outcome</h2>
        {cs.outcome.map((p, i) => (<p key={i}>{p}</p>))}

        <div className="detail-sidebar">
          <div className="detail-sidebar-h">At a glance</div>
          {cs.atGlance.map(([k, v]) => (
            <div className="detail-sidebar-row" key={k}><span>{k}</span><span>{v}</span></div>
          ))}
        </div>
      </div>

      <section className="rcs-cta">
        <h2>Have a search like<br /><em>this one to run?</em></h2>
        <p>Send the brief and a partner in the right practice comes back with a written plan within one business day.</p>
        <div className="rcs-cta-btns">
          <button className="cs-btn-d" data-hire>Book a strategy call <Arrow /></button>
          <Link className="cs-btn-g" href={`${routes.resources}?view=cs`}>More case studies</Link>
        </div>
      </section>
    </>
  );
}
