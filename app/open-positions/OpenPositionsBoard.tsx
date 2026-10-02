"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { positions, type Department } from "./positions-data";

/* Filters are built from the departments that actually have openings, so a
   chip never leads to an empty list. ("Recruitment" used to be a chip with
   no department behind it, which silently showed everything.) */
const GROUP_ORDER: Department[] = ["Recruitment", "Business Development", "Client", "Operations", "Marketing", "People", "Engineering", "Finance"];
const LIVE_DEPTS = GROUP_ORDER.filter((d) => positions.some((p) => p.department === d));
type FilterKey = "all" | Department;
const FILTERS: { key: FilterKey; label: string; dept?: Department }[] = [
  { key: "all", label: "All" },
  ...LIVE_DEPTS.map((d) => ({ key: d as FilterKey, label: d, dept: d })),
];

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.4" /><path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
);
const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

/* Each opening has its own page (app/open-positions/[id]) — its own
   title, share preview and search listing. They used to share one
   /view-jobs/role?… URL titled "Position". */
const roleHref = (p: { id: string }) => `${routes.openPositions}/${p.id}`;

export default function OpenPositionsBoard() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<FilterKey>("all");

  const filter = FILTERS.find((f) => f.key === active)!;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return positions.filter((p) => {
      const inDept = active === "all" || p.department === filter.dept;
      const matchesQ = !q || p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q);
      return inDept && matchesQ;
    });
  }, [query, active, filter]);

  const groups = GROUP_ORDER.map((dept) => ({ dept, roles: filtered.filter((p) => p.department === dept) })).filter((g) => g.roles.length > 0);

  /* No confirmed openings: say so plainly and take a general application
     instead of showing a list of roles nobody is hiring for. The button
     opens the CV form (HireModal, data-hire="seeker"), which posts to the
     firm; the href is the no-JS fallback. */
  if (positions.length === 0) {
    return (
      <div className="jp">
        <div className="jp-eyebrow">Careers at Rivago</div>
        <h1 className="jp-title">Open <em>positions.</em></h1>
        <div className="jp-general lt">
          <h2 className="jp-general-h">No advertised openings right now.</h2>
          <p className="jp-general-p">We are always talking to experienced recruiters. Tell us your sector, the markets you place into and how long you have been doing it, and we will be in touch when a desk opens that fits.</p>
          <a className="jp-general-btn" href={routes.contactUs} data-hire="seeker">Send us your CV <ArrowIcon /></a>
        </div>
      </div>
    );
  }

  return (
    <div className="jp">
      <div className="jp-eyebrow">Careers at Rivago &middot; <span>{positions.length}</span> open</div>
      <h1 className="jp-title">Open <em>positions.</em></h1>
      <p className="jp-sub">Recruitment, business development, client and delivery roles — based at our Pune office or remote. Every hire owns their work end to end, with no handoffs.</p>

      <div className="jp-search">
        <SearchIcon />
        <input type="text" placeholder="Search by title or location…" value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
      <div className="jp-filters">
        {FILTERS.map((f) => (
          <button key={f.key} className={`jfilter${active === f.key ? " on" : ""}`} onClick={() => setActive(f.key)}>{f.label}</button>
        ))}
      </div>
      <div className="jp-count">Showing <strong>{filtered.length}</strong> of <span>{positions.length}</span> open roles</div>

      <div className="jboard lt">
        {groups.map((g) => (
          <div className="jgroup" key={g.dept}>
            <div className="jgroup-name">{g.dept} <span className="jgroup-count">{g.roles.length}</span></div>
            <div className="jlist">
              {g.roles.map((p) => (
                <Link key={p.id} className="jrow" href={roleHref(p)}>
                  <div>
                    <div className="jrow-t">{p.title}</div>
                    <div className="jrow-m">{p.department} &middot; {p.location} &middot; {p.type}</div>
                  </div>
                  <span className="jrow-arr"><ArrowIcon /></span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      {filtered.length === 0 && <div className="jp-empty" style={{ display: "block" }}>No positions match your search.</div>}
    </div>
  );
}
