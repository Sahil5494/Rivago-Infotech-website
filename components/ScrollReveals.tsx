"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function animateCounter(el: Element, target: number, suffix: string, dur: number) {
  const start = performance.now();
  function step(now: number) {
    const p = Math.min((now - start) / dur, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(e * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target + suffix;
  }
  requestAnimationFrame(step);
}

export default function ScrollReveals() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      // Reset any triggers left over from the previous route.
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(["*"]);

      // Hero entrance
      if (document.querySelector(".hero")) {
        const tl = gsap.timeline({ delay: 0.2 });
        [".hero-badge", ".hero-h1", ".hero-sub", ".hero-btns", ".hero-proof"].forEach((sel, i) => {
          tl.to(sel, { opacity: 1, duration: 0.7, ease: "power3.out" }, i * 0.16).from(
            sel,
            { y: i < 4 ? 20 : 16, duration: 0.7, ease: "power3.out" },
            i * 0.16
          );
        });

        gsap.to(".hphoto img", {
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.5 },
          y: -150,
          ease: "none",
        });
      }

      // Orb float
      if (document.querySelector(".orb-wrap")) {
        gsap.to(".orb-wrap", { y: -18, duration: 3.6, ease: "sine.inOut", yoyo: true, repeat: -1 });
      }
      if (document.querySelector(".cta-orb")) {
        gsap.to(".cta-orb", { y: -10, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1 });
      }

      // Section reveals
      gsap.utils.toArray<Element>(".gs").forEach((el) => {
        if (el.closest(".hero")) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.72,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
          }
        );
      });

      // Staggered grids
      ([
        [".fc", ".feat-grid"],
        [".proc-step", ".proc-grid"],
      ] as const).forEach(([sel, trig]) => {
        if (!document.querySelector(trig)) return;
        gsap.fromTo(
          sel,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.68,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: { trigger: trig, start: "top 82%", toggleActions: "play none none none" },
          }
        );
      });

      // Counters
      const panel = document.querySelector(".prec-panel");
      const c1 = document.getElementById("c1");
      const c2 = document.getElementById("c2");
      const c3 = document.getElementById("c3");
      const c4 = document.getElementById("c4");
      if (panel && c1 && c2 && c3 && c4) {
        ScrollTrigger.create({
          trigger: panel,
          start: "top 72%",
          once: true,
          onEnter: () => {
            animateCounter(c1, 48, "h", 1100);
            animateCounter(c2, 94, "%", 1300);
            animateCounter(c3, 500, "+", 1500);
            animateCounter(c4, 87, "%", 1300);
          },
        });
      }

      ScrollTrigger.refresh();
    })();

    return () => {
      cancelled = true;
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      });
    };
  }, [pathname]);

  return null;
}
