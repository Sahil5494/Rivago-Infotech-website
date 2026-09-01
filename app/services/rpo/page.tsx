import Link from "next/link";
import type { Metadata } from "next";
import LogoMarquee from "@/components/LogoMarquee";
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
  InsightsSection,
  FaqSection,
  CtaSection,
  IconPartner,
  IconBadge,
  IconChart,
  IconShieldCheck,
} from "../_components/shared";

export const metadata: Metadata = {
  title: "Recruitment Process Outsourcing (RPO) — Rivago Infotech",
  description:
    "Your recruiting engine, running at full speed. Rivago runs all or part of your talent function as an embedded team — your brand, your workflow, our capacity.",
  alternates: { canonical: "https://rivagoinfotech.com/services/rpo" },
  openGraph: {
    title: "Recruitment Process Outsourcing (RPO) — Rivago Infotech",
    description: "Your recruiting engine, running at full speed. We run all or part of your talent function as an embedded team.",
    url: "https://rivagoinfotech.com/services/rpo",
  },
};

const crumbs = [{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }, { label: "RPO" }];

const traditionalSteps = ["Source", "Screen", "Place"];
const rivagoSteps = ["Source", "Screen", "Onboard", "Track", "Report"];

const rpoModels = [
  {
    num: "01",
    title: "Enterprise RPO",
    rows: [
      ["Best for", "Companies hiring 50+ FTEs/year on an ongoing basis"],
      ["Scope", "All recruiting activity for in-scope roles"],
      ["Duration", "Multi-year program, renewable annually"],
      ["Pricing", "Fixed-fee or per-hire, scoped to volume & outcomes"],
    ],
  },
  {
    num: "02",
    title: "Project RPO",
    rows: [
      ["Best for", "Time-bounded initiatives with defined hire counts"],
      ["Scope", "Specific roles or business unit, defined upfront"],
      ["Duration", "3–18 months"],
      ["Pricing", "Project fee tied to milestones/hire targets"],
    ],
  },
  {
    num: "03",
    title: "Hybrid RPO",
    rows: [
      ["Best for", "Mature programs with steady hiring + periodic surges"],
      ["Scope", "Baseline + flexible surge capacity, per quarter"],
      ["Duration", "Multi-year with surge windows"],
      ["Pricing", "Baseline fee + per-hire surge pricing"],
    ],
  },
];

const stages = [
  { step: "Phase 01", title: "Strategy", desc: "We map your hiring plan against headcount targets, seasonality and budget — then design the sourcing channels, scorecards and SLAs the program will run on.", side: [["Owner", "Program lead"], ["Output", "Signed program plan"], ["Setup time", "2–4 weeks"]] as [string, string][] },
  { step: "Phase 02", title: "Screening", desc: "An embedded team screens every candidate against your scorecards, under your brand — candidates experience Rivago as an extension of your own TA function, not an outside agency.", side: [["Team size", "Scoped to volume"], ["Brand", "Yours, throughout"], ["SLA", "Defined per role"]] as [string, string][] },
  { step: "Phase 03", title: "Selection", desc: "Structured interview loops, offer management and negotiation run inside your existing ATS and workflow — no separate system for your hiring managers to learn.", side: [["ATS", "Your system"], ["Offer support", "Included"], ["Handoff", "Seamless to HR"]] as [string, string][] },
  { step: "Phase 04", title: "Performance", desc: "We track quality-of-hire and time-to-fill against the SLAs agreed in strategy — not just volume delivered, but whether the hires are actually working out.", side: [["Metrics tracked", "Quality + speed"], ["Review cadence", "Monthly"], ["Adjustments", "In-flight"]] as [string, string][] },
  { step: "Phase 05", title: "Reporting", desc: "A written program report goes to your leadership — pipeline health, cost-per-hire, retention and forecast for the next period. Full visibility, not a black box.", side: [["Cadence", "Monthly + QBR"], ["Format", "Written + dashboard"], ["Audience", "TA & executive leadership"]] as [string, string][] },
];

const articles = [
  { title: "When RPO makes sense — and when it doesn't", dek: "A practical read on the volume threshold where an embedded program starts paying for itself." },
  { title: "Enterprise, project or hybrid: choosing an RPO model", dek: "What actually determines the right structure for your hiring plan." },
  { title: "The metrics an RPO program should report — every month", dek: "Beyond time-to-fill: the numbers that tell you the program is actually working." },
];

