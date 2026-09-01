"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { routes } from "@/lib/routes";

const quickSearches = ["AI Engineer", "Data Engineer", "Full Stack", "Remote"];

export default function SearchJobsSearch() {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [l, setL] = useState("");

  function go(qv: string, lv: string) {
    const p = new URLSearchParams();
    if (qv) p.set("q", qv);
    if (lv) p.set("l", lv);
    router.push(`${routes.viewJobs}${p.toString() ? `?${p}` : ""}`);
  }

  return (
    <>
      <form
        className="sj-search"
        onSubmit={(e) => {
          e.preventDefault();
          go(q.trim(), l.trim());
        }}
      >
        <div className="sj-field">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="4.6" stroke="currentColor" strokeWidth="1.3" /><path d="M10.6 10.6L14 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
          <input type="text" placeholder="Job title or keyword — e.g. AI Engineer" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <div className="sj-div" />
        <div className="sj-field">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 14s5-4.2 5-8A5 5 0 003 6c0 3.8 5 8 5 8z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /><circle cx="8" cy="6" r="1.8" stroke="currentColor" strokeWidth="1.3" /></svg>
          <input type="text" placeholder="City, state or ZIP" value={l} onChange={(e) => setL(e.target.value)} />
        </div>
        <button className="sj-go" type="submit">Search jobs</button>
      </form>
      <div className="sj-quick">
        <span>Popular:</span>
        {quickSearches.map((s) => (
          <button key={s} type="button" className="sj-chip" onClick={() => setQ(s)}>{s}</button>
        ))}
      </div>
    </>
  );
}
