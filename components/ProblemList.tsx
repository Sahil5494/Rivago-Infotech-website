"use client";

import { useState } from "react";

/* The four problems, as a plus-toggle list.
 *
 * One open at a time, the first open on load — the reference's behaviour.
 *
 * I argued against collapsing these twice and was wrong about the size of
 * the cost. The objection holds for feature labels ("Extreme flexibility"),
 * where the body carries the argument and hiding it hides the point. These
 * headlines are not labels: "Four agencies, the same six candidates" states
 * the whole problem on its own. All four stay visible and scannable at rest;
 * what collapses is supporting detail.
 *
 * The FAQ four sections down is also a plus accordion, so two things keep
 * these apart: the icon sits on the LEFT here and on the right there, and
 * these rows carry no fill or box of any kind.
 */

type Row = { t: string; d: string };

const ROWS: Row[] = [
  {
    t: "The scorecard came after the first shortlist",
    d: "Sourcing starts from the job description, because that is the document that exists. Nobody has agreed yet whether a VP Engineering hire needs to have scaled a platform team or built one from nothing. The first shortlist is how you find out.",
  },
  {
    t: "Pitched senior, staffed junior",
    d: "You are handed to a delivery team after signature. By week three you are explaining your hiring bar again, to someone who was not on the intake call.",
  },
  {
    t: "Four agencies, the same six candidates",
    d: "Four firms working the same role on contingency all submit fast, and the same names reach you from three directions. Screening properly means one conversation per candidate — comp expectations, notice period, right to work, whether they would genuinely move for this role. Nobody in a race makes that call.",
  },
  {
    t: "Three weeks, no written update",
    d: "A search that is genuinely hard and a search nobody has touched since kickoff look the same from your side of it.",
  },
];

export default function ProblemList() {
  const [open, setOpen] = useState(0);

  return (
    <ul className="prob-list">
      {ROWS.map((r, i) => {
        const isOpen = open === i;
        return (
          <li className={`prob-row${isOpen ? " open" : ""}`} key={r.t}>
            <button
              type="button"
              className="prob-q"
              aria-expanded={isOpen}
              aria-controls={`prob-a-${i}`}
              /* Clicking the open row closes it, so the section can be read
                 with everything collapsed if that is what someone wants. */
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span className="prob-ico" aria-hidden="true">
                <svg width="11" height="11" viewBox="0 0 11 11">
                  <path d="M1 5.5h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  {!isOpen && <path d="M5.5 1v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />}
                </svg>
              </span>
              <span className="prob-t">{r.t}</span>
            </button>
            {/* grid-template-rows 0fr to 1fr animates height without any
                JavaScript measurement. The inner div hides with visibility
                as well as overflow, so collapsed copy leaves the
                accessibility tree rather than being read out silently. */}
            <div className="prob-a" id={`prob-a-${i}`}>
              <div>
                <p className="prob-d">{r.d}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
