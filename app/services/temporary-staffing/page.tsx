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
  IconScaleFlex,
  IconTeam,
  IconTarget,
  IconLightning,
  IconDoc,
  IconMoney,
} from "../_components/shared";

export const metadata: Metadata = {
  title: "Temporary Staffing — Rivago Infotech",
  description:
    "On-demand cover for peaks, seasonal spikes and leave. Rivago deploys temporary staff in 24–72 hours, scaled up or down as work changes, with zero long-term commitment.",
  alternates: { canonical: "https://rivagoinfotech.com/services/temporary-staffing" },
  openGraph: {
    title: "Temporary Staffing — Rivago Infotech",
    description: "On-demand cover for peaks, seasonal spikes and leave. Deployed in 24–72 hours, scaled up or down as work changes.",
    url: "https://rivagoinfotech.com/services/temporary-staffing",
  },
};

const crumbs = [{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }, { label: "Temporary Staffing" }];

const stages = [
  { step: "Stage 01 · Hour 0", title: "Calibrate", desc: "A short call to confirm the role, headcount, shift pattern and how long the cover is needed. For surge staffing we skip anything that isn't essential to getting people on site fast.", side: [["Owner", "Lead partner"], ["Output", "Confirmed headcount"], ["Time", "~20 min"]] as [string, string][] },
  { step: "Stage 02 · Hour 0–12", title: "Map", desc: "We pull directly from our active, pre-vetted temporary bench — people already screened, referenced and available on short notice — rather than opening a fresh search.", side: [["Source", "Active bench"], ["Availability check", "Same day"], ["Fresh sourcing", "Rare"]] as [string, string][] },
  { step: "Stage 03 · Hour 12–24", title: "Screen", desc: "A compressed but real screen — identity, right-to-work and role-specific competency confirmed before anyone is deployed, even under a tight clock.", side: [["Screens conducted", "Per candidate"], ["Right-to-work", "Verified"], ["Turnaround", "<24h"]] as [string, string][] },
  { step: "Stage 04 · Hour 24–48", title: "Panel", desc: "For most temporary roles this is a confirmation call, not a formal interview loop — you're approving the match, not re-running our screening.", side: [["Approval turn", "<4h"], ["Format", "Confirm or swap"], ["Decision", "Same day"]] as [string, string][] },
  { step: "Stage 05 · Hour 24–72", title: "Close", desc: "Onboarding paperwork, shift confirmation and site logistics handled by Rivago. Staff arrive ready to work, and headcount flexes up or down as your need changes — no minimum term.", side: [["Deployed in", "24–72h"], ["Commitment", "Zero long-term"], ["Scale", "Up or down"]] as [string, string][] },
];

const whatWeDo = [
  { title: "Rapid deployment", desc: "A pre-vetted bench means staff can be on site or online in as little as 24 hours — not a fresh search from zero.", icon: <IconLightning /> },
  { title: "Flexible headcount", desc: "Scale from two people to twenty and back down again as the peak passes — no minimum term, no penalty for scaling down.", icon: <IconScaleFlex /> },
  { title: "Shift & rota coverage", desc: "Multi-shift, weekend and overnight coverage coordinated across your site without you managing rota logistics yourself.", icon: <IconTarget /> },
  { title: "Payroll, run by us", desc: "We employ the temporary staff and run payroll — a single invoice on your side, no time-sheet chasing.", icon: <IconMoney /> },
  { title: "Compliance handled", desc: "Right-to-work, statutory entitlements and local labour law handled in every market we deploy into.", icon: <IconShieldCheck /> },
  { title: "Fast re-supply", desc: "If someone doesn't show or isn't the right fit, we swap them — usually same day, without restarting intake.", icon: <IconClock /> },
  { title: "Onboarding logistics", desc: "Site access, equipment and induction coordinated ahead of the first shift, so staff arrive genuinely ready.", icon: <IconTeam /> },
  { title: "Zero long-term commitment", desc: "No minimum engagement length. When the surge ends, the engagement ends — nothing to unwind or renegotiate.", icon: <IconDoc /> },
];

