import Link from "next/link";
import type { Metadata } from "next";
import { routes } from "@/lib/routes";
import {
  Arrow,
  breadcrumbJsonLd,
  SwhySection,
  ModesSection,
  Proc2Section,
  GuaranteeSection,
  IndustriesGrid2Section,
  IntakeBandSection,
  FaqSection,
  CtaSection,
} from "../_components/shared";

export const metadata: Metadata = {
  title: "Direct Hire — Permanent Recruitment | Rivago Infotech",
  description:
    "Direct, permanent recruitment from Rivago Infotech — one senior partner per search, a delivery date agreed in writing, a 90-day replacement guarantee and a contingent fee you pay only on a hire that sticks. Permanent hiring across technology, finance, healthcare, legal and more.",
  alternates: { canonical: "https://rivagoinfotech.com/services/direct-hire" },
  openGraph: {
    title: "Direct Hire — Permanent Recruitment | Rivago Infotech",
    description:
      "Direct, permanent recruitment from Rivago Infotech — one senior partner per search, a delivery date agreed in writing, a 90-day replacement guarantee and a contingent fee you pay only on a hire that sticks.",
    url: "https://rivagoinfotech.com/services/direct-hire",
  },
};

const crumbs = [{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }, { label: "Direct Hire" }];

const svgIco = (path: string) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" dangerouslySetInnerHTML={{ __html: path }} />
);

