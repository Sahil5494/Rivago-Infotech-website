import Link from "next/link";
import type { Metadata } from "next";
import { routes } from "@/lib/routes";
import IndustriesNav from "./IndustriesNav";
import { practices, spine, writtenGuarantees, practiceTestimonials } from "./data";

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

      <header className="page-hero">
        <div className="page-hero-inner">
          <div className="crumbs"><Link href={routes.home}>Home</Link><span className="crumbs-sep">/</span><span>Industries</span></div>
          <div className="eyebrow ew-light gs" style={{ marginBottom: 28, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Industries · 10 practices</div>
          <h1 className="gs">Specialist partners,<br />aligned to the <em>sector you hire in.</em></h1>
          <p className="lead gs" style={{ marginTop: 24 }}>Every Rivago partner runs one practice and has placed inside it for seven or more years. They know the comp bands, the unpublished orgs, and the people whose LinkedIn still says &ldquo;Director&rdquo; three years after they made VP.</p>

          <div className="page-hero-meta gs">
            <div className="page-hero-meta-row"><span>Active mandates</span><strong>1,486</strong></div>
            <div className="page-hero-meta-row"><span>Practices</span><strong>10</strong></div>
            <div className="page-hero-meta-row"><span>Senior partners</span><strong>34</strong></div>
            <div className="page-hero-meta-row"><span>Avg. partner tenure in-practice</span><strong>11 years</strong></div>
          </div>
        </div>

        <div className="cross-stats-inner gs">
          <div className="cs-c"><div className="cs-v">21<span className="unit">days</span></div><div className="cs-l">Median time-to-shortlist across all practices, last 12 months.</div></div>
          <div className="cs-c"><div className="cs-v">94<span className="unit">%</span></div><div className="cs-l">Offer-acceptance rate. Cross-practice. Cross-seniority.</div></div>
          <div className="cs-c"><div className="cs-v">62k<span className="unit">+</span></div><div className="cs-l">Senior operators in the Rivago private network.</div></div>
          <div className="cs-c"><div className="cs-v">91<span className="unit">%</span></div><div className="cs-l">12-month retention of every retained placement.</div></div>
        </div>
      </header>

      <IndustriesNav />

      {practices.map((p) => (
        <section className="industry" id={p.id} key={p.id}>
          <div className="industry-inner">
            <div className="gs">
              <div className="industry-label">{p.practiceNum} · {p.estYear}</div>
              <h2 className="industry-h2">
                {p.titleTop}<br />
                {"titleMid" in p && p.titleMid ? `${p.titleMid} ` : ""}
                <em>{p.titleEm}</em>
              </h2>
              <p className="industry-lede">{p.lede}</p>
              <div className="industry-roles-label">Typical roles · last 90 days</div>
              <div className="industry-roles">
                {p.roles.map(([nm, ct]) => (
                  <div className="ir-row" key={nm}><span className="nm">{nm}</span><span className="ct">{ct}</span></div>
                ))}
              </div>
            </div>
            <div className="industry-panel gs">
              <div className="lead-card">
                <div className="lead-av" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,#3DFF87,#00A882)", color: "#030C05", fontWeight: 600, fontSize: 15, letterSpacing: ".02em" }}>{p.partner.initials}</div>
                <div>
                  <div className="lead-name">{p.partner.name}</div>
                  <div className="lead-title">{p.partner.title}</div>
                  <div className="lead-cred">{p.partner.creds.map((c) => <span key={c}>{c}</span>)}</div>
                </div>
              </div>
              <div className="stat-grid">
                {p.stats.map(([v, unit, l]) => (
                  <div className="stat-cell" key={l}><div className="stat-v">{v}{unit && <span className="unit">{unit}</span>}</div><div className="stat-l">{l}</div></div>
                ))}
              </div>
              {"sample" in p && p.sample && (
                <div className="sample">
                  <div className="sample-h">Recent placement</div>
                  <div className="sample-line">{p.sample.line}</div>
                  <div className="sample-sub">{p.sample.sub}</div>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* COMMON SPINE */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="wrap gs">
          <div className="eyebrow ew-light" style={{ marginBottom: 18, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>The common spine</div>
          <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 760, marginBottom: 22 }}>Ten practices.<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>One search methodology.</em></h2>
          <p style={{ color: "var(--text2)", fontSize: 17, fontWeight: 300, lineHeight: 1.7, maxWidth: 560, marginBottom: 64 }}>Every practice runs the same five-stage process. The only thing that changes is who&apos;s on the other end of the phone — and how much they already know about your sector when they pick it up.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 1, background: "var(--border)", border: "1px solid var(--border)", borderRadius: 20, overflow: "hidden" }}>
            {spine.map(([step, title, desc]) => (
              <div key={step} style={{ background: "var(--bg)", padding: "36px 28px" }}>
                <div style={{ fontFamily: "var(--fm)", fontSize: 12, color: "var(--green)", letterSpacing: ".06em", marginBottom: 18 }}>{step}</div>
                <div style={{ fontSize: 16, color: "var(--text)", fontWeight: 500, marginBottom: 10 }}>{title}</div>
                <div style={{ fontSize: 13, color: "var(--text3)", lineHeight: 1.65, fontWeight: 300 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE PUT IN WRITING (CREAM) */}
      <section className="section cream">
        <div className="wrap gs">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "end", marginBottom: 56 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 18, display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(11,19,17,.06)", color: "#3D5240" }}><span className="eyebrow-dot" style={{ background: "#0A7040" }}></span>What we put in writing</div>
              <h2 className="section-h2" style={{ color: "#0A140B" }}>Four numbers we&apos;ll stand behind<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>on the first call.</em></h2>
            </div>
            <p style={{ color: "#3D5240", fontSize: 16, lineHeight: 1.78, fontWeight: 300, maxWidth: 460 }}>Same in technology as in healthcare. Same in finance as in defence. The practice lead changes; the bar doesn&apos;t.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {writtenGuarantees.map(([v, unit, title, desc]) => (
              <div key={title} style={{ background: "#fff", borderRadius: 24, padding: "40px 32px", border: "1px solid rgba(11,19,17,.06)" }}>
                <div style={{ fontSize: 72, lineHeight: 1, letterSpacing: "-.035em", color: "#0A7040", fontWeight: 400, marginBottom: 20 }}>{v}{unit && <span style={{ fontSize: 18, color: "#7A9080", marginLeft: 4 }}>{unit}</span>}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#0A140B", marginBottom: 8 }}>{title}</div>
                <div style={{ fontSize: 13, color: "#3D5240", lineHeight: 1.65, fontWeight: 300 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICE-LEVEL TESTIMONIALS */}
      <section className="section">
        <div className="wrap gs">
          <div className="eyebrow ew-light" style={{ marginBottom: 18, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>From hiring managers</div>
          <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 720, marginBottom: 22 }}>Notes from the<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>other side of the table.</em></h2>
          <p style={{ color: "var(--text2)", fontSize: 17, fontWeight: 300, lineHeight: 1.7, maxWidth: 540, marginBottom: 64 }}>Plain English from heads of talent, GCs, and CFOs who hired through a Rivago practice in the last eighteen months.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
            {practiceTestimonials.map((t) => (
              <div key={t.name} style={{ padding: "32px 30px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 20, display: "flex", flexDirection: "column" }}>
                <div style={{ fontFamily: "var(--fm)", fontSize: 11, color: "var(--green)", letterSpacing: ".05em", textTransform: "uppercase", marginBottom: 18 }}>{t.practice}</div>
                <p style={{ fontSize: 15.5, color: "var(--text)", lineHeight: 1.72, fontWeight: 400, marginBottom: 24, flex: 1 }}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 18, borderTop: "1px solid var(--border)" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,var(--green),#0A7040)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, color: "#030C05", fontSize: 12 }}>{t.initials}</div>
                  <div><div style={{ fontSize: 13, fontWeight: 500, color: "var(--text)" }}>{t.name}</div><div style={{ fontSize: 11, color: "var(--text3)" }}>{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="clients-cta gs">
        <h2>Which practice<br />are you <em>hiring into?</em></h2>
        <p>We&apos;ll put the practice lead on the line for a 30-minute scoping call. Tell us which sector to bring.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button className="btn btn-cream-prim" data-hire>Book a scoping call <Arrow /></button>
          <Link className="btn btn-cream-ghost" href={`${routes.resources}?view=cs`}>See case studies</Link>
        </div>
      </section>
    </>
  );
}
