import Link from "next/link";
import Image from "next/image";
import LogoMarquee from "@/components/LogoMarquee";
import OrbCanvas from "@/components/OrbCanvas";
import HeroVisual from "@/components/HeroVisual";
import ApproachTabs from "@/components/ApproachTabs";
import ServiceCarousel from "@/components/ServiceCarousel";
import IndustryRail from "@/components/IndustryRail";
import Faq from "@/components/Faq";
import WhyCards from "@/components/WhyCards";
import InsightsGrid from "@/components/InsightsGrid";
import ProblemList from "@/components/ProblemList";
import ReframeRail from "@/components/ReframeRail";
/* servicesList and industriesList are both read by their own components now
   — the services carousel and the industry rail — and the WHAT WE DO modes
   no longer name individual services, so nothing on this page needs the
   list. lib/routes.ts still exports it: /about counts it and the nav
   mega-menu reads it. */
import { routes, offices } from "@/lib/routes";
/* Counted, not typed, so the support card cannot promise a library bigger
   than the one /resources actually renders. Build-time only — this is a
   server component, so the article bodies never reach the browser.

   It used to count case studies too. There are none; see the note at the
   foot of app/resources/data.ts. */
import { articles } from "@/app/resources/data";
import { testimonials } from "@/lib/testimonials";

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

