"use client";

import { useEffect, useRef } from "react";

type Particle = { a: number; dist: number; size: number; speed: number; opacity: number };

export default function OrbCanvas({ size }: { size: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    c.width = size * dpr;
    c.height = size * dpr;
    c.style.width = size + "px";
    c.style.height = size + "px";
    const ctx = c.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);
    const cx = size / 2,
      cy = size / 2,
      r = size / 2 - 2;
    let angle = 0;
    let raf = 0;

    const particles: Particle[] = Array.from({ length: 12 }, (_, i) => ({
      a: (i / 12) * Math.PI * 2,
      dist: r * 0.88 + Math.random() * r * 0.18,
      size: Math.random() * 2 + 0.8,
      speed: 0.004 + Math.random() * 0.003,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, size, size);

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.clip();

      const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      bg.addColorStop(0, "#00A882");
      bg.addColorStop(0.45, "#006F5C");
      bg.addColorStop(0.75, "#003830");
      bg.addColorStop(1, "#000D0A");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, size, size);

      const hx = cx + Math.cos(angle) * r * 0.22;
      const hy = cy + Math.sin(angle) * r * 0.22 - r * 0.15;
      const sp = ctx.createRadialGradient(hx, hy, 0, hx, hy, r * 0.55);
      sp.addColorStop(0, "rgba(200,255,235,0.9)");
      sp.addColorStop(0.25, "rgba(100,230,195,0.5)");
      sp.addColorStop(0.55, "rgba(20,160,130,0.15)");
      sp.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = sp;
      ctx.fillRect(0, 0, size, size);

      const ig = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 0.6);
      ig.addColorStop(0, "rgba(0,180,150,0.14)");
      ig.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = ig;
      ctx.fillRect(0, 0, size, size);

      const rim = ctx.createRadialGradient(cx, cy, r * 0.5, cx, cy, r);
      rim.addColorStop(0, "rgba(0,0,0,0)");
      rim.addColorStop(1, "rgba(0,5,5,0.65)");
      ctx.fillStyle = rim;
      ctx.fillRect(0, 0, size, size);

      const fr = ctx.createRadialGradient(cx, cy, r * 0.78, cx, cy, r);
      fr.addColorStop(0, "rgba(0,0,0,0)");
      fr.addColorStop(1, "rgba(0,210,170,0.24)");
      ctx.fillStyle = fr;
      ctx.fillRect(0, 0, size, size);

      ctx.restore();

      particles.forEach((p) => {
        p.a += p.speed;
        const px = cx + Math.cos(p.a) * p.dist * (size / 360);
        const py = cy + Math.sin(p.a) * p.dist * (size / 360) * 0.35;
        const fade = (Math.sin(p.a) + 1) / 2;
        ctx.save();
        ctx.globalAlpha = p.opacity * (0.3 + fade * 0.7);
        ctx.fillStyle = "#3DFF87";
        ctx.beginPath();
        ctx.arc(px, py, p.size * (size / 360), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      angle += 0.006;
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(raf);
  }, [size]);

  return <canvas ref={canvasRef} />;
}
