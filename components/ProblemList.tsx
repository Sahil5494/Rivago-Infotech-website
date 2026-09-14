"use client";

import { useState } from "react";

/* The five problems, as a plus-toggle list.
 *
 * One open at a time, the first open on load — the reference's behaviour.
 *
 * I argued against collapsing these twice and was wrong about the size of
 * the cost. The objection holds for feature labels ("Extreme flexibility"),
 * where the body carries the argument and hiding it hides the point. These
 * headlines are not labels: each one states its whole problem on its own.
 * All five stay visible and scannable at rest; what collapses is detail.
 *
 * The FAQ four sections down is also a plus accordion, so two things keep
 * these apart: the icon sits on the LEFT here and on the right there, and
 * these rows carry no fill or box of any kind.
 *
 * These replace an earlier four that were all ways an AGENCY fails you —
 * the scorecard written late, the pitch team swapped out, no written
 * update. The section heading promises something wider than that, so these
 * are the buyer's problems instead, and only the fourth is about vendors.
 *
 * Nothing here is a measured claim. These are failure modes common to the
 * industry, not statistics about Rivago's clients or anyone else's, and no
 * row cites research — see the note on the fifth row.
 */

type Row = { t: string; t2: string; d: string };

const ROWS: Row[] = [
  {
    t: "Too much volume.",
    t2: "Not enough signal.",
    d: "An open req collects applications from job boards, referrals and whichever agencies are on the panel. Most of those people applied to every company hiring the same title that month. The hard part is not finding candidates — it is working out which of them is worth a call.",
  },
  {
    /* Opened "A job description lists what the role needs. The market rarely
       packages all of it in one person..." — which is the reframe's first
       card one section down, in different words: that one reads "beyond the
       job description to understand what the role actually requires, the
       market around it". The card is the client's copy, so this is the side
       that moves. The example stays; it was never the part that echoed. */
    t: "The right skills.",
    t2: "Harder to find.",
    d: "The requirement is one list, and it assumes one person holds every item on it. The finance lead who has closed books through an acquisition has usually not also built the reporting stack, and the one who built it has never closed an audit. Titles and keywords stop helping at that point.",
  },
  {
    /* Deliberately not "hiring teams are still dealing with widespread
       difficulty filling roles", which gestures at survey data without
       producing any. The cost to the team either side of the vacancy is
       observable without citing a study. */
    t: "Critical roles.",
    t2: "Open for too long.",
    d: "Every week a senior role stays open, the work is absorbed by the people either side of it — who did not ask for it, and will not say so for a while.",
  },
  {
    /* Stays on the problem. The draft ended on what enterprises need from a
       partner, which is the answer THE REFRAME gives one section below; a
       problem that answers itself leaves that section restating it. */
    t: "More vendors.",
    t2: "Less accountability.",
    d: "Adding a fourth agency to a struggling search adds a fourth inbox, not a fourth strategy. Each is paid only on placement, so each submits fast and wide, and the same names reach you from three directions. Nobody on the panel owns the result.",
  },
  {
    /* The draft closed on LinkedIn research naming skills assessment as
       critical to quality of hire. Dropped: it could not be verified from
       here, and an unverifiable citation is the same problem as an invented
       metric. It also pointed at the CV a second time, which the first row
       already covers — this one moves to what a CV cannot tell you. */
    t: "Better CVs.",
    t2: "Not necessarily better hires.",
    d: "A CV records where someone has been. It is a weak guide to how they will do in a role that does not exist yet, at a company they have not worked in.",
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
              {/* One line. The two sentences are still a pair — the second
                  reverses the first — but they are set as running text and
                  only break when the column is too narrow to hold them.
                  .prob-t is balanced, so when that happens on a phone the
                  two lines come out even instead of stranding a word. */}
              <span className="prob-t">{r.t} {r.t2}</span>
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
