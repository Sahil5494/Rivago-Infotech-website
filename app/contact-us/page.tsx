import Link from "next/link";
import type { Metadata } from "next";
import { routes, offices } from "@/lib/routes";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Rivago Infotech",
  description:
    "Talk to a Rivago partner directly — no call centres. Call +1 (888) 508-5703, email us, or reach one of our three offices in Pune, Delaware and Ontario.",
  alternates: { canonical: "https://rivagoinfotech.com/contact-us" },
  openGraph: {
    title: "Contact Us — Rivago Infotech",
    description: "Talk to a Rivago partner directly — no call centres. Call +1 (888) 508-5703 or email us.",
    url: "https://rivagoinfotech.com/contact-us",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://rivagoinfotech.com/" },
    { "@type": "ListItem", position: 2, name: "Contact Us", item: "https://rivagoinfotech.com/contact-us" },
  ],
};

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 22 22" fill="none"><path d="M4 4h4l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v4a2 2 0 01-2 2C9.5 21 1 12.5 1 5a2 2 0 012-2z" stroke="#3DFF87" strokeWidth="1.5" strokeLinejoin="round" /></svg>
);
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 22 22" fill="none"><rect x="2" y="4" width="18" height="14" rx="2" stroke="#3DFF87" strokeWidth="1.5" /><path d="M3 6l8 6 8-6" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const emailLines = [
  { addr: "info@rivagoinfotech.com", label: "Employer & general leads" },
  { addr: "careers@rivagoinfotech.com", label: "Job applications & CVs" },
  { addr: "questions@rivagoinfotech.com", label: "General enquiries & support" },
];

export default function ContactUsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <header className="page-hero">
        <div className="page-hero-inner">
          <div className="crumbs"><Link href={routes.home}>Home</Link><span className="crumbs-sep">/</span><span>Contact Us</span></div>
          <div className="eyebrow ew-light gs" style={{ marginBottom: 28, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Contact</div>
          <h1 className="gs">We pick up <em>the phone.</em></h1>
          <p className="lead gs">No call centres, no ticket queue. Tell us whether you&apos;re hiring or job-hunting and it goes straight to the right desk — or <Link href={routes.searchJobs} style={{ color: "var(--green)", textDecoration: "underline" }}>search open jobs</Link> first if you&apos;d rather browse.</p>
        </div>
      </header>

      {/* FORM + DIRECT INFO */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 56, alignItems: "start" }}>
            <ContactForm />

            <div className="gs" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 18, padding: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(61,255,135,.08)", border: "1px solid rgba(61,255,135,.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><PhoneIcon /></div>
                  <div>
                    <div style={{ fontSize: 12, color: "var(--text3)", textTransform: "uppercase", letterSpacing: ".05em" }}>Call a partner directly</div>
                    <a href="tel:+18885085703" style={{ fontSize: 20, fontWeight: 500, color: "var(--text)", letterSpacing: "-.01em" }}>+1 (888) 508-5703</a>
                  </div>
                </div>
                <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.65 }}>Monday–Friday, business hours across US, Canada and India time zones. A real person answers — no automated menu.</div>
              </div>

              <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 18, padding: 28 }}>
                <div style={{ fontSize: 12, color: "var(--text3)", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 16 }}>Email by purpose</div>
                {emailLines.map((e) => (
                  <div key={e.addr} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 14 }}>
                    <div style={{ marginTop: 2, flexShrink: 0 }}><MailIcon /></div>
                    <div>
                      <a href={`mailto:${e.addr}`} style={{ fontSize: 14, color: "var(--text)", fontWeight: 500 }}>{e.addr}</a>
                      <div style={{ fontSize: 12, color: "var(--text3)", marginTop: 1 }}>{e.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: "rgba(61,255,135,.05)", border: "1px solid rgba(61,255,135,.2)", borderRadius: 18, padding: 28 }}>
                <div style={{ fontSize: 15, fontWeight: 500, color: "var(--text)", marginBottom: 8 }}>Get support</div>
                <div style={{ fontSize: 13.5, color: "var(--text2)", lineHeight: 1.7, marginBottom: 16 }}>Existing client with an account or billing question? Our support inbox is monitored on business days.</div>
                <a className="btn btn-ghost" href="mailto:questions@rivagoinfotech.com" style={{ width: "100%" }}>Email support</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="section alt">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Office locations</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 700 }}>Three offices.<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>One standard.</em></h2>
          </div>
          <div className="why-grid">
            {offices.map((o) => (
              <div className="why-card gs" key={o.id} id={o.id}>
                <div className="why-title">{o.name}</div>
                <div style={{ fontSize: 13.5, color: "var(--text2)", lineHeight: 1.7, marginBottom: 14 }}>
                  {o.street}<br />{o.city}, {o.region} {o.postal}<br />{o.country === "US" ? "United States" : o.country === "CA" ? "Canada" : "India"}
                </div>
                <div className="why-desc">{o.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="clients-cta gs">
        <h2>Prefer to browse<br /><em>before you call?</em></h2>
        <p>See what&apos;s open right now, or send a brief and hear back from a partner within one business day.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link className="btn btn-cream-prim" href={routes.searchJobs}>Search jobs</Link>
          <button className="btn btn-cream-ghost" data-hire>Submit a hiring brief</button>
        </div>
      </section>
    </>
  );
}
