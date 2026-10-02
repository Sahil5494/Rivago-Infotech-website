"use client";

import { useEffect, useRef } from "react";

/* The home page's OUR PROCESS timeline (ProcessTimeline, .pt-*) laid out
 * horizontally, for "How we hire" on /career: a rail across the top, a
 * numbered node on it for each step, the step underneath. Same node, same
 * mono eyebrow, same chip, same reveal — the rail draws and each step lights
 * up as the section scrolls through the reading line.
 *
 * Progress runs over a fixed scroll distance rather than the element's own
 * height: a horizontal row is only ~300px tall, so tying the fill to its
 * height (as the vertical version does) would finish it in one flick.
 * Below 760px it turns vertical, where the same progress drives a vertical
 * rail. Resting state is fully visible; .anim is added only after the first
 * measurement, and reduced motion skips it. */

export type HireStep = { n: string; t: string; d: string; time?: string };

const Clock = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 4.8V8l2.2 1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default function HiringTimeline({ steps }: { steps: HireStep[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    /* The rail runs exactly between the first and last node centres,
       measured — not estimated from percentages, which missed by the
       column gap across the row, and overshot the last node by the length
       of its text when the list turns vertical. */
    const rail = wrap.querySelector<HTMLElement>(".pth-rail");
    const placeRail = () => {
      const nodes = wrap.querySelectorAll<HTMLElement>(".pth-node");
      if (!rail || nodes.length < 2) return;
      const w = wrap.getBoundingClientRect();
      const c = (el: HTMLElement) => { const b = el.getBoundingClientRect(); return { x: b.left + b.width / 2 - w.left, y: b.top + b.height / 2 - w.top }; };
      const a = c(nodes[0]), z = c(nodes[nodes.length - 1]);
      const vertical = Math.abs(z.y - a.y) > Math.abs(z.x - a.x);
      Object.assign(rail.style, vertical
        ? { left: `${a.x - 1}px`, top: `${a.y}px`, width: "2px", height: `${z.y - a.y}px` }
        : { left: `${a.x}px`, top: `${a.y - 1}px`, width: `${z.x - a.x}px`, height: "2px" });
    };
    placeRail();
    const ro = new ResizeObserver(placeRail);
    ro.observe(wrap);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => ro.disconnect();

    const items = Array.from(wrap.querySelectorAll<HTMLElement>(".pth-step"));
    let raf = 0;

    const measure = () => {
      raf = 0;
      const vh = window.innerHeight;
      const top = wrap.getBoundingClientRect().top;
      /* 0 when the row's top reaches 85% of the viewport, 1 at 35%. */
      const p = Math.max(0, Math.min(1, (vh * 0.85 - top) / (vh * 0.5)));
      wrap.style.setProperty("--pt-fill", p.toFixed(4));
      const n = items.length;
      items.forEach((el, i) => el.classList.toggle("in", p >= (n > 1 ? i / (n - 1) : 0) - 0.001));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure);
    };

    measure();
    wrap.classList.add("anim");
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pth" ref={wrapRef}>
      <div className="pth-rail" aria-hidden="true">
        <span className="pth-rail-fill" />
      </div>
      <ol className="pth-steps">
        {steps.map((s) => (
          <li className="pth-step" key={s.n}>
            <div className="pth-node" aria-hidden="true">{s.n.padStart(2, "0")}</div>
            <div className="pth-body">
              <div className="pth-eyb">Step {s.n.padStart(2, "0")}</div>
              <h3 className="pth-h">{s.t}</h3>
              <p className="pth-d">{s.d}</p>
              {s.time && (
                <div className="pth-get">
                  <span className="pth-get-ico"><Clock /></span>
                  <b>{s.time}</b>
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
