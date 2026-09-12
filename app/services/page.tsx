import Link from "next/link";
import type { Metadata } from "next";
import LogoMarquee from "@/components/LogoMarquee";
import ServicesRolesTabs from "./ServicesRolesTabs";
import { routes, servicesList } from "@/lib/routes";
import {
  Arrow,
  Crumbs,
  Eyebrow,
  breadcrumbJsonLd,
  ProcessSection,
  IndustriesSection,
  StorySection,
  InsightsSection,
  FaqSection,
  CtaSection,
  IconPartner,
  IconBadge,
  IconClock,
  IconShieldCheck,
  IconBuilding,
} from "./_components/shared";

export const metadata: Metadata = {
  title: "Staffing Solutions — Rivago Infotech",
  description:
    "Eight ways to put a Rivago partner on your search — direct hire, contract, temporary staffing, RPO, executive search, interim leadership and Employer of Record. 48-hour shortlist, one partner, no portal.",
  alternates: { canonical: "https://rivagoinfotech.com/services" },
  openGraph: {
    title: "Staffing Solutions — Rivago Infotech",
    description:
      "Eight ways to put a Rivago partner on your search — direct hire, contract, temporary staffing, RPO, executive search, interim leadership and Employer of Record.",
    url: "https://rivagoinfotech.com/services",
  },
};

const crumbs = [{ label: "Home", href: routes.home }, { label: "Services" }];

const engagementModels = [
  {
    num: "01",
    title: "Contingent",
    desc: "The default for most roles — Manager to Senior individual contributor. No retainer, no upfront fee. You pay when a hire sticks past the guarantee window, not on activity.",
    bullets: ["No upfront fee", "48-hour median shortlist", "90-day replacement guarantee", "Best for Manager–Senior IC roles"],
    tag: null,
  },
  {
    num: "02",
    title: "Retained",
    desc: "For Director and VP roles where fit matters more than speed. A dedicated partner and research analyst embed for the full cycle — brief, mapping, longlist, shortlist, offer.",
    bullets: ["Dedicated partner + research analyst", "Weekly written progress reports", "12-month replacement guarantee", "Salary benchmarking included"],
    tag: "Most popular",
  },
  {
    num: "03",
    title: "Embedded",
    desc: "For teams scaling 10+ hires across a quarter. A Rivago partner sits inside your TA function, runs your pipeline end to end, and owns the outcome as if they were on staff.",
    bullets: ["4–12 week sprints, renewable", "Full ATS + scorecard integration", "Fixed monthly retainer", "Weekly hiring-manager standups"],
    tag: null,
  },
];

const processStages = [
  {
    step: "Stage 01 · Day 0–2",
    title: "Calibrate",
    desc: "A working session with the hiring manager and the partner who will run the search. We pressure-test the JD, agree the scorecard, and set the off-limits list before a single profile is sourced.",
    side: [["Owner", "Lead partner"], ["Output", "Signed JD + scorecard"], ["Time", "~60 min"]] as [string, string][],
  },
  {
    step: "Stage 02 · Day 2–10",
    title: "Map",
    desc: "Research builds a longlist of 40–80 names from competitor rosters, alumni networks and the Rivago private database. Outreach is bespoke per candidate — no copy-paste sequences.",
    side: [["Longlist size", "40–80"], ["Reply rate", "38% avg"], ["Source mix", "Passive 80%"]] as [string, string][],
  },
  {
    step: "Stage 03 · Day 10–18",
    title: "Screen",
    desc: "Structured interviews with every respondent, against the same scorecard your panel will use. First calibration profiles land by day 12; the shortlist hardens by day 18.",
    side: [["Screens conducted", "18–24"], ["Submitted profiles", "5–7"], ["Reference depth", "3 per finalist"]] as [string, string][],
  },
  {
    step: "Stage 04 · Day 18–28",
    title: "Panel",
    desc: "We project-manage the interview loop — scheduling, debriefs, calibration between rounds. A written brief lands 24 hours before each interview, a synthesis the morning after.",
    side: [["Loops scheduled", "3–5 finalists"], ["Debrief turn", "<24h"], ["Drop-off rate", "<6%"]] as [string, string][],
  },
  {
    step: "Stage 05 · Day 28–35 +",
    title: "Close",
    desc: "We negotiate the offer, handle counter-offer defence, and stay close through the guarantee window. If anything breaks, we restart the search — no charge, no re-negotiation.",
    side: [["Counter rate", "11%"], ["90-day stick", "97%"], ["12-mo retention", "93%"]] as [string, string][],
  },
];

