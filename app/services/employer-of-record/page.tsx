import Link from "next/link";
import type { Metadata } from "next";
import { routes } from "@/lib/routes";
import {
  Arrow,
  SmallArrow,
  breadcrumbJsonLd,
  SwhySection,
  ModesSection,
  Proc2Section,
  IndustriesGrid2Section,
  TestiCreamSection,
  FaqSection,
  CtaSection,
} from "../_components/shared";

export const metadata: Metadata = {
  title: "Employer of Record — Hire Anywhere, Compliantly | Rivago Infotech",
  description:
    "Hire anywhere without opening a local entity. Rivago becomes the legal employer — payroll, tax, benefits and contracts handled in-country — so you can onboard the person you found, wherever they are.",
  alternates: { canonical: "https://rivagoinfotech.com/services/employer-of-record" },
  openGraph: {
    title: "Employer of Record — Hire Anywhere, Compliantly | Rivago Infotech",
    description: "Hire anywhere without opening a local entity. Rivago becomes the legal employer — payroll, tax, benefits and contracts handled in-country.",
    url: "https://rivagoinfotech.com/services/employer-of-record",
  },
};

const crumbs = [{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }, { label: "Employer of Record" }];

const svgIco = (path: string) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" dangerouslySetInnerHTML={{ __html: path }} />
);

const ptxItems = [
  { strong: "Engage without adding headcount.", rest: "Bring on contingent talent and keep them off your direct payroll." },
  { strong: "Re-hire people you trust.", rest: "Bring back talent you've worked with before, with no impact on your headcount." },
  { strong: "Take the contractor risk off the table.", rest: "Cover short-term needs without the misclassification exposure." },
  { strong: "Ramp teams up and down.", rest: "Onboard and offboard whole groups quickly, exactly when the work demands it." },
];

const perspectives = [
  { gradient: "linear-gradient(135deg,#0F2A1B,#0A7040)", cat: "Global hiring", title: "EOR vs. setting up an entity: when each makes sense", desc: "A clear-eyed look at cost, speed and control — and the point where opening your own entity finally pays off.", meta: "7 min read" },
  { gradient: "linear-gradient(135deg,#12332A,#00A882)", cat: "Compliance", title: "Contractor or employee? Getting classification right", desc: "The tests that decide it, the risk of getting it wrong, and how to fix a misclassified relationship cleanly.", meta: "6 min read" },
  { gradient: "linear-gradient(135deg,#0B1F14,#3DFF87)", cat: "Playbook", title: "Testing a new market with your first two hires", desc: "How to prove demand in a country before you commit to incorporation, payroll and a lease.", meta: "8 min read" },
];

