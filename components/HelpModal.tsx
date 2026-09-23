"use client";

import { useEffect, useRef, useState } from "react";
import { routes } from "@/lib/routes";
import { OPEN_HIRE_EVENT } from "@/components/HireModal";

/* The "How can we help?" chooser. Opened by every [data-help] button: the
 * five "Let's Talk" buttons and the home page's "Talk to an expert".
 *
 * KEYBOARD. It used to leave focus on the button behind the overlay, so the
 * first Tab went to page content under the dimmed backdrop — measured, it
 * landed on a "Read more" button on /about — and nothing kept focus inside.
 * It now moves focus to the first option on open, keeps Tab and Shift+Tab
 * cycling inside the dialog, and hands focus back to the button that opened
 * it on close. The one exception is the first option, which hands over to
 * the hiring-brief form and so must not pull focus back to the page. */
const FOCUSABLE = 'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])';

export default function HelpModal() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const handingOff = useRef(false);

  useEffect(() => {
    function handler(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const btn = target.closest<HTMLElement>("[data-help]");
      if (btn) {
        e.preventDefault();
        e.stopPropagation();
        triggerRef.current = btn;
        handingOff.current = false;
        setOpen(true);
      }
    }
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const modal = modalRef.current;
    modal?.querySelector<HTMLElement>(".hlp-opt")?.focus({ preventScroll: true });

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") { setOpen(false); return; }
      if (e.key !== "Tab" || !modal) return;
      const items = Array.from(modal.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      const inside = modal.contains(document.activeElement);
      if (e.shiftKey && (document.activeElement === first || !inside)) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && (document.activeElement === last || !inside)) { e.preventDefault(); first.focus(); }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      /* The mobile trigger sits inside the burger menu, which closes as the
         chooser opens; focusing a hidden button is harmless but pointless. */
      const t = triggerRef.current;
      if (!handingOff.current && t && t.offsetParent !== null) t.focus({ preventScroll: true });
    };
  }, [open]);

  function openHire(e: React.MouseEvent) {
    e.preventDefault();
    handingOff.current = true;
    setOpen(false);
    window.dispatchEvent(new Event(OPEN_HIRE_EVENT));
  }

  const arrow = (
    <svg className="hlp-arr" width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  );

  /* Title and description are spans, not divs: they sit inside an <a>
     inside a <span>, and a div there is invalid markup. The stylesheet lays
     them out as grid items. */
  return (
    <div
      className={`hlp-ov${open ? " open" : ""}`}
      id="hlpOverlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="hlpTitle"
      aria-hidden={!open}
      onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
    >
      <div className="hlp-modal" ref={modalRef}>
        <button type="button" className="hlp-x" aria-label="Close" onClick={() => setOpen(false)}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </button>
        <div className="hlp-eyb">Let&apos;s Talk</div>
        <h3 id="hlpTitle">How can we <em>help?</em></h3>
        <div className="hlp-opts">
          <a className="hlp-opt" href={`${routes.hireTalent}#intake`} onClick={openHire}>
            <span className="hlp-ico" aria-hidden="true"><svg width="19" height="19" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="3.4" stroke="var(--accent)" strokeWidth="1.4" /><path d="M4.5 19c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" /></svg></span>
            <span className="hlp-tx"><span className="hlp-t">Hire talent for a specific role</span><span className="hlp-d">Contract, contract-to-hire, or direct hire.</span></span>
            {arrow}
          </a>
          {/* The icon here was a hexagonal box — the same glyph the RPO page
              uses for "We own the program" — which says nothing about
              reaching a person. A speech bubble does. */}
          <a className="hlp-opt" href={routes.contactUs} onClick={() => setOpen(false)}>
            <span className="hlp-ico" aria-hidden="true"><svg width="19" height="19" viewBox="0 0 22 22" fill="none"><path d="M4 5.5h14a1.5 1.5 0 011.5 1.5v8a1.5 1.5 0 01-1.5 1.5H9l-4 3.5v-3.5H4A1.5 1.5 0 012.5 15V7A1.5 1.5 0 014 5.5z" stroke="var(--accent)" strokeWidth="1.4" strokeLinejoin="round" /><path d="M7 10h8M7 13h5" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" /></svg></span>
            <span className="hlp-tx"><span className="hlp-t">Connect with a recruiter</span><span className="hlp-d">Already working with us? Reach your partner directly.</span></span>
            {arrow}
          </a>
          {/* Was "Explore how Rivago Infotech can help — Not sure yet? Let's
              talk about what you're working on." It links to /services, a
              page to read, not a conversation; and with the button that
              opens this now called "Let's Talk", the line promised the one
              thing this option does not do. It was also the only title that
              wrapped at desktop width. */}
          <a className="hlp-opt" href={routes.services} onClick={() => setOpen(false)}>
            <span className="hlp-ico" aria-hidden="true"><svg width="19" height="19" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="var(--accent)" strokeWidth="1.4" /><path d="M11 15v.5M11 7.5a2.2 2.2 0 011.9 3.3c-.4.65-1.9 1.1-1.9 2.2" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" /></svg></span>
            <span className="hlp-tx"><span className="hlp-t">Explore how we can help</span><span className="hlp-d">Not sure yet? See the ways we work, from one hire to a whole team.</span></span>
            {arrow}
          </a>
          <a className="hlp-opt" href={routes.viewJobs} onClick={() => setOpen(false)}>
            <span className="hlp-ico" aria-hidden="true"><svg width="19" height="19" viewBox="0 0 22 22" fill="none"><rect x="3" y="6.5" width="16" height="11.5" rx="2" stroke="var(--accent)" strokeWidth="1.4" /><path d="M7.5 6.5V5a2 2 0 012-2h3a2 2 0 012 2v1.5" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" /></svg></span>
            <span className="hlp-tx"><span className="hlp-t">Looking for a job</span><span className="hlp-d">Browse our open roles.</span></span>
            {arrow}
          </a>
        </div>
      </div>
    </div>
  );
}
