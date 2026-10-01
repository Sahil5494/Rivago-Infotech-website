"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { placements, initials } from "@/lib/placements";

/* "Don't just take it from us" — one row of placed-candidate cards (four in
   view on wide screens, three, two, then one on phones), with arrows to
   step through the rest. Card format follows the client's reference: big
   quote mark, centred words, name and role at the foot. Same mechanic as the home page's ReframeRail: native
   scroll-snap underneath, so touch swiping and keyboard scrolling work
   without the buttons, and the buttons disable at either end.

   The line on each card is Rivago speaking, not the candidate: it restates
   the promise the page already makes in "What actually happens" (a
   recruiter who has hired in your field) for the field they were placed
   in. Nothing here is attributed to the person, so those cards show the
   person's initials rather than a quote mark. Real quotes go in
   lib/placements.ts as `quote` once someone gives one, and that card
   switches to the quote layout on its own. */

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
      <ul className="sj-placed-grid" ref={railRef} aria-label="Placed candidates">
        {placements.map((c) => (
          <li className={`sj-person${c.quote ? " has-quote" : ""}`} key={c.name}>
            {c.quote ? (
              <svg className="sj-person-q" width="44" height="34" viewBox="0 0 44 34" fill="none" aria-hidden="true"><path d="M0 34V20.4C0 8.6 6 1.8 17.4 0l1.8 5C13 6.8 10 10.4 9.6 16H18v18H0zm25 0V20.4C25 8.6 31 1.8 42.4 0l1.6 5c-6.2 1.8-9.2 5.4-9.6 11H43v18H25z" fill="currentColor" /></svg>
            ) : (
              <span className="sj-person-av" aria-hidden="true">{initials(c.name)}</span>
            )}
            {c.quote ? (
              <blockquote className="sj-person-d">&ldquo;{c.quote}&rdquo;</blockquote>
            ) : (
              <p className="sj-person-d">
                {c.field
                  ? `Matched to the role by a Rivago recruiter who specialises in ${FIELD_LINE[c.field]}.`
                  : "Matched to the role by a Rivago recruiter who specialises in the field."}
              </p>
            )}
            <span className="sj-person-who">
              <span className="sj-person-n">{c.name}</span>
              <span className="sj-person-r">{c.role || "Placed through Rivago"}</span>
            </span>
          </li>
        ))}
      </ul>
      <div className="sj-placed-ctl">
        <button type="button" className="sj-placed-btn" onClick={() => go(-1)} disabled={atStart} aria-label="Previous people">{arrow(true)}</button>
        <span className="sj-placed-count" aria-live="polite">
          {range[0] === range[1] ? range[0] : `${range[0]}–${range[1]}`} of {placements.length}
        </span>
        <button type="button" className="sj-placed-btn" onClick={() => go(1)} disabled={atEnd} aria-label="Next people">{arrow(false)}</button>
      </div>
    </div>
  );
}