export default function TemporaryStaffingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <header className="page-hero">
        <div className="page-hero-inner">
          <Crumbs items={crumbs} />
          <Eyebrow style={{ margin: "0 auto 28px" }}>Temporary Staffing · On-demand cover · No long-term commitment</Eyebrow>
          <h1 className="gs">Cover the surge.<br /><em>Skip the scramble.</em></h1>
          <p className="lead gs">On-demand cover for peaks, seasonal spikes and leave. We deploy in 24–72 hours, scale headcount up or down as work changes, and carry zero long-term commitment on your side.</p>
          <div className="gs" style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-prim" data-hire>Get cover fast <Arrow /></button>
            <Link className="btn btn-ghost" href={`${routes.resources}?view=cs`}>See case studies</Link>
          </div>
          <div className="page-hero-meta gs">
            <div className="page-hero-meta-row"><span>Deployment window</span><strong>24–72 hours</strong></div>
            <div className="page-hero-meta-row"><span>Minimum commitment</span><strong>None</strong></div>
            <div className="page-hero-meta-row"><span>Placements delivered</span><strong>500+</strong></div>
            <div className="page-hero-meta-row"><span>Client retention</span><strong>87%</strong></div>
          </div>
        </div>
      </header>

      <WhyRivagoSection
        heading={<>Built for the week you<br />didn&apos;t <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>plan for.</em></>}
        stats={[
          { val: "24", sup: "–72h", title: "Deployment window", desc: "From confirmed headcount to staff on site or online." },
          { val: "0", sup: undefined, title: "Long-term commitment", desc: "No minimum term — scale up or down as work changes." },
          { val: "500", sup: "+", title: "Placements delivered", desc: "Across temporary, contract and permanent engagements." },
          { val: "1", sup: undefined, title: "Partner on the line", desc: "One name owns the engagement, start to finish." },
        ]}
        cards={[
          { title: "One named partner", desc: "The same partner manages the whole engagement — no relay between a sourcing team and a payroll team.", icon: <IconPartner /> },
          { title: "Scale without penalty", desc: "Bring on two people or twenty, then scale down the moment the peak passes — no notice period, no penalty.", icon: <IconScaleFlex /> },
          { title: "Fast without cutting corners", desc: "A pre-vetted bench means genuine speed — every temp is still right-to-work checked and role-screened.", icon: <IconClock /> },
          { title: "Compliant by default", desc: "Statutory entitlements and local labour law handled in every market, without you tracking the detail.", icon: <IconShieldCheck /> },
        ]}
      />

      <ProcessSection
        heading={<>A temporary fill runs five stages.<br />Hours, <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>not weeks.</em></>}
        stages={stages}
      />

      <section className="section">
        <div className="wrap">
          <div className="gs">
            <Eyebrow>What we actually do</Eyebrow>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 700 }}>Everything that happens<br />before <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>hour one.</em></h2>
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
        heading={<>Surge cover,<br />in <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>every sector.</em></>}
        sub="Peaks look different in every industry — your partner already knows what a good temp looks like in yours."
        alt
      />

      <StorySection
        eyebrowText="Client story"
        heading={<>A holiday peak, staffed<br />in <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>under 48 hours.</em></>}
        tag="Operations · US"
        quote="Our seasonal peak came earlier than forecast and we were short fifteen people with two days' notice. Rivago had staff on site inside forty-eight hours — screened, briefed and ready. We scaled back down two weeks later without a single awkward conversation."
        initials="RS"
        name="Rachel S."
        role="Operations Director · US logistics company"
        metrics={[
          { val: "15", label: "Staff deployed in 48 hours" },
          { val: "0", label: "Long-term commitment required" },
          { val: "2wk", label: "Peak coverage, scaled down cleanly" },
        ]}
      />

      <CtaSection
        heading={<>Tell us the gap.<br /><em>We&apos;ll have people ready fast.</em></>}
        sub="Send the headcount and timeline — a partner comes back same day with availability and a start plan."
        primary={{ label: "Get cover fast", hire: true }}
        secondary={{ label: "See case studies", href: `${routes.resources}?view=cs` }}
      />
    </>
  );
}
