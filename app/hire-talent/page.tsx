import Link from "next/link";
import type { Metadata } from "next";
import IntakeForm from "@/components/IntakeForm";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "For clients — Rivago Infotech",
  description: "Hire senior, fully-screened talent fast. Rivago Infotech delivers direct hire, contract and executive search with a 48-hour shortlist and one partner from brief to placement.",
  alternates: { canonical: "https://rivagoinfotech.com/hire-talent" },
  openGraph: {
    title: "For clients — Rivago Infotech",
    description: "Hire senior, fully-screened talent fast. Rivago Infotech delivers direct hire, contract and executive search with a 48-hour shortlist and one partner from brief to placement.",
    url: "https://rivagoinfotech.com/hire-talent",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rivagoinfotech.com/" },
    { "@type": "ListItem", position: 2, name: "Hire Talent", item: "https://rivagoinfotech.com/hire-talent" },
  ],
};

const modes = [
  {
    num: "01",
    title: "Retained executive search",
    desc: "Director and VP roles where fit matters more than speed. We embed for the full cycle — brief, mapping, longlist, shortlist, offer.",
    bullets: ["Dedicated partner + research analyst", "Weekly written progress reports", "Replacement guarantee — 12 months", "Salary benchmarking included"],
    highlight: false,
  },
  {
    num: "02",
    title: "Contingent placement",
    desc: "Manager to Senior individual contributor. Pay only on a placement that sticks past the guarantee window. Most common engagement.",
    bullets: ["48-hour median shortlist", "3–5 pre-screened candidates per role", "Replacement guarantee — 90 days", "No upfront fee"],
    highlight: true,
  },
  {
    num: "03",
    title: "Embedded talent partner",
    desc: "For teams scaling 10+ hires across a quarter. A Rivago partner sits inside your TA function, runs your pipeline, owns the outcome.",
    bullets: ["4–12 week sprints, renewable", "Full ATS + scorecard integration", "Fixed monthly retainer", "Weekly hiring-manager standups"],
    highlight: false,
  },
];

const stages = [
  { step: "Stage 01 · Day 0–2", title: "The intake", desc: "A 60-minute working session with the hiring manager and the partner who will run the search. We pressure-test the JD, agree on must-haves vs. nice-to-haves, set the scorecard, and write the off-limits list. You sign off before we source a single profile.", side: [["Owner", "Lead partner"], ["Output", "Signed JD + scorecard"], ["Time", "~60 min"]] },
  { step: "Stage 02 · Day 2–10", title: "Mapping & outreach", desc: "The research team builds a longlist of 40–80 names from competitor cap tables, alumni networks, and the Rivago private database. Outreach is bespoke per candidate — no copy-paste sequences. Response rates average 38% versus the industry baseline of 9%.", side: [["Longlist size", "40–80"], ["Reply rate", "38% avg"], ["Source mix", "Passive 80%"]] },
  { step: "Stage 03 · Day 10–18", title: "Screen & calibrate", desc: "45-minute structured interviews with every respondent — the same scorecard your panel will use. We submit the first three calibration profiles by day 12 and adjust the brief based on your reactions. The shortlist hardens by day 18.", side: [["Screens conducted", "18–24"], ["Submitted profiles", "5–7"], ["Reference depth", "3 per finalist"]] },
  { step: "Stage 04 · Day 18–28", title: "Panel & finalist", desc: "We project-manage the entire interview loop: scheduling, debriefs, calibration between rounds, and reference check coordination. You get a written brief 24 hours before each interview and a synthesis the morning after.", side: [["Loops scheduled", "3–5 finalists"], ["Debrief turn", "<24h"], ["Drop-off rate", "<6%"]] },
  { step: "Stage 05 · Day 28–35 + 12mo", title: "Close & care", desc: "We negotiate the offer, handle counter-offer defence, and stay close through the first 90 days. At months three, six and twelve we check in with both sides. If anything breaks in the guarantee window, we restart the search at no charge.", side: [["Counter rate", "11%"], ["90-day stick", "97%"], ["12-mo retention", "93%"]] },
];

