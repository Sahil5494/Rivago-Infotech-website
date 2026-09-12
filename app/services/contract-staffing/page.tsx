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
  CtaSection,
  IconPartner,
  IconClock,
  IconShieldCheck,
  IconDoc,
  IconMoney,
  IconScaleFlex,
  IconTeam,
  IconGuarantee,
  IconTarget,
} from "../_components/shared";

export const metadata: Metadata = {
  title: "Contract Staffing — Rivago Infotech",
  description:
    "Skilled contractors, live in days not weeks. Rivago runs payroll, compliance and worker classification for every engagement — you get the talent, we carry the risk.",
  alternates: { canonical: "https://rivagoinfotech.com/services/contract-staffing" },
  openGraph: {
    title: "Contract Staffing — Rivago Infotech",
    description: "Skilled contractors, live in days not weeks. Rivago runs payroll, compliance and worker classification for every engagement.",
    url: "https://rivagoinfotech.com/services/contract-staffing",
  },
};

const crumbs = [{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }, { label: "Contract Staffing" }];

const stages = [
  { step: "Stage 01 · Day 0", title: "Calibrate", desc: "A short call to lock scope, duration, rate band and start date. For contract roles we also confirm classification — W-2, 1099 or a Rivago-employed contractor — before sourcing begins.", side: [["Owner", "Lead partner"], ["Output", "Signed scope + rate"], ["Time", "~30 min"]] as [string, string][] },
  { step: "Stage 02 · Day 0–1", title: "Map", desc: "We pull from our active contractor bench first — people already vetted, referenced and available — before opening a fresh search. That's why contract fills move faster than permanent ones.", side: [["Bench check", "Same day"], ["Fresh sourcing", "If needed"], ["Source mix", "Bench-first"]] as [string, string][] },
  { step: "Stage 03 · Day 1–3", title: "Screen", desc: "Skills verification, reference checks and right-to-work confirmation — compressed, not skipped. Every contractor is screened to the same bar as a permanent hire.", side: [["Screens conducted", "2–4"], ["Right-to-work", "Verified"], ["Reference depth", "2 per finalist"]] as [string, string][] },
  { step: "Stage 04 · Day 3–4", title: "Panel", desc: "A short intro call between the contractor and your hiring manager — not a full interview loop. You're confirming fit and availability, not re-running the screening we already did.", side: [["Calls scheduled", "1–2 candidates"], ["Turnaround", "<24h"], ["Decision", "Same or next day"]] as [string, string][] },
  { step: "Stage 05 · Day 5–7", title: "Close", desc: "Contract paperwork, payroll setup and compliance onboarding — all handled by Rivago before day one. You get a start date, not a stack of forms.", side: [["Start date", "Day 5–7"], ["Payroll setup", "Rivago-run"], ["Compliance", "Handled end to end"]] as [string, string][] },
];

const whatWeDo = [
  { title: "Payroll, run by us", desc: "We employ the contractor, run payroll and remit taxes — you get a single invoice, not a payroll headache.", icon: <IconMoney /> },
  { title: "Worker classification", desc: "W-2, 1099 or Rivago-employed — we determine the compliant classification before the engagement starts, not after an audit.", icon: <IconDoc /> },
  { title: "Compliance, every market", desc: "Local labour law, statutory benefits and tax handling across the US, Canada, the UAE and India — built into the contract.", icon: <IconShieldCheck /> },
  { title: "Skills verification", desc: "Technical and reference screening before submission — the same bar we hold permanent candidates to.", icon: <IconTarget /> },
  { title: "Contract drafting", desc: "Scope, rate, duration and IP terms drafted and reviewed before signature — no ambiguity to argue about later.", icon: <IconScaleFlex /> },
  { title: "Onboarding logistics", desc: "Equipment, access and day-one logistics coordinated so the contractor is productive from hour one, not week two.", icon: <IconTeam /> },
  { title: "Performance check-ins", desc: "We check in through the engagement — flagging scope creep or fit issues before they become a problem you inherit.", icon: <IconClock /> },
  { title: "Conversion, when you want it", desc: "Contract-to-permanent conversion is built into the terms from day one — no surprise buyout fee if the fit is right.", icon: <IconGuarantee /> },
];