export default function DirectHirePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <header className="svh inv">
        <div className="svh-inner">
          <div className="svh-eyb gs"><span className="dot"></span>Direct Hire · Permanent placement</div>
          <h1 className="gs">Direct hire,<br /><em>done properly.</em></h1>
          <p className="gs">Permanent placements across every function and level. Three to five fully-screened candidates against a date agreed on the first call, a 90-day replacement guarantee, and a contingent fee — you pay on a hire that sticks, not on activity.</p>
          <div className="svh-cta gs">
            <Link className="btn btn-prim" href="#intake">Start a search <Arrow /></Link>
            <Link className="btn btn-ghost" href={routes.resources}>Read our hiring guides</Link>
          </div>
        </div>
      </header>

      <SwhySection
        heading={<>Built for teams that can&apos;t<br />afford <em>the wrong hire.</em></>}
        lead="Most agencies sell volume and hand your role to a junior. We do the opposite — one senior partner owns your permanent search end to end, sources the people who never apply, and stands behind the result in writing."
        /* Was 48h median shortlist, a 94% offer-accept rate "last 12 months"
           and 600+ permanent placements. None of the three was measured, and
           the last contradicted the firm's own figure: `firm.hiresPlaced` in
           lib/routes.ts is 500+ across ALL services, while this page,
           contract-staffing, temporary-staffing and RPO each separately
           claimed 600+. What is here now is what the engagement letter says. */
        numsr={[
          { v: "A date in writing", t: true, title: "Agreed on the intake call", desc: "Not a range, and not revised quietly if it slips." },
          { v: "3–5", title: "Candidates, not thirty", desc: "Each one screened against the scorecard you signed off." },
          { v: "90", sup: "d", title: "Replacement guarantee", desc: "Leaves inside the window? We restart, free." },
          { v: "One partner", t: true, title: "Brief to placement", desc: "Whoever takes the brief runs the search." },
        ]}
        cards={[
          { title: "One partner, full ownership", desc: "The same senior partner from brief to placement. No handoffs to BD, no relays through account managers, no junior researchers running the candidate calls.", icon: svgIco('<circle cx="11" cy="8" r="3.5" stroke="var(--accent)" stroke-width="1.5"/><path d="M4 19c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/>') },
          { title: "Industry specialists", desc: "Your brief goes to a partner who has recruited in your sector for seven-plus years — they know the comp bands, the unpublished orgs and the passive talent.", icon: svgIco('<path d="M11 2l2.2 4.4 4.8.7-3.5 3.4.8 4.8L11 13l-4.3 2.3.8-4.8L4 7.1l4.8-.7z" stroke="var(--accent)" stroke-width="1.5" stroke-linejoin="round"/>') },
          { title: "As fast as the role allows", desc: "You get a delivery date on the first call and we hold it or tell you early. Every candidate is screened against your scorecard before it reaches your inbox — never keyword-matched by a machine.", icon: svgIco('<circle cx="11" cy="11" r="8" stroke="var(--accent)" stroke-width="1.5"/><path d="M11 7v4l3 2" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/>') },
          { title: "Confidential by default", desc: "Sensitive replacements and senior hires handled discreetly — NDA on request, off-market approaches, and your brand kept out of the search until you choose.", icon: svgIco('<rect x="4" y="9" width="14" height="10" rx="2" stroke="var(--accent)" stroke-width="1.5"/><path d="M7 9V6.5a4 4 0 018 0V9" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/>') },
        ]}
      />

      <ModesSection
        eyebrowText="How direct hire works"
        heading={<>Three ways to run a<br />permanent <em>direct-hire search.</em></>}
        modes={[
          { num: "01", title: "Contingent direct hire", desc: "Our most common structure. We work your permanent role on a success basis — you pay only when a candidate signs and stays past the guarantee window.", bullets: ["Delivery date agreed in writing", "3–5 pre-screened candidates per role", "90-day replacement guarantee", "No upfront fee — pay on hire"] },
          { num: "02", title: "Exclusive direct hire", desc: "Give us the role exclusively and it moves to the top of the desk — deeper sourcing, faster turnaround and a partner who works it like a retained search, still on a contingent fee.", bullets: ["Priority sourcing & partner focus", "Full market map, not just active jobseekers", "90-day replacement guarantee", "Weekly written progress updates"], featured: true },
          { num: "03", title: "Retained direct hire", desc: "For business-critical, senior or confidential permanent roles where a wrong hire is expensive. A dedicated partner and researcher run the full search, off-market.", bullets: ["Dedicated partner + research analyst", "Confidential, off-market search", "12-month replacement guarantee", "Salary benchmarking included"] },
        ]}
      />

      <Proc2Section
        heading={<>A permanent search runs five stages.<br />None of them are <em>a portal.</em></>}
        lead="The plan we work to runs about thirty days from signed brief to a placed hire — every stage owned by one partner, and revised with you if it has to move."
        stages={[
          { day: "Day 0–2", title: "Calibrate", desc: "A 60-minute working session sets the scorecard and the off-limits list. You sign off before we source.", deliverValue: "Signed-off scorecard" },
          { day: "Day 2–10", title: "Map", desc: "A longlist of 40–80 names from referrals, competitor maps and our private network — bespoke outreach only.", deliverValue: "40–80 name longlist" },
          { day: "Day 10–18", title: "Screen", desc: "45-minute structured interviews against your scorecard. First calibrated profiles land by day 12.", deliverValue: "Calibrated profiles" },
          { day: "Day 18–28", title: "Panel", desc: "We run the loop end to end — scheduling, debriefs, references — with a written brief before each round.", deliverValue: "Debriefs & references" },
          { day: "Day 28+", title: "Placed & guaranteed", desc: "Offer, counter-offer defence and a signed start — backed by check-ins at 3, 6 and 12 months.", deliverValue: "Signed start · 12-mo guarantee", done: true },
        ]}
      />

      {/* The eyebrow on this section reads "What we put in writing", so every
          tile now holds an actual term of the engagement letter — and each one
          is stated again, in full, in the FAQ below. It used to hold a 48-hour
          shortlist, a 94% offer-accept rate and 600+ placements under the
          heading "Four numbers we'll stand behind", which is a strong promise
          to attach to figures nobody had measured. */}
      <GuaranteeSection
        heading={<>Four things that go in<br />the <em>engagement letter.</em></>}
        stats={[
          { val: "90", sup: "days", title: "Replacement guarantee", desc: "If a permanent hire resigns or is terminated on performance inside 90 days, we restart the search at no professional fee." },
          { val: "12", sup: "months", title: "Introduction period", desc: "How long a candidate we introduced stays ours. Anyone already in your ATS beforehand is excluded, and we check that before submitting." },
          { val: "Base salary only", t: true, title: "What the fee is calculated on", desc: "Bonus, equity, sign-on, relocation and benefits are all excluded, and the percentage is fixed before we source." },
          { val: "Nothing", t: true, title: "If we cannot fill it", desc: "Contingent search — you pay no fee. You still get our written read on why: comp band, specification, location or seniority." },
        ]}
      />

      <IndustriesGrid2Section
        heading={<>Specialist partners,<br />aligned to <em>your sector.</em></>}
        sub="Every Rivago partner runs one practice. They've placed inside it for at least seven years. They know the comp bands, the org charts, and the people who haven't updated their LinkedIn in two years."
      />

      {/* THE CUSTOMER-STORY BAND STOOD HERE and has been removed, on all six
          service pages that carried one.

          Each held three quotes attributed to "Ryan P.", "Priya R." and
          "Samira M." — the same three names on every page, with a different
          job each time. Across the six, Ryan P. was a VP of Engineering, a
          Director of Engineering, a Workforce Planner, a founder, a board
          member and a board chair. Under all eighteen ran the line "No
          pseudonyms. No doctored quotes."

          None of the engagements happened. Rivago has no client who has
          signed off on a published quote — the same reason the nine case
          studies came off /resources and the nine "Client story" cards came
          off /services. Put a band back when there are real quotes with real
          sign-off; TestiCreamSection is gone with the copy, so it will need
          rebuilding, which is the correct amount of friction. */}

      <IntakeBandSection
        heading={<>Tell us the role.<br /><em>We&apos;ll do the rest.</em></>}
        lead="Four minutes. A senior partner reads every brief within an hour and books a thirty-minute calibration call before any sourcing begins."
        bullets={[
          { strong: "No retainer required.", rest: "Contingent by default. Pay on placement, not on activity." },
          { strong: "One named partner", rest: "— from brief to placement. No junior handoffs, no account managers in between." },
          { strong: "NDA on request.", rest: "Confidential searches handled as standard — senior hires, sensitive replacements." },
          { strong: "90-day replacement guarantee.", rest: "No questions, no additional fee. We restart the search." },
        ]}
      />

      <FaqSection
        heading={<>Direct hire, <em>answered properly.</em></>}
        items={[
          { q: "Is the fee calculated on base salary or total compensation?", a: "On first-year base salary only. Bonus, equity, sign-on, relocation and benefits are excluded from the calculation. The percentage is fixed in the engagement letter before we source, so the invoice figure is predictable the day you sign." },
          { q: "What exactly does the 90-day guarantee cover, and what voids it?", a: "It covers voluntary resignation and performance-based termination inside 90 days of the start date — we restart the search at no professional fee. It does not cover redundancy, a role being cancelled, restructuring, or a material change to the job the candidate accepted. Those exclusions are written into the agreement rather than buried in terms." },
          { q: "What if we hire a candidate you introduced six months later?", a: "Our introduction period is twelve months from the date we send you the profile. If you hire someone we introduced within that window — for this role or any other — the standard fee applies. Anyone already in your ATS before our introduction is excluded, and we check that before submitting." },
          { q: "Do you work exclusively, or alongside other agencies?", a: "Both. Exclusive briefs get faster turnaround and deeper market coverage because the partner can commit time without racing a competitor. If you run a multi-agency process we will still work it, but we will tell you honestly when a role is unlikely to be won that way." },
          { q: "What happens if you cannot fill the role?", a: "You pay nothing — that is the nature of contingent search. More usefully, we will tell you why: whether the compensation is below market, the specification is internally contradictory, the location is limiting, or the seniority does not match the budget. That feedback is often worth more than another round of CVs." },
          { q: "How many candidates will we actually see?", a: "Three to five, not thirty. Every one is screened against the scorecard you signed off, and arrives with written assessment notes explaining the recommendation. If none of the first shortlist is right, that is a calibration problem and we recalibrate rather than sending more volume." },
        ]}
      />

      <CtaSection
        heading={<>Tell us who you need.<br /><em>We&apos;ll be back tomorrow.</em></>}
        sub="A 30-minute scoping call with a partner — not a portal — and a written shortlist plan in your inbox within one business day."
        primary={{ label: "Book a scoping call", href: "#intake" }}
        secondary={{ label: "Read our hiring guides", href: routes.resources }}
      />
    </>
  );
}