/* The three modes group the seven services by what the client is actually
   buying: a hire, capacity, or the function itself. Titles are looked up in
   servicesList rather than retyped, so renaming a service renames it here
   too. The Staffing Solutions overview is not a mode — it is the index page
   these all sit on. */
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

      {/* THE PROBLEM */}
      {/* Four failure modes, then the band turns: one dark panel naming the
          reason underneath all four and what Rivago does instead. One answer
          rather than four paired fixes — four fixes here would restate Why
          Rivago's six cards in miniature, 2,000px above them.

          The first draft of this copy read as generated, and the tells were
          measurable: four of four bodies were built on an antithesis, four of
          four closed on an aphorism, every body ran 25-30 words, and the
          section contained no concrete noun anywhere. Rewritten with the
          rhythm broken on purpose — bodies now run 22 / 28 / 42 / 50 words,
          one closer survives instead of four, and every row names something
          real: a scorecard, a VP Engineering brief, week three, notice
          period, right to work.

          Nothing here is a measured claim. These are failure modes common to
          the industry, not statistics about Rivago's clients. */}
      <section className="prob-sec inv">
        <div className="prob-inner">
          {/* The heading block sits full width above both columns, on the
              left, because that is where the eyebrow and headline sit in
              every other section on this page. It was inside the right-hand
              column — faithful to the reference, inconsistent with the site.

              It also fixes the stacking order on a phone: heading, then
              image, then list, which is why the image no longer has to be
              hidden below 900px. */}
          <div className="prob-head">
            <div className="eyebrow ew-light gs" style={{ marginBottom: 18 }}>The problem</div>
            <h2 className="section-h2 prob-h2 gs">Enterprises have a <em>hiring problem.</em></h2>
            {/* Was "None of it is about the candidates", which stopped being
                true once the second row became skills scarcity — that one is
                squarely about who is out there. */}
            <p className="prob-lede gs">None of them is solved by more candidates.</p>
          </div>

          <div className="prob-grid">
            <div className="prob-vis">
              <figure className="prob-vis-stick">
                <div className="prob-vis-frame">
                  <Image
                    src="/assets/problem-panel.jpg"
                    alt="A panel room set for interviews — blank paper and pens laid out along the table, every chair empty."
                    width={1100}
                    height={1100}
                    sizes="(max-width: 900px) 92vw, 46vw"
                  />
                </div>
                <figcaption>Set for a panel. Still waiting on a shortlist.</figcaption>
              </figure>
            </div>

            <div className="prob-main">
              <ProblemList />
            </div>
          </div>

        </div>
      </section>

      {/* WHAT WE DO removed.

          It named the offer's three shapes — permanent, flexible, run for
          you — two thousand pixels above the services carousel, which names
          all seven services with their commercials. Stripping the service
          names out of it stopped the two sections repeating each other's
          words, but not the underlying problem: the page still introduced
          what Rivago sells twice. The carousel does that job with more in
          its hands.

          Its one line worth keeping, the old ORB positioning statement,
          had nowhere better to go and is not reinstated — the hero and the
          approach section already make that claim between them. */}

      {/* THE REFRAME */}
      {/* Cream rather than plain light: it lands between a dark band and two
          light ones, and without a ground of its own the page would run
          reframe, what changes and how we work as one continuous pale
          stretch. Cream also keeps the meaning this had as a light panel
          inside the dark band it came out of.

          The four cards are dark on that cream, where the reference has them
          dark on dark — see the note in ReframeRail. */}
      <section className="section cream lt rfm-sec">
        <div className="rfm-inner">
          <div className="rfm-head gs">
            <div className="eyebrow" style={{ marginBottom: 18, display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(11,19,17,.06)", color: "var(--text-inv-2)" }}><span className="eyebrow-dot" style={{ background: "var(--accent-inv)" }}></span>The reframe</div>
            <h2 className="rfm-h2">Hiring doesn&rsquo;t need more candidates.<br /><em>It needs better decisions.</em></h2>
            <p className="rfm-d">Hiring isn&rsquo;t simply about reaching more candidates. It&rsquo;s about knowing where to look, what to look for, and which candidates are genuinely worth your team&rsquo;s time.</p>
            <p className="rfm-turn">That&rsquo;s where we work differently.</p>
          </div>

          <div className="gs">
            <ReframeRail />
          </div>
        </div>
      </section>

      {/* WHAT CHANGES */}
      {/* Two vertically offset columns of cards with a call to action as the
          last cell. The six cards and their copy live in the component, the
          way the carousel, the rail and the tabs each own theirs.

          The lede stays under the heading on the left. The reference runs
          its body copy down the right-hand edge, which is the single most
          recognisable thing about that page. */}
      <section className="why-sec">
        <div className="why-inner">
          <div className="eyebrow ew-light gs" style={{ marginBottom: 18 }}>What changes</div>
          {/* Was "Six reasons clients stay with us" — a claim about client
              retention, which is the one thing here nobody has measured. */}
          {/* 700, not the 600 the old two-line headline used: this one
              measures 640 on a single line and was breaking to leave
              "search." on its own. */}
          <h2 className="section-h2 gs" style={{ color: "var(--text)", maxWidth: 700, marginBottom: 18 }}>Six things we do on <em>every search.</em></h2>
          <p className="why-lede gs">Each one is either done on your search or it isn&rsquo;t. You can hold us to any of them on the first call.</p>
          <WhyCards />
        </div>
      </section>

      {/* FEATURES */}
      <section className="feat-sec">
        <div className="feat-inner">
          <div className="eyebrow ew-dark gs" style={{ marginBottom: 18 }}>Our approach</div>
          <div className="apr-head">
            <h2 className="section-h2 feat-h2 dark gs" style={{ color: "var(--dt)", maxWidth: 700 }}>How Rivago drives enterprise hiring.<br /><em>From initial sourcing to final offer.</em></h2>
            <p className="apr-lead gs">Every search runs the same five stages, with the same partner on it throughout. You know where the search stands at each one.</p>
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
              <h2 className="section-h2 gs" style={{ color: "var(--text)", marginBottom: 14 }}>Seven ways we <em>staff your teams.</em></h2>
              {/* Not a list of the seven modes — the carousel below names each
                  one with its own commercials, and the subhead would only be
                  reading the list out ahead of it. */}
              <p className="svc-sub gs">The commitment and the commercials differ from one to the next. The way we run the search behind them does not.</p>
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
            <h2 className="section-h2 gs" style={{ color: "var(--text)", marginBottom: 12 }}>Three ways to <em>reach us.</em></h2>
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
              <h2 className="hins-h2 gs">What we write <em>about hiring.</em></h2>
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

      {/* WHAT OUR CLIENTS SAY */}
      {/* The client logo strip used to be its own band at position 2. It is
          here now, with the quotes — marks and words are the same argument
          and the page was making it twice. The trade: the logos no longer
          sit straight under the hero as early credibility. Reversible.

          Four quotes is what exists. Anonymised to a role and a market, no
          figures, no client named — the form a hiring team will actually
          sign off on. See lib/testimonials.ts. */}
      <section className="prf-sec inv">
        <div className="prf-inner">
          <div className="prf-head">
            <div>
              <div className="eyebrow ew-light gs" style={{ marginBottom: 14 }}>Clients</div>
              <h2 className="prf-h2 gs">Who we <em>hire for.</em></h2>
            </div>
            <p className="prf-lede gs">Every mark below is a client. Every quote is from someone who ran a search with us and agreed to be quoted — by role and market, not by name.</p>
          </div>
          <div className="prf-marks gs"><LogoMarquee /></div>
          <div className="prf-grid">
            {testimonials.map((t) => (
              <figure className="prf-card gs" key={t.name}>
                <span className="prf-badge">{t.badge}</span>
                <blockquote className="prf-q">{t.quote}</blockquote>
                <figcaption className="prf-who">{t.name}</figcaption>
              </figure>
            ))}
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