export default function EmployerOfRecordPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <header className="svh">
        <div className="svh-inner">
          <div className="svh-eyb gs"><span className="dot"></span>Employer of Record</div>
          <h1 className="gs">You&apos;ve got the talent?<br /><em>We&apos;ll make the hire.</em></h1>
          <p className="gs">Hire anywhere without opening a local entity. We become the legal employer — payroll, tax, benefits and contracts handled in-country — so you can onboard the person you found, wherever they are.</p>
          <div className="svh-cta gs">
            <Link className="btn btn-prim" href="#intake">Make the hire <Arrow /></Link>
            <Link className="btn btn-ghost" href={`${routes.resources}?view=cs`}>See case studies</Link>
          </div>
        </div>
      </header>

      <SwhySection
        heading={<>You found them.<br />We make it <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>legal.</em></>}
        lead="Most EOR providers are a payroll platform with a support ticket. We do the opposite — a named partner who knows the local rules, sets up the contract correctly the first time, and stays reachable for the life of the engagement."
        cards={[
          { title: "Less risk on you", desc: "Talent are our W-2 employees, so worker misclassification stops being your problem. We keep them engaged and well looked-after too — which is what actually keeps co-employment risk down.", icon: svgIco('<path d="M11 2l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V5z" stroke="#3DFF87" stroke-width="1.5" stroke-linejoin="round"/><path d="M8 11l2 2 4-4" stroke="#3DFF87" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>') },
          { title: "Benefits that hold up", desc: "Everyone qualifies — even part-time or short assignments. Subsidised medical, dental and vision; paid sick leave for hourly talent in the US and Canada; a matched retirement plan; flexible spending accounts and more.", icon: svgIco('<rect x="3" y="4" width="16" height="14" rx="2" stroke="#3DFF87" stroke-width="1.5"/><path d="M11 8v6M8 11h6" stroke="#3DFF87" stroke-width="1.5" stroke-linecap="round"/>') },
          { title: "Genuinely good care", desc: "Regular check-ins, career coaching and real human support — not a help desk. It is why our talent-satisfaction scores stay well above the industry, year after year.", icon: svgIco('<path d="M11 19s-7-4.2-7-9a4 4 0 017-2.6A4 4 0 0118 10c0 4.8-7 9-7 9z" stroke="#3DFF87" stroke-width="1.5" stroke-linejoin="round"/>') },
          { title: "Compliant in every market", desc: "US, Canada, the UAE or India — payroll, tax and statutory rules handled locally by a partner who knows them, so every hire is right the first time.", icon: svgIco('<circle cx="11" cy="11" r="8" stroke="#3DFF87" stroke-width="1.5"/><path d="M3 11h16M11 3a14 14 0 010 16M11 3a14 14 0 000 16" stroke="#3DFF87" stroke-width="1.5"/>') },
        ]}
      />

      <ModesSection
        eyebrowText="Ways to engage"
        heading={<>Three ways to put someone<br />on our <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>payroll.</em></>}
        modes={[
          { num: "01", title: "Single hire, new market", desc: "You've found one person in a country where you don't have an entity. We draft a compliant local contract and become the legal employer so they can start on schedule.", bullets: ["Contract ready in 3–5 business days", "Local payroll, tax and statutory benefits", "No entity registration required", "Month-to-month, cancel anytime"] },
          { num: "02", title: "Team of record", desc: "Several hires in the same new market — a small team or an early market test. One EOR contract covers the group, with consistent terms and one consolidated invoice.", bullets: ["Consistent contracts across the team", "Single invoice, single point of contact", "Scale headcount up or down freely", "Local benefits benchmarked to market"], featured: true },
          { num: "03", title: "Contractor-to-EOR conversion", desc: "Working with someone as a contractor but the local rules say they should be an employee? We convert the relationship to a compliant employment contract without disrupting their day-to-day.", bullets: ["Misclassification risk removed", "Seamless transition, no gap in pay", "Backdated compliance review included", "Same person, same role, correct contract"] },
        ]}
      />

      {/* PAYROLL TRANSFER */}
      <section className="section cream">
        <div className="wrap">
          <div className="ptx gs">
            <div>
              <div className="eyebrow ew-dark" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Payroll transfer</div>
              <h2 className="section-h2" style={{ color: "var(--dt)", maxWidth: 560 }}>You&apos;ve got the talent?<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>We&apos;ll make the hire.</em></h2>
              <p style={{ color: "var(--dt2)", fontSize: 16, lineHeight: 1.78, fontWeight: 300, maxWidth: 520, marginTop: 22 }}>Our payroll-transfer model puts the people you already work with onto our books — the flexibility you need, the experience they deserve. Everyone wins.</p>
            </div>
            <ul className="ptx-list">
              {ptxItems.map((it) => (
                <li key={it.strong}>
                  <svg width="15" height="12" viewBox="0 0 15 12" fill="none"><path d="M1 6l4.5 4.5L14 1" stroke="#0A7040" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <div><strong>{it.strong}</strong> {it.rest}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Proc2Section
        eyebrowText="How Employer of Record works"
        heading={<>Five steps from your pick<br />to a working <em>hire.</em></>}
        lead="You choose the talent. We handle the employment, the onboarding and the scale — most hires are working within three days."
        footText="One partner runs all of them."
        stages={[
          { day: "Step one", title: "Bring us the talent", desc: "However you sourced them — a candidate you found, a referral, an alumnus, a returning contractor or an intern — you decide who joins.", deliverValue: "Your chosen hire" },
          { day: "Step two", title: "We become the employer", desc: "We take on the employment relationship as employer of record. Your hire gets a proper local contract, strong benefits and real support — you carry none of the admin.", deliverValue: "A supported employee" },
          { day: "Step three", title: "Fast, guided onboarding", desc: "Our onboarding specialists handle the paperwork, compliance checks and first-day setup — most hires are ready to work within three days.", deliverValue: "A ready-to-start hire" },
          { day: "Step four", title: "We run payroll & compliance", desc: "Every pay run, tax filing, benefit and statutory change is handled in-country, month after month — so nothing slips and no deadline is missed.", deliverValue: "Ongoing compliance" },
          { day: "Step five", title: "Scale with confidence", desc: "Add more people whenever you need to — a consistent experience for every hire, co-employment risk managed, and better economics as the program grows.", deliverValue: "A program that scales", done: true },
        ]}
      />

      <IndustriesGrid2Section
        heading={<>Employer of Record across<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>every sector we serve.</em></>}
        sub="Whatever role you've already filled, we handle the employment — the same partner-led approach across every industry we recruit in, applied to the hire you found yourself."
      />

      <TestiCreamSection
        heading={<>Compliant hires,<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>in their own words.</em></>}
        sub="Plain English from founders and ops leads who hired across borders through Rivago's Employer of Record in the last eighteen months. No pseudonyms. No doctored quotes."
        cards={[
          { tag: "Canada · Technology", quote: "We found a brilliant engineer in Ontario but had no Canadian entity. Rivago had a compliant contract signed in four days — we never had to think about incorporation.", initials: "RP", name: "Ryan P.", role: "Founder · US SaaS startup" },
          { tag: "UAE · Operations", quote: "We had contractors in Dubai who really should have been employees. Rivago converted the whole group to compliant contracts without a single day of disrupted pay.", initials: "PR", name: "Priya R.", role: "Operations Lead · Ontario-based agency" },
          { tag: "US · Retail", quote: "We wanted to test a new market with two hires before committing to an entity. Rivago made it possible in a week — we now know it was the right call before spending a cent on incorporation.", initials: "SM", name: "Samira M.", role: "CEO · US retail brand" },
        ]}
      />

      {/* PERSPECTIVES (doubles as the #intake anchor — EOR has no dedicated intake form) */}
      <section className="section alt" id="intake">
        <div className="wrap">
          <div className="gs" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 30, flexWrap: "wrap" }}>
            <div>
              <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Perspectives</div>
              <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 640 }}>Hiring across borders,<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>made clearer.</em></h2>
            </div>
            <Link href={routes.resources} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--green)", fontSize: 14, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}>Read the blog <SmallArrow /></Link>
          </div>
          <div className="ins-grid">
            {perspectives.map((p) => (
              <Link className="ins-card gs" href={routes.resources} key={p.title}>
                <div className="ins-img" style={{ background: p.gradient }}><span className="ins-cat">{p.cat}</span></div>
                <div className="ins-body"><h3>{p.title}</h3><p>{p.desc}</p><div className="ins-meta">{p.meta}</div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        heading={<>Employer of Record, <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>the detail that matters.</em></>}
        items={[
          { q: "What is an EOR, in one paragraph?", a: "An Employer of Record legally employs someone on your behalf in a country where you have no entity. Rivago holds the employment contract, runs payroll and tax, provides statutory benefits and carries compliance liability, while you direct the person's day-to-day work. You get a compliant employee without incorporating." },
          { q: "When is an EOR the wrong choice?", a: "When you are hiring at scale and permanently in one country — beyond roughly fifteen to twenty people, establishing an entity is usually cheaper. Also when local law restricts EOR arrangements or caps their duration. We will tell you when incorporation is the better answer rather than sell you a service you will outgrow." },
          { q: "How is EOR priced, and what is passed through?", a: "A fixed monthly fee per employed person, quoted before engagement. Statutory employer costs — income tax, social contributions, mandatory insurance and benefits — are passed through at cost and itemised. Nothing is bundled into an opaque percentage." },
          { q: "Who owns the intellectual property the employee creates?", a: "You do. IP assignment flows to your entity through the employment contract and the service agreement, drafted to be enforceable in the employment jurisdiction. This is a genuine failure point with cheaper EOR providers, and worth checking in any contract you sign." },
          { q: "Can you handle visa sponsorship and work authorisation?", a: "In markets where our entity can sponsor, yes — including the UAE and India. Sponsorship capability, timelines and cost vary by country and visa category, and we confirm feasibility in writing before you commit to a candidate." },
          { q: "What happens when we need to end the employment?", a: "We run a lawful termination process in the employment jurisdiction: notice, consultation where required, final pay, accrued leave and statutory severance. Notice periods and severance liabilities are set by local law, and we tell you the exposure before you hire, not after." },
        ]}
      />

      <CtaSection
        heading={<>Tell us who you found.<br /><em>We&apos;ll make it legal.</em></>}
        sub="A 30-minute scoping call with a partner — not a portal — and a compliance summary for your market in your inbox within one business day."
        primary={{ label: "Book a scoping call", href: "#intake" }}
        secondary={{ label: "Read case studies", href: `${routes.resources}?view=cs` }}
      />
    </>
  );
}
