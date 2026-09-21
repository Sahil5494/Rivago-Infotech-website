"use client";

import { useState } from "react";

/* The six refusals, in the Why Rivago layout from the home page.
 *
 * Deliberately the SAME CLASS NAMES as components/WhyCards.tsx — .why-grid,
 * .why-col, .why-card, .why-icon, .why-title, .why-desc, .why-extra,
 * .why-more — rather than a parallel set of .value-* rules. Two sections
 * that are meant to look identical should read one stylesheet, or they drift
 * the first time either is touched. The only thing added for this page is a
 * fill, because this band is dark; see the note in globals.css.
 *
 * THREE THINGS CHANGED WITH THE LAYOUT, each of which is part of the design
 * being matched rather than an extra:
 *
 * 1. The 01-06 numbers are gone. Why Rivago carries none, and says why: the
 *    cards have no order, and numbering an unordered set makes a reader look
 *    for a sequence that is not there. These six are the same — a refusal
 *    list is a set, not steps.
 *
 * 2. Every card holds something back behind Read more. That is the pattern
 *    on the home page, and it only works if what is held back is worth the
 *    click — "the terms, the fallback, the limit", as WhyCards puts it. What
 *    is behind each button here is the cost of the refusal, which is the
 *    part that makes it a commitment rather than a slogan.
 *
 * 3. No call-to-action tile. WhyCards ends with one because the next CTA on
 *    the home page is about three thousand pixels further down. This section
 *    is the fifth of nine and "Work with us" closes the page, so a tile here
 *    would be a second ask competing with the real one.
 */

const P = {
  fill: "none" as const,
  stroke: "var(--accent)",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

type Card = { t: string; d: string; more: string; icon: React.ReactNode };

const CARDS: Card[] = [
  {
    t: "We won't submit a CV without consent",
    d: "Every candidate sees the brief, hears who the company is, and signs off on the submission before it goes anywhere.",
    more: "We have lost mandates over this. We have never lost a candidate's trust over it.",
    icon: (<svg width="22" height="22" viewBox="0 0 22 22"><path d="M6 3h7l4 4v12a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" {...P} /><path d="M12.5 3v4.5H17" {...P} /><path d="M8 14l2 2 4-4" {...P} /></svg>),
  },
  {
    t: "We won't run a search with no scorecard",
    d: "If we cannot agree in writing on what good looks like, the search does not start.",
    more: "It is the most reliable predictor of a placement that sticks, and the easiest discipline to skip when everyone is in a hurry.",
    icon: (<svg width="22" height="22" viewBox="0 0 22 22"><rect x="4" y="3" width="14" height="16" rx="2" {...P} /><path d="M7.5 8h7M7.5 11.5h7M7.5 15h4" {...P} /></svg>),
  },
  {
    t: "We won't hand off to a coordinator",
    d: "The partner who took the brief runs the search, closes the offer, and checks in at month twelve. One name, one person.",
    more: "No relay through an account manager, no handover to business development once the contract is signed, and nobody learning your business on your mandate.",
    icon: (<svg width="22" height="22" viewBox="0 0 22 22"><circle cx="11" cy="7.5" r="3.5" {...P} /><path d="M4.5 18.5c0-3.3 2.9-5.5 6.5-5.5s6.5 2.2 6.5 5.5" {...P} /></svg>),
  },
  {
    t: "We won't poach from our own placements",
    d: "Twelve months off-limits as standard on retained engagements, and twenty-four on the senior-most retained searches.",
    more: "It is the promise that lets a client tell us things about their own team they would not tell anyone else.",
    icon: (<svg width="22" height="22" viewBox="0 0 22 22"><path d="M11 2.6l7 2.6v5.4c0 4-2.9 7.5-7 8.8-4.1-1.3-7-4.8-7-8.8V5.2z" {...P} /><path d="M8.6 11h4.8" {...P} /></svg>),
  },
  {
    t: "We won't take an engagement we can't deliver",
    d: "If a brief is unwinnable as scoped — wrong comp band, wrong location, wrong timeline — you will hear it on the first call.",
    more: "That costs us the work, and it is still the cheaper outcome. Nobody benefits from a six-month search that ends in nothing.",
    icon: (<svg width="22" height="22" viewBox="0 0 22 22"><circle cx="11" cy="11" r="8.5" {...P} /><path d="M5.5 5.5l11 11" {...P} /></svg>),
  },
  {
    t: "We won't bill for a portal",
    d: "Every fee we charge buys a person on the line. If you wanted software, you would have bought software.",
    more: "We are aware of the irony of saying so on a website.",
    icon: (<svg width="22" height="22" viewBox="0 0 22 22"><rect x="3" y="4.5" width="16" height="11" rx="1.8" {...P} /><path d="M8 19h6" {...P} /><path d="M6 6.5l10 7.5" {...P} /></svg>),
  },
];

/* Left column takes the odd cards, right the even ones, and the LEFT column
   is pushed down by the stylesheet so the two never line up — that offset is
   the layout, exactly as on the home page. Three and three, so neither
   column runs past the other at the bottom. */
const LEFT = [0, 2, 4];
const RIGHT = [1, 3, 5];

function RefusalCard({ c, id }: { c: Card; id: string }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="why-card">
      <div className="why-icon">{c.icon}</div>
      <h3 className="why-title">{c.t}</h3>
      <p className={`why-desc${open ? " open" : ""}`}>{c.d}</p>
      <div className="why-extra" id={id} hidden={!open}>
        <p>{c.more}</p>
      </div>
      <button
        type="button"
        className="why-more"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Read less" : "Read more"}
        <span className="why-more-ico" aria-hidden="true">
          <svg width="11" height="11" viewBox="0 0 11 11">
            <path d="M1 5.5h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            {!open && <path d="M5.5 1v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />}
          </svg>
        </span>
      </button>
    </article>
  );
}

export default function RefusalCards() {
  return (
    <div className="why-grid">
      <div className="why-col">
        {LEFT.map((i) => <RefusalCard c={CARDS[i]} id={`ref-x-${i}`} key={CARDS[i].t} />)}
      </div>
      <div className="why-col">
        {RIGHT.map((i) => <RefusalCard c={CARDS[i]} id={`ref-x-${i}`} key={CARDS[i].t} />)}
      </div>
    </div>
  );
}
