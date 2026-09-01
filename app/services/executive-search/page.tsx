import Link from "next/link";
import type { ReactNode } from "react";
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
  title: "Executive Search — Confidential Retained Search | Rivago Infotech",
  description:
    "Confidential, retained search for VP- to C-suite roles. A dedicated partner and researcher map the market off-market, brief you in writing every week, and stand behind the result for twelve months.",
  alternates: { canonical: "https://rivagoinfotech.com/services/executive-search" },
  openGraph: {
    title: "Executive Search — Confidential Retained Search | Rivago Infotech",
    description: "Confidential, retained search for VP- to C-suite roles, with weekly written briefings and a 12-month replacement guarantee.",
    url: "https://rivagoinfotech.com/services/executive-search",
  },
};

const crumbs = [{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }, { label: "Executive Search" }];

const svgIco = (path: string) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" dangerouslySetInnerHTML={{ __html: path }} />
);

const MatrixCheck = () => (
  <span className="matrix-check"><svg width="9" height="7" viewBox="0 0 9 7" fill="none"><path d="M1 3.5l2 2 5-4.5" stroke="#0B1311" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
);
const MatrixCross = () => <span className="matrix-cross">—</span>;

const matrixCols = ["Single search", "Confidential replacement", "Leadership team build"];
const matrixRows: [string, (ReactNode | string)[]][] = [
  ["Best for", ["One critical C-suite seat", "Replacing a sitting exec quietly", "Two or more leaders in parallel"]],
  ["Dedicated partner + researcher", [<MatrixCheck key="a" />, <MatrixCheck key="b" />, <MatrixCheck key="c" />]],
  ["Fully off-market outreach", [<MatrixCheck key="a" />, <MatrixCheck key="b" />, <MatrixCheck key="c" />]],
  ["Confidential / no job posting", [<MatrixCross key="a" />, <MatrixCheck key="b" />, <MatrixCross key="c" />]],
  ["Sequenced multi-role plan", [<MatrixCross key="a" />, <MatrixCross key="b" />, <MatrixCheck key="c" />]],
  ["Weekly written briefings", [<MatrixCheck key="a" />, <MatrixCheck key="b" />, <MatrixCheck key="c" />]],
  ["12-month replacement guarantee", [<MatrixCheck key="a" />, <MatrixCheck key="b" />, <MatrixCheck key="c" />]],
  ["Fee structure", ["1/3 staged retainer", "1/3 staged retainer", "Scoped to the mandate"]],
];

