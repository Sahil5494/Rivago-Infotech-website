"use client";

import { useEffect, useState } from "react";
import { routes } from "@/lib/routes";

export default function HelpModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handler(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest("[data-help]")) {
        e.preventDefault();
        e.stopPropagation();
        setOpen(true);
      }
    }
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function openHire(e: React.MouseEvent) {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector<HTMLElement>("[data-hire]");
    if (el) el.click();
  }

  return (
    <div
      className={`hlp-ov${open ? " open" : ""}`}
      id="hlpOverlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="hlpTitle"
      onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
    >
      <div className="hlp-modal">
        <button className="hlp-x" aria-label="Close menu" onClick={() => setOpen(false)}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
        </button>
        <div className="hlp-eyb">Get started</div>
        <h3 id="hlpTitle">How can we <em>help?</em></h3>
        <div className="hlp-opts">
          <a className="hlp-opt" href={`${routes.hireTalent}#intake`} onClick={openHire}>
            <span className="hlp-ico"><svg width="19" height="19" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="3.4" stroke="#0A7040" strokeWidth="1.4" /><path d="M4.5 19c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" stroke="#0A7040" strokeWidth="1.4" strokeLinecap="round" /></svg></span>
            <span className="hlp-tx"><div className="hlp-t">Hire talent for a specific role</div><div className="hlp-d">Contract, contract-to-hire, or direct hire.</div></span>
            <svg className="hlp-arr" width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
          <a className="hlp-opt" href={routes.contactUs} onClick={() => setOpen(false)}>
            <span className="hlp-ico"><svg width="19" height="19" viewBox="0 0 22 22" fill="none"><path d="M3 8l8-4 8 4v6l-8 4-8-4z" stroke="#0A7040" strokeWidth="1.4" strokeLinejoin="round" /><path d="M7 10v3l4 2 4-2v-3" stroke="#0A7040" strokeWidth="1.4" strokeLinejoin="round" /></svg></span>
            <span className="hlp-tx"><div className="hlp-t">Connect with a recruiter</div><div className="hlp-d">Already working with us? Reach your partner directly.</div></span>
            <svg className="hlp-arr" width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
          <a className="hlp-opt" href={routes.services} onClick={() => setOpen(false)}>
            <span className="hlp-ico"><svg width="19" height="19" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="#0A7040" strokeWidth="1.4" /><path d="M11 15v.5M11 7.5a2.2 2.2 0 011.9 3.3c-.4.65-1.9 1.1-1.9 2.2" stroke="#0A7040" strokeWidth="1.4" strokeLinecap="round" /></svg></span>
            <span className="hlp-tx"><div className="hlp-t">Explore how Rivago Infotech can help</div><div className="hlp-d">Not sure yet? Let&apos;s talk about what you&apos;re working on.</div></span>
            <svg className="hlp-arr" width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
          <a className="hlp-opt" href={routes.viewJobs} onClick={() => setOpen(false)}>
            <span className="hlp-ico"><svg width="19" height="19" viewBox="0 0 22 22" fill="none"><rect x="3" y="6.5" width="16" height="11.5" rx="2" stroke="#0A7040" strokeWidth="1.4" /><path d="M7.5 6.5V5a2 2 0 012-2h3a2 2 0 012 2v1.5" stroke="#0A7040" strokeWidth="1.4" strokeLinecap="round" /></svg></span>
            <span className="hlp-tx"><div className="hlp-t">Looking for a job</div><div className="hlp-d">Browse our open roles.</div></span>
            <svg className="hlp-arr" width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
