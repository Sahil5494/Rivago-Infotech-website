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
  IconShieldCheck,
  IconHeart,
  IconTeam,
  IconGlobe,
} from "../_components/shared";

export const metadata: Metadata = {
  title: "Employer of Record — Rivago Infotech",
  description:
    "Hire anywhere, compliantly. Rivago becomes the legal employer — payroll, tax, benefits and contracts handled in-country — so you can hire without setting up a local entity.",
  alternates: { canonical: "https://rivagoinfotech.com/services/employer-of-record" },
  openGraph: {
    title: "Employer of Record — Rivago Infotech",
    description: "Hire anywhere, compliantly. We become the legal employer — payroll, tax, benefits and contracts in-country.",
    url: "https://rivagoinfotech.com/services/employer-of-record",
  },
};

const crumbs = [{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }, { label: "Employer of Record" }];

const stages = [
  { step: "Step 01", title: "Bring us the talent", desc: "You've found the person — through your own network, a referral, or a Rivago search. Bring us the offer details and the market you're hiring into.", side: [["You provide", "Candidate + offer"], ["We confirm", "Market feasibility"], ["Turnaround", "Same day"]] as [string, string][] },
  { step: "Step 02", title: "We become the employer", desc: "Rivago becomes the legal employer of record in that market — issuing a compliant local contract while you keep full day-to-day direction of the work.", side: [["Employer of record", "Rivago"], ["Contract", "Locally compliant"], ["You keep", "Day-to-day direction"]] as [string, string][] },
  { step: "Step 03", title: "Fast, guided onboarding", desc: "We walk the new hire through paperwork, benefits enrolment and payroll setup — a guided process, not a stack of forms dropped in their inbox.", side: [["Onboarding", "Guided, 1:1"], ["Time to first pay run", "<30 days"], ["Support", "Bilingual where needed"]] as [string, string][] },
  { step: "Step 04", title: "We run payroll & compliance", desc: "Payroll, tax withholding, statutory benefits and local labour-law compliance run by Rivago every cycle — you approve one invoice, not a compliance filing.", side: [["Payroll cycle", "Local standard"], ["Compliance", "Fully owned"], ["Your admin", "One invoice"]] as [string, string][] },
  { step: "Step 05", title: "Scale with confidence", desc: "Add headcount in a new market without incorporating there. When it's time to set up your own entity, we hand over a clean, fully compliant employment record.", side: [["New entity needed", "No"], ["Scale up/down", "Flexible"], ["Handover", "Clean & documented"]] as [string, string][] },
];

const faqItems = [
  { q: "Do I need a local entity to hire through Rivago's EOR?", a: "No — that's the point. Rivago becomes the legal employer in the candidate's market, so you can hire and pay someone compliantly without incorporating a local entity first." },
  { q: "How much control do I keep over the employee's work?", a: "Full control over day-to-day work, projects and performance management. Rivago handles the legal employment relationship — payroll, tax, contracts and statutory compliance — not the working relationship itself." },
  { q: "What benefits are included?", a: "Medical, dental and vision coverage, paid sick leave and a matched retirement contribution, structured to match statutory minimums and market norms in each country we operate in — not a stripped-down, compliance-only package." },
  { q: "How long does it take to onboard someone?", a: "Typically under 30 days to the first payroll run, including contract issuance and benefits enrolment. We'll give you a specific timeline for the market you're hiring into on the intake call." },
  { q: "What happens if I later want to set up my own entity in that market?", a: "We hand over a clean, fully documented employment record — contracts, payroll history and compliance filings — so the transition to your own entity is straightforward, not a scramble." },
  { q: "Which markets do you cover for Employer of Record?", a: "The United States, Canada, the UAE and India, with local payroll, tax and statutory compliance run in-market for each. Ask your partner if you need a market outside that list." },
];

