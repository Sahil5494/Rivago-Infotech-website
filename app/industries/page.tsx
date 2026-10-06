import Link from "next/link";
import type { Metadata } from "next";
import { routes, offices, servedMarkets } from "@/lib/routes";
import LogoMarquee from "@/components/LogoMarquee";
import { JOBS } from "@/app/view-jobs/jobs-data";
import IndustriesNav from "./IndustriesNav";
import HiringTimeline from "@/components/HiringTimeline";
import { practices, spine, writtenGuarantees } from "./data";
import { ogBase } from "@/lib/og";

export const metadata: Metadata = {
  title: "Industries — Rivago Infotech",
  description: "Ten specialist practices — technology, healthcare, legal, finance and more. Leadership searches and the core roles beneath them, across the US, Canada, the UAE and India.",
  alternates: { canonical: "https://rivagoinfotech.com/industries" },
  openGraph: {
    ...ogBase,
    title: "Industries — Rivago Infotech",
    description: "Ten specialist practices — technology, healthcare, legal, finance and more. Leadership searches and the core roles beneath them, across the US, Canada, the UAE and India.",
    url: "https://rivagoinfotech.com/industries",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rivagoinfotech.com/" },
    { "@type": "ListItem", position: 2, name: "Industries", item: "https://rivagoinfotech.com/industries" },
  ],
};

