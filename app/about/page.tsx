import Link from "next/link";
import type { Metadata } from "next";
import { routes, offices } from "@/lib/routes";

export const metadata: Metadata = {
  title: "About — Rivago Infotech",
  description:
    "Rivago Infotech is a global staffing and recruitment firm founded in 2019 on one idea: build the firm we always wanted to hire from. No call centres. No automated outreach. No portal.",
  alternates: { canonical: "https://rivagoinfotech.com/about" },
  openGraph: {
    title: "About — Rivago Infotech",
    description:
      "Rivago Infotech is a global staffing and recruitment firm founded in 2019 on one idea: build the firm we always wanted to hire from.",
    url: "https://rivagoinfotech.com/about",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "EmploymentAgency"],
      "@id": "https://rivagoinfotech.com/#organization",
      name: "Rivago Infotech",
      alternateName: ["Rivago", "Rivago Infotech Inc"],
      url: "https://rivagoinfotech.com",
      logo: { "@type": "ImageObject", url: "https://rivagoinfotech.com/assets/og-image.png" },
      description:
        "Rivago Infotech is a global staffing and recruitment firm placing senior talent across technology, healthcare, finance, legal, aerospace and more — direct hire, contract, temporary staffing, RPO, executive search and Employer of Record across the United States, Canada, the UAE and India.",
      slogan: "Staffing for every role, at every level.",
      foundingDate: "2019",
      email: "info@rivagoinfotech.com",
      telephone: "+1-888-508-5703",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3524 Silverside Rd, Ste 35B",
        addressLocality: "Wilmington",
        addressRegion: "DE",
        postalCode: "19810",
        addressCountry: "US",
      },
      sameAs: [
        "https://www.linkedin.com/company/rivago-infotech-inc",
        "https://www.instagram.com/rivago.official/",
        "https://www.glassdoor.com/Overview/Working-at-Rivago-Infotech-EI_IE.htm",
        "https://www.google.com/maps/place/Rivago+Infotech",
      ],
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "India" },
      ],
      location: offices.map((o) => ({ "@id": `https://rivagoinfotech.com/contact-us#${o.id}` })),
    },
    {
      "@type": "WebSite",
      "@id": "https://rivagoinfotech.com/#website",
      url: "https://rivagoinfotech.com",
      name: "Rivago Infotech",
      publisher: { "@id": "https://rivagoinfotech.com/#organization" },
      inLanguage: "en-US",
    },
    {
      "@type": "AboutPage",
      "@id": "https://rivagoinfotech.com/about#webpage",
      url: "https://rivagoinfotech.com/about",
      name: "About — Rivago Infotech",
      isPartOf: { "@id": "https://rivagoinfotech.com/#website" },
      about: { "@id": "https://rivagoinfotech.com/#organization" },
      description:
        "The story of Rivago Infotech — founded 2019, built by recruiters who wanted a firm with one senior partner owning every search from brief to signed offer.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://rivagoinfotech.com/" },
        { "@type": "ListItem", position: 2, name: "About", item: "https://rivagoinfotech.com/about" },
      ],
    },
    ...offices.map((o) => ({
      "@type": "EmploymentAgency",
      "@id": `https://rivagoinfotech.com/contact-us#${o.id}`,
      name: `Rivago Infotech — ${o.name}`,
      parentOrganization: { "@id": "https://rivagoinfotech.com/#organization" },
      url: "https://rivagoinfotech.com/contact-us",
      description: o.desc,
      telephone: "+1-888-508-5703",
      email: "info@rivagoinfotech.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: o.street,
        addressLocality: o.city,
        addressRegion: o.region,
        postalCode: o.postal,
        addressCountry: o.country,
      },
      geo: { "@type": "GeoCoordinates", latitude: o.lat, longitude: o.lng },
    })),
  ],
};

