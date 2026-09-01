"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { JOBS, FAMTXT, EEO, type BoardJob } from "./jobs-data";

const FACETS = ["dept", "e", "w", "region"] as const;
type Facet = (typeof FACETS)[number];
type ActiveFacets = Record<Facet, Set<string>>;

function regionOf(c: string): string {
  if (/India$/.test(c)) return "India";
  if (/UAE$/.test(c)) return "UAE";
  if (/, (ON|BC|AB)$|Canada$/.test(c)) return "Canada";
  return "US";
}

function valOf(j: BoardJob, f: Facet): string {
  return f === "region" ? regionOf(j.c) : (j[f as "dept" | "e" | "w"] as string);
}

function dk(j: BoardJob) {
  return `${j.t}|${j.c}`;
}

function fmt(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function payNum(p: string) {
  const m = p.replace(/[^0-9.]/g, "");
  return parseFloat(m) || 0;
}

function briefText(j: BoardJob) {
  const f = FAMTXT[j.f] || FAMTXT.pm;
  return {
    s: f.s.replace(/%T%/g, j.t) + ` The role is ${j.w.toLowerCase()} in ${j.c}, on a ${j.e.toLowerCase()} basis.`,
    r: f.r,
    q: f.q,
  };
}

const SearchIcon = () => (
  <svg width="19" height="19" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="4.8" stroke="currentColor" strokeWidth="1.4" /><path d="M10.7 10.7L14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
);
const PinIcon = () => (
  <svg width="19" height="19" viewBox="0 0 16 16" fill="none"><path d="M8 14s5-4.2 5-8A5 5 0 003 6c0 3.8 5 8 5 8z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><circle cx="8" cy="6" r="1.8" stroke="currentColor" strokeWidth="1.4" /></svg>
);
const ChevronDown = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2.5 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const FilterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
);
const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const BackIcon = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M8.5 3L5 7l3.5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const HeartIcon = ({ filled }: { filled: boolean }) => (
  <svg width="19" height="19" viewBox="0 0 20 20" fill={filled ? "currentColor" : "none"}><path d="M10 16.5S3.5 12.3 3.5 8.2A3.7 3.7 0 0110 6a3.7 3.7 0 016.5 2.2c0 4.1-6.5 8.3-6.5 8.3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>
);
const CalIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><rect x="2" y="5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" /><path d="M6 5V3.5h4V5" stroke="currentColor" strokeWidth="1.3" /></svg>
);
const PayIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><rect x="2" y="4" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" /><circle cx="8" cy="8" r="1.8" stroke="currentColor" strokeWidth="1.3" /></svg>
);
const HomeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5.5 2.5H2.5v9h9v-3M8.5 2.5h3v3M11.5 2.5L6 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const GateIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><rect x="4" y="10.5" width="16" height="10" rx="2.5" stroke="#3DFF87" strokeWidth="1.5" /><path d="M8 10.5V7.5a4 4 0 018 0v3" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" /><circle cx="12" cy="15.5" r="1.6" fill="#3DFF87" /></svg>
);

