import Link from "next/link";
import type { Metadata } from "next";
import { routes } from "@/lib/routes";
import {
  Arrow,
  Crumbs,
  Eyebrow,
  breadcrumbJsonLd,
  ProcessSection,
  IndustriesSection,
  StorySection,
  FaqSection,
  CtaSection,
} from "../_components/shared";

export const metadata: Metadata = {
  title: "Executive Search — Rivago Infotech",
  description:
    "Leadership hires, handled with discretion. Confidential retained search for VP- to C-suite roles, with weekly written progress reports and a 12-month replacement guarantee.",
  alternates: { canonical: "https://rivagoinfotech.com/services/executive-search" },
  openGraph: {
    title: "Executive Search — Rivago Infotech",
    description: "Leadership hires, handled with discretion. Confidential retained search for VP- to C-suite roles.",
    url: "https://rivagoinfotech.com/services/executive-search",
  },
};

const crumbs = [{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }, { label: "Executive Search" }];

const growPoints = [
  "A deep, off-market bench — leaders who aren't job-searching and won't be found on a portal",
  "A partner, not a vendor — the same senior partner scopes, sources and closes every search personally",
  "Built around your scale — from a single confidential seat to a coordinated leadership team build",
];

const seats = ["CEO", "CFO", "CIO", "CMO", "COO", "CTO"];

const models = [
  {
    num: "01",
    name: "Single search",
    desc: "A single confidential search for one leadership seat, CEO to VP level. Fully retained, with weekly written progress reports through to close.",
    bestFor: "One critical seat",
    length: "6–10 weeks",
    featured: false,
  },
  {
    num: "02",
    name: "Confidential replacement",
    desc: "A sitting leader is being replaced without the organisation or the market knowing until you're ready to announce it. Sourced entirely off-market, under strict NDA from the first conversation.",
    bestFor: "Sensitive exits & replacements",
    length: "8–12 weeks",
    featured: true,
  },
  {
    num: "03",
    name: "Leadership team build",
    desc: "Multiple leadership seats filled as one coordinated program — a new CFO, VP Engineering and Head of Sales, sequenced and calibrated against each other rather than run as separate searches.",
    bestFor: "Post-funding or restructuring teams",
    length: "3–6 months",
    featured: false,
  },
];

const stages = [
  { step: "Step 01", title: "Reach Out", desc: "A confidential intake with the board or CEO — we reply within the hour, and every conversation from here is under NDA if you need it to be.", side: [["Response time", "<1 hour"], ["Confidentiality", "NDA on request"], ["Owner", "Lead partner"]] as [string, string][] },
  { step: "Step 02", title: "Connect", desc: "Direct, off-market outreach to leaders who fit the mandate — people not actively looking, sourced from the Rivago private network, not a database search.", side: [["Outreach", "Direct, off-market"], ["Longlist size", "25–50"], ["Response rate", "38% avg"]] as [string, string][] },
  { step: "Step 03", title: "Review Candidates", desc: "A calibrated shortlist arrives with full notes and reference context — not just résumés. You see who we'd hire, and why, before you meet anyone.", side: [["Shortlist size", "3–5"], ["Reference depth", "3 per finalist"], ["Format", "Written brief"]] as [string, string][] },
  { step: "Step 04", title: "Interview & Offer", desc: "We project-manage the interview loop and lead offer and comp negotiation — including counter-offer defence — so you're not the one going back and forth.", side: [["Loop length", "2–3 rounds"], ["Debrief turn", "<24h"], ["Counter rate", "11%"]] as [string, string][] },
  { step: "Step 05", title: "Hire & Onboard", desc: "A structured onboarding and transition plan, with check-ins through the first year. Covered by a 12-month replacement guarantee, no questions asked.", side: [["Transition plan", "Built in"], ["Check-ins", "3, 6, 12 months"], ["Guarantee", "12 months"]] as [string, string][] },
];

const faqItems = [
  { q: "How is executive search different from direct hire?", a: "Executive search is fully retained — a dedicated partner and research analyst work exclusively on your mandate, sourcing off-market rather than from active job seekers. Direct hire is contingent and typically covers Manager to Senior individual-contributor roles; executive search covers VP to C-suite." },
  { q: "How confidential is the process, really?", a: "As confidential as you need it to be. Confidential replacement searches are run under NDA from the first conversation, with outreach worded so the market doesn't learn about a transition before you're ready to announce it." },
  { q: "How long does a retained search take?", a: "Six to ten weeks for a single seat, eight to twelve for a confidential replacement, and three to six months for a coordinated leadership team build. You'll get a specific timeline for your mandate on the intake call, not a generic estimate." },
  { q: "What's included in the retainer?", a: "The retainer covers the full search — market mapping, off-market outreach, structured screening, reference checks and offer negotiation — plus weekly written progress reports and a 12-month replacement guarantee." },
  { q: "What happens if the executive leaves within the guarantee period?", a: "We restart the search at no additional fee if a placement leaves within 12 months. No re-negotiation of terms, no partial credit — a full restart, same partner, same standard." },
  { q: "Which seniority levels and functions do you cover?", a: "CEO, CFO, CIO, CMO, COO and CTO most often, plus VP and SVP roles across every function we recruit for — technology, finance, healthcare, legal, sales, operations, HR and engineering." },
];

