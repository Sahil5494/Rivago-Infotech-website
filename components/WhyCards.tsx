"use client";

import { useState } from "react";
import Link from "next/link";
import { routes, offices, marketsSentence, sentenceList, numberWord } from "@/lib/routes";

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

/* `more` takes nodes, not just text: two of these disclosures name a service
   page in prose — the direct hire page and Employer of Record — and named
   them without linking. Those are the two highest-intent commercial pages on
   the site, referenced from the homepage, which is the strongest page there
   is to link from. */
type Card = { t: string; d: React.ReactNode; more: React.ReactNode; icon: React.ReactNode };

const CARDS: Card[] = [
  {
    t: "Searches you can't advertise",
    /* Opened on a fragment — "A senior hire, a replacement the incumbent
       doesn't know about yet, a role that can't be posted." No subject, so
       the sentence cannot be lifted out and quoted by anything. Named
       subject now, and the term someone would actually search for. */
    d: "Rivago runs confidential search for roles that cannot be posted: a senior hire, or a replacement the incumbent doesn't know about yet. It runs under NDA, with the brief shown only to candidates who need to see it to decide.",
    more: "Nothing goes on a job board, and your company name stays out of the first conversation until a candidate is serious enough to need it.",
    icon: (<svg width="22" height="22" viewBox="0 0 22 22"><rect x="4" y="9" width="14" height="10" rx="2.5" {...P} /><path d="M7.5 9V6.5a3.5 3.5 0 017 0V9" {...P} /></svg>),
  },
  {
    t: "A date agreed before sourcing starts",
    d: "The delivery date is agreed on the intake call and written into the brief. From that point it is a commitment, and every update you get is measured against it.",
    more: "It sits beside the scorecard in the same document, so both sides are working from one page.",
    icon: (<svg width="22" height="22" viewBox="0 0 22 22"><circle cx="11" cy="11" r="9" {...P} /><path d="M11 7v4l3 3" {...P} /></svg>),
  },
  {
    t: "A partner who already works your sector",
    /* "They know the titles, the going rate and..." — the going rate is
       WHAT WE BRING's second card, one section up, which says "what that
       experience is paid now". Comp knowledge is claimed once, there. */
    /* The two sentences swapped places. "If we don't have a real bench in
       your sector, you will hear that on the first call" is the most
       differentiating line in the section — an agency volunteering the brief
       it should not take — and it was sitting in the disclosure, which is
       display:none until someone clicks. 43% of this section's words are
       behind that button; this one should not have been among them. */
    d: "Your brief goes to the desk that already recruits in that market. And if we don't have a real bench in your sector, you will hear that on the first call, before anyone takes the brief.",
    more: "The desk that takes it knows the titles that exist, how the sector talks about seniority, and what a strong candidate looks like in it.",
    icon: (<svg width="22" height="22" viewBox="0 0 22 22"><path d="M4 11a7 7 0 1014 0 7 7 0 00-14 0z" {...P} /><path d="M11 8v3l2 2" {...P} /><circle cx="18" cy="4" r="3" fill="var(--accent)" opacity=".3" /></svg>),
  },
  {
    /* Title was "You brief us once, not every time", and the body then
       opened by restating it. The title now names the thing you only do
       once; the body says what that buys. */
    t: "You explain your hiring bar once",
    d: "Your point of contact stays the same between searches. They already know your interview loop, and who you turned down last time and why.",
    more: "That continuity is the whole point of a named partner, and it is why your bar holds steady from one search to the next.",
    icon: (<svg width="22" height="22" viewBox="0 0 22 22"><rect x="3" y="3" width="16" height="16" rx="4" {...P} /><path d="M8 11l2.5 2.5L14 8" {...P} /></svg>),
  },
  {
    /* Cities and markets are read from lib/routes.ts so this card cannot
       drift away from the footer and the contact page, and the office count
       in the title is derived for the same reason.

       CORRECTION. This comment used to say the offices and the markets "do
       not pair", on the grounds that "Ayr is in Scotland and the UK is not a
       served market". That was wrong. lib/routes.ts has that office as
       region "ON", country "CA", postcode N0B 1E0, at 43.29/-80.38, named
       "Ontario" and described as "Canadian market coverage and cross-border
       placements". It is Ayr, Ontario — not Ayr, Scotland.

       So the lists pair almost exactly: Wilmington covers the United States,
       Ayr covers Canada, Pune covers India, and only the UAE is served
       without an office. That is unremarkable.

       The markets count still stays out of the title, on the weaker but
       still sound ground that counting two different things beside each
       other invites arithmetic the reader does not need — and the office
       count is derived rather than typed, which is the point that mattered.
       The body's "an office is where we sit" line survives on its own
       merits; it is no longer explaining away a mismatch that is not
       there. */
    t: `${numberWord(offices.length).replace(/^./, (c) => c.toUpperCase())} offices, one firm`,
    /* Also opened on a fragment — a bare list of three city names. Named
       subject, so the sentence stands on its own if it is quoted anywhere. */
    d: `Rivago has offices in ${sentenceList(offices.map((o) => o.city))}, recruiting into ${marketsSentence()}. An office is where we sit. Where we hire is that whole list, from one brief.`,
    more: (
      <>
        Where you need to hire somewhere we don&rsquo;t hold an entity,{" "}
        <Link href={routes.employerOfRecord}>Employer of Record</Link> covers it — we become the legal
        employer for payroll, tax and contracts in-country.
      </>
    ),
    icon: (<svg width="22" height="22" viewBox="0 0 22 22"><circle cx="11" cy="11" r="8.5" {...P} /><path d="M2.5 11h17M11 2.5c2.2 2.3 3.4 5.3 3.4 8.5s-1.2 6.2-3.4 8.5c-2.2-2.3-3.4-5.3-3.4-8.5S8.8 4.8 11 2.5z" {...P} /></svg>),
  },
  {
    t: "A guarantee with its terms on show",
    /* The title claims the terms are on show, so all four exclusions are
       named. It listed two; /services/direct-hire's FAQ lists four —
       redundancy, a cancelled role, restructuring, and a material change to
       the job the candidate accepted. A card that says "on show" while
       showing half of them is the one thing this card cannot do.

       The negation here stays. It is a legal distinction between what is
       covered and what is not, which is the information, rather than the
       deny-then-assert figure of speech the rest of the section was using. */
    d: "The replacement guarantee runs 90 days on contingent direct hires and up to twelve months on retained search. It covers resignation and performance; it does not cover redundancy, a cancelled role, restructuring, or a material change to the job the candidate accepted.",
    more: (
      <>
        Those terms are in the agreement and on the{" "}
        <Link href={routes.directHire}>direct hire page</Link>, in the same words, before you are asked
        to sign anything.
      </>
    ),
    icon: (<svg width="22" height="22" viewBox="0 0 22 22"><path d="M11 2.6l7 2.6v5.4c0 4-2.9 7.5-7 8.8-4.1-1.3-7-4.8-7-8.8V5.2z" {...P} /><path d="M8 11l2.2 2.2L14.5 9" {...P} /></svg>),
  },
];

