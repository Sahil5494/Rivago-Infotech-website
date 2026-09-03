"use client";

import { useEffect, useRef } from "react";
import { gdHubs } from "../data";

/* Continents are a dot matrix sampled onto the sphere and back-face culled.
   The reference implementation sampled them at runtime from a world-mask PNG;
   that mask is pre-rasterised here into a bitmask (one bit per 2.4-degree grid
   cell, base64-encoded, ~1.6KB) so the globe has no image dependency that can
   404 and silently leave the sphere blank. The grid matches the reference
   exactly: latitudes -78..78 and longitudes -180..177.6, both in 2.4 steps. */
const LAND_MASK =
  "APz///8fAOH/////////////AADg////PwAA/v//////////PwAAAABwDDwAAP7//////////z8AAAAAAAAPAACA////8/////8HAAAAAACAAAAAAADA//D///8DAAAAAAAAwAAAAAAAAAEAEAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAMARAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAEAAAAAAAAAAAAAPAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAGAAAAAAAIADAAAAAAAAAAAAAAQgAAAAAADgAwAAAAAAAAAAAAAAEAAAAAAA+AMAAAAAAAAAAADwAAQAAAAAAH4BAAAAAAAAAAABPoAAAAAAAAD/AAAA4AEAAADA4x8AAAAAAADAfwAAAPgAAAAA+P8HAAAAAAAA8B8AAAB/AAAAAP7/AQAAAAAAAPwPAADAHwQAAID/fwAAAAAAAAD/DwAA+A8BAADg/w8AAAAAAADA/wcAAP7DAAAA4P8DAAAAAAAA8P8BAMD/MQAAAPA/AAgAAAAAAP9/AADw/wgAAAD4DAAAAAAAAMD/HwAA+D8AAAAAMAAAAAAAAAD4/w8AAP4PAAAAAAAAAAAAAAAA/v8HAID/AwAAAFJQEAAAAAAAwP//AQDg/wAAAACAHgAAAAAAAPD/HwAA/D8AAACj4AEAAAAAAAD8/wAAgP8fAABgbgQAAAAAAAAA/h8AAOD/DwAAiCcAAAAAAAAAgP8DAAD4/wcAAIUAAAAAAAAAAOB/AAC+//8DAIBAAgAAAAAAAAD6BwDA////AAAQgAAAAAAAAABAHAAA+P//bwAGIDAAAAAAAAAAGAAAAP///wGAARwAAAAAAAAAgAMAAID//78HcMCHAAAAAAAAAH4IAADg///vBzz4AAAAAAAAAOARBgAA+P///QM/vwAAAAAAAAB4IAAAAP7/P//w//8AAAAAAAAAHwAAAID//++X/v9/AAAAAAAA8AcCAADA///9/v//PwAAAAAAAPqPAAAAwP///////w8AAAAAAID/PwAAAPA/wf////8DAAAAAAD4/z8AAAD4A/D///9/9AAAAAAA/v8PAAAAh5L//P//fzEAAAAAwP//BwAAwCH1P////1cQAAAAAPD//wMAAPCxJ+7///8/AAAAAAD8//8FAADg9+H9////PwEAAAAA////AQAA+P///f///x8AAAAA4P//nwYAAP7///////8vAAAAAPz/v/8AAOD+////////AwAAAMD//+c/AAAU9v///////8AAAALw/3/wAwAAgvL//////x9wAIAD//8HXgAAAND5//////8fEAD4////gAM4AAB8/////////3VA/P///woDDyAAvv//////////3/////9g4Q8cAP7j////////f/D//zPdGPg/AAD/g/r+/////w/gAMCP/QP8PwAADED4/////wMAAAA8ej3A/w8AAAAQgP9/BgAAAAAAWCYD+P8HAAAAMAD+B+AAAAAAAIzA+f//AYAFAAAAAAAAAAA=";
const LAT_START = -78;
const LON_START = -180;
const STEP = 2.4;
const LAT_COUNT = 66;
const LON_COUNT = 150;
const DEG = Math.PI / 180;

function decodeLand() {
  const bin = atob(LAND_MASK);
  const out: { la: number; lo: number }[] = [];
  for (let li = 0; li < LAT_COUNT; li++) {
    for (let oi = 0; oi < LON_COUNT; oi++) {
      const idx = li * LON_COUNT + oi;
      if (bin.charCodeAt(idx >> 3) & (1 << (idx & 7))) {
        out.push({ la: (LAT_START + li * STEP) * DEG, lo: (LON_START + oi * STEP) * DEG });
      }
    }
  }
  return out;
}

