import Link from "next/link";
import type { Metadata } from "next";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Work at Rivago — Careers in Recruitment | Rivago Infotech",
  description: "Build your career at Rivago Infotech. Senior-only, partner-track recruiting roles across our offices in Delaware, Pune and Ontario.",
  alternates: { canonical: "https://rivagoinfotech.com/career" },
  openGraph: {
    title: "Work at Rivago — Careers in Recruitment | Rivago Infotech",
    description: "Build your career at Rivago Infotech. Senior-only, partner-track recruiting roles across our offices in Delaware, Pune and Ontario.",
    url: "https://rivagoinfotech.com/career",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rivagoinfotech.com/" },
    { "@type": "ListItem", position: 2, name: "Careers", item: "https://rivagoinfotech.com/career" },
    { "@type": "ListItem", position: 3, name: "Work at Rivago", item: "https://rivagoinfotech.com/career/work-at-rivago" },
  ],
};

const Arrow = () => (
  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const carVals = [
  { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="3.5" stroke="#3DFF87" strokeWidth="1.4" /><path d="M4 19c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="#3DFF87" strokeWidth="1.4" strokeLinecap="round" /></svg>, t: "Senior or solo", d: "No farm of juniors. If you have placed in a sector for 5+ years, you will work as a partner here — your name on the brief, your call on the candidates." },
  { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="3" width="16" height="16" rx="3" stroke="#3DFF87" strokeWidth="1.4" /><path d="M3 8h16" stroke="#3DFF87" strokeWidth="1.4" /></svg>, t: "Transparent comp", d: "Open base bands, simple commission structure. No clawbacks, no quota gymnastics. Top recruiters take home $400k+ here." },
  { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2a9 9 0 100 18A9 9 0 0011 2z" stroke="#3DFF87" strokeWidth="1.4" /><path d="M11 6v5l3.5 2" stroke="#3DFF87" strokeWidth="1.4" strokeLinecap="round" /></svg>, t: "No drip activity", d: "We measure outcomes, not call dials. 48-hour shortlists, placement rate, client retention. Hit them — work how you want." },
];

const perks = [
  { icon: "💸", t: "Transparent commission", d: "Open formula, no clawbacks, paid monthly." },
  { icon: "🌍", t: "Remote-first", d: "Optional office in your market. Quarterly partner offsites." },
  { icon: "🩺", t: "Full health cover", d: "Premium plan, dental, vision, dependents covered." },
  { icon: "🏖️", t: "28 days PTO", d: "Plus your country's public holidays. We mean it." },
  { icon: "💰", t: "401(k) / pension match", d: "5% match in US/CA. India EPF as statutory. UAE end-of-service gratuity." },
  { icon: "📚", t: "$3k learning budget", d: "Conferences, courses, books — your call." },
  { icon: "💻", t: "Top-spec gear", d: "M-series MacBook Pro + monitor + chair stipend." },
  { icon: "🤝", t: "Equity from year 2", d: "Stock options for all permanent partners after 12 months." },
];

const values = [
  { n: "01", t: "Own the outcome", d: "From first call to signed offer, the search is yours. We trust you with the brief and back your judgement — and we expect you to stand behind it." },
  { n: "02", t: "Quality over noise", d: "Five right candidates beat fifty fast ones. We'd rather decline a brief than spam a client — and the same bar applies to how we work with each other." },
  { n: "03", t: "Straight talk", d: "Honest with candidates, honest with clients, honest internally. No inflated ranges, no ghosting, no politics. If something's broken, we say so." },
  { n: "04", t: "Keep learning", d: "Markets move, comp shifts, sectors evolve. The $3k learning budget isn't a perk — it's the expectation that you stay sharper than the market you place into." },
];

const hireSteps = [
  { n: "1", t: "Intro call", d: "30 minutes with a partner. What you've placed, what you want next, what you'd never compromise on.", time: "~ 30 min · same week" },
  { n: "2", t: "Working session", d: "We walk through a live brief together. Not a test — a real look at how you think about a search.", time: "~ 60 min" },
  { n: "3", t: "Meet the pod", d: "Coffee with the people you'd actually work beside. You're interviewing us as much as we're interviewing you.", time: "Informal" },
  { n: "4", t: "Offer & onboard", d: "Transparent comp, no negotiation games. Day one you get a desk, a pod, and your first brief.", time: "Within a week" },
];

export default function CareerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="crumbs"><Link href={routes.home}>Home</Link><span className="crumbs-sep">/</span><span>Careers</span></div>
          <span className="eyebrow light">Work at Rivago</span>
          <h1 className="h-display" style={{ marginTop: 18 }}>Build a career placing <em>other careers.</em></h1>
          <p className="body-lg" style={{ maxWidth: 600, margin: "24px auto 0" }}>We hire senior — and pay accordingly. Smaller team, bigger ownership, every search yours from intake to placement.</p>
          <div style={{ marginTop: 36, display: "flex", gap: 10, justifyContent: "center" }}>
            <Link className="btn btn--primary btn--lg" href={routes.openPositions}>See open roles <Arrow /></Link>
            <a className="btn btn--secondary btn--lg" href="#culture">Our culture</a>
          </div>
        </div>
      </section>

      <section className="section alt" id="culture">
        <div className="container">
          <span className="eyebrow light">How we work</span>
          <h2 className="h-section" style={{ marginTop: 18, color: "var(--text)", maxWidth: 620 }}>A firm built for <em>good recruiters.</em></h2>
          <div className="car-vals">
            {carVals.map((v) => (
              <div className="car-val" key={v.t}>
                <div className="car-val-ico">{v.icon}</div>
                <div className="car-val-t">{v.t}</div>
                <div className="car-val-d">{v.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt" id="perks">
        <div className="container">
          <span className="eyebrow light">Perks &amp; benefits</span>
          <h2 className="h-section" style={{ marginTop: 18, color: "var(--text)", maxWidth: 620 }}>A grown-up <em>package.</em></h2>
          <div className="perks">
            {perks.map((p) => (
              <div className="perk" key={p.t}>
                <div className="perk-ico">{p.icon}</div>
                <div className="perk-t">{p.t}</div>
                <div className="perk-d">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow light">Working at Rivago</span>
          <h2 className="h-section" style={{ marginTop: 18, color: "var(--text)", maxWidth: 640 }}>What it&apos;s actually like <em>inside.</em></h2>
          <div className="life-grid">
            <div className="life-card tall">
              <div>
                <div className="life-eyb">The day-to-day</div>
                <div className="life-h">Small pods, real ownership, no theatre.</div>
                <div className="life-p">You run your desk like it&apos;s your own business — pick your roles, set your approach, own the outcome. A partner reviews, never micromanages. Mornings are for candidate calls, afternoons for client work, and nobody&apos;s counting your dials.</div>
              </div>
              <div style={{ display: "flex", gap: 28, marginTop: 24 }}>
                <div><div className="life-stat">5</div><div className="life-stat-l">Avg pod size</div></div>
                <div><div className="life-stat">0</div><div className="life-stat-l">Activity quotas</div></div>
                <div><div className="life-stat">50+</div><div className="life-stat-l">People, 5 offices</div></div>
              </div>
            </div>
            <div className="life-col">
              <div className="life-card">
                <div className="life-eyb">Rituals</div>
                <div className="life-h">Monday market reads &amp; Friday wins</div>
                <div className="life-p">Every week opens with a 20-minute market read and closes with the placements we&apos;re proud of. Quarterly, the whole firm meets in one city.</div>
              </div>
              <div className="life-card">
                <div className="life-eyb">How we talk</div>
                <div className="life-h">Async-first, calm by default</div>
                <div className="life-p">Slack for the day, docs for decisions, calls only when they earn it. Deep-work blocks are protected — your calendar is yours.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cv-sec">
        <div className="container">
          <span className="eyebrow light">What we stand for</span>
          <h2 className="h-section" style={{ marginTop: 18, color: "var(--text)", maxWidth: 640 }}>Four values we <em>actually hire for.</em></h2>
          <div className="cv-grid">
            {values.map((v) => (
              <div className="cv" key={v.n}>
                <div className="cv-n">{v.n}</div>
                <div className="cv-t">{v.t}</div>
                <div className="cv-d">{v.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="hiring">
        <div className="container">
          <span className="eyebrow light">Getting started</span>
          <h2 className="h-section" style={{ marginTop: 18, color: "var(--text)", maxWidth: 640 }}>How we hire — <em>four honest steps.</em></h2>
          <p className="body" style={{ maxWidth: 540, marginTop: 18 }}>The same process whether you&apos;re a first-time recruiter or a sector veteran. No take-home tests, no twelve-round gauntlets — just real conversations about real work.</p>
          <div className="hire-steps">
            {hireSteps.map((s) => (
              <div className="hstep" key={s.n}>
                <div className="hstep-n">{s.n}</div>
                <div className="hstep-t">{s.t}</div>
                <div className="hstep-d">{s.d}</div>
                <div className="hstep-time">{s.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="began">
        <div className="began-intro">
          <span className="eyebrow light">Where it all began</span>
          <h2>Built by people who&apos;d <em>grown tired of the theatre.</em></h2>
          <p>Before they founded Rivago in 2017, our three partners spent the prior decade inside the volume agencies and the orgs they hired for. They&apos;d watched good briefs go unfilled while inboxes filled with mediocre résumés — and decided to build the firm they&apos;d always wanted to hire from.</p>
        </div>
        <div className="began-grid">
          <div className="began-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop" alt="Rivago founders and early team" loading="lazy" decoding="async" />
          </div>
          <div className="began-card">
            <div className="began-card-h">Build with us.</div>
            <div className="began-card-p">We&apos;re after senior operators who pair real craft with genuine care for the people they place. At Rivago every partner owns their desk end to end and shapes how we hire across four markets. Come do the best work of your career.</div>
            <Link className="began-card-btn" href={routes.openPositions}>See open roles <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#0A140B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
          </div>
        </div>
      </section>
    </>
  );
}