/* Left column takes the odd cards, right column the even ones. The LEFT
   column is pushed down so the two do not line up — that offset is the
   layout. (This comment said "right" for a while; the stylesheet has always
   pushed nth-child(1), and explains there why the offset belongs on the
   shorter column.)

   Because the left column starts lower, the first card a reader's eye meets
   is the right column's, not CARDS[0]. That is fine: these six have no
   sequence, which is also why they carry no numbers.

   On a narrow screen the columns stack and the offset is removed. */
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
    <>
      <div className="why-grid">
        <div className="why-col">
          {LEFT.map((i) => <WhyCard c={CARDS[i]} id={`why-x-${i}`} key={CARDS[i].t} />)}
        </div>
        <div className="why-col">
          {RIGHT.map((i) => <WhyCard c={CARDS[i]} id={`why-x-${i}`} key={CARDS[i].t} />)}
        </div>
      </div>

      {/* The call to action sits below the grid rather than as the last cell
          of the right column. It was the seventh cell in a set of seven, so
          one column carried four and the other three, and the right column
          ran 229px past the bottom of the left — a card-sized hole in the
          bottom-left corner, exactly where the section closes. Three and
          three now, with the tile spanning the full width as the closing
          band.

          Worth keeping at all: the next call to action on this page is about
          three thousand pixels further down.

          It ran the same two sentences as the scoping-call card in the
          support section — "Thirty minutes with the partner who would take
          the brief. You leave with a plan whether or not you engage us." —
          word for word, twelve consecutive four-word phrases in common. The
          contact pitch belongs in the support section, whose whole job it
          is. This tile closes the six cards above it, so it says what those
          six are for instead. */}
      <div className="why-cta">
        <div className="why-cta-ico" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M5 19L19 5M19 5h-8M19 5v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
        </div>
        <div className="why-cta-txt">
          {/* Not an h3. The section heading promises six things and the six
              cards each supply one; this tile is the call to action, so as a
              seventh h3 it made the section announce seven headings under an
              h2 that says six. */}
          <p className="why-cta-h">Tell us the role. We&rsquo;ll take it from there.</p>
          <p>One open role is enough to start. Everything above applies to it.</p>
        </div>
        <button type="button" className="why-cta-btn" data-hire>
          Send us a role
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
    </>
  );
}
