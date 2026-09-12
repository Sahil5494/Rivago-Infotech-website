"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { positions, type Department } from "./positions-data";

const departments: Department[] = ["Operations", "Marketing", "People", "Engineering", "Finance", "Client"];
const employmentTypes = Array.from(new Set(positions.map((p) => p.type)));
const locations = Array.from(new Set(positions.map((p) => p.location)));
const locationTypes = Array.from(new Set(positions.map((p) => p.locationType)));

const ALL = "All";

const Arrow = () => (
  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" /><path d="M14 14l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
);

export default function OpenPositionsBoard() {
  const [keyword, setKeyword] = useState("");
  const [department, setDepartment] = useState(ALL);
  const [type, setType] = useState(ALL);
  const [location, setLocation] = useState(ALL);
  const [locationType, setLocationType] = useState(ALL);

  const filtered = useMemo(() => {
    const kw = keyword.trim().toLowerCase();
    return positions.filter((p) => {
      const matchesKw = !kw || p.title.toLowerCase().includes(kw) || p.department.toLowerCase().includes(kw);
      return matchesKw
        && (department === ALL || p.department === department)
        && (type === ALL || p.type === type)
        && (location === ALL || p.location === location)
        && (locationType === ALL || p.locationType === locationType);
    });
  }, [keyword, department, type, location, locationType]);

  const grouped = useMemo(() => {
    return departments
      .map((d) => ({ department: d, roles: filtered.filter((p) => p.department === d) }))
      .filter((g) => g.roles.length > 0);
  }, [filtered]);

  return (
    <>
      <style>{`
        .op-controls{max-width:960px;margin:36px auto 0;display:flex;flex-wrap:wrap;gap:10px;align-items:stretch}
        .op-search{flex:1 1 240px;display:flex;align-items:center;gap:10px;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:12px 16px}
        .op-search svg{flex-shrink:0;color:var(--text3)}
        .op-search input{background:none;border:none;outline:none;color:var(--text);font-family:var(--ff);font-size:14px;width:100%}
        .op-search input::placeholder{color:var(--text3)}
        .op-select{flex:1 1 150px;padding:12px 14px;background:var(--surface);border:1px solid var(--border);border-radius:12px;font-family:var(--ff);font-size:13.5px;color:var(--text);outline:none;cursor:pointer;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%237A9088' stroke-width='1.4' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center;padding-right:32px}
        .op-select:focus{border-color:rgba(61,255,135,.4)}

        .op-groups{margin-top:56px;display:flex;flex-direction:column;gap:44px}
        .op-group-h{display:flex;align-items:baseline;gap:12px;margin-bottom:18px;padding-bottom:14px;border-bottom:1px solid var(--border)}
        .op-group-title{font-size:20px;font-weight:500;color:var(--text);letter-spacing:-.01em}
        .op-group-count{font-size:12.5px;color:var(--text3);font-family:var(--fm)}
        .op-rows{display:flex;flex-direction:column;gap:1px;background:var(--border);border:1px solid var(--border);border-radius:16px;overflow:hidden}
        .op-row{background:var(--bg2);padding:20px 24px;display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;text-decoration:none;color:inherit;transition:background .2s var(--ease)}
        .op-row:hover{background:var(--surface2)}
        .op-row-title{font-size:15.5px;font-weight:600;color:var(--text);letter-spacing:-.01em}
        .op-row-meta{display:flex;flex-wrap:wrap;gap:14px;font-size:12.5px;color:var(--text3);margin-top:5px}
        .op-row-right{display:flex;align-items:center;gap:16px;flex-shrink:0}
        .op-badge{padding:4px 10px;border-radius:6px;font-size:10.5px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;background:rgba(61,255,135,.08);border:1px solid rgba(61,255,135,.2);color:var(--green);white-space:nowrap}
        .op-row-apply{display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:var(--green)}
        .op-empty{text-align:center;padding:80px 20px;color:var(--text2);font-size:15px}
        @media(max-width:640px){.op-row{flex-direction:column;align-items:flex-start}.op-row-right{width:100%;justify-content:space-between}}
      `}</style>

      <div className="op-controls gs">
        <div className="op-search">
          <SearchIcon />
          <input type="text" placeholder="Search internal roles" value={keyword} onChange={(e) => setKeyword(e.target.value)} aria-label="Search internal roles" />
        </div>
        <select className="op-select" value={department} onChange={(e) => setDepartment(e.target.value)} aria-label="Department">
          <option value={ALL}>All departments</option>
          {departments.map((d) => <option key={d} value={d}>{d}</option>)}
        </select>
        <select className="op-select" value={type} onChange={(e) => setType(e.target.value)} aria-label="Employment type">
          <option value={ALL}>All employment types</option>
          {employmentTypes.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        <select className="op-select" value={location} onChange={(e) => setLocation(e.target.value)} aria-label="Location">
          <option value={ALL}>All locations</option>
          {locations.map((l) => <option key={l} value={l}>{l}</option>)}
        </select>
        <select className="op-select" value={locationType} onChange={(e) => setLocationType(e.target.value)} aria-label="Location type">
          <option value={ALL}>All location types</option>
          {locationTypes.map((l) => <option key={l} value={l}>{l}</option>)}
        </select>
      </div>

      {grouped.length === 0 ? (
        <div className="op-empty">No internal roles match those filters right now. Clear a filter, or check back soon — we grow this list as the team scales.</div>
      ) : (
        <div className="op-groups">
          {grouped.map((g) => (
            <div key={g.department} className="gs">
              <div className="op-group-h">
                <div className="op-group-title">{g.department}</div>
                <div className="op-group-count">{g.roles.length} role{g.roles.length === 1 ? "" : "s"}</div>
              </div>
              <div className="op-rows">
                {g.roles.map((p) => (
                  <Link key={p.id} href={`${routes.role}?id=${p.id}`} className="op-row">
                    <div>
                      <div className="op-row-title">{p.title}</div>
                      <div className="op-row-meta">
                        <span>{p.location}</span>
                        <span>{p.locationType}</span>
                        <span>{p.type}</span>
                      </div>
                    </div>
                    <div className="op-row-right">
                      <span className="op-badge">{p.locationType}</span>
                      <span className="op-row-apply">View role <Arrow /></span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
