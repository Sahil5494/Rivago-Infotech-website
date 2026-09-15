"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import IndustryIcon from "./IndustryIcon";
import { routes, industriesList } from "@/lib/routes";

/* The industries rail: cards scroll sideways, the next one peeks in at the
 * right edge, and a pair of arrows sits against that edge.
 *
 * Built on scroll-snap rather than a transform carousel. The rail is a real
 * scrolling element, so a trackpad swipe, a shift-wheel, a touch drag and the
 * arrow buttons all drive the same thing, and the browser keeps a focused card
 * in view on its own when someone tabs through. A transform carousel has to
 * reimplement every one of those, usually badly.
 *
 * Deliberately NOT the reference layout in two respects. The lede stays on the
 * left under the heading, where Rivago has always put it — the reference runs
 * its body copy down the right-hand side, which is the most recognisable thing
 * about that page. And the cards keep their tag chips, which the reference has
 * no equivalent of. Same mechanic, different page.
 */

const GAP = 24;

export default function IndustryRail() {
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
    const card = el.querySelector<HTMLElement>(".ind-card");
    const stepBy = card ? card.getBoundingClientRect().width + GAP : 320;
    el.scrollBy({ left: stepBy * dir, behavior: "smooth" });
  };

  return (
    <div className="ind-rail-wrap">
      <div
        className={`ind-rail${atEnd ? " at-end" : ""}`}
        ref={railRef}
        tabIndex={0}
        role="group"
        aria-label="Industries — scroll for more"
      >
        {industriesList.map((ind) => (
          <Link className="ind-card" href={`${routes.industries}#${ind.anchor}`} key={ind.title}>
            <div className="ind-icon"><IndustryIcon name={ind.anchor} /></div>
            <div className="ind-title">{ind.title}</div>
            <div className="ind-desc">{ind.desc}</div>
            <div className="ind-tags">
              {ind.tags.map((t) => <span className="ind-tag" key={t}>{t}</span>)}
            </div>
            {/* The only thing on the card that says it is a link, so it is
                on show at rest. It used to be opacity:0 until :hover or
                :focus-visible, with no (hover: hover) guard — on a phone or
                tablet there is no hover, so it never appeared at all and the
                card gave no sign it went anywhere. */}
            <span className="ind-more">
              Learn more
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        ))}
      </div>

      {/* Against the right edge, stacked, over the card that is peeking in. */}
      <div className="ind-railnav">
        <button type="button" className="ind-railbtn" onClick={() => go(-1)} disabled={atStart} aria-label="Previous industries">
          <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ transform: "rotate(180deg)" }}>
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button type="button" className="ind-railbtn" onClick={() => go(1)} disabled={atEnd} aria-label="More industries">
          <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
