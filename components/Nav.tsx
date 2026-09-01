"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { routes } from "@/lib/routes";

/** Routes whose page is a light/cream canvas from y=0 (no dark hero) — nav must render
 * permanently solid with dark-on-cream colors here, matching the source design. */
const CREAM_NAV_PREFIXES = ["/resources"];

const Chevron = () => (
  <svg className="caret" viewBox="0 0 8 8" fill="none">
    <path d="M1.5 3l2.5 2.5L6.5 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Arrow = () => (
  <svg className="mm-arrow" width="11" height="11" viewBox="0 0 11 11" fill="none">
    <path d="M2 5.5h6M5.5 2.5l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CircleIco = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="6" stroke="#3DFF87" strokeWidth="1.3" />
  </svg>
);

type MMKey = "services" | "industries" | "about" | "careers";

const serviceLinks = [
  { href: routes.services, title: "Staffing Solutions", desc: "Every way we put the right people in seat — start here" },
  { href: routes.directHire, title: "Direct Hire", desc: "Permanent placements with a 90-day replacement guarantee" },
  { href: routes.contractStaffing, title: "Contract Staffing", desc: "Flexible contract and contract-to-hire, compliance handled", tag: "Popular" },
  { href: routes.temporaryStaffing, title: "Temporary Staffing", desc: "On-demand professionals for peaks, seasons and leave cover" },
];
const specialistLinks = [
  { href: routes.rpo, title: "Recruitment Process Outsourcing", desc: "Embedded talent function — we run your TA team" },
  { href: routes.executiveSearch, title: "Executive Search", desc: "Confidential VP- and C-suite searches, on retainer", tag: "Retained" },
  { href: routes.interimLeadership, title: "Interim & Fractional Leadership", desc: "Fractional and interim executives, ready on day one" },
  { href: routes.employerOfRecord, title: "Employer of Record", desc: "Hire anywhere, compliantly — we become the legal employer" },
];
const industryLinks = [
  { icon: "💻", title: "Technology", desc: "Engineering · Cloud · Data · Product" },
  { icon: "🏦", title: "Finance & Banking", desc: "Risk · Compliance · FP&A · Treasury" },
  { icon: "🏥", title: "Healthcare", desc: "Clinical · Pharma · Allied health" },
  { icon: "⚖️", title: "Legal", desc: "In-house · Contracts · Compliance" },
  { icon: "📈", title: "Sales & Marketing", desc: "Sales · Growth · Brand · CX" },
  { icon: "🏭", title: "Operations", desc: "Supply chain · Procurement · Logistics" },
  { icon: "👥", title: "Human Resources", desc: "HR BP · TA · L&D · Reward" },
  { icon: "🏗️", title: "Engineering", desc: "Civil · Mechanical · Energy" },
];

const mobileSections: { title: string; href?: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Services",
    links: [
      { href: routes.services, label: "Staffing Solutions" },
      { href: routes.directHire, label: "Direct Hire" },
      { href: routes.contractStaffing, label: "Contract Staffing" },
      { href: routes.temporaryStaffing, label: "Temporary Staffing" },
      { href: routes.rpo, label: "Recruitment Process Outsourcing" },
      { href: routes.executiveSearch, label: "Executive Search" },
      { href: routes.interimLeadership, label: "Interim & Fractional Leadership" },
      { href: routes.employerOfRecord, label: "Employer of Record" },
    ],
  },
  {
    title: "Industries",
    links: [
      { href: routes.industries, label: "Technology" },
      { href: routes.industries, label: "Finance & Banking" },
      { href: routes.industries, label: "Healthcare" },
      { href: routes.industries, label: "Legal" },
      { href: routes.industries, label: "Sales & Marketing" },
      { href: routes.industries, label: "Operations" },
      { href: routes.industries, label: "Human Resources" },
      { href: routes.industries, label: "Engineering" },
    ],
  },
  { title: "Resources", href: routes.resources, links: [] },
  {
    title: "About",
    links: [
      { href: routes.about, label: "Our story" },
      { href: routes.about, label: "Leadership team" },
      { href: routes.about, label: "Offices" },
      { href: routes.contactUs, label: "Contact" },
    ],
  },
  {
    title: "Careers",
    links: [
      { href: routes.searchJobs, label: "Search Jobs" },
      { href: routes.career, label: "Work at Rivago" },
    ],
  },
];

