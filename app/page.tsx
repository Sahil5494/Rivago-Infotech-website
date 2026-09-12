import Link from "next/link";
import HeroParticles from "@/components/HeroParticles";
import LogoMarquee from "@/components/LogoMarquee";
import OrbCanvas from "@/components/OrbCanvas";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import { routes, servicesList, industriesList, offices } from "@/lib/routes";

const faqItems = [
  {
    q: "What types of roles does Rivago specialise in?",
    a: "Rivago is a global staffing and recruitment company. We recruit across technology, finance, banking, healthcare, legal, operations, sales, marketing and HR — at every level from graduate to C-suite. We place candidates on a permanent, contract or interim basis across the US, Canada, the UAE and India.",
  },
  {
    q: "How quickly can you deliver a shortlist?",
    a: "Our average shortlist delivery is 48 hours from the moment we receive a complete brief. For niche or senior roles this may extend to 5–7 business days. We will always communicate a realistic timeline upfront — no surprises.",
  },
  {
    q: "Do you recruit permanent, contract and interim roles?",
    a: "Yes — Rivago recruits across all engagement types. We place candidates on a permanent basis, fixed-term or project contracts, and interim arrangements. This applies across all sectors and seniority levels, from graduate entry roles to C-suite leadership.",
  },
  {
    q: "Do you work with small companies or only enterprises?",
    a: "We work with companies of all sizes — from fast-growing startups placing their first hires to large enterprises scaling entire departments. Our process is the same for every client: thorough brief, fast delivery, quality-first shortlist.",
  },
  {
    q: "Which markets do you operate in?",
    a: "Rivago is a global staffing and recruitment company with active operations across the United States, Canada, the UAE and India. Our global delivery teams give us a wide sourcing reach and the ability to move fast in every market we serve.",
  },
  {
    q: "Is there a replacement guarantee if a placement doesn't work out?",
    a: "Yes. For all direct hire placements we offer a replacement guarantee period. If a placed candidate leaves or is let go within the agreed window, we restart the search at no additional fee. Terms are agreed upfront as part of our engagement.",
  },
];