function JobsBoardInner() {
  const searchParams = useSearchParams();
  const [q, setQ] = useState(searchParams.get("q") || "");
  const [l, setL] = useState(searchParams.get("l") || "");
  const [sort, setSort] = useState<"relevance" | "newest" | "pay">("relevance");
  const [per, setPer] = useState(10);
  const [page, setPage] = useState(0);
  const [sel, setSel] = useState(0);
  const [saved, setSaved] = useState<Record<string, boolean>>({});
  const [active, setActive] = useState<ActiveFacets>({ dept: new Set(), e: new Set(), w: new Set(), region: new Set() });
  const [panelOpen, setPanelOpen] = useState(false);
  const [gateOpen, setGateOpen] = useState(false);
  const [gateRole, setGateRole] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("jb-lock");
    document.body.classList.add("jb-lock");
    return () => {
      document.documentElement.classList.remove("jb-lock");
      document.body.classList.remove("jb-lock");
    };
  }, []);

  const facetValues = useMemo(() => {
    const out: Record<Facet, string[]> = { dept: [], e: [], w: [], region: [] };
    FACETS.forEach((f) => {
      const vals: string[] = [];
      JOBS.forEach((j) => {
        const v = valOf(j, f);
        if (!vals.includes(v)) vals.push(v);
      });
      vals.sort();
      out[f] = vals;
    });
    return out;
  }, []);

  const facetCount = FACETS.reduce((n, f) => n + active[f].size, 0);

  const view = useMemo(() => {
    const qq = q.toLowerCase().trim();
    const lq = l.toLowerCase().trim();
    let list = JOBS.filter((j) => {
      const hay = `${j.t} ${j.dept} ${j.e} ${j.f}`.toLowerCase();
      if (qq && hay.indexOf(qq) < 0) return false;
      const loc = `${j.c} ${j.w}`.toLowerCase();
      if (lq && loc.indexOf(lq) < 0) return false;
      return FACETS.every((f) => active[f].size === 0 || active[f].has(valOf(j, f)));
    });
    if (sort === "newest") list = [...list].sort((a, b) => (a.d < b.d ? 1 : -1));
    else if (sort === "pay") list = [...list].sort((a, b) => payNum(b.p) - payNum(a.p));
    else if (qq) {
      list = [...list].sort((a, b) => {
        const ai = a.t.toLowerCase().indexOf(qq);
        const bi = b.t.toLowerCase().indexOf(qq);
        return (ai < 0 ? 99 : ai) - (bi < 0 ? 99 : bi);
      });
    }
    return list;
  }, [q, l, sort, active]);

  const total = view.length;
  const start = page * per;
  const slice = view.slice(start, start + per);
  const selectedJob = slice[sel] || slice[0];

  function toggleFacet(f: Facet, v: string) {
    setActive((prev) => {
      const next = { ...prev, [f]: new Set(prev[f]) };
      if (next[f].has(v)) next[f].delete(v);
      else next[f].add(v);
      return next;
    });
    setPage(0);
    setSel(0);
  }

  function clearAll() {
    setQ("");
    setL("");
    setSort("relevance");
    setActive({ dept: new Set(), e: new Set(), w: new Set(), region: new Set() });
    setPage(0);
    setSel(0);
  }

  function selectCard(i: number) {
    setSel(i);
    if (typeof window !== "undefined" && window.matchMedia("(max-width:1080px)").matches) {
      setTimeout(() => {
        const top = detailRef.current?.offsetTop ?? 0;
        window.scrollTo({ top: Math.max(0, top - 16), behavior: "smooth" });
      }, 0);
    }
  }

  function toggleSaved(k: string) {
    setSaved((prev) => ({ ...prev, [k]: !prev[k] }));
  }

  function openGate(label: string | null) {
    setGateRole(label);
    setGateOpen(true);
    document.body.style.overflow = "hidden";
  }
  function closeGate() {
    setGateOpen(false);
    document.body.style.overflow = "";
  }

  useEffect(() => {
    if (!gateOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeGate();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [gateOpen]);

  const brief = selectedJob ? briefText(selectedJob) : null;

  return (
    <>
      <div className="jb-bar">
        <Link className="logo" href={routes.home}>
          <div className="logo-mark">R</div>Rivago<span style={{ fontWeight: 300, color: "var(--text2)" }}> Infotech</span>
        </Link>
        <span className="jb-pill">Job Search</span>
        <div className="jb-bar-r">
          <Link className="jb-ext" href={routes.home}><HomeIcon />rivagoinfotech.com</Link>
          <Link className="jb-signin" href={routes.signIn}>Sign In</Link>
        </div>
      </div>

      <div className="jb-search-wrap">
        <form
          className="jb-search"
          onSubmit={(e) => {
            e.preventDefault();
            setPage(0);
            setSel(0);
          }}
        >
          <div className="jb-f">
            <SearchIcon />
            <input type="text" placeholder="Search by job title or keyword" value={q} onChange={(e) => { setQ(e.target.value); setPage(0); setSel(0); }} />
          </div>
          <div className="jb-div" />
          <div className="jb-f">
            <PinIcon />
            <input type="text" placeholder="City or ZIP" value={l} onChange={(e) => { setL(e.target.value); setPage(0); setSel(0); }} />
          </div>
        </form>
      </div>

      <div className="jb-meta">
        <div className="jb-count"><b>{total}</b> openings with Rivago</div>
        <div className="jb-meta-r">
          <span className="jb-sel">
            <select aria-label="Sort roles" value={sort} onChange={(e) => { setSort(e.target.value as typeof sort); setPage(0); setSel(0); }}>
              <option value="relevance">Sort: Relevance</option>
              <option value="newest">Sort: Newest</option>
              <option value="pay">Sort: Pay</option>
            </select>
            <ChevronDown />
          </span>
          <button className="jb-filters-btn" type="button" aria-expanded={panelOpen} onClick={() => setPanelOpen((v) => !v)}>
            <FilterIcon />All Filters<span className="jb-fcount" hidden={facetCount === 0}>{facetCount}</span>
          </button>
          <button className="jb-clear" type="button" onClick={clearAll}>Clear</button>
        </div>
      </div>

      <div className="jb-panel" hidden={!panelOpen}>
        {(["dept", "e", "w", "region"] as Facet[]).map((f) => (
          <div key={f}>
            <div className="jb-flab">{f === "dept" ? "Department" : f === "e" ? "Engagement" : f === "w" ? "Work style" : "Region"}</div>
            <div className="jb-fchips">
              {facetValues[f].map((v) => (
                <button key={v} type="button" className={`jb-fchip${active[f].has(v) ? " on" : ""}`} onClick={() => toggleFacet(f, v)}>
                  {v}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="jb-split">
        <div className="jb-list" ref={listRef}>
          {!slice.length ? (
            <div className="jb-empty">No openings match your search. Try a broader title or clear the location.</div>
          ) : (
            slice.map((j, i) => {
              const k = dk(j);
              return (
                <button
                  key={k + i}
                  type="button"
                  className={`jb-card${i === sel ? " on" : ""}`}
                  onClick={(e) => {
                    if ((e.target as HTMLElement).closest(".jb-heart")) return;
                    selectCard(i);
                  }}
                >
                  <div className="jb-card-t">{j.t}</div>
                  <div className="jb-card-l">{j.c} &middot; {j.w}</div>
                  <div className="jb-card-tags">
                    <span className="jb-tag"><CalIcon />{j.e}</span>
                    <span className="jb-tag"><PayIcon />{j.p}</span>
                  </div>
                  <div className="jb-card-p">Posted {fmt(j.d)}</div>
                  <span
                    className={`jb-heart${saved[k] ? " sav" : ""}`}
                    role="button"
                    aria-label="Save role"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSaved(k);
                    }}
                  >
                    <HeartIcon filled={!!saved[k]} />
                  </span>
                </button>
              );
            })
          )}
        </div>
        <div className="jb-vdiv" />
        <div className="jb-detail" ref={detailRef}>
          {selectedJob && brief && (
            <>
              <button type="button" className="jb-back" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <BackIcon />Back to results
              </button>
              <div className="jb-d-top">
                <div>
                  <h1 className="jb-d-h1">{selectedJob.t}</h1>
                  <div className="jb-d-sub">{selectedJob.c} &middot; {selectedJob.w} &middot; Posted {fmt(selectedJob.d)}</div>
                  <div className="jb-d-chips">
                    <span className="jb-chip">{selectedJob.e}</span>
                    <span className="jb-chip">{selectedJob.p}</span>
                    <span className="jb-chip">{selectedJob.dept}</span>
                  </div>
                </div>
                <div className="jb-d-btns">
                  <button type="button" className={`jb-save${saved[dk(selectedJob)] ? " sav" : ""}`} onClick={() => toggleSaved(dk(selectedJob))}>
                    <HeartIcon filled={!!saved[dk(selectedJob)]} />{saved[dk(selectedJob)] ? "Saved" : "Save"}
                  </button>
                  <button type="button" className="jb-apply" onClick={() => openGate(`${selectedJob.t} · ${selectedJob.c}`)}>
                    Apply <ArrowIcon />
                  </button>
                </div>
              </div>
              <div className="jb-d-sec"><div className="jb-d-lab">The brief</div><p>{brief.s}</p></div>
              <div className="jb-d-sec"><div className="jb-d-lab">What you will own</div><ul>{brief.r.map((x) => <li key={x}>{x}</li>)}</ul></div>
              <div className="jb-d-sec"><div className="jb-d-lab">What the client needs</div><ul>{brief.q.map((x) => <li key={x}>{x}</li>)}</ul></div>
              <div className="jb-eeo">{EEO}</div>
            </>
          )}
        </div>
      </div>

      <div className={`lg-ov${gateOpen ? " open" : ""}`} role="dialog" aria-modal="true" aria-labelledby="lgTitle">
        <div className="lg-box">
          <button className="lg-x" aria-label="Close" onClick={closeGate}><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></button>
          <div className="lg-ic"><GateIcon /></div>
          {gateRole && <div className="lg-role">{gateRole}</div>}
          <h3 id="lgTitle">Please log in to apply</h3>
          <p>Create an account to track your applications and save your progress.</p>
          <div className="lg-btns">
            <Link className="lg-p" href={routes.signIn}>Log in <ArrowIcon /></Link>
            <Link className="lg-g" href={`${routes.signIn}?mode=signup`}>Create account</Link>
          </div>
        </div>
      </div>

      <div className="jb-pager">
        <div className="jb-range">{total ? `${start + 1} – ${Math.min(start + per, total)} of ${total}` : "0 – 0 of 0"}</div>
        <div className="jb-arrows">
          <button className="jb-arrow" aria-label="Previous page" disabled={page === 0} onClick={() => { setPage((p) => Math.max(0, p - 1)); setSel(0); listRef.current?.scrollTo({ top: 0 }); }}>
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M8.5 3L5 7l3.5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button className="jb-arrow" aria-label="Next page" disabled={start + per >= total} onClick={() => { setPage((p) => p + 1); setSel(0); listRef.current?.scrollTo({ top: 0 }); }}>
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M5.5 3L9 7l-3.5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
        <div className="jb-per">
          Items per page:
          <span className="jb-sel">
            <select aria-label="Items per page" value={per} onChange={(e) => { setPer(parseInt(e.target.value, 10)); setPage(0); setSel(0); }}>
              <option>10</option><option>20</option><option>50</option><option>100</option>
            </select>
            <ChevronDown />
          </span>
        </div>
      </div>

      <div className="jb-foot">
        <div className="jb-foot-c">&copy; {new Date().getFullYear()} Rivago Infotech &middot; Client roles, briefed direct</div>
        <div className="jb-foot-l">
          <Link href={routes.contactUs}>Contact</Link>
          <Link href={routes.privacy}>Privacy</Link>
          <Link href={routes.terms}>Terms</Link>
          <Link href={routes.home}>rivagoinfotech.com</Link>
        </div>
      </div>
    </>
  );
}

export default function JobsBoard() {
  return <JobsBoardInner />;
}
