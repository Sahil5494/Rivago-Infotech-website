import Link from "next/link";
import type { Metadata } from "next";
import { routes, firm, marketsSentence } from "@/lib/routes";
import { JOBS, regionOf } from "@/app/view-jobs/jobs-data";
import SearchJobsSearch from "./SearchJobsSearch";
import PlacedRail from "./PlacedRail";
import Faq, { type FaqItem } from "@/components/Faq";
import SharedValues from "@/components/SharedValues";

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

/* Candidate FAQ — replaces "How we work", whose four cards repeated the
   steps above (specialist recruiter, reply times, payroll). Its one idea
   not said elsewhere, "we say no on your behalf", now closes the steps
   lede.

   Answers restate what the site already commits to, or general facts about
   engagement types. Confirmed by the firm (October 2026): candidates are
   never charged, and Rivago does not sponsor visas or work permits. Pay
   frequency and W-2 / C2C are deliberately not stated — unconfirmed. */
const faqItems: FaqItem[] = [
  { q: "Do I pay anything to work with Rivago?", a: "No. Our fee is paid by the company that hires you. There is no charge to apply, to be represented, or to be placed." },
  { q: "What is the difference between contract, contract-to-hire and direct hire?", a: "Contract roles run for a set period, and you work through Rivago while you are on assignment. Contract-to-hire starts the same way, with the option for the client to take you on as a permanent employee later. Direct hire means you join the client's payroll as a permanent employee from day one. Every listing on the board shows which one it is, and you can filter by it." },
  { q: "How quickly will I hear back after applying?", a: "Every application gets a reply from a person inside two business days — including when the answer is no." },
  { q: "Can I apply for more than one role?", a: "Yes. Apply for every role that fits. Your recruiter will talk you through which are the strongest match before anything goes to a client." },
  { q: "Do you sponsor visas or work permits?", a: "No. Rivago does not sponsor visas or work permits, so you will need current authorisation to work in the country where the role is based. Tell us your status when you apply, and your recruiter will only put you forward for roles where it works." },
  { q: "Who pays me on a contract role?", a: "On contract, Rivago runs your onboarding, payroll and timesheets, so you are paid by us — and you have a named person to call if anything is wrong." },
  { q: "What if none of the open roles fit me?", a: "Send us your CV anyway. Your recruiter can match you to new roles as they are briefed, so you do not have to keep checking back." },
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
          <p className="lede">Most applications vanish. Here is what we commit to instead, in writing, every time — and if a role is wrong for you, we will tell you so.</p>
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

      <SharedValues />

      <section className="faq-sec">
        <div className="faq-inner">
          <div style={{ textAlign: "center" }}>
            <div className="eyebrow ew-light gs" style={{ margin: "0 auto 16px" }}>Candidate FAQ</div>
            <h2 className="section-h2 gs" style={{ color: "var(--text)", marginBottom: 0 }}>Before you <em>apply.</em></h2>
          </div>
          <Faq items={faqItems} />
        </div>
      </section>

      <section className="sj-cta inv">
        <div className="sj-cta-in">
          <div className="sj-cta-eyb">Your next move</div>
          <h2>Ready to take the<br /><em>next step?</em></h2>
          {/* Dark, like the home page's closing CTA: it follows two pale bands
              (values, FAQ), and a third pale band let the page's last ask
              blend into them. Buttons are the home CTA's pair, btn-hp and
              btn-hg; the old btn-darkghost had an 11px radius against the
              site's pill.
              Was "Join thousands of professionals". The firm's own figure is
              firm.hiresPlaced in lib/routes.ts. */}
          <p>{firm.hiresPlaced} hires placed so far — every role briefed by the hiring manager, every candidate represented by a specialist.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="btn-hp" href={routes.viewJobs}>Browse all jobs <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
            {/* Was "Talk to us" -> /contact-us, a page written for clients.
                A candidate who has not found their role needs a way to be
                found: this opens the CV form (data-hire="seeker"). The href is
                the no-JS fallback. */}
            <a className="btn-hg" href={routes.contactUs} data-hire="seeker">Send us your CV</a>
          </div>
        </div>
      </section>
    </>
  );
}
