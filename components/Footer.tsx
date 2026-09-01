"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes, servedMarkets } from "@/lib/routes";

/** Routes that render their own standalone footer and must not get the global one. */
const NO_FOOTER_ROUTES = ["/view-jobs"];

export default function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();
  if (NO_FOOTER_ROUTES.some((p) => pathname === p || pathname.startsWith(p + "/"))) return null;
  return (
    <footer>
      <div className="ft-grid">
        <div>
          <Link className="logo" href={routes.home}>
            <div className="logo-mark">R</div>Rivago<span style={{ fontWeight: 300, color: "var(--text2)" }}> Infotech</span>
          </Link>
          <div className="ft-brand">
            A global staffing firm built to unlimit the search. We map entire markets with AI, then put one senior
            partner on your mandate from brief to signed offer — no portals, no handoffs, no junior learning on your
            role. Ten specialist practices across the US, Canada, the UAE and India, since 2019.
          </div>
          <div style={{ marginTop: 18 }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: "var(--text3)", textTransform: "uppercase", letterSpacing: ".07em", marginBottom: 6 }}>
              Get in touch
            </div>
            <a href="mailto:info@rivagoinfotech.com" style={{ fontSize: 13, color: "var(--text2)" }}>info@rivagoinfotech.com</a>
          </div>
          <div className="ft-soc">
            <a href="https://www.linkedin.com/company/rivago-infotech-inc/" target="_blank" rel="noopener noreferrer" aria-label="Rivago Infotech on LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM2.4 21h5.16V9.5H2.4V21zM10.2 9.5V21h5.16v-6.36c0-1.68.32-3.3 2.4-3.3 2.05 0 2.08 1.92 2.08 3.4V21h5.16v-6.9c0-4.48-.96-6.9-4.68-6.9-2.24 0-3.63 1.23-4.2 2.4h-.06V9.5H10.2z" /></svg>
            </a>
            <a href="https://www.instagram.com/rivago.official" target="_blank" rel="noopener noreferrer" aria-label="Rivago Infotech on Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.98c-3.15 0-3.5.01-4.74.07-1.14.05-1.62.24-1.94.37-.35.14-.6.3-.86.56-.26.26-.42.51-.56.86-.13.32-.32.8-.37 1.94-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.62.37 1.94.14.35.3.6.56.86.26.26.51.42.86.56.32.13.8.32 1.94.37 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.62-.24 1.94-.37.35-.14.6-.3.86-.56.26-.26.42-.51.56-.86.13-.32.32-.8.37-1.94.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.62-.37-1.94a2.3 2.3 0 00-.56-.86 2.3 2.3 0 00-.86-.56c-.32-.13-.8-.32-1.94-.37-1.24-.06-1.59-.07-4.74-.07zm0 3.37a5.05 5.05 0 110 10.1 5.05 5.05 0 010-10.1zm0 8.33a3.28 3.28 0 100-6.56 3.28 3.28 0 000 6.56zm6.43-8.55a1.18 1.18 0 11-2.36 0 1.18 1.18 0 012.36 0z" /></svg>
            </a>
            <a href="https://www.glassdoor.com/Overview/Working-at-Rivago-Infotech-EI_IE.htm" target="_blank" rel="noopener noreferrer" aria-label="Rivago Infotech on Glassdoor">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.9 13.2v6.06c0 1.51-1.23 2.74-2.75 2.74H6.1c-1.52 0-2.75-1.23-2.75-2.74V13.2h3.35v5.45h7.85V13.2h3.35zM20.65 4.74v6.06H17.3V5.35H9.45v5.45H6.1V4.74C6.1 3.23 7.33 2 8.85 2h9.05c1.52 0 2.75 1.23 2.75 2.74z" /></svg>
            </a>
          </div>
        </div>
        <div>
          <div className="ft-h">Services</div>
          <Link className="ft-lnk" href={routes.services}>Staffing Solutions</Link>
          <Link className="ft-lnk" href={routes.directHire}>Direct hire</Link>
          <Link className="ft-lnk" href={routes.contractStaffing}>Contract staffing</Link>
          <Link className="ft-lnk" href={routes.temporaryStaffing}>Temporary staffing</Link>
          <Link className="ft-lnk" href={routes.rpo}>Recruitment Process Outsourcing</Link>
          <Link className="ft-lnk" href={routes.executiveSearch}>Executive search</Link>
          <Link className="ft-lnk" href={routes.interimLeadership}>Interim &amp; fractional leadership</Link>
          <Link className="ft-lnk" href={routes.employerOfRecord}>Employer of Record</Link>
        </div>
        <div>
          <div className="ft-h">Industries</div>
          <Link className="ft-lnk" href={`${routes.industries}#technology`}>Technology</Link>
          <Link className="ft-lnk" href={`${routes.industries}#healthcare`}>Healthcare</Link>
          <Link className="ft-lnk" href={`${routes.industries}#legal`}>Legal</Link>
          <Link className="ft-lnk" href={`${routes.industries}#finance`}>Finance &amp; Banking</Link>
          <Link className="ft-lnk" href={`${routes.industries}#aerospace`}>Aerospace &amp; Defence</Link>
          <Link className="ft-lnk" href={`${routes.industries}#telecom`}>Telecom</Link>
          <Link className="ft-lnk" href={`${routes.industries}#automotive`}>Automotive</Link>
          <Link className="ft-lnk" href={`${routes.industries}#supply`}>Supply &amp; Operations</Link>
          <Link className="ft-lnk" href={`${routes.industries}#sales`}>Sales &amp; Marketing</Link>
          <Link className="ft-lnk" href={`${routes.industries}#people`}>People &amp; HR</Link>
        </div>
        <div>
          <div className="ft-h">Company</div>
          <Link className="ft-lnk" href={routes.about}>About</Link>
          <Link className="ft-lnk" href={`${routes.resources}?view=cs`}>Case Studies</Link>
          <Link className="ft-lnk" href={routes.resources}>Blog</Link>
          <Link className="ft-lnk" href={routes.career}>Careers</Link>
          <Link className="ft-lnk" href={routes.viewJobs}>Search jobs</Link>
          <Link className="ft-lnk" href={routes.contactUs}>Contact</Link>
        </div>
        <div>
          <div className="ft-h">Markets</div>
          {servedMarkets.map((m) => (
            <div className="ft-mk" key={m}>{m}</div>
          ))}
          <Link className="ft-lnk" href={routes.contactUs} style={{ marginTop: 14 }}>All offices →</Link>
        </div>
      </div>
      <div className="ft-bot">
        <span className="ft-copy">© {year} Rivago Infotech Inc. All rights reserved.</span>
        <div style={{ display: "flex", gap: 20 }}>
          <Link className="ft-lnk" href={routes.privacy} style={{ margin: 0 }}>Privacy</Link>
          <Link className="ft-lnk" href={routes.terms} style={{ margin: 0 }}>Terms</Link>
          <Link className="ft-lnk" href={routes.cookies} style={{ margin: 0 }}>Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
