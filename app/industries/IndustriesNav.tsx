"use client";

import { useEffect, useState } from "react";
import { practices } from "./data";

export default function IndustriesNav() {
  const [active, setActive] = useState<string>(practices[0].id);

  useEffect(() => {
    const sections = practices
      .map((p) => document.getElementById(p.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="ind-nav">
      <div className="ind-nav-inner">
        {practices.map((p) => (
          <a key={p.id} className={`ind-nav-link${active === p.id ? " active" : ""}`} href={`#${p.id}`}>
            {p.navLabel}
          </a>
        ))}
      </div>
    </div>
  );
}
