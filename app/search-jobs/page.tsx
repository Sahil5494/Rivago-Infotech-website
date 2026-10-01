import Link from "next/link";
import type { Metadata } from "next";
import { routes, firm } from "@/lib/routes";
import SearchJobsSearch from "./SearchJobsSearch";

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

/* Step 01 was titled "Search" over a paragraph about getting a reply to your
   application, and step 03 was "Start Your Assignment" — contract-only
   wording, in title case, on a page that also covers permanent roles. */
const steps = [
  { n: "01", t: "Apply", d: "Every application gets a human reply inside two business days, including the nos. You will know the client, the team and the range before you decide whether to interview." },
  { n: "02", t: "Prepare", d: "Your recruiter has hired in your field for years. They will tell you who is on the panel, what they actually probe for, where the last candidate came unstuck, and what number to hold." },
  { n: "03", t: "Start", d: "On contract, we run onboarding, payroll, timesheets and compliance, and check in at week one, month one and before every renewal. On a permanent hire, we check in at three, six and twelve months — so nothing lands on you by surprise." },
];

const values = [
  { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2l2.2 4.4 4.8.7-3.5 3.4.8 4.8L11 13l-4.3 2.3.8-4.8L4 7.1l4.8-.7z" stroke="var(--accent)" strokeWidth="1.4" strokeLinejoin="round" /></svg>, t: "We say no on your behalf", d: "You only ever see roles worth your time. We decline briefs that do not fit you — and we will talk you out of a bad move, even when the fee says otherwise." },
  { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="3.5" stroke="var(--accent)" strokeWidth="1.4" /><path d="M4 19c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" /></svg>, t: "A specialist, not a coordinator", d: "The person who calls you has recruited in your discipline for years. They can read your CV properly, and they negotiate for you personally — no handoffs." },
  { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M5 11l4 4 8-9" stroke="var(--accent)" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>, t: "Feedback inside 48 hours", d: "After every interview you get the client's real words — good or bad. If it is a no, you hear why in time to use it, not three weeks later." },
  { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 19s-7-4.2-7-9a4 4 0 017-2.6A4 4 0 0118 10c0 4.8-7 9-7 9z" stroke="var(--accent)" strokeWidth="1.4" strokeLinejoin="round" /></svg>, t: "Paid right, paid on time", d: "Accurate payroll every cycle, benefits from day one on qualifying assignments, and a named person who answers the phone when something is wrong." },
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

          It keeps what the previous cards got wrong fixed: content height, not
          78vh; on the 1240px column with the logo and the sections below, so
          the page-switch arrows never sit on it. The page opens on a light
          frame, so the nav stays solid, as on Resources. */}
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

      <section className="sj-steps">
        <div className="sj-in">
          <div className="eyb">What actually happens</div>
          <h2>No black holes.<br />No <em>disappearing acts.</em></h2>
          <p className="lede">Most applications vanish. Here is what we commit to instead, in writing, every time.</p>
          <div className="sj-step-grid">
            {steps.map((s) => (
              <div className="sj-step" key={s.n}>
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

      {/* "ASK THE PEOPLE WHO TOOK THE JOB" stood here: three quotes signed only
          with initials, a job title and a city — "Offer in eleven days", "so I
          let them place me twice more". Nobody gave them. Removed with every
          other unattributed testimonial on the site; a band like this belongs
          back here once placed candidates agree to be quoted. */}

      <section className="sj-cta">
        <div className="sj-cta-in">
          <div className="sj-cta-eyb">Your next move</div>
          <h2>Ready to take the<br /><em>next step?</em></h2>
          {/* Was "Join thousands of professionals". The firm's own figure is
              firm.hiresPlaced in lib/routes.ts. */}
          <p>{firm.hiresPlaced} hires placed so far — every role briefed by the hiring manager, every candidate represented by a specialist.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="btn-dark" href={routes.viewJobs}>Browse all jobs <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
            <Link className="btn-darkghost" href={routes.contactUs}>Talk to us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