export default function EmployerOfRecordPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <header className="page-hero">
        <div className="page-hero-inner">
          <Crumbs items={crumbs} />
          <Eyebrow style={{ margin: "0 auto 28px" }}>Employer of Record · No entity required · Compliant hiring</Eyebrow>
          <h1 className="gs">You&apos;ve got the talent?<br /><em>We&apos;ll make the hire.</em></h1>
          <p className="lead gs">Hire anywhere, compliantly, without setting up a local entity. Rivago becomes the legal employer — payroll, tax, benefits and contracts handled in-country — while you keep full control of the work.</p>
          <div className="gs" style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-prim" data-hire>Make the hire <Arrow /></button>
          </div>
          <div className="page-hero-meta gs">
            <div className="page-hero-meta-row"><span>Local entity required</span><strong>None</strong></div>
            <div className="page-hero-meta-row"><span>Payroll & compliance</span><strong>Fully owned</strong></div>
            <div className="page-hero-meta-row"><span>Markets covered</span><strong>US · CA · UAE · IN</strong></div>
            <div className="page-hero-meta-row"><span>Time to first pay run</span><strong>&lt;30 days</strong></div>
          </div>
        </div>
      </header>

      <WhyRivagoSection
        heading={<>Built for companies hiring<br />where they <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>don&apos;t have an entity.</em></>}
        stats={[
          { val: "0", sup: undefined, title: "Entity required", desc: "Hire in-market without incorporating a local entity." },
          { val: "100", sup: "%", title: "Payroll & compliance owned", desc: "Tax, statutory benefits and contracts handled in-country." },
          { val: "4", sup: undefined, title: "Markets covered", desc: "US, Canada, UAE and India — one EOR partner for all." },
          { val: "1", sup: undefined, title: "Partner on the line", desc: "One name owns the relationship, start to finish." },
        ]}
        cards={[
          { title: "Less risk on you", desc: "Employees are hired as W-2 employees of record, with misclassification risk carried by Rivago, not you.", icon: <IconShieldCheck /> },
          { title: "Benefits that hold up", desc: "Medical, dental and vision, paid sick leave, and a matched retirement contribution — real benefits, not a compliance minimum.", icon: <IconHeart /> },
          { title: "Genuinely good care", desc: "Regular check-ins and coaching keep talent satisfaction high — an EOR hire shouldn't feel like a second-class employee.", icon: <IconTeam /> },
          { title: "Compliant in every market", desc: "Local payroll, tax and statutory handling across every market we serve — built into the employment relationship from day one.", icon: <IconGlobe /> },
        ]}
      />

      <ProcessSection
        eyebrowText="How Employer of Record works"
        heading={<>Five steps from candidate<br />to <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>compliant employee.</em></>}
        stages={stages}
      />

      <IndustriesSection
        eyebrowText="Industries"
        heading={<>Compliant hiring,<br />in <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>every sector.</em></>}
        sub="From a first hire in a new market to a distributed team of fifty — the compliance model scales with you."
        alt
      />

      <StorySection
        eyebrowText="Client story"
        heading={<>A first hire in India,<br />live in <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>under a month.</em></>}
        tag="Technology · India"
        quote="We found the engineer ourselves through a referral, but we had no entity in India and no appetite to set one up for a single hire. Rivago had her employed, paid and fully compliant inside four weeks. Eighteen months later we've hired three more through the same setup."
        initials="AT"
        name="Adam T."
        role="VP Engineering · US SaaS company"
        metrics={[
          { val: "4wk", label: "First hire live and compliant" },
          { val: "0", label: "Local entities set up" },
          { val: "3", label: "Additional hires through the same EOR" },
        ]}
      />

      <FaqSection
        heading={<>Employer of Record, <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>answered.</em></>}
        items={faqItems}
      />

      <CtaSection
        heading={<>Found the talent?<br /><em>We&apos;ll make the hire.</em></>}
        sub="Send the offer details and the market you're hiring into — a partner confirms feasibility and timeline within one business day."
        primary={{ label: "Make the hire", hire: true }}
        secondary={{ label: "Connect with a recruiter", href: routes.contactUs }}
        footnote="Already working with us? Reach your partner directly."
      />
    </>
  );
}
