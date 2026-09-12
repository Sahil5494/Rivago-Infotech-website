import Link from "next/link";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Cookie Policy — Rivago Infotech",
  description: "How Rivago Infotech uses cookies and similar technologies on rivagoinfotech.com, and how to manage your preferences.",
  alternates: { canonical: "https://rivagoinfotech.com/cookies" },
};

const LAST_UPDATED = "September 1, 2026";

function LegalLinks() {
  return (
    <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid var(--border)", display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center", fontSize: 13.5 }}>
      <span style={{ color: "var(--text3)" }}>Related:</span>
      <Link href={routes.privacy} style={{ color: "var(--green)" }}>Privacy Policy</Link>
      <Link href={routes.terms} style={{ color: "var(--green)" }}>Terms of Service</Link>
      <a href="mailto:legal@rivagoinfotech.com" style={{ color: "var(--green)" }}>legal@rivagoinfotech.com</a>
    </div>
  );
}

export default function CookiesPage() {
  return (
    <>
      <header className="page-hero" style={{ padding: "140px 44px 56px" }}>
        <div className="page-hero-inner">
          <div className="crumbs"><Link href={routes.home}>Home</Link><span className="crumbs-sep">/</span><span>Cookie Policy</span></div>
          <h1 style={{ fontSize: "clamp(32px,4vw,48px)" }}>Cookie Policy</h1>
          <p className="lead">Last updated: {LAST_UPDATED}</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap" style={{ maxWidth: 820, margin: "0 auto" }}>
          <LegalBody />
          <LegalLinks />
        </div>
      </section>
    </>
  );
}

function LegalBody() {
  const h2: CSSProperties = { fontSize: 22, fontWeight: 500, color: "var(--text)", letterSpacing: "-.01em", marginTop: 44, marginBottom: 14 };
  const p: CSSProperties = { fontSize: 15, color: "var(--text2)", lineHeight: 1.8, marginBottom: 14, fontWeight: 300 };
  const ul: CSSProperties = { fontSize: 15, color: "var(--text2)", lineHeight: 1.9, marginBottom: 14, paddingLeft: 22, fontWeight: 300 };

  return (
    <div>
      <p style={p}>
        This Cookie Policy explains how Rivago Infotech (&ldquo;Rivago,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo; or &ldquo;our&rdquo;) uses cookies and similar technologies on rivagoinfotech.com, and the choices available to you. It should be read alongside our <Link href={routes.privacy} style={{ color: "var(--green)" }}>Privacy Policy</Link>.
      </p>

      <h2 style={h2}>1. What are cookies</h2>
      <p style={p}>Cookies are small text files placed on your device when you visit a website. They allow a site to recognize your browser, remember preferences, and understand how the site is used. Similar technologies (such as local storage) serve comparable purposes and are covered by this policy.</p>

      <h2 style={h2}>2. Types of cookies we use</h2>
      <ul style={ul}>
        <li><strong>Essential cookies:</strong> required for the website to function — for example, remembering the state of a form as you complete it, or keeping a session active. These cannot be disabled without affecting core functionality.</li>
        <li><strong>Performance and analytics cookies:</strong> help us understand how visitors use our site — which pages are viewed, how long visitors stay, and where they came from — so we can improve navigation and content. Data is used in aggregate.</li>
        <li><strong>Functional cookies:</strong> remember choices you make (such as a preferred office location or job search filters) to make your next visit more convenient.</li>
        <li><strong>Marketing cookies:</strong> where used, help us measure the effectiveness of our outreach and present relevant information about our services across the web.</li>
      </ul>

      <h2 style={h2}>3. Third-party cookies</h2>
      <p style={p}>Some cookies on our site may be set by third-party service providers we work with — for example, analytics or job-board integration providers — to help us operate and improve the site. These providers act under contractual confidentiality and data-protection obligations and do not use data collected on our site for their own independent marketing.</p>

      <h2 style={h2}>4. How to manage cookies</h2>
      <p style={p}>Most browsers let you view, delete and block cookies through their settings. Because essential cookies are required for core site functionality, disabling them may affect your ability to use forms, applications or your Rivago Talent account. You can typically manage cookie preferences through your browser&apos;s privacy or security settings menu.</p>

      <h2 style={h2}>5. Changes to this policy</h2>
      <p style={p}>We may update this Cookie Policy from time to time to reflect changes in the technologies we use or applicable law. The &ldquo;Last updated&rdquo; date at the top of this page will reflect the most recent revision.</p>

      <h2 style={h2}>6. Contact us</h2>
      <p style={p}>Questions about this Cookie Policy can be sent to <a href="mailto:legal@rivagoinfotech.com" style={{ color: "var(--green)" }}>legal@rivagoinfotech.com</a>.</p>
    </div>
  );
}