const whyCards = [
  { title: "Fast without cutting corners", desc: "21-day median shortlists, every time. Every candidate is fully screened against your scorecard before reaching your inbox — not keyword-matched and not parsed by a machine.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="#3DFF87" strokeWidth="1.5" /><path d="M11 7v4l3 2" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" /></svg>) },
  { title: "One partner, full ownership", desc: "The same senior partner from brief to placement. No handoffs to BD, no relays through account managers, no junior researchers running the candidate calls.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="3.5" stroke="#3DFF87" strokeWidth="1.5" /><path d="M4 19c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" /></svg>) },
  { title: "Industry specialists", desc: "Your brief goes to a partner who's recruited in your sector for seven-plus years. They know the comp bands, the unpublished orgs and the people who haven't updated their LinkedIn in two years.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2l2 5 5 .7-3.6 3.5.9 5L11 13.5l-4.3 2.5.9-5L4 7.7l5-.7z" stroke="#3DFF87" strokeWidth="1.5" strokeLinejoin="round" /></svg>) },
  { title: "Documented & auditable", desc: "Every search produces a full audit trail — scorecards, screening notes, reference depth, decision rationale. Ready for board, compliance or DEI review at any point.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2l8 4v5c0 5-3.5 8.5-8 9.5C6.5 19.5 3 16 3 11V6z" stroke="#3DFF87" strokeWidth="1.5" strokeLinejoin="round" /></svg>) },
  { title: "Four markets, one standard", desc: "US, Canada, UAE, India — same partner-owned process everywhere. Visa, right-to-work, relocation and family logistics handled end-to-end with the hiring company.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="#3DFF87" strokeWidth="1.5" /><path d="M2 11h18M11 3a13 13 0 010 16M11 3a13 13 0 000 16" stroke="#3DFF87" strokeWidth="1.5" /></svg>) },
  { title: "Replacement guarantee", desc: "12-month replacement on retained engagements, 90-day on contingent — no questions asked, no extra fee. If a placement leaves, we restart the search at no charge.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="6" width="16" height="13" rx="2" stroke="#3DFF87" strokeWidth="1.5" /><path d="M7 6V4a2 2 0 012-2h4a2 2 0 012 2v2M7 12l3 3 6-6" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>) },
];

const industryTiles = [
  { name: "Technology", count: "312 active mandates", icon: (<svg viewBox="0 0 28 28" fill="none"><rect x="3" y="6" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M8 22v2M20 22v2M3 18h22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>) },
  { name: "Healthcare", count: "184 active mandates", icon: (<svg viewBox="0 0 28 28" fill="none"><path d="M14 4l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V8l8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M14 10v6M11 13h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>) },
  { name: "Legal", count: "92 active mandates", icon: (<svg viewBox="0 0 28 28" fill="none"><path d="M5 23h18M7 23V11M21 23V11M5 11h18M9 7l5-3 5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>) },
  { name: "Finance", count: "228 active mandates", icon: (<svg viewBox="0 0 28 28" fill="none"><path d="M4 22V8M10 22V12M16 22V6M22 22V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>) },
  { name: "Aerospace", count: "74 active mandates", icon: (<svg viewBox="0 0 28 28" fill="none"><path d="M2 18l6-12 8 4 4-3 6 5-4 9H2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>) },
  { name: "Telecom", count: "86 active mandates", icon: (<svg viewBox="0 0 28 28" fill="none"><path d="M14 4v20M4 8c3 3 7 5 10 5s7-2 10-5M4 20c3-3 7-5 10-5s7 2 10 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>) },
  { name: "Automotive", count: "62 active mandates", icon: (<svg viewBox="0 0 28 28" fill="none"><circle cx="8" cy="20" r="2.5" stroke="currentColor" strokeWidth="1.5" /><circle cx="20" cy="20" r="2.5" stroke="currentColor" strokeWidth="1.5" /><path d="M3 14h22l-2-7H5l-2 7zM10.5 20h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>) },
  { name: "Supply & ops", count: "128 active mandates", icon: (<svg viewBox="0 0 28 28" fill="none"><rect x="4" y="8" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M4 12h20M10 8V4h8v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>) },
  { name: "Sales & marketing", count: "204 active mandates", icon: (<svg viewBox="0 0 28 28" fill="none"><path d="M4 12c0-2 2-3 4-3s4 1 4 3-2 3-4 3-4 1-4 3 2 3 4 3M20 9v12M16 12h8M16 18h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>) },
  { name: "People & HR", count: "96 active mandates", icon: (<svg viewBox="0 0 28 28" fill="none"><circle cx="10" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" /><circle cx="20" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5" /><path d="M4 22c0-3.3 2.7-6 6-6s6 2.7 6 6M16 22c0-2.5 2-4.5 4-4.5s4 2 4 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>) },
];

const testimonials = [
  { tag: "US · Banking", quote: "Three hires in two weeks, all still with us 18 months later. The first recruiter we've worked with who actually pushes back on the brief instead of just sending résumés.", initials: "JM", name: "Jamie M.", role: "Head of Talent Acquisition · US regional bank" },
  { tag: "Canada · Financial services", quote: "The shortlist landed in 38 hours. Every candidate had been properly screened — comp, notice, right-to-work. Two went to offer that week. That's never happened before.", initials: "PR", name: "Priya R.", role: "HR Director · Ontario financial services" },
  { tag: "UAE · Healthcare", quote: "Clinical staffing in the UAE is brutal — licensing, DHA registration, the works. Rivago handled all of it without being told twice. Eleven placements, zero compliance issues.", initials: "SM", name: "Samira M.", role: "Chief People Officer · Dubai hospital group" },
];

const Arrow = () => (
  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const Check = () => (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l2.5 2.5L9 1" stroke="#3DFF87" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export default function HireTalentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <header className="page-hero">
        <div className="page-hero-inner wide">
          <div className="crumbs"><Link href={routes.home}>Home</Link><span className="crumbs-sep">/</span><span>For clients</span></div>
          <div className="eyebrow ew-light gs" style={{ marginBottom: 28, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>For clients</div>
          <h1 className="gs">The shortlist<br />that ends the <em>search.</em></h1>
          <p className="lead gs">Senior operators across technology, healthcare, legal, finance, aerospace, telecom and automotive — pre-screened, on-brief, in your inbox in 48 hours. A partner on the line, not a portal.</p>
          <div className="gs" style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center" }}>
            <a className="btn btn-prim" href="#intake">Book a strategy call <Arrow /></a>
            <Link className="btn btn-ghost" href={`${routes.resources}?view=cs`}>See proof</Link>
          </div>
          <div className="page-hero-meta gs">
            <div className="page-hero-meta-row"><span>Median time-to-shortlist</span><strong>48 hours</strong></div>
            <div className="page-hero-meta-row"><span>Offer-acceptance rate (LTM)</span><strong>94%</strong></div>
            <div className="page-hero-meta-row"><span>12-month retention</span><strong>93%</strong></div>
            <div className="page-hero-meta-row"><span>Partners per search</span><strong>One. Always.</strong></div>
            <div className="page-hero-meta-row"><span>Markets covered</span><strong>US · CA · UAE · IN</strong></div>
          </div>
        </div>
      </header>

      {/* SERVICE MODES */}
      <section className="section">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>How we engage</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 720 }}>Three ways to put a Rivago partner<br />on your <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>next requisition.</em></h2>
          </div>
          <div className="modes">
            {modes.map((m) => (
              <div className={`mode gs`} style={m.highlight ? { background: "rgba(61,255,135,.06)", border: "1px solid rgba(61,255,135,.2)", borderRadius: 18 } : { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 18 }} key={m.num}>
                <div className="mode-num">{m.num}</div>
                <div>
                  <div className="mode-title">{m.title}</div>
                  <div className="mode-desc">{m.desc}</div>
                </div>
                <ul className="mode-list">
                  {m.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS DEEP */}
      <section className="section alt">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>What we actually do</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 760 }}>A search runs five stages.<br />None of them are <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>a portal.</em></h2>
          </div>
          <div className="proc-deep">
            {stages.map((s) => (
              <div className="pd-row gs" key={s.step}>
                <div className="pd-step">{s.step}</div>
                <div className="pd-main"><h3>{s.title}</h3><p>{s.desc}</p></div>
                <div className="pd-side">
                  {s.side.map(([k, v]) => (
                    <div className="pd-side-row" key={k}><span>{k}</span><span className="v">{v}</span></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="section">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>What we put in writing</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 700 }}>Four numbers we&apos;ll stand behind<br />on the <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>first call.</em></h2>
          </div>
          <div className="guarantee">
            <div className="gtee gs"><div className="gtee-val">21<sup>days</sup></div><div className="gtee-title">Median time-to-shortlist</div><div className="gtee-desc">From signed JD to three calibrated finalists in your inbox.</div></div>
            <div className="gtee gs"><div className="gtee-val">94<sup>%</sup></div><div className="gtee-title">Offer-acceptance rate</div><div className="gtee-desc">Last 12 months, across all engagements and seniority bands.</div></div>
            <div className="gtee gs"><div className="gtee-val">12<sup>mo</sup></div><div className="gtee-title">Retained replacement</div><div className="gtee-desc">If a retained placement leaves inside 12 months we restart the search at no charge.</div></div>
            <div className="gtee gs"><div className="gtee-val">1</div><div className="gtee-title">Partner on the line</div><div className="gtee-desc">One name on the engagement. No handoffs. No call centres. Mobile included.</div></div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="section alt">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Why hiring managers choose us</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 720 }}>Built for hiring teams that<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>can&apos;t afford to slow down.</em></h2>
          </div>
          <div className="why-grid">
            {whyCards.map((c) => (
              <div className="why-card gs" key={c.title}>
                <div className="why-icon">{c.icon}</div>
                <div className="why-title">{c.title}</div>
                <div className="why-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICES / INDUSTRIES STRIP */}
      <section className="section">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Practices</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 720 }}>Specialist partners,<br />aligned to <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>your sector.</em></h2>
            <p style={{ color: "var(--text2)", maxWidth: 540, marginTop: 18, fontSize: 16, fontWeight: 300, lineHeight: 1.7 }}>Your brief goes straight to the partner who works your sector — not a shared queue. They already know who is good, who is moving, and what it takes to get them to take the call.</p>
          </div>
          <div className="ind-strip">
            {industryTiles.map((t) => (
              <Link href={routes.industries} className="ind-tile gs" key={t.name}>
                <span className="ic">{t.icon}</span>
                <div className="nm">{t.name}</div>
                <div className="ct">{t.count}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS CREAM */}
      <section className="section cream">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-dark" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>From hiring managers</div>
            <h2 className="section-h2" style={{ color: "var(--dt)", maxWidth: 720 }}>In their<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>own words.</em></h2>
            <p style={{ color: "var(--dt2)", fontSize: 16, lineHeight: 1.78, fontWeight: 300, maxWidth: 540, marginTop: 22 }}>Plain English from heads of talent, GCs, CFOs and founders who hired through Rivago in the last eighteen months. No pseudonyms. No doctored quotes.</p>
          </div>
          <div className="testi-cream">
            {testimonials.map((t) => (
              <div className="tc-card gs" key={t.name}>
                <span className="tc-tag">{t.tag}</span>
                <p className="tc-quote-serif">{t.quote}</p>
                <div className="tc-author2">
                  <div style={{ width: 40, height: 40, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,#3DFF87,#00A882)", color: "#030C05", fontWeight: 600, fontSize: 13, letterSpacing: ".02em" }}>{t.initials}</div>
                  <div><div className="tc-author2-name">{t.name}</div><div className="tc-author2-role">{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTAKE FORM */}
      <section className="intake-band" id="intake">
        <div className="intake-grid">
          <div className="intake-l gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 22, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Hire Talent</div>
            <h2>Tell us the role.<br /><em>We&apos;ll do the rest.</em></h2>
            <p>The form takes about four minutes. You will hear from a partner the same working day, with a calibration call booked before anyone is approached.</p>
            <div className="intake-bullets">
              <div className="intake-bullet"><div className="intake-bi"><Check /></div><div><strong>No retainer required.</strong> Contingent by default. Pay on placement, not on activity.</div></div>
              <div className="intake-bullet"><div className="intake-bi"><Check /></div><div><strong>One named partner</strong> — from brief to placement. No junior handoffs, no account managers in between.</div></div>
              <div className="intake-bullet"><div className="intake-bi"><Check /></div><div><strong>NDA on request.</strong> Confidential searches handled as standard — senior hires, sensitive replacements.</div></div>
              <div className="intake-bullet"><div className="intake-bi"><Check /></div><div><strong>90-day replacement guarantee.</strong> No questions, no additional fee. We restart the search.</div></div>
            </div>
          </div>
          <IntakeForm />
        </div>
      </section>

      {/* CTA */}
      <section className="clients-cta gs">
        <h2>Tell us who you need.<br /><em>We&apos;ll be back tomorrow.</em></h2>
        <p>Send the brief and a partner comes back with a written plan — timelines, comp read and the shape of the shortlist — within one business day.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <a className="btn btn-cream-prim" href="#intake">Book a scoping call <Arrow /></a>
          <Link className="btn btn-cream-ghost" href={`${routes.resources}?view=cs`}>Read case studies</Link>
        </div>
      </section>
    </>
  );
}
