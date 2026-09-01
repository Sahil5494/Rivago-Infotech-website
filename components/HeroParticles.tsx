"use client";

import { useEffect, useRef } from "react";

class Pt {
  x = 0;
  y = 0;
  s = 0;
  vx = 0;
  vy = 0;
  op = 0;
  life = 1;
  d = 0;
  W: number;
  H: number;
  constructor(W: number, H: number) {
    this.W = W;
    this.H = H;
    this.reset();
  }
  reset() {
    this.x = Math.random() * this.W;
    this.y = Math.random() * this.H;
    this.s = Math.random() * 1.3 + 0.3;
    this.vx = (Math.random() - 0.5) * 0.2;
    this.vy = -Math.random() * 0.35 - 0.08;
    this.op = Math.random() * 0.3 + 0.04;
    this.life = 1;
    this.d = Math.random() * 0.003 + 0.001;
  }
  tick() {
    this.x += this.vx;
    this.y += this.vy;
    this.life -= this.d;
    if (this.life <= 0 || this.y < -8) this.reset();
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.globalAlpha = this.op * this.life;
    ctx.fillStyle = Math.random() > 0.5 ? "#3DFF87" : "#00D4A8";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.s, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const pc = canvasRef.current;
    if (!pc) return;
    const pctx = pc.getContext("2d");
    if (!pctx) return;
    let W = 0,
      H = 0;
    let pts: Pt[] = [];
    let raf = 0;

    function resize() {
      if (!pc) return;
      W = pc.width = pc.offsetWidth;
      H = pc.height = pc.offsetHeight;
      pts = Array.from({ length: 85 }, () => new Pt(W, H));
    }
    resize();
    window.addEventListener("resize", resize, { passive: true });

    function loop() {
      if (!pctx) return;
      pctx.clearRect(0, 0, W, H);
      pts.forEach((p) => {
        p.tick();
        p.draw(pctx);
      });
      raf = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas id="particles" ref={canvasRef} />;
}
