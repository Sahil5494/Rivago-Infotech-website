"use client";

import { useEffect } from "react";

/**
 * Landing-page behaviour. Renders nothing — the page is server-rendered and
 * complete without this file, which is the point: every headline, row and
 * label is in the first painted frame.
 *
 * The motion contract is inverted from the usual reveal pattern. CSS holds
 * the *final* state; this module adds `armed` to pull elements back, then
 * `seen` to release them. If this never runs, or motion is reduced, nothing
 * is armed and nothing is hidden.
 */
export default function HomeClient() {
  useEffect(() => {
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: (() => void)[] = [];

    const hdr = document.getElementById("rvgHdr");
    if (hdr) {
      const onScroll = () => hdr.classList.toggle("on", window.scrollY > 14);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", onScroll));
    }

    if (!still) {
      // .rise masks are authored in the markup; everything else opts in here.
      const settle = Array.from(
        document.querySelectorAll<HTMLElement>(".rvg .spl, .rvg .mk, .rvg .proc, .rvg .dlv, .rvg .stmt2, .rvg .hsub, .rvg .hcta, .rvg .cap, .rvg .marks")
      );
      settle.forEach((el) => el.classList.add("rv"));

      const candidates = [
        ...settle,
        ...Array.from(
          document.querySelectorAll<HTMLElement>(".rvg .rise, .rvg .rr, .rvg .lg, .rvg .tl, .rvg .art")
        ),
      ];

      // Only arm what is below the fold. Anything already on screen renders
      // final and is never pulled back — otherwise the mask on the hero H1
      // clips the headline out of the first frame, which both breaks the
      // "nothing hidden at rest" rule and hands LCP to a paragraph.
      const fold = window.innerHeight;
      const targets = candidates.filter((el) => el.getBoundingClientRect().top > fold * 0.92);
      targets.forEach((el) => el.classList.add("armed"));

      if ("IntersectionObserver" in window) {
        const pending = new Set(targets);
        const release = (el: Element) => {
          el.classList.add("seen");
          pending.delete(el as HTMLElement);
          io.unobserve(el);
        };
        const io = new IntersectionObserver(
          (entries) => entries.forEach((e) => e.isIntersecting && release(e.target)),
          { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
        );
        targets.forEach((t) => io.observe(t));

        // Safety net. A fast flick, an anchor jump or a restored scroll
        // position can outrun the observer, and `.rise` is the one gesture
        // that leaves content genuinely invisible rather than merely offset.
        // Anything that has reached the viewport gets released here whether
        // or not the observer saw it.
        let raf = 0;
        const sweep = () => {
          raf = 0;
          const fold = window.innerHeight;
          pending.forEach((el) => {
            if (el.getBoundingClientRect().top < fold) release(el);
          });
          if (!pending.size) stop();
        };
        const onScroll = () => {
          if (!raf) raf = requestAnimationFrame(sweep);
        };
        const stop = () => {
          window.removeEventListener("scroll", onScroll);
          window.removeEventListener("resize", onScroll);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
        cleanups.push(() => {
          io.disconnect();
          stop();
          if (raf) cancelAnimationFrame(raf);
        });
      } else {
        targets.forEach((t) => t.classList.add("seen"));
      }
    }

    // Services accordion. Native buttons, so Enter and Space already work.
    const eng = document.getElementById("rvgEng");
    if (eng) {
      const closeAll = () => {
        eng.querySelectorAll<HTMLButtonElement>('.rowin[aria-expanded="true"]').forEach((b) => {
          b.setAttribute("aria-expanded", "false");
          b.closest(".row")?.classList.remove("open");
        });
      };
      const onClick = (ev: MouseEvent) => {
        const btn = (ev.target as HTMLElement).closest<HTMLButtonElement>("button.rowin");
        if (!btn) return;
        const wasOpen = btn.getAttribute("aria-expanded") === "true";
        closeAll();
        if (!wasOpen) {
          btn.setAttribute("aria-expanded", "true");
          btn.closest(".row")?.classList.add("open");
        }
      };
      const onKey = (ev: KeyboardEvent) => {
        if (ev.key !== "Escape") return;
        const open = eng.querySelector<HTMLButtonElement>('.rowin[aria-expanded="true"]');
        if (!open) return;
        closeAll();
        open.focus(); // focus returns to the trigger
      };
      eng.addEventListener("click", onClick);
      eng.addEventListener("keydown", onKey);
      cleanups.push(() => {
        eng.removeEventListener("click", onClick);
        eng.removeEventListener("keydown", onKey);
      });
    }

    const burger = document.getElementById("rvgBurger");
    const links = document.getElementById("rvgLinks");
    if (burger && links) {
      const toggle = () => {
        const open = burger.getAttribute("aria-expanded") === "true";
        burger.setAttribute("aria-expanded", String(!open));
        links.classList.toggle("open", !open);
      };
      const onNav = (ev: MouseEvent) => {
        if ((ev.target as HTMLElement).closest("a")) {
          burger.setAttribute("aria-expanded", "false");
          links.classList.remove("open");
        }
      };
      burger.addEventListener("click", toggle);
      links.addEventListener("click", onNav);
      cleanups.push(() => {
        burger.removeEventListener("click", toggle);
        links.removeEventListener("click", onNav);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
