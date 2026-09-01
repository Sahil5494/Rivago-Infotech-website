"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { pageOrder } from "@/lib/routes";

export default function PageNavSide() {
  const pathname = usePathname();
  const router = useRouter();
  const idx = pageOrder.findIndex((p) => p.href === pathname);
  const prev = idx > 0 ? pageOrder[idx - 1] : null;
  const next = idx >= 0 && idx < pageOrder.length - 1 ? pageOrder[idx + 1] : null;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea" || tag === "select" || (e.target as HTMLElement)?.isContentEditable) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "ArrowLeft" && prev) router.push(prev.href);
      if (e.key === "ArrowRight" && next) router.push(next.href);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [prev, next, router]);

  if (idx === -1) return null;

  return (
    <>
      {prev && (
        <a className="pgnav-side back" aria-label={`Previous: ${prev.name}`} href={prev.href}>
          <svg width="17" height="17" viewBox="0 0 14 14" fill="none"><path d="M11 7H3M6 4 3 7l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <span className="pgnav-side-lbl">{prev.name}</span>
        </a>
      )}
      {next && (
        <a className="pgnav-side next" aria-label={`Next: ${next.name}`} href={next.href}>
          <span className="pgnav-side-lbl">{next.name}</span>
          <svg width="17" height="17" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      )}
    </>
  );
}
