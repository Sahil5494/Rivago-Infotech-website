import Link from "next/link";
import type { Metadata } from "next";
import { routes } from "@/lib/routes";
import {
  Arrow,
  breadcrumbJsonLd,
  SwhySection,
  ModesSection,
  Proc2Section,
  IndustriesGrid2Section,
  TestiCreamSection,
  IntakeBandSection,
  FaqSection,
  CtaSection,
} from "../_components/shared";

export const metadata: Metadata = {
  title: "Contract Staffing — Flexible & Contract-to-Hire | Rivago Infotech",
  description:
    "Skilled professionals on flexible terms — pure contract, contract-to-hire, or a managed team. Rivago runs payroll, compliance and worker classification; you get productive people in days, not weeks.",
  alternates: { canonical: "https://rivagoinfotech.com/services/contract-staffing" },
  openGraph: {
    title: "Contract Staffing — Flexible & Contract-to-Hire | Rivago Infotech",
    description: "Skilled professionals on flexible terms. Rivago runs payroll, compliance and worker classification; you get productive people in days, not weeks.",
    url: "https://rivagoinfotech.com/services/contract-staffing",
  },
};

const crumbs = [{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }, { label: "Contract Staffing" }];

const svgIco = (path: string) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" dangerouslySetInnerHTML={{ __html: path }} />
);

