import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { routes, industryHref, servedMarkets, offices } from "@/lib/routes";
import { practices, spine, writtenGuarantees } from "../data";
import { sectorExtras } from "../sector-data";
import { JOBS, placeLabel } from "@/app/view-jobs/jobs-data";
import HiringTimeline from "@/components/HiringTimeline";
import { ogBase } from "@/lib/og";

/* One page per practice, built at compile time from the same data as the
 * /industries hub — the practice's own copy and roles, its live roles on
 * the job board, and the firm-wide process and commitments. Nothing on a
 * sector page is written for it alone, so the ten cannot drift from the hub
 * or from each other. An id that is not a practice is a 404. */
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
  const description = p.lede;
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

export default async function SectorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = find(id);
  if (!p) notFound();

  const extra = sectorExtras[p.id] ?? { jobDepts: [], core: [] };
  const jobs = JOBS.filter((j) => extra.jobDepts.includes(j.dept)).sort((a, b) => b.d.localeCompare(a.d));
  const latest = jobs.slice(0, 6);
  const allHref = boardLink(extra.jobDepts.map((d) => ["dept", d]));
  const others = practices.filter((o) => o.id !== p.id);

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
    description: p.lede,
    provider: { "@id": `${BASE}/#organization` },
    areaServed: servedMarkets.map((m) => ({ "@type": "Country", name: m === "UAE" ? "United Arab Emirates" : m })),
    url: `${BASE}${industryHref(p.id)}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* ── HERO ── the hub's hero, scoped to one practice. */}
      <header className="page-hero inv">
        <div className="page-hero-inner">
          <div className="crumbs">
            <Link href={routes.home}>Home</Link><span className="crumbs-sep">/</span>
            <Link href={routes.industries}>Industries</Link><span className="crumbs-sep">/</span>
            <span>{p.navLabel}</span>
          </div>
          <div className="eyebrow ew-light gs" style={{ marginBottom: 28, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Industries · {p.navLabel}</div>
          <h1 className="gs">
            {p.titleTop}<br />
            {"titleMid" in p && p.titleMid ? `${p.titleMid} ` : ""}
            <em>{p.titleEm}</em>
          </h1>
          <p className="lead gs" style={{ marginTop: 24 }}>{p.lede}</p>
          <div className="sec-hero-btns gs">
            <button type="button" className="btn btn-prim" data-hire>Submit a brief <Arrow /></button>
            {jobs.length > 0 ? (
              <Link className="btn btn-ghost" href={allHref}>See {jobs.length} open role{jobs.length === 1 ? "" : "s"}</Link>
            ) : (
              <Link className="btn btn-ghost" href={routes.industries}>All industries</Link>
            )}
          </div>
          <div className="page-hero-meta sec-meta gs">
            {jobs.length > 0 && <div className="page-hero-meta-row"><span>Open roles</span><strong>{jobs.length}</strong></div>}
            <div className="page-hero-meta-row"><span>Markets</span><strong>{servedMarkets.length}</strong></div>
            <div className="page-hero-meta-row"><span>Offices</span><strong>{offices.length}</strong></div>
          </div>
        </div>
      </header>

      {/* ── ROLES ── leadership searches, and (where the board shows them)
          the core roles beneath. */}
      <section className={`section lt sec-roles${latest.length ? "" : " alt"}`}>
        <div className="wrap">
          <div className="eyebrow ew-light gs" style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>What we recruit</div>
          <h2 className="section-h2 gs sec-h">Roles in this <em>practice.</em></h2>
          <div className={`sec-roles-grid${extra.core.length ? "" : " one"}`}>
            <div className="sec-roles-col gs">
              <h3 className="sec-roles-l">Leadership</h3>
              <ul className="sec-roles-list">{p.roles.map((r) => <li key={r}>{r}</li>)}</ul>
            </div>
            {extra.core.length > 0 && (
              <div className="sec-roles-col gs">
                <h3 className="sec-roles-l">Core roles we fill</h3>
                <ul className="sec-roles-list">{extra.core.map((r) => <li key={r}>{r}</li>)}</ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ── the newest on the board for this practice, in the
          Search Jobs card. Left out entirely where the board has none. */}
      {latest.length > 0 && (
        <section className="sj-open sec-open">
          <div className="sj-in">
            <div className="sj-open-top">
              <div>
                <div className="eyb">Open now</div>
                <h2>Latest {p.navLabel.toLowerCase()} <em>openings.</em></h2>
                <p className="lede">{jobs.length} open role{jobs.length === 1 ? "" : "s"} in this practice. Below, the newest.</p>
              </div>
              <Link className="sj-open-all" href={allHref}>See all {jobs.length} <Arrow /></Link>
            </div>
            <ul className="sj-jobs">
              {latest.map((j) => (
                <li key={`${j.t}|${j.c}`}>
                  <Link className="sj-job" href={boardLink([["q", j.t], ["l", j.c.split(",")[0]]])}>
                    <span className="sj-job-dept">{j.dept}</span>
                    <h3 className="sj-job-t">{j.t}</h3>
                    <span className="sj-job-meta">{placeLabel(j.c)} · {j.w} · Posted {posted(j.d)}</span>
                    <span className="sj-job-foot"><span>{j.e}</span>{j.p && <span className="sj-job-pay">{j.p}</span>}<span className="sj-job-go">View details <Arrow /></span></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── HOW A SEARCH RUNS ── the firm-wide five stages. */}
      <section className="section lt sec-spine">
        <div className="wrap">
          <div className="eyebrow ew-light gs" style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>How a search runs</div>
          <h2 className="section-h2 gs sec-h">The same five stages, <em>in every practice.</em></h2>
          <HiringTimeline steps={spine.map(([, t, d], k) => ({ n: String(k + 1), t, d }))} />
        </div>
      </section>

      {/* ── COMMITMENTS ── the hub's "What we put in writing", unchanged. */}
      <section className="section cream lt sec-writing">
        <div className="wrap">
          <div className="eyebrow gs sec-eyb-inv"><span className="eyebrow-dot"></span>What we put in writing</div>
          <h2 className="section-h2 gs sec-h">Four things we commit to <em>on the first call.</em></h2>
          <div className="sec-gtee">
            {writtenGuarantees.map(([when, title, desc]) => (
              <div className="sec-gtee-card gs" key={title}>
                <div className="sec-gtee-when">{when}</div>
                <h3 className="sec-gtee-t">{title}</h3>
                <p className="sec-gtee-d">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER PRACTICES ── every sector page links to the other nine. */}
      <section className="section lt sec-others">
        <div className="wrap">
          <div className="eyebrow ew-light gs" style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Other practices</div>
          <h2 className="section-h2 gs sec-h">Hiring in another <em>sector?</em></h2>
          <ul className="sec-others-grid">
            {others.map((o) => (
              <li key={o.id}>
                <Link className="sec-other gs" href={industryHref(o.id)}>
                  <span className="sec-other-nm">{o.navLabel}</span>
                  <span className="sec-other-sub">{o.roles[0]}</span>
                  <Arrow />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="clients-cta gs inv">
        <h2>Hiring in <em>{p.navLabel.toLowerCase()}?</em></h2>
        <p>Send the brief. A partner in our {p.navLabel.toLowerCase()} practice reads it and replies within one business day.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button type="button" className="btn btn-prim" data-hire>Submit a brief <Arrow /></button>
          <Link className="btn btn-ghost" href={routes.industries}>All industries</Link>
        </div>
      </section>
    </>
  );
}
