import Link from "next/link";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Terms of Service — Rivago Infotech",
  description: "The terms governing use of the Rivago Infotech website and the staffing, recruitment and search services we provide to clients and candidates.",
  alternates: { canonical: "https://rivagoinfotech.com/terms" },
};

const LAST_UPDATED = "September 1, 2026";

function LegalLinks() {
  return (
    <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid var(--border)", display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center", fontSize: 13.5 }}>
      <span style={{ color: "var(--text3)" }}>Related:</span>
      <Link href={routes.privacy} style={{ color: "var(--green)" }}>Privacy Policy</Link>
      <Link href={routes.cookies} style={{ color: "var(--green)" }}>Cookie Policy</Link>
      <a href="mailto:legal@rivagoinfotech.com" style={{ color: "var(--green)" }}>legal@rivagoinfotech.com</a>
    </div>
  );
}

export default function TermsPage() {
  return (
    <>
      <header className="page-hero" style={{ padding: "140px 44px 56px" }}>
        <div className="page-hero-inner">
          <div className="crumbs"><Link href={routes.home}>Home</Link><span className="crumbs-sep">/</span><span>Terms of Service</span></div>
          <h1 style={{ fontSize: "clamp(32px,4vw,48px)" }}>Terms of Service</h1>
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
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Rivago Infotech website and the staffing, recruitment, executive search and related services (the &ldquo;Services&rdquo;) provided by Rivago Infotech (&ldquo;Rivago,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo; or &ldquo;our&rdquo;). By accessing our website, submitting a hiring brief, or applying for a role through Rivago, you agree to these Terms.
      </p>

      <h2 style={h2}>1. Description of services</h2>
      <p style={p}>Rivago is a global staffing and recruitment firm offering direct hire, contract staffing, temporary staffing, executive search, recruitment process outsourcing, interim leadership and Employer of Record services to client companies, and career opportunities to individual candidates, across the United States, Canada, the United Arab Emirates and India. Specific engagements with client companies are governed by a separate signed service agreement; where these Terms and a signed service agreement conflict, the service agreement controls for that engagement.</p>

      <h2 style={h2}>2. Eligibility and accounts</h2>
      <p style={p}>You must be at least the age of majority in your jurisdiction to use our Services. If you create a Rivago Talent account to track applications, you are responsible for maintaining the confidentiality of your login credentials and for all activity under your account. Notify us immediately at legal@rivagoinfotech.com if you suspect unauthorized use of your account.</p>

      <h2 style={h2}>3. Accuracy of information</h2>
      <ul style={ul}>
        <li>Candidates agree to provide accurate, current and complete information in any application, CV/resume or intake form, and to promptly update it if it changes.</li>
        <li>Client companies agree to provide accurate information about the roles they engage us to fill, including compensation range, location and any licensing or work-authorization requirements.</li>
        <li>We reserve the right to decline to represent a candidate or accept a brief where information provided is inaccurate, incomplete, or the engagement falls outside the markets and sectors we serve.</li>
      </ul>

      <h2 style={h2}>4. Acceptable use</h2>
      <p style={p}>You agree not to use our website or Services to: submit false or misleading information; scrape, copy or redistribute candidate or client data made available to you through our Services; attempt to circumvent a placement fee owed to Rivago on a candidate we introduced; or interfere with the security or normal operation of our website.</p>

      <h2 style={h2}>5. Intellectual property</h2>
      <p style={p}>The Rivago name, logo, website content, methodology and materials are the property of Rivago Infotech or its licensors and are protected by applicable intellectual property laws. You may not reproduce, distribute or create derivative works from our content without prior written permission, except as necessary to apply for a role or engage our Services.</p>

      <h2 style={h2}>6. Third-party links</h2>
      <p style={p}>Our website may link to third-party sites, including client career pages and job boards. We are not responsible for the content, privacy practices or terms of those third-party sites.</p>

      <h2 style={h2}>7. Disclaimers</h2>
      <p style={p}>Our Services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. While we take care in screening and presenting candidates and opportunities, we do not guarantee that any particular search will result in a hire, that any candidate presented will meet every expectation, or that any role presented to a candidate will result in an offer. Employment decisions remain solely those of the hiring company and the candidate.</p>

      <h2 style={h2}>8. Limitation of liability</h2>
      <p style={p}>To the fullest extent permitted by applicable law, Rivago Infotech will not be liable for any indirect, incidental, special, consequential or punitive damages arising out of or related to your use of our website or Services, including loss of profits, revenue or data, even if we have been advised of the possibility of such damages. Nothing in these Terms limits liability that cannot be limited under applicable law.</p>

      <h2 style={h2}>9. Indemnification</h2>
      <p style={p}>You agree to indemnify and hold Rivago Infotech harmless from any claims, losses or expenses (including reasonable legal fees) arising from your breach of these Terms, misuse of our Services, or violation of applicable law.</p>

      <h2 style={h2}>10. Termination</h2>
      <p style={p}>We may suspend or terminate your access to our website or Services, including a Rivago Talent account, at any time for conduct that we believe violates these Terms or is otherwise harmful to other users, Rivago, or third parties.</p>

      <h2 style={h2}>11. Governing law</h2>
      <p style={p}>These Terms are governed by the laws of the State of Delaware, USA, without regard to its conflict-of-law principles, without prejudice to any mandatory consumer or employment protections that apply to you under the laws of your own country or state, including Canada, the United Arab Emirates or India where applicable.</p>

      <h2 style={h2}>12. Changes to these terms</h2>
      <p style={p}>We may update these Terms from time to time. Material changes will be reflected by an updated &ldquo;Last updated&rdquo; date on this page. Continued use of our website or Services after changes take effect constitutes acceptance of the revised Terms.</p>

      <h2 style={h2}>13. Contact us</h2>
      <p style={p}>Questions about these Terms can be sent to <a href="mailto:legal@rivagoinfotech.com" style={{ color: "var(--green)" }}>legal@rivagoinfotech.com</a>.</p>
    </div>
  );
}
