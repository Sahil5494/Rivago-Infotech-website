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
  title: "Interim & Fractional Leadership — Ready on Day One | Rivago Infotech",
  description:
    "Vetted interim and fractional executives for a transition, a turnaround or a gap you can't leave open. Drawn from our bench and ready to start in as little as seven days.",
  alternates: { canonical: "https://rivagoinfotech.com/services/interim-leadership" },
  openGraph: {
    title: "Interim & Fractional Leadership — Ready on Day One | Rivago Infotech",
    description: "Vetted interim and fractional executives for a transition, a turnaround or a gap you can't leave open — ready to start in as little as seven days.",
    url: "https://rivagoinfotech.com/services/interim-leadership",
  },
};

const crumbs = [{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }, { label: "Interim & Fractional Leadership" }];

const svgIco = (path: string) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" dangerouslySetInnerHTML={{ __html: path }} />
);

export default function InterimLeadershipPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <header className="svh">
        <div className="svh-inner">
          <div className="svh-eyb gs"><span className="dot"></span>Interim &amp; Fractional Leadership</div>
          <h1 className="gs">A leader in the seat,<br /><em>on day one.</em></h1>
          <p className="gs">Vetted interim and fractional executives for a transition, a turnaround or a gap you can&apos;t leave open. Drawn from our bench and ready to start in as little as seven days — with a clean handover plan built in from the start.</p>
          <div className="svh-cta gs">
            <Link className="btn btn-prim" href="#intake">Request an interim leader <Arrow /></Link>
            <Link className="btn btn-ghost" href={`${routes.resources}?view=cs`}>See case studies</Link>
          </div>
        </div>
      </header>

      <SwhySection
        heading={<>A day-one operator,<br />not <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>a resume search.</em></>}
        lead="Most firms start looking once you call. We keep a standing bench of vetted interim executives ready now — so the gap between “we need someone” and “someone is running it” is measured in days, not months."
        numsr={[
          { v: "7", sup: "d", title: "To a leader in seat", desc: "From confirmed brief to a start date." },
          { v: "92", sup: "%", title: "Assignment success rate", desc: "Completed to plan, last 12 months." },
          { v: "1", sup: "wk", title: "Swap window", desc: "Not the right fit? We replace within a week." },
          { v: "80", sup: "+", title: "Interim placements", desc: "Across four markets, to date." },
        ]}
        cards={[
          { title: "A standing, vetted bench", desc: "Interim executives pre-screened and reference-checked before you ever need them — so day one starts with someone already proven, not someone we just met.", icon: svgIco('<circle cx="11" cy="11" r="8" stroke="#3DFF87" stroke-width="1.5"/><path d="M11 7v4l3 2" stroke="#3DFF87" stroke-width="1.5" stroke-linecap="round"/>') },
          { title: "Operators, not consultants", desc: "Every interim leader has run the function before, under pressure — they act on day one instead of spending the first month learning the org chart.", icon: svgIco('<path d="M11 2l2.2 4.4 4.8.7-3.5 3.4.8 4.8L11 13l-4.3 2.3.8-4.8L4 7.1l4.8-.7z" stroke="#3DFF87" stroke-width="1.5" stroke-linejoin="round"/>') },
          { title: "A built-in handover plan", desc: "Every engagement includes a transition plan from day one — to a permanent hire, back to the incumbent, or to whoever comes next.", icon: svgIco('<path d="M4 11h6l-2-2M4 11l4 2M18 11h-6l2-2M18 11l-4 2" stroke="#3DFF87" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>') },
          { title: "Confidential by default", desc: "Board-level transitions and sensitive gaps handled discreetly — NDA on request, and no signal to the market until you're ready.", icon: svgIco('<rect x="4" y="9" width="14" height="10" rx="2" stroke="#3DFF87" stroke-width="1.5"/><path d="M7 9V6.5a4 4 0 018 0V9" stroke="#3DFF87" stroke-width="1.5" stroke-linecap="round"/>') },
        ]}
      />

      <ModesSection
        eyebrowText="How interim leadership works"
        heading={<>Three ways to bring in<br />an <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>interim leader.</em></>}
        modes={[
          { num: "01", title: "Transition cover", desc: "A leader departs and the seat can't sit empty. An interim executive steps in within days to keep the function running while you run a permanent search.", bullets: ["Start date within 7 days", "Runs the function, not just holds it", "Handover plan to the permanent hire", "Billed on a day rate, month to month"] },
          { num: "02", title: "Turnaround leadership", desc: "A business in distress needs a proven operator immediately — not after a three-month search. Drawn from our bench, with a track record of stabilising exactly this kind of situation.", bullets: ["Deployed in as little as 7 days", "Defined statement of work & milestones", "Reports directly to the board", "Clean exit plan built in from day one"], featured: true },
          { num: "03", title: "Fractional leadership", desc: "Senior expertise without a full-time cost — a fractional CFO, CTO or CMO for a few days a week, for as long as the business needs the seat covered.", bullets: ["2–3 days a week, ongoing", "Full executive scope at fractional cost", "Month-to-month, cancel anytime", "Convert to full-time when you're ready"] },
        ]}
      />

      <Proc2Section
        heading={<>Interim placement runs five stages.<br />None of them are <em>a portal.</em></>}
        lead="From your call to a leader in seat in as little as seven days — every stage owned by one partner."
        stages={[
          { day: "Day 0–1", title: "Brief", desc: "A call defines the gap, the mandate and how success is measured — often the same day you call.", deliverValue: "Confirmed mandate" },
          { day: "Day 1–3", title: "Match", desc: "We pull from our vetted interim bench for operators who have run this exact situation before.", deliverValue: "Matched candidates" },
          { day: "Day 3–5", title: "Confirm", desc: "Reference checks and a final call confirm fit and availability — no lengthy process, no delay.", deliverValue: "Confirmed leader" },
          { day: "Day 5–7", title: "Deploy", desc: "Your interim executive starts, briefed on the org, the stakeholders and the first-30-day plan.", deliverValue: "A leader in seat" },
          { day: "Ongoing", title: "Handover", desc: "Regular check-ins and a documented transition plan to a permanent hire or a clean exit.", deliverValue: "A clean handover", done: true },
        ]}
      />

      <GuaranteeSection
        heading={<>Four numbers we&apos;ll stand behind<br />on the <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>first call.</em></>}
        stats={[
          { val: "7", sup: "d", title: "Time to deployment", desc: "From confirmed brief to a leader starting in the seat." },
          { val: "92", sup: "%", title: "Assignment success rate", desc: "Completed to plan, last 12 months." },
          { val: "1", sup: "wk", title: "Swap window", desc: "Not the right fit? We replace the leader within a week, no charge." },
          { val: "80", sup: "+", title: "Interim placements", desc: "Transitions and turnarounds led across four markets, to date." },
        ]}
      />

      <IndustriesGrid2Section
        heading={<>Interim leaders across<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>every sector we serve.</em></>}
        sub="Our interim bench is built from operators who have actually run these functions under pressure — not consultants between engagements. Sector fit is matched from day one."
      />

      <TestiCreamSection
        heading={<>Interim leaders,<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>in their own words.</em></>}
        sub="Plain English from board chairs, CEOs and CHROs who brought in a Rivago interim executive in the last eighteen months. No pseudonyms. No doctored quotes."
        cards={[
          { tag: "US · Operations", quote: "A PE-owned business in distress needed an operator immediately — not in two months. Rivago placed a turnaround COO from their bench who started in eleven days. Margin was up 22% within two quarters.", initials: "RP", name: "Ryan P.", role: "Board Chair · PE-owned business" },
          { tag: "Canada · Finance", quote: "Our CFO left with two weeks' notice ahead of an audit. Rivago had an interim CFO in the seat within a week — she ran the audit clean and handed over to our permanent hire without a hitch.", initials: "PR", name: "Priya R.", role: "CEO · Ontario financial services" },
          { tag: "UAE · Retail", quote: "We needed a fractional CMO two days a week while we searched for a full-time hire. Rivago's fractional exec ran our launch campaign in the meantime — we ended up keeping her on permanently.", initials: "SM", name: "Samira M.", role: "CEO · Dubai retail group" },
        ]}
      />

      <IntakeBandSection
        heading={<>Tell us the gap.<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic" }}>We&apos;ll do the rest.</em></>}
        lead="Three minutes. A senior partner reads every request within the hour and confirms bench availability before your first call."
        bullets={[
          { strong: "Deployed in as little as 7 days.", rest: "Drawn from a standing, pre-vetted bench." },
          { strong: "One named partner", rest: "— from brief to handover. No junior handoffs in between." },
          { strong: "NDA on request.", rest: "Board-level transitions handled discreetly, as standard." },
          { strong: "1-week swap window.", rest: "Not the right fit? We replace the leader fast, no charge." },
        ]}
      />

      <FaqSection
        heading={<>Interim leadership, <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>straight answers.</em></>}
        items={[
          { q: "Interim or fractional — which do we actually need?", a: "Interim if the gap is full-time and time-boxed: a sudden departure, a turnaround, a transformation programme. Fractional if you need senior judgement but not a full-time seat — typically one to three days a week for a smaller organisation that cannot justify a full salary. Your partner will tell you which, including when the answer is neither." },
          { q: "How is a day rate built, and what is the all-in cost?", a: "The day rate covers the executive fee plus Rivago margin, invoiced against days actually worked. There is no placement fee, no notice liability, no benefits burden and no severance exposure. For a defined engagement the total cost is knowable in advance, which is rarely true of a permanent hire." },
          { q: "How quickly can someone genuinely start?", a: "Seven to fourteen days. Interim executives are between assignments by design rather than resigning from a permanent post, so there is no three-month notice period to work through. That is the main practical reason organisations use interim cover for urgent gaps." },
          { q: "What if the interim executive is not right?", a: "Tell us in the first two weeks and we replace them at no cost. Interim assignments also carry short notice on both sides by design, so a mismatch is a two-week problem rather than a six-month one." },
          { q: "Can the interim convert to the permanent role?", a: "Yes, and there is no conversion penalty if it is agreed at the outset of the assignment. It happens reasonably often — the organisation has effectively run a months-long working interview, which is better evidence than any hiring process produces." },
          { q: "Will an interim leader actually make decisions, or just advise?", a: "They hold the role and make the decisions, including difficult ones. That is the distinction from consulting: an interim executive carries line responsibility, manages the team and owns the outcome. If you want analysis and recommendations rather than execution, you want a consultant, and we will say so." },
        ]}
      />

      <CtaSection
        heading={<>Tell us the gap.<br /><em>We&apos;ll close it fast.</em></>}
        sub="A 30-minute scoping call with a partner — not a portal — and a bench-availability update in your inbox within one business day."
        primary={{ label: "Book a scoping call", href: "#intake" }}
        secondary={{ label: "Read case studies", href: `${routes.resources}?view=cs` }}
      />
    </>
  );
}