const whyCream = [
  { title: "One named partner", desc: "The same senior partner from brief to signed offer. No handoffs to BD, no relays through account managers, no junior researchers running the candidate calls.", icon: <IconPartner /> },
  { title: "Industry specialists", desc: "Your brief goes to a partner who has recruited in your sector for years — not a generalist working a shared queue. They know the comp bands and the people who aren't on LinkedIn.", icon: <IconBadge /> },
  { title: "Fast without cutting corners", desc: "A 48-hour median shortlist, every time. Every candidate is fully screened against your scorecard before reaching your inbox — never keyword-matched, never machine-parsed.", icon: <IconClock /> },
  { title: "Confidential by default", desc: "NDA on request, senior and sensitive searches handled as standard. Nothing about your search reaches anyone who doesn't need to know — not even internally.", icon: <IconShieldCheck /> },
];

const deliveryHubs = [
  { city: "Pune", country: "Maharashtra, India", role: "HQ", desc: "Registered headquarters and central research, sourcing and delivery hub for every market we serve." },
  { city: "Delaware", country: "Wilmington, USA", role: "Global HQ & NA delivery", desc: "Global operating headquarters. US delivery, compliance and the account teams for our North American clients." },
  { city: "Ontario", country: "Ayr, Canada", role: "Canadian coverage", desc: "Dedicated Canadian market coverage — cross-border placements, CAD comp benchmarking and local compliance." },
];

const articles = [
  { title: "How to write a brief that gets a 48-hour shortlist", dek: "The five inputs every search needs before we source a single candidate." },
  { title: "Contingent vs. retained: which model actually fits your role", dek: "A practical breakdown of when each engagement pays for itself — and when it doesn't." },
  { title: "What a replacement guarantee should — and shouldn't — cover", dek: "The fine print most staffing firms hope you won't ask about." },
];

const faqItems = [
  {
    q: "Which engagement model fits my hiring need?",
    a: "Contingent suits Manager to Senior individual-contributor roles where speed matters and you'd rather not commit to a retainer. Retained fits Director and VP searches where fit outweighs speed. Embedded is for teams hiring 10+ roles in a quarter who want a partner running the whole pipeline. Tell us the role and volume on the strategy call and we'll recommend one — no pressure toward the more expensive option.",
  },
  {
    q: "How is pricing structured across services?",
    a: "Direct hire, contract and temporary staffing are contingent — a placement fee, paid on start date, no retainer. Retained executive search carries a staged retainer against the search. RPO and Employer of Record are priced against scope and volume, agreed before anything starts. Every engagement gets a written fee schedule before you sign anything.",
  },
  {
    q: "What's a realistic timeline for filling a role?",
    a: "Our median time to first shortlist is 48 hours from a signed brief. Contract talent typically starts within 5–7 days, temporary cover in 24–72 hours. Executive search and RPO programs run on a longer, staged timeline — we'll give you a specific day-by-day plan on the intake call, not a vague estimate.",
  },
  {
    q: "What guarantees do you offer?",
    a: "Contingent and temporary placements carry a 90-day replacement guarantee. Retained executive search carries 12 months. Employer of Record engagements are covered by our compliance guarantee across every market we operate in. If a placement doesn't work out inside the window, we restart the search at no additional fee.",
  },
  {
    q: "Is my search kept confidential?",
    a: "Yes, as standard — not as an add-on. NDAs are available on request, and senior or sensitive replacement searches are run under strict confidentiality by default. Your brief goes to one named partner; it is never posted, never shared with a wider team, and never visible on a portal.",
  },
  {
    q: "Which industries do you cover?",
    a: "Technology, Finance & Banking, Healthcare, Legal, Sales & Marketing, Operations, Human Resources and Engineering — across the United States, Canada, the UAE and India. Every brief goes to a partner who specialises in that sector, not a generalist working every industry at once.",
  },
];

