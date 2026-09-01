import Link from "next/link";
import type { Metadata } from "next";
import LogoMarquee from "@/components/LogoMarquee";
import { routes } from "@/lib/routes";
import {
  Arrow,
  SmallArrow,
  breadcrumbJsonLd,
  SwhySection,
  Proc2Section,
  IndustriesGrid2Section,
  FaqSection,
  CtaSection,
} from "../_components/shared";
import RpoModelsTabs from "./RpoModelsTabs";

export const metadata: Metadata = {
  title: "RPO — Recruitment Process Outsourcing | Rivago Infotech",
  description:
    "Rivago RPO embeds a dedicated recruiting team inside your business — owning talent strategy, sourcing, screening, onboarding and reporting. Enterprise, project-based and hybrid RPO models across the US, Canada, the UAE and India.",
  alternates: { canonical: "https://rivagoinfotech.com/services/rpo" },
  openGraph: {
    title: "RPO — Recruitment Process Outsourcing | Rivago Infotech",
    description: "An embedded recruiting team that owns talent strategy, sourcing, screening, onboarding and reporting — enterprise, project-based and hybrid RPO models.",
    url: "https://rivagoinfotech.com/services/rpo",
  },
};

const crumbs = [{ label: "Home", href: routes.home }, { label: "Services", href: routes.services }, { label: "Recruitment Process Outsourcing" }];

const svgIco = (path: string) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" dangerouslySetInnerHTML={{ __html: path }} />
);

const insights = [
  { gradient: "linear-gradient(135deg,#0F2A1B,#0A7040)", cat: "Playbook", title: "When RPO beats an in-house TA team", desc: "The three signals that tell you it is time to outsource the function, not just the roles.", meta: "7 min read" },
  { gradient: "linear-gradient(135deg,#12332A,#00A882)", cat: "Metrics", title: "The four numbers every RPO should report", desc: "Fill time, cost per hire, quality of hire and retention — and how to hold a partner to them.", meta: "6 min read" },
  { gradient: "linear-gradient(135deg,#0B1F14,#3DFF87)", cat: "Scaling", title: "Standing up a hiring engine in three weeks", desc: "How an embedded pod goes from kickoff to first placements without breaking your brand.", meta: "9 min read" },
];