const Arrow = () => (
  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

/* Live roles per practice, counted from the job board at build time. */
const openFor = (depts: readonly string[]) => JOBS.filter((j) => depts.includes(j.dept)).length;
const jobsHref = (depts: readonly string[]) =>
  `${routes.viewJobs}?${new URLSearchParams(depts.map((d) => ["dept", d]))}`;


export default function IndustriesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <header className="page-hero inv">
        <div className="page-hero-inner">
          <div className="crumbs"><Link href={routes.home}>Home</Link><span className="crumbs-sep">/</span><span>Industries</span></div>
          <div className="eyebrow ew-light gs" style={{ marginBottom: 28, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Industries · {practices.length} practices</div>
          <h1 className="gs">Specialist partners,<br />aligned to the <em>sector you hire in.</em></h1>
          <p className="lead gs" style={{ marginTop: 24 }}>Every brief goes to a partner who recruits in that sector, not to whoever is free. They know the titles, the org shapes and the people who never apply through a portal.</p>

          {/* Was: 1,486 active mandates, 34 senior partners, 11 years average
              partner tenure — none of them measured. These four are counted
              from the data on this site, so they cannot drift out of true.
              "Ways to engage" gave way to open roles, which a visitor can act
              on, and the market names to a count that fits its cell. */}
          <div className="page-hero-meta gs">
            <div className="page-hero-meta-row"><span>Practices</span><strong>{practices.length}</strong></div>
            <div className="page-hero-meta-row"><span>Markets</span><strong>{servedMarkets.length}</strong></div>
            <div className="page-hero-meta-row"><span>Offices</span><strong>{offices.length}</strong></div>
            <div className="page-hero-meta-row"><span>Open roles</span><strong>{JOBS.length}</strong></div>
          </div>
        </div>

        {/* Removed: "21 days median time-to-shortlist", "94% offer-acceptance
            rate", "62k+ senior operators in the Rivago private network" and
            "91% 12-month retention of every retained placement". None were
            measured, and the meta row above already carries what is true. */}
      </header>

      {/* The approved client marks — the same strip as the home page and
          About, reading the same list from lib/routes.ts. The one piece of
          outside evidence on the site, so it sits straight under the claim. */}
      <section className="ind-logos" aria-label="Teams we recruit for">
        <div className="clients-label">Teams we recruit for</div>
        <LogoMarquee />
      </section>

      {/* The tab bar and the practices share one wrapper, so the bar stays
          pinned only while the practices are on screen and scrolls away with
          them instead of covering every heading below. */}
      <div className="ind-scope">
      <IndustriesNav />

      {/* THE PRACTICES, as one grid of cards. They were ten full-width
          alternating bands of ~600px each, holding a paragraph and four to
          six titles — 9,100px of page at desktop and 15,500px on a phone.
          Each card keeps its #id, so the footer and Hire Talent links still
          land on it. */}
      <section className="ind-practices inv">
        <div className="ind-grid">
          {practices.map((p) => {
            const core: readonly string[] = p.core;
            const depts: readonly string[] = p.jobDepts;
            const open = openFor(depts);
            return (
              <article className="ipc gs" id={p.id} key={p.id}>
                <h2 className="ipc-h">
                  {p.titleTop}<br />
                  {"titleMid" in p && p.titleMid ? `${p.titleMid} ` : ""}
                  <em>{p.titleEm}</em>
                </h2>
                <p className="ipc-lede">{p.lede}</p>

                <div className="ipc-group">
                  <h3 className="ipc-gl">Leadership</h3>
                  <ul className="ipc-chips ipc-chips-lead">{p.roles.map((r) => <li key={r}>{r}</li>)}</ul>
                </div>
                {core.length > 0 && (
                  <div className="ipc-group">
                    <h3 className="ipc-gl">Core roles we fill</h3>
                    <ul className="ipc-chips ipc-chips-core">{core.map((r) => <li key={r}>{r}</li>)}</ul>
                  </div>
                )}

                <div className="ipc-foot">
                  {open > 0 ? (
                    <Link className="ipc-link" href={jobsHref(depts)}>
                      {open} open role{open === 1 ? "" : "s"} <Arrow />
                    </Link>
                  ) : (
                    <button type="button" className="ipc-link" data-hire>Discuss a brief <Arrow /></button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
      </div>{/* /.ind-scope */}

      {/* COMMON SPINE — the same horizontal step timeline as Careers and
          Search Jobs (vertical on phones), on white so it separates from the
          pale-mint commitments band that follows. */}
      <section className="section lt ind-spine">
        <div className="wrap">
          <div className="eyebrow ew-light gs" style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>The common spine</div>
          <h2 className="section-h2 gs ind-sec-h">Ten practices.<br /><em>One search methodology.</em></h2>
          <p className="ind-sec-lede gs">Every practice runs the same five-stage process. The only thing that changes is who&apos;s on the other end of the phone — and how much they already know about your sector when they pick it up.</p>
          <HiringTimeline steps={spine.map(([, t, d], k) => ({ n: String(k + 1), t, d }))} />
        </div>
      </section>

      {/* WHAT WE PUT IN WRITING — heading and lede stacked on the left
          (they sat in two columns with the lede dropped to the bottom right),
          and the four cards two by two so their text lengths even out. On
          phones they become a swipe row. */}
      <section className="section cream lt ind-writing">
        <div className="wrap">
          <div className="eyebrow gs ind-eyb-inv"><span className="eyebrow-dot"></span>What we put in writing</div>
          <h2 className="section-h2 gs ind-sec-h">Four things we commit to<br /><em>on the first call.</em></h2>
          <p className="ind-sec-lede gs">Same in technology as in healthcare. Same in finance as in defence. The practice lead changes; the bar doesn&apos;t.</p>
          <div className="ind-gtee">
            {writtenGuarantees.map(([when, title, desc]) => (
              <div className="ind-gtee-card gs" key={title}>
                <div className="ind-gtee-when">{when}</div>
                <h3 className="ind-gtee-t">{title}</h3>
                <p className="ind-gtee-d">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The practice-level testimonials section stood here: three quotes from
          named heads of talent, GCs and CFOs, each thanking one of the invented
          practice partners by first name. Section removed rather than left
          empty — see the note on practiceTestimonials in ./data.ts. Real
          quotes, even anonymised to a sector and a country, can bring it back.
          The markup is in git history at the commit that removed it. */}

      {/* CTA */}
      <section className="clients-cta gs inv ind-cta">
        <h2>Which practice<br />are you <em>hiring into?</em></h2>
        <p>We&apos;ll put the practice lead on the line for a 30-minute scoping call. Tell us which sector to bring.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn btn-prim" data-hire>Book a scoping call <Arrow /></button>
          <Link className="btn btn-ghost" href={routes.resources}>Read our hiring guides</Link>
        </div>
      </section>
    </>
  );
}