export default function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0, cx = 0, cy = 0, R = 0;

    const size = (): void => {
      const r = c.getBoundingClientRect();
      W = r.width;
      H = r.height;
      c.width = W * dpr;
      c.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = W / 2;
      cy = H / 2;
      // Clamped deliberately: the canvas measures 0 inside a flex/grid parent
      // before layout resolves, and an unclamped negative radius kills the loop.
      R = Math.max(1, Math.min(W, H) / 2 - 8);
    };
    size();
    window.addEventListener("resize", size, { passive: true });

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const land = decodeLand();
    const hubs = gdHubs.map((h) => ({
      la: h.lat * DEG,
      lo: h.lon * DEG,
      name: h.name,
      sub: h.sub,
      hq: h.hq,
    }));

    let rot = -1.4;
    let last = performance.now();
    let raf = 0;

    const frame = (now: number): void => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      // Re-measure until layout resolves.
      if (!W || !H || R <= 1) {
        size();
        if (!W || !H || R <= 1) {
          raf = requestAnimationFrame(frame);
          return;
        }
      }

      try {
        if (!reduce) rot += dt * 0.16;
        ctx.clearRect(0, 0, W, H);

        // Ocean sphere + atmosphere.
        const oce = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.15, cx, cy, R);
        oce.addColorStop(0, "rgba(20,46,32,0.55)");
        oce.addColorStop(0.7, "rgba(10,26,18,0.5)");
        oce.addColorStop(1, "rgba(6,16,10,0.5)");
        ctx.fillStyle = oce;
        ctx.beginPath();
        ctx.arc(cx, cy, R, 0, Math.PI * 2);
        ctx.fill();

        const atm = ctx.createRadialGradient(cx, cy, R * 0.92, cx, cy, R * 1.12);
        atm.addColorStop(0, "rgba(61,255,135,0.12)");
        atm.addColorStop(1, "rgba(61,255,135,0)");
        ctx.fillStyle = atm;
        ctx.beginPath();
        ctx.arc(cx, cy, R * 1.12, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "rgba(61,255,135,0.16)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, R, 0, Math.PI * 2);
        ctx.stroke();

        // Land dots.
        for (let i = 0; i < land.length; i++) {
          const la = land[i].la;
          const lo = land[i].lo + rot;
          const x3 = Math.cos(la) * Math.sin(lo);
          const y3 = Math.sin(la);
          const z3 = Math.cos(la) * Math.cos(lo);
          if (z3 <= 0) continue;
          const sx = cx + R * x3;
          const sy = cy - R * y3;
          const a = 0.25 + z3 * 0.55;
          ctx.fillStyle = "rgba(94,224,150," + a.toFixed(3) + ")";
          ctx.beginPath();
          ctx.arc(sx, sy, 1.35 * (0.55 + z3 * 0.6), 0, Math.PI * 2);
          ctx.fill();
        }

        // Hubs, with labels that fade out as they rotate to the back.
        const pulse = (Math.sin(now * 0.004) + 1) / 2;
        for (let k = 0; k < hubs.length; k++) {
          const hu = hubs[k];
          const lo2 = hu.lo + rot;
          const x3 = Math.cos(hu.la) * Math.sin(lo2);
          const y3 = Math.sin(hu.la);
          const z3 = Math.cos(hu.la) * Math.cos(lo2);
          const sx = cx + R * x3;
          const sy = cy - R * y3;
          if (z3 <= 0.02) continue;
          const fade = Math.min(1, (z3 - 0.02) / 0.25);

          ctx.beginPath();
          ctx.arc(sx, sy, (hu.hq ? 6 : 5) + pulse * 9, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(61,255,135," + (0.55 * fade * (1 - pulse)).toFixed(3) + ")";
          ctx.lineWidth = 1.5;
          ctx.stroke();

          const gg = ctx.createRadialGradient(sx, sy, 0, sx, sy, 18);
          gg.addColorStop(0, "rgba(180,255,210," + (0.85 * fade).toFixed(3) + ")");
          gg.addColorStop(0.5, "rgba(61,255,135," + (0.4 * fade).toFixed(3) + ")");
          gg.addColorStop(1, "rgba(61,255,135,0)");
          ctx.fillStyle = gg;
          ctx.beginPath();
          ctx.arc(sx, sy, 18, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = "rgba(230,255,240," + fade.toFixed(3) + ")";
          ctx.beginPath();
          ctx.arc(sx, sy, hu.hq ? 4 : 3, 0, Math.PI * 2);
          ctx.fill();

          if (z3 > 0.34) {
            const rightSide = sx < cx + R * 0.5;
            ctx.textAlign = rightSide ? "left" : "right";
            const lx = rightSide ? sx + 13 : sx - 13;
            ctx.fillStyle = "rgba(240,244,240," + fade.toFixed(3) + ")";
            ctx.font = "600 12px Geist, sans-serif";
            ctx.fillText(hu.name, lx, sy - 3);
            ctx.fillStyle = "rgba(122,140,126," + fade.toFixed(3) + ")";
            ctx.font = "600 8.5px Geist Mono, monospace";
            ctx.fillText(hu.sub, lx, sy + 8);
          }
        }
      } catch {
        /* Never let one bad frame kill the loop. */
      }

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="gd-globe"
      role="img"
      aria-label="Rotating globe showing Rivago hubs in the US, Canada, the UAE and India"
    />
  );
}
