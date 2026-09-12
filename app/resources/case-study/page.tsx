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
    description: cs.dek,
    alternates: { canonical: url },
    openGraph: { title: `${cs.title} — Rivago Infotech`, description: cs.dek, url },
  };
}

const Arrow = () => (
  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const BackArrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 7H3M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
    description: cs.dek,
    author: { "@type": "Organization", name: "Rivago Infotech" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <style>{`
        .detail-banner{position:relative;height:280px;margin:0 44px;border-radius:24px;overflow:hidden;background:
          radial-gradient(ellipse 70% 90% at 15% 20%,rgba(61,255,135,.22) 0%,transparent 55%),
          radial-gradient(ellipse 60% 80% at 85% 90%,rgba(0,180,120,.18) 0%,transparent 55%),
          linear-gradient(155deg,#0A1A0C 0%,#061308 55%,#030C05 100%);
          border:1px solid var(--border);display:flex;align-items:center;justify-content:center;text-align:center;padding:32px}
        .detail-banner::before{content:'';position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.05) 1px,transparent 1px);background-size:26px 26px;opacity:.5}
        .detail-banner-txt{position:relative;z-index:1;font-family:var(--fs);font-style:italic;font-size:clamp(20px,2.6vw,32px);color:rgba(240,244,240,.92);max-width:640px;line-height:1.4;letter-spacing:-.01em}
        .detail-back{display:inline-flex;align-items:center;gap:7px;font-size:13px;color:var(--text2);margin-bottom:32px;transition:color .18s}
        .detail-back:hover{color:var(--green)}
        .cs-layout{display:grid;grid-template-columns:1fr 280px;gap:56px;align-items:start;max-width:1100px;margin:0 auto}
        .cs-main h2{font-size:22px;font-weight:400;letter-spacing:-.02em;color:var(--text);margin:40px 0 14px}
        .cs-main h2:first-child{margin-top:0}
        .cs-main p{font-size:15.5px;color:var(--text2);line-height:1.82;font-weight:300;margin-bottom:16px}
        .cs-section-tag{display:inline-block;font-size:10.5px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:var(--green);margin-bottom:6px}
        .cs-pullquote{font-family:var(--fs);font-style:italic;font-size:clamp(22px,2.4vw,30px);line-height:1.5;color:var(--text);border-left:2px solid var(--green);padding:4px 0 4px 26px;margin:40px 0}
        .cs-pullquote-attr{display:block;font-family:var(--ff);font-style:normal;font-size:13px;color:var(--text3);margin-top:14px;letter-spacing:0}
        .cs-aside{position:sticky;top:90px;display:flex;flex-direction:column;gap:16px}
        .cs-glance{background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:24px}
        .cs-glance-h{font-size:11px;font-weight:600;color:var(--text3);text-transform:uppercase;letter-spacing:.07em;margin-bottom:16px}
        .cs-glance-row{padding:12px 0;border-bottom:1px solid var(--border)}
        .cs-glance-row:last-child{border-bottom:none;padding-bottom:0}
        .cs-glance-row:first-child{padding-top:0}
        .cs-glance-row .k{font-size:11px;color:var(--text3);margin-bottom:3px}
        .cs-glance-row .v{font-size:13.5px;color:var(--text);font-weight:500}
        @media(max-width:900px){.detail-banner{margin:0 20px;height:220px}.cs-layout{grid-template-columns:1fr}.cs-aside{position:static}}
      `}</style>

      <header className="page-hero" style={{ paddingBottom: 44 }}>
        <div className="page-hero-inner wide">
          <div className="crumbs"><Link href={routes.home}>Home</Link><span className="crumbs-sep">/</span><Link href={routes.resources}>Resources</Link><span className="crumbs-sep">/</span><span>Case Study</span></div>
          <div className="eyebrow ew-light gs" style={{ marginBottom: 24, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>{cs.eyebrow}</div>
          <h1 className="gs" style={{ fontSize: "clamp(32px,4.6vw,52px)" }}>{cs.title}</h1>
          <p className="lead gs" style={{ marginTop: 16 }}>{cs.dek}</p>
          <div style={{ marginTop: 36, maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
            <div className="page-hero-meta gs">
              {cs.stats.map(([label, val]) => (
                <div className="page-hero-meta-row" key={label}><span>{label}</span><strong>{val}</strong></div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="detail-banner gs">
        <div className="detail-banner-txt">&ldquo;{cs.quote}&rdquo;</div>
      </div>

      <section className="section">
        <div className="wrap">
          <Link className="detail-back gs" href={`${routes.resources}?view=cs`}><BackArrow /> Back to all case studies</Link>
          <div className="cs-layout">
            <div className="cs-main">
              <div className="gs">
                <span className="cs-section-tag">The challenge</span>
                <h2>What we were asked to solve</h2>
                {cs.challenge.map((p, i) => (<p key={i}>{p}</p>))}
              </div>
              <div className="gs">
                <span className="cs-section-tag">What we did</span>
                <h2>How the search actually ran</h2>
                {cs.whatWeDid.map((p, i) => (<p key={i}>{p}</p>))}
              </div>
              <blockquote className="cs-pullquote gs">
                &ldquo;{cs.quote}&rdquo;
                <span className="cs-pullquote-attr">— {cs.quoteAttribution}</span>
              </blockquote>
              <div className="gs">
                <span className="cs-section-tag">The outcome</span>
                <h2>Where it landed</h2>
                {cs.outcome.map((p, i) => (<p key={i}>{p}</p>))}
              </div>
            </div>
            <aside className="cs-aside">
              <div className="cs-glance gs">
                <div className="cs-glance-h">At a glance</div>
                {cs.atGlance.map(([k, v]) => (
                  <div className="cs-glance-row" key={k}><div className="k">{k}</div><div className="v">{v}</div></div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="clients-cta gs">
        <h2>Have a search like<br />this one to <em>run?</em></h2>
        <p>Send the brief and a partner in the right practice comes back with a written plan within one business day.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button className="btn btn-cream-prim" data-hire>Book a strategy call <Arrow /></button>
          <Link className="btn btn-cream-ghost" href={`${routes.resources}?view=cs`}>More case studies</Link>
        </div>
      </section>
    </>
  );
}
