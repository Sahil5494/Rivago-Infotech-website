"use client";

import { useRef, useState } from "react";
import { rlsTabs } from "./data";

/**
 * Practice picker. Keeps the tab interaction from the reference, but shows
 * only role titles — the placement counts, stat grids and client quotes that
 * came with it are unverified figures and are not on the page.
 *
 * Proper tablist semantics: arrow keys move between tabs, Home and End jump
 * to the ends, and only the active tab is in the tab order.
 */
export default function PracticeTabs() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const tab = rlsTabs[active];

  function onKey(e: React.KeyboardEvent<HTMLDivElement>) {
    const last = rlsTabs.length - 1;
    let next = active;
    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    else if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  }

  return (
    <>
      <div className="svc-idx" role="tablist" aria-label="Practices" onKeyDown={onKey}>
        {rlsTabs.map((t, i) => (
          <button
            key={t.key}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            type="button"
            id={`ptab-${t.key}`}
            aria-selected={i === active}
            aria-controls={`ppanel-${t.key}`}
            tabIndex={i === active ? 0 : -1}
            className={i === active ? "on" : undefined}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="ptab-panel" role="tabpanel" id={`ppanel-${tab.key}`} aria-labelledby={`ptab-${tab.key}`}>
        <h3>{tab.heading}</h3>
        <p className="blurb">{tab.blurb}</p>
        <p className="rk">Roles we fill in this practice</p>
        <ul className="rlist">
          {tab.roles.map((r) => (
            <li key={r.name}>{r.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
