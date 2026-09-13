import Link from "next/link";
import type { Metadata } from "next";
import { routes, offices, servicesList } from "@/lib/routes";
import IndustriesNav from "./IndustriesNav";
import { practices, spine, writtenGuarantees } from "./data";

export const metadata: Metadata = {
  title: "Industries — Rivago Infotech",
  description: "Ten specialist practices — technology, finance, healthcare, legal and more. Rivago Infotech places senior talent with deep sector depth across four markets.",
  alternates: { canonical: "https://rivagoinfotech.com/industries" },
  openGraph: {
    title: "Industries — Rivago Infotech",
    description: "Ten specialist practices — technology, finance, healthcare, legal and more. Rivago Infotech places senior talent with deep sector depth across four markets.",
    url: "https://rivagoinfotech.com/industries",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rivagoinfotech.com/" },
    { "@type": "ListItem", position: 2, name: "Industries", item: "https://rivagoinfotech.com/industries" },
  ],
};

const Arrow = () => (
  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export default function IndustriesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <header className="page-hero inv">
        <div className="page-hero-inner">
          <div className="crumbs"><Link href={routes.home}>Home</Link><span className="crumbs-sep">/</span><span>Industries</span></div>
          <div className="eyebrow ew-light gs" style={{ marginBottom: 28, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Industries · {practices.length} practices</div>
          <h1 className="gs">Specialist partners,<br />aligned to the <em>sector you hire in.</em></h1>
          <p className="lead gs" style={{ marginTop: 24 }}>Every brief goes to a partner who recruits in that sector, not to whoever is free. They know the titles, the org shapes and the people who never apply through a portal.</p>

          {/* Was: 1,486 active mandates, 34 senior partners, 11 years average
              partner tenure — none of them measured. These four are counted
              from the data on this site, so they cannot drift out of true. */}
          <div className="page-hero-meta gs">
            <div className="page-hero-meta-row"><span>Practices</span><strong>{practices.length}</strong></div>
            <div className="page-hero-meta-row"><span>Markets</span><strong>US · Canada · UAE · India</strong></div>
            <div className="page-hero-meta-row"><span>Offices</span><strong>{offices.length}</strong></div>
            <div className="page-hero-meta-row"><span>Ways to engage</span><strong>{servicesList.filter((x) => x.href !== routes.services).length}</strong></div>
          </div>
        </div>

        {/* Removed: "21 days median time-to-shortlist", "94% offer-acceptance
            rate", "62k+ senior operators in the Rivago private network" and
            "91% 12-month retention of every retained placement". None were
            measured, and the meta row above already carries what is true. */}
      </header>

      <IndustriesNav />

      {practices.map((p, i) => (
        /* Alternate bands are the light islands: ten near-identical
           sections in a row need the rhythm to stay countable. */
        <section className={`industry${i % 2 === 1 ? " inv" : ""}`} id={p.id} key={p.id}>
          <div className="industry-inner">
            <div className="gs">
              <div className="industry-label">{p.practiceNum}</div>
              <h2 className="industry-h2">
                {p.titleTop}<br />
                {"titleMid" in p && p.titleMid ? `${p.titleMid} ` : ""}
                <em>{p.titleEm}</em>
              </h2>
              <p className="industry-lede">{p.lede}</p>
            </div>

            {/* The panel held an invented practice partner, four invented
                metrics and a sample placement with a salary on it. The roles
                move here from the left column — they are the one thing in this
                section that was always true, once the placement counts beside
                them came off. */}
            <div className="industry-panel gs">
              <div className="industry-roles-label">Roles we recruit in this practice</div>
              <div className="industry-roles">
                {p.roles.map((nm) => (
                  <div className="ir-row" key={nm}><span className="nm">{nm}</span></div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* COMMON SPINE */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="wrap gs">
          <div className="eyebrow ew-light" style={{ marginBottom: 18, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>The common spine</div>
          <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 760, marginBottom: 22 }}>Ten practices.<br /><em>One search methodology.</em></h2>
          <p style={{ color: "var(--text2)", fontSize: "var(--fz7)", fontWeight: 400, lineHeight: 1.7, maxWidth: 560, marginBottom: 64 }}>Every practice runs the same five-stage process. The only thing that changes is who&apos;s on the other end of the phone — and how much they already know about your sector when they pick it up.</p>
          <div className="ind-spine-grid" style={{ gap: 1, background: "var(--border)", border: "1px solid var(--border)", borderRadius: 20, overflow: "hidden" }}>
            {spine.map(([step, title, desc]) => (
              <div key={step} style={{ background: "var(--bg)", padding: "36px 28px" }}>
                <div style={{ fontFamily: "var(--fm)", fontSize: "var(--fz1)", color: "var(--accent)", letterSpacing: ".06em", marginBottom: 18 }}>{step}</div>
                <div style={{ fontSize: "var(--fz5)", color: "var(--text)", fontWeight: 500, marginBottom: 10 }}>{title}</div>
                <div style={{ fontSize: "var(--fz4)", color: "var(--text3)", lineHeight: 1.65, fontWeight: 400 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE PUT IN WRITING (CREAM) */}
      <section className="section cream lt">
        <div className="wrap gs">
          <div className="ind-writing-head" style={{ gap: 80, alignItems: "end", marginBottom: 56 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 18, display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(11,19,17,.06)", color: "var(--text-inv-2)" }}><span className="eyebrow-dot" style={{ background: "var(--accent-inv)" }}></span>What we put in writing</div>
              <h2 className="section-h2" style={{ color: "var(--text-inv-1)" }}>Four things we commit to<br /><em>on the first call.</em></h2>
            </div>
            <p style={{ color: "var(--text-inv-2)", fontSize: "var(--fz5)", lineHeight: 1.78, fontWeight: 400, maxWidth: 460 }}>Same in technology as in healthcare. Same in finance as in defence. The practice lead changes; the bar doesn&apos;t.</p>
          </div>
          <div className="ind-guarantee-grid" style={{ gap: 16 }}>
            {writtenGuarantees.map(([when, title, desc]) => (
              <div key={title} style={{ background: "var(--surface-inv-2)", borderRadius: 24, padding: "36px 32px 40px", border: "1px solid rgba(11,19,17,.06)" }}>
                <div style={{ fontFamily: "var(--fm)", fontSize: "var(--fz1)", letterSpacing: ".06em", textTransform: "uppercase", color: "var(--accent-inv)", paddingBottom: 16, marginBottom: 22, borderBottom: "1px solid rgba(11,19,17,.1)" }}>{when}</div>
                <div style={{ fontSize: "var(--fz5)", fontWeight: 500, color: "var(--text-inv-1)", marginBottom: 8 }}>{title}</div>
                <div style={{ fontSize: "var(--fz4)", color: "var(--text-inv-2)", lineHeight: 1.65, fontWeight: 400 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The practice-level testimonials section stood here: three quotes from
          named heads of talent, GCs and CFOs, each thanking one of the invented
          practice partners by first name. Section removed rather than left
          empty — see the note on practiceTestimonials in ./data.ts. Real
          quotes, even anonymised to a sector and a country, can bring it back.
          The markup is in git history at the commit that removed it. */}

      {/* CTA */}
      <section className="clients-cta gs inv">
        <h2>Which practice<br />are you <em>hiring into?</em></h2>
        <p>We&apos;ll put the practice lead on the line for a 30-minute scoping call. Tell us which sector to bring.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn btn-cream-prim" data-hire>Book a scoping call <Arrow /></button>
          <Link className="btn btn-cream-ghost" href={routes.resources}>Read our hiring guides</Link>
        </div>
      </section>
    </>
  );
}