export default function ContractStaffingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <header className="page-hero">
        <div className="page-hero-inner">
          <Crumbs items={crumbs} />
          <Eyebrow style={{ margin: "0 auto 28px" }}>Contract Staffing · Fixed-term · Compliance handled</Eyebrow>
          <h1 className="gs">Contract talent,<br /><em>live in days.</em></h1>
          <p className="lead gs">Skilled professionals on fixed-term engagements, deployed in days not weeks. We run payroll, compliance and worker classification for every contractor — you get the talent without the administrative risk.</p>
          <div className="gs" style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-prim" data-hire>Request contractors <Arrow /></button>
            <Link className="btn btn-ghost" href={`${routes.resources}?view=cs`}>See case studies</Link>
          </div>
          <div className="page-hero-meta gs">
            <div className="page-hero-meta-row"><span>Talent live in</span><strong>5–7 days</strong></div>
            <div className="page-hero-meta-row"><span>Payroll & compliance</span><strong>Fully handled</strong></div>
            <div className="page-hero-meta-row"><span>Placements delivered</span><strong>500+</strong></div>
            <div className="page-hero-meta-row"><span>Client retention</span><strong>87%</strong></div>
          </div>
        </div>
      </header>

      <WhyRivagoSection
        heading={<>Built for teams that need<br />people <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>working, not paperwork.</em></>}
        stats={[
          { val: "5", sup: "–7d", title: "Talent live", desc: "From signed scope to a contractor starting work." },
          { val: "100", sup: "%", title: "Payroll & compliance owned", desc: "Tax, classification and statutory benefits run by us." },
          { val: "500", sup: "+", title: "Placements delivered", desc: "Across contract, temporary and permanent engagements." },
          { val: "1", sup: undefined, title: "Partner on the line", desc: "One name owns the engagement, start to finish." },
        ]}
        cards={[
          { title: "One named partner", desc: "The same partner sources, screens and manages the engagement — no handoffs between sourcing and payroll teams.", icon: <IconPartner /> },
          { title: "Payroll & compliance owned", desc: "We employ the contractor, run payroll and handle worker classification — you never touch a compliance filing.", icon: <IconMoney /> },
          { title: "Fast without cutting corners", desc: "Bench-first sourcing means a live contractor in days — fully screened, not rushed through.", icon: <IconClock /> },
          { title: "Confidential by default", desc: "Contract terms, rate structures and candidate details handled discreetly, as standard practice.", icon: <IconShieldCheck /> },
        ]}
      />

      <ProcessSection
        heading={<>A contract fill runs five stages.<br />Days, <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>not weeks.</em></>}
        stages={stages}
      />

      <section className="section">
        <div className="wrap">
          <div className="gs">
            <Eyebrow>What we actually do</Eyebrow>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 700 }}>The administrative work<br />you <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>never see.</em></h2>
          </div>
          <div className="ind-grid gs" style={{ marginTop: 44 }}>
            {whatWeDo.map((w) => (
              <div className="ind-card" key={w.title}>
                <div className="why-icon" style={{ marginBottom: 14 }}>{w.icon}</div>
                <div className="ind-title">{w.title}</div>
                <div className="ind-desc" style={{ marginBottom: 0 }}>{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IndustriesSection
        eyebrowText="Industries"
        heading={<>Contract specialists,<br />aligned to <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>your sector.</em></>}
        sub="Contract rates and compliance requirements vary by sector — your brief goes to a partner who already knows the norms."
        alt
      />

      <StorySection
        eyebrowText="Client story"
        heading={<>Twelve contractors live<br />in <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>under two weeks.</em></>}
        tag="Technology · Canada"
        quote="We had a product launch and a twelve-person gap to fill in a hurry. Rivago had contractors live within a week, payroll and compliance handled without a single question from our finance team. Three converted to permanent roles six months later."
        initials="PR"
        name="Priya R."
        role="HR Director · Ontario financial services firm"
        metrics={[
          { val: "12", label: "Contractors deployed in 2 weeks" },
          { val: "0", label: "Compliance issues raised" },
          { val: "3", label: "Converted to permanent hires" },
        ]}
      />

      <CtaSection
        heading={<>Tell us the scope.<br /><em>We&apos;ll have talent live this week.</em></>}
        sub="Send the scope and rate band — a partner comes back with candidates and a compliant contract structure, usually within one business day."
        primary={{ label: "Request contractors", hire: true }}
        secondary={{ label: "See case studies", href: `${routes.resources}?view=cs` }}
      />
    </>
  );
}
