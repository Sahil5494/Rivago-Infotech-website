"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { positions, type Department } from "./positions-data";

type FilterKey = "all" | "rec" | "ops" | "mkt" | "ppl" | "eng" | "fin" | "cli";

const FILTERS: { key: FilterKey; label: string; dept?: Department }[] = [
  { key: "all", label: "All" },
  { key: "rec", label: "Recruitment" },
  { key: "ops", label: "Operations", dept: "Operations" },
  { key: "mkt", label: "Marketing", dept: "Marketing" },
  { key: "ppl", label: "People", dept: "People" },
  { key: "eng", label: "Engineering", dept: "Engineering" },
  { key: "fin", label: "Finance", dept: "Finance" },
  { key: "cli", label: "Client", dept: "Client" },
];

const GROUP_ORDER: Department[] = ["Operations", "Marketing", "People", "Engineering", "Finance", "Client"];

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.4" /><path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
);
const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

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

  return (
    <div className="jp">
      <div className="jp-eyebrow">Careers at Rivago &middot; <span>{positions.length}</span> open</div>
      <h1 className="jp-title">Open <em>positions.</em></h1>
      <p className="jp-sub">Senior-only, partner-track roles across our offices in Delaware, Pune and Ontario. Every hire owns their work end to end — no juniors, no handoffs.</p>

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

      <div>
        {groups.map((g) => (
          <div className="jgroup" key={g.dept}>
            <div className="jgroup-name">{g.dept} <span className="jgroup-count">{g.roles.length}</span></div>
            <div className="jlist">
              {g.roles.map((p) => (
                <Link key={p.id} className="jrow" href={`${routes.role}?id=${p.id}`}>
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
