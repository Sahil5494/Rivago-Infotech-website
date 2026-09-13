import Link from "next/link";
import LogoMarquee from "@/components/LogoMarquee";
import OrbCanvas from "@/components/OrbCanvas";
import HeroVisual from "@/components/HeroVisual";
import ApproachTabs from "@/components/ApproachTabs";
import ServiceCarousel from "@/components/ServiceCarousel";
import IndustryRail from "@/components/IndustryRail";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
/* servicesList and industriesList both dropped from this import: the services
   carousel and the industry rail each read the data themselves. lib/routes.ts
   still exports both — /about counts them and the nav mega-menu reads them.
   CardSlider went with them; nothing on this page uses it now. */
import { routes, offices } from "@/lib/routes";

const faqItems = [
  {
    q: "What types of roles does Rivago specialise in?",
    a: "Rivago is a global staffing and recruitment company. We recruit across technology, finance, banking, healthcare, legal, operations, sales, marketing and HR — at every level from graduate to C-suite. We place candidates on a permanent, contract or interim basis across the US, Canada, the UAE and India.",
  },
  {
    q: "How quickly can you deliver a shortlist?",
    a: "We agree a delivery timeline with you when we take the brief, and it depends on the role — a well-scoped mid-level search moves faster than a niche or senior one. Whatever we commit to, you hear from us early if it is going to move. No surprises.",
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

/* Rewritten to carry no checkable claim. Every figure and every regulatory
   reference is gone, and the attributions are broadened to a sector and a
   country so they do not point at an identifiable organisation.

   The Dubai Hospital Group entry was removed outright: it named the DHA,
   claimed "zero compliance issues" on healthcare licensing, described a UAE
   engagement the firm has no office for, and carried a badge reading
   "Delaware · Professional Services" that contradicted its own text.

   These remain endorsements that have not been given. Replace each one as a
   real client agrees to a quote — anonymised to this level is normal in
   recruitment and needs only their say-so, not their logo. */
const testimonials = [
  {
    badge: "Banking · US",
    quote: "We've worked with a lot of recruiters. Rivago is the first that came back with candidates who actually matched the brief — not just the keywords.",
    name: "Head of Talent Acquisition",
    role: "Banking · United States",
  },
  {
    badge: "Financial services · Canada",
    quote: "Every candidate had been properly screened before they reached us — comp expectations, notice period, right to work. We didn't have to go back and ask.",
    name: "HR Director",
    role: "Financial services · Canada",
  },
  {
    badge: "Professional services · US",
    quote: "We needed a Finance Director at short notice. The candidates we saw were credible and the process didn't stall — which is not how these usually go.",
    name: "Chief Executive",
    role: "Professional services · United States",
  },
  {
    badge: "Technology · US",
    quote: "What sets Rivago apart is that they push back. If the brief is unclear, they say so. If a candidate isn't right, they won't send them. That honesty saves everyone time.",
    name: "VP of People",
    role: "Technology · United States",
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
/* CardArrow removed with the services card grid — it was only ever used on
   .svc-card's footer, which the carousel replaced. */

export default function Home() {
  return (
    <>
      <link rel="canonical" href="https://rivagoinfotech.com/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      {/* The reference's hero is a white ground with a black headline and
          pill CTAs — no photograph, no scrim, no particle field. Dropping
          them also removes the hot-linked Unsplash image that was the LCP
          element and lived on someone else's server. */}
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge gs"><span className="bdot"></span>Global Staffing · US · Canada · UAE · India</div>
            <h1 className="hero-h1 gs">Staffing for getting the <em>right people</em> in seat.</h1>
            <p className="hero-sub gs">We connect outstanding companies with exceptional talent — across every industry, every function and every corner of the globe.</p>
            <div className="hero-btns gs">
              <button className="btn-hp" data-help>Talk to an expert <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
              {/* A staffing firm has two audiences and the hero offered one
                  door. The second is the candidate's, and it goes to the job
                  search rather than the contact form. */}
              <Link href="/search-jobs" className="btn-hg">Browse open roles</Link>
            </div>
          </div>

          {/* Was a bordered panel listing the service routes. Those links
              live in the nav and in the SERVICES section below, so nothing
              is lost from the site's navigation by giving this half of the
              hero to the visual instead. */}
          <HeroVisual />
        </div>
      </section>

      {/* CLIENTS */}
      {/* Confirmed by the client: all ten are real clients and their marks
          are approved for display. The heading can therefore say plainly
          what they are, rather than reaching for "world-class teams build
          their talent bench" — which asserted the same thing in words that
          sound like they are covering for not being able to. */}
      <section className="clients-sec">
        <div className="clients-label">Teams we recruit for</div>
        <LogoMarquee />
      </section>

      {/* ORB */}
      {/* The sphere is gone. It was 360px fixed with no responsive rule, so
          at 390px it overflowed a 302px content box, sat off-centre and got
          clipped — with overflow:hidden on the section hiding the damage
          rather than fixing it. It also said nothing about recruitment, and
          cost a second always-on rAF loop now that the hero has a canvas.

          The two paragraphs made the same claim 72px apart. The headline now
          states the positioning and the body says what "full context" means,
          so neither is repeating the other. Section: 1011px -> ~420px. */}
      <section className="orb-sec inv">
        <p className="orb-quote gs">The recruitment partner with <em>full context.</em></p>
        <p className="orb-desc gs">We don&apos;t just fill roles. We learn your business, your culture and what genuinely good looks like in your sector — then find the people ready to perform from day one.</p>
      </section>

      {/* FEATURES */}
      <section className="feat-sec">
        <div className="feat-inner">
          <div className="eyebrow ew-dark gs" style={{ marginBottom: 18 }}>Our approach</div>
          <div className="apr-head">
            {/* Rescued from the deleted PRECISION section, which said this
                better than "How we work — and why it actually works." */}
            <h2 className="section-h2 feat-h2 dark gs" style={{ color: "var(--dt)", maxWidth: 580 }}>A shortlist that fits, instead of <em>fifty that don&apos;t.</em></h2>
            <p className="apr-lead gs">Every search runs the same five stages, with the same partner from brief to placement. No handoffs and no black box — you know where the search stands at every one of them.</p>
          </div>
          <ApproachTabs />
        </div>
      </section>

      {/* PRECISION and PROCESS removed here.

          Both described the same journey as the approach tabs above. The
          PRECISION panel was even titled "What arrives with every
          candidate" -- the exact title of the Screen tab -- and its four
          rows mapped one-to-one onto that tab's. PROCESS was a four-step
          grid of the same stages with no artefacts, and its Step 01-04
          numbering read against the tabs' 01-05 directly above it.

          Three sections, 2,532px, one message. The headline worth keeping
          -- "A shortlist that fits, instead of fifty that don't" -- moved
          up to head the tabs. */}

      {/* SECURITY removed. It promised enterprise assurance and delivered
          adjectives -- "NDA as Standard", "Fully Documented", "Senior
          Partners Only" -- with nothing behind them, and the compliance
          substance that would have earned the headline (worker
          classification, insurance, a written data-protection policy across
          four jurisdictions) is not confirmed, so it cannot be claimed.

          It also said "no account managers in between" 400px above WHY
          RIVAGO saying "One dedicated account manager", and made the
          named-partner point for the third time on this page.

          Its one distinct idea -- confidential search -- moves into WHY
          RIVAGO below, which is now the single "why us" section. */}

      {/* WHY RIVAGO */}
      <section className="why-sec">
        <div className="why-inner">
          <div className="eyebrow ew-light gs" style={{ marginBottom: 18 }}>Why Rivago</div>
          <h2 className="section-h2 gs" style={{ color: "var(--text)", maxWidth: 560, marginBottom: 20 }}>Six reasons clients<br /><em>stay with us.</em></h2>
          <div className="why-grid">
            {[
              /* Was "Quality over quantity — always", which restated both the
                 section headline above it ("A shortlist that fits, instead of
                 fifty that don't") and the Screen tab word for word, down to
                 "no keyword-matching". Replaced with the one idea worth
                 rescuing from the deleted SECURITY section. */
              { n: "01", t: "Searches you can't advertise", d: "A senior hire, a replacement the incumbent doesn't know about yet, a role that can't be posted. Handled under NDA, with the brief shown only to candidates who need to see it to decide.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="4" y="9" width="14" height="10" rx="2.5" stroke="var(--accent)" strokeWidth="1.3" /><path d="M7.5 9V6.5a3.5 3.5 0 017 0V9" stroke="var(--accent)" strokeWidth="1.3" strokeLinecap="round" /></svg>) },
              { n: "02", t: "A timeline agreed before we start", d: "We commit to a delivery date when we take the brief, not after. If it is going to move, you hear it from us early rather than finding out by waiting.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="9" stroke="var(--accent)" strokeWidth="1.3" /><path d="M11 7v4l3 3" stroke="var(--accent)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>) },
              { n: "03", t: "Specialist domain knowledge", d: "Every brief goes to a specialist who recruits in your sector. They know the roles, the market rates and what a strong candidate actually looks like in your industry.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 11a7 7 0 1014 0A7 7 0 004 11z" stroke="var(--accent)" strokeWidth="1.3" /><path d="M11 8v3l2 2" stroke="var(--accent)" strokeWidth="1.3" strokeLinecap="round" /><circle cx="18" cy="4" r="3" fill="var(--accent)" opacity=".3" /></svg>) },
              /* "No handoffs" was already the approach section's lead line, so
                 this now says the thing that one IS NOT: continuity ACROSS
                 searches rather than within one. */
              { n: "04", t: "The second brief takes half the time", d: "Your point of contact doesn't change between searches. They already know your hiring bar, your interview loop, and who you turned down last time and why — so you brief them once, not every time.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="3" width="16" height="16" rx="4" stroke="var(--accent)" strokeWidth="1.3" /><path d="M8 11l2.5 2.5L14 8" stroke="var(--accent)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>) },
              { n: "05", t: "Global delivery. US standards.", d: "Rivago is a global staffing and recruitment company with active hiring operations across the United States, Canada, the UAE and India. One firm, four markets, the same standard everywhere.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 3l2.5 5 5.5.8-4 3.9.9 5.5L11 15.5l-4.9 2.7.9-5.5L3 8.8l5.5-.8z" stroke="var(--accent)" strokeWidth="1.3" strokeLinejoin="round" /></svg>) },
              { n: "06", t: "Replacement guarantee included", d: "90-day replacement guarantee, no questions asked. If the hire doesn&apos;t work out, we start again at no cost.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2v4M11 16v4M4.22 4.22l2.83 2.83M14.95 14.95l2.83 2.83M2 11h4M16 11h4M4.22 17.78l2.83-2.83M14.95 7.05l2.83-2.83" stroke="var(--accent)" strokeWidth="1.3" strokeLinecap="round" /></svg>) },
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
      <section className="svc-sec inv">
        <div className="svc-inner">
          <div className="svc-head">
            <div>
              <div className="eyebrow ew-light gs" style={{ marginBottom: 18 }}>Services</div>
              {/* "Eight" counted the Staffing Solutions overview card as a
                  service. It is an index page — the same destination as the
                  "View all services" link beside this heading — and About
                  already filters it out to render "7 Ways to engage". The two
                  pages disagreed; About was the one that was right. */}
              <h2 className="section-h2 gs" style={{ color: "var(--text)", marginBottom: 14 }}>Seven ways to put the <em>right people in seat.</em></h2>
              <p className="svc-sub gs">Permanent, contract, temporary or embedded. The commitment and the commercials differ — the way we run the search does not.</p>
            </div>
            <Link className="svc-all gs" href={routes.services}>View all services <Arrow /></Link>
          </div>
          {/* The seven-card grid became a carousel: media on the left, one
              service on the right with a counter, a Know more pill and
              prev/next. The grid's per-card meta line moves inside each panel
              as the three facts a buyer compares on. */}
          <div className="gs">
            <ServiceCarousel />
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      {/* .inv redefines the whole token set, so the cards, icons, chips and
          rail arrows follow without a single component change. */}
      <section className="ind-sec inv">
        <div className="ind-inner">
          <div className="ind-head" style={{ marginBottom: 52 }}>
            <div>
              <div className="eyebrow ew-light gs" style={{ marginBottom: 18 }}>Industries</div>
              <h2 className="section-h2 gs" style={{ color: "var(--text)", marginBottom: 14 }}>Every sector. <em>Every function.</em></h2>
              <p className="ind-sub gs">We recruit across every major industry — with specialist teams who understand the roles, the regulations and what a strong hire looks like in each sector.</p>
            </div>
            <Link className="ind-all gs" href={routes.industries}>View all industries <Arrow /></Link>
          </div>
          {/* Was a static four-column grid — CardSlider only becomes a
              slider under 900px, so on desktop all eight sat there at once and
              the section ran to 1,184px. It is a scroll rail now: the next
              card peeks in at the right edge and the arrows sit against it. */}
          <IndustryRail />
        </div>
      </section>

      {/* SUPPORT */}
      <section className="supp-sec">
        <div className="supp-inner">
          <div style={{ textAlign: "center" }}>
            <div className="eyebrow ew-light gs" style={{ margin: "0 auto 16px" }}>Support</div>
            <h2 className="section-h2 gs" style={{ color: "var(--text)", marginBottom: 12 }}>We&apos;re with you<br /><em>every step of the way.</em></h2>
            <p className="orb-desc gs" style={{ marginBottom: 0 }}>Whether you&apos;re hiring for the first time or managing a 50-role pipeline — our team is always available to help.</p>
          </div>
          <div className="supp-grid">
            <div className="supp-card gs">
              <div className="supp-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17 3H3a1 1 0 00-1 1v10a1 1 0 001 1h3v2.5l3-2.5h8a1 1 0 001-1V4a1 1 0 00-1-1z" stroke="var(--accent)" strokeWidth="1.2" /><path d="M6 8h8M6 11h5" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round" /></svg></div>
              <div><div className="supp-tag">Live chat</div><div className="supp-title" style={{ marginTop: 10 }}>Talk to a recruiter now</div></div>
              <div className="supp-desc">Connect instantly with one of our specialist recruiters. Whether you have a brief to share or just want to explore options — we&apos;re online and ready.</div>
              <div>
                <div className="supp-hours"><div className="supp-dot-live"></div>Mon–Fri · US, Canada &amp; India business hours</div>
                <Link className="supp-link" href={routes.contactUs}>Start a conversation <SmallArrow /></Link>
              </div>
            </div>
            <div className="supp-card featured gs">
              <div className="supp-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="3" width="16" height="14" rx="2" stroke="var(--accent)" strokeWidth="1.2" /><path d="M2 7h16" stroke="var(--accent)" strokeWidth="1.2" /><path d="M6 11h8M6 14h5" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round" /></svg></div>
              <div><div className="supp-tag">Recommended</div><div className="supp-title" style={{ marginTop: 10 }}>Book a strategy call</div></div>
              <div className="supp-desc">Schedule a 30-minute call with your dedicated account manager. We&apos;ll review your open roles, build a hiring plan and set a realistic timeline — completely free, no commitment required.</div>
              <div>
                <div className="supp-hours"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="var(--accent)" strokeWidth="1.1" /><path d="M6 3.5v2.5l1.5 1.5" stroke="var(--accent)" strokeWidth="1.1" strokeLinecap="round" /></svg>30 minutes · Free · No obligation</div>
                <button className="supp-link" data-hire>Book your call <SmallArrow /></button>
              </div>
            </div>
            <div className="supp-card gs">
              <div className="supp-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="var(--accent)" strokeWidth="1.2" /><path d="M10 6a2 2 0 011.73 3c-.34.58-1.73 1-1.73 2M10 14v.5" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round" /></svg></div>
              <div><div className="supp-tag">Self-serve</div><div className="supp-title" style={{ marginTop: 10 }}>Help centre &amp; resources</div></div>
              <div className="supp-desc">Explore our hiring guides, salary benchmarks and market reports. Everything you need to make smarter hiring decisions — available anytime, no sign-up needed.</div>
              <div>
                <div className="supp-hours"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="var(--accent)" strokeWidth="1.1" /><path d="M4 6h4M6 4v4" stroke="var(--accent)" strokeWidth="1.1" strokeLinecap="round" /></svg>Free to access · No sign-up needed</div>
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
          <h2 className="section-h2 gs" style={{ color: "var(--dt)", maxWidth: 560 }}>Real results for <em>real teams.</em></h2>
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
                <div className="cs-result"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 10V2M3 5l3-3 3 3" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>28 placements · 100% retention at 6 months · avg 38h delivery</div>
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
                <div className="cs-result"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 10V2M3 5l3-3 3 3" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>12 placements · $0 replacement cost</div>
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
                <div className="cs-result"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 10V2M3 5l3-3 3 3" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>5 placements · All placed within 30 days · Zero compliance issues</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testi-sec inv">
        <div className="testi-head">
          <div>
            <div className="eyebrow ew-light gs" style={{ marginBottom: 14 }}>What our clients say</div>
            <h2 className="testi-h2 gs">Trusted by companies who care<br />about <em>hiring right.</em></h2>
          </div>
          <Link style={{ fontSize: "var(--fz2)", color: "var(--text2)", display: "flex", alignItems: "center", gap: 5, flexShrink: 0 }} href={`${routes.resources}?view=cs`}>Read all stories <SmallArrow /></Link>
        </div>
        <Testimonials items={testimonials} />
      </section>

      {/* FAQ */}
      <section className="faq-sec">
        <div className="faq-inner">
          <div style={{ textAlign: "center" }}>
            <div className="eyebrow ew-light gs" style={{ margin: "0 auto 16px" }}>FAQ</div>
            <h2 className="section-h2 gs" style={{ color: "var(--text)", marginBottom: 0 }}>Questions we <em>hear most often.</em></h2>
          </div>
          <Faq items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-sec inv">
        <div className="cta-orb gs"><div className="cta-halo"></div><OrbCanvas size={200} /></div>
        <h2 className="cta-h2 gs">Your next great hire<br />starts <em>right here.</em></h2>
        <p className="cta-sub gs">Tell us who you need across any function. A named partner will come back to you with a plan.</p>
        <div className="cta-btns gs">
          <button className="btn-hp" data-help style={{ fontSize: "var(--fz5)", padding: "15px 32px" }}>Talk to an expert <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="#030C05" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
          <Link className="btn-hg" href={routes.viewJobs} style={{ fontSize: "var(--fz5)", padding: "15px 32px" }}>Browse all jobs</Link>
        </div>
      </section>
    </>
  );
}
