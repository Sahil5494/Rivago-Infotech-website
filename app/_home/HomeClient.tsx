"use client";

import { useEffect } from "react";

/**
 * Homepage behaviour. Renders nothing — the page is server-rendered and
 * complete without this file, which is the point: every headline, row and
 * number is in the first painted frame.
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

    // --- header ground on scroll
    const hdr = document.getElementById("rvgHdr");
    if (hdr) {
      const onScroll = () => hdr.classList.toggle("on", window.scrollY > 12);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", onScroll));
    }

    // --- reveal: arm, then release on entry
    if (!still) {
      const settle = Array.from(
        document.querySelectorAll<HTMLElement>(".rvg .spl, .rvg .lg, .rvg .mk, .rvg .proc, .rvg .dlv")
      );
      settle.forEach((el) => el.classList.add("rv"));

      const targets = [
        ...settle,
        ...Array.from(document.querySelectorAll<HTMLElement>(".rvg .rr")),
        ...Array.from(document.querySelectorAll<HTMLElement>(".rvg .tl, .rvg .art")),
      ];
      targets.forEach((el) => el.classList.add("armed"));

      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                e.target.classList.add("seen");
                io.unobserve(e.target);
              }
            });
          },
          { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
        );
        targets.forEach((t) => io.observe(t));
        cleanups.push(() => io.disconnect());
      } else {
        targets.forEach((t) => t.classList.add("seen"));
      }
    }

    // --- hero artefact: a card on a desk, not a 3D object. Pointer devices only.
    const art = document.getElementById("rvgArt");
    const fine = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
    if (art && fine && !still) {
      const stage = art.parentElement;
      if (stage) {
        let raf = 0;
        let tx = 0;
        let ty = 0;
        const draw = () => {
          raf = 0;
          art.style.transform = `rotateX(${ty.toFixed(2)}deg) rotateY(${tx.toFixed(2)}deg) translateZ(0)`;
          art.style.boxShadow = `0 ${(18 + ty * 2.2).toFixed(0)}px 50px -24px rgba(0,0,0,.65)`;
        };
        const move = (e: PointerEvent) => {
          const r = art.getBoundingClientRect();
          tx = ((e.clientX - r.left) / r.width - 0.5) * 6.4;
          ty = -((e.clientY - r.top) / r.height - 0.5) * 6.4;
          if (!raf) raf = requestAnimationFrame(draw);
        };
        const leave = () => {
          tx = 0;
          ty = 0;
          if (!raf) raf = requestAnimationFrame(draw);
        };
        stage.addEventListener("pointermove", move, { passive: true });
        stage.addEventListener("pointerleave", leave, { passive: true });
        cleanups.push(() => {
          stage.removeEventListener("pointermove", move);
          stage.removeEventListener("pointerleave", leave);
          if (raf) cancelAnimationFrame(raf);
        });
      }
    }

    // --- services accordion. Native buttons, so Enter/Space already work.
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

    // --- mobile menu
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