const testimonials = [
  {
    badge: "US · Banking",
    quote: "We've worked with a lot of recruiters. Rivago is the first that came back with candidates who actually matched the brief — not just the keywords. Three hires, all still with us eighteen months later.",
    name: "Head of Talent Acquisition",
    role: "US Regional Bank",
  },
  {
    badge: "Canada · Financial Services",
    quote: "The shortlist arrived in 38 hours. Every candidate had been properly screened — comp expectations, notice period, right-to-work. We moved two to offer within the week. That's never happened before.",
    name: "HR Director",
    role: "Ontario Financial Services Firm",
  },
  {
    badge: "Delaware · Professional Services",
    quote: "Hiring clinical staff in the UAE is complicated — licensing, DHA registration, the works. Rivago handled all of it without being told twice. Eleven placements, zero compliance issues.",
    name: "Chief People Officer",
    role: "Dubai Hospital Group",
  },
  {
    badge: "Delaware · Professional Services",
    quote: "We needed a Finance Director on short notice. Rivago had three credible candidates in front of us within 48 hours. We made an offer on day four. The hire is still with us two years on.",
    name: "CEO",
    role: "Delaware Professional Services Firm",
  },
  {
    badge: "US · Technology",
    quote: "What sets Rivago apart is that they push back. If the brief is unclear, they say so. If a candidate isn't right, they won't send them. That honesty saves everyone time.",
    name: "VP of People",
    role: "US SaaS Company",
  },
];

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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const Arrow = () => (
  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const SmallArrow = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const CardArrow = () => (
  <svg className="svc-arr" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export default function Home() {
  return (
    <>
      <link rel="canonical" href="https://rivagoinfotech.com/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="hero">
        <div className="hphoto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=90&auto=format" alt="aerial green landscape with people" decoding="async" />
        </div>
        <HeroParticles />
        <div className="hgrain"></div>
        <div className="hero-content">
          <div className="hero-badge gs"><span className="bdot"></span>Global Staffing · US · Canada · UAE · India</div>
          <h1 className="hero-h1 gs">Staffing for getting<br />the <em>right people</em> in seat.</h1>
          <p className="hero-sub gs">We connect outstanding companies with exceptional talent — across every industry, every function and every corner of the globe.</p>
          <div className="hero-btns gs">
            <button className="btn-hp" data-help>Talk to an expert <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#030C05" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
          </div>
          <div className="hero-proof gs">
            <div><span className="pstars">★★★★★</span><div className="ptxt">Trusted by <strong>50+ companies</strong> · US, Canada, UAE &amp; India</div></div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="clients-sec">
        <div className="clients-label">Where world-class teams build their talent bench</div>
        <LogoMarquee />
      </section>

      {/* ORB */}
      <section className="orb-sec">
        <p className="orb-quote gs">The recruitment partner with <em>full context,</em><br />helping you at every step of the <strong>hiring process.</strong></p>
        <div className="orb-wrap gs">
          <div className="orb-halo"></div>
          <div className="orb-r1"></div><div className="orb-r2"></div><div className="orb-r3"></div>
          <OrbCanvas size={360} />
          <div className="orb-shadow"></div>
        </div>
        <p className="orb-desc gs">We don&apos;t just fill roles. We understand your business, your culture and what genuinely good looks like in your sector — then find the people who are ready to perform from day one.</p>
      </section>

      {/* FEATURES */}
      <section className="feat-sec">
        <div className="feat-inner">
          <div className="eyebrow ew-dark gs" style={{ marginBottom: 18 }}>Our approach</div>
          <h2 className="section-h2 feat-h2 dark gs" style={{ color: "var(--dt)", maxWidth: 580 }}>How we work — and why <em>it actually works.</em></h2>
          <div className="feat-grid">

            <div className="fc gs">
              <div className="fc-vis">
                <div className="sv-tag sv-tg"><span style={{ width: 5, height: 5, borderRadius: "50%", background: "#0A6030", display: "inline-block" }}></span>Contract · Permanent · Interim</div>
                <div className="sv-cand">
                  <div className="sv-cand-av" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,var(--green),#00A882)", color: "var(--bg)", fontWeight: 600, fontSize: 15, letterSpacing: ".02em" }}>AK</div>
                  <div><div className="sv-cand-name">Anil Kumar</div><div className="sv-cand-role">Senior Cloud Architect · 8 yrs exp</div><div className="sv-skills"><span className="sv-sk">AWS</span><span className="sv-sk">Kubernetes</span><span className="sv-sk">Terraform</span></div></div>
                </div>
                <div className="sv-bar-row"><div className="sv-bar-label">Role fit</div><div className="sv-bar"><div className="sv-bar-fill" style={{ width: "96%" }}></div></div><div className="sv-bar-val">96%</div></div>
                <div className="sv-bar-row"><div className="sv-bar-label">Culture fit</div><div className="sv-bar"><div className="sv-bar-fill" style={{ width: "91%" }}></div></div><div className="sv-bar-val">91%</div></div>
                <div className="sv-bar-row"><div className="sv-bar-label">Availability</div><div className="sv-bar"><div className="sv-bar-fill" style={{ width: "100%" }}></div></div><div className="sv-bar-val">2 wks</div></div>
              </div>
              <div className="fc-body"><div className="fc-title">We find people others miss</div><div className="fc-desc">Our recruiters go beyond job boards — accessing passive talent, referral networks and direct headhunting across every sector to surface candidates you won&apos;t find yourself.</div></div>
            </div>

            <div className="fc gs">
              <div className="fc-vis" style={{ paddingBottom: 16 }}>
                <div className="sv-tag sv-tb">Candidate screened</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
                  {[
                    ["Role competency — confirmed", "9 yrs finance leadership · cross-sector background"],
                    ["Communication — excellent", "Articulate · confident · client-facing ready"],
                    ["Availability — 2 weeks notice", "No competing offers · ready to start"],
                    ["Salary expectation — within budget", "Flexible · open to package structure"],
                  ].map(([t, s]) => (
                    <div className="sv-check" key={t}>
                      <div className="sv-ci"><svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3l2 2 4-4" stroke="#0A6030" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                      <div><div className="sv-ct">{t}</div><div className="sv-cs">{s}</div></div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                  <div style={{ flex: 1, padding: 7, background: "#E3F8ED", borderRadius: 7, fontSize: 11, color: "#0A6030", textAlign: "center", fontWeight: 600 }}>Accept →</div>
                  <div style={{ flex: 1, padding: 7, background: "#F5F0E8", borderRadius: 7, fontSize: 11, color: "#0A6030", textAlign: "center" }}>Defer</div>
                </div>
              </div>
              <div className="fc-body"><div className="fc-title">Screened before you see them</div><div className="fc-desc">Every candidate is fully assessed before reaching your inbox — competency, culture fit, availability and salary expectations all checked. You only meet people who are genuinely ready.</div></div>
            </div>

            <div className="fc gs">
              <div className="fc-vis">
                <div className="sv-nl">Recruiter assessment summary</div>
                <div className="sv-note">Anil brings 7 years of cloud architecture experience across AWS and Azure. Strong communicator, available immediately. US EST hours, no visa restrictions. Prior work spans fintech and enterprise SaaS. Panel interview strongly recommended.</div>
                <div style={{ marginTop: 10, display: "flex", gap: 5, flexWrap: "wrap" }}>
                  <span style={{ padding: "3px 9px", background: "#E3F8ED", borderRadius: 6, fontSize: 10, color: "#0A6030", fontWeight: 500 }}>AWS</span>
                  <span style={{ padding: "3px 9px", background: "#E3EEFF", borderRadius: 6, fontSize: 10, color: "#1A4A9A", fontWeight: 500 }}>Azure</span>
                  <span style={{ padding: "3px 9px", background: "#FFF5E3", borderRadius: 6, fontSize: 10, color: "#0A6030", fontWeight: 500 }}>Fintech exp</span>
                </div>
              </div>
              <div className="fc-body"><div className="fc-title">Full context, every time</div><div className="fc-desc">Every shortlisted candidate comes with a written recruiter summary — background, motivations, strengths and an honest recommendation. No guesswork on your side.</div></div>
            </div>

            <div className="fc wide gs">
              <div className="fc-vis wide-vis">
                <div className="sv-pl-col">
                  <div className="sv-pl-title">Live pipeline — active searches</div>
                  {[
                    ["Sr. Software Engineer · USA", "$130K · 3–5 candidates shortlisted", "→"],
                    ["DevOps Lead · Canada", "CAD 120K · 2 candidates shortlisted", "→"],
                    ["Finance Manager · UAE", "Sourcing · expected 48h", "⏳"],
                    ["HR Director · Canada", "CAD 145K · Offer stage", "★"],
                  ].map(([t, s, icon]) => (
                    <div className="sv-pl-card" key={t}>
                      <div className="sv-pl-dot" style={{ background: "var(--green)" }}></div>
                      <div><div className="sv-pl-name">{t}</div><div className="sv-pl-sub">{s}</div></div>
                      <div className="sv-pl-val" style={{ color: "var(--green)" }}>{icon}</div>
                    </div>
                  ))}
                </div>
                <div className="sv-pl-col">
                  <div className="sv-pl-title">This week</div>
                  <div style={{ marginBottom: 14 }}><div style={{ fontSize: 28, fontWeight: 700, color: "#0A140B", letterSpacing: "-.02em", lineHeight: 1 }}>14</div><div style={{ fontSize: 11, color: "var(--dt3)", marginTop: 2 }}>New submissions sent</div></div>
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}><span style={{ fontSize: 10, color: "var(--dt3)" }}>Client acceptance rate</span><span style={{ fontSize: 11, fontWeight: 600, color: "#0A7040" }}>94%</span></div>
                    <div style={{ height: 5, background: "#E8ECE8", borderRadius: 3, overflow: "hidden" }}><div style={{ height: "100%", width: "94%", background: "linear-gradient(90deg,var(--green),#00D4A8)", borderRadius: 3 }}></div></div>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <div style={{ flex: 1, background: "#fff", border: "1px solid rgba(0,0,0,.07)", borderRadius: 8, padding: 10, textAlign: "center" }}><div style={{ fontSize: 16, fontWeight: 700, color: "#0A140B" }}>48h</div><div style={{ fontSize: 9, color: "var(--dt3)", marginTop: 2 }}>Avg delivery</div></div>
                    <div style={{ flex: 1, background: "#fff", border: "1px solid rgba(0,0,0,.07)", borderRadius: 8, padding: 10, textAlign: "center" }}><div style={{ fontSize: 16, fontWeight: 700, color: "#0A140B" }}>94%</div><div style={{ fontSize: 9, color: "var(--dt3)", marginTop: 2 }}>Interview rate</div></div>
                  </div>
                </div>
              </div>
              <div className="fc-body"><div className="fc-title">Your search, actively managed</div><div className="fc-desc">We don&apos;t wait for candidates to apply. We actively track your open roles across every sector, monitor the market and bring you the right people — often before they&apos;re even looking.</div></div>
            </div>

            <div className="fc gs">
              <div className="fc-vis" style={{ paddingBottom: 14 }}>
                <div style={{ fontSize: 10, color: "var(--dt3)", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 12 }}>Placements by industry</div>
                {[
                  ["Tech", 48],
                  ["Finance", 28],
                  ["Health", 14],
                  ["Other", 10],
                ].map(([name, val]) => (
                  <div className="sv-mkt" key={name}>
                    <div className="sv-mkt-name">{name}</div>
                    <div className="sv-mkt-bar"><div className="sv-mkt-fill" style={{ width: `${val}%` }}></div></div>
                    <div className="sv-mkt-val">{val}%</div>
                  </div>
                ))}
              </div>
              <div className="fc-body"><div className="fc-title">Every sector. Every function.</div><div className="fc-desc">Active hiring pipelines across finance, technology, healthcare, legal, operations and beyond — in every market we serve.</div></div>
            </div>

          </div>
        </div>
      </section>

      {/* PRECISION */}
      <section className="prec-sec">
        <div className="prec-inner">
          <div>
            <div className="eyebrow ew-light gs">Our standard</div>
            <h2 className="prec-h2 gs">A shortlist that fits,<br />instead of <em>fifty that don&apos;t.</em></h2>
            <p className="prec-p gs">Every search begins with a calibration — us, your hiring manager, and the brief. We screen against the spec before anything reaches your inbox. That&apos;s why our shortlists move.</p>
            <div className="prec-list">
              {[
                "Calibration call with the hiring manager before sourcing begins",
                "Pre-screened against role spec, comp band and right-to-work",
                "One named partner from intake to placement — no handoffs",
                "90-day replacement guarantee — no questions asked",
              ].map((t) => (
                <div className="prec-item gs" key={t}>
                  <div className="prec-ico"><svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div className="prec-panel gs">
            <div className="pp-head"><div className="pp-title">Performance metrics</div><div className="pp-sub">Last 90 days</div></div>
            <div className="pp-stat"><div><div className="pp-label">Avg. shortlist delivery</div><div className="pp-desc">From brief received to inbox</div></div><div className="pp-val vg" id="c1">—</div></div>
            <div className="pp-stat"><div><div className="pp-label">Interview acceptance rate</div><div className="pp-desc">Client-side, all roles</div></div><div className="pp-val vg" id="c2">—</div></div>
            <div className="pp-stat"><div><div className="pp-label">Total placements</div><div className="pp-desc">Contract + permanent</div></div><div className="pp-val vw" id="c3">—</div></div>
            <div className="pp-stat"><div><div className="pp-label">Client retention rate</div><div className="pp-desc">Year-over-year</div></div><div className="pp-val vw" id="c4">—</div></div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="proc-sec">
        <div className="proc-inner">
          <div className="eyebrow ew-light gs">The process</div>
          <h2 className="section-h2 gs" style={{ color: "var(--text)", marginBottom: 18 }}>From brief to shortlist<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>48 hours.</em></h2>
          <p className="proc-sub gs">A simple four-step process — end to end, no surprises.</p>
          <div className="proc-grid">
            {[
              { n: "Step 01", t: "Understand the brief", d: "A 45-minute call with the hiring manager and the named partner. We document must-haves, comp band, right-to-work, and team chemistry — before anything else moves.", icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2a8 8 0 100 16A8 8 0 0010 2z" stroke="#3DFF87" strokeWidth="1.2" /><path d="M7 10h6M10 7v6" stroke="#3DFF87" strokeWidth="1.2" strokeLinecap="round" /></svg>) },
              { n: "Step 02", t: "Source and screen", d: "We open the search across referrals, direct headhunting and our active talent pool. Every candidate is screened against the spec, comp band and notice period.", icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="8" cy="8" r="5" stroke="#3DFF87" strokeWidth="1.2" /><path d="M14 14l3 3" stroke="#3DFF87" strokeWidth="1.2" strokeLinecap="round" /></svg>) },
              { n: "Step 03", t: "Submit shortlist", d: "Inside 48 hours, you see 3–5 candidates with full scorecards, recorded screenings, and a recommendation from the partner who took the brief.", icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="4" width="14" height="12" rx="2" stroke="#3DFF87" strokeWidth="1.2" /><path d="M7 9h6M7 12h4" stroke="#3DFF87" strokeWidth="1.2" strokeLinecap="round" /></svg>) },
              { n: "Step 04", t: "Place and support", d: "Offer negotiation, reference checks, onboarding handover. We stay on the line through day 90 and replace, free, if it isn&apos;t the right fit.", icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10l4 4 6-6" stroke="#3DFF87" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>) },
            ].map((s) => (
              <div className="proc-step gs" key={s.n}>
                <div className="proc-num">{s.n}</div>
                <div className="proc-ico">{s.icon}</div>
                <div className="proc-title">{s.t}</div>
                <div className="proc-desc" dangerouslySetInnerHTML={{ __html: s.d }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section className="sec-outer">
        <div className="sec-grid">
          <div>
            <div className="eyebrow ew-light gs">Our commitment</div>
            <h2 className="sec-h2 gs">Built for enterprises that<br />can&apos;t afford <em>the wrong hire.</em></h2>
            <p className="sec-p gs">When you&apos;re hiring for a bank or a Fortune 500, a bad placement isn&apos;t just inconvenient — it&apos;s costly. Every engagement with Rivago is structured, documented and held to the same standard, every time.</p>
            <div className="sec-badges gs">
              <div className="sec-bdg"><div className="sec-dot"></div>NDA as Standard</div>
              <div className="sec-bdg"><div className="sec-dot"></div>Fully Documented</div>
              <div className="sec-bdg"><div className="sec-dot"></div>Senior Partners Only</div>
              <div className="sec-bdg"><div className="sec-dot"></div>Confidential Search</div>
            </div>
          </div>
          <div className="sec-items">
            <div className="sec-item gs"><div className="sec-ico"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="3" y="7" width="12" height="9" rx="2" stroke="#3DFF87" strokeWidth="1.2" /><path d="M6 7V5a3 3 0 016 0v2" stroke="#3DFF87" strokeWidth="1.2" strokeLinecap="round" /></svg></div><div><div className="sec-title">One named partner. Full accountability.</div><div className="sec-desc">A senior partner owns your search from brief to placement — no junior handoffs, no account managers in between. They took the brief, they screen the candidates, they stand behind the recommendation.</div></div></div>
            <div className="sec-item gs"><div className="sec-ico"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2l5.5 2.5v5c0 3.2-2.3 5.5-5.5 6.5C3.8 15 1.5 12.7 1.5 9.5v-5L9 2z" stroke="#3DFF87" strokeWidth="1.2" fill="none" /><path d="M6.5 9l2 2 4-4" stroke="#3DFF87" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div><div className="sec-title">Process that holds up to scrutiny.</div><div className="sec-desc">Every search is fully documented — candidate assessments, screening notes, decision rationale. If your internal team or compliance function ever needs to audit a hiring decision, everything is on record.</div></div></div>
            <div className="sec-item gs"><div className="sec-ico"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="#3DFF87" strokeWidth="1.2" /><path d="M9 6v3l2 2" stroke="#3DFF87" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg></div><div><div className="sec-title">Discretion as standard.</div><div className="sec-desc">We work with organisations where confidentiality isn&apos;t optional. Senior hires, sensitive replacements, confidential searches — handled under NDA, shared only with the people who need to know.</div></div></div>
          </div>
        </div>
      </section>

      {/* WHY RIVAGO */}
      <section className="why-sec">
        <div className="why-inner">
          <div className="eyebrow ew-light gs" style={{ marginBottom: 18 }}>Why Rivago</div>
          <h2 className="section-h2 gs" style={{ color: "var(--text)", maxWidth: 560, marginBottom: 20 }}>Six reasons clients<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>stay with us.</em></h2>
          <div className="why-grid">
            {[
              { n: "01", t: "Quality over quantity — always", d: "We submit fewer, better candidates. Every profile is fully screened before it reaches your inbox. No keyword-matching. No noise. Just people who are genuinely ready.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2a9 9 0 100 18A9 9 0 0011 2z" stroke="#3DFF87" strokeWidth="1.3" /><path d="M7 11l3 3 5-5" stroke="#3DFF87" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>) },
              { n: "02", t: "48-hour shortlist — every time", d: "Your shortlist arrives within 48 hours of the brief — every time, without exception. Speed and quality, not one or the other.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="9" stroke="#3DFF87" strokeWidth="1.3" /><path d="M11 7v4l3 3" stroke="#3DFF87" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>) },
              { n: "03", t: "Specialist domain knowledge", d: "Every brief goes to a specialist who recruits in your sector. They know the roles, the market rates and what a strong candidate actually looks like in your industry.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 11a7 7 0 1014 0A7 7 0 004 11z" stroke="#3DFF87" strokeWidth="1.3" /><path d="M11 8v3l2 2" stroke="#3DFF87" strokeWidth="1.3" strokeLinecap="round" /><circle cx="18" cy="4" r="3" fill="#3DFF87" opacity=".3" /></svg>) },
              { n: "04", t: "One dedicated account manager", d: "Every client gets a single point of contact — someone who learns your business, your culture and your hiring bar. No handoffs, no call centres, no starting over every engagement.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="3" width="16" height="16" rx="4" stroke="#3DFF87" strokeWidth="1.3" /><path d="M8 11l2.5 2.5L14 8" stroke="#3DFF87" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>) },
              { n: "05", t: "Global delivery. US standards.", d: "Rivago is a global staffing and recruitment company with active hiring operations across the United States, Canada, the UAE and India. One firm, four markets, the same standard everywhere.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 3l2.5 5 5.5.8-4 3.9.9 5.5L11 15.5l-4.9 2.7.9-5.5L3 8.8l5.5-.8z" stroke="#3DFF87" strokeWidth="1.3" strokeLinejoin="round" /></svg>) },
              { n: "06", t: "Replacement guarantee included", d: "90-day replacement guarantee, no questions asked. If the hire doesn&apos;t work out, we start again at no cost.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2v4M11 16v4M4.22 4.22l2.83 2.83M14.95 14.95l2.83 2.83M2 11h4M16 11h4M4.22 17.78l2.83-2.83M14.95 7.05l2.83-2.83" stroke="#3DFF87" strokeWidth="1.3" strokeLinecap="round" /></svg>) },
            ].map((c) => (
              <div className="why-card gs" key={c.n}>
                <div className="why-icon">{c.icon}</div>
                <div className="why-num">{c.n}</div>
                <div className="why-title">{c.t}</div>
                <div className="why-desc" dangerouslySetInnerHTML={{ __html: c.d }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="svc-sec">
        <div className="svc-inner">
          <div className="svc-head">
            <div>
              <div className="eyebrow ew-light gs" style={{ marginBottom: 18 }}>Services</div>
              <h2 className="section-h2 gs" style={{ color: "var(--text)", marginBottom: 14 }}>Eight ways to put the <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>right people in seat.</em></h2>
              <p className="svc-sub gs">Permanent, contract, temporary or embedded — one senior partner owns the search end to end, whichever way you engage us.</p>
            </div>
            <Link className="svc-all gs" href={routes.services}>View all services <Arrow /></Link>
          </div>
          <div className="svc-grid gs">
            {servicesList.map((s) => (
              <Link className="svc-card" href={s.href} key={s.n}>
                {"tag" in s && s.tag && <span className="svc-tag">{s.tag}</span>}
                <div className="svc-n">{s.n}</div>
                <div className="svc-title">{s.title}</div>
                <div className="svc-desc">{s.desc}</div>
                <div className="svc-foot"><span className="svc-meta">{s.meta}</span><CardArrow /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="ind-sec">
        <div className="ind-inner">
          <div className="ind-head" style={{ marginBottom: 52 }}>
            <div>
              <div className="eyebrow ew-light gs" style={{ marginBottom: 18 }}>Industries</div>
              <h2 className="section-h2 gs" style={{ color: "var(--text)", marginBottom: 14 }}>Every sector. <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>Every function.</em></h2>
              <p className="ind-sub gs">We recruit across every major industry — with specialist teams who understand the roles, the regulations and what a strong hire looks like in each sector.</p>
            </div>
            <Link className="ind-all gs" href={routes.industries}>View all industries <Arrow /></Link>
          </div>
          <div className="ind-grid gs">
            {industriesList.map((ind) => (
              <div className="ind-card" key={ind.title}>
                <div className="ind-icon">{ind.icon}</div>
                <div className="ind-title">{ind.title}</div>
                <div className="ind-desc">{ind.desc}</div>
                <div className="ind-tags">{ind.tags.map((t) => <span className="ind-tag" key={t}>{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="supp-sec">
        <div className="supp-inner">
          <div style={{ textAlign: "center" }}>
            <div className="eyebrow ew-light gs" style={{ margin: "0 auto 16px" }}>Support</div>
            <h2 className="section-h2 gs" style={{ color: "var(--text)", marginBottom: 12 }}>We&apos;re with you<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>every step of the way.</em></h2>
            <p className="orb-desc gs" style={{ marginBottom: 0 }}>Whether you&apos;re hiring for the first time or managing a 50-role pipeline — our team is always available to help.</p>
          </div>
          <div className="supp-grid">
            <div className="supp-card gs">
              <div className="supp-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17 3H3a1 1 0 00-1 1v10a1 1 0 001 1h3v2.5l3-2.5h8a1 1 0 001-1V4a1 1 0 00-1-1z" stroke="#3DFF87" strokeWidth="1.2" /><path d="M6 8h8M6 11h5" stroke="#3DFF87" strokeWidth="1.2" strokeLinecap="round" /></svg></div>
              <div><div className="supp-tag">Live chat</div><div className="supp-title" style={{ marginTop: 10 }}>Talk to a recruiter now</div></div>
              <div className="supp-desc">Connect instantly with one of our specialist recruiters. Whether you have a brief to share or just want to explore options — we&apos;re online and ready.</div>
              <div>
                <div className="supp-hours"><div className="supp-dot-live"></div>Mon–Fri · US, Canada &amp; India business hours</div>
                <Link className="supp-link" href={routes.contactUs}>Start a conversation <SmallArrow /></Link>
              </div>
            </div>
            <div className="supp-card featured gs">
              <div className="supp-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="3" width="16" height="14" rx="2" stroke="#3DFF87" strokeWidth="1.2" /><path d="M2 7h16" stroke="#3DFF87" strokeWidth="1.2" /><path d="M6 11h8M6 14h5" stroke="#3DFF87" strokeWidth="1.2" strokeLinecap="round" /></svg></div>
              <div><div className="supp-tag">Recommended</div><div className="supp-title" style={{ marginTop: 10 }}>Book a strategy call</div></div>
              <div className="supp-desc">Schedule a 30-minute call with your dedicated account manager. We&apos;ll review your open roles, build a hiring plan and set a realistic timeline — completely free, no commitment required.</div>
              <div>
                <div className="supp-hours"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="#3DFF87" strokeWidth="1.1" /><path d="M6 3.5v2.5l1.5 1.5" stroke="#3DFF87" strokeWidth="1.1" strokeLinecap="round" /></svg>30 minutes · Free · No obligation</div>
                <button className="supp-link" data-hire>Book your call <SmallArrow /></button>
              </div>
            </div>
            <div className="supp-card gs">
              <div className="supp-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#3DFF87" strokeWidth="1.2" /><path d="M10 6a2 2 0 011.73 3c-.34.58-1.73 1-1.73 2M10 14v.5" stroke="#3DFF87" strokeWidth="1.2" strokeLinecap="round" /></svg></div>
              <div><div className="supp-tag">Self-serve</div><div className="supp-title" style={{ marginTop: 10 }}>Help centre &amp; resources</div></div>
              <div className="supp-desc">Explore our hiring guides, salary benchmarks and market reports. Everything you need to make smarter hiring decisions — available anytime, no sign-up needed.</div>
              <div>
                <div className="supp-hours"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="#3DFF87" strokeWidth="1.1" /><path d="M4 6h4M6 4v4" stroke="#3DFF87" strokeWidth="1.1" strokeLinecap="round" /></svg>Free to access · No sign-up needed</div>
                <Link className="supp-link" href={routes.resources}>Browse resources <SmallArrow /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="cs-sec">
        <div className="cs-inner">
          <div className="eyebrow ew-dark gs" style={{ marginBottom: 18 }}>Client Results</div>
          <h2 className="section-h2 gs" style={{ color: "var(--dt)", maxWidth: 560 }}>Real results for <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>real teams.</em></h2>
          <div className="cs-grid">
            <div className="cs-card cs-wide gs">
              <div className="cs-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=400&fit=crop&auto=format" alt="team" loading="lazy" decoding="async" />
              </div>
              <div className="cs-card-content">
                <span className="cs-tag">Technology · US</span>
                <div className="cs-title">Scaling a fintech company across five functions — 28 hires in 90 days</div>
                <div className="cs-meta"><span>US Fintech Company</span><span>·</span><span>Q1 2025</span></div>
                <div className="cs-result"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 10V2M3 5l3-3 3 3" stroke="#3DFF87" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>28 placements · 100% retention at 6 months · avg 38h delivery</div>
              </div>
            </div>
            <div className="cs-card gs">
              <div className="cs-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=300&fit=crop&auto=format" alt="office" loading="lazy" decoding="async" />
              </div>
              <div className="cs-card-content">
                <span className="cs-tag">Finance · Canada</span>
                <div className="cs-title">Building a risk &amp; compliance team for a Ontario bank in 60 days</div>
                <div className="cs-meta"><span>Canadian Financial Group</span><span>·</span><span>Q4 2024</span></div>
                <div className="cs-result"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 10V2M3 5l3-3 3 3" stroke="#3DFF87" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>12 placements · $0 replacement cost</div>
              </div>
            </div>
            <div className="cs-card gs">
              <div className="cs-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop&auto=format" alt="healthcare" loading="lazy" decoding="async" />
              </div>
              <div className="cs-card-content">
                <span className="cs-tag">Healthcare · UAE</span>
                <div className="cs-title">Staffing a UAE hospital expansion across 5 specialist roles</div>
                <div className="cs-meta"><span>Dubai Healthcare Group</span><span>·</span><span>Q3 2024</span></div>
                <div className="cs-result"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 10V2M3 5l3-3 3 3" stroke="#3DFF87" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>5 placements · All placed within 30 days · Zero compliance issues</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testi-sec">
        <div className="testi-head">
          <div>
            <div className="eyebrow ew-light gs" style={{ marginBottom: 14 }}>What our clients say</div>
            <h2 className="testi-h2 gs">Trusted by companies who care<br />about <em>hiring right.</em></h2>
          </div>
          <Link style={{ fontSize: 13, color: "var(--text2)", display: "flex", alignItems: "center", gap: 5, flexShrink: 0 }} href={`${routes.resources}?view=cs`}>Read all stories <SmallArrow /></Link>
        </div>
        <Testimonials items={testimonials} />
      </section>

      {/* FAQ */}
      <section className="faq-sec">
        <div className="faq-inner">
          <div style={{ textAlign: "center" }}>
            <div className="eyebrow ew-light gs" style={{ margin: "0 auto 16px" }}>FAQ</div>
            <h2 className="section-h2 gs" style={{ color: "var(--text)", marginBottom: 0 }}>Questions we <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>hear most often.</em></h2>
          </div>
          <Faq items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-sec">
        <div className="cta-orb gs"><div className="cta-halo"></div><OrbCanvas size={200} /></div>
        <h2 className="cta-h2 gs">Your next great hire<br />starts <em>right here.</em></h2>
        <p className="cta-sub gs">Tell us who you need across any function. Shortlist in your inbox within 48 hours.</p>
        <div className="cta-btns gs">
          <button className="btn-hp" data-help style={{ fontSize: 16, padding: "15px 32px" }}>Talk to an expert <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#030C05" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
          <Link className="btn-hg" href={routes.viewJobs} style={{ fontSize: 16, padding: "15px 32px" }}>Browse all jobs</Link>
        </div>
      </section>
    </>
  );
}
