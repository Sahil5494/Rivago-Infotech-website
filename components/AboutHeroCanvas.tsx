"use client";

import { useEffect, useRef } from "react";

/* The About hero's motion background.
 *
 * CANVAS, NOT VIDEO, and the reason is in the repo rather than a preference:
 * public/assets/services/LICENCES.md records that video was requested for the
 * services carousel and could not be obtained — the Adobe Stock search
 * returns zero results for contentType "Video" on every query tried, and the
 * sandbox proxy refuses every other host. There is no footage to play. A
 * drawn background also weighs a couple of kilobytes against a couple of
 * megabytes, and never shows a first frame that does not match the palette.
 *
 * WHAT IT DRAWS is a market being mapped: points that drift, and lines that
 * appear between them only while they are close enough to be related. That is
 * the literal shape of the work — and it is the firm's own language, since
 * the footer says Rivago "maps entire markets". It is not an abstract
 * gradient chosen because it looked expensive.
 *
 * COST. One rAF loop, roughly 46 points at 1440 and fewer on a phone, and the
 * neighbour test is O(n²) over that count — a few hundred distance checks a
 * frame, which is nothing. It pauses entirely when the hero scrolls out of
 * view, so the loop is not running while someone reads the rest of the page.
 *
 * REDUCED MOTION stops it dead: the points are drawn once, in position, and
 * no loop starts. The hero still has a composition, just a still one.
 */
export default function AboutHeroCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    type P = { x: number; y: number; vx: number; vy: number; r: number };
    let pts: P[] = [];

    const LINK = 150; // px within which two points are drawn as related

    function seed() {
      /* Density by area rather than a fixed count, so a phone does not draw a
         desktop's worth of points into a quarter of the space. */
      const target = Math.round(Math.min(58, Math.max(16, (w * h) / 26000)));
      pts = Array.from({ length: target }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        r: 0.8 + Math.random() * 1.5,
      }));
    }

    function resize() {
      const rect = cv!.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      cv!.width = Math.round(w * dpr);
      cv!.height = Math.round(h * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);

      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > LINK * LINK) continue;
          /* Opacity falls off with distance, so a link fades in as two points
             approach instead of snapping on at the threshold. */
          const o = (1 - Math.sqrt(d2) / LINK) * 0.3;
          ctx!.strokeStyle = `rgba(61,255,135,${o.toFixed(3)})`;
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.moveTo(a.x, a.y);
          ctx!.lineTo(b.x, b.y);
          ctx!.stroke();
        }
      }

      for (const p of pts) {
        ctx!.fillStyle = "rgba(61,255,135,0.55)";
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function step() {
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        /* Wrap rather than bounce. Bouncing puts every point on a wall
           eventually and the field visibly collects at the edges. */
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;
      }
      draw();
    }

    resize();

    if (reduced) {
      draw();
      const ro = new ResizeObserver(() => { resize(); draw(); });
      ro.observe(cv);
      return () => ro.disconnect();
    }

    let raf = 0;
    let running = false;
    const start = () => { if (!running) { running = true; loop(); } };
    const stop = () => { running = false; cancelAnimationFrame(raf); };
    function loop() {
      if (!running) return;
      step();
      raf = requestAnimationFrame(loop);
    }

    /* Nothing animates while the hero is off screen. */
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? start() : stop()),
      { threshold: 0 },
    );
    io.observe(cv);

    const ro = new ResizeObserver(() => resize());
    ro.observe(cv);

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
    };
  }, []);

  /* aria-hidden and no role: it carries no information a screen reader needs,
     and the hero's meaning is entirely in the heading above it. */
  return <canvas className="ah-canvas" ref={ref} aria-hidden="true" />;
}