export default function Nav() {
  const pathname = usePathname();
  const isCreamPage = CREAM_NAV_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + "/") || pathname.startsWith(p + "?"));
  const [solid, setSolid] = useState(false);
  const [openKey, setOpenKey] = useState<MMKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSectionOpen, setMobileSectionOpen] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const careersTriggerRef = useRef<HTMLAnchorElement>(null);
  const careersPanelRef = useRef<HTMLDivElement>(null);
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpenKey(null);
    setMobileOpen(false);
    setMobileSectionOpen(null);
  }

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("theme-cream-nav", isCreamPage);
    return () => {
      document.body.classList.remove("theme-cream-nav");
    };
  }, [isCreamPage]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onResize = () => {
      if (window.innerWidth > 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileOpen]);

  function show(key: MMKey) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (key === "careers" && careersTriggerRef.current && careersPanelRef.current) {
      const tr = careersTriggerRef.current;
      const p = careersPanelRef.current;
      const r = tr.getBoundingClientRect();
      const half = (p.offsetWidth || 320) / 2;
      const pad = 16;
      const x = Math.min(Math.max(r.left + r.width / 2, half + pad), window.innerWidth - half - pad);
      p.style.setProperty("--mmx", `${x}px`);
    }
    setOpenKey(key);
  }
  function scheduleHide() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenKey(null), 140);
  }
  function cancelHide() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  const navSolid = isCreamPage || solid || openKey !== null;

  return (
    <>
      <nav id="nav" className={navSolid ? "solid" : ""}>
        <Link className="logo" href={routes.home}>
          <div className="logo-mark">R</div>Rivago<span style={{ fontWeight: 300, color: "var(--text2)" }}> Infotech</span>
        </Link>
        <div className="nav-mid" id="navMid" onMouseLeave={scheduleHide}>
          <Link className={`nl${openKey === "services" ? " active-mm" : ""}`} href={routes.services} aria-expanded={openKey === "services"} onMouseEnter={() => show("services")} onFocus={() => show("services")}>
            Services <Chevron />
          </Link>
          <Link className={`nl${openKey === "industries" ? " active-mm" : ""}`} href={routes.industries} aria-expanded={openKey === "industries"} onMouseEnter={() => show("industries")} onFocus={() => show("industries")}>
            Industries <Chevron />
          </Link>
          <Link className="nl" href={routes.resources}>
            Resources
          </Link>
          <Link className={`nl${openKey === "about" ? " active-mm" : ""}`} href={routes.about} aria-expanded={openKey === "about"} onMouseEnter={() => show("about")} onFocus={() => show("about")}>
            About <Chevron />
          </Link>
          <Link ref={careersTriggerRef} className={`nl${openKey === "careers" ? " active-mm" : ""}`} href={routes.career} aria-expanded={openKey === "careers"} onMouseEnter={() => show("careers")} onFocus={() => show("careers")}>
            Careers <Chevron />
          </Link>

          {/* SERVICES panel */}
          <div className={`mm mm-services${openKey === "services" ? " open" : ""}`} onMouseEnter={cancelHide} onMouseLeave={scheduleHide}>
            <div>
              <div className="mm-col-head">Staffing solutions</div>
              <div className="mm-cols">
                {serviceLinks.map((l) => (
                  <Link key={l.href} className="mm-link" href={l.href}>
                    <div className="mm-link-ico"><CircleIco /></div>
                    <div className="mm-link-body">
                      <div className="mm-link-title">{l.title} <Arrow /></div>
                      <div className="mm-link-desc">{l.desc}</div>
                    </div>
                    {l.tag && <span className="mm-link-tag">{l.tag}</span>}
                  </Link>
                ))}
              </div>
              <div className="mm-col-head" style={{ marginTop: 14 }}>Specialist services</div>
              <div className="mm-cols">
                {specialistLinks.map((l) => (
                  <Link key={l.href} className="mm-link" href={l.href}>
                    <div className="mm-link-ico"><CircleIco /></div>
                    <div className="mm-link-body">
                      <div className="mm-link-title">{l.title} <Arrow /></div>
                      <div className="mm-link-desc">{l.desc}</div>
                    </div>
                    {l.tag && <span className="mm-link-tag">{l.tag}</span>}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mm-promo">
              <div className="mm-promo-eyebrow">Featured</div>
              <div className="mm-promo-title">Book a <em>strategy call.</em></div>
              <div className="mm-promo-desc">30 minutes with a senior partner. We review open roles, propose a delivery plan and quote a realistic timeline — at no cost.</div>
              <div className="mm-promo-stats">
                <div className="mm-promo-stat"><div className="mm-promo-stat-val">48h</div><div className="mm-promo-stat-lbl">Shortlist delivery</div></div>
                <div className="mm-promo-stat"><div className="mm-promo-stat-val">94%</div><div className="mm-promo-stat-lbl">Interview accept</div></div>
                <div className="mm-promo-stat"><div className="mm-promo-stat-val">1,000+</div><div className="mm-promo-stat-lbl">Placements a year</div></div>
              </div>
              <button className="mm-promo-btn" data-hire>Book your call <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5h6M5.5 2.5l3 3-3 3" stroke="#030C05" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
            </div>
          </div>

          {/* INDUSTRIES panel */}
          <div className={`mm mm-ind${openKey === "industries" ? " open" : ""}`} onMouseEnter={cancelHide} onMouseLeave={scheduleHide}>
            {industryLinks.map((l) => (
              <Link key={l.title} className="mm-link" href={routes.industries}>
                <div className="mm-link-ico">{l.icon}</div>
                <div className="mm-link-body">
                  <div className="mm-link-title">{l.title}</div>
                  <div className="mm-link-desc">{l.desc}</div>
                </div>
              </Link>
            ))}
            <div className="mm-ind-foot">
              <div className="mm-ind-foot-l">Need a sector we haven&apos;t listed? <strong>We probably staff it.</strong></div>
              <Link className="mm-ind-foot-link" href={routes.industries}>See all industries <Arrow /></Link>
            </div>
          </div>

          {/* ABOUT panel */}
          <div className={`mm mm-about${openKey === "about" ? " open" : ""}`} onMouseEnter={cancelHide} onMouseLeave={scheduleHide}>
            <Link className="mm-link" href={routes.about}>
              <div className="mm-link-ico"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#3DFF87" strokeWidth="1.3" /><path d="M8 5v3l2 1.5" stroke="#3DFF87" strokeWidth="1.3" strokeLinecap="round" /></svg></div>
              <div className="mm-link-body"><div className="mm-link-title">Our story <Arrow /></div><div className="mm-link-desc">Why we built Rivago and what we stand for</div></div>
            </Link>
            <Link className="mm-link" href={routes.about}>
              <div className="mm-link-ico"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="5" cy="6" r="2" stroke="#3DFF87" strokeWidth="1.3" /><circle cx="11" cy="6" r="2" stroke="#3DFF87" strokeWidth="1.3" /><path d="M2 13c0-1.7 1.3-3 3-3M14 13c0-1.7-1.3-3-3-3" stroke="#3DFF87" strokeWidth="1.3" strokeLinecap="round" /></svg></div>
              <div className="mm-link-body"><div className="mm-link-title">Leadership team</div><div className="mm-link-desc">Senior partners who own every search</div></div>
            </Link>
            <Link className="mm-link" href={routes.about}>
              <div className="mm-link-ico"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5C5 1.5 3 4 3 7c0 4 5 7.5 5 7.5s5-3.5 5-7.5c0-3-2-5.5-5-5.5z" stroke="#3DFF87" strokeWidth="1.3" /><circle cx="8" cy="7" r="1.8" stroke="#3DFF87" strokeWidth="1.3" /></svg></div>
              <div className="mm-link-body"><div className="mm-link-title">Offices</div><div className="mm-link-desc">US · Canada · UAE · India</div></div>
            </Link>
            <Link className="mm-link" href={routes.contactUs}>
              <div className="mm-link-ico"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2.5" y="3" width="11" height="10" rx="1.5" stroke="#3DFF87" strokeWidth="1.3" /><path d="M5 6h6M5 8.5h6M5 11h4" stroke="#3DFF87" strokeWidth="1.3" strokeLinecap="round" /></svg></div>
              <div className="mm-link-body"><div className="mm-link-title">Contact</div><div className="mm-link-desc">Talk to a partner across our three offices</div></div>
            </Link>
          </div>

          {/* CAREERS panel */}
          <div ref={careersPanelRef} className={`mm mm-anchor mm-careers-1col${openKey === "careers" ? " open" : ""}`} onMouseEnter={cancelHide} onMouseLeave={scheduleHide}>
            <Link className="mm-link" href={routes.searchJobs}>
              <div className="mm-link-ico"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2.5 5.5h11v8h-11z" stroke="#3DFF87" strokeWidth="1.2" strokeLinejoin="round" /><path d="M6 5.5V4a1 1 0 011-1h2a1 1 0 011 1v1.5M2.5 9h11" stroke="#3DFF87" strokeWidth="1.2" strokeLinecap="round" /></svg></div>
              <div className="mm-link-body"><div className="mm-link-title">Search Jobs <Arrow /></div><div className="mm-link-desc">Browse every open role across our offices</div></div>
            </Link>
            <Link className="mm-link" href={routes.career}>
              <div className="mm-link-ico"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5.5" r="2.5" stroke="#3DFF87" strokeWidth="1.2" /><path d="M3 13.5c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="#3DFF87" strokeWidth="1.2" strokeLinecap="round" /></svg></div>
              <div className="mm-link-body"><div className="mm-link-title">Work at Rivago <Arrow /></div><div className="mm-link-desc">Life, values and how we run a desk</div></div>
            </Link>
          </div>
        </div>
        <div className="nav-r">
          <button className="nav-burger" id="navBurger" aria-expanded={mobileOpen} aria-controls="mnav" aria-label={mobileOpen ? "Close menu" : "Open menu"} onClick={() => setMobileOpen((v) => !v)}>
            <span></span><span></span><span></span>
          </button>
          <Link className="btn-si" href={routes.signIn}>Sign in</Link>
          <button className="btn-cta" data-hire>Hire Talent</button>
        </div>
      </nav>

      <div className={`mnav${mobileOpen ? " open" : ""}`} id="mnav" role="dialog" aria-modal="true" aria-label="Menu" onClick={(e) => { if (e.target === e.currentTarget) setMobileOpen(false); }}>
        <div className="mnav-panel">
          {mobileSections.map((sec) => (
            <div key={sec.title} className={`mnav-sec${mobileSectionOpen === sec.title ? " open" : ""}`}>
              {sec.links.length === 0 && sec.href ? (
                <Link className="mnav-top" href={sec.href} onClick={() => setMobileOpen(false)}>{sec.title}</Link>
              ) : (
                <>
                  <button
                    className="mnav-top"
                    type="button"
                    onClick={() => setMobileSectionOpen((cur) => (cur === sec.title ? null : sec.title))}
                  >
                    {sec.title}
                    <svg className="cv" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                  <div className="mnav-sub" style={{ maxHeight: mobileSectionOpen === sec.title ? 999 : 0 }}>
                    {sec.links.map((l, i) => (
                      <Link key={`${l.href}-${i}`} href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
          <Link className="mnav-cta" href={routes.signIn} style={{ background: "transparent", border: "1px solid var(--border)", color: "var(--text)" }} onClick={() => setMobileOpen(false)}>Sign in</Link>
          <button className="mnav-cta" data-hire onClick={() => setMobileOpen(false)}>Hire Talent</button>
        </div>
      </div>
    </>
  );
}
