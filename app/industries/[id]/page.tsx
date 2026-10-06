import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { routes, industryHref, servedMarkets, offices, sentenceList } from "@/lib/routes";
import { practices, spine } from "../data";
import { sectorExtras } from "../sector-data";
import { JOBS, placeLabel, regionOf } from "@/app/view-jobs/jobs-data";
import { placements, featuredPlacements } from "@/lib/placements";
import LogoMarquee from "@/components/LogoMarquee";
import PlacedRail from "@/app/search-jobs/PlacedRail";
import Faq, { type FaqItem } from "@/components/Faq";
import HiringTimeline from "@/components/HiringTimeline";
import { ogBase } from "@/lib/og";

/* One page per practice, built at compile time from the same data as the
 * /industries hub — the practice's own copy and roles, its live roles on
 * the job board, its placements, and the firm-wide process. Every figure on
 * the page (open roles, remote share, engagement mix, markets) is counted
 * from the board, and the FAQ answers are built from those counts and from
 * answers the site already gives elsewhere, so nothing is written for a
 * sector that the data does not show. An id that is not a practice is a 404.
 *
 * Running order: hero (with the practice's own figures), client marks,
 * roles (core first, then leadership), latest openings, placed candidates,
 * how a search runs, FAQ, closing brief CTA, and a slim row of links to
 * the other practices. "What we put in writing" is not repeated here; it
 * stays on the hub. */
export const dynamicParams = false;

export function generateStaticParams() {
  return practices.map((p) => ({ id: p.id }));
}