export default function RpoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(crumbs)) }} />

      <header className="svh">
        <div className="svh-inner">
          <div className="svh-eyb gs"><span className="dot"></span>Recruitment Process Outsourcing</div>
          <h1 className="gs">Your recruiting engine,<br /><em>running at full speed.</em></h1>
          <p className="gs">We embed a dedicated recruiting team inside your business — owning strategy, sourcing, screening, onboarding and reporting. Enterprise hiring power, measurable results, none of the overhead.</p>
          <div className="svh-cta gs">
            <Link className="btn btn-prim" href="#intake">Book a strategy call <Arrow /></Link>
            <Link className="btn btn-ghost" href={`${routes.resources}?view=cs`}>See case studies</Link>
          </div>
        </div>
      </header>

      <section className="clients-sec">
        <div className="clients-label">Recruiting teams we run for</div>
        <LogoMarquee />
      </section>

      <SwhySection
        heading={<>An RPO partner that owns<br />the <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>outcome.</em></>}
        lead="Others hand you coordinators and a dashboard. We embed senior recruiters who own the whole lifecycle — and report on what matters: fill time, cost per hire, and who is still there a year on."
        numsr={[
          { v: "40", sup: "%", title: "Faster time-to-fill", desc: "Versus in-house baseline, first six months." },
          { v: "30", sup: "%", title: "Lower cost-per-hire", desc: "Fewer agency fees, one accountable team." },
          { v: "92", sup: "%", title: "Hiring-manager CSAT", desc: "Measured every quarter, acted on." },
          { v: "600", sup: "+", title: "Placements to date", desc: "Across four markets and ten practices." },
        ]}
        cards={[
          { title: "We own the program", desc: "Strategy, pipeline and delivery run through one accountable Rivago team — not a queue of tickets and a self-serve tool.", icon: svgIco('<path d="M3 8l8-4 8 4v6l-8 4-8-4z" stroke="#3DFF87" stroke-width="1.4" stroke-linejoin="round"/><path d="M7 10v3l4 2 4-2v-3" stroke="#3DFF87" stroke-width="1.4" stroke-linejoin="round"/>') },
          { title: "Senior recruiters, your brand", desc: "Embedded specialists work as an extension of your team — your careers page, your voice, your candidate experience.", icon: svgIco('<path d="M11 2l2.2 4.4 4.8.7-3.5 3.4.8 4.8L11 13l-4.3 2.3.8-4.8L4 7.1l4.8-.7z" stroke="#3DFF87" stroke-width="1.4" stroke-linejoin="round"/>') },
          { title: "Measured on retention", desc: "Accountability doesn't end at the offer. We track first-90-days, retention and hiring-manager satisfaction — and optimise against them.", icon: svgIco('<path d="M3 18h16M5 18V9M9 18V6M13 18v-8M17 18V8" stroke="#3DFF87" stroke-width="1.4" stroke-linecap="round"/>') },
          { title: "Scale up or down", desc: "Ramp for a growth phase, wind down after it. Enterprise, project or hybrid — the model flexes to your hiring plan.", icon: svgIco('<path d="M4 11h6l-2-2M4 11l4 2M18 11h-6l2-2M18 11l-4 2" stroke="#3DFF87" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>') },
        ]}
      />

      {/* WHAT IS RPO */}
      <section className="section">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>What is RPO?</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 720 }}>Not another agency.<br />An <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>owned program.</em></h2>
            <p style={{ color: "var(--text2)", maxWidth: 560, marginTop: 18, fontSize: 16, fontWeight: 300, lineHeight: 1.7 }}>Agencies sell candidates. RPO gives you the whole hiring engine — and owns the outcome.</p>
          </div>
          <div className="wir-grid">
            <div className="wir-card gs">
              <span className="wir-tag">Traditional staffing</span>
              <h3>You run the pipeline.</h3>
              <div className="wir-flow"><span className="wir-step">Source</span><span className="wir-arrow">→</span><span className="wir-step">Screen</span><span className="wir-arrow">→</span><span className="wir-step">Place</span></div>
              <p>Your team owns the strategy and runs the pipeline. A staffing partner sources and places the individual roles you bring them — and the relationship ends at the offer letter.</p>
            </div>
            <div className="wir-card hi gs">
              <span className="wir-tag">RPO with Rivago</span>
              <h3>We run the program.</h3>
              <div className="wir-flow"><span className="wir-step">Source</span><span className="wir-arrow">→</span><span className="wir-step">Screen</span><span className="wir-arrow">→</span><span className="wir-step">Onboard</span><span className="wir-arrow">→</span><span className="wir-step">Track</span><span className="wir-arrow">→</span><span className="wir-step">Report</span></div>
              <p>We own the strategy and run the program end to end. <strong>Accountability runs through retention and performance, not just offers</strong> — with weekly reporting on the metrics that matter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RPO MODELS */}
      <section className="section alt">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>RPO models</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 720 }}>One partner,<br />three <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>ways to engage.</em></h2>
          </div>
          <RpoModelsTabs />
        </div>
      </section>

      <Proc2Section
        eyebrowText="How it works"
        heading={<>How an RPO program<br />actually <em>runs.</em></>}
        lead="Five stages, one accountable team. Enterprise, Project and Hybrid all run the same lifecycle, with the same rigor."
        footText="One team owns all of them."
        stages={[
          { day: "Ongoing", title: "Strategy & sourcing", desc: "Talent strategy, market mapping, and the recruiter network behind every fill.", deliverValue: "Talent strategy" },
          { day: "Per role", title: "Screening & assessment", desc: "Industry-specialized vetting, structured interviews, references, and skills checks.", deliverValue: "Vetted shortlists" },
          { day: "Offer stage", title: "Selection & onboarding", desc: "Offer support, hiring-manager handoff, and ramp tracking through the first 30 days.", deliverValue: "Onboarded hires" },
          { day: "First 90 days", title: "Performance tracking", desc: "First-90-days check-ins, retention monitoring, and hiring-manager satisfaction surveys.", deliverValue: "Retention data" },
          { day: "Weekly", title: "Reporting & optimization", desc: "Weekly reporting on fill time, cost per hire, and quality of hire — with continuous tuning.", deliverValue: "Weekly reports", done: true },
        ]}
      />

      <IndustriesGrid2Section
        heading={<>RPO programs across<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>every sector we serve.</em></>}
        sub="Recruiters who live in your market — they know the titles, the pay bands and where the talent hides."
      />

      {/* CUSTOMER STORY */}
      <section className="section cream">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-dark" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Customer story</div>
            <h2 className="section-h2" style={{ color: "var(--dt)", maxWidth: 720 }}>A recruiting engine,<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>handed over in weeks.</em></h2>
          </div>
          <div className="testi-cream" style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
            <div className="tc-card gs" style={{ gridColumn: "span 2" }}>
              <span className="tc-tag">US · Technology · Enterprise RPO</span>
              <p className="tc-quote" style={{ fontSize: 22 }}>We were scaling from 200 to 600 people and our four-person TA team was drowning. Rivago stood up an embedded pod in three weeks, took over the whole funnel, and cut our time-to-fill by <em>nearly half</em> — while our internal team finally got to work on employer brand instead of firefighting.</p>
              <div className="tc-author">
                <div className="tc-author-av" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,#3DFF87,#00A882)", color: "#030C05", fontWeight: 600, fontSize: 13, letterSpacing: ".02em" }}>DK</div>
                <div><div className="tc-author-name">Daniel K.</div><div className="tc-author-role">VP People · US technology scale-up</div></div>
              </div>
            </div>
            <div className="tc-card gs" style={{ justifyContent: "center", gap: 26, background: "var(--bg)", borderColor: "var(--border)" }}>
              <div><div style={{ fontFamily: "var(--fs)", fontStyle: "italic", fontSize: 52, color: "var(--green)", lineHeight: 1, letterSpacing: "-.03em" }}>240</div><div style={{ fontSize: 13, color: "var(--text2)", marginTop: 8, fontWeight: 300 }}>hires in 12 months</div></div>
              <div><div style={{ fontFamily: "var(--fs)", fontStyle: "italic", fontSize: 52, color: "var(--green)", lineHeight: 1, letterSpacing: "-.03em" }}>44<span style={{ fontSize: 22 }}>%</span></div><div style={{ fontSize: 13, color: "var(--text2)", marginTop: 8, fontWeight: 300 }}>faster time-to-fill</div></div>
              <div><div style={{ fontFamily: "var(--fs)", fontStyle: "italic", fontSize: 52, color: "var(--green)", lineHeight: 1, letterSpacing: "-.03em" }}>3 wks</div><div style={{ fontSize: 13, color: "var(--text2)", marginTop: 8, fontWeight: 300 }}>to a live embedded team</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="section alt">
        <div className="wrap">
          <div className="gs" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 30, flexWrap: "wrap" }}>
            <div>
              <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Insights</div>
              <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 720, marginBottom: 0 }}>RPO, <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>in practice.</em></h2>
            </div>
            <Link href={routes.resources} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--green)", fontSize: 14, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}>Read the blog <SmallArrow /></Link>
          </div>
          <div className="ins-grid">
            {insights.map((p) => (
              <Link className="ins-card gs" href={routes.resources} key={p.title}>
                <div className="ins-img" style={{ background: p.gradient }}><span className="ins-cat">{p.cat}</span></div>
                <div className="ins-body"><h3>{p.title}</h3><p>{p.desc}</p><div className="ins-meta">{p.meta}</div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (general) */}
      <FaqSection
        heading={<>Questions we get on<br />the <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>first call.</em></>}
        items={[
          { q: "What is the difference between RPO and using a staffing agency?", a: "A staffing agency fills the individual roles you bring them and the relationship ends at the offer. RPO outsources the recruiting function itself — Rivago owns talent strategy, sourcing, screening, onboarding and reporting as an embedded extension of your team, and is measured on retention and cost per hire, not just placements." },
          { q: "How quickly can an RPO program be stood up?", a: "A dedicated embedded pod is typically live within two to three weeks of kickoff — including ATS access, employer-brand alignment and a calibrated hiring plan. Project RPO surges follow the same timeline; enterprise programs phase in function by function." },
          { q: "Do your recruiters work under our brand?", a: "Yes. Embedded recruiters operate as an extension of your team — your careers page, your email domain where you want it, your candidate experience. To candidates, it feels like your in-house function, backed by Rivago capacity." },
          { q: "Can we scale the program up or down?", a: "That is the point of the model. Ramp capacity for a growth phase or a launch, then wind down cleanly when the plan changes. Hybrid RPO flexes month to month; project RPO is scoped to a fixed surge with a defined end." },
          { q: "How is RPO priced?", a: "Enterprise RPO is a monthly managed-service fee scaled to program size; project RPO is a fixed price against an agreed scope and timeline; hybrid is a flexible monthly rate for the capacity you use. No per-placement agency fees stacking on top." },
          { q: "What happens to our existing TA team?", a: "We augment, not replace. Most clients keep their in-house team on strategy and employer brand while Rivago takes the sourcing and delivery load — or fills a specific function they cannot crack. The split is agreed up front." },
        ]}
      />

      {/* FAQ (contractual detail) */}
      <FaqSection
        heading={<>RPO, <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>without the sales gloss.</em></>}
        items={[
          { q: "At what hiring volume does RPO actually beat contingent recruiting?", a: "Roughly fifty or more hires a year on an ongoing basis, or any time-boxed project with a defined hire count. Below that, contingent direct hire is usually cheaper and we will say so. We would rather scope you into the right model than sell a programme you do not need." },
          { q: "How is RPO priced, and what is included?", a: "Enterprise RPO is a fixed monthly fee scoped to volume and outcomes. Project RPO is a project fee tied to milestones and hire targets. Hybrid is a baseline fee plus per-hire surge pricing. All include sourcing, screening, scheduling, offer management and reporting — technology and assessment licences are quoted separately if you want them." },
          { q: "Do we lose control of hiring decisions or our employer brand?", a: "No. Every hiring decision remains yours, and the team works under your brand, in your ATS, following your process. What transfers is accountability for the metrics: time-to-fill, cost per hire, quality of hire and retention — reported weekly, not quarterly." },
          { q: "What service levels do you commit to contractually?", a: "Time-to-shortlist, time-to-fill, submittal-to-interview ratio, offer-accept rate and hiring-manager satisfaction. Targets are agreed during scoping, written into the agreement, and reported against every week. Where we miss, the report says so." },
          { q: "What happens to the programme if we want to exit?", a: "There is a defined transition-out period with a documented handover: live requisitions, candidate pipelines, process documentation and market intelligence transfer to you. Notice terms are symmetrical, and we do not hold your pipeline hostage." },
          { q: "Can RPO cover more than one country?", a: "Yes. Rivago runs programmes across the United States, Canada, the UAE and India on a single contract, with local partners handling in-country compensation, regulation and work authorisation, and one central team reporting to you." },
        ]}
      />

      <CtaSection
        heading={<>Bring us the program.<br /><em>We&apos;ll bring the team that owns it.</em></>}
        sub="A 30-minute strategy call with a senior partner — we review your hiring plan, propose an RPO model and quote a realistic ramp. No cost, no obligation."
        primary={{ label: "Book a strategy call", hire: true }}
        secondary={{ label: "Read case studies", href: `${routes.resources}?view=cs` }}
      />
    </>
  );
}
