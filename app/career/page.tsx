import Link from "next/link";
import type { Metadata } from "next";
import { routes, firm, offices } from "@/lib/routes";
import SharedValues from "@/components/SharedValues";
import HiringTimeline from "@/components/HiringTimeline";
import { positions, salaryLabel, seniorityOf } from "@/app/open-positions/positions-data";
import { copyFor } from "@/app/view-jobs/role/role-copy";
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

const Pin = () => (
  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 14s4.5-4.1 4.5-7.5a4.5 4.5 0 10-9 0C3.5 9.9 8 14 8 14z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><circle cx="8" cy="6.5" r="1.6" stroke="currentColor" strokeWidth="1.4" /></svg>
);
const Bag = () => (
  <svg aria-hidden="true" width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="2" y="5" width="12" height="8.5" rx="1.6" stroke="currentColor" strokeWidth="1.4" /><path d="M5.5 5V3.8A1.3 1.3 0 016.8 2.5h2.4a1.3 1.3 0 011.3 1.3V5" stroke="currentColor" strokeWidth="1.4" /></svg>
);
const Arrow = () => (
  <svg aria-hidden="true" className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

/* `k` is the card's eyebrow in Life at Rivago. */
const carVals = [
  { k: "Ownership", t: "Your desk, your call", d: "Recruiters run their searches as partners — your name on the brief, your call on the candidates. Business development, client and delivery roles own their part of the work the same way." },
  { k: "Pay", t: "Clear comp", d: "Base and commission explained up front, in writing, before you accept. No quota gymnastics." },
  { k: "How we measure", t: "No drip activity", d: "We measure outcomes, not call dials: placements that stick, clients who come back, candidates who would work with you again. Hit them — work how you want." },
];


const hireSteps = [
  { n: "1", t: "Intro call", d: "30 minutes with a partner. What you've placed, what you want next, what you'd never compromise on.", time: "~ 30 min" },
  { n: "2", t: "Working session", d: "We walk through a live brief together. Not a test — a real look at how you think about a search.", time: "~ 60 min" },
  { n: "3", t: "Meet the team", d: "Coffee with the people you'd actually work beside. You're interviewing us as much as we're interviewing you.", time: "Informal" },
  { n: "4", t: "Offer & onboard", d: "A written offer with base and commission spelled out — no negotiation games. Then onboarding, and your first brief.", time: "" },
];

/* The four roles shown inline under the hero; the rest are one click away. */
const SHOWN_ROLES = 4;

/* ORDER (restructured 2 October 2026). The page used to run three sections
   of culture claims back to back (How we work, What it's like inside, Our
   shared values), each in its own card style, before anything concrete; the
   open roles were behind a button; and the founders' story — the most human
   thing here — came last. Now: hero, the roles, the story, values, life
   inside (How we work merged into it, one card style), how we hire, and a
   closing ask. Bands alternate dark / light. Photos: the story keeps the
   licensed stock image until the firm's own shoot, which replaces it. */
export default function CareerPage() {
  const roles = positions.slice(0, SHOWN_ROLES);
  const mode = (xs: string[]) => xs.sort((a, b) => xs.filter((x) => x === b).length - xs.filter((x) => x === a).length)[0];
  const commonLocation = mode(positions.map((p) => p.location));
  const commonType = mode(positions.map((p) => p.type));
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero pins and the roles band slides up over it — the home page's
          hero / THE PROBLEM mechanism (.ov-scope / .ov-over), as on About. */}
      <div className="ov-scope">
      <section className="page-hero inv ph-pin">
        <div className="page-hero-inner">
          <div className="crumbs"><Link href={routes.home}>Home</Link><span className="crumbs-sep">/</span><span>Careers</span></div>
          <span className="eyebrow light">Work at Rivago</span>
          <h1 className="gs" style={{ marginTop: 18 }}>Build a career placing <em>other careers.</em></h1>
          <p className="lead gs" style={{ maxWidth: 600, margin: "24px auto 0" }}>We hire experienced recruiters, and the business development, client and delivery people who work beside them. Smaller team, bigger ownership — your work is yours from start to finish.</p>
          <div className="gs cr-hero-btns" style={{ marginTop: 36, display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="btn btn-prim" href={routes.openPositions}>Join the team <Arrow /></Link>
            <a className="btn btn-ghost" href={routes.contactUs} data-hire="seeker">Send us your CV</a>
          </div>
        </div>
      </section>

      {/* OPEN ROLES — the highest-intent content, first. Cards link to each
          role's own page; the full list is one click away. */}
      <section className="section cr-roles ov-over" id="roles">
        <div className="wrap">
          <div className="cr-roles-top">
            <div>
              <span className="eyebrow light">Open roles</span>
              <h2 className="section-h2 gs" style={{ marginTop: 18, marginBottom: 0, color: "var(--text)" }}>Hiring <em>now.</em></h2>
              <p className="cr-lede gs">{positions.length} roles, based at our Pune office or remote. Every one is full-time, with the salary on the listing.</p>
            </div>
            <Link className="cr-all" href={routes.openPositions}>See all {positions.length} roles <Arrow /></Link>
          </div>
          <ul className="cr-role-grid">
            {roles.map((r) => (
              <li key={r.id}>
                <Link className="cr-role" href={`${routes.openPositions}/${r.id}`}>
                  <span className="cr-role-dept">{r.department} &middot; {seniorityOf(r)}</span>
                  <h3 className="cr-role-t">{r.title}</h3>
                  {/* The first clause of the role page's opening sentence, so it
                      reads as a whole sentence instead of being cut mid-line. */}
                  <p className="cr-role-sum">{copyFor(r.title, r.department).a.split(" — ")[0].replace(/[.,]?$/, ".")}</p>
                  {/* Location and type only where a role differs from the rest —
                      all eight are "Pune, India or remote · Full-time", which
                      the lede above already says. */}
                  {(r.location !== commonLocation || r.type !== commonType) && (
                    <span className="cr-role-meta">
                      {r.location !== commonLocation && <span><Pin />{r.location}</span>}
                      {r.type !== commonType && <span><Bag />{r.type}</span>}
                    </span>
                  )}
                  <span className="cr-role-foot">
                    {r.salary && <span className="cr-role-pay">{salaryLabel(r.salary)}</span>}
                    <span className="cr-role-go">View role <Arrow /></span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      </div>{/* /.ov-scope */}

      {/* OUR STORY — moved up from the end of the page. */}
      <section className="began inv">
        <div className="began-intro">
          <span className="eyebrow light">Where it all began</span>
          <h2>Built by people who&apos;d <em>grown tired of the theatre.</em></h2>
          <p>Before they founded Rivago in {firm.foundedYear}, our partners spent years inside the volume agencies and the orgs they hired for. They&apos;d watched good briefs go unfilled while inboxes filled with mediocre résumés — and decided to build the firm they&apos;d always wanted to hire from.</p>
        </div>
        <div className="began-wide">
          {/* PLACEHOLDER until the firm's photoshoot: a licensed Adobe Stock
              image (public/assets/services/LICENCES.md), reused from RPO.
              Replace with a real team or office photo. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/services/rpo.jpg" alt="A team planning together around a wall of sticky notes" loading="lazy" decoding="async" />
        </div>
      </section>

      <SharedValues />

      {/* LIFE AT RIVAGO — "How we work" merged in. One card style (.life-card)
          throughout; it was three cards with icons on cream, then a separate
          dark band of bento cards, saying adjacent things. */}
      <section className="section inv life-sec" id="culture">
        <div className="wrap">
          <span className="eyebrow light">Life at Rivago</span>
          <h2 className="section-h2 gs" style={{ marginTop: 18, color: "var(--text)", maxWidth: 640 }}>What it&apos;s actually like <em>inside.</em></h2>
          {/* One grid of six equal cards, three across — not a tall card
              beside two stacked ones, which stretched the tall one and left a
              dead gap between its text and its stats. On phones the six become
              one swipe row (~1,900px of stacked cards before). */}
          <div className="life-grid6" aria-label="Life at Rivago">
            <div className="life-card">
              <div className="life-eyb">The day-to-day</div>
              <h3 className="life-h">Real ownership, no theatre.</h3>
              <div className="life-p">You run your desk like it&apos;s your own business — pick your roles, set your approach, own the outcome.</div>
              <div className="life-stats">
                <div><div className="life-stat">{firm.people}</div><div className="life-stat-l">People</div></div>
                <div><div className="life-stat">{offices.length}</div><div className="life-stat-l">Offices</div></div>
              </div>
            </div>
            <div className="life-card">
              <div className="life-eyb">Since {firm.foundedYear}</div>
              <h3 className="life-h">Founded by recruiters, run by partners</h3>
              <div className="life-p">Every search is led by a partner who has placed in that sector for years — the same people who decide how the firm works.</div>
            </div>
            <div className="life-card">
              <div className="life-eyb">Where we work</div>
              <h3 className="life-h">Four markets, one way of working</h3>
              <div className="life-p">We place into the United States, Canada, India and the UAE, from offices in {offices.map((o) => o.city).join(", ").replace(/, ([^,]*)$/, " and $1")}.</div>
            </div>
            {carVals.map((v) => (
              <div className="life-card" key={v.t}>
                <div className="life-eyb">{v.k}</div>
                <h3 className="life-h">{v.t}</h3>
                <div className="life-p">{v.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="hiring">
        <div className="wrap">
          <span className="eyebrow light">Getting started</span>
          <h2 className="section-h2 gs" style={{ marginTop: 18, marginBottom: 0, color: "var(--text)", maxWidth: 640 }}>How we hire — <em>four honest steps.</em></h2>
          <p className="gs" style={{ maxWidth: 540, marginTop: 18, fontSize: "var(--fz5)", color: "var(--text2)", lineHeight: 1.7, fontWeight: 400 }}>The same process for every role. No take-home tests, no twelve-round gauntlets — just real conversations about real work.</p>
          {/* The home page's process timeline, horizontal — see HiringTimeline. */}
          <HiringTimeline steps={hireSteps} />
        </div>
      </section>

      {/* CLOSING ASK — replaces the mint "Build with us" card, the most
          saturated thing on the site. Same dark band as Search Jobs' close. */}
      <section className="sj-cta inv">
        <div className="sj-cta-in">
          <div className="sj-cta-eyb">Build with us</div>
          <h2>Do the best work of <em>your career.</em></h2>
          <p>We&apos;re after people who pair real craft with genuine care — recruiters, account managers and the business development team behind them.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="btn-hp" href={routes.openPositions}>Join the team <Arrow /></Link>
            <a className="btn-hg" href={routes.contactUs} data-hire="seeker">Send us your CV</a>
          </div>
        </div>
      </section>
    </>
  );
}
