import Link from "next/link";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Privacy Policy — Rivago Infotech",
  description: "How Rivago Infotech collects, uses, stores and protects the personal information of clients, candidates and website visitors.",
  alternates: { canonical: "https://rivagoinfotech.com/privacy" },
};

const LAST_UPDATED = "September 1, 2026";

function LegalLinks() {
  return (
    <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid var(--border)", display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center", fontSize: 13.5 }}>
      <span style={{ color: "var(--text3)" }}>Related:</span>
      <Link href={routes.terms} style={{ color: "var(--green)" }}>Terms of Service</Link>
      <Link href={routes.cookies} style={{ color: "var(--green)" }}>Cookie Policy</Link>
      <a href="mailto:legal@rivagoinfotech.com" style={{ color: "var(--green)" }}>legal@rivagoinfotech.com</a>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <header className="page-hero" style={{ padding: "140px 44px 56px" }}>
        <div className="page-hero-inner">
          <div className="crumbs"><Link href={routes.home}>Home</Link><span className="crumbs-sep">/</span><span>Privacy Policy</span></div>
          <h1 style={{ fontSize: "clamp(32px,4vw,48px)" }}>Privacy Policy</h1>
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
        Rivago Infotech (&ldquo;Rivago,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo; or &ldquo;our&rdquo;) is a global staffing and recruitment firm headquartered in Wilmington, Delaware, USA, with offices in Pune, India and Ontario, Canada, serving clients and candidates across the United States, Canada, the United Arab Emirates and India. This Privacy Policy explains what personal information we collect, why we collect it, how we use and share it, and the choices and rights available to you.
      </p>

      <h2 style={h2}>1. Information we collect</h2>
      <p style={p}>We collect information depending on how you interact with us:</p>
      <ul style={ul}>
        <li><strong>Candidates:</strong> name, contact details, CV/resume, employment and education history, skills, salary expectations, right-to-work or work-authorization status, references, and — where relevant to a role and provided voluntarily or as required by law — identity or licensing documentation.</li>
        <li><strong>Clients:</strong> company name and contact details, hiring requirements, and information about roles you ask us to fill.</li>
        <li><strong>Website visitors:</strong> information submitted through contact and intake forms, and technical data such as IP address, browser type and pages visited, some of which is collected via cookies (see our <Link href={routes.cookies} style={{ color: "var(--green)" }}>Cookie Policy</Link>).</li>
      </ul>

      <h2 style={h2}>2. How we use your information</h2>
      <p style={p}>We use personal information to: match candidates with suitable roles; present candidate profiles to prospective employer clients (only with the candidate&apos;s consent — see Section 3); manage and deliver our staffing, executive search and recruitment process outsourcing services; communicate with you about roles, briefs or your account; comply with legal, tax and employment obligations in the jurisdictions we operate in; and improve our website and services.</p>

      <h2 style={h2}>3. CV, resume and candidate data handling</h2>
      <p style={p}>A candidate&apos;s CV or resume is never shared with a prospective employer without that candidate&apos;s explicit, per-role consent. We retain candidate profiles on file so we can consider you for future roles that may be a better fit; you may ask us to delete your profile or opt out of future contact at any time by emailing legal@rivagoinfotech.com. Where a role requires licensing, right-to-work verification or background screening, we only collect the documentation needed for that specific process and share it only with the parties required to complete it (e.g. the hiring client, a licensing authority, or a screening provider acting on our behalf).</p>

      <h2 style={h2}>4. Cookies</h2>
      <p style={p}>Our website uses cookies and similar technologies for essential functionality, performance measurement and, where applicable, marketing. Full detail on the categories of cookies we use and how to manage them is set out in our <Link href={routes.cookies} style={{ color: "var(--green)" }}>Cookie Policy</Link>.</p>

      <h2 style={h2}>5. How we share information</h2>
      <p style={p}>We share personal information with: prospective employer clients (candidate data, with consent, as described above); service providers who support our operations (e.g. background screening, payroll and IT infrastructure providers), under contractual confidentiality obligations; professional advisers and regulators where required by law; and, in the event of a merger, acquisition or asset sale, a successor entity. We do not sell personal information to third parties for their own marketing purposes.</p>

      <h2 style={h2}>6. International data transfers</h2>
      <p style={p}>Because we operate across the United States, Canada, the UAE and India, personal information may be transferred to and processed in a country other than the one in which it was collected. Where required, we put appropriate safeguards in place — such as standard contractual clauses or equivalent mechanisms — to protect information transferred internationally.</p>

      <h2 style={h2}>7. Data retention</h2>
      <p style={p}>We retain personal information for as long as necessary to fulfil the purposes described in this policy, including to consider candidates for future roles, satisfy legal, accounting or reporting obligations, and resolve disputes. Retention periods vary by data type and jurisdiction; you may request deletion at any time, subject to any legal retention requirements that apply to us.</p>

      <h2 style={h2}>8. Your rights</h2>
      <p style={p}>Depending on where you live, you may have the right to: access the personal information we hold about you; correct inaccurate information; request deletion; request a portable copy of your data; object to or restrict certain processing; and, where applicable (including under the EU General Data Protection Regulation, the California Consumer Privacy Act, or similar data-protection laws), exercise a right to know what information has been collected, request deletion, and opt out of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of personal information — noting that Rivago does not sell personal information. To exercise any of these rights, contact us at legal@rivagoinfotech.com. We will respond within the timeframe required by applicable law.</p>

      <h2 style={h2}>9. Data security</h2>
      <p style={p}>We maintain administrative, technical and physical safeguards designed to protect personal information against unauthorized access, disclosure, alteration or destruction. No system is completely secure, and we encourage you to contact us promptly if you believe your information has been compromised.</p>

      <h2 style={h2}>10. Children&apos;s privacy</h2>
      <p style={p}>Our services are intended for individuals who are at least the age of majority in their jurisdiction and are seeking or offering employment. We do not knowingly collect personal information from children.</p>

      <h2 style={h2}>11. Changes to this policy</h2>
      <p style={p}>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will post the revised policy on this page with an updated &ldquo;Last updated&rdquo; date.</p>

      <h2 style={h2}>12. Contact us</h2>
      <p style={p}>For questions about this Privacy Policy, or to exercise your rights over your personal information, contact our team at <a href="mailto:legal@rivagoinfotech.com" style={{ color: "var(--green)" }}>legal@rivagoinfotech.com</a>.</p>
    </div>
  );
}
