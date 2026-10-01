import Link from "next/link";
import type { Metadata } from "next";
import { routes, firm, marketsSentence } from "@/lib/routes";
import { JOBS, regionOf } from "@/app/view-jobs/jobs-data";
import SearchJobsSearch from "./SearchJobsSearch";
import PlacedRail from "./PlacedRail";

export const metadata: Metadata = {
  title: "Search Jobs — Tech, Finance, Healthcare & More | Rivago Infotech",
  description: "Search open contract, contract-to-hire and permanent roles from Rivago Infotech's client network — technology, finance, healthcare, operations and more across the US, Canada, the UAE and India. Search by title, keyword or location and apply in minutes.",
  alternates: { canonical: "https://rivagoinfotech.com/search-jobs" },
  openGraph: {
    title: "Search Jobs — Tech, Finance, Healthcare & More | Rivago Infotech",
    description: "Search open contract, contract-to-hire and permanent roles from Rivago Infotech's client network across the US, Canada, the UAE and India.",
    url: "https://rivagoinfotech.com/search-jobs",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rivagoinfotech.com/" },
    { "@type": "ListItem", position: 2, name: "Careers", item: "https://rivagoinfotech.com/career" },
    { "@type": "ListItem", position: 3, name: "Search Jobs", item: "https://rivagoinfotech.com/search-jobs" },
  ],
};

/* Each paragraph now describes the step its title names. Every promise in
   them was already on the site — the two-day reply, the recruiter briefing,
   the contract check-ins — and the details listed under Search are fields
   every job on the board carries. */
const steps = [
  { n: "01", t: "Search", d: "Search by title, skill or city, or browse by sector and market. Every listing shows the work style, the engagement type and the pay up front, so you can rule a role in or out before you apply." },
  { n: "02", t: "Connect", d: "Apply in minutes, and a recruiter who has hired in your field replies inside two business days — including the nos. Before any interview, they tell you who is on the panel, what they probe for and what number to hold." },
  { n: "03", t: "Start Your Assignment", d: "We run onboarding, payroll, timesheets and compliance. Then we check in at week one, at month one, and before every renewal — so nothing lands on you by surprise." },
];

/* ── "OPEN NOW" — derived from the jobs board's own data at build time, so
   it cannot drift from /view-jobs. A page called Search Jobs used to show no
   jobs at all below its search box. */
/* The newest role in each sector, newest first. Straight "six newest" was
   six Technology roles, since Technology is 96 of the 240. */
const LATEST = [...JOBS]
  .sort((a, b) => (a.d < b.d ? 1 : a.d > b.d ? -1 : 0))
  .filter((j, i, all) => all.findIndex((k) => k.dept === j.dept) === i)
  .slice(0, 6);
const countBy = (key: (j: (typeof JOBS)[number]) => string) => {
  const m = new Map<string, number>();
  JOBS.forEach((j) => m.set(key(j), (m.get(key(j)) || 0) + 1));
  return [...m.entries()].sort((a, b) => b[1] - a[1]);
};
const BY_SECTOR = countBy((j) => j.dept);
const BY_MARKET = countBy((j) => regionOf(j.c));
const boardLink = (q: Record<string, string>) => `${routes.viewJobs}?${new URLSearchParams(q)}`;
const posted = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" });