const BASE = "https://rivagoinfotech.com";
const find = (id: string) => practices.find((p) => p.id === id);

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const p = find(id);
  if (!p) return {};
  const title = `${p.navLabel} recruitment · Rivago Infotech`;
  const description = sectorExtras[p.id]?.lede ?? p.lede;
  const url = `${BASE}${industryHref(p.id)}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { ...ogBase, title, description, url },
  };
}

const Arrow = () => (
  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const posted = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" });
const boardLink = (q: [string, string][]) => `${routes.viewJobs}?${new URLSearchParams(q)}`;
const plural = (n: number, one: string, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;
const MARKET_NAME: Record<string, string> = { US: "the United States", Canada: "Canada", UAE: "the UAE", India: "India" };

export default async function SectorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = find(id);
  if (!p) notFound();

  const extra = sectorExtras[p.id] ?? { jobDepts: [], core: [] };
  const jobs = JOBS.filter((j) => extra.jobDepts.includes(j.dept)).sort((a, b) => b.d.localeCompare(a.d));
  const latest = jobs.slice(0, 6);
  const allHref = boardLink(extra.jobDepts.map((d) => ["dept", d]));
  const others = practices.filter((o) => o.id !== p.id);
  const sector = p.navLabel.toLowerCase();
  const lede = extra.lede ?? p.lede;

  /* The practice's own figures, counted from the board. */
  const count = (f: (j: (typeof jobs)[number]) => boolean) => jobs.filter(f).length;
  const remote = count((j) => j.w === "Remote");
  const hybrid = count((j) => j.w === "Hybrid");
  const onsite = count((j) => j.w === "On-Site");
  const contract = count((j) => j.e === "Contract");
  const c2h = count((j) => j.e === "Contract-to-hire");
  const direct = count((j) => j.e === "Direct hire");
  const markets = [...new Set(jobs.map((j) => regionOf(j.c)))];

  /* Placed candidates: the featured six first, then everyone else with a role. */
  const placed = extra.placed
    ? [
        ...featuredPlacements.map((n) => placements.find((x) => x.name === n)).filter((x): x is (typeof placements)[number] => Boolean(x)),
        ...placements.filter((x) => x.role && !featuredPlacements.includes(x.name)),
      ]
    : [];

  /* FAQ — each answer is a count from the board or an answer the site
     already gives (Search Jobs FAQ, the brief form's reply time). */
  const faq: FaqItem[] = [
    {
      q: `What ${sector} roles do you recruit for?`,
      a: extra.core.length
        ? `Most of our ${sector} hiring falls into these families: ${extra.core.join("; ")}. We also run leadership searches: ${p.roles.join("; ")}.`
        : `Leadership and senior specialist searches: ${p.roles.join("; ")}. Send us a brief for anything else in the sector and we will tell you plainly whether it is a search we can run well.`,
    },
    ...(jobs.length
      ? [
          {
            q: "Do you place contract, contract-to-hire and permanent roles?",
            a: `All three. Of the ${plural(jobs.length, `open ${sector} role`)} on our job board today, ${contract} are contract, ${c2h} contract-to-hire and ${direct} direct hire (on the client\u2019s payroll from day one). Every listing says which.`,
          },
          {
            q: "Are the roles remote?",
            a: `Many are. Of the ${jobs.length} open today, ${remote} are remote, ${hybrid} hybrid and ${onsite} on-site. You can filter the job board by work style.`,
          },
          {
            q: "Where are the roles based?",
            a: `${sentenceList(markets.map((m) => MARKET_NAME[m] || m)).replace(/^the/, "The")}. Search the job board by city, region or country, or filter by market.`,
          },
        ]
      : []),
    {
      q: `How do I start a search in ${sector}?`,
      a: `Submit a brief from this page. A partner in our ${sector} practice reads it and replies within one business day.`,
    },
    {
      q: "I\u2019m a candidate. How do I apply?",
      a: jobs.length
        ? "Find the role on the job board, then send us your CV from the Search Jobs page and tell us which role it is. There is no charge to apply, to be represented or to be placed \u2014 our fee is paid by the hiring company."
        : "Send us your CV from the Search Jobs page and tell us the kind of role you want. There is no charge to apply, to be represented or to be placed \u2014 our fee is paid by the hiring company.",
    },
    {
      q: "Do you sponsor visas or work permits?",
      a: "No. Rivago does not sponsor visas or work permits, so candidates need current authorisation to work in the country where the role is based.",
    },
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
      { "@type": "ListItem", position: 2, name: "Industries", item: `${BASE}${routes.industries}` },
      { "@type": "ListItem", position: 3, name: p.navLabel, item: `${BASE}${industryHref(p.id)}` },
    ],
  };
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${p.navLabel} recruitment`,
    serviceType: "Recruitment and staffing",
    description: lede,
    provider: { "@id": `${BASE}/#organization` },
    areaServed: servedMarkets.map((m) => ({ "@type": "Country", name: m === "UAE" ? "United Arab Emirates" : m })),
    url: `${BASE}${industryHref(p.id)}`,
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  /* Bands alternate light/dark. With no openings and no placements between
     them, roles and the timeline would both be white, so the lower half
     shifts to the pale ground. */
  const thin = latest.length === 0 && placed.length === 0;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── 1 · HERO ── with the practice's own figures where the board has
          them; the firm's markets and offices where it does not. */}
      <header className="page-hero inv">
        <div className="page-hero-inner">
          <div className="crumbs">
            <Link href={routes.home}>Home</Link><span className="crumbs-sep">/</span>
            <Link href={routes.industries}>Industries</Link><span className="crumbs-sep">/</span>
            <span>{p.navLabel}</span>
          </div>
          <div className="eyebrow ew-light gs" style={{ marginBottom: 28, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Industries · {p.navLabel}</div>
          <h1 className="gs">
            {extra.title ? (
              <>{extra.title.top}<br /><em>{extra.title.em}</em></>
            ) : (
              <>
                {p.titleTop}<br />
                {"titleMid" in p && p.titleMid ? `${p.titleMid} ` : ""}
                <em>{p.titleEm}</em>
              </>
            )}
          </h1>
          <p className="lead gs" style={{ marginTop: 24 }}>{lede}</p>
          <div className="sec-hero-btns gs">
            <button type="button" className="btn btn-prim" data-hire>Submit a brief <Arrow /></button>
            {jobs.length > 0 ? (
              <Link className="btn btn-ghost" href={allHref}>See {plural(jobs.length, "open role")}</Link>
            ) : (
              <Link className="btn btn-ghost" href={routes.industries}>All industries</Link>
            )}
          </div>
          {jobs.length > 0 ? (
            <div className="page-hero-meta sec-meta gs">
              <div className="page-hero-meta-row"><span>Open roles</span><strong>{jobs.length}</strong></div>
              <div className="page-hero-meta-row"><span>Remote</span><strong>{remote}</strong></div>
              <div className="page-hero-meta-row"><span>Contract &amp; C2H</span><strong>{contract + c2h}</strong></div>
              <div className="page-hero-meta-row"><span>Direct hire</span><strong>{direct}</strong></div>
            </div>
          ) : (
            <div className="page-hero-meta sec-meta gs">
              <div className="page-hero-meta-row"><span>Markets</span><strong>{servedMarkets.length}</strong></div>
              <div className="page-hero-meta-row"><span>Offices</span><strong>{offices.length}</strong></div>
            </div>
          )}
        </div>
      </header>

      {/* ── 2 · CLIENT MARKS ── the approved strip shared with Home and About. */}
      <section className="sec-logos" aria-label="Teams we recruit for">
        <div className="clients-label">Teams we recruit for</div>
        <LogoMarquee />
      </section>

      {/* ── 3 · ROLES ── core roles first (where the volume is), then
          leadership. */}
      <section className="section lt sec-roles">
        <div className="wrap">
          <div className="eyebrow ew-light gs" style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>What we recruit</div>
          <h2 className="section-h2 gs sec-h">Roles in this <em>practice.</em></h2>
          <div className={`sec-roles-grid${extra.core.length ? "" : " one"}`}>
            {extra.core.length > 0 && (
              <div className="sec-roles-col gs">
                <h3 className="sec-roles-l">Core roles we fill</h3>
                <ul className="sec-roles-list">{extra.core.map((r) => <li key={r}>{r}</li>)}</ul>
              </div>
            )}
            <div className="sec-roles-col gs">
              <h3 className="sec-roles-l">Leadership</h3>
              <ul className="sec-roles-list">{p.roles.map((r) => <li key={r}>{r}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 · LATEST OPENINGS ── Search Jobs' card. Left out where the
          board has none. */}
      {latest.length > 0 && (
        <section className="sj-open sec-open">
          <div className="sj-in">
            <div className="sj-open-top">
              <div>
                <div className="eyb">Open now</div>
                <h2>Latest {sector} <em>openings.</em></h2>
                <p className="lede">{plural(jobs.length, "open role")} in this practice. Below, the newest.</p>
              </div>
              <Link className="sj-open-all" href={allHref}>See all {jobs.length} <Arrow /></Link>
            </div>
            <ul className="sj-jobs">
              {latest.map((j) => (
                <li key={`${j.t}|${j.c}`}>
                  <Link className="sj-job" href={boardLink([["q", j.t], ["l", j.c.split(",")[0]]])}>
                    {/* Every card on a sector page is in that sector, so the
                        top line carries the work style instead, and "View
                        details" says where it actually goes. */}
                    <span className="sj-job-dept">{j.w}</span>
                    <h3 className="sj-job-t">{j.t}</h3>
                    <span className="sj-job-meta">{placeLabel(j.c)} · Posted {posted(j.d)}</span>
                    <span className="sj-job-foot"><span>{j.e}</span>{j.p && <span className="sj-job-pay">{j.p}</span>}<span className="sj-job-go">View on job board <Arrow /></span></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── 5 · RECENTLY PLACED ── real placements from lib/placements.ts,
          in Search Jobs' carousel. Only where the practice has them. */}
      {placed.length > 0 && (
        <section className="sj-placed inv">
          <div className="sj-in">
            <div className="sj-placed-head">
              <div className="eyb">Placed by Rivago</div>
              <h2>Recently <em>placed.</em></h2>
              <p className="lede">Some of the {sector} people who found their next role through us.</p>
            </div>
            <PlacedRail people={placed} />
          </div>
        </section>
      )}

      {/* ── 6 · HOW A SEARCH RUNS ── the firm-wide five stages. */}
      <section className={`section lt sec-spine${thin ? " alt" : ""}`}>
        <div className="wrap">
          <div className="eyebrow ew-light gs" style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>How a search runs</div>
          <h2 className="section-h2 gs sec-h">The same five stages, <em>in every practice.</em></h2>
          <HiringTimeline steps={spine.map(([, t, d], k) => ({ n: String(k + 1), t, d }))} />
        </div>
      </section>

      {/* ── 7 · FAQ ── two columns like Search Jobs: heading on the left,
          questions on the right. */}
      <section className={`faq-sec sj-faq sec-faq${thin ? " alt" : ""}`}>
        <div className="sj-in sj-faq-grid">
          <div className="sj-faq-side">
            <div className="eyebrow ew-light gs">{p.navLabel} FAQ</div>
            <h2 className="section-h2 gs">Questions about <em>{sector} hiring.</em></h2>
            <p className="sj-faq-lede gs">For hiring teams and candidates alike.</p>
          </div>
          <div className="sj-faq-list">
            <Faq items={faq} />
          </div>
        </div>
      </section>

      {/* ── 8 · CTA ── */}
      <section className="clients-cta gs inv">
        <h2>Hiring in <em>{sector}?</em></h2>
        <p>Send the brief. A partner in our {sector} practice reads it and replies within one business day.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button type="button" className="btn btn-prim" data-hire>Submit a brief <Arrow /></button>
          <Link className="btn btn-ghost" href={routes.industries}>All industries</Link>
        </div>
      </section>

      {/* ── 9 · OTHER PRACTICES ── a slim row above the footer, so the page
          ends on the call to action rather than on navigation. */}
      <nav className="sec-others" aria-label="Other practices">
        <div className="sec-others-in">
          <span className="sec-others-l">Other practices</span>
          <ul className="sec-others-list">
            {others.map((o) => (
              <li key={o.id}><Link href={industryHref(o.id)}>{o.navLabel}</Link></li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
