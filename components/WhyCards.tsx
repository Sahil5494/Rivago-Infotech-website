"use client";

import { useState } from "react";
import { offices, servedMarkets } from "@/lib/routes";

/* The six "why us" cards, in two vertically offset columns with a call to
 * action as the last cell — the reference layout, with three departures.
 *
 * 1. The lede stays on the left under the heading. The reference runs its
 *    body copy down the right-hand side, which is the most recognisable
 *    thing about that page, and Rivago has always put it on the left.
 *
 * 2. The call-to-action cell carries no photograph. The reference uses a
 *    team shot; the only photography in this repo is the licensed stock in
 *    the services carousel one section below, and reusing a frame from it
 *    here would be visible from the same scroll position.
 *
 * 3. Read more reveals a second paragraph rather than the rest of a
 *    sentence. A disclosure that returns fifteen more words of the
 *    paragraph you were already reading is not worth the click, and this
 *    page already has a real disclosure pattern in the FAQ. Each card has
 *    something specific held back — the terms, the fallback, the limit.
 *
 * The cards carry no numbers. They have no order, and the approach tabs
 * three sections above are a genuine 01-05 sequence; numbering an unordered
 * set directly below a real one made the page look like it had two.
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
    t: "Searches you can't advertise",
    d: "A senior hire, a replacement the incumbent doesn't know about yet, a role that can't be posted. Handled under NDA, with the brief shown only to candidates who need to see it to decide.",
    more: "Nothing goes on a job board, and your company name stays out of the first conversation until a candidate is serious enough to need it.",
    icon: (<svg width="22" height="22" viewBox="0 0 22 22"><rect x="4" y="9" width="14" height="10" rx="2.5" {...P} /><path d="M7.5 9V6.5a3.5 3.5 0 017 0V9" {...P} /></svg>),
  },
  {
    t: "A date agreed before sourcing starts",
    d: "The delivery date is set on the intake call and written into the brief — not offered after the first week has already slipped.",
    more: "It sits beside the scorecard in the same document, so there is one page both sides are working from rather than two versions of the plan.",
    icon: (<svg width="22" height="22" viewBox="0 0 22 22"><circle cx="11" cy="11" r="9" {...P} /><path d="M11 7v4l3 3" {...P} /></svg>),
  },
  {
    t: "A partner who already works your sector",
    d: "Your brief goes to whoever recruits in that market, not to whoever is free this week. They know the titles, the going rate and what a strong candidate looks like in your industry.",
    more: "And if we don't have a real bench in your sector, you'll hear that on the first call — rather than have us take the brief and learn on it.",
    icon: (<svg width="22" height="22" viewBox="0 0 22 22"><path d="M4 11a7 7 0 1014 0 7 7 0 00-14 0z" {...P} /><path d="M11 8v3l2 2" {...P} /><circle cx="18" cy="4" r="3" fill="var(--accent)" opacity=".3" /></svg>),
  },
  {
    t: "You brief us once, not every time",
    d: "Your point of contact doesn't change between searches. They already know your hiring bar, your interview loop, and who you turned down last time and why.",
    more: "That continuity is the whole point of a named partner. The alternative is explaining your bar again to a new coordinator every quarter.",
    icon: (<svg width="22" height="22" viewBox="0 0 22 22"><rect x="3" y="3" width="16" height="16" rx="4" {...P} /><path d="M8 11l2.5 2.5L14 8" {...P} /></svg>),
  },
  {
    /* Cities and markets are read from lib/routes.ts so this card cannot
       drift away from the footer and the contact page. */
    t: "Three offices, four markets, one firm",
    d: `${offices.map((o) => o.city).join(", ")} — hiring into ${servedMarkets.slice(0, -1).join(", ")} and ${servedMarkets[servedMarkets.length - 1]}. One point of contact across every one of them, rather than a different agency in each market.`,
    more: "Where you need to hire somewhere we don't hold an entity, Employer of Record covers it — we become the legal employer for payroll, tax and contracts in-country.",
    icon: (<svg width="22" height="22" viewBox="0 0 22 22"><circle cx="11" cy="11" r="8.5" {...P} /><path d="M2.5 11h17M11 2.5c2.2 2.3 3.4 5.3 3.4 8.5s-1.2 6.2-3.4 8.5c-2.2-2.3-3.4-5.3-3.4-8.5S8.8 4.8 11 2.5z" {...P} /></svg>),
  },
  {
    t: "A guarantee with its terms on show",
    d: "90 days on contingent direct hires, up to twelve months on retained search. Resignation and performance are covered; redundancy and a cancelled role are not.",
    more: "All of it — including what voids the guarantee — is written on the direct hire page, rather than held back until you are reading a contract.",
    icon: (<svg width="22" height="22" viewBox="0 0 22 22"><path d="M11 2.6l7 2.6v5.4c0 4-2.9 7.5-7 8.8-4.1-1.3-7-4.8-7-8.8V5.2z" {...P} /><path d="M8 11l2.2 2.2L14.5 9" {...P} /></svg>),
  },
];

/* Left column takes the odd cards, right column the even ones and the call
   to action. The right column is pushed down so the two do not line up —
   that offset is the layout. On a narrow screen the columns stack and the
   offset is removed; the order reads 1,3,5 then 2,4,6, which is fine
   because these six have no sequence to disturb. */
const LEFT = [0, 2, 4];
const RIGHT = [1, 3, 5];

function WhyCard({ c, id }: { c: Card; id: string }) {
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

export default function WhyCards() {
  return (
    <div className="why-grid">
      <div className="why-col">
        {LEFT.map((i) => <WhyCard c={CARDS[i]} id={`why-x-${i}`} key={CARDS[i].t} />)}
      </div>
      <div className="why-col">
        {RIGHT.map((i) => <WhyCard c={CARDS[i]} id={`why-x-${i}`} key={CARDS[i].t} />)}
        {/* The reference closes its grid with a call to action rather than a
            seventh card. Worth keeping: the next one on this page is about
            three thousand pixels further down. */}
        <div className="why-cta">
          <div className="why-cta-ico" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24"><path d="M5 19L19 5M19 5h-8M19 5v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
          </div>
          <h3>Tell us the role.<br />We&rsquo;ll take it from there.</h3>
          <p>Thirty minutes with the partner who would take the brief. You leave with a plan whether or not you engage us.</p>
          <button type="button" className="why-cta-btn" data-hire>
            Book a scoping call
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
