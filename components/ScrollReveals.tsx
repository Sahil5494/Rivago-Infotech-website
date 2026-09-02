"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function animateCounter(el: Element, target: number, suffix: string, dur: number) {
  const start = performance.now();
  function step(now: number) {
    const p = Math.min((now - start) / dur, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(e * target) + suffix;
    if (p < 1) requestAnimationFrame(step); else el.textContent = target + suffix;
  }
  requestAnimationFrame(step);
}

export default function ScrollReveals() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(["*"]);

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isNewHome = Boolean(document.querySelector(".rv-home"));

      if (isNewHome) {
        if (!reduced) {
          const hero = gsap.timeline({ delay: 0.12 });
          hero.fromTo(".rv-kicker", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: .55, ease: "power3.out" })
            .fromTo(".rv-display", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: .8, ease: "power3.out" }, "-=.28")
            .fromTo(".rv-hero-copy", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .65, ease: "power3.out" }, "-=.38")
            .fromTo(".rv-actions", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: .55, ease: "power3.out" }, "-=.32")
            .fromTo(".rv-proof", { opacity: 0 }, { opacity: 1, duration: .5 }, "-=.2")
            .fromTo(".rv-hero-visual", { opacity: 0, scale: .96 }, { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }, "-=.8");

          gsap.to(".rv-hero-visual", { y: -38, ease: "none", scrollTrigger: { trigger: ".rv-hero", start: "top top", end: "bottom top", scrub: 1.2 } });
          gsap.utils.toArray<Element>(".rv-home .gs").forEach((el) => {
            if (el.closest(".rv-hero")) return;
            gsap.fromTo(el, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: .7, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } });
          });
          [
            [".rv-signal-step", ".rv-signal"],
            [".rv-intel-step", ".rv-intel-flow"],
            [".rv-process-card", ".rv-process-grid"],
            [".rv-service-card", ".rv-service-grid"],
            [".rv-industry", ".rv-industry-grid"],
            [".rv-case", ".rv-case-grid"],
          ].forEach(([items, trigger]) => {
            if (!document.querySelector(trigger)) return;
            gsap.fromTo(items, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: .65, stagger: .08, ease: "power3.out", scrollTrigger: { trigger, start: "top 82%", once: true } });
          });
        } else {
          gsap.set(".rv-home .gs", { opacity: 1, clearProps: "transform" });
        }
        ScrollTrigger.refresh();
        return;
      }

      if (!reduced && document.querySelector(".hero")) {
        const tl = gsap.timeline({ delay: 0.2 });
        [".hero-badge", ".hero-h1", ".hero-sub", ".hero-btns", ".hero-proof"].forEach((sel, i) => {
          tl.to(sel, { opacity: 1, duration: 0.7, ease: "power3.out" }, i * 0.16).from(sel, { y: i < 4 ? 20 : 16, duration: 0.7, ease: "power3.out" }, i * 0.16);
        });
        gsap.to(".hphoto img", { scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.5 }, y: -150, ease: "none" });
      }
      if (!reduced && document.querySelector(".orb-wrap")) gsap.to(".orb-wrap", { y: -18, duration: 3.6, ease: "sine.inOut", yoyo: true, repeat: -1 });
      if (!reduced && document.querySelector(".cta-orb")) gsap.to(".cta-orb", { y: -10, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1 });
      if (!reduced) {
        gsap.utils.toArray<Element>(".gs").forEach((el) => {
          if (el.closest(".hero")) return;
          gsap.fromTo(el, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: .72, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
        });
        ([[".fc", ".feat-grid"], [".proc-step", ".proc-grid"]] as const).forEach(([sel, trig]) => {
          if (!document.querySelector(trig)) return;
          gsap.fromTo(sel, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: .68, ease: "power3.out", stagger: .1, scrollTrigger: { trigger: trig, start: "top 82%", toggleActions: "play none none none" } });
        });
      }
      const panel = document.querySelector(".prec-panel");
      const c1 = document.getElementById("c1"); const c2 = document.getElementById("c2"); const c3 = document.getElementById("c3"); const c4 = document.getElementById("c4");
      if (!reduced && panel && c1 && c2 && c3 && c4) ScrollTrigger.create({ trigger: panel, start: "top 72%", once: true, onEnter: () => { animateCounter(c1, 48, "h", 1100); animateCounter(c2, 94, "%", 1300); animateCounter(c3, 500, "+", 1500); animateCounter(c4, 87, "%", 1300); } });
      ScrollTrigger.refresh();
    })();
    return () => { cancelled = true; import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => ScrollTrigger.getAll().forEach((t) => t.kill())); };
  }, [pathname]);
  return null;
}
