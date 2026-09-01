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
  TestiCreamSection,
  IntakeBandSection,
  FaqSection,
  CtaSection,
} from "../_components/shared";

export const metadata: Metadata = {
  title: "Direct Hire — Permanent Recruitment | Rivago Infotech",
  description:
    "Direct, permanent recruitment from Rivago Infotech — one senior partner per search, a 48-hour shortlist, a 90-day replacement guarantee and a contingent fee you pay only on a hire that sticks. Permanent hiring across technology, finance, healthcare, legal and more.",
  alternates: { canonical: "https://rivagoinfotech.com/services/direct-hire" },
  openGraph: {
    title: "Direct Hire — Permanent Recruitment | Rivago Infotech",
    description:
      "Direct, permanent recruitment from Rivago Infotech — one senior partner per search, a 48-hour shortlist, a 90-day replacement guarantee and a contingent fee you pay only on a hire that sticks.",
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

      <header className="svh">
        <div className="svh-inner">
          <div className="svh-eyb gs"><span className="dot"></span>Direct Hire · Permanent placement</div>
          <h1 className="gs">Direct hire,<br /><em>done properly.</em></h1>
          <p className="gs">Permanent placements across every function and level. Five fully-screened candidates in 48 hours, a 90-day replacement guarantee, and a contingent fee — you pay on a hire that sticks, not on activity.</p>
          <div className="svh-cta gs">
            <Link className="btn btn-prim" href="#intake">Start a search <Arrow /></Link>
            <Link className="btn btn-ghost" href={`${routes.resources}?view=cs`}>See case studies</Link>
          </div>
        </div>
      </header>

      <SwhySection
        heading={<>Built for teams that can&apos;t<br />afford <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>the wrong hire.</em></>}
        lead="Most agencies sell volume and hand your role to a junior. We do the opposite — one senior partner owns your permanent search end to end, sources the people who never apply, and stands behind the result in writing."
        numsr={[
          { v: "48", sup: "h", title: "Median shortlist", desc: "Signed brief to three to five calibrated finalists." },
          { v: "94", sup: "%", title: "Offer-accept rate", desc: "Last 12 months, every level." },
          { v: "90", sup: "d", title: "Replacement guarantee", desc: "Leaves inside the window? We restart, free." },
          { v: "600", sup: "+", title: "Permanent placements", desc: "Across four markets, to date." },
        ]}
        cards={[
          { title: "One partner, full ownership", desc: "The same senior partner from brief to placement. No handoffs to BD, no relays through account managers, no junior researchers running the candidate calls.", icon: svgIco('<circle cx="11" cy="8" r="3.5" stroke="#3DFF87" stroke-width="1.5"/><path d="M4 19c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="#3DFF87" stroke-width="1.5" stroke-linecap="round"/>') },
          { title: "Industry specialists", desc: "Your brief goes to a partner who has recruited in your sector for seven-plus years — they know the comp bands, the unpublished orgs and the passive talent.", icon: svgIco('<path d="M11 2l2.2 4.4 4.8.7-3.5 3.4.8 4.8L11 13l-4.3 2.3.8-4.8L4 7.1l4.8-.7z" stroke="#3DFF87" stroke-width="1.5" stroke-linejoin="round"/>') },
          { title: "Fast without cutting corners", desc: "48-hour median shortlists, every time. Every candidate is fully screened against your scorecard before your inbox — never keyword-matched by a machine.", icon: svgIco('<circle cx="11" cy="11" r="8" stroke="#3DFF87" stroke-width="1.5"/><path d="M11 7v4l3 2" stroke="#3DFF87" stroke-width="1.5" stroke-linecap="round"/>') },
          { title: "Confidential by default", desc: "Sensitive replacements and senior hires handled discreetly — NDA on request, off-market approaches, and your brand kept out of the search until you choose.", icon: svgIco('<rect x="4" y="9" width="14" height="10" rx="2" stroke="#3DFF87" stroke-width="1.5"/><path d="M7 9V6.5a4 4 0 018 0V9" stroke="#3DFF87" stroke-width="1.5" stroke-linecap="round"/>') },
        ]}
      />

      <ModesSection
        eyebrowText="How direct hire works"
        heading={<>Three ways to run a<br />permanent <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>direct-hire search.</em></>}
        modes={[
          { num: "01", title: "Contingent direct hire", desc: "Our most common structure. We work your permanent role on a success basis — you pay only when a candidate signs and stays past the guarantee window.", bullets: ["48-hour median shortlist", "3–5 pre-screened candidates per role", "90-day replacement guarantee", "No upfront fee — pay on hire"] },
          { num: "02", title: "Exclusive direct hire", desc: "Give us the role exclusively and it moves to the top of the desk — deeper sourcing, faster turnaround and a partner who works it like a retained search, still on a contingent fee.", bullets: ["Priority sourcing & partner focus", "Full market map, not just active jobseekers", "90-day replacement guarantee", "Weekly written progress updates"], featured: true },
          { num: "03", title: "Retained direct hire", desc: "For business-critical, senior or confidential permanent roles where a wrong hire is expensive. A dedicated partner and researcher run the full search, off-market.", bullets: ["Dedicated partner + research analyst", "Confidential, off-market search", "12-month replacement guarantee", "Salary benchmarking included"] },
        ]}
      />

      <Proc2Section
        heading={<>A permanent search runs five stages.<br />None of them are <em>a portal.</em></>}
        lead="From signed brief to a placed hire in about thirty days — every stage owned by one partner."
        stages={[
          { day: "Day 0–2", title: "Calibrate", desc: "A 60-minute working session sets the scorecard and the off-limits list. You sign off before we source.", deliverValue: "Signed-off scorecard" },
          { day: "Day 2–10", title: "Map", desc: "A longlist of 40–80 names from referrals, competitor maps and our private network — bespoke outreach only.", deliverValue: "40–80 name longlist" },
          { day: "Day 10–18", title: "Screen", desc: "45-minute structured interviews against your scorecard. First calibrated profiles land by day 12.", deliverValue: "Calibrated profiles" },
          { day: "Day 18–28", title: "Panel", desc: "We run the loop end to end — scheduling, debriefs, references — with a written brief before each round.", deliverValue: "Debriefs & references" },
          { day: "Day 28+", title: "Placed & guaranteed", desc: "Offer, counter-offer defence and a signed start — backed by check-ins at 3, 6 and 12 months.", deliverValue: "Signed start · 12-mo guarantee", done: true },
        ]}
      />

      <GuaranteeSection
        heading={<>Four numbers we&apos;ll stand behind<br />on the <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>first call.</em></>}
        stats={[
          { val: "48", sup: "h", title: "Median time-to-shortlist", desc: "From signed JD to three to five calibrated finalists in your inbox." },
          { val: "94", sup: "%", title: "Offer-acceptance rate", desc: "Last 12 months, across all engagements and seniority bands." },
          { val: "90", sup: "days", title: "Replacement guarantee", desc: "If a permanent hire leaves inside 90 days we restart the search at no charge." },
          { val: "600", sup: "+", title: "Permanent placements", desc: "Senior hires made across four markets — each owned end to end by one named partner." },
        ]}
      />

      <IndustriesGrid2Section
        heading={<>Specialist partners,<br />aligned to <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>your sector.</em></>}
        sub="Every Rivago partner runs one practice. They've placed inside it for at least seven years. They know the comp bands, the org charts, and the people who haven't updated their LinkedIn in two years."
      />

      <TestiCreamSection
        heading={<>Permanent hires,<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>in their own words.</em></>}
        sub="Plain English from heads of talent, GCs, CFOs and founders who made permanent hires through Rivago in the last eighteen months. No pseudonyms. No doctored quotes."
        cards={[
          { tag: "US · Technology", quote: "We needed a permanent Head of Engineering and two staff engineers. Rivago had a shortlist in two days and all three signed inside the month — every one is still here a year later.", initials: "RP", name: "Ryan P.", role: "VP of Engineering · US Series-C SaaS" },
          { tag: "Canada · Finance", quote: "Our last agency just forwarded résumés. Rivago sent three fully-screened permanent candidates in 38 hours — comp, notice and right-to-work already checked. Two went to offer that week.", initials: "PR", name: "Priya R.", role: "HR Director · Ontario financial services" },
          { tag: "UAE · Healthcare", quote: "Permanent clinical leadership in the UAE is brutal — licensing, DHA registration, the lot. Rivago handled all of it without being told twice. Eleven permanent placements, zero compliance issues.", initials: "SM", name: "Samira M.", role: "Chief People Officer · Dubai hospital group" },
        ]}
      />

      <IntakeBandSection
        heading={<>Tell us the role.<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic" }}>We&apos;ll do the rest.</em></>}
        lead="Four minutes. A senior partner reads every brief within an hour and books a thirty-minute calibration call before any sourcing begins."
        bullets={[
          { strong: "No retainer required.", rest: "Contingent by default. Pay on placement, not on activity." },
          { strong: "One named partner", rest: "— from brief to placement. No junior handoffs, no account managers in between." },
          { strong: "NDA on request.", rest: "Confidential searches handled as standard — senior hires, sensitive replacements." },
          { strong: "90-day replacement guarantee.", rest: "No questions, no additional fee. We restart the search." },
        ]}
      />

      <FaqSection
        heading={<>Direct hire, <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>answered properly.</em></>}
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
        secondary={{ label: "Read case studies", href: `${routes.resources}?view=cs` }}
      />
    </>
  );
}