export default function ExecutiveSearchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <header className="page-hero">
        <div className="page-hero-inner">
          <Crumbs items={crumbs} />
          <Eyebrow style={{ margin: "0 auto 28px" }}>Executive Search · Retained · C-suite & VP</Eyebrow>
          <h1 className="gs">Leadership hires,<br />handled with <em>discretion.</em></h1>
          <p className="lead gs">Confidential retained search for VP- to C-suite roles, with weekly written progress reports from the same senior partner throughout — off-market outreach, not a posted role.</p>
          <div className="gs" style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-prim" data-hire>Begin your executive search <Arrow /></button>
            <Link className="btn btn-ghost" href={`${routes.resources}?view=cs`}>See case studies</Link>
          </div>
          <div className="page-hero-meta gs">
            <div className="page-hero-meta-row"><span>Replacement guarantee</span><strong>12 months</strong></div>
            <div className="page-hero-meta-row"><span>Offer-acceptance rate</span><strong>94%</strong></div>
            <div className="page-hero-meta-row"><span>Progress reporting</span><strong>Weekly, written</strong></div>
            <div className="page-hero-meta-row"><span>Sourcing</span><strong>Off-market</strong></div>
          </div>
        </div>
      </header>

      {/* GROW WITH THE RIGHT LEADERS */}
      <section className="section">
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 64, alignItems: "start" }}>
          <div className="gs">
            <Eyebrow>Why executive search</Eyebrow>
            <h2 className="section-h2" style={{ color: "var(--text)" }}>Grow with the right<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>leaders in the room.</em></h2>
            <div className="prec-list" style={{ marginTop: 28 }}>
              {growPoints.map((p) => (
                <div className="prec-item gs" key={p}>
                  <div className="prec-ico"><svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  {p}
                </div>
              ))}
            </div>
          </div>
          <div className="gs" style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 20, padding: 36 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "var(--text3)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 20 }}>Seats we fill most</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
              {seats.map((s) => (
                <span key={s} style={{ padding: "9px 18px", borderRadius: 9999, background: "rgba(61,255,135,.08)", border: "1px solid rgba(61,255,135,.2)", color: "var(--green)", fontSize: 14, fontWeight: 500 }}>{s}</span>
              ))}
            </div>
            <button className="btn btn-prim" data-hire style={{ width: "100%" }}>Begin your executive search <Arrow /></button>
          </div>
        </div>
      </section>

      {/* WHICH MODEL FITS */}
      <section className="section alt">
        <div className="wrap">
          <div className="gs">
            <Eyebrow>Which model fits</Eyebrow>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 700 }}>Three ways to run<br />a <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>leadership search.</em></h2>
          </div>
          <div className="proc-deep">
            {models.map((m) => (
              <div
                className="pd-row gs"
                key={m.num}
                style={{ gridTemplateColumns: "90px 1fr 260px", background: m.featured ? "rgba(61,255,135,.05)" : undefined }}
              >
                <div className="mode-num" style={{ fontSize: 38 }}>{m.num}</div>
                <div className="pd-main"><h3>{m.name}</h3><p>{m.desc}</p></div>
                <div className="pd-side">
                  <div className="pd-side-row"><span>Best for</span><span className="v">{m.bestFor}</span></div>
                  <div className="pd-side-row"><span>Length</span><span className="v">{m.length}</span></div>
                  <button data-hire style={{ marginTop: 6, fontSize: 13, color: "var(--green)", fontWeight: 500, background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left", fontFamily: "var(--ff)" }}>Talk to a partner →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE ACTUALLY DO */}
      <ProcessSection
        eyebrowText="What we actually do"
        heading={<>Five steps, from confidential<br />intake to <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>signed offer.</em></>}
        stages={stages}
        alt={false}
      />

      <IndustriesSection
        eyebrowText="Industries"
        heading={<>Leadership search,<br />in <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>every sector.</em></>}
        sub="Your mandate goes to a partner who has placed leaders in your sector before — not a generalist executive recruiter."
        alt
      />

      <StorySection
        eyebrowText="Client story"
        heading={<>A confidential CFO<br />replacement, <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>handled quietly.</em></>}
        tag="Finance · US"
        quote="We needed to replace our CFO without the board, investors or the market finding out before we were ready. Rivago ran the entire search under NDA — off-market outreach, no posted role, no leaks. We announced the transition on our terms, not because word had gotten out."
        initials="LT"
        name="Lisa T."
        role="Board Chair · US regional bank"
        metrics={[
          { val: "9wk", label: "Confidential search to signed offer" },
          { val: "0", label: "Leaks before the announcement" },
          { val: "12mo", label: "Replacement guarantee in force" },
        ]}
      />

      <FaqSection
        heading={<>Executive search, <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>answered.</em></>}
        items={faqItems}
      />

      <CtaSection
        heading={<>Tell us the seat.<br /><em>We&apos;ll start off-market today.</em></>}
        sub="Send the mandate — a partner comes back with a scoped search plan and timeline within one business day, under NDA if you need it."
        primary={{ label: "Begin your executive search", hire: true }}
        secondary={{ label: "See case studies", href: `${routes.resources}?view=cs` }}
      />
    </>
  );
}
