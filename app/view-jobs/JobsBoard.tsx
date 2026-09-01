"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { jobs as allJobs, type Job } from "./jobs-data";
import Testimonials from "@/components/Testimonials";

const PAGE_SIZE = 9;

const popularSearches = [
  { label: "Remote", value: "remote" },
  { label: "Engineering", value: "engineer" },
  { label: "Finance", value: "finance" },
  { label: "Full-time", value: "full-time" },
];

const candidateTestimonials = [
  { badge: "Placed · Data Engineer, Toronto", quote: "My recruiter called me back the same afternoon and was straight with me about comp before I ever spoke to the client. No portal, no ghosting between rounds — I always knew exactly where I stood.", name: "Aaron D.", role: "Data Engineer · placed with a Toronto financial group" },
  { badge: "Placed · Compliance Analyst, NYC", quote: "I'd used two other agencies before Rivago and both went quiet after the first call. Here I had one person the whole way through, and she pushed back on a lowball offer on my behalf.", name: "Kayla S.", role: "Compliance Analyst · placed with a US regional bank" },
  { badge: "Placed · Registered Nurse, Toronto", quote: "Healthcare staffing usually feels like a call centre reading a script. This was the opposite — someone who understood my licensing situation and found a unit that actually fit my experience.", name: "Marcus T.", role: "Registered Nurse · placed with a Toronto hospital network" },
];

function searchableText(j: Job) {
  return [j.title, j.company, j.location, j.type, j.skills.join(" ")].join(" ").toLowerCase();
}

function postedLabel(days: number) {
  if (days <= 0) return "Posted today";
  if (days === 1) return "Posted 1d ago";
  return `Posted ${days}d ago`;
}

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" /><path d="M14 14l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
);
const PinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 15s5-4.6 5-8.6A5 5 0 003 6.4C3 10.4 8 15 8 15z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><circle cx="8" cy="6.4" r="1.8" stroke="currentColor" strokeWidth="1.5" /></svg>
);
const Arrow = () => (
  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const valueCards = [
  {
    title: "A career, not a quota",
    desc: "We place people into roles they will still want in a year, not roles that fill a headcount number by Friday.",
    icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2l2 5 5 .7-3.6 3.5.9 5L11 13.5l-4.3 2.5.9-5L4 7.7l5-.7z" stroke="#3DFF87" strokeWidth="1.5" strokeLinejoin="round" /></svg>),
  },
  {
    title: "One recruiter, always",
    desc: "The person who first calls you is the person who calls you with the offer. No relay through a rotating desk of strangers.",
    icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="3.5" stroke="#3DFF87" strokeWidth="1.5" /><path d="M4 19c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" /></svg>),
  },
  {
    title: "Straight answers within 48h",
    desc: "Rejected, on hold or moving forward — you hear which, in writing, within two business days of every step.",
    icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="#3DFF87" strokeWidth="1.5" /><path d="M11 7v4l3 2" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" /></svg>),
  },
  {
    title: "Support past day one",
    desc: "We check in at week one, month one and month three of every placement — not just up to the point we get paid.",
    icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="6" width="16" height="13" rx="2" stroke="#3DFF87" strokeWidth="1.5" /><path d="M7 6V4a2 2 0 012-2h4a2 2 0 012 2v2M7 12l3 3 6-6" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>),
  },
];

const steps = [
  { n: "01", title: "Search & apply", desc: "Filter by role, skill or city and apply straight from the listing — two minutes, no account wall in the way." },
  { n: "02", title: "Talk it through", desc: "A named recruiter calls within one business day to walk through the role, the client and the realistic comp band." },
  { n: "03", title: "Start your assignment", desc: "Offer, paperwork and start date are handled end-to-end, with the same recruiter checking in after day one." },
];

