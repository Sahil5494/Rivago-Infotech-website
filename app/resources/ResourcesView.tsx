"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { routes } from "@/lib/routes";
import { articles, caseStudies, featuredArticle, featuredCaseStudy, type Article, type CaseStudy } from "./data";

type View = "all" | "blog" | "cs";

const Rcat = ({ label }: { label: string }) => <span className="rcat">{label}</span>;

function NewsletterInline() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  if (ok) return <span style={{ padding: "8px 16px", fontSize: 13, color: "#0A7040", fontWeight: 600 }}>Subscribed ✓</span>;
  return (
    <form
      className="rsub-form"
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setOk(true);
      }}
    >
      <input type="email" placeholder="your@email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Subscribe</button>
    </form>
  );
}

function NewsletterBand({ heading, sub }: { heading: React.ReactNode; sub: string }) {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  return (
    <section className="bg-news">
      <div className="bg-news-inner">
        <h2>{heading}</h2>
        <p>{sub}</p>
        {ok ? (
          <div style={{ padding: "11px 18px", fontSize: 14, color: "#0A7040", fontWeight: 600 }}>Subscribed — your first brief is on its way.</div>
        ) : (
          <form
            className="bg-news-form"
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setOk(true);
            }}
          >
            <input type="email" placeholder="you@company.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
}

type MixedItem = { kind: "article"; a: Article } | { kind: "case-study"; c: CaseStudy };

const allOrder: MixedItem[] = [
  { kind: "article", a: articles.find((x) => x.id === "vp-eng-pay")! },
  { kind: "article", a: articles.find((x) => x.id === "offer-declined")! },
  { kind: "case-study", c: caseStudies.find((x) => x.id === "toronto-bank")! },
  { kind: "article", a: articles.find((x) => x.id === "job-brief")! },
  { kind: "article", a: articles.find((x) => x.id === "equity-explained")! },
  { kind: "article", a: articles.find((x) => x.id === "uae-licensing")! },
  { kind: "case-study", c: caseStudies.find((x) => x.id === "uae-health")! },
  { kind: "article", a: articles.find((x) => x.id === "structured-interviews")! },
  { kind: "article", a: articles.find((x) => x.id === "anti-portal")! },
  { kind: "article", a: articles.find((x) => x.id === "bad-hire-cost")! },
  { kind: "case-study", c: caseStudies.find((x) => x.id === "london-cto")! },
  { kind: "case-study", c: caseStudies.find((x) => x.id === "aero-cleared")! },
  { kind: "case-study", c: caseStudies.find((x) => x.id === "ny-gc")! },
  { kind: "case-study", c: caseStudies.find((x) => x.id === "interim-coo")! },
];

const csFilters: { f: string; label: string }[] = [
  { f: "all", label: "All" },
  { f: "tech", label: "Technology" },
  { f: "health", label: "Healthcare" },
  { f: "finance", label: "Finance" },
  { f: "legal", label: "Legal" },
  { f: "aero", label: "Aerospace" },
  { f: "supply", label: "Supply" },
  { f: "gtm", label: "GTM" },
];

const bgFilters: { f: string; label: string }[] = [
  { f: "all", label: "All" },
  { f: "play", label: "Hiring playbook" },
  { f: "comp", label: "Compensation" },
  { f: "market", label: "Market read" },
];

export default function ResourcesView({ initialView }: { initialView: View }) {
  const [view, setView] = useState<View>(initialView);
  const [csFilter, setCsFilter] = useState("all");
  const [bgFilter, setBgFilter] = useState("all");
  const [csExpanded, setCsExpanded] = useState(false);

  const csVisible = useMemo(() => {
    if (csFilter !== "all") return caseStudies.filter((c) => c.category === csFilter);
    return csExpanded ? caseStudies : caseStudies.slice(0, 6);
  }, [csFilter, csExpanded]);

  const bgVisible = useMemo(() => (bgFilter === "all" ? articles : articles.filter((a) => a.category === bgFilter)), [bgFilter]);

  return (
    <div className="rwrap">
      <div className="rhead">
        <span className="reyebrow">Resources</span>
        <h1 className="rtitle">
          Ideas, evidence &amp; <em>market intel.</em>
        </h1>
      </div>

      <div className="rbar">
        <div className="rtabs">
          <button className={`rtab${view === "all" ? " on" : ""}`} onClick={() => setView("all")}>All</button>
          <button className={`rtab${view === "blog" ? " on" : ""}`} onClick={() => setView("blog")}>Blog</button>
          <button className={`rtab${view === "cs" ? " on" : ""}`} onClick={() => setView("cs")}>Case Studies</button>
        </div>
        <div className="rsub">
          <span className="rsub-l">Get our latest updates sent straight to your inbox.</span>
          <NewsletterInline />
        </div>
      </div>
      <div className="rdiv" />

      {view === "all" && (
        <>
          <div className="rfeat">
            <div className="rfeat-img" style={{ background: "linear-gradient(135deg,#A6F0CE,#3DA9FF)" }}>
              <h2 style={{ color: "#08251F" }}>{featuredArticle.title}</h2>
              <div style={{ position: "absolute", left: 32, bottom: 30, width: 34, height: 34, borderRadius: "50%", background: "rgba(255,255,255,.22)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 13 }}>R</div>
            </div>
            <div>
              <div className="rfeat-meta"><Rcat label={featuredArticle.category} /> · {featuredArticle.readTime}</div>
              <div className="rfeat-t">{featuredArticle.title}</div>
              <div className="rfeat-x">{featuredArticle.dek}</div>
              <div className="rfeat-author">
                <span className="rfeat-mono">AR</span>
                <span><strong>{featuredArticle.byline}</strong> · {featuredArticle.date}</span>
              </div>
            </div>
          </div>

          <div className="rgrid-h">All resources</div>
          <div className="rgrid">
            {allOrder.map((item, i) => {
              const wide = i < 2;
              if (item.kind === "article") {
                const a = item.a;
                return (
                  <Link key={a.id} className={`rcard${wide ? " wide" : ""}`} href={`${routes.article}?id=${a.id}`}>
                    <div className="rcimg" style={{ backgroundImage: `linear-gradient(150deg,rgba(3,12,5,.66),rgba(10,112,64,.4)), url('${a.image}')` }}>
                      <div className="rcimg-badge">R</div>
                    </div>
                    <div className="rcard-body">
                      <div className="rcard-t">{a.title}</div>
                      <div className="rcard-meta"><span className="rcard-cat">Blog</span> · {a.readTime} · {a.displayDate}</div>
                    </div>
                  </Link>
                );
              }
              const c = item.c;
              return (
                <Link key={c.id} className={`rcard${wide ? " wide" : ""}`} href={`${routes.caseStudy}?id=${c.id}`}>
                  <div className="rcimg" style={{ backgroundImage: `linear-gradient(150deg,rgba(3,12,5,.66),rgba(10,112,64,.4)), url('${c.image}')` }}>
                    <div className="rcimg-badge">R</div>
                  </div>
                  <div className="rcard-body">
                    <div className="rcard-t">{c.title}</div>
                    <div className="rcard-meta"><span className="rcard-cat">Case study</span> · {c.quarter}</div>
                  </div>
                </Link>
              );
            })}
          </div>

          <NewsletterBand
            heading={<>Know before <em>you hire.</em></>}
            sub="Every benchmark, playbook and case study we publish — distilled into one short brief, twice a month. The evidence behind better senior-hiring decisions, nothing else."
          />
        </>
      )}

      {view === "cs" && (
        <div style={{ padding: "8px 0 0" }}>
          <div style={{ padding: "44px 0 0" }}>
            <span className="cs-eyb">{featuredCaseStudy.quarter}</span>
            <div className="cs-feat">
              <div className="cs-feat-art">
                <span className="ftag">{featuredCaseStudy.tag}</span>
                <h2>{featuredCaseStudy.title}</h2>
              </div>
              <div className="cs-feat-body">
                <div className="cs-feat-eyb">{featuredCaseStudy.eyebrow}</div>
                <div className="cs-feat-lede">{featuredCaseStudy.lede}</div>
                <div className="cs-feat-lede bt">{featuredCaseStudy.ledeBottom}</div>
                <div className="cs-feat-stats">
                  {featuredCaseStudy.stats.map(([v, suf, l]) => (
                    <div key={l}><div className="cs-feat-stat-v">{v}<span>{suf}</span></div><div className="cs-feat-stat-l">{l}</div></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div style={{ padding: "64px 0 0" }}>
            <span className="cs-eyb">The wider portfolio</span>
            <h2 className="cs-feat-h">Nine featured engagements,<br />filtered <em>your way.</em></h2>
            <div className="cs-fbar">
              {csFilters.map((f) => {
                const count = f.f === "all" ? caseStudies.length : caseStudies.filter((c) => c.category === f.f).length;
                return (
                  <button key={f.f} className={`cs-fchip${csFilter === f.f ? " on" : ""}`} onClick={() => { setCsFilter(f.f); setCsExpanded(false); }}>
                    {f.label} <span className="ct">{count}</span>
                  </button>
                );
              })}
            </div>
            <div className="cs-grid">
              {csVisible.map((c, i) => (
                <Link key={c.id} className={`cs-card${i < 2 && csFilter === "all" ? " wide" : ""}`} data-cat={c.category} href={`${routes.caseStudy}?id=${c.id}`}>
                  <div className="cs-tagrow"><span className="cs-tag">{c.tag}</span><span className="cs-quarter">{c.quarter}</span></div>
                  <div className="cs-title">{c.title}</div>
                  <div className="cs-bullets">
                    {c.whatWeDid.slice(0, 2).map((b, bi) => <div className="cs-bullet" key={bi}>{b.split(".")[0]}.</div>)}
                  </div>
                  <div className="cs-statrow">
                    {c.stats.map(([v, l]) => (
                      <div className="cs-stat" key={l}><div className="cs-stat-v">{v}</div><div className="cs-stat-l">{l}</div></div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
            {!csExpanded && csFilter === "all" && caseStudies.length > 6 && (
              <div className="cs-loadwrap">
                <button className="cs-load" onClick={() => setCsExpanded(true)}>Load more case studies</button>
              </div>
            )}
          </div>

          <section className="cs-quote">
            <div className="cs-quote-inner">
              <div className="q">&quot;</div>
              <p>
                We had worked with three other firms before Rivago. Two of them sent us decks. One of them sent us a portal. Rivago sent us a partner. Six months in, every one of the fourteen people they placed is <em>still here.</em>
              </p>
              <div className="cs-qauthor">
                <div className="cs-qav">R</div>
                <div><div className="cs-qname">Chief Financial Officer</div><div className="cs-qrole">Tier-1 Canadian financial services group · Ontario · Q4 2025 engagement</div></div>
              </div>
            </div>
          </section>
          <section className="rcs-cta">
            <h2>Your case study<br /><em>is the next one.</em></h2>
            <p>Tell us what you are trying to build. We will come back with a plan, a partner, and a date for the first shortlist.</p>
            <div className="rcs-cta-btns">
              <a className="cs-btn-d" data-hire href={`${routes.hireTalent}#intake`}>Start a search</a>
              <Link className="cs-btn-g" href={routes.services}>See engagement models</Link>
            </div>
          </section>
        </div>
      )}

      {view === "blog" && (
        <div style={{ padding: 0 }}>
          <div style={{ padding: "44px 0 0" }}>
            <span className="bg-eyb">Featured · This week</span>
            <div className="bg-feat">
              <div className="bg-feat-art">
                <span className="ftag">Hiring playbook</span>
                <h2>{featuredArticle.title}</h2>
              </div>
              <div className="bg-feat-body">
                <div className="bg-feat-eyb">{featuredArticle.readTime}</div>
                <div className="bg-feat-lede">{featuredArticle.dek}</div>
                <div className="bg-feat-author"><span className="av">R</span><span><strong>{featuredArticle.byline}</strong> · {featuredArticle.date}</span></div>
              </div>
            </div>
          </div>

          <div style={{ padding: "64px 0 0" }}>
            <span className="bg-eyb">The archive</span>
            <h2 className="bg-fh">Every piece,<br />filtered <em>your way.</em></h2>
            <div className="bg-fbar">
              {bgFilters.map((f) => {
                const count = f.f === "all" ? articles.length : articles.filter((a) => a.category === f.f).length;
                return (
                  <button key={f.f} className={`bg-fchip${bgFilter === f.f ? " on" : ""}`} onClick={() => setBgFilter(f.f)}>
                    {f.label} <span className="ct">{count}</span>
                  </button>
                );
              })}
            </div>
            <div className="bg-grid">
              {bgVisible.map((a) => (
                <Link key={a.id} className="bg-card" data-cat={a.category} href={`${routes.article}?id=${a.id}`}>
                  <div className="bg-trow"><span className="bg-tag">{a.categoryLabel}</span><span className="bg-meta">{a.readTime} · {a.displayDate}</span></div>
                  <div className="bg-ti">{a.title}</div>
                  <div className="bg-ex">{a.dek}</div>
                  <div className="bg-foot"><span className="bg-av">R</span><span>{a.byline}</span></div>
                </Link>
              ))}
            </div>
          </div>

          <NewsletterBand
            heading={<>Hiring intel, <em>every Monday.</em></>}
            sub="One short email a week — a comp benchmark, a market read, and the roles worth knowing about. No noise."
          />
        </div>
      )}
    </div>
  );
}
