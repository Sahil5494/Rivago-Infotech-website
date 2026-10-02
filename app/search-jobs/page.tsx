import Link from "next/link";
import type { Metadata } from "next";
import { routes, firm, sentenceList } from "@/lib/routes";
import { JOBS, regionOf, placeLabel } from "@/app/view-jobs/jobs-data";
import SearchJobsSearch from "./SearchJobsSearch";
import PlacedRail from "./PlacedRail";
import Faq, { type FaqItem } from "@/components/Faq";
import SharedValues from "@/components/SharedValues";
import HiringTimeline from "@/components/HiringTimeline";
import { ogBase } from "@/lib/og";

export const metadata: Metadata = {
  title: "Search Jobs — Tech, Finance, Healthcare & More | Rivago Infotech",
  description: "Search open contract, contract-to-hire and permanent roles from Rivago Infotech's client network — technology, finance, healthcare, operations and more across the US, Canada and the UAE. Search by title, keyword or location.",
  alternates: { canonical: "https://rivagoinfotech.com/search-jobs" },
  openGraph: {
    ...ogBase,
    title: "Search Jobs — Tech, Finance, Healthcare & More | Rivago Infotech",
    description: "Search open contract, contract-to-hire and permanent roles from Rivago Infotech's client network across the US, Canada and the UAE.",
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
  { n: "01", t: "Search", d: "Search by title, skill or city, or browse by sector and market. Every listing shows the work style and the engagement type — and the pay, wherever the client has shared it — so you can rule a role in or out before you apply." },
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
/* Markets that actually have roles on the board, not the firm's full list
   (marketsSentence) — India's roles were removed, so the lede must not say
   there are roles there. */
const MARKET_NAME: Record<string, string> = { US: "the United States", Canada: "Canada", UAE: "the UAE", India: "India" };
const JOB_MARKETS = sentenceList(BY_MARKET.map(([m]) => MARKET_NAME[m] || m));
const posted = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" });
const boardLink = (q: Record<string, string>) => `${routes.viewJobs}?${new URLSearchParams(q)}`;

/* Candidate FAQ — questions chosen from the ones candidates actually ask
   (apply, what happens next, cost, roles, locations, visas, no fit) —
   seven, after updates and evaluation were folded into "what happens
   next" and the steps section. Replaces "How we work", whose four cards repeated the
   steps above (specialist recruiter, reply times, payroll). Its one idea
   not said elsewhere, "we say no on your behalf", now closes the steps
   lede.

   Answers restate what the site already commits to, or general facts about
   engagement types. Confirmed by the firm (October 2026): candidates are
   never charged, and Rivago does not sponsor visas or work permits. Pay
   frequency and W-2 / C2C are deliberately not stated — unconfirmed. */
const faqItems: FaqItem[] = [
  /* Points at the CV form, not the board's Apply button: Apply opens a
     log-in gate whose forms send nothing (app/sign-in/SignInCard.tsx), so
     the CV form is the only route that reaches the firm today. Revisit
     this answer when Apply is wired up. */
  { q: "How do I apply for a role?", a: "Find the role on the jobs board, then use \u201cSend us your CV\u201d at the bottom of this page and tell us which role it is. You can apply for as many roles as fit you — your recruiter will tell you which are the strongest match." },
  { q: "What happens after I apply?", a: "A recruiter who hires in your field reads your application and replies inside two business days, including when the answer is no. If there is a fit, they call you to talk through the role: the client, the team, who you would report to and what it pays. Nothing goes to a client until you have seen the brief and said yes, and after every interview you hear the client\u2019s feedback, good or bad." },
  { q: "Do I pay anything to work with Rivago?", a: "No. Our fee is paid by the company that hires you. There is no charge to apply, to be represented, or to be placed." },
  { q: "What kinds of roles do you recruit for?", a: "Technology, finance, healthcare, operations, sales and marketing, people, product, design, legal, research and executive roles. Each is one of three types: contract (a set period, working through Rivago), contract-to-hire (contract first, with the option of a permanent offer), or direct hire (on the client\u2019s payroll from day one). Every listing says which." },
  { q: "Which locations do you hire for?", a: "Roles are in the United States, Canada and the UAE — on-site, hybrid and remote. Search by city, region or country, or filter the jobs board by market." },
  { q: "Do you sponsor visas or work permits?", a: "No. Rivago does not sponsor visas or work permits, so you will need current authorisation to work in the country where the role is based. Tell us your status when you apply, and your recruiter will only put you forward for roles where it works." },
  { q: "There is no role that fits me right now. What should I do?", a: "Send us your CV anyway. Your recruiter can match you to new roles as they are briefed, so you do not have to keep checking back." },
];


const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function SearchJobsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* FAQPage, built from the same items the accordion renders, so the
          two cannot disagree. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

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
      {/* Hero pins and "Latest openings" slides up over it — the home
          page's mechanism (.ov-scope / .ov-over). */}
      <div className="ov-scope">
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

      <section className="sj-open ov-over">
        <div className="sj-in">
          <div className="sj-open-top">
            <div>
              <div className="eyb">Open now</div>
              <h2>Latest <em>openings.</em></h2>
              <p className="lede">{JOBS.length} open roles across {JOB_MARKETS}. Below, the newest in each sector.</p>
            </div>
            <Link className="sj-open-all" href={routes.viewJobs}>Browse all {JOBS.length} roles <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
          </div>
          <ul className="sj-jobs">
            {LATEST.map((j) => (
              <li key={`${j.t}|${j.c}`}>
                <Link className="sj-job" href={boardLink({ q: j.t, l: j.c.split(",")[0] })}>
                  <span className="sj-job-dept">{j.dept}</span>
                  <h3 className="sj-job-t">{j.t}</h3>
                  <span className="sj-job-meta">{placeLabel(j.c)} · {j.w} · Posted {posted(j.d)}</span>
                  {/* Same footer pattern as the Careers role cards: terms on the
                      left, a visible way in on the right. */}
                  <span className="sj-job-foot"><span>{j.e}</span>{j.p && <span className="sj-job-pay">{j.p}</span>}<span className="sj-job-go">View details <svg aria-hidden="true" width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span></span>
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
      </div>{/* /.ov-scope */}

      <section className="sj-steps">
        <div className="sj-in">
          <div className="eyb">What actually happens</div>
          <h2>No black holes.<br />No <em>disappearing acts.</em></h2>
          <p className="lede">Most applications vanish. Here is what we commit to instead, in writing, every time — and if a role is wrong for you, we will tell you so.</p>
          {/* The Careers page's "How we hire" timeline (HiringTimeline), so the
              two pages explain their process the same way. It replaced three
              heavy dark cards that stacked to ~1,500px on phones. */}
          <HiringTimeline steps={steps} />
        </div>
      </section>

      {/* Values before proof: what we stand for, then the people placed
          who back it up, then the FAQ and the ask. On the plain ground
          with a rule, not cream — it follows "What actually happens",
          which is cream, and two cream bands ran together as one. */}
      <SharedValues tone="plain" lede="The four things every recruiter here is held to — and what you can expect from us when we represent you." />

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

      {/* Two columns on this page only: heading, lede and a way out on the
          left (sticky while the list scrolls), the questions on the right in
          one list. The questions are not split across two columns — an
          opened answer would make one column taller than the other, and the
          reading order would be unclear. Stacks below 900px. */}
      <section className="faq-sec sj-faq">
        <div className="sj-in sj-faq-grid">
          <div className="sj-faq-side">
            <div className="eyebrow ew-light gs">Candidate FAQ</div>
            <h2 className="section-h2 gs">Before you <em>apply.</em></h2>
            <p className="sj-faq-lede gs">The questions candidates ask us most.</p>
            {/* Email, at the firm's request. "Your Rivago Talent account" from
                the supplied copy became "an application": accounts do not
                exist yet (Sign in sends nothing), so it named something a
                candidate cannot have. Put it back when accounts go live. */}
            <div className="sj-faq-more gs">
              <span className="sj-faq-more-t">Have another question?</span>
              <span className="sj-faq-more-d">If you need help with an application, or just have a general question, email us at <a className="sj-faq-mail" href="mailto:questions@rivagoinfotech.com">questions@rivagoinfotech.com</a>.</span>
              <a className="sj-faq-btn" href="mailto:questions@rivagoinfotech.com">Send an email <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
            </div>
          </div>
          <div className="sj-faq-list">
            <Faq items={faqItems} />
          </div>
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
            <Link className="btn-hp" href={routes.viewJobs}>Browse all jobs <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
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
