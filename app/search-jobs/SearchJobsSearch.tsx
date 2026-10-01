"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { routes } from "@/lib/routes";

/* A chip used to fill the box and stop, so "Popular" took two clicks and read
   as broken. It now runs the search. Two of the four ("Full Stack", "Remote")
   also returned zero roles until the jobs board's matching was fixed — see
   the note on matches() in app/view-jobs/JobsBoard.tsx. */
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
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="4.6" stroke="currentColor" strokeWidth="1.3" /><path d="M10.6 10.6L14 14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
          <input type="text" aria-label="Job title or keyword" placeholder="Job title or keyword" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <div className="sj-div" />
        <div className="sj-field">
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 14s5-4.2 5-8A5 5 0 003 6c0 3.8 5 8 5 8z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /><circle cx="8" cy="6" r="1.8" stroke="currentColor" strokeWidth="1.3" /></svg>
          <input type="text" aria-label="Location" placeholder="City, region or country" value={l} onChange={(e) => setL(e.target.value)} />
        </div>
        <button className="sj-go" type="submit">Search jobs</button>
      </form>
      <div className="sj-quick">
        <span>Popular:</span>
        {quickSearches.map((s) => (
          <button key={s} type="button" className="sj-chip" onClick={() => { setQ(s); go(s, l.trim()); }}>{s}</button>
        ))}
      </div>
    </>
  );
}
