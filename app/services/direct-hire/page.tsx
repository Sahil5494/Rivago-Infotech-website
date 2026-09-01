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
  IconBadge,
  IconClock,
  IconShieldCheck,
  IconTarget,
  IconCompass,
  IconDoc,
  IconHandshake,
  IconTeam,
  IconGuarantee,
} from "../_components/shared";

export const metadata: Metadata = {
  title: "Direct Hire — Rivago Infotech",
  description:
    "Permanent placements across every function and level. Five fully-screened candidates in 48 hours, a 90-day replacement guarantee, and a contingent fee — you pay on a hire that sticks.",
  alternates: { canonical: "https://rivagoinfotech.com/services/direct-hire" },
  openGraph: {
    title: "Direct Hire — Rivago Infotech",
    description:
      "Permanent placements across every function and level. Five fully-screened candidates in 48 hours, a 90-day replacement guarantee, and a contingent fee.",
    url: "https://rivagoinfotech.com/services/direct-hire",
  },
};

const crumbs = [{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }, { label: "Direct Hire" }];

const stages = [
  { step: "Stage 01 · Day 0–2", title: "Calibrate", desc: "A 60-minute working session with the hiring manager and the partner running the search. We pressure-test the JD, agree must-haves vs. nice-to-haves, and set the scorecard. You sign off before we source a single profile.", side: [["Owner", "Lead partner"], ["Output", "Signed JD + scorecard"], ["Time", "~60 min"]] as [string, string][] },
  { step: "Stage 02 · Day 2–10", title: "Map", desc: "The research team builds a longlist of 40–80 names from competitor rosters, alumni networks, and the Rivago private database. Outreach is bespoke per candidate — no copy-paste sequences.", side: [["Longlist size", "40–80"], ["Reply rate", "38% avg"], ["Source mix", "Passive 80%"]] as [string, string][] },
  { step: "Stage 03 · Day 10–18", title: "Screen", desc: "45-minute structured interviews with every respondent, against the same scorecard your panel will use. First calibration profiles submitted by day 12; shortlist hardens by day 18.", side: [["Screens conducted", "18–24"], ["Submitted profiles", "5–7"], ["Reference depth", "3 per finalist"]] as [string, string][] },
  { step: "Stage 04 · Day 18–28", title: "Panel", desc: "We project-manage the entire interview loop — scheduling, debriefs, calibration between rounds, reference-check coordination. A written brief lands 24 hours before each interview.", side: [["Loops scheduled", "3–5 finalists"], ["Debrief turn", "<24h"], ["Drop-off rate", "<6%"]] as [string, string][] },
  { step: "Stage 05 · Day 28–35 + 90 days", title: "Close", desc: "We negotiate the offer, handle counter-offer defence, and stay close through the first 90 days. If anything breaks in the guarantee window, we restart the search at no charge.", side: [["Counter rate", "11%"], ["90-day stick", "97%"], ["Replacement", "90-day guarantee"]] as [string, string][] },
];

const whatWeDo = [
  { title: "JD calibration", desc: "We pressure-test the brief against real market data before sourcing starts — not just what's written, what's actually needed.", icon: <IconTarget /> },
  { title: "Market mapping", desc: "A longlist built from competitor rosters, alumni networks and our private database — not a job-board keyword search.", icon: <IconCompass /> },
  { title: "Structured screening", desc: "Every candidate interviewed against your scorecard, by the partner who took the brief. Same questions, same bar, every time.", icon: <IconDoc /> },
  { title: "Reference checks", desc: "Three references per finalist, called directly — not a form email. We surface what a résumé won't tell you.", icon: <IconShieldCheck /> },
  { title: "Offer negotiation", desc: "We handle comp negotiation and counter-offer defence, so you're not the one going back and forth on salary.", icon: <IconHandshake /> },
  { title: "Onboarding handover", desc: "A written handover to your HR team — start date, comp, agreed start-day logistics — so nothing falls through the gap.", icon: <IconTeam /> },
  { title: "90-day check-ins", desc: "We check in with both sides at 30, 60 and 90 days. Small problems get caught before they become resignations.", icon: <IconClock /> },
  { title: "Replacement guarantee", desc: "If the hire leaves inside 90 days, we restart the search — no additional fee, no re-negotiation of terms.", icon: <IconGuarantee /> },
];

