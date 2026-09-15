"use client";

import { useEffect, useRef } from "react";
import { STAGES } from "@/lib/process";

/* The five stages as a drawn timeline — a centre rail that fills as you
 * scroll, with the steps alternating either side of it.
 *
 * This replaces a five-tab interface. Tabs were the wrong container for a
 * process twice over: a sequence is the one thing a reader needs to see end
 * to end, and only the selected panel existed in the DOM, so four fifths of
 * the copy never reached a crawler and four of the five tabs pointed
 * aria-controls at element ids that were not on the page. Everything is in
 * the markup here, in an <ol>, in order.
 *
 * MOTION. One mechanism drives all of it. On scroll we take an anchor line
 * across the viewport, measure how far the timeline has passed it, and
 * derive two things: how much of the rail is drawn, and how many nodes have
 * been reached. A step lights as the rail arrives at it, so the reveal reads
 * as one line being drawn rather than as five unrelated fade-ins.
 *
 * NO REACT STATE. The handler writes a custom property and toggles a class;
 * nothing here belongs in a render. Driving it through useState would have
 * re-rendered five steps on every scroll frame to produce markup identical
 * to the last one, and ESLint's set-state-in-effect rule catches exactly
 * that. Reads are batched into one rAF per scroll burst, and the only write
 * is --pt-fill plus a classList toggle, so no frame does layout.
 *
 * NOTHING IS EVER INVISIBLE. The rail defaults to scaleY(1) and the steps to
 * full opacity; the dimmed resting state lives behind .pt.anim, which this
 * component adds after mounting. With JavaScript off, before hydration, or
 * for anything reading the markup, the timeline is simply there and complete.
 * The animation can never be the reason the section is blank.
 *
 * Reduced motion: the rail stays drawn, every node is lit, .anim is never
 * added and no listener is attached.
 */

const Tick = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8.5l3.2 3.2L13 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ProcessTimeline() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const steps = Array.from(wrap.querySelectorAll<HTMLElement>(".pt-step"));
    let raf = 0;

    const measure = () => {
      raf = 0;
      const r = wrap.getBoundingClientRect();
      // Two thirds down the viewport: far enough in that a step is properly
      // on screen when it lights, high enough that the last one lights
      // before the section leaves.
      const anchor = window.innerHeight * 0.66;
      const fill = Math.max(0, Math.min(1, (anchor - r.top) / Math.max(1, r.height)));
      wrap.style.setProperty("--pt-fill", fill.toFixed(4));
      for (const step of steps) {
        const node = step.querySelector<HTMLElement>(".pt-node");
        if (!node) continue;
        const nr = node.getBoundingClientRect();
        step.classList.toggle("in", nr.top + nr.height / 2 <= anchor);
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };

    // Measure first, then switch the dimmed resting state on, so steps
    // already past the anchor carry .in in the same paint and never flash.
    measure();
    wrap.classList.add("anim");

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pt" ref={wrapRef}>
      <div className="pt-rail" aria-hidden="true">
        <span className="pt-rail-fill" />
      </div>

      <ol className="pt-steps">
        {STAGES.map((s) => (
          <li className="pt-step" key={s.n}>
            <div className="pt-body">
              <div className="pt-eyb">Stage {s.n}</div>
              <h3 className="pt-h">{s.name}</h3>
              <p className="pt-d">{s.short}</p>
              <div className="pt-get">
                <span className="pt-get-ico"><Tick /></span>
                <span className="pt-get-l">You get</span>
                <b>{s.deliverable}</b>
              </div>
            </div>
            {/* The numeral repeats "Stage 01" directly beside it, so it is
                decoration to a screen reader rather than a second reading. */}
            <div className="pt-node" aria-hidden="true">{s.n}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}
