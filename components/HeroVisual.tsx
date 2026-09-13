"use client";

import { useEffect, useRef } from "react";

/* The hero's right-hand column: a shortlist forming.
 *
 * A field of candidates on the left, a search passing through it, and one
 * resolving into each discipline on the right. It illustrates the sentence
 * the lede actually makes — "across every industry, every function" — using
 * the same eight verticals the INDUSTRIES section carries. There is no name,
 * no figure and no claim in it, because none of those are verified.
 *
 * Split deliberately between two technologies:
 *   - the labels are real HTML, so they are selectable, crawlable, screen-
 *     readable and crisp at every DPR;
 *   - the canvas behind draws only the pool, the sweep and the travel arcs.
 * The handoff is at the moment of landing: the canvas stops drawing a
 * candidate and the corresponding list row switches on.
 *
 * Colours come from the CSS custom properties at mount, so the drawing
 * follows whichever palette its context carries.
 */

const DISCIPLINES = [
  "Technology",
  "Finance & Banking",
  "Healthcare",
  "Legal",
  "Operations",
  "Engineering",
];

type Dot = { x: number; y: number; r: number };
type Pick = { dot: number; slot: number; departAt: number };

const POOL = 150;
const SCAN_MS = 5600;
const TRAVEL_MS = 1500;
const HOLD_MS = 2600;
const FADE_MS = 900;
const CYCLE = SCAN_MS + TRAVEL_MS + HOLD_MS + FADE_MS;

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export default function HeroVisual() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const list = listRef.current;
    if (!wrap || !canvas || !list) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cs = getComputedStyle(canvas);
    const read = (n: string, f: string) => cs.getPropertyValue(n).trim() || f;
    const ACCENT = read("--accent", "#0E5C3C");
    const MUTED = read("--text-3", "#4F5252");

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rows = Array.from(list.querySelectorAll<HTMLLIElement>("li"));

    let w = 0;
    let h = 0;
    let dots: Dot[] = [];
    let picks: Pick[] = [];
    let targets: { x: number; y: number }[] = [];
    let poolRight = 0;
    let cycleStart = performance.now();
    let raf = 0;
    const lit = new Set<number>();

    function layout() {
      const rect = wrap!.getBoundingClientRect();
      w = Math.max(280, rect.width);
      h = Math.max(240, rect.height);

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.round(w * dpr);
      canvas!.height = Math.round(h * dpr);
      canvas!.style.width = w + "px";
      canvas!.style.height = h + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      /* The arcs must land exactly on the HTML bullets, so the targets are
         measured from the live DOM rather than assumed — the list is real
         text and its rows move with the font and the viewport. */
      targets = rows.map((li) => {
        const b = li.querySelector<HTMLElement>(".hv-dot")!.getBoundingClientRect();
        return { x: b.left + b.width / 2 - rect.left, y: b.top + b.height / 2 - rect.top };
      });

      poolRight = Math.max(60, (targets[0]?.x ?? w * 0.6) - 74);

      const padX = w * 0.02;
      const padY = h * 0.05;
      const cols = Math.max(4, Math.round(Math.sqrt(POOL * ((poolRight - padX * 2) / (h - padY * 2)))));
      const rowsN = Math.ceil(POOL / cols);
      const gx = (poolRight - padX * 2) / Math.max(cols - 1, 1);
      const gy = (h - padY * 2) / Math.max(rowsN - 1, 1);

      // deterministic jitter, so a resize does not reshuffle the field
      dots = Array.from({ length: POOL }, (_, i) => {
        const c = i % cols;
        const r = Math.floor(i / cols);
        const jx = (Math.sin(i * 12.9898) * 43758.5453) % 1;
        const jy = (Math.sin(i * 78.233) * 12345.6789) % 1;
        return {
          x: padX + c * gx + jx * gx * 0.55,
          y: padY + r * gy + jy * gy * 0.55 + (c % 2) * gy * 0.3,
          r: 1.5 + Math.abs(jx) * 1.4,
        };
      });
    }

    function reselect() {
      const chosen = new Set<number>();
      while (chosen.size < targets.length) chosen.add(Math.floor(Math.random() * dots.length));
      picks = [...chosen]
        .sort((a, b) => dots[a].x - dots[b].x)
        .map((dot, slot) => ({ dot, slot, departAt: (dots[dot].x / poolRight) * SCAN_MS }));
      lit.clear();
      rows.forEach((li) => li.classList.remove("on"));
    }

    function setLit(slot: number, on: boolean) {
      if (on === lit.has(slot)) return;
      if (on) lit.add(slot);
      else lit.delete(slot);
      rows[slot]?.classList.toggle("on", on);
    }

    function draw(now: number) {
      if (!reduced && now - cycleStart > CYCLE) {
        cycleStart = now;
        reselect();
      }
      const t = reduced ? SCAN_MS + TRAVEL_MS : now - cycleStart;

      ctx!.clearRect(0, 0, w, h);

      const scanX = easeInOut(Math.min(t / SCAN_MS, 1)) * poolRight;
      const clearing = Math.max(0, (t - SCAN_MS - TRAVEL_MS - HOLD_MS) / FADE_MS);
      const fade = 1 - clearing;

      /* The sweep. Both ends of the gradient have to be transparent — a band
         that ends on a colour stop paints a hard edge down the canvas and
         reads as a grey rectangle rather than a pass of light. */
      if (!reduced && t < SCAN_MS) {
        const x0 = scanX - 150;
        const x1 = scanX + 90;
        const g = ctx!.createLinearGradient(x0, 0, x1, 0);
        g.addColorStop(0, "transparent");
        g.addColorStop(0.62, ACCENT);
        g.addColorStop(1, "transparent");
        ctx!.fillStyle = g;
        ctx!.globalAlpha = 0.14;
        ctx!.fillRect(x0, 0, x1 - x0, h);
        ctx!.globalAlpha = 1;

        /* The gradient tapers left-to-right but stops dead at the canvas top
           and bottom, drawing a faint rectangle against the hero ground. The
           band has to fade on all four sides. Erasing through a vertical
           mask does that in one pass; painting it as horizontal strips of
           varying alpha leaves a visible seam at every strip boundary.
           Safe here because the sweep is the first thing drawn each frame,
           so destination-out can only reach the band itself. */
        const mask = ctx!.createLinearGradient(0, 0, 0, h);
        mask.addColorStop(0, "rgba(0,0,0,1)");
        mask.addColorStop(0.28, "rgba(0,0,0,0)");
        mask.addColorStop(0.72, "rgba(0,0,0,0)");
        mask.addColorStop(1, "rgba(0,0,0,1)");
        ctx!.globalCompositeOperation = "destination-out";
        ctx!.fillStyle = mask;
        ctx!.fillRect(x0, 0, x1 - x0, h);
        ctx!.globalCompositeOperation = "source-over";
      }

      const gone = new Set(picks.filter((p) => t > p.departAt).map((p) => p.dot));
      for (let i = 0; i < dots.length; i++) {
        if (gone.has(i)) continue;
        const d = dots[i];
        const near = !reduced && t < SCAN_MS ? Math.max(0, 1 - Math.abs(d.x - scanX) / 70) : 0;
        ctx!.beginPath();
        ctx!.arc(d.x, d.y, d.r + near * 1.1, 0, Math.PI * 2);
        ctx!.fillStyle = near > 0.15 ? ACCENT : MUTED;
        ctx!.globalAlpha = 0.3 + near * 0.6;
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;

      for (const p of picks) {
        const to = targets[p.slot];
        if (!to || t <= p.departAt) {
          setLit(p.slot, false);
          continue;
        }
        const prog = Math.min((t - p.departAt) / TRAVEL_MS, 1);
        setLit(p.slot, prog === 1 && fade > 0.5);
        if (prog === 1) continue; // the HTML bullet takes over from here

        const e = easeOut(prog);
        const from = dots[p.dot];
        // a shallow arc reads as a decision rather than a conveyor belt
        const mx = (from.x + to.x) / 2;
        const my = (from.y + to.y) / 2 - (to.x - from.x) * 0.12;
        const x = (1 - e) * (1 - e) * from.x + 2 * (1 - e) * e * mx + e * e * to.x;
        const y = (1 - e) * (1 - e) * from.y + 2 * (1 - e) * e * my + e * e * to.y;

        ctx!.beginPath();
        ctx!.moveTo(from.x, from.y);
        ctx!.quadraticCurveTo(mx, my, x, y);
        ctx!.strokeStyle = ACCENT;
        ctx!.globalAlpha = 0.32 * (1 - prog) * fade;
        ctx!.lineWidth = 1;
        ctx!.stroke();

        ctx!.beginPath();
        ctx!.arc(x, y, 4, 0, Math.PI * 2);
        ctx!.fillStyle = ACCENT;
        ctx!.globalAlpha = fade;
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;

      if (!reduced) raf = requestAnimationFrame(draw);
    }

    layout();
    reselect();
    if (reduced) {
      rows.forEach((li) => li.classList.add("on"));
      draw(performance.now());
    } else {
      raf = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(() => {
      layout();
      if (!reduced) reselect();
      else draw(performance.now());
    });
    ro.observe(wrap);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="hero-vis gs" ref={wrapRef}>
      <canvas ref={canvasRef} aria-hidden="true" />
      <div className="hv-panel">
        <div className="hv-eyebrow">Placing across</div>
        <ul className="hv-list" ref={listRef}>
          {DISCIPLINES.map((d) => (
            <li key={d}>
              <span className="hv-dot" aria-hidden="true" />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
