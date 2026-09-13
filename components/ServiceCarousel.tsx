"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { routes } from "@/lib/routes";

/* The services carousel on the home page: media left, one service right.
 *
 * Lives in components/ rather than app/services/ because /services was put
 * back to its original layout — this is the home page's services section now.
 *
 * MEDIA SLOT — read this before adding footage.
 * Each entry takes an optional `media`. Drop a file into /public/assets/services
 * and set it, and the panel renders it instead of the fallback; nothing else
 * here needs to change:
 *
 *   media: { kind: "video", src: "/assets/services/contract.mp4", poster: "..." }
 *   media: { kind: "image", src: "/assets/services/contract.jpg" }
 *
 * Until then the panel draws a composed fallback rather than a grey box,
 * because public/ holds no photography or footage at all — ten client logos,
 * an OG image and a favicon — and stock imagery of strangers shaking hands in
 * an office would weaken the page rather than fill it.
 *
 * A video here must be muted, loop, playsInline and carry a poster, or it will
 * not autoplay on iOS and will cost the page its LCP.
 */

type Media = { kind: "video"; src: string; poster?: string } | { kind: "image"; src: string };

type Service = {
  href: string;
  title: string;
  desc: string;
  facts: [string, string][];
  media?: Media;
};

/* Facts come from each service's own page: contract and temporary run on
   Rivago's payroll ("we run payroll, compliance and worker classification"),
   Employer of Record states outright that Rivago becomes the legal employer,
   direct hire is a contingent fee, executive search retained, interim a day
   rate month to month.

   CONFIRM: temporary staffing's hourly markup and the Employer of Record
   per-employee monthly fee are the standard models for those services rather
   than ones Rivago has published. */
const SERVICES: Service[] = [
  {
    href: routes.directHire,
    title: "Direct hire",
    desc: "For a permanent role you want filled once, properly. We run the search on a contingent fee — you pay on a hire that sticks, not on activity — and the placement carries a replacement guarantee.",
    facts: [["Who employs them", "You do, from day one"], ["How you pay", "Contingent fee"], ["How long it runs", "Until the hire sticks"]],
  },
  {
    href: routes.contractStaffing,
    title: "Contract staffing",
    desc: "For a defined piece of work rather than a headcount line. The professional sits on our payroll for the term — we handle tax, compliance and worker classification, and carry that risk rather than passing it to you.",
    facts: [["Who employs them", "We do — payroll, tax, classification"], ["How you pay", "Hourly markup"], ["How long it runs", "Fixed term, extendable"]],
  },
  {
    href: routes.temporaryStaffing,
    title: "Temporary staffing",
    desc: "For cover when someone is on leave, or when the work has spiked and will subside again. Deployed quickly, scaled up or down as the workload changes, and off your payroll throughout.",
    facts: [["Who employs them", "We do — payroll, tax, classification"], ["How you pay", "Hourly markup"], ["How long it runs", "Days to months"]],
  },
  {
    href: routes.executiveSearch,
    title: "Executive search",
    desc: "For VP- to C-suite hires, including the ones that cannot be advertised — a sensitive replacement, or a role the incumbent does not know about yet. Retained, confidential, with written progress in between.",
    facts: [["Who employs them", "You do, from day one"], ["How you pay", "Retained"], ["How long it runs", "A mandate, not a requisition"]],
  },
  {
    href: routes.rpo,
    title: "Recruitment Process Outsourcing",
    desc: "For hiring at volume, where what you need is capacity rather than another vendor. We embed recruiters into your team, under your brand and in your workflow, priced as a programme instead of per placement.",
    facts: [["Who employs them", "You employ the hires; we embed the recruiters"], ["How you pay", "Monthly programme"], ["How long it runs", "Ongoing, reviewed quarterly"]],
  },
  {
    href: routes.interimLeadership,
    title: "Interim & fractional leadership",
    desc: "For a gap at the top where the work cannot wait for a full search — a transition to bridge, a turnaround to lead, or a function that needs a senior hand two days a week rather than five.",
    facts: [["Who employs them", "Engaged as a contractor"], ["How you pay", "Day rate, month to month"], ["How long it runs", "Weeks to a few quarters"]],
  },
  {
    href: routes.employerOfRecord,
    title: "Employer of Record",
    desc: "For when you have found the right person in a country where you have no legal entity. We become their employer — contracts, payroll, tax and benefits in-country — and you direct the work.",
    facts: [["Who employs them", "We do — we are the legal employer"], ["How you pay", "Per employee, monthly"], ["How long it runs", "As long as they are employed"]],
  },
];

const Arrow = ({ dir }: { dir: "prev" | "next" }) => (
  <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true"
    style={dir === "prev" ? { transform: "rotate(180deg)" } : undefined}>
    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ServiceCarousel() {
  const [i, setI] = useState(0);
  const liveRef = useRef<HTMLDivElement>(null);
  const s = SERVICES[i];
  const n = SERVICES.length;
  const go = (d: number) => setI((prev) => (prev + d + n) % n);

  return (
    <div className="sc">
      <div
        className="sc-stage"
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
          if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
        }}
      >
        {/* ── media */}
        <div className="sc-media">
          {s.media?.kind === "video" ? (
            <video src={s.media.src} poster={s.media.poster} muted loop playsInline autoPlay preload="metadata" />
          ) : s.media?.kind === "image" ? (
            /* eslint-disable-next-line @next/next/no-img-element -- swapped for
               next/image once real assets exist and their dimensions are known */
            <img src={s.media.src} alt="" />
          ) : (
            <div className="sc-fallback" aria-hidden="true">
              <span className="sc-fb-n">{String(i + 1).padStart(2, "0")}</span>
              <span className="sc-fb-t">{s.title}</span>
            </div>
          )}
        </div>

        {/* ── service */}
        <div className="sc-body">
          <div className="sc-count">
            <b>{String(i + 1).padStart(2, "0")}</b>
            <span>/ {String(n).padStart(2, "0")}</span>
          </div>
          <h3 className="sc-title">{s.title}</h3>
          <p className="sc-desc">{s.desc}</p>

          {/* The three facts a buyer compares services on. They are what the
              old page buried in prose and the reference leaves to the video. */}
          <dl className="sc-facts">
            {s.facts.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>

          <div className="sc-foot">
            <Link className="sc-know" href={s.href}>
              Know more
              <span className="sc-know-i"><Arrow dir="next" /></span>
            </Link>

            <div className="sc-nav">
              <button type="button" className="sc-btn" onClick={() => go(-1)} aria-label="Previous service"><Arrow dir="prev" /></button>
              <div className="sc-prog" role="presentation">
                <span style={{ width: `${((i + 1) / n) * 100}%` }} />
              </div>
              <button type="button" className="sc-btn" onClick={() => go(1)} aria-label="Next service"><Arrow dir="next" /></button>
            </div>
          </div>
        </div>
      </div>

      {/* The visible panel is one of seven, so the change has to be announced
          or a screen-reader user hears nothing when the arrows are pressed. */}
      <div className="sr-only" aria-live="polite" ref={liveRef}>
        {s.title}, {i + 1} of {n}
      </div>
    </div>
  );
}
