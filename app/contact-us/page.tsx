import Link from "next/link";
import type { Metadata } from "next";
import { routes } from "@/lib/routes";
import OfficesSection from "@/components/OfficesSection";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact · Rivago Infotech",
  description: "Talk to a senior Rivago partner — offices in Delaware, Pune and Ontario. Replies within one business day.",
  alternates: { canonical: "https://rivagoinfotech.com/contact-us" },
  openGraph: {
    title: "Contact · Rivago Infotech",
    description: "Talk to a senior Rivago partner — offices in Delaware, Pune and Ontario. Replies within one business day.",
    url: "https://rivagoinfotech.com/contact-us",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rivagoinfotech.com/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://rivagoinfotech.com/contact-us" },
  ],
};

export default function ContactUsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <header className="page-hero" style={{ minHeight: "62vh", display: "flex", alignItems: "center", paddingTop: 190, paddingBottom: 110 }}>
        <div className="page-hero-inner">
          <div className="crumbs"><Link href={routes.home}>Home</Link><span className="crumbs-sep">/</span><span>Contact</span></div>
          <h1 className="gs" style={{ marginTop: 22 }}>Get in touch with a global<br />leader in <em>specialist staffing.</em></h1>
          <p className="lead gs" style={{ maxWidth: 640 }}>Three offices, one standard. Email a senior partner directly and get a written reply within one business day — no ticket numbers, no chasing.</p>
        </div>
      </header>

      {/* FORM + SIDEBAR */}
      <section className="section">
        <div className="contact-grid">
          <div>
            <span className="eyebrow ew-light gs" style={{ marginBottom: 16, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Send a message</span>
            <h2 className="section-h2 gs" style={{ color: "var(--text)", marginBottom: 28 }}>How can we <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>help?</em></h2>
            <ContactForm />
          </div>

          <aside className="sup gs">
            <div className="sup-note">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.4" stroke="#3DFF87" strokeWidth="1.3" /><path d="M8 4.8v3.6M8 11h.01" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" /></svg>
              <div className="t"><b>One business day</b>A senior partner reads every message and replies in writing — no ticket numbers, no queues.</div>
            </div>
            <div className="sup-card">
              <h3>Call us</h3>
              <p>Prefer to talk it through? Reach a partner during business hours.</p>
              <a className="sup-lnk" href="tel:+18885085703">(888) 508-5703 <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
            </div>
            <div className="sup-card">
              <h3>Get support</h3>
              <p>Already working with us? Reach your partner directly, or email our support desk for account and billing questions.</p>
              <a className="sup-lnk" href="mailto:questions@rivagoinfotech.com?subject=Support%20request%20%E2%80%94%20Rivago%20Infotech">questions@rivagoinfotech.com <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
            </div>
            <div className="sup-card">
              <h3>Hiring right now?</h3>
              <p>Skip the form — send a brief and get a shortlist plan back within one business day.</p>
              <Link className="sup-lnk" href={`${routes.hireTalent}#intake`} data-hire>Submit a brief <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
            </div>
          </aside>
        </div>
      </section>

      <OfficesSection />
    </>
  );
}