export default function ServicesHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      {/* HERO */}
      <header className="page-hero">
        <div className="page-hero-inner wide">
          <Crumbs items={crumbs} />
          <Eyebrow style={{ margin: "0 auto 28px" }}>Staffing Solutions · How Rivago engages</Eyebrow>
          <h1 className="gs">Eight ways to put a<br /><em>partner</em> on your search.</h1>
          <p className="lead gs">Permanent, contract, temporary or embedded — one senior partner owns every engagement end to end. No call centres. No automated outreach. No portal.</p>
          <div className="gs" style={{ marginTop: 32, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn btn-prim" data-hire>Book a strategy call <Arrow /></button>
            <Link className="btn btn-ghost" href={`${routes.resources}?view=cs`}>See case studies</Link>
          </div>
          <div className="page-hero-meta gs">
            <div className="page-hero-meta-row"><span>Median time-to-shortlist</span><strong>48 hours</strong></div>
            <div className="page-hero-meta-row"><span>Offer-acceptance rate</span><strong>94%</strong></div>
            <div className="page-hero-meta-row"><span>Placements delivered</span><strong>500+</strong></div>
            <div className="page-hero-meta-row"><span>Client retention</span><strong>87%</strong></div>
          </div>
        </div>
      </header>

      {/* CLIENTS */}
      <section className="clients-sec">
        <div className="clients-label">Teams we&apos;ve built for</div>
        <LogoMarquee />
      </section>

      {/* ENGAGEMENT MODELS (cream) */}
      <section className="section cream">
        <div className="wrap">
          <div className="gs">
            <Eyebrow dark>How we engage</Eyebrow>
            <h2 className="section-h2" style={{ color: "var(--dt)", maxWidth: 700 }}>Three structures.<br />One <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>standard of ownership.</em></h2>
          </div>
          <div className="modes" style={{ marginTop: 48 }}>
            {engagementModels.map((m) => (
              <div
                className="gs"
                key={m.num}
                style={{
                  padding: 32,
                  minHeight: 380,
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                  position: "relative",
                  borderRadius: 18,
                  background: m.tag ? "rgba(10,112,64,.05)" : "#fff",
                  border: m.tag ? "1px solid rgba(10,112,64,.22)" : "1px solid rgba(0,0,0,.07)",
                  boxShadow: m.tag ? "none" : "0 4px 16px rgba(11,19,17,.03)",
                }}
              >
                {m.tag && (
                  <span style={{ position: "absolute", top: 20, right: 20, padding: "3px 10px", borderRadius: 9999, background: "#0A7040", color: "#fff", fontSize: 10, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase" }}>{m.tag}</span>
                )}
                <div style={{ fontFamily: "var(--fs)", fontStyle: "italic", fontSize: 42, color: "#0A7040", lineHeight: 1, letterSpacing: "-.03em" }}>{m.num}</div>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-.02em", lineHeight: 1.2, color: "var(--dt)" }}>{m.title}</div>
                  <div style={{ fontSize: 14, color: "var(--dt2)", lineHeight: 1.7, fontWeight: 300, marginTop: 10 }}>{m.desc}</div>
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginTop: "auto", paddingTop: 18, borderTop: "1px solid rgba(0,0,0,.08)" }}>
                  {m.bullets.map((b) => (
                    <li key={b} style={{ fontSize: 13, color: "var(--dt2)", display: "flex", alignItems: "flex-start", gap: 9 }}>
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#0A7040", marginTop: 8, flexShrink: 0 }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROLES WE FILL */}
      <section className="section">
        <div className="wrap">
          <div className="gs">
            <Eyebrow>Roles we fill</Eyebrow>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 700 }}>Representative roles,<br />by <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>domain.</em></h2>
            <p style={{ color: "var(--text2)", maxWidth: 560, marginTop: 18, fontSize: 16, fontWeight: 300, lineHeight: 1.7 }}>A sample of what we place every month, with typical US market salary bands. Not exhaustive — if it isn&apos;t listed, ask your partner.</p>
          </div>
          <div style={{ marginTop: 44 }}>
            <ServicesRolesTabs />
          </div>
        </div>
      </section>

      {/* FULL MENU */}
      <section className="svc-sec">
        <div className="svc-inner">
          <div className="gs" style={{ marginBottom: 52 }}>
            <Eyebrow>The full menu</Eyebrow>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 640 }}>Every way to <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>engage us.</em></h2>
          </div>
          <div className="svc-grid gs">
            {servicesList.map((s) => (
              <Link className="svc-card" href={s.href} key={s.n}>
                {"tag" in s && s.tag && <span className="svc-tag">{s.tag}</span>}
                <div className="svc-n">{s.n}</div>
                <div className="svc-title">{s.title}</div>
                <div className="svc-desc">{s.desc}</div>
                <div className="svc-foot"><span className="svc-meta">{s.meta}</span><Arrow /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <ProcessSection
        eyebrowText="The process"
        heading={<>Five stages, from<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>brief to signed offer.</em></>}
        stages={processStages}
      />

      {/* WHY RIVAGO (cream) */}
      <section className="section cream">
        <div className="wrap">
          <div className="gs">
            <Eyebrow dark>Why Rivago</Eyebrow>
            <h2 className="section-h2" style={{ color: "var(--dt)", maxWidth: 700 }}>Four numbers we&apos;ll<br />stand behind on the <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>first call.</em></h2>
          </div>
          <div className="guarantee" style={{ marginTop: 48 }}>
            {[
              { val: "48", sup: "h", title: "Median time-to-shortlist", desc: "From signed brief to calibrated candidates in your inbox." },
              { val: "94", sup: "%", title: "Offer-acceptance rate", desc: "Last 12 months, across all engagements and seniority bands." },
              { val: "12", sup: "mo", title: "Retained replacement", desc: "Restart the search at no charge if a retained placement leaves." },
              { val: "1", sup: undefined, title: "Partner on the line", desc: "One name on the engagement. No handoffs, no call centres." },
            ].map((g) => (
              <div
                className="gs"
                key={g.title}
                style={{ padding: 28, borderRadius: 20, background: "#fff", border: "1px solid rgba(0,0,0,.07)", boxShadow: "0 4px 16px rgba(11,19,17,.03)" }}
              >
                <div style={{ fontSize: 44, lineHeight: 1, letterSpacing: "-.035em", fontWeight: 400, color: "#0A7040", marginBottom: 14 }}>{g.val}{g.sup && <sup style={{ fontSize: 18, verticalAlign: "super", marginLeft: 2, color: "var(--dt3)" }}>{g.sup}</sup>}</div>
                <div style={{ fontSize: 15, fontWeight: 500, marginBottom: 4, color: "var(--dt)" }}>{g.title}</div>
                <div style={{ fontSize: 13, color: "var(--dt2)", lineHeight: 1.65, fontWeight: 300 }}>{g.desc}</div>
              </div>
            ))}
          </div>
          <div className="modes" style={{ marginTop: 20, gridTemplateColumns: "repeat(4,1fr)" }}>
            {whyCream.map((c) => (
              <div
                className="gs"
                key={c.title}
                style={{ padding: 28, borderRadius: 20, background: "#fff", border: "1px solid rgba(0,0,0,.07)", display: "flex", flexDirection: "column", gap: 14, minHeight: 0, boxShadow: "0 4px 16px rgba(11,19,17,.03)" }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(10,112,64,.08)", border: "1px solid rgba(10,112,64,.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>{c.icon}</div>
                <div style={{ fontSize: 16, fontWeight: 600, color: "var(--dt)", letterSpacing: "-.01em" }}>{c.title}</div>
                <div style={{ fontSize: 13.5, color: "var(--dt2)", lineHeight: 1.65, fontWeight: 300 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL DELIVERY (dark) */}
      <section className="section">
        <div className="wrap">
          <div className="gs">
            <Eyebrow>Global delivery</Eyebrow>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 660 }}>Three hubs.<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>One standard.</em></h2>
          </div>
          <div className="why-grid" style={{ marginTop: 44 }}>
            {deliveryHubs.map((h) => (
              <div className="why-card gs" key={h.city}>
                <div className="why-icon"><IconBuilding /></div>
                <div style={{ fontSize: 11, fontWeight: 600, color: "var(--green)", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 8 }}>{h.role}</div>
                <div className="why-title">{h.city}</div>
                <div style={{ fontSize: 12, color: "var(--text3)", fontFamily: "var(--fm)", marginBottom: 10 }}>{h.country}</div>
                <div className="why-desc">{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <IndustriesSection
        eyebrowText="Industries"
        heading={<>Every sector.<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>Every function.</em></>}
        sub="Specialist partners aligned to your sector — not a shared queue working every industry at once."
        alt
      />

      {/* CUSTOMER STORY */}
      <StorySection
        eyebrowText="Client story"
        heading={<>Building a compliance<br />team, <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>on a bank&apos;s timeline.</em></>}
        tag="Finance · Canada"
        quote="We had a regulatory deadline and a risk & compliance function that was two-thirds empty. Rivago's partner didn't just source candidates — she understood OSFI requirements well enough to screen for them. Fourteen hires in sixty days, and every one of them passed our own internal audit six months later."
        initials="MC"
        name="Meera Chandrasekaran"
        role="VP, People Operations · Toronto Regional Bank"
        metrics={[
          { val: "14", label: "Compliance & risk hires in 60 days" },
          { val: "100%", label: "12-month retention" },
          { val: "0", label: "Audit findings since program launch" },
        ]}
      />

      {/* PERSPECTIVES */}
      <InsightsSection
        heading={<>Recent<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>perspectives.</em></>}
        articles={articles}
      />

      {/* FAQ */}
      <FaqSection
        heading={<>Questions about <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>engaging us.</em></>}
        items={faqItems}
      />

      {/* CTA */}
      <CtaSection
        heading={<>Tell us the role.<br /><em>We&apos;ll be back tomorrow.</em></>}
        sub="Send the brief and a partner comes back with a written plan — timelines, comp read and the shape of the shortlist — within one business day."
        primary={{ label: "Book a strategy call", hire: true }}
        secondary={{ label: "See case studies", href: `${routes.resources}?view=cs` }}
      />
    </>
  );
}
