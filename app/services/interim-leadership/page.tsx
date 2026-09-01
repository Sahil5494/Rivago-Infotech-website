import Link from "next/link";
import type { Metadata } from "next";
import { routes } from "@/lib/routes";
import {
  Arrow,
  Crumbs,
  Eyebrow,
  breadcrumbJsonLd,
  WhyRivagoSection,
  ProcessSection,
  IndustriesSection,
  StorySection,
  FaqSection,
  CtaSection,
  IconPartner,
  IconClock,
  IconShieldCheck,
  IconTeam,
} from "../_components/shared";

export const metadata: Metadata = {
  title: "Interim & Fractional Leadership — Rivago Infotech",
  description:
    "A leader in the seat, on day one. Fractional CXOs and interim executives for a transition, a turnaround or a leadership gap — ready to start in seven days.",
  alternates: { canonical: "https://rivagoinfotech.com/services/interim-leadership" },
  openGraph: {
    title: "Interim & Fractional Leadership — Rivago Infotech",
    description: "A leader in the seat, on day one. Fractional CXOs and interim executives, ready to start in seven days.",
    url: "https://rivagoinfotech.com/services/interim-leadership",
  },
};

const crumbs = [{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }, { label: "Interim & Fractional Leadership" }];

const stages = [
  { step: "Stage 01 · Day 0–1", title: "Calibrate", desc: "A working session with the board or CEO to define exactly what the seat needs to accomplish — a transition, a turnaround, or a gap covered — and over what timeframe.", side: [["Owner", "Lead partner"], ["Output", "Signed mandate"], ["Time", "~60 min"]] as [string, string][] },
  { step: "Stage 02 · Day 1–3", title: "Map", desc: "We draw from a bench of proven interim and fractional operators who have done this exact kind of assignment before — not a generalist candidate pool.", side: [["Bench size", "40+ operators"], ["Prior interim roles", "3+ avg"], ["Source", "Vetted bench"]] as [string, string][] },
  { step: "Stage 03 · Day 3–5", title: "Screen", desc: "Structured conversations focused on what matters for interim work — speed to impact, stakeholder management, and comfort operating without a long ramp.", side: [["Screens conducted", "2–4"], ["Reference depth", "3 per finalist"], ["Focus", "Speed to impact"]] as [string, string][] },
  { step: "Stage 04 · Day 5–6", title: "Panel", desc: "A focused conversation with the CEO or board — evaluating judgment and fit for the specific mandate, not running a full multi-round executive loop.", side: [["Loop length", "1–2 conversations"], ["Turnaround", "<24h"], ["Decision", "Same or next day"]] as [string, string][] },
  { step: "Stage 05 · Day 7", title: "Close", desc: "Terms agreed and the leader is in the seat — briefed, introduced to the team, and working. A transition plan is set from day one for handover or permanent succession.", side: [["Start date", "Day 7"], ["Engagement length", "Flexible"], ["Transition plan", "Built in"]] as [string, string][] },
];

const faqItems = [
  { q: "How fast can an interim leader actually start?", a: "Seven days is our standard from a signed mandate to a leader in the seat, drawn from our vetted bench of interim and fractional operators. Highly specialised mandates may take slightly longer — your partner will tell you upfront." },
  { q: "What's the difference between interim and fractional?", a: "Interim leaders typically work full-time on a defined mandate — a transition, a turnaround, or covering a gap until a permanent hire is made. Fractional leaders work part-time across multiple companies, often for organisations that need senior judgment without a full-time seat." },
  { q: "How long do engagements typically run?", a: "Anywhere from a few weeks to twelve months, depending on the mandate. We agree a flexible term upfront and revisit it as the situation evolves — no rigid minimum, no awkward renegotiation." },
  { q: "Can an interim leader convert to a permanent hire?", a: "Yes, when it's the right fit on both sides — many of our interim placements become permanent hires. We build a transition or succession plan into the engagement from day one either way." },
  { q: "What seniority levels do you cover?", a: "Interim and fractional CXOs, VPs and department heads — CEO, CFO, COO, CTO, CMO and equivalent operating roles, across every function we recruit for." },
  { q: "Is the engagement confidential?", a: "Yes, as standard. Leadership transitions are often sensitive — your mandate is handled under NDA on request, visible only to the people who need to know." },
];

