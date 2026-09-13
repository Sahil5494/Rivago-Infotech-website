import Link from "next/link";
import LogoMarquee from "@/components/LogoMarquee";
import OrbCanvas from "@/components/OrbCanvas";
import HeroVisual from "@/components/HeroVisual";
import ApproachTabs from "@/components/ApproachTabs";
import ServiceCarousel from "@/components/ServiceCarousel";
import IndustryRail from "@/components/IndustryRail";
import Faq from "@/components/Faq";
import InsightsGrid from "@/components/InsightsGrid";
/* servicesList and industriesList both dropped from this import: the services
   carousel and the industry rail each read the data themselves. lib/routes.ts
   still exports both — /about counts them and the nav mega-menu reads them.
   CardSlider went with them; nothing on this page uses it now. */
import { routes, offices, servedMarkets } from "@/lib/routes";
/* Counted, not typed, so the support card cannot promise a library bigger
   than the one /resources actually renders. Build-time only — this is a
   server component, so the article bodies never reach the browser.

   It used to count case studies too. There are none; see the note at the
   foot of app/resources/data.ts. */
import { articles } from "@/app/resources/data";

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

/* Counts in prose read as words, not digits — "Three offices" rather than
   "3 offices" — but they still have to come from the data so they cannot
   drift away from the footer and the contact page. */
const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
const spell = (n: number) => WORDS[n] ?? String(n);
/* spell() returns lowercase, which is right mid-sentence; a count opening a
   card title needs the capital. */
