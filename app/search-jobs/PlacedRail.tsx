"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { placements, initials } from "@/lib/placements";

/* "Don't just take it from us" — one row of placed-candidate cards, three in
   view on desktop (two on tablets, one on phones), with arrows to step
   through the rest. Same mechanic as the home page's ReframeRail: native
   scroll-snap underneath, so touch swiping and keyboard scrolling work
   without the buttons, and the buttons disable at either end.

   The line on each card is Rivago speaking, not the candidate: it restates
   the promise the page already makes in "What actually happens" (a
   recruiter who has hired in your field) for the field they were placed
   in. Nothing here is attributed to the person. Real quotes go in
   lib/placements.ts as `quote` once someone gives one. */

const FIELD_LINE: Record<string, string> = {
  "Software engineering": "software engineering",
  Data: "data engineering and analytics",
  "Front-end": "front-end engineering",
  "CRM & Salesforce": "Salesforce and CRM",
  "AI & ML": "AI and machine learning",
  Support: "technical support",
  "Digital experience": "AEM and digital experience",
};

const GAP = 20;

export default function PlacedRail() {
  const railRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [range, setRange] = useState<[number, number]>([1, 3]);

  const measure = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
    const card = el.querySelector<HTMLElement>(".sj-person");
    if (card) {
      const step = card.getBoundingClientRect().width + GAP;
      const first = Math.round(el.scrollLeft / step) + 1;
      const shown = Math.max(1, Math.round((el.clientWidth + GAP) / step));
      setRange([first, Math.min(placements.length, first + shown - 1)]);
    }
  }, []);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    measure();
    el.addEventListener("scroll", measure, { passive: true });
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", measure);
      ro.disconnect();
    };
  }, [measure]);

  const go = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".sj-person");
    const step = card ? card.getBoundingClientRect().width + GAP : 360;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  const arrow = (flip: boolean) => (
    <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={flip ? { transform: "rotate(180deg)" } : undefined}>
      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div className="sj-placed-rail">
      <div className="sj-placed-ctl">
        <span className="sj-placed-count" aria-live="polite">
          {range[0] === range[1] ? range[0] : `${range[0]}–${range[1]}`} of {placements.length}
        </span>
        <button type="button" className="sj-placed-btn" onClick={() => go(-1)} disabled={atStart} aria-label="Previous people">{arrow(true)}</button>
        <button type="button" className="sj-placed-btn" onClick={() => go(1)} disabled={atEnd} aria-label="Next people">{arrow(false)}</button>
      </div>
      <ul className="sj-placed-grid" ref={railRef} aria-label="Placed candidates">
        {placements.map((c) => (
          <li className="sj-person" key={c.name}>
            <span className="sj-person-top">
              <span className="sj-person-av" aria-hidden="true">{initials(c.name)}</span>
              {c.field && <span className="sj-person-f">{c.field}</span>}
            </span>
            <span className="sj-person-n">{c.name}</span>
            {c.role && <span className="sj-person-r">Placed as <b>{c.role}</b></span>}
            <span className="sj-person-d">
              {c.field
                ? `Matched to the role by a Rivago recruiter who specialises in ${FIELD_LINE[c.field]}.`
                : "Matched to the role by a Rivago recruiter who specialises in the field."}
            </span>
            <span className="sj-person-foot">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 7.2l2.6 2.6L11 4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Placed through Rivago
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
