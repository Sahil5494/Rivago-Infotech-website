"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { routes } from "@/lib/routes";

/* The services carousel on the home page: media left, one service right.
 *
 * Lives in components/ rather than app/services/ because /services was put
 * back to its original layout — this is the home page's services section now.
 *
 * MEDIA SLOT — read this before swapping in footage.
 * Each entry takes an optional `media`. Drop a file into /public/assets/services
 * and point at it; nothing else here changes:
 *
 *   media: { kind: "video", src: "/assets/services/contract.mp4", poster: "..." }
 *   media: { kind: "image", src: "/assets/services/contract.jpg" }
 *
 * All eight currently carry stills — Adobe Stock, licensed to the Rivago
 * account, resized to 1600x1067 and re-encoded (47MB of originals down to
 * 840KB for the set). They are placeholders for Rivago's own photography:
 * real people in the Pune, Wilmington and Ayr offices will always beat stock,
 * because every competitor is drawing from the same library.
 *
 * Video was asked for and is not available here — the Stock search returns
 * zero results for contentType "Video" whatever the query, and the sandbox
 * proxy refuses every other host. Swap `kind` to "video" when footage exists.
 * It must be muted, loop, playsInline and carry a poster, or it will not
 * autoplay on iOS and will cost the section its LCP.
 */

type Media = { kind: "video"; src: string; poster?: string } | { kind: "image"; src: string };

type Service = {
  href: string;
  title: string;
  desc: string;
  media?: Media;
  /* The seven engagement models carry facts on one axis. The overview slide
     carries a list instead, because "who employs them" has no answer for an
     index page — it depends on which of the seven you pick. */
  facts?: [string, string][];
  list?: string[];
  overview?: true;
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
  /* The index page, kept first. It is not one of the seven ways to staff a
     role, so it is labelled "Overview" rather than numbered — otherwise the
     counter runs to 08 under a heading that says seven, and /about would
     still render "7 Ways to engage" off the same data. */
  {
    href: routes.services,
    media: { kind: "image", src: "/assets/services/overview.jpg" },
    title: "Staffing Solutions",
    desc: "Start here. The full picture of how Rivago engages — which structure fits the role you are filling, what each one costs, and how a search runs from the brief through to a start date.",
    list: ["Direct hire", "Contract staffing", "Temporary staffing", "Executive search", "RPO", "Interim & fractional", "Employer of Record"],
    overview: true,
  },
  {
    href: routes.directHire,
    media: { kind: "image", src: "/assets/services/direct.jpg" },
    title: "Direct hire",
    desc: "For a permanent role you want filled once, properly. We run the search on a contingent fee — you pay on a hire that sticks, not on activity — and the placement carries a replacement guarantee.",
    facts: [["Who employs them", "You do, from day one"], ["How you pay", "Contingent fee"], ["How long it runs", "Until the hire sticks"]],
  },
  {
    href: routes.contractStaffing,
    media: { kind: "image", src: "/assets/services/contract.jpg" },
    title: "Contract staffing",
    desc: "For a defined piece of work rather than a headcount line. The professional sits on our payroll for the term — we handle tax, compliance and worker classification, and carry that risk rather than passing it to you.",
    facts: [["Who employs them", "We do — payroll, tax, classification"], ["How you pay", "Hourly markup"], ["How long it runs", "Fixed term, extendable"]],
  },
  {
    href: routes.temporaryStaffing,
    media: { kind: "image", src: "/assets/services/temporary.jpg" },
    title: "Temporary staffing",
    desc: "For cover when someone is on leave, or when the work has spiked and will subside again. Deployed quickly, scaled up or down as the workload changes, and off your payroll throughout.",
    facts: [["Who employs them", "We do — payroll, tax, classification"], ["How you pay", "Hourly markup"], ["How long it runs", "Days to months"]],
  },
  {
    href: routes.executiveSearch,
    media: { kind: "image", src: "/assets/services/executive.jpg" },
    title: "Executive search",
    desc: "For VP- to C-suite hires, including the ones that cannot be advertised — a sensitive replacement, or a role the incumbent does not know about yet. Retained, confidential, with written progress in between.",
    facts: [["Who employs them", "You do, from day one"], ["How you pay", "Retained"], ["How long it runs", "A mandate, not a requisition"]],
  },
  {
    href: routes.rpo,
    media: { kind: "image", src: "/assets/services/rpo.jpg" },
    title: "Recruitment Process Outsourcing",
    desc: "For hiring at volume, where what you need is capacity rather than another vendor. We embed recruiters into your team, under your brand and in your workflow, priced as a programme instead of per placement.",
    facts: [["Who employs them", "You employ the hires; we embed the recruiters"], ["How you pay", "Monthly programme"], ["How long it runs", "Ongoing, reviewed quarterly"]],
  },
  {
    href: routes.interimLeadership,
    media: { kind: "image", src: "/assets/services/interim.jpg" },
    title: "Interim & fractional leadership",
    desc: "For a gap at the top where the work cannot wait for a full search — a transition to bridge, a turnaround to lead, or a function that needs a senior hand two days a week rather than five.",
    facts: [["Who employs them", "Engaged as a contractor"], ["How you pay", "Day rate, month to month"], ["How long it runs", "Weeks to a few quarters"]],
  },
  {
    href: routes.employerOfRecord,
    media: { kind: "image", src: "/assets/services/eor.jpg" },
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
            /* Decorative: the service is named in the heading beside it, so an
               alt here would just be read twice. priority on the first panel —
               it is the section's LCP element once images are in. */
            <Image src={s.media.src} alt="" fill sizes="(max-width: 980px) 100vw, 50vw"
              priority={i === 0} style={{ objectFit: "cover" }} />
          ) : (
            <div className="sc-fallback" aria-hidden="true">
              <span className="sc-fb-n">{s.overview ? "—" : String(i).padStart(2, "0")}</span>
              <span className="sc-fb-t">{s.title}</span>
            </div>
          )}
        </div>

        {/* ── service */}
        <div className="sc-body">
          {/* The overview is not one of the seven, so it is not counted as one.
              The models then number 01–07, which agrees with the section
              heading and with the count /about renders. */}
          <div className="sc-count">
            {s.overview ? (
              <b>Overview</b>
            ) : (
              <>
                <b>{String(i).padStart(2, "0")}</b>
                <span>/ {String(n - 1).padStart(2, "0")}</span>
              </>
            )}
          </div>
          <h3 className="sc-title">{s.title}</h3>
          <p className="sc-desc">{s.desc}</p>

          {/* The three facts a buyer compares services on — what the old card
              grid squeezed into a single meta line. The overview shows what is
              behind the link instead. */}
          {s.facts && (
            <dl className="sc-facts">
              {s.facts.map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
          )}
          {s.list && (
            <ul className="sc-list">
              {s.list.map((t) => <li key={t}>{t}</li>)}
            </ul>
          )}

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
        {s.overview ? `${s.title}, overview` : `${s.title}, ${i} of ${n - 1}`}
      </div>
    </div>
  );
}