const Spell = (n: number) => spell(n).replace(/^./, (c) => c.toUpperCase());

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
      {/* The 01-06 numerals are gone. They were var(--fz12) at weight 700 —
          larger and heavier than the card titles beneath them — so the first
          thing the eye read on every card was a number that encoded nothing.
          These six are not a sequence and have no order; numbering them also
          rhymed with the approach tabs' 01-05 directly above, which IS one.
          The icon already marks each card. The heading still says "six".

          Descriptions render as text now. They were going through
          dangerouslySetInnerHTML for one reason: card six had an &apos;
          entity baked into a JS string. An apostrophe is an apostrophe. */}
      <section className="why-sec">
        <div className="why-inner">
          <div className="eyebrow ew-light gs" style={{ marginBottom: 18 }}>Why Rivago</div>
          {/* Was "Six reasons clients stay with us" — a claim about client
              retention, which is the one thing here nobody has measured. */}
          <h2 className="section-h2 gs" style={{ color: "var(--text)", maxWidth: 600, marginBottom: 20 }}>Six things that are true<br /><em>of every search we run.</em></h2>
          <div className="why-grid">
            {[
              /* Was "Quality over quantity — always", which restated both the
                 section headline above it ("A shortlist that fits, instead of
                 fifty that don't") and the Screen tab word for word, down to
                 "no keyword-matching". Replaced with the one idea worth
                 rescuing from the deleted SECURITY section. */
              { t: "Searches you can't advertise", d: "A senior hire, a replacement the incumbent doesn't know about yet, a role that can't be posted. Handled under NDA, with the brief shown only to candidates who need to see it to decide.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="4" y="9" width="14" height="10" rx="2.5" stroke="var(--accent)" strokeWidth="1.3" /><path d="M7.5 9V6.5a3.5 3.5 0 017 0V9" stroke="var(--accent)" strokeWidth="1.3" strokeLinecap="round" /></svg>) },
              /* Reworded off the FAQ answer 1,400px below, which said "you
                 hear from us early if it is going to move" almost to the
                 word. Same commitment, stated from the other end. */
              { t: "A date agreed before sourcing starts", d: "The delivery date is set on the intake call and written into the brief — not offered after the first week has already slipped.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="9" stroke="var(--accent)" strokeWidth="1.3" /><path d="M11 7v4l3 3" stroke="var(--accent)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>) },
              /* "Specialist domain knowledge" was the one abstract-noun title
                 among six concrete ones, and it named a quality rather than a
                 thing that happens to your brief. */
              { t: "A partner who already works your sector", d: "Your brief goes to whoever recruits in that market, not to whoever is free this week. They know the titles, the going rate and what a strong candidate looks like in your industry.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 11a7 7 0 1014 0A7 7 0 004 11z" stroke="var(--accent)" strokeWidth="1.3" /><path d="M11 8v3l2 2" stroke="var(--accent)" strokeWidth="1.3" strokeLinecap="round" /><circle cx="18" cy="4" r="3" fill="var(--accent)" opacity=".3" /></svg>) },
              /* Was "The second brief takes half the time". Half is a measured
                 figure and nobody measured it. The body already made the point
                 without putting a number on it. */
              { t: "You brief us once, not every time", d: "Your point of contact doesn't change between searches. They already know your hiring bar, your interview loop, and who you turned down last time and why.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="3" width="16" height="16" rx="4" stroke="var(--accent)" strokeWidth="1.3" /><path d="M8 11l2.5 2.5L14 8" stroke="var(--accent)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>) },
              /* Was "Global delivery. US standards." — an empty phrase over a
                 sentence lifted verbatim from FAQ answer five on this same
                 page. The cities and markets are read from lib/routes.ts so
                 they cannot drift from the footer and the contact page. */
              { t: `${Spell(offices.length)} offices, ${spell(servedMarkets.length)} markets, one firm`, d: `${offices.map((o) => o.city).join(", ")} — hiring into ${servedMarkets.slice(0, -1).join(", ")} and ${servedMarkets[servedMarkets.length - 1]}. One point of contact across every one of them, rather than a different agency in each market.`, icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8.5" stroke="var(--accent)" strokeWidth="1.3" /><path d="M2.5 11h17M11 2.5c2.2 2.3 3.4 5.3 3.4 8.5s-1.2 6.2-3.4 8.5c-2.2-2.3-3.4-5.3-3.4-8.5S8.8 4.8 11 2.5z" stroke="var(--accent)" strokeWidth="1.3" strokeLinejoin="round" /></svg>) },
              /* Was "90-day replacement guarantee, no questions asked", which
                 contradicted two other places on this site: /industries states
                 what the guarantee does and does not cover, and the FAQ four
                 sections below says terms are agreed upfront. It also left out
                 the twelve-month retained window, which is the stronger and
                 equally true half. */
              { t: "A guarantee with its terms on show", d: "90 days on contingent direct hires, up to twelve months on retained search. Resignation and performance are covered; redundancy and a cancelled role are not — and that sits in the agreement rather than the small print.", icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2.6l7 2.6v5.4c0 4-2.9 7.5-7 8.8-4.1-1.3-7-4.8-7-8.8V5.2z" stroke="var(--accent)" strokeWidth="1.3" strokeLinejoin="round" /><path d="M8 11l2.2 2.2L14.5 9" stroke="var(--accent)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>) },
            ].map((c) => (
              <div className="why-card gs" key={c.t}>
                <div className="why-icon">{c.icon}</div>
                <div className="why-title">{c.t}</div>
                <div className="why-desc">{c.d}</div>
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
      {/* The first card used to be "Live chat — talk to a recruiter now",
          with "connect instantly" and "we're online and ready", and its
          button went to the contact form. There is no chat widget on this
          site and no plan for one, so the card promised a channel that does
          not exist and then handed the visitor a form. It is the phone now:
          (888) 508-5703 is real, it is already published on /contact-us, and
          it is the only channel here that genuinely answers in the moment.

          The three cards are now three different things — talk now, book
          time, read first — rather than two routes to the same enquiry form.
          Card two no longer says "your dedicated account manager": a first
          time visitor does not have one. */}
      <section className="supp-sec">
        <div className="supp-inner">
          <div style={{ textAlign: "center" }}>
            <div className="eyebrow ew-light gs" style={{ margin: "0 auto 16px" }}>Talk to us</div>
            <h2 className="section-h2 gs" style={{ color: "var(--text)", marginBottom: 12 }}>Three ways in.<br /><em>All of them reach a partner.</em></h2>
            <p className="orb-desc gs" style={{ marginBottom: 0 }}>A first hire or a fiftieth, a live brief or a question you want a straight answer to. Pick whichever suits the morning you are having.</p>
          </div>
          <div className="supp-grid">
            <div className="supp-card gs">
              <div className="supp-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.2 3.4 8.6 6.6a1 1 0 0 1-.24 1.15l-1.2 1.1a10.5 10.5 0 0 0 4 4l1.1-1.2a1 1 0 0 1 1.15-.24l3.2 1.4a1 1 0 0 1 .58 1.05l-.35 2.2a1.2 1.2 0 0 1-1.32 1A13.6 13.6 0 0 1 3.1 4.5a1.2 1.2 0 0 1 1-1.32l2.2-.35a1 1 0 0 1 1.05.58Z" stroke="var(--accent)" strokeWidth="1.2" strokeLinejoin="round" /></svg></div>
              <div><div className="supp-tag">Call</div><div className="supp-title" style={{ marginTop: 10 }}>Speak to a partner today</div></div>
              <div className="supp-desc">One number, answered by the people who run the searches. Bring a role you are struggling to fill, or a market you want read honestly. No form first, no qualifying script.</div>
              <div>
                <div className="supp-hours"><div className="supp-dot-live"></div>Mon–Fri · US, Canada &amp; India business hours</div>
                <a className="supp-link" href="tel:+18885085703">(888) 508-5703 <SmallArrow /></a>
              </div>
            </div>
            <div className="supp-card featured gs">
              <div className="supp-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2.5" y="4" width="15" height="13" rx="2.5" stroke="var(--accent)" strokeWidth="1.2" /><path d="M2.5 8h15M6.5 2.5v3M13.5 2.5v3" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round" /><path d="m7.4 12.4 1.7 1.7 3.5-3.5" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
              <div><div className="supp-tag">Recommended</div><div className="supp-title" style={{ marginTop: 10 }}>Book a scoping call</div></div>
              <div className="supp-desc">Thirty minutes with the partner who would take the brief. We go through the open roles, what the market will bear on each, and where the timeline realistically lands. You leave with a plan whether or not you engage us.</div>
              <div>
                <div className="supp-hours"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="var(--accent)" strokeWidth="1.1" /><path d="M6 3.5v2.5l1.5 1.5" stroke="var(--accent)" strokeWidth="1.1" strokeLinecap="round" /></svg>30 minutes · No charge · No obligation</div>
                <button className="supp-link" data-hire>Book your call <SmallArrow /></button>
              </div>
            </div>
            <div className="supp-card gs">
              <div className="supp-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 5.6C8.8 4.5 7.2 4 5 4H2.8v11H5c2.2 0 3.8.5 5 1.6 1.2-1.1 2.8-1.6 5-1.6h2.2V4H15c-2.2 0-3.8.5-5 1.6Z" stroke="var(--accent)" strokeWidth="1.2" strokeLinejoin="round" /><path d="M10 5.6v11" stroke="var(--accent)" strokeWidth="1.2" /></svg></div>
              <div><div className="supp-tag">Read first</div><div className="supp-title" style={{ marginTop: 10 }}>Do your own homework</div></div>
              <div className="supp-desc">Salary benchmarks, market reads and hiring playbooks, plus the case studies behind them. Nothing is gated — no email address, no download form, no follow-up call you did not ask for.</div>
              <div>
                <div className="supp-hours"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="var(--accent)" strokeWidth="1.1" /><path d="M4 6h4M6 4v4" stroke="var(--accent)" strokeWidth="1.1" strokeLinecap="round" /></svg>{articles.length} articles · Free to read · No sign-up</div>
                <Link className="supp-link" href={routes.resources}>Browse resources <SmallArrow /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES removed.

          Three cards under the heading "Real results for real teams", and no
          real team behind any of them. "28 hires in 90 days", "100% retention
          at 6 months", "avg 38h delivery", "12 placements · $0 replacement
          cost", and a Dubai hospital card claiming "Zero compliance issues" —
          the same claim already removed from this page once and from
          /industries a second time. The clients ("US Fintech Company",
          "Canadian Financial Group", "Dubai Healthcare Group") were invented
          along with the numbers.

          The three photographs were also hotlinked from images.unsplash.com,
          so the section's only images were a live dependency on a third-party
          host with no licence record — unlike the service carousel, whose
          eight frames are licensed and logged in
          public/assets/services/LICENCES.md.

          The page does not lose its proof. The client logo strip near the top
          is ten real clients with their marks approved, and the testimonials
          immediately below are anonymised to a role and a market with no
          figures attached, which is the normal and defensible form.

          This slot is the right home for the first real case study. It needs
          one client's written sign-off on a sector, a rough timeframe and
          what the engagement covered; placements and timings are only
          publishable if they were actually recorded. */}

      {/* INSIGHTS */}
      {/* This slot has now held three things. It was three invented client
          results; then a proof wall of client marks and quotes; now the
          written work, which is the only long-form content Rivago actually
          has. The client's call, and the reason is sound: the case studies
          were never real, and the articles are.

          What the page gives up in exchange is worth stating. The quotes
          that were on the wall are no longer anywhere on this page, and the
          client marks now appear only in the strip near the top. This
          section builds authority; it does not carry client proof. The
          moment a client signs off on an engagement, proof belongs back on
          this page — beside this, not instead of it. */}
      <section className="hins-sec inv">
        <div className="hins-inner">
          <div className="hins-head">
            <div>
              <div className="eyebrow ew-light gs" style={{ marginBottom: 14 }}>Insights</div>
              <h2 className="hins-h2 gs">What we have learned,<br />written <em>down.</em></h2>
            </div>
            {/* The grid shows all {articles.length} of them, so this cannot say
                "all N articles" — it goes to the library, where they can be
                filtered by category. */}
            <Link className="hins-all gs" href={routes.resources}>Browse the library <Arrow /></Link>
          </div>
          <div className="gs">
            <InsightsGrid />
          </div>
        </div>
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