const faqItems = [
  { q: "How is RPO different from just using a recruiting agency?", a: "An agency works transactionally, role by role. RPO embeds a Rivago team inside your talent function — running under your brand, inside your ATS, against your SLAs — for all or part of your hiring. It's built for volume and continuity, not one-off searches." },
  { q: "Which RPO model is right for us?", a: "Enterprise RPO fits ongoing high-volume hiring (50+ FTEs/year). Project RPO fits a time-bounded initiative with a defined hire count. Hybrid fits a steady baseline with periodic surges. We'll recommend one on the strategy call based on your actual hiring plan, not push the most expensive option." },
  { q: "Do candidates know they're talking to Rivago or to us?", a: "Whichever you prefer — most programs run fully under your employer brand, with candidates experiencing Rivago as an extension of your own team. Some clients prefer transparency about the partnership. We'll match your preference." },
  { q: "How is RPO priced?", a: "Enterprise programs run on a fixed-fee or per-hire structure scoped to volume. Project RPO is a project fee tied to milestones. Hybrid combines a baseline fee with per-hire surge pricing. Every structure is agreed and documented before the program starts." },
  { q: "What reporting do we actually get?", a: "A monthly written report covering pipeline health, cost-per-hire, time-to-fill and early retention signals, plus a quarterly business review with program leadership — not a self-serve dashboard you have to interpret yourself." },
  { q: "How long does it take to stand up a program?", a: "Typically 2–4 weeks from signed program plan to the team being fully embedded and screening candidates — faster for a narrowly scoped project RPO, longer for a full enterprise program with multiple hiring managers to onboard." },
];

