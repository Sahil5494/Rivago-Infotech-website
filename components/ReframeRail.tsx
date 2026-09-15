"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* The four things Rivago brings to a search, as a scroll rail.
 *
 * Two cards in view, the third peeking at the right edge, arrows against
 * that edge — the client's reference, and the same mechanic the industries
 * rail four sections down already uses. Scroll-snap rather than a transform
 * carousel: the rail is a real scrolling element, so a trackpad swipe, a
 * shift-wheel, a touch drag and the buttons all drive one thing, and the
 * browser keeps a focused card in view when someone tabs through.
 *
 * The cards are dark on a cream band, where the reference has them dark on
 * dark. The section above this one is a full dark band, and a second dark
 * band immediately under it reads as one long stretch rather than two
 * sections. What the reference is really doing is lifting the cards clear
 * of the ground; inverting them does that harder, and dark is already this
 * page's language for the offer — which is what these four are.
 *
 * .inv redefines the token set but does not paint, so each card sets its
 * own background and everything inside it follows.
 *
 * The 01-04 numbers stay, and this has been argued once already. These four
 * run at the same time rather than in order, so on its own the numbering
 * claims a sequence that isn't there. But numbering an unordered set is the
 * house convention — the option cards on every /services page, /hire-talent
 * and /career all do it — and the site marks its real sequences by labelling
 * them instead ("Stage 03 · Day 10-18", "03 · Screen"). Bare numbers mean
 * options here; labelled numbers mean stages. Unnumbering this one rail
 * would make it the only bare option set on the site without one.
 */

/* The label IS the title now. There used to be both — a small uppercase
   category line ("Recruiting Expertise") above a claim ("People who
   understand the role."), with the claim set at fz11 and the label at fz1.
   The claims are gone.

   The reason is division of labour. The section header argues: "Don't just
   fill the role. Get it right." followed by a lede that makes the case.
   Four cards each making a second argument under that one left the section
   with two persuasive layers and no inventory. Scanning four nouns —
   Recruiting Expertise, Market Intelligence, Technology, Sourcing Reach —
   answers the eyebrow directly: this is what we bring.

   What went with them is voice: those four claims carried it, and it now
   lives entirely in the bodies. Worth knowing before adding a third layer
   back. */
type Card = {
  n: string;
  label: string;
  d: string;
  icon: React.ReactNode;
};

const S = { stroke: "currentColor", strokeWidth: 1.3, strokeLinecap: "round" as const };

const CARDS: Card[] = [
  {
    n: "01",
    label: "Recruiting Expertise",
    d: "We look beyond the job description to understand what the role actually requires, the market around it and what makes someone successful in it.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="11" cy="9" r="4" {...S} />
        <path d="M4 23c0-3.9 3.1-7 7-7 1.3 0 2.6.4 3.7 1" {...S} />
        <path d="m17.2 19.8 2.4 2.4 4.6-4.6" {...S} strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: "02",
    label: "Market Intelligence",
    /* "...a clearer view of the talent market — where the right skills are"
       stuttered against the title directly above it once the title became
       "Market Intelligence". Same three things, without saying market
       twice in eight words. */
    d: "We bring a clearer view of where the right skills sit, what’s realistic and where the search needs to move next.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 24.5s6.8-6.2 6.8-11.2a6.8 6.8 0 1 0-13.6 0C7.2 18.3 14 24.5 14 24.5Z" {...S} strokeLinejoin="round" />
        <circle cx="14" cy="12.8" r="2.5" {...S} />
      </svg>
    ),
  },
  {
    n: "03",
    label: "Technology",
    /* "We use technology to..." directly under a title reading "Technology"
       is the one real stutter this change creates. The pronoun fixes it and
       reads naturally — a screen reader hits the h3 first, so "it" has its
       antecedent in reading order.

       "Technology" is the only single word among four two-word labels. It
       stays: the body covers search, screening and prioritisation, so
       narrowing the title to "Screening Technology" for the sake of a
       matched set would describe less than the card does. */
    d: "We use it to search, screen and prioritize talent faster, while keeping human judgment at the center of the decision.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M5 17.5v4M11 12v9.5M17 7.5v14M23 14.5v7" {...S} />
      </svg>
    ),
  },
  {
    n: "04",
    /* Was "Reach Further" — a verb phrase sitting in a row of three noun
       phrases (Recruiting Expertise, Market Intelligence, Technology). The
       four labels are read as a set down the rail, so the odd grammar shows.
       "Sourcing Reach" is the same register as the other three and does not
       collide with "Market Intelligence" the way "Market Reach" would. */
    label: "Sourcing Reach",
    /* Double stutter once the label became the title: "across multiple
       sources to reach" against "Sourcing Reach". Channels instead of
       sources, work instead of reach, widen instead of expanding — the
       claim is unchanged. */
    d: "We work active and passive candidates across multiple channels, and widen the search when the right talent isn’t where you expected it to be.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="2.8" {...S} />
        <path d="M8.4 19.6a8 8 0 0 1 0-11.2M19.6 8.4a8 8 0 0 1 0 11.2" {...S} />
        <path d="M4.9 23.1a13 13 0 0 1 0-18.2M23.1 4.9a13 13 0 0 1 0 18.2" {...S} />
      </svg>
    ),
  },
];

const GAP = 24;

export default function ReframeRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const measure = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    // 2px of slack: scrollLeft is fractional at some zoom levels and device
    // pixel ratios, so an exact comparison never reports the end reached.
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
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
    const card = el.querySelector<HTMLElement>(".rfr-card");
    const stepBy = card ? card.getBoundingClientRect().width + GAP : 360;
    el.scrollBy({ left: stepBy * dir, behavior: "smooth" });
  };

  return (
    <div className="rfr-wrap">
      <div
        className={`rfr-rail${atEnd ? " at-end" : ""}`}
        ref={railRef}
        tabIndex={0}
        role="group"
        aria-label="How we work — scroll for more"
      >
        {CARDS.map((c) => (
          <article className="rfr-card inv" key={c.n}>
            {/* The number moves up beside the icon rather than sitting on
                its own line above the title. Stacking icon / number / title
                / body gives the card four levels where three will do, and
                the icon row had 40px of empty space to its right. */}
            <div className="rfr-top">
              <div className="rfr-ico">{c.icon}</div>
              <span className="rfr-n">{c.n}</span>
            </div>
            <h3 className="rfr-t">{c.label}</h3>
            <p className="rfr-d">{c.d}</p>
          </article>
        ))}
      </div>

      <div className="rfr-nav">
        <button type="button" className="rfr-btn" onClick={() => go(-1)} disabled={atStart} aria-label="Previous">
          <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ transform: "rotate(180deg)" }}>
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button type="button" className="rfr-btn" onClick={() => go(1)} disabled={atEnd} aria-label="More">
          <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