export default function ExecutiveSearchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <header className="svh">
        <div className="svh-inner">
          <div className="svh-eyb gs"><span className="dot"></span>Executive Search · Retained</div>
          <h1 className="gs">Leadership hires,<br /><em>handled with discretion.</em></h1>
          <p className="gs">Confidential, retained search for VP- to C-suite roles. A dedicated partner and researcher map the market off-market, brief you in writing every week, and stand behind the result for twelve months.</p>
          <div className="svh-cta gs">
            <Link className="btn btn-prim" href="#intake">Begin your executive search <Arrow /></Link>
            <Link className="btn btn-ghost" href={`${routes.resources}?view=cs`}>See case studies</Link>
          </div>
        </div>
      </header>

      <SwhySection
        heading={<>Leadership searches run<br />by <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>the partner, not a team.</em></>}
        lead="Most firms staff your search with a partner's name and a junior's hours. We do the opposite — the partner who takes the brief does the sourcing, the calls and the reference checks, and reports to you in writing every week."
        numsr={[
          { v: "6–10", sup: "wk", title: "Typical search length", desc: "Brief to signed offer, full market mapped." },
          { v: "96", sup: "%", title: "Offer-accept rate", desc: "Executive searches, last 12 months." },
          { v: "12", sup: "mo", title: "Replacement guarantee", desc: "Leaves inside the window? We restart, free." },
          { v: "120", sup: "+", title: "Executive placements", desc: "VP to CEO, across four markets, to date." },
        ]}
        cards={[
          { title: "Confidential as standard", desc: "NDA on request, off-market approaches only, and your brand kept out of the search until you choose to reveal it — no leaks to the incumbent or the market.", icon: svgIco('<rect x="4" y="9" width="14" height="10" rx="2" stroke="#3DFF87" stroke-width="1.5"/><path d="M7 9V6.5a4 4 0 018 0V9" stroke="#3DFF87" stroke-width="1.5" stroke-linecap="round"/>') },
          { title: "One partner, full ownership", desc: "The partner who takes your brief runs every call and every reference — no handoffs to researchers, no relay through account managers.", icon: svgIco('<circle cx="11" cy="8" r="3.5" stroke="#3DFF87" stroke-width="1.5"/><path d="M4 19c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="#3DFF87" stroke-width="1.5" stroke-linecap="round"/>') },
          { title: "Full market mapping", desc: "Every credible leader in your space is mapped and approached directly — not just the ones who happen to be looking.", icon: svgIco('<path d="M11 2l2.2 4.4 4.8.7-3.5 3.4.8 4.8L11 13l-4.3 2.3.8-4.8L4 7.1l4.8-.7z" stroke="#3DFF87" stroke-width="1.5" stroke-linejoin="round"/>') },
          { title: "Weekly written briefings", desc: "A short, honest status update every week — who we've approached, who's interested, and where the search really stands.", icon: svgIco('<path d="M4 11h6l-2-2M4 11l4 2M18 11h-6l2-2M18 11l-4 2" stroke="#3DFF87" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>') },
        ]}
      />

      <ModesSection
        eyebrowText="How executive search works"
        heading={<>Three ways to run a<br />retained <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>leadership search.</em></>}
        modes={[
          { num: "01", title: "Single retained search", desc: "One critical leadership seat — CFO, CTO, GC or similar. A dedicated partner and researcher run a fully off-market search, staged in thirds.", bullets: ["Dedicated partner + research analyst", "Confidential, off-market approach", "12-month replacement guarantee", "Compensation benchmarking included"] },
          { num: "02", title: "Confidential replacement", desc: "Replacing a sitting executive before the market — or the incumbent — knows. No job posting, no database blast, direct outreach only, under NDA.", bullets: ["Fully off-market, NDA as standard", "Off-site shortlist review", "Sequenced to protect the transition", "12-month replacement guarantee"], featured: true },
          { num: "03", title: "Leadership team build", desc: "Two or more senior leaders hired in parallel — a founding exec team, a rebuilt C-suite, or a function stood up from zero. One partner sequences the whole programme.", bullets: ["One partner across every seat", "Calibrated against each other, not in isolation", "Staggered starts to protect continuity", "12-month replacement guarantee"] },
        ]}
      />

      {/* ENGAGEMENT MATRIX */}
      <section className="section cream">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-dark" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Which model fits</div>
            <h2 className="section-h2" style={{ color: "var(--dt)", maxWidth: 720 }}>Picking the right approach<br />for the <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>seat you&apos;re filling.</em></h2>
          </div>
          <div className="matrix gs">
            <div className="matrix-head">
              <div>Capability</div>
              {matrixCols.map((c, i) => <div className={i === 1 ? "featured" : undefined} key={c}>{c}</div>)}
            </div>
            {matrixRows.map(([label, cells]) => (
              <div className="matrix-row" key={label}>
                <div>{label}</div>
                {cells.map((cell, i) => <div className={i === 1 ? "featured" : undefined} key={i}>{cell}</div>)}
              </div>
            ))}
            <div className="matrix-foot">
              <div><Link className="btn btn-cream-ghost" href="#intake" style={{ background: "transparent", color: "var(--dt)", border: "1px solid rgba(11,19,17,.14)" }}>Start one search</Link></div>
              <div><Link className="btn matrix-btn-prim" href="#intake">Book a confidential call <Arrow /></Link></div>
              <div><Link className="btn btn-cream-ghost" href="#intake" style={{ background: "transparent", color: "var(--dt)", border: "1px solid rgba(11,19,17,.14)" }}>Plan a team build</Link></div>
            </div>
          </div>
        </div>
      </section>

      <Proc2Section
        heading={<>Five steps from mandate<br />to a signed <em>executive.</em></>}
        lead="From confidential mandate to a signed executive in six to ten weeks — every stage owned by one partner."
        stages={[
          { day: "Wk 1", title: "Reach Out", desc: "A confidential intake call defines the mandate, the org context and the off-limits list — we reach out to you within the hour.", deliverValue: "Signed-off mandate" },
          { day: "Wk 1–3", title: "Connect", desc: "Your partner connects directly with every credible leader in the space — under NDA where required, off-market from day one.", deliverValue: "Full market map" },
          { day: "Wk 3–5", title: "Review Candidates", desc: "You review a calibrated shortlist with full assessment notes, case discussions and references — never a raw stack of resumes.", deliverValue: "Calibrated shortlist" },
          { day: "Wk 5–7", title: "Interview & Offer", desc: "We run the interview loop end to end and manage offer strategy, compensation negotiation and counter-offer defence.", deliverValue: "Executive shortlist" },
          { day: "Wk 7+", title: "Hire & Onboard", desc: "Onboarding and a documented transition plan — backed by a 12-month replacement guarantee if it doesn't work out.", deliverValue: "A placed executive", done: true },
        ]}
      />

      <GuaranteeSection
        heading={<>Four numbers we&apos;ll stand behind<br />on the <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>first call.</em></>}
        stats={[
          { val: "6–10", sup: "wk", title: "Typical search length", desc: "Confidential mandate to a signed executive offer." },
          { val: "96", sup: "%", title: "Offer-acceptance rate", desc: "Executive searches, last 12 months." },
          { val: "12", sup: "mo", title: "Replacement guarantee", desc: "If a placed executive leaves inside 12 months we restart at no charge." },
          { val: "120", sup: "+", title: "Executive placements", desc: "VP to CEO, made across four markets — each owned end to end by one named partner." },
        ]}
      />

      <IndustriesGrid2Section
        heading={<>Executive search across<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>every sector we serve.</em></>}
        sub="Every retained mandate is run by a partner who has recruited senior leaders in that sector for at least seven years — they know the boardrooms, the succession gaps and the leaders who aren't looking."
      />

      <TestiCreamSection
        heading={<>Executive searches,<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>in their own words.</em></>}
        sub="Plain English from board members, CEOs and CHROs who ran a confidential leadership search through Rivago in the last eighteen months. No pseudonyms. No doctored quotes."
        cards={[
          { tag: "Canada · Finance", quote: "We needed to replace our CFO ahead of an earnings cycle without a single leak. Rivago ran it fully off-market — no posting, no database blast. The market found out on the day we announced it.", initials: "RP", name: "Ryan P.", role: "Board Member · TSX-listed fintech" },
          { tag: "US · Legal", quote: "We had no in-house legal function heading into a Series C. Rivago placed our General Counsel first, then let her build the rest of the team — that sequencing made all the difference.", initials: "PR", name: "Priya R.", role: "Chief Executive · US Series-C scale-up" },
          { tag: "US · Operations", quote: "We needed a turnaround operator immediately, not in two months. Rivago placed an interim COO from their bench in eleven days — margin was up 22% within two quarters.", initials: "SM", name: "Samira M.", role: "Board Chair · PE-owned business" },
        ]}
      />

      <IntakeBandSection
        heading={<>Tell us the mandate.<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic" }}>We&apos;ll do the rest.</em></>}
        lead="Four minutes, held in confidence. A senior partner reads every mandate within the hour and books a confidential scoping call before any outreach begins."
        bullets={[
          { strong: "NDA as standard.", rest: "Every mandate handled in confidence from the first call." },
          { strong: "One named partner", rest: "— from brief to placement. No junior handoffs, no relay through account managers." },
          { strong: "Weekly written briefings.", rest: "A short, honest status update — no surprises at week six." },
          { strong: "12-month replacement guarantee.", rest: "No questions, no additional fee. We restart the search." },
        ]}
      />

      <FaqSection
        heading={<>Executive search, <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>the questions that matter.</em></>}
        items={[
          { q: "How is the retainer structured, and what if the search fails?", a: "Typically three instalments: on engagement, on shortlist delivery, and on completion. If we do not deliver a shortlist meeting the agreed specification, the second instalment is not invoiced. Retained fees fund exhaustive market coverage and dedicated partner time — they are not a deposit against a placement." },
          { q: "Who actually does the work — the partner who pitched, or a researcher?", a: "The partner who scoped the mandate runs it end to end, supported by a named researcher you also meet. You are not handed to a delivery team after signature. That is the single most common failure mode in executive search, and we structure against it deliberately." },
          { q: "How do you protect confidentiality on a succession or replacement search?", a: "We approach the market under NDA, shield your identity until an agreed stage, and brief candidates strictly on a need-to-know basis. For replacement searches where the incumbent is unaware, all contact routes through a channel you nominate and nothing is documented in shared systems." },
          { q: "What are your off-limits commitments?", a: "We will not approach anyone we have placed with you, and we will not source from your organisation for the duration of the engagement plus an agreed period afterwards. Off-limits scope is written into the agreement so there is no ambiguity later." },
          { q: "What does a shortlist actually contain?", a: "Four to six candidates with written assessments against the agreed scorecard, documented track-record evidence, compensation expectations, motivation analysis and referencing status. Not a CV pack — an assessment you can take to a board." },
          { q: "What guarantee applies at executive level?", a: "Twelve months. If the appointed executive leaves within a year, we run a replacement search with no additional professional fee. We also run structured check-ins at 30, 90 and 180 days, because most executive failures are visible well before month twelve." },
        ]}
      />

      <CtaSection
        heading={<>Tell us who you need.<br /><em>We&apos;ll keep it confidential.</em></>}
        sub="A 30-minute scoping call with a partner — not a portal — and a written search plan in your inbox within one business day."
        primary={{ label: "Book a confidential call", href: "#intake" }}
        secondary={{ label: "Read case studies", href: `${routes.resources}?view=cs` }}
      />
    </>
  );
}
