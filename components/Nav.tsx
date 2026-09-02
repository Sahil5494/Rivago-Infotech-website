"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { routes } from "@/lib/routes";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => { const onScroll = () => setSolid(window.scrollY > 24); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  const close = () => setOpen(false);
  return <header className={`rv-nav ${solid ? "rv-nav-solid" : ""}`}>
    <div className="rv-nav-inner">
      <Link href="/" className="rv-brand" onClick={close} aria-label="Rivago home"><span className="rv-brand-mark">R</span><span>RIVAGO</span></Link>
      <nav className="rv-nav-links" aria-label="Primary navigation"><Link href={routes.services}>Talent Solutions</Link><Link href={routes.industries}>Industries</Link><a href="/#intelligence">Intelligence</a><Link href={routes.resources}>Insights</Link><Link href="/about">About</Link></nav>
      <div className="rv-nav-actions"><Link className="rv-nav-secondary" href={routes.viewJobs}>For candidates</Link><button className="rv-nav-cta" data-help>Hire talent <span aria-hidden="true">↗</span></button><button className="rv-menu" onClick={() => setOpen(v => !v)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}><span /><span /></button></div>
    </div>
    <div className={`rv-mobile-nav ${open ? "is-open" : ""}`} aria-hidden={!open}><div className="rv-mobile-links"><Link href={routes.services} onClick={close}>Talent Solutions <span>↗</span></Link><Link href={routes.industries} onClick={close}>Industries <span>↗</span></Link><a href="/#intelligence" onClick={close}>Rivago Intelligence <span>↗</span></a><Link href={routes.resources} onClick={close}>Insights <span>↗</span></Link><Link href="/about" onClick={close}>About Rivago <span>↗</span></Link><Link href={routes.viewJobs} onClick={close}>Explore opportunities <span>↗</span></Link></div><button className="rv-mobile-cta" data-help onClick={close}>Start a conversation <span>↗</span></button></div>
  </header>;
}
