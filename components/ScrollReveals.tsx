"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveals() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;


    // Everything below animates *from* a hidden state to the resting state the
    // markup already renders. Nothing is gated behind opacity:0 in CSS, so if
    // this module fails to load, or motion is reduced, the page stays readable
    // instead of going blank.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    (async () => {
      let mods;
      try {
        mods = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      } catch {
        return; // Animation is an enhancement — content is already visible.
      }
      if (cancelled) return;
      const gsap = mods[0].default;
      const { ScrollTrigger } = mods[1];
      gsap.registerPlugin(ScrollTrigger);

      // Reset any triggers left over from the previous route.
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(["*"]);

      // Hero entrance. These used to be held at opacity:0 by the stylesheet and
      // animated *to* 1, which left the headline invisible whenever this script
      // did not run. They now rest visible and animate from hidden instead.
      if (document.querySelector(".hero")) {
        const tl = gsap.timeline({ delay: 0.2 });
        [".hero-badge", ".hero-h1", ".hero-sub", ".hero-btns", ".hero-proof"].forEach((sel, i) => {
          tl.from(
            sel,
            { opacity: 0, y: i < 4 ? 20 : 16, duration: 0.7, ease: "power3.out" },
            i * 0.16
          );
        });

        gsap.to(".hphoto img", {
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.5 },
          y: -150,
          ease: "none",
        });
      }

      // Orb float. The landing page's .orb-wrap is gone; .cta-orb remains.
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
      // .proc-grid dropped with the landing PROCESS section. Both entries are
      // guarded by the trigger check below, so this list only shrinks.
      ([
        [".fc", ".feat-grid"],
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

      // The counters that drove the old performance panel were removed with
      // it — their target values were unmeasured literals.

      ScrollTrigger.refresh();

      /* refresh() measures by scrolling the window to 0 and then restoring
         the position it found. On a page opened at an anchor, that position
         is wherever the browser's jump to the anchor had got to when this
         ran — measured, y=57 of 5,686 for /about#offices — so it "restored"
         the page to a few lines below the top and the jump never finished.
         Every link into a section on another page (the About menu's Our
         story and Offices, the footer's office links) landed at the top.
         Re-apply the anchor once refresh has done its measuring. Instant,
         not smooth: this corrects a position the reader already asked for;
         it is not a movement they should watch.

         html{scroll-behavior:smooth} is switched off around the correction.
         With it on, the browser's own smooth scroll to the anchor was still
         in flight, and the two collided: the page overshot by 20-216px,
         varying run to run. A second pass two frames later catches anything
         that settled after the first. */
      const id = decodeURIComponent(window.location.hash.slice(1));
      const target = id ? document.getElementById(id) : null;
      if (target) {
        const html = document.documentElement;
        const prev = html.style.scrollBehavior;
        html.style.scrollBehavior = "auto";
        /* offsetTop, not getBoundingClientRect: the rect includes transforms,
           and a target that is itself a .gs reveal (About's #story is) is
           mid-slide here — reading it put the section 17px under the bar
           once the slide finished. */
        const layoutTop = (el: HTMLElement) => {
          let y = 0;
          for (let n: HTMLElement | null = el; n; n = n.offsetParent as HTMLElement | null) y += n.offsetTop;
          return y;
        };
        const go = () => window.scrollTo(0, layoutTop(target));
        go();
        requestAnimationFrame(() => requestAnimationFrame(() => {
          if (!cancelled) go();
          html.style.scrollBehavior = prev;
        }));
      }
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
