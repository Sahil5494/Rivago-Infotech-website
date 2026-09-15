"use client";

import { useState } from "react";
import { testimonials } from "@/lib/testimonials";

/* The client quotes as one full-width card, changed by dots or arrows.
 *
 * Replaces a 2x2 grid of small cards. A quote is the one piece of copy on a
 * page that is worth reading slowly, and four of them side by side at 240px
 * of measure invites nobody to read any.
 *
 * EVERY SLIDE IS IN THE MARKUP. The services carousel on this same page
 * renders only its selected panel, so seven of its eight services are absent
 * from the served HTML — the exact failure this rail was audited for. Here
 * all the quotes stack in one grid cell (grid-area 1/1), which also means
 * the card is as tall as the longest of them and nothing reflows as you move
 * between slides. The inactive ones are hidden with visibility, so they stay
 * in the document for a crawler and leave the accessibility tree for a
 * screen reader.
 *
 * The carousel is driven entirely by the length of the array. Add a quote to
 * lib/testimonials.ts and a dot appears; nothing here needs editing.
 *
 * NOTE ON THE CONTENT, which matters more than the layout: the header of
 * lib/testimonials.ts records that these four "remain endorsements that have
 * not been given". They are a form to be filled, not client proof. The
 * section lede has been corrected to stop claiming consent that has not been
 * obtained — see app/page.tsx. Nothing in this component should be read as
 * evidence that the quotes are attributed, and no quote should be added here
 * that a client has not actually agreed to.
 */

const Chevron = ({ back }: { back?: boolean }) => (
  <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true"
    style={back ? { transform: "rotate(180deg)" } : undefined}>
    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ClientQuotes() {
  const [i, setI] = useState(0);
  const n = testimonials.length;
  const go = (d: number) => setI((prev) => (prev + d + n) % n);

  return (
    <div
      className="cq"
      role="group"
      aria-roledescription="carousel"
      aria-label="Client quotes"
      tabIndex={0}
      /* stopPropagation as a matter of habit rather than necessity: the
         document-level ArrowLeft/ArrowRight listener that used to swallow
         these is gone, and nothing should re-introduce it over a widget
         that has already handled the key. */
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") { e.preventDefault(); e.stopPropagation(); go(-1); }
        if (e.key === "ArrowRight") { e.preventDefault(); e.stopPropagation(); go(1); }
      }}
    >
      <div className="cq-card">
        <div className="cq-stack">
          {testimonials.map((t, k) => (
            <figure className={`cq-slide${k === i ? " on" : ""}`} key={t.name} aria-hidden={k !== i}>
              <div className="cq-top">
                {/* A quote glyph, not an avatar. These are anonymised to a
                    role and a market by design, and a face — generated or
                    stock — beside an anonymous quote invents the one thing
                    the anonymity is protecting. */}
                <span className="cq-mark" aria-hidden="true">
                  <svg width="30" height="24" viewBox="0 0 30 24" fill="none">
                    <path d="M0 24V14.2C0 6.9 3.6 2.2 10.9 0l1.7 3.6C8 5.4 5.7 8.2 5.6 12H12v12H0Zm17.4 0V14.2c0-7.3 3.6-12 10.9-14.2L30 3.6c-4.6 1.8-6.9 4.6-7 8.4H30v12H17.4Z" fill="currentColor" />
                  </svg>
                </span>
                <span className="cq-badge">{t.badge}</span>
              </div>

              <blockquote className="cq-q">{t.quote}</blockquote>

              <figcaption className="cq-who">
                <span className="cq-name">{t.name}</span>
                <span className="cq-role">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="cq-foot">
          <div className="cq-dots" role="tablist" aria-label="Choose a quote">
            {testimonials.map((t, k) => (
              <button
                key={t.name}
                type="button"
                role="tab"
                aria-selected={k === i}
                aria-label={`Quote ${k + 1} of ${n} — ${t.role}`}
                className={`cq-dot${k === i ? " on" : ""}`}
                onClick={() => setI(k)}
              />
            ))}
          </div>

          <div className="cq-nav">
            <button type="button" className="cq-btn" onClick={() => go(-1)} aria-label="Previous quote"><Chevron back /></button>
            <button type="button" className="cq-btn" onClick={() => go(1)} aria-label="Next quote"><Chevron /></button>
          </div>
        </div>
      </div>

      {/* The visible quote changes without the page moving, so the change has
          to be announced or a keyboard user hears nothing. */}
      <div className="sr-only" aria-live="polite">
        {`Quote ${i + 1} of ${n}. ${testimonials[i].name}, ${testimonials[i].role}.`}
      </div>
    </div>
  );
}