export default function DirectHirePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <header className="page-hero">
        <div className="page-hero-inner">
          <Crumbs items={crumbs} />
          <Eyebrow style={{ margin: "0 auto 28px" }}>Direct Hire · Permanent placement · Contingent</Eyebrow>
          <h1 className="gs">Direct hire,<br /><em>done properly.</em></h1>
          <p className="lead gs">Permanent placements across every function and level. Five fully-screened candidates in 48 hours, a 90-day replacement guarantee, and a contingent fee — you pay on a hire that sticks, not on activity.</p>
          <div className="gs" style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-prim" data-hire>Start a search <Arrow /></button>
            <Link className="btn btn-ghost" href={`${routes.resources}?view=cs`}>See case studies</Link>
          </div>
          <div className="page-hero-meta gs">
            <div className="page-hero-meta-row"><span>Time-to-shortlist</span><strong>48 hours</strong></div>
            <div className="page-hero-meta-row"><span>Offer-acceptance rate</span><strong>94%</strong></div>
            <div className="page-hero-meta-row"><span>Replacement guarantee</span><strong>90 days</strong></div>
            <div className="page-hero-meta-row"><span>Placements delivered</span><strong>500+</strong></div>
          </div>
        </div>
      </header>

      <WhyRivagoSection
        heading={<>Built for hiring teams that<br />can&apos;t afford to <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>slow down.</em></>}
        stats={[
          { val: "94", sup: "%", title: "Offer-acceptance rate", desc: "Last 12 months, across all seniority bands." },
          { val: "48", sup: "h", title: "Time to first shortlist", desc: "From signed brief to calibrated candidates." },
          { val: "90", sup: "d", title: "Replacement guarantee", desc: "We restart the search at no charge." },
          { val: "500", sup: "+", title: "Placements delivered", desc: "Direct hires across every function and level." },
        ]}
        cards={[
          { title: "One named partner", desc: "The same senior partner from brief to placement. No handoffs to BD, no relays through account managers.", icon: <IconPartner /> },
          { title: "Industry specialists", desc: "Your brief goes to a partner who's recruited in your sector for years. They know the comp bands and the people not on LinkedIn.", icon: <IconBadge /> },
          { title: "Fast without cutting corners", desc: "Every candidate fully screened against your scorecard before reaching your inbox — never keyword-matched.", icon: <IconClock /> },
          { title: "Confidential by default", desc: "NDA on request, senior and sensitive searches handled as standard, no questions asked.", icon: <IconShieldCheck /> },
        ]}
      />

      <ProcessSection
        heading={<>A permanent search runs five stages.<br />None of them are <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>a portal.</em></>}
        stages={stages}
      />

      <section className="section">
        <div className="wrap">
          <div className="gs">
            <Eyebrow>What we actually do</Eyebrow>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 700 }}>Eight things happen<br />before you see a <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>résumé.</em></h2>
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
        heading={<>Specialist partners,<br />aligned to <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>your sector.</em></>}
        sub="Your brief goes straight to the partner who works your sector — not a shared queue."
        alt
      />

      <StorySection
        eyebrowText="Client story"
        heading={<>28 hires in 90 days,<br />across <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>five functions.</em></>}
        tag="Technology · US"
        quote="We were scaling five functions at once and didn't have time to run five separate searches. Rivago gave us one partner who understood the whole plan — engineering, finance, sales, ops, support. Twenty-eight hires in ninety days, and every scorecard held up under our own internal review."
        initials="JM"
        name="Jamie M."
        role="Head of Talent Acquisition · US fintech company"
        metrics={[
          { val: "28", label: "Placements in 90 days" },
          { val: "100%", label: "Retention at 6 months" },
          { val: "38h", label: "Average shortlist delivery" },
        ]}
      />

      <CtaSection
        heading={<>Tell us the role.<br /><em>We&apos;ll be back tomorrow.</em></>}
        sub="Send the brief and a partner comes back with a written plan — timeline, comp read and the shape of the shortlist — within one business day."
        primary={{ label: "Start a search", hire: true }}
        secondary={{ label: "See case studies", href: `${routes.resources}?view=cs` }}
      />
    </>
  );
}