export default function JobsBoard({ emphasizeSearch = false }: { emphasizeSearch?: boolean }) {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const keywordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (emphasizeSearch) keywordRef.current?.focus();
  }, [emphasizeSearch]);

  const filtered = useMemo(() => {
    const kw = keyword.trim().toLowerCase();
    const loc = location.trim().toLowerCase();
    return allJobs.filter((j) => {
      const text = searchableText(j);
      return (!kw || text.includes(kw)) && (!loc || j.location.toLowerCase().includes(loc));
    });
  }, [keyword, location]);

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  function applyChip(value: string) {
    setKeyword((current) => (current.toLowerCase() === value ? "" : value));
    setVisible(PAGE_SIZE);
  }

  return (
    <>
      <style>{`
        .jb-hero-search{max-width:820px;margin:36px auto 0;background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:8px;display:flex;align-items:stretch;gap:0}
        .jb-hero-search-field{flex:1;display:flex;align-items:center;gap:10px;padding:12px 16px;min-width:0}
        .jb-hero-search-field.divider{border-left:1px solid var(--border)}
        .jb-hero-search-field svg{flex-shrink:0;color:var(--text3)}
        .jb-hero-search-field input{background:none;border:none;outline:none;color:var(--text);font-family:var(--ff);font-size:14.5px;width:100%}
        .jb-hero-search-field input::placeholder{color:var(--text3)}
        .jb-hero-search-btn{flex-shrink:0;margin:4px}
        .jb-chips{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:18px}
        .jb-chips-label{font-size:12px;color:var(--text3);align-self:center;margin-right:2px}
        @media(max-width:640px){.jb-hero-search{flex-direction:column;gap:8px}.jb-hero-search-field.divider{border-left:none;border-top:1px solid var(--border)}}

        .jb-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:44px}
        .jb-card{background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:26px;display:flex;flex-direction:column;gap:14px;transition:all .25s var(--ease);text-decoration:none;color:inherit}
        .jb-card:hover{background:var(--surface2);border-color:rgba(61,255,135,.22);transform:translateY(-3px)}
        .jb-card-top{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}
        .jb-title{font-size:16.5px;font-weight:600;color:var(--text);letter-spacing:-.01em;line-height:1.32}
        .jb-company{font-size:13px;color:var(--text2);margin-top:4px}
        .jb-badges{display:flex;flex-direction:column;gap:6px;flex-shrink:0;align-items:flex-end}
        .jb-badge{padding:3px 9px;border-radius:6px;font-size:10px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;white-space:nowrap}
        .jb-badge.type{background:rgba(61,255,135,.08);border:1px solid rgba(61,255,135,.2);color:var(--green)}
        .jb-badge.remote{background:rgba(255,255,255,.05);border:1px solid var(--border);color:var(--text2)}
        .jb-meta-row{display:flex;flex-wrap:wrap;gap:12px;font-size:12.5px;color:var(--text3)}
        .jb-meta-row span{display:flex;align-items:center;gap:5px}
        .jb-skills{display:flex;flex-wrap:wrap;gap:6px}
        .jb-skill{padding:3px 9px;background:rgba(61,255,135,.06);border:1px solid rgba(61,255,135,.15);border-radius:6px;font-size:11px;color:var(--green);font-weight:500}
        .jb-foot{margin-top:auto;display:flex;align-items:center;justify-content:space-between;gap:12px;padding-top:14px;border-top:1px solid var(--border)}
        .jb-salary{font-size:13px;color:var(--text2);font-weight:500}
        .jb-apply{display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:var(--green)}
        .jb-card:hover .jb-apply svg{transform:translateX(3px)}
        .jb-apply svg{transition:transform .2s var(--ease)}
        .jb-empty{grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text2);font-size:15px}
        .jb-loadmore-wrap{display:flex;justify-content:center;margin-top:40px}
        @media(max-width:900px){.jb-grid{grid-template-columns:1fr}}

        .jb-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:48px}
        .jb-step{background:#fff;border:1px solid rgba(0,0,0,.07);border-radius:20px;padding:30px}
        .jb-step-n{font-family:var(--fs);font-style:italic;font-size:34px;color:#0A7040;line-height:1;margin-bottom:16px;letter-spacing:-.02em}
        .jb-step-title{font-size:17px;font-weight:600;color:var(--dt);margin-bottom:8px;letter-spacing:-.01em}
        .jb-step-desc{font-size:13.5px;color:var(--dt3);line-height:1.68}
        @media(max-width:900px){.jb-steps{grid-template-columns:1fr}}
      `}</style>

      {/* HERO */}
      <header className="page-hero">
        <div className="page-hero-inner wide">
          <div className="crumbs"><Link href={routes.home}>Home</Link><span className="crumbs-sep">/</span><span>{emphasizeSearch ? "Search jobs" : "View jobs"}</span></div>
          <div className="eyebrow ew-light gs" style={{ marginBottom: 28, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Candidates</div>
          {emphasizeSearch ? (
            <h1 className="gs">Search open roles<br />at our <em>client companies.</em></h1>
          ) : (
            <h1 className="gs">Browse open roles<br />across every <em>client we serve.</em></h1>
          )}
          <p className="lead gs">{allJobs.length} live roles across the US, Canada, UAE and India. Every listing is a real, current mandate from a Rivago client — no aggregated postings, no expired listings left up for SEO.</p>

          <div className="jb-hero-search gs">
            <div className="jb-hero-search-field">
              <SearchIcon />
              <input
                ref={keywordRef}
                type="text"
                placeholder="Job title or keyword"
                value={keyword}
                onChange={(e) => { setKeyword(e.target.value); setVisible(PAGE_SIZE); }}
                aria-label="Job title or keyword"
              />
            </div>
            <div className="jb-hero-search-field divider">
              <PinIcon />
              <input
                type="text"
                placeholder="City, state or ZIP"
                value={location}
                onChange={(e) => { setLocation(e.target.value); setVisible(PAGE_SIZE); }}
                aria-label="City, state or ZIP"
              />
            </div>
            <a href="#listings" className="btn btn-prim jb-hero-search-btn">Search <SearchIcon /></a>
          </div>

          <div className="jb-chips gs">
            <span className="jb-chips-label">Popular:</span>
            {popularSearches.map((c) => (
              <button
                type="button"
                key={c.label}
                className={`if-chip${keyword.toLowerCase() === c.value ? " on" : ""}`}
                onClick={() => applyChip(c.value)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* LISTINGS */}
      <section className="section" id="listings">
        <div className="wrap">
          <div className="gs" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 8 }}>
            <div className="eyebrow ew-light" style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>{filtered.length} role{filtered.length === 1 ? "" : "s"} match{filtered.length === 1 ? "es" : ""}</div>
          </div>
          <div className="jb-grid">
            {shown.length === 0 ? (
              <div className="jb-empty">No roles match that search right now. Try a broader keyword, or clear the location filter — new mandates land most weeks.</div>
            ) : (
              shown.map((job) => (
                <Link key={job.id} href={`${routes.role}?id=${job.id}`} className="jb-card gs">
                  <div className="jb-card-top">
                    <div>
                      <div className="jb-title">{job.title}</div>
                      <div className="jb-company">{job.company}</div>
                    </div>
                    <div className="jb-badges">
                      <span className="jb-badge type">{job.type}</span>
                      {job.remote && <span className="jb-badge remote">Remote</span>}
                    </div>
                  </div>
                  <div className="jb-meta-row">
                    <span><PinIcon />{job.location}</span>
                    <span>{postedLabel(job.postedDaysAgo)}</span>
                  </div>
                  <div className="jb-skills">
                    {job.skills.slice(0, 4).map((s) => <span className="jb-skill" key={s}>{s}</span>)}
                  </div>
                  <div className="jb-foot">
                    <span className="jb-salary">{job.salary ?? "Competitive"}</span>
                    <span className="jb-apply">Apply <Arrow /></span>
                  </div>
                </Link>
              ))
            )}
          </div>
          {hasMore && (
            <div className="jb-loadmore-wrap">
              <button type="button" className="btn btn-ghost gs" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
                Show more roles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* GETTING STARTED */}
      <section className="section cream">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-dark" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Getting started</div>
            <h2 className="section-h2" style={{ color: "var(--dt)", maxWidth: 700 }}>From application<br />to <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>first day,</em> in three steps.</h2>
          </div>
          <div className="jb-steps">
            {steps.map((s) => (
              <div className="jb-step gs" key={s.n}>
                <div className="jb-step-n">{s.n}</div>
                <div className="jb-step-title">{s.title}</div>
                <div className="jb-step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE / SHARED VALUES */}
      <section className="section">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Who we are</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 720 }}>What every candidate<br />can expect from <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>Rivago.</em></h2>
          </div>
          <div className="why-grid">
            {valueCards.map((c) => (
              <div className="why-card gs" key={c.title}>
                <div className="why-icon">{c.icon}</div>
                <div className="why-title">{c.title}</div>
                <div className="why-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testi-sec">
        <div className="testi-head">
          <div>
            <div className="eyebrow ew-light gs" style={{ marginBottom: 14 }}>Don&apos;t just take it from us</div>
            <h2 className="testi-h2 gs">Candidates who found<br />their next role <em>through Rivago.</em></h2>
          </div>
        </div>
        <Testimonials items={candidateTestimonials} />
      </section>

      {/* CLOSING CTA */}
      <section className="clients-cta gs">
        <h2>Ready to take<br />the <em>next step?</em></h2>
        <p>Create a profile once and apply to every role above in a couple of clicks — your recruiter picks up from there.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link className="btn btn-cream-prim" href={`${routes.signIn}?mode=signup`}>Create your profile <Arrow /></Link>
          <a className="btn btn-cream-ghost" href="#listings">Browse all roles</a>
        </div>
      </section>
    </>
  );
}