export default function InterimLeadershipPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <header className="page-hero">
        <div className="page-hero-inner">
          <Crumbs items={crumbs} />
          <Eyebrow style={{ margin: "0 auto 28px" }}>Interim & Fractional Leadership · Transitions · Turnarounds</Eyebrow>
          <h1 className="gs">A leader in the seat,<br /><em>on day one.</em></h1>
          <p className="lead gs">Fractional CXOs and interim executives to bridge a transition, lead a turnaround, or fill a leadership gap — ready to start in seven days, with a transition plan built in from the first conversation.</p>
          <div className="gs" style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-prim" data-hire>Request an interim leader <Arrow /></button>
            <Link className="btn btn-ghost" href={`${routes.resources}?view=cs`}>See case studies</Link>
          </div>
          <div className="page-hero-meta gs">
            <div className="page-hero-meta-row"><span>Ready to start</span><strong>7 days</strong></div>
            <div className="page-hero-meta-row"><span>Offer-acceptance rate</span><strong>94%</strong></div>
            <div className="page-hero-meta-row"><span>Placements delivered</span><strong>500+</strong></div>
            <div className="page-hero-meta-row"><span>Partners per mandate</span><strong>One. Always.</strong></div>
          </div>
        </div>
      </header>

      <WhyRivagoSection
        heading={<>Built for the leadership gap<br />you <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>didn&apos;t plan for.</em></>}
        stats={[
          { val: "7", sup: "d", title: "Ready to start", desc: "From a signed mandate to a leader in the seat." },
          { val: "94", sup: "%", title: "Offer-acceptance rate", desc: "Same standard we hold on every search." },
          { val: "500", sup: "+", title: "Placements delivered", desc: "Across interim, fractional and permanent roles." },
          { val: "1", sup: undefined, title: "Partner on the line", desc: "One name owns the mandate, start to finish." },
        ]}
        cards={[
          { title: "One named partner", desc: "The same senior partner scopes the mandate, sources the leader and stays on through the transition.", icon: <IconPartner /> },
          { title: "Operator-grade bench", desc: "A bench of proven interim and fractional executives who've run this exact kind of mandate before — not generalists.", icon: <IconTeam /> },
          { title: "Fast without cutting corners", desc: "A seven-day start doesn't mean a rushed screen — every leader is referenced and calibrated against the mandate.", icon: <IconClock /> },
          { title: "Confidential by default", desc: "Leadership transitions are sensitive by nature — handled under NDA on request, as standard.", icon: <IconShieldCheck /> },
        ]}
      />

      <ProcessSection
        heading={<>A mandate runs five stages.<br />Seven days, <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>start to finish.</em></>}
        stages={stages}
      />

      <IndustriesSection
        eyebrowText="Industries"
        heading={<>Interim leadership,<br />in <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>every sector.</em></>}
        sub="A turnaround in healthcare looks nothing like one in fintech — your partner has run mandates in your sector before."
        alt
      />

      <StorySection
        eyebrowText="Client story"
        heading={<>A CFO gap, covered<br />in <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>under a week.</em></>}
        tag="Finance · Delaware"
        quote="Our CFO left with three weeks' notice in the middle of a fundraise. Rivago had an interim CFO in the seat within a week — someone who'd run this exact situation twice before. She closed the round, then helped us hire her permanent replacement six months later."
        initials="DK"
        name="David K."
        role="CEO · Delaware-based growth-stage company"
        metrics={[
          { val: "7d", label: "Interim CFO in the seat" },
          { val: "1", label: "Funding round closed on schedule" },
          { val: "6mo", label: "Clean handover to permanent hire" },
        ]}
      />

      <FaqSection
        heading={<>Interim leadership, <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>answered.</em></>}
        items={faqItems}
      />

      <CtaSection
        heading={<>Tell us the gap.<br /><em>We&apos;ll have a leader ready.</em></>}
        sub="Send the mandate — a partner comes back with a shortlist of operators who've done this exact assignment before, usually within one business day."
        primary={{ label: "Request an interim leader", hire: true }}
        secondary={{ label: "See case studies", href: `${routes.resources}?view=cs` }}
      />
    </>
  );
}
