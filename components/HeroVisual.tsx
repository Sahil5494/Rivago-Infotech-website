"use client";

import { useEffect, useRef } from "react";

/* The hero's right-hand column.
 *
 * It draws the one thing this company actually does: a pool of candidates,
 * a search passing through it, and a handful resolving into a shortlist.
 * Abstract on purpose — there is no name, no figure and no claim in it,
 * because none of those are verified. It is a shape, not a statistic.
 *
 * Canvas rather than SVG or a video: it is a few KB in the bundle, it is
 * sharp at any DPR, it costs no licence, and it does not drop a dark
 * rectangle into a light hero the way a photograph or a screen recording
 * would.
 *
 * Colours are read from the CSS custom properties at mount, so the drawing
 * follows whichever palette the surrounding context carries — swap the
 * hero between .lt and .inv and this follows without edits here.
 */

type Dot = { x: number; y: number; r: number; phase: number };
type Pick = { dot: number; slot: number; departAt: number };

const POOL = 140;
const SHORTLIST = 5;

const SCAN_MS = 5200; // the sweep crossing the pool
const TRAVEL_MS = 1500; // one candidate moving to its slot
const HOLD_MS = 2000; // the completed shortlist, at rest
const FADE_MS = 900; // clearing, before the next pass
const CYCLE = SCAN_MS + TRAVEL_MS + HOLD_MS + FADE_MS;

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export default function HeroVisual() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cs = getComputedStyle(canvas);
    const read = (name: string, fallback: string) => cs.getPropertyValue(name).trim() || fallback;
    const ACCENT = read("--accent", "#0E5C3C");
    const MUTED = read("--text-3", "#4F5252");
    const RULE = read("--rule-2", "#C9CDCB");
    const GROUND = read("--surface-1", "#F2F7F5");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let dots: Dot[] = [];
    let picks: Pick[] = [];
    let slots: { x: number; y: number }[] = [];
    let poolRight = 0;
    let cycleStart = performance.now();
    let raf = 0;

    /* The pool is a jittered grid rather than pure noise: a random scatter
       clumps and reads as static, a strict grid reads as a spreadsheet. */
    function layout() {
      const rect = wrap!.getBoundingClientRect();
      w = Math.max(280, rect.width);
      h = Math.max(260, rect.height);

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.round(w * dpr);
      canvas!.height = Math.round(h * dpr);
      canvas!.style.width = w + "px";
      canvas!.style.height = h + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      poolRight = w * 0.62;
      const padX = w * 0.03;
      const padY = h * 0.08;
      const cols = Math.round(Math.sqrt(POOL * ((poolRight - padX * 2) / (h - padY * 2))));
      const rows = Math.ceil(POOL / cols);
      const gx = (poolRight - padX * 2) / Math.max(cols - 1, 1);
      const gy = (h - padY * 2) / Math.max(rows - 1, 1);

      dots = [];
      for (let i = 0; i < POOL; i++) {
        const c = i % cols;
        const r = Math.floor(i / cols);
        // deterministic jitter, so a resize does not reshuffle the field
        const jx = (Math.sin(i * 12.9898) * 43758.5453) % 1;
        const jy = (Math.sin(i * 78.233) * 12345.6789) % 1;
        dots.push({
          x: padX + c * gx + jx * gx * 0.55,
          y: padY + r * gy + jy * gy * 0.55 + (c % 2) * gy * 0.3,
          r: 1.6 + Math.abs(jx) * 1.5,
          phase: Math.abs(jy) * Math.PI * 2,
        });
      }

      const slotX = w * 0.84;
      const slotGap = Math.min(52, (h * 0.62) / (SHORTLIST - 1));
      const slotTop = h / 2 - (slotGap * (SHORTLIST - 1)) / 2;
      slots = Array.from({ length: SHORTLIST }, (_, i) => ({ x: slotX, y: slotTop + i * slotGap }));
    }

    /* A fresh selection each pass. Picks are sorted by x so they leave the
       pool in the order the sweep reaches them — the movement has to agree
       with the thing causing it. */
    function reselect() {
      const chosen = new Set<number>();
      while (chosen.size < SHORTLIST) chosen.add(Math.floor(Math.random() * dots.length));
      picks = [...chosen]
        .sort((a, b) => dots[a].x - dots[b].x)
        .map((dot, slot) => ({ dot, slot, departAt: (dots[dot].x / poolRight) * SCAN_MS }));
    }

    function draw(now: number) {
      const t = reduced ? CYCLE - HOLD_MS - FADE_MS : (now - cycleStart) % CYCLE;
      if (!reduced && now - cycleStart > CYCLE) {
        cycleStart = now;
        reselect();
      }

      ctx!.clearRect(0, 0, w, h);

      const scanX = easeInOut(Math.min(t / SCAN_MS, 1)) * poolRight;
      const settled = t > SCAN_MS + TRAVEL_MS;
      const fade = settled ? 1 - Math.max(0, (t - SCAN_MS - TRAVEL_MS - HOLD_MS) / FADE_MS) : 1;

      /* The sweep. Both ends of the gradient must be transparent — a band
         that ends on a colour stop paints a hard edge down the canvas and
         reads as a grey rectangle rather than a pass of light. */
      if (!reduced && t < SCAN_MS) {
        const x0 = scanX - 150;
        const x1 = scanX + 90;
        const band = ctx!.createLinearGradient(x0, 0, x1, 0);
        band.addColorStop(0, "transparent");
        band.addColorStop(0.62, ACCENT);
        band.addColorStop(1, "transparent");
        ctx!.globalAlpha = 0.14;
        ctx!.fillStyle = band;
        ctx!.fillRect(x0, 0, x1 - x0, h);
        ctx!.globalAlpha = 1;
      }

      // ── the pool
      const departed = new Set(picks.filter((p) => t > p.departAt).map((p) => p.dot));
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        if (departed.has(i)) continue;
        const near = !reduced && t < SCAN_MS ? Math.max(0, 1 - Math.abs(d.x - scanX) / 70) : 0;
        ctx!.beginPath();
        ctx!.arc(d.x, d.y, d.r + near * 1.1, 0, Math.PI * 2);
        ctx!.fillStyle = near > 0.15 ? ACCENT : MUTED;
        ctx!.globalAlpha = 0.3 + near * 0.6;
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;

      /* A hairline down the slot column. Five loose circles read as five
         unrelated dots; strung on a rule they read as one list. */
      ctx!.beginPath();
      ctx!.moveTo(slots[0].x, slots[0].y);
      ctx!.lineTo(slots[SHORTLIST - 1].x, slots[SHORTLIST - 1].y);
      ctx!.strokeStyle = RULE;
      ctx!.globalAlpha = 0.55 * fade;
      ctx!.lineWidth = 1;
      ctx!.stroke();
      ctx!.globalAlpha = 1;

      // ── the empty slots
      for (const s of slots) {
        // filled with the page ground so the hairline does not run through
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, 5, 0, Math.PI * 2);
        ctx!.fillStyle = GROUND;
        ctx!.globalAlpha = fade;
        ctx!.fill();
        ctx!.strokeStyle = RULE;
        ctx!.globalAlpha = 0.85 * fade;
        ctx!.lineWidth = 1;
        ctx!.stroke();
      }
      ctx!.globalAlpha = 1;

      // ── candidates in transit, and those already placed
      for (const p of picks) {
        if (t <= p.departAt) continue;
        const prog = Math.min((t - p.departAt) / TRAVEL_MS, 1);
        const e = easeOut(prog);
        const from = dots[p.dot];
        const to = slots[p.slot];
        // a shallow arc reads as a decision rather than a conveyor belt
        const mx = (from.x + to.x) / 2;
        const my = (from.y + to.y) / 2 - (to.x - from.x) * 0.12;
        const x = (1 - e) * (1 - e) * from.x + 2 * (1 - e) * e * mx + e * e * to.x;
        const y = (1 - e) * (1 - e) * from.y + 2 * (1 - e) * e * my + e * e * to.y;

        if (prog < 1) {
          ctx!.beginPath();
          ctx!.moveTo(from.x, from.y);
          ctx!.quadraticCurveTo(mx, my, x, y);
          ctx!.strokeStyle = ACCENT;
          ctx!.globalAlpha = 0.3 * (1 - prog);
          ctx!.lineWidth = 1;
          ctx!.stroke();
        }

        ctx!.beginPath();
        ctx!.arc(x, y, prog < 1 ? 4 : 5, 0, Math.PI * 2);
        ctx!.fillStyle = ACCENT;
        ctx!.globalAlpha = fade;
        ctx!.fill();

        if (prog === 1) {
          ctx!.beginPath();
          ctx!.arc(x, y, 10, 0, Math.PI * 2);
          ctx!.strokeStyle = ACCENT;
          ctx!.globalAlpha = 0.28 * fade;
          ctx!.stroke();
        }
      }
      ctx!.globalAlpha = 1;

      if (!reduced) raf = requestAnimationFrame(draw);
    }

    layout();
    reselect();
    if (reduced) draw(performance.now());
    else raf = requestAnimationFrame(draw);

    const ro = new ResizeObserver(() => {
      layout();
      reselect();
      if (reduced) draw(performance.now());
    });
    ro.observe(wrap);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="hero-vis gs" ref={wrapRef}>
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="A field of candidates, with a search passing through it and five resolving into a shortlist."
      />
    </div>
  );
}
