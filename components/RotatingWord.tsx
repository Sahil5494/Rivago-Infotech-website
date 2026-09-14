"use client";

import { useEffect, useState } from "react";

/* The last word of the hero headline, cycling.
 *
 * The reference measures its widest word in JavaScript and writes the result
 * back as an inline pixel width, so the slot does not jump as words change.
 * This does the same job with layout instead: every word is stacked in one
 * inline-grid cell, so the slot is naturally as wide as the longest of them
 * and there is nothing to measure, nothing to recompute on resize, and no
 * fractional pixel value baked into the markup.
 *
 * Accessibility: the visible words are aria-hidden and the full list is read
 * once, as a sentence, from a single off-screen span. A screen reader hears
 * "technology, finance and banking, healthcare..." rather than one word
 * changing under it every few seconds.
 *
 * Reduced motion: the cycle does not start. The first word stays.
 */

export default function RotatingWord({ words }: { words: readonly string[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2600);
    return () => clearInterval(t);
  }, [words.length]);

  return (
    <span className="rot">
      <span className="rot-slot" aria-hidden="true">
        {words.map((w, n) => (
          <span key={w} className={`rot-w${n === i ? " on" : ""}`}>
            {w}
          </span>
        ))}
      </span>
      <span className="sr-only">
        {words.slice(0, -1).join(", ")} and {words[words.length - 1]}
      </span>
    </span>
  );
}
