"use client";

import { useEffect } from "react";

/**
 * Behaviour for the Staffing Solutions page: the roles tabs and the FAQ
 * accordion, ported from the reference's own script.
 *
 * Renders nothing — the markup is server-rendered and readable without this,
 * with the first tab and every FAQ answer present in the HTML.
 */
export default function ServicesClient() {
  useEffect(() => {
    const root = document.querySelector(".svc2");
    if (!root) return;
    const cleanups: (() => void)[] = [];

    // --- roles tabs
    const tabs = Array.from(root.querySelectorAll<HTMLElement>(".rls-tab"));
    const panels = Array.from(root.querySelectorAll<HTMLElement>(".rls-panel"));
    tabs.forEach((t) => {
      const onClick = () => {
        const k = t.getAttribute("data-rls");
        tabs.forEach((x) => {
          x.classList.toggle("on", x === t);
          x.setAttribute("aria-selected", String(x === t));
          x.tabIndex = x === t ? 0 : -1;
        });
        panels.forEach((p) => p.classList.toggle("on", p.getAttribute("data-rls-panel") === k));
      };
      t.addEventListener("click", onClick);
      cleanups.push(() => t.removeEventListener("click", onClick));
    });

    // Arrow keys move between tabs, as a tablist should.
    const onTabKey = (e: KeyboardEvent) => {
      const i = tabs.indexOf(document.activeElement as HTMLElement);
      if (i === -1) return;
      const last = tabs.length - 1;
      let next = i;
      if (e.key === "ArrowRight") next = i === last ? 0 : i + 1;
      else if (e.key === "ArrowLeft") next = i === 0 ? last : i - 1;
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = last;
      else return;
      e.preventDefault();
      tabs[next].click();
      tabs[next].focus();
    };
    const tablist = root.querySelector(".rls-tabs");
    if (tablist) {
      tablist.addEventListener("keydown", onTabKey as EventListener);
      cleanups.push(() => tablist.removeEventListener("keydown", onTabKey as EventListener));
    }

    // --- FAQ accordion
    const items = Array.from(root.querySelectorAll<HTMLElement>(".faq-item"));
    items.forEach((it) => {
      const q = it.querySelector<HTMLElement>(".faq-q");
      const a = it.querySelector<HTMLElement>(".faq-a");
      if (!q || !a) return;
      const onClick = () => {
        const wasOpen = it.classList.contains("open");
        items.forEach((o) => {
          o.classList.remove("open");
          const oa = o.querySelector<HTMLElement>(".faq-a");
          if (oa) oa.style.maxHeight = "";
          const oq = o.querySelector<HTMLElement>(".faq-q");
          if (oq) oq.setAttribute("aria-expanded", "false");
        });
        if (!wasOpen) {
          it.classList.add("open");
          a.style.maxHeight = a.scrollHeight + "px";
          q.setAttribute("aria-expanded", "true");
        }
      };
      q.addEventListener("click", onClick);
      cleanups.push(() => q.removeEventListener("click", onClick));
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
