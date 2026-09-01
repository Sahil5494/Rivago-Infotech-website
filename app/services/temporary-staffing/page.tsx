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
  title: "Temporary Staffing — On-Demand & Seasonal | Rivago Infotech",
  description:
    "On-demand professionals for peaks, seasonal spikes and leave cover. Vetted, compliant and deployed in 24–72 hours — scale your team up or down as the work changes, with zero long-term commitment.",
  alternates: { canonical: "https://rivagoinfotech.com/services/temporary-staffing" },
  openGraph: {
    title: "Temporary Staffing — On-Demand & Seasonal | Rivago Infotech",
    description: "On-demand professionals for peaks, seasonal spikes and leave cover, deployed in 24–72 hours with zero long-term commitment.",
    url: "https://rivagoinfotech.com/services/temporary-staffing",
  },
};

const crumbs = [{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }, { label: "Temporary Staffing" }];

const svgIco = (path: string) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" dangerouslySetInnerHTML={{ __html: path }} />
);

export default function TemporaryStaffingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <header className="svh">
        <div className="svh-inner">
          <div className="svh-eyb gs"><span className="dot"></span>Temporary Staffing · On-demand &amp; seasonal</div>
          <h1 className="gs">Cover the surge.<br /><em>Skip the scramble.</em></h1>
          <p className="gs">On-demand professionals for peaks, seasonal spikes and leave cover. Vetted, compliant and deployed in 24–72 hours — scale your team up or down as the work changes, with zero long-term commitment.</p>
          <div className="svh-cta gs">
            <Link className="btn btn-prim" href="#intake">Staff up now <Arrow /></Link>
            <Link className="btn btn-ghost" href={`${routes.resources}?view=cs`}>See case studies</Link>
          </div>
        </div>
      </header>

      <SwhySection
        heading={<>Capacity the day<br />you <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>actually need it.</em></>}
        lead="Most agencies scramble when you call. We do the opposite — a standing pool of pre-vetted workers, one partner who knows your operation, and payroll, scheduling and compliance already handled so people are productive on arrival."
        numsr={[
          { v: "24–72", sup: "h", title: "To deployment", desc: "From confirmed brief to workers on the floor." },
          { v: "100", sup: "%", title: "Compliance handled", desc: "Payroll, tax and right-to-work, on us." },
          { v: "±", title: "Scale up or down", desc: "Flex headcount as the workload changes." },
          { v: "600", sup: "+", title: "Temporary placements", desc: "Across four markets, to date." },
        ]}
        cards={[
          { title: "Deployed in 24–72 hours", desc: "A standing, pre-vetted pool means we can put people on the floor the same week you call — sometimes the same day.", icon: svgIco('<circle cx="11" cy="11" r="8" stroke="#3DFF87" stroke-width="1.5"/><path d="M11 7v4l3 2" stroke="#3DFF87" stroke-width="1.5" stroke-linecap="round"/>') },
          { title: "Payroll & compliance, on us", desc: "We're the employer of record for every temp — payroll, tax, insurance, right-to-work and scheduling all handled in-country.", icon: svgIco('<rect x="3" y="6" width="16" height="12" rx="2" stroke="#3DFF87" stroke-width="1.5"/><path d="M3 10h16M7 3v3" stroke="#3DFF87" stroke-width="1.5" stroke-linecap="round"/>') },
          { title: "Scale up or down instantly", desc: "Ramp for a peak, cover a shift, wind down after the season — flex headcount as demand moves, with no long-term commitment.", icon: svgIco('<path d="M4 11h6l-2-2M4 11l4 2M18 11h-6l2-2M18 11l-4 2" stroke="#3DFF87" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>') },
          { title: "Reliable, vetted people", desc: "Right-to-work, references and skills checked before anyone is offered — plus a bench of proven repeat workers you can request by name.", icon: svgIco('<path d="M11 2l2.2 4.4 4.8.7-3.5 3.4.8 4.8L11 13l-4.3 2.3.8-4.8L4 7.1l4.8-.7z" stroke="#3DFF87" stroke-width="1.5" stroke-linejoin="round"/>') },
        ]}
      />

      <ModesSection
        eyebrowText="How temporary staffing works"
        heading={<>Three ways to add<br />on-demand <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>temporary capacity.</em></>}
        modes={[
          { num: "01", title: "Temporary cover", desc: "Fill a gap fast — sickness, parental leave, a sudden departure or a short project. A vetted professional in the seat within 24–72 hours, for as long as you need them.", bullets: ["Deployed in 24–72 hours", "Day, week or month-long assignments", "Payroll & compliance fully handled", "End the assignment anytime"] },
          { num: "02", title: "Seasonal & peak staffing", desc: "Ramp a whole crew for a busy season, a product launch or a demand spike — then wind it down cleanly. Volume hiring, pre-planned, with the same proven faces year on year.", bullets: ["Volume ramp, planned in advance", "Request proven repeat workers by name", "Scale down cleanly when it's over", "One invoice, one point of contact"], featured: true },
          { num: "03", title: "On-site managed team", desc: "For high-volume or shift-based operations, we place an on-site coordinator alongside the workers — managing scheduling, attendance, swaps and quality so you don't have to.", bullets: ["On-site supervision included", "Shift scheduling & attendance managed", "Same-day replacement swaps", "Volume & multi-site coverage"] },
        ]}
      />

      <Proc2Section
        heading={<>A temporary requirement runs five stages.<br />None of them are <em>a portal.</em></>}
        lead="From the phone call to workers on site in days, not weeks — with same-day cover behind every placement."
        stages={[
          { day: "Hours 0–4", title: "Take the requirement", desc: "Headcount, shift pattern, site and start time captured on one call. No forms, no portal, no delay.", deliverValue: "Confirmed requirement" },
          { day: "Day 1", title: "Match from the bench", desc: "We draw on temps already screened, referenced and cleared to work — so there is nothing left to chase.", deliverValue: "Named workers confirmed" },
          { day: "Day 1–2", title: "Clear compliance", desc: "Right-to-work, certifications, site inductions and any licence checks completed and filed.", deliverValue: "Audit-ready compliance file" },
          { day: "Day 2–3", title: "Deploy on site", desc: "Workers arrive briefed on the role and the site, with a named coordinator reachable on the day.", deliverValue: "Boots on the ground" },
          { day: "Ongoing", title: "Flex and cover", desc: "Scale up, scale down or swap in same-day replacements — all consolidated into one weekly invoice.", deliverValue: "Same-day cover · one invoice", done: true },
        ]}
      />

      <IndustriesGrid2Section
        heading={<>Specialist partners,<br />aligned to <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>your sector.</em></>}
        sub="Every Rivago partner runs one practice. They know the shift patterns, the certifications each site demands, and which temps turn up on time in your sector."
      />

      <TestiCreamSection
        heading={<>Temporary teams,<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>in their own words.</em></>}
        sub="Plain English from ops leads, site managers and workforce planners who scaled with Rivago temps in the last eighteen months. No pseudonyms. No doctored quotes."
        cards={[
          { tag: "US · Retail", quote: "Black Friday nearly broke us the year before. Rivago ramped forty temps across three sites in seventy-two hours — same crew we'd rated the prior peak. Every shift covered, off payroll by January.", initials: "RP", name: "Ryan P.", role: "Workforce Planner · US retail group" },
          { tag: "Canada · Healthcare", quote: "A norovirus outbreak took out a third of our floor staff overnight. Rivago had eight cleared support workers on-site the next morning — right-to-work and references already done. It saved the ward.", initials: "PR", name: "Priya R.", role: "Operations Lead · Ontario care provider" },
          { tag: "UAE · Events", quote: "We run large events on impossible timelines. Rivago fields on-site managed crews — hospitality, logistics, front-of-house — with their own supervisor. Visas and payroll handled. We just run the show.", initials: "SM", name: "Samira M.", role: "Event Operations Director · Dubai" },
        ]}
      />

      <IntakeBandSection
        heading={<>Tell us what you need.<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic" }}>We&apos;ll do the rest.</em></>}
        lead="Three minutes. A senior partner reads every request within the hour and confirms headcount, shift pattern and start before anyone is deployed."
        bullets={[
          { strong: "Deployed in 24–72 hours.", rest: "Vetted workers on-site or online and productive, fast." },
          { strong: "Payroll & compliance on us.", rest: "We're the employer of record — tax, insurance and right-to-work handled." },
          { strong: "Scale up or down anytime.", rest: "Ramp for a peak, cover a shift, wind down cleanly — no long-term commitment." },
          { strong: "Same-day replacement.", rest: "If a worker can't attend, we swap them the same day at no extra cost." },
        ]}
      />

      <FaqSection
        heading={<>Temporary staffing, <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>the practical detail.</em></>}
        items={[
          { q: "How fast is “fast”, realistically?", a: "Two to three days for most requirements, and same-week for urgent cover. That is achievable because the bench is pre-screened, referenced and compliance-cleared before you call — there is no screening cycle to run once the requirement lands." },
          { q: "What happens when someone does not turn up?", a: "You get same-day replacement cover. Every placement has a named coordinator reachable on the day, and a cleared bench behind it so a substitute does not need a fresh screening cycle. No-shows are tracked against each worker and repeat offenders come off the bench." },
          { q: "Who is liable if a temporary worker is injured on our site?", a: "Rivago carries employer liability and workers compensation insurance for every temporary worker, and certificates are available on request. Site-specific safety induction is your responsibility as the controller of the premises; we document that it was completed before the worker starts." },
          { q: "Can we scale down without redundancy exposure?", a: "Yes — that is the core commercial reason to use temporary staffing. Workers are employed by Rivago, so reducing headcount is a change to the assignment, not a redundancy process. There is no notice liability and no termination cost to you." },
          { q: "How are overtime, holiday and public holidays charged?", a: "At the statutory or agreed premium rate for the jurisdiction, shown separately on the invoice. Holiday accrual is included in the rate and itemised, so there is no year-end true-up and no surprise cost when a worker takes leave." },
          { q: "Do we get the same workers back for repeat peaks?", a: "Wherever possible, yes, and we track it deliberately. Returning workers already know your site, your systems and your standards, which removes the induction cost. We keep a named roster per client for seasonal and recurring demand." },
        ]}
      />

      <CtaSection
        heading={<>Tell us who you need.<br /><em>We&apos;ll be back tomorrow.</em></>}
        sub="A 30-minute call with a partner — not a portal — and a staffing plan with confirmed availability in your inbox the same day."
        primary={{ label: "Book a scoping call", href: "#intake" }}
        secondary={{ label: "Read case studies", href: `${routes.resources}?view=cs` }}
      />
    </>
  );
}