export default function RpoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <header className="page-hero">
        <div className="page-hero-inner">
          <Crumbs items={crumbs} />
          <Eyebrow style={{ margin: "0 auto 28px" }}>RPO · Recruitment Process Outsourcing · Embedded team</Eyebrow>
          <h1 className="gs">Your recruiting engine,<br />running at <em>full speed.</em></h1>
          <p className="lead gs">We run all or part of your talent function as an embedded team — your brand, your workflow, our capacity. Built for companies whose hiring plan has outgrown ad-hoc recruiting.</p>
          <div className="gs" style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-prim" data-hire>Book a strategy call <Arrow /></button>
            <Link className="btn btn-ghost" href={`${routes.resources}?view=cs`}>See case studies</Link>
          </div>
          <div className="page-hero-meta gs">
            <div className="page-hero-meta-row"><span>Faster time-to-fill</span><strong>40%</strong></div>
            <div className="page-hero-meta-row"><span>Lower cost-per-hire</span><strong>30%</strong></div>
            <div className="page-hero-meta-row"><span>Client satisfaction</span><strong>92%</strong></div>
            <div className="page-hero-meta-row"><span>Placements delivered</span><strong>500+</strong></div>
          </div>
        </div>
      </header>

      {/* CLIENTS */}
      <section className="clients-sec">
        <div className="clients-label">Recruiting teams we run for</div>
        <LogoMarquee />
      </section>

      {/* WHY RIVAGO FOR RPO */}
      <WhyRivagoSection
        eyebrowText="Why Rivago for RPO"
        heading={<>Built for talent teams that<br />outgrew <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>ad-hoc recruiting.</em></>}
        stats={[
          { val: "40", sup: "%", title: "Faster time-to-fill", desc: "Versus ad-hoc recruiting across comparable roles." },
          { val: "30", sup: "%", title: "Lower cost-per-hire", desc: "Program efficiency versus a per-role agency model." },
          { val: "92", sup: "%", title: "Client satisfaction", desc: "Average CSAT across active RPO programs." },
          { val: "500", sup: "+", title: "Placements delivered", desc: "Across embedded and project RPO programs." },
        ]}
        cards={[
          { title: "Runs under your brand", desc: "Candidates experience an extension of your own TA function — not an outside agency working a transaction.", icon: <IconPartner /> },
          { title: "Inside your workflow", desc: "We work inside your existing ATS and hiring process, so hiring managers never have to learn a new system.", icon: <IconBadge /> },
          { title: "Reported, not opaque", desc: "Monthly written reporting and quarterly business reviews — full visibility into pipeline health and cost.", icon: <IconChart /> },
          { title: "Accountable to SLAs", desc: "Time-to-fill and quality-of-hire targets are set upfront and tracked against every month — not just claimed at the pitch.", icon: <IconShieldCheck /> },
        ]}
      />

      {/* WHAT IS RPO */}
      <section className="section alt">
        <div className="wrap">
          <div className="gs">
            <Eyebrow>What is RPO?</Eyebrow>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 700 }}>Recruiting that doesn&apos;t<br />stop at <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>placement.</em></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 20, marginTop: 44 }}>
            <div className="why-card gs">
              <div style={{ fontSize: 11, fontWeight: 600, color: "var(--text3)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 18 }}>Traditional recruiting</div>
              {traditionalSteps.map((s, i) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 0", borderBottom: i < traditionalSteps.length - 1 ? "1px solid var(--border)" : "none" }}>
                  <span style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(255,255,255,.06)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "var(--text3)", flexShrink: 0 }}>{i + 1}</span>
                  <span style={{ fontSize: 15, color: "var(--text2)" }}>{s}</span>
                </div>
              ))}
              <p style={{ marginTop: 20, fontSize: 13, color: "var(--text3)", lineHeight: 1.65 }}>Ends at placement. No visibility into performance, retention or program cost after the hire starts.</p>
            </div>
            <div className="why-card gs" style={{ borderColor: "rgba(61,255,135,.25)", background: "rgba(61,255,135,.05)" }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "var(--green)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 18 }}>The Rivago RPO model</div>
              {rivagoSteps.map((s, i) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 0", borderBottom: i < rivagoSteps.length - 1 ? "1px solid rgba(61,255,135,.15)" : "none" }}>
                  <span style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(61,255,135,.14)", border: "1px solid rgba(61,255,135,.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "var(--green)", flexShrink: 0 }}>{i + 1}</span>
                  <span style={{ fontSize: 15, color: "var(--text)" }}>{s}</span>
                </div>
              ))}
              <p style={{ marginTop: 20, fontSize: 13, color: "var(--text2)", lineHeight: 1.65 }}>Extends past placement into onboarding, performance tracking and monthly reporting back to your leadership.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RPO MODELS */}
      <section className="section">
        <div className="wrap">
          <div className="gs">
            <Eyebrow>RPO models</Eyebrow>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 700 }}>Three ways to<br />structure a <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>program.</em></h2>
          </div>
          <div className="modes" style={{ marginTop: 44 }}>
            {rpoModels.map((m) => (
              <div className="mode gs" style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 18 }} key={m.num}>
                <div className="mode-num">{m.num}</div>
                <div className="mode-title">{m.title}</div>
                <div className="pd-side" style={{ marginTop: "auto", paddingTop: 18, borderTop: "1px solid var(--border)" }}>
                  {m.rows.map(([k, v]) => (
                    <div className="pd-side-row" key={k}><span>{k}</span><span className="v" style={{ textAlign: "right", maxWidth: 170 }}>{v}</span></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <ProcessSection
        eyebrowText="How it works"
        heading={<>Five phases keep the<br />program <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>honest.</em></>}
        stages={stages}
      />

      {/* INDUSTRIES */}
      <IndustriesSection
        eyebrowText="Industries"
        heading={<>RPO programs,<br />in <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>every sector.</em></>}
        sub="Volume hiring looks different in every industry — your program lead has run one in yours before."
      />

      {/* CUSTOMER STORY */}
      <StorySection
        eyebrowText="Client story"
        heading={<>Scaling from 40 to 90,<br />ahead of a <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>funding round.</em></>}
        tag="Technology · US"
        quote="We needed to more than double headcount in nine months without our internal TA team burning out. Rivago's embedded team ran under our brand, inside our ATS — candidates never knew they were talking to an outside program. We hit the number two weeks early."
        initials="SK"
        name="Sanjay K."
        role="VP People · US Series C SaaS company"
        metrics={[
          { val: "50", label: "Hires delivered in 9 months" },
          { val: "92%", label: "Hiring-manager CSAT" },
          { val: "2wk", label: "Ahead of program schedule" },
        ]}
      />

      {/* INSIGHTS */}
      <InsightsSection
        heading={<>Insights on<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>running RPO well.</em></>}
        articles={articles}
      />

      {/* FAQ */}
      <FaqSection
        heading={<>RPO, <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>answered.</em></>}
        items={faqItems}
      />

      {/* CTA */}
      <CtaSection
        heading={<>Bring us the program.<br /><em>We&apos;ll bring the team that owns it.</em></>}
        sub="Send your hiring plan — a program lead comes back with a scoped model, timeline and SLAs within one business day."
        primary={{ label: "Book a strategy call", hire: true }}
        secondary={{ label: "See case studies", href: `${routes.resources}?view=cs` }}
      />
    </>
  );
}
