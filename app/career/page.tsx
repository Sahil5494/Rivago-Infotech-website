import Link from "next/link";
import type { Metadata } from "next";
import { routes, firm, offices } from "@/lib/routes";
import SharedValues from "@/components/SharedValues";
import HiringTimeline from "@/components/HiringTimeline";
import { ogBase } from "@/lib/og";

export const metadata: Metadata = {
  title: "Work at Rivago — Careers in Recruitment | Rivago Infotech",
  description: "Build your career at Rivago Infotech — recruiting, business development, client and delivery roles, based in Pune or remote.",
  alternates: { canonical: "https://rivagoinfotech.com/career" },
  openGraph: {
    ...ogBase,
    title: "Work at Rivago — Careers in Recruitment | Rivago Infotech",
    description: "Build your career at Rivago Infotech — recruiting, business development, client and delivery roles, based in Pune or remote.",
    url: "https://rivagoinfotech.com/career",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rivagoinfotech.com/" },
    { "@type": "ListItem", position: 2, name: "Careers", item: "https://rivagoinfotech.com/career" },
  ],
  /* A third crumb pointed at /career/work-at-rivago, which is not a route —
     structured data sending search engines to a 404. This page is /career. */
};

const Arrow = () => (
  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const carVals = [
  { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="3.5" stroke="var(--accent)" strokeWidth="1.4" /><path d="M4 19c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" /></svg>, t: "Your desk, your call", d: "Recruiters run their searches as partners — your name on the brief, your call on the candidates. Business development, client and delivery roles own their part of the work the same way." },
  { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="3" width="16" height="16" rx="3" stroke="var(--accent)" strokeWidth="1.4" /><path d="M3 8h16" stroke="var(--accent)" strokeWidth="1.4" /></svg>, t: "Clear comp", d: "Base and commission explained up front, in writing, before you accept. No quota gymnastics." },
  { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2a9 9 0 100 18A9 9 0 0011 2z" stroke="var(--accent)" strokeWidth="1.4" /><path d="M11 6v5l3.5 2" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" /></svg>, t: "No drip activity", d: "We measure outcomes, not call dials: placements that stick, clients who come back, candidates who would work with you again. Hit them — work how you want." },
];


const hireSteps = [
  { n: "1", t: "Intro call", d: "30 minutes with a partner. What you've placed, what you want next, what you'd never compromise on.", time: "~ 30 min" },
  { n: "2", t: "Working session", d: "We walk through a live brief together. Not a test — a real look at how you think about a search.", time: "~ 60 min" },
  { n: "3", t: "Meet the team", d: "Coffee with the people you'd actually work beside. You're interviewing us as much as we're interviewing you.", time: "Informal" },
  { n: "4", t: "Offer & onboard", d: "A written offer with base and commission spelled out — no negotiation games. Then onboarding, and your first brief.", time: "" },
];

export default function CareerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero pins and "How we work" slides up over it — the home page's
          hero / THE PROBLEM mechanism (.ov-scope / .ov-over), as on About. */}
      <div className="ov-scope">
      <section className="page-hero inv ph-pin">
        <div className="page-hero-inner">
          <div className="crumbs"><Link href={routes.home}>Home</Link><span className="crumbs-sep">/</span><span>Careers</span></div>
          <span className="eyebrow light">Work at Rivago</span>
          <h1 className="gs" style={{ marginTop: 18 }}>Build a career placing <em>other careers.</em></h1>
          <p className="lead gs" style={{ maxWidth: 600, margin: "24px auto 0" }}>We hire experienced recruiters, and the business development, client and delivery people who work beside them. Smaller team, bigger ownership — your work is yours from start to finish.</p>
          <div className="gs" style={{ marginTop: 36, display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="btn btn-prim" href={routes.openPositions}>Join the team <Arrow /></Link>
            <a className="btn btn-ghost" href="#culture">Our culture</a>
          </div>
        </div>
      </section>

      <section className="section alt ov-over">
        <div className="wrap">
          <span className="eyebrow light">How we work</span>
          <h2 className="section-h2 gs" style={{ marginTop: 18, color: "var(--text)", maxWidth: 620 }}>A firm built around <em>good recruiting.</em></h2>
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
      </div>{/* /.ov-scope */}

      {/* PERKS & BENEFITS stood here: 28 days PTO, a 5% 401(k)/pension match,
          full health cover, a $3k learning budget, a MacBook Pro and chair
          stipend, stock options after 12 months, remote-first with quarterly
          offsites, and a UAE end-of-service gratuity (Rivago has no UAE
          entity to employ anyone under). None was confirmed, and a benefits
          list on a careers page is a promise applicants hold you to. Removed
          at the client's call on 28 September 2026; put it back with the
          confirmed package. */}

      {/* Dark, for rhythm: with perks gone the page ran hero (dark) and then
          four light sections in two near-identical mints — #edf7f2 and
          #f2f7f5 — about 3,000px without a change of ground. .life-* is
          built on role tokens, so .inv re-themes it without new rules. */}
      <section className="section inv life-sec" id="culture">
        <div className="wrap">
          <span className="eyebrow light">Working at Rivago</span>
          <h2 className="section-h2 gs" style={{ marginTop: 18, color: "var(--text)", maxWidth: 640 }}>What it&apos;s actually like <em>inside.</em></h2>
          <div className="life-grid">
            <div className="life-card tall">
              <div>
                <div className="life-eyb">The day-to-day</div>
                <div className="life-h">Real ownership, no theatre.</div>
                <div className="life-p">You run your desk like it&apos;s your own business — pick your roles, set your approach, own the outcome. Mornings are for candidate calls, afternoons for client work.</div>
              </div>
              {/* "0 activity quotas" went too: the same point was made three times on
                  the page (here, "No drip activity" above, and "nobody's counting
                  your dials" in this card). "No drip activity" keeps it.
                  Was 5 "avg pod size", 0 activity quotas, and "50+ people, 5
                  offices". The pod size was never measured, and the firm has
                  three offices, not five. The two counts now come from
                  lib/routes.ts; zero quotas is a policy, so it stays. */}
              <div style={{ display: "flex", gap: 28, marginTop: 24 }}>
                <div><div className="life-stat">{firm.people}</div><div className="life-stat-l">People</div></div>
                <div><div className="life-stat">{offices.length}</div><div className="life-stat-l">Offices</div></div>
              </div>
            </div>
            {/* The two cards here were "Monday market reads & Friday wins" and
                "Async-first: Slack for the day, docs for decisions, protected
                deep-work blocks" — specific rituals nobody had confirmed, which a
                new hire would test on day one. Replaced with confirmed facts:
                founded 2019, four markets, the three offices in lib/routes.ts. */}
            <div className="life-col">
              <div className="life-card">
                <div className="life-eyb">Since {firm.foundedYear}</div>
                <div className="life-h">Founded by recruiters, run by partners</div>
                <div className="life-p">Every search is led by a partner who has placed in that sector for years — the same people who decide how the firm works.</div>
              </div>
              <div className="life-card">
                <div className="life-eyb">Where we work</div>
                <div className="life-h">Four markets, one way of working</div>
                <div className="life-p">We place into the United States, Canada, India and the UAE, from offices in {offices.map((o) => o.city).join(", ").replace(/, ([^,]*)$/, " and $1")}.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SharedValues />

      <section className="section" id="hiring">
        <div className="wrap">
          <span className="eyebrow light">Getting started</span>
          <h2 className="section-h2 gs" style={{ marginTop: 18, marginBottom: 0, color: "var(--text)", maxWidth: 640 }}>How we hire — <em>four honest steps.</em></h2>
          <p className="gs" style={{ maxWidth: 540, marginTop: 18, fontSize: "var(--fz5)", color: "var(--text2)", lineHeight: 1.7, fontWeight: 400 }}>The same process for every role. No take-home tests, no twelve-round gauntlets — just real conversations about real work.</p>
          {/* The home page's process timeline, horizontal — see HiringTimeline. */}
          <HiringTimeline steps={hireSteps} />
        </div>
      </section>

      <section className="began inv">
        <div className="began-intro">
          <span className="eyebrow light">Where it all began</span>
          <h2>Built by people who&apos;d <em>grown tired of the theatre.</em></h2>
          <p>Before they founded Rivago in {firm.foundedYear}, our partners spent years inside the volume agencies and the orgs they hired for. They&apos;d watched good briefs go unfilled while inboxes filled with mediocre résumés — and decided to build the firm they&apos;d always wanted to hire from.</p>
        </div>
        <div className="began-grid">
          <div className="began-photo">
            {/* Was hotlinked from images.unsplash.com — the last live hotlink on the
                site, the same kind removed from the home page and /resources. It is
                now one of the Adobe Stock images already licensed to the account
                (see public/assets/services/LICENCES.md), served locally. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/services/rpo.jpg" alt="A team planning together around a wall of sticky notes" loading="lazy" decoding="async" />
          </div>
          <div className="began-card lt">
            <div className="began-card-h">Build with us.</div>
            <div className="began-card-p">We&apos;re after people who pair real craft with genuine care — recruiters, account managers and the business development team behind them. Everyone owns their work end to end, across four markets. Come do the best work of your career.</div>
            <Link className="began-card-btn" href={routes.openPositions}>Join the team <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#0A140B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
          </div>
        </div>
      </section>
    </>
  );
}