export default function ContractStaffingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <header className="svh">
        <div className="svh-inner">
          <div className="svh-eyb gs"><span className="dot"></span>Contract Staffing · Flexible &amp; contract-to-hire</div>
          <h1 className="gs">Contract talent,<br /><em>live in days.</em></h1>
          <p className="gs">Skilled professionals on flexible terms — pure contract, contract-to-hire, or a managed team. We run payroll, compliance and worker classification; you get productive people in days, not weeks.</p>
          <div className="svh-cta gs">
            <Link className="btn btn-prim" href="#intake">Request contractors <Arrow /></Link>
            <Link className="btn btn-ghost" href={`${routes.resources}?view=cs`}>See case studies</Link>
          </div>
        </div>
      </header>

      <SwhySection
        heading={<>Flexible capacity, without<br />the <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>compliance headache.</em></>}
        lead="Most agencies bench-warm a list and bill the markup. We do the opposite — one senior partner owns your contract need end to end, deploys from a pre-vetted bench, and carries payroll, tax and worker classification so you don't."
        numsr={[
          { v: "5–7", sup: "d", title: "To first contractor", desc: "Vetted, available and cleared to start." },
          { v: "100", sup: "%", title: "Compliance handled", desc: "Payroll, tax and classification, on us." },
          { v: "63", sup: "%", title: "Convert to permanent", desc: "Of contract-to-hire engagements, last year." },
          { v: "600", sup: "+", title: "Contractors deployed", desc: "Across four markets, to date." },
        ]}
        cards={[
          { title: "One partner, full ownership", desc: "The same senior partner from brief to deployment and beyond. No handoffs to a BD desk, no account-manager relay — one name owns the engagement.", icon: svgIco('<circle cx="11" cy="8" r="3.5" stroke="#3DFF87" stroke-width="1.5"/><path d="M4 19c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="#3DFF87" stroke-width="1.5" stroke-linecap="round"/>') },
          { title: "Payroll & compliance, on us", desc: "We become the employer of record for every contractor — payroll, taxes, benefits, insurance and IR35/worker classification handled in-country.", icon: svgIco('<rect x="3" y="6" width="16" height="12" rx="2" stroke="#3DFF87" stroke-width="1.5"/><path d="M3 10h16M7 3v3" stroke="#3DFF87" stroke-width="1.5" stroke-linecap="round"/>') },
          { title: "Deployed in days", desc: "A standing bench of pre-vetted, references-checked contractors means most roles are filled and productive inside a working week.", icon: svgIco('<circle cx="11" cy="11" r="8" stroke="#3DFF87" stroke-width="1.5"/><path d="M11 7v4l3 2" stroke="#3DFF87" stroke-width="1.5" stroke-linecap="round"/>') },
          { title: "Convert when you're ready", desc: "Every contractor can move to permanent with no conversion fee after an agreed period — try before you commit, keep the ones who fit.", icon: svgIco('<path d="M4 11h6l-2-2M4 11l4 2M18 11h-6l2-2M18 11l-4 2" stroke="#3DFF87" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>') },
        ]}
      />

      <ModesSection
        eyebrowText="How contract staffing works"
        heading={<>Three ways to add<br />flexible <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>contract capacity.</em></>}
        modes={[
          { num: "01", title: "Contract staffing", desc: "Skilled professionals for a defined period or project. Billed on a transparent day-rate — we handle payroll, tax, insurance and compliance so the worker is fully covered from day one.", bullets: ["Deployed in 5–7 days", "Transparent day-rate, no hidden markup", "Payroll & compliance fully handled", "Scale the team up or down as work changes"] },
          { num: "02", title: "Contract-to-hire", desc: "Trial the fit before you commit. The professional works on contract for an agreed period, then converts to your permanent payroll with no conversion fee once you're sure.", bullets: ["Try before you commit", "No conversion fee after the agreed term", "Payroll & compliance during the contract", "63% convert to permanent"], featured: true },
          { num: "03", title: "Managed contract team", desc: "Need a whole squad or a statement-of-work delivery team? We stand up, run and supervise a managed contract team against your outcomes — one contract, one point of contact.", bullets: ["Full team stood up in weeks", "SOW or managed-capacity models", "Single contract, single invoice", "On-site or fully remote"] },
        ]}
      />

      <Proc2Section
        heading={<>A contract engagement runs five stages.<br />None of them are <em>a portal.</em></>}
        lead="From signed brief to a contractor at their desk in about a week — compliance, payroll and classification handled throughout."
        stages={[
          { day: "Day 0–1", title: "Scope the engagement", desc: "A 45-minute call fixes the skills, rate band, duration and start date. You approve the spec before we go out.", deliverValue: "Signed-off SOW scope" },
          { day: "Day 1–3", title: "Shortlist from bench", desc: "Pre-vetted contractors already cleared to work, plus targeted outreach where the bench is thin.", deliverValue: "3–5 available contractors" },
          { day: "Day 3–5", title: "Validate & lock rate", desc: "Skills tested against the spec, references checked, right-to-work verified and the rate agreed in writing.", deliverValue: "Verified, rate-locked slate" },
          { day: "Day 5–7", title: "Contract & onboard", desc: "We paper the engagement, run classification checks, set up payroll and arrange access and kit.", deliverValue: "Compliant day-one start" },
          { day: "Ongoing", title: "Manage, extend, convert", desc: "Timesheets, performance check-ins and a single invoice — extend the term or convert to permanent whenever it suits.", deliverValue: "One invoice · convert anytime" },
        ]}
      />

      <IndustriesGrid2Section
        heading={<>Specialist partners,<br />aligned to <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>your sector.</em></>}
        sub="Every Rivago partner runs one practice. They know which contractors are genuinely available next week, what the going day rate actually is, and who delivers without hand-holding."
      />

      <TestiCreamSection
        heading={<>Contract talent,<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>in their own words.</em></>}
        sub="Plain English from delivery leads, engineering managers and ops directors who scaled with Rivago contractors in the last eighteen months. No pseudonyms. No doctored quotes."
        cards={[
          { tag: "US · Technology", quote: "We had a six-month platform build and no headcount to hire against. Rivago stood up four contract engineers in a week — payroll, IR35, all of it handled. We shipped on time and kept two on permanently.", initials: "RP", name: "Ryan P.", role: "Director of Engineering · US SaaS" },
          { tag: "Canada · Finance", quote: "Year-end always breaks our capacity. Rivago gives us five contract analysts every Q4 — same people where we can, cleared and productive on day one, off payroll again in January. Zero compliance drama.", initials: "PR", name: "Priya R.", role: "Finance Director · Ontario financial services" },
          { tag: "UAE · Operations", quote: "We open new sites on tight timelines and need contract teams that are compliant from hour one. Rivago became the employer of record for the whole squad — visas, payroll, insurance. We just directed the work.", initials: "SM", name: "Samira M.", role: "VP Operations · Dubai logistics group" },
        ]}
      />

      <IntakeBandSection
        heading={<>Tell us the roles.<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic" }}>We&apos;ll do the rest.</em></>}
        lead="Four minutes. A senior partner reads every brief within an hour and confirms availability, rate and start date before anyone is deployed."
        bullets={[
          { strong: "Deployed in 5–7 days.", rest: "Vetted, available contractors cleared and ready to start." },
          { strong: "Payroll & compliance on us.", rest: "We're the employer of record — tax, insurance and classification handled." },
          { strong: "Convert with no fee.", rest: "Move any contractor to permanent after the agreed term at no conversion charge." },
          { strong: "48-hour replacement.", rest: "If a contractor isn't the right fit, we swap them fast — no extra charge." },
        ]}
      />

      <FaqSection
        heading={<>Contract staffing, <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>the real questions.</em></>}
        items={[
          { q: "What is your margin, and is it visible to us?", a: "Yes — the margin is stated as a separate line before the engagement starts and does not change without your written agreement. You see the contractor pay rate, the employment on-costs and the Rivago margin as distinct figures rather than a single blended number." },
          { q: "Who carries the misclassification risk?", a: "Rivago does. We are the legal employer of record for every contract placement: we hold the employment contract, run payroll and withholding, provide statutory benefits and carry employer liability insurance. Classification determinations are made and documented by us, and we indemnify you against them." },
          { q: "What does it cost to convert a contractor to permanent?", a: "Conversion terms are agreed at the start, not negotiated under pressure later. Typically the conversion fee tapers with time served — after a defined period, conversion is free. The schedule is written into the engagement letter so you can plan around it." },
          { q: "What are your payment terms, and when do we get invoiced?", a: "Contractors submit timesheets weekly and are approved by your manager before invoicing. You are billed on approved hours only, on standard net terms. Rivago pays the contractor regardless of when you pay us, so a delay on your side never affects the person doing the work." },
          { q: "How is a contractor different from a temporary worker?", a: "Contract is an individual professional on a longer fixed term — usually months — doing specialist or project work at a professional day or hourly rate. Temporary staffing is shorter-cycle operational cover, often multiple workers, measured in days or weeks. Both sit on Rivago payroll." },
          { q: "What happens if the contractor underperforms?", a: "Tell your partner and we replace them. Contract placements carry a replacement commitment inside the first two weeks at no cost, and we will not invoice for a contractor you have asked us to remove on performance grounds." },
        ]}
      />

      <CtaSection
        heading={<>Tell us who you need.<br /><em>We&apos;ll be back tomorrow.</em></>}
        sub="A 30-minute scoping call with a partner — not a portal — and available contractors with day rates in your inbox within one business day."
        primary={{ label: "Book a scoping call", href: "#intake" }}
        secondary={{ label: "Read case studies", href: `${routes.resources}?view=cs` }}
      />
    </>
  );
}