const Arrow = () => (
  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const timeline = [
  {
    step: "2019 · Pune",
    title: "Founded in Pune",
    desc: "Three recruiters, tired of quota-driven agencies that measured success in résumés sent rather than roles filled, started Rivago as an independent search practice. Pune became the research and delivery hub from day one.",
    side: [["Office", "Pune, India"], ["Focus", "Direct hire, tech & ops"], ["Team", "3 founding partners"]],
  },
  {
    step: "2021 · Delaware",
    title: "United States market entry",
    desc: "Rivago incorporated in Wilmington, Delaware, and opened for North American clients. Delaware became the global headquarters — the seat of the company, not just a delivery office.",
    side: [["Office", "Wilmington, DE"], ["Market", "United States"], ["Structure", "Global HQ"]],
  },
  {
    step: "2022 · Ontario",
    title: "Canada market entry",
    desc: "An Ontario office opened to give Canadian clients a partner in their own time zone, with cross-border placement capability into the US already built in.",
    side: [["Office", "Ayr, Ontario"], ["Market", "Canada"], ["Focus", "Financial services, healthcare"]],
  },
  {
    step: "2023 · UAE",
    title: "UAE becomes a served market",
    desc: "Rivago began placing candidates into the UAE — licensing, DHA registration and right-to-work handled end to end — without opening a local office. It remains a served market, run out of the existing three offices.",
    side: [["Coverage", "Served market"], ["Office", "None — remote-served"], ["Focus", "Healthcare, finance"]],
  },
];

const leadership = [
  { initials: "MK", name: "Maya Kessler", title: "Managing Partner", bio: "Co-founder. Runs the firm's largest retained searches and sets the bar every other engagement is measured against." },
  { initials: "DO", name: "Daniel Osei", title: "Head of Technology Practice", bio: "Seven years placing engineering and product leaders. Knows the comp bands before the client does." },
  { initials: "RN", name: "Riya Nair", title: "Head of Finance & Banking Practice", bio: "Ex-banking recruiter who got tired of keyword matching and joined to build something slower and better." },
  { initials: "TA", name: "Tomas Alvarez", title: "Head of Healthcare Practice", bio: "Specialises in clinical and allied-health searches across licensing-heavy, multi-jurisdiction hires." },
  { initials: "CL", name: "Chloe Lindqvist", title: "Head of Executive Search", bio: "Runs confidential VP-to-C-suite mandates. Weekly written progress reports, no exceptions." },
  { initials: "AV", name: "Arjun Verma", title: "Director, Delivery — Pune", bio: "Oversees the research and screening bench that every Rivago search runs through before a name reaches a client." },
  { initials: "JB", name: "Jordan Blake", title: "Director, North America", bio: "Based in Delaware. Owns the US and Canadian client relationships and the partner-to-brief matching." },
  { initials: "SP", name: "Sana Pillai", title: "Head of Candidate Experience", bio: "Makes sure every candidate — placed or not — gets a straight answer and a real conversation." },
];

const principles = [
  { title: "Quality over volume", desc: "We would rather send three candidates who are right than thirty who are close. No quotas on outreach, calls or submissions — ever." },
  { title: "Specificity over hype", desc: "Every claim on this site is a number we can defend on a first call. We don't sell buzzwords, and we don't oversell a search we can't win." },
  { title: "Ownership not handoffs", desc: "One senior partner owns a search from brief to signed offer. No relay through account managers, no junior researcher fronting the relationship." },
  { title: "Discretion as default", desc: "Confidential searches, sensitive replacements and off-limits lists are handled as standard practice, not a paid add-on." },
];

const refusals = [
  { title: "No CV without consent", desc: "A candidate's résumé never goes to a client without their explicit, per-role sign-off. Every time." },
  { title: "No scorecard-free searches", desc: "We don't start sourcing until the brief has an agreed scorecard. Guessing at fit wastes everyone's time." },
  { title: "No handoffs", desc: "The partner who takes the intake call is the partner who negotiates the offer. We don't relay you through a queue." },
  { title: "No poaching from client benches", desc: "Once a company is a client, their current team is off-limits for search — no exceptions, no fine print." },
  { title: "Honest about un-winnable briefs", desc: "If the comp, timeline or scope won't clear the market, we say so on the first call instead of stringing out a search." },
  { title: "Not a portal", desc: "No self-serve job board, no automated matching engine standing in for a person. A partner reads every brief." },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <header className="page-hero">
        <div className="page-hero-inner">
          <div className="crumbs"><Link href={routes.home}>Home</Link><span className="crumbs-sep">/</span><span>About</span></div>
          <div className="eyebrow ew-light gs" style={{ marginBottom: 28, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>About Rivago</div>
          <h1 className="gs">A staffing firm built around <em>one quiet idea.</em></h1>
          <p className="lead gs">No call centres. No automated outreach. No portal. Just senior partners who own a search from brief to signed offer, and refuse to hand it off.</p>
        </div>
      </header>

      {/* OUR STORY */}
      <section className="section cream">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 64, alignItems: "start" }}>
            <div className="gs">
              <div className="eyebrow ew-dark" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Our story</div>
              <h2 className="section-h2" style={{ color: "var(--dt)" }}>A different kind of<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>recruitment firm.</em></h2>
            </div>
            <div className="gs">
              <p style={{ fontFamily: "var(--fs)", fontStyle: "italic", fontSize: "clamp(28px,3.4vw,42px)", lineHeight: 1.32, color: "#0A7040", marginBottom: 32, letterSpacing: "-.01em" }}>
                &ldquo;We wanted to build the firm we had always wanted to hire from.&rdquo;
              </p>
              <p style={{ fontSize: 16, color: "var(--dt2)", lineHeight: 1.8, marginBottom: 18 }}>
                Rivago&apos;s founders spent years inside volume agencies — quota-driven, keyword-matching, measuring success by résumés sent rather than roles filled well. The candidates they cared about got lost in a queue. The clients got a different account manager every quarter. Nobody stayed on the line long enough to actually own an outcome.
              </p>
              <p style={{ fontSize: 16, color: "var(--dt2)", lineHeight: 1.8, marginBottom: 18 }}>
                So in 2019 they built something slower and better on purpose: one senior partner per search, a scorecard agreed before sourcing starts, and a hard rule against handing a relationship off to whoever picks up the phone next.
              </p>
              <p style={{ fontSize: 16, color: "var(--dt2)", lineHeight: 1.8 }}>
                Rivago has grown into a firm with three offices and clients across four markets. The idea hasn&apos;t changed — build the firm we would have wanted to hire from, and refuse to become the agency we used to work for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BY THE NUMBERS */}
      <section className="section">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>By the numbers</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 700 }}>Years of placed <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>hires.</em></h2>
          </div>
          <div className="guarantee">
            <div className="gtee gs"><div className="gtee-val">2019</div><div className="gtee-title">Founded</div><div className="gtee-desc">Started in Pune by three recruiters done with quota-driven agencies.</div></div>
            <div className="gtee gs"><div className="gtee-val">50<sup>+</sup></div><div className="gtee-title">People</div><div className="gtee-desc">Partners, researchers and delivery staff across three offices.</div></div>
            <div className="gtee gs"><div className="gtee-val">12</div><div className="gtee-title">Senior partners</div><div className="gtee-desc">Every search is owned by one of them, start to finish.</div></div>
            <div className="gtee gs"><div className="gtee-val">500<sup>+</sup></div><div className="gtee-title">Placements</div><div className="gtee-desc">Across technology, finance, healthcare, legal and operations.</div></div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section alt">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>How we got here</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 700 }}>Four milestones,<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>no detours.</em></h2>
          </div>
          <div className="proc-deep">
            {timeline.map((t) => (
              <div className="pd-row gs" key={t.step}>
                <div className="pd-step">{t.step}</div>
                <div className="pd-main"><h3>{t.title}</h3><p>{t.desc}</p></div>
                <div className="pd-side">
                  {t.side.map(([k, v]) => (
                    <div className="pd-side-row" key={k}><span>{k}</span><span className="v">{v}</span></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Leadership</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 700 }}>The partners who <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>own the searches.</em></h2>
          </div>
          <div className="why-grid">
            {leadership.map((p) => (
              <div className="why-card gs" key={p.initials}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,#3DFF87,#00A882)", color: "#030C05", fontWeight: 600, fontSize: 15, letterSpacing: ".02em", marginBottom: 20 }}>{p.initials}</div>
                <div className="why-title">{p.name}</div>
                <div style={{ fontSize: 12.5, color: "var(--green)", fontWeight: 500, marginBottom: 10 }}>{p.title}</div>
                <div className="why-desc">{p.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="section" style={{ background: "linear-gradient(180deg, rgba(61,255,135,.08), rgba(61,255,135,.015) 60%, var(--bg) 100%)" }}>
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>What we believe</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 700 }}>Four principles.<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>No exceptions.</em></h2>
          </div>
          <div className="why-grid" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
            {principles.map((p) => (
              <div className="why-card gs" key={p.title}>
                <div className="why-title">{p.title}</div>
                <div className="why-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE WON'T DO */}
      <section className="section cream">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-dark" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>What we won&apos;t do</div>
            <h2 className="section-h2" style={{ color: "var(--dt)", maxWidth: 760 }}>Our values, mostly stated as<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>the things we refuse.</em></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginTop: 36 }}>
            {refusals.map((r) => (
              <div className="gs" style={{ background: "#fff", border: "1px solid rgba(0,0,0,.07)", borderRadius: 18, padding: 28 }} key={r.title}>
                <div style={{ fontSize: 15, fontWeight: 600, color: "var(--dt)", marginBottom: 10, letterSpacing: "-.01em" }}>{r.title}</div>
                <div style={{ fontSize: 13.5, color: "var(--dt3)", lineHeight: 1.65 }}>{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="section">
        <div className="wrap">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Office locations</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 700 }}>Three offices.<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>One standard.</em></h2>
          </div>
          <div className="why-grid">
            {offices.map((o) => (
              <div className="why-card gs" key={o.id}>
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
        <h2>Work with us — start a conversation<br />with a <em>partner, not a portal.</em></h2>
        <p>Whether you&apos;re hiring or looking for your next role, the first reply comes from a person who owns the outcome.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn btn-cream-prim" data-hire>I&apos;m hiring · submit a brief <Arrow /></button>
          <Link className="btn btn-cream-ghost" href={routes.searchJobs}>I&apos;m a candidate · see roles</Link>
        </div>
      </section>
    </>
  );
}