const values = [
  { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2l2.2 4.4 4.8.7-3.5 3.4.8 4.8L11 13l-4.3 2.3.8-4.8L4 7.1l4.8-.7z" stroke="var(--accent)" strokeWidth="1.4" strokeLinejoin="round" /></svg>, t: "We say no on your behalf", d: "You only ever see roles worth your time. We will not put a role in front of you that does not fit — and we will talk you out of a bad move, even when the fee says otherwise." },
  { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="3.5" stroke="var(--accent)" strokeWidth="1.4" /><path d="M4 19c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" /></svg>, t: "A specialist, not a coordinator", d: "The person who calls you has recruited in your discipline for years. They can read your CV properly, and they negotiate for you personally — no handoffs." },
  { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M5 11l4 4 8-9" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>, t: "Feedback inside 48 hours", d: "After every interview you get the client's real words — good or bad. If it is a no, you hear why in time to use it, not three weeks later." },
  { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 19s-7-4.2-7-9a4 4 0 017-2.6A4 4 0 0118 10c0 4.8-7 9-7 9z" stroke="var(--accent)" strokeWidth="1.4" strokeLinejoin="round" /></svg>, t: "Paid right, paid on time", d: "Accurate payroll every cycle, and a named person who answers the phone when something is wrong." },
];

export default function SearchJobsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* The hero is a card on purpose — an inset panel rather than the
          full-width band the other pages open on — in the site's own dark
          palette: the #0A1A0C-to-#030C05 ground and soft green glow the dark
          sections use. .inv puts everything inside on the dark-theme tokens, so
          the type, search bar and chips take the same values as every other
          dark section.

          It fills the section — edge to edge inside a thin light rim, and the
          first screen below the nav — with the content centred in it. The
          page opens on that light rim, so the nav stays solid, as on
          Resources. */}
      <section className="sj-hero">
        <div className="sj-card inv">
          <div className="sj-card-in">
            <div className="crumbs sj-crumbs"><Link href={routes.home}>Home</Link><span className="crumbs-sep">/</span><Link href={routes.career}>Careers</Link><span className="crumbs-sep">/</span><span>Search Jobs</span></div>
            <span className="sj-eyb"><span>Live roles<span className="sj-eyb-more"> &middot; Briefed by the hiring manager</span></span></span>
            <h1>Find the right <em>opportunity for you.</em></h1>
            <p className="sj-lede">Every role we represent is briefed to us directly by the person doing the hiring. So before you interview, we can tell you who you would report to, why the seat is open, and what it actually pays.</p>
            <SearchJobsSearch />
          </div>
        </div>
      </section>

      <section className="sj-open">
        <div className="sj-in">
          <div className="sj-open-top">
            <div>
              <div className="eyb">Open now</div>
              <h2>Latest <em>openings.</em></h2>
              <p className="lede">{JOBS.length} open roles across {marketsSentence()}. Below, the newest in each sector.</p>
            </div>
            <Link className="sj-open-all" href={routes.viewJobs}>Browse all {JOBS.length} roles <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
          </div>
          <ul className="sj-jobs">
            {LATEST.map((j) => (
              <li key={`${j.t}|${j.c}`}>
                <Link className="sj-job" href={boardLink({ q: j.t, l: j.c.split(",")[0] })}>
                  <span className="sj-job-dept">{j.dept}</span>
                  <span className="sj-job-t">{j.t}</span>
                  <span className="sj-job-meta">{j.c} · {j.w}</span>
                  <span className="sj-job-foot"><span>{j.e}</span><span>{j.p}</span><span>Posted {posted(j.d)}</span></span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="sj-browse">
            <div className="sj-browse-row">
              <span className="sj-browse-l">By sector</span>
              <div>
                {BY_SECTOR.map(([name, n]) => (
                  <Link key={name} className="sj-browse-chip" href={boardLink({ dept: name })}>{name} <b>{n}</b></Link>
                ))}
              </div>
            </div>
            <div className="sj-browse-row">
              <span className="sj-browse-l">By market</span>
              <div>
                {BY_MARKET.map(([name, n]) => (
                  <Link key={name} className="sj-browse-chip" href={boardLink({ region: name })}>{name} <b>{n}</b></Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sj-steps">
        <div className="sj-in">
          <div className="eyb">What actually happens</div>
          <h2>No black holes.<br />No <em>disappearing acts.</em></h2>
          <p className="lede">Most applications vanish. Here is what we commit to instead, in writing, every time.</p>
          <div className="sj-step-grid">
            {steps.map((s) => (
              <div className="sj-step inv" key={s.n}>
                <div className="sj-step-n">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sj-vals">
        <div className="sj-in">
          <div className="eyb">How we work</div>
          <h2>Four things we do<br />that <em>most agencies will not.</em></h2>
          <div className="sj-val-grid">
            {values.map((v) => (
              <div className="sj-val" key={v.t}>
                <div className="sj-val-ic">{v.icon}</div>
                <h3>{v.t}</h3>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real placements, supplied by the firm (lib/placements.ts), in a
          one-row rail with arrows (PlacedRail). No quotes are attributed to
          anyone — see lib/placements.ts before adding any. The band is
          dark (.inv) so the page alternates light / dark like the home page
          between "How we work" and the cream CTA. */}
      <section className="sj-placed inv">
        <div className="sj-in">
          <div className="sj-placed-head">
            <div className="eyb">Placed by Rivago</div>
            <h2>Don&rsquo;t just take it <em>from us.</em></h2>
            <p className="lede">Some of the people who found their next role through us.</p>
          </div>
          <PlacedRail />
        </div>
      </section>

      <section className="sj-cta">
        <div className="sj-cta-in">
          <div className="sj-cta-eyb">Your next move</div>
          <h2>Ready to take the<br /><em>next step?</em></h2>
          {/* Was "Join thousands of professionals". The firm's own figure is
              firm.hiresPlaced in lib/routes.ts. */}
          <p>{firm.hiresPlaced} hires placed so far — every role briefed by the hiring manager, every candidate represented by a specialist.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="btn-dark" href={routes.viewJobs}>Browse all jobs <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
            {/* Was "Talk to us" -> /contact-us, a page written for clients.
                A candidate who has not found their role needs a way to be
                found: this opens the CV form (data-hire="seeker"). The href is
                the no-JS fallback. */}
            <a className="btn-darkghost" href={routes.contactUs} data-hire="seeker">Send us your CV</a>
          </div>
        </div>
      </section>
    </>
  );
}
