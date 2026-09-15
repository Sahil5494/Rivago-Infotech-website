import Link from "next/link";
import Image from "next/image";
import LogoMarquee from "@/components/LogoMarquee";
import OrbCanvas from "@/components/OrbCanvas";
import HeroVisual from "@/components/HeroVisual";
import RotatingWord from "@/components/RotatingWord";
import ProcessTimeline from "@/components/ProcessTimeline";
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
import { routes, offices, marketsSentence, numberWord } from "@/lib/routes";
import { STAGES } from "@/lib/process";
import ClientQuotes from "@/components/ClientQuotes";

/* The same six the hero canvas places into, so the cycling word and the
   drawing behind it never disagree. */
const DISCIPLINES = ["technology", "finance", "healthcare", "legal", "operations", "engineering"] as const;

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
      {/* The sticky scope. A sticky element pins for as long as its
          containing block is in view, so with the hero as a direct child of
          the page it stayed pinned for all 12,000px — and because z-index
          makes it a positioned element, it painted OVER every later section
          that was not itself positioned. Measured: at 5,000px and 9,000px
          down, the topmost element under the cursor was the hero's headline.

          Wrapping the hero and the band that covers it gives the pin an end.
          The hero holds while THE PROBLEM rides over it, then releases and
          scrolls away like anything else, and the rest of the page is
          untouched. */}
      <div className="ov-scope">
      {/* HERO — centred over the client strip, dark.
          Built on the shape the client supplied as reference: a centred
          column, a staggered word-by-word entrance on one easing curve, a
          cycling last word, and the trust marks closing the same band.

          Two things from that reference are deliberately NOT here. Its
          palette is violet-to-blue and ours is forest green, so every
          gradient below is rebuilt rather than ported. And its atmosphere is
          a planet rim and shooting stars — a space metaphor it has committed
          to. Ours is the drawing this site already had: a pool of candidates
          with a search passing through it, promoted from the hero's right
          column to the whole band. It is the same job, in our own language.

          The hero is NOT 100svh. The reference fills the viewport, which
          pushes the page's own content out of the first frame. */}
      <section className="hero hero-c">
        <div className="hero-atmos" aria-hidden="true">
          <div className="hero-grain" />
          <div className="hero-bloom" />
          <HeroVisual ambient />
          <div className="hero-veil" />
        </div>

        <div className="hero-c-inner">
          <div className="hero-badge hr-1"><span className="bdot"></span>Global Staffing · US · Canada · UAE · India</div>
          {/* Word-by-word, 90ms apart, all on one curve. The last word cycles
              through the disciplines the canvas behind is placing into. */}
          <h1 className="hero-h1">
            <span className="hr-2">The</span>{" "}
            <span className="hr-3"><em>right people</em>,</span>{" "}
            <span className="hr-4">in</span>{" "}
            <span className="hr-5"><RotatingWord words={DISCIPLINES} /></span>
          </h1>
          <p className="hero-sub hr-6">We connect outstanding companies with exceptional talent — across every industry, every function and every corner of the globe.</p>
          <div className="hero-btns hr-7">
            <button type="button" className="btn-hp btn-sheen" data-help>
              Talk to an expert
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span className="sheen" aria-hidden="true" />
            </button>
            {/* A staffing firm has two audiences and the hero offered one
                door. The second is the candidate's, and it goes to the job
                search rather than the contact form. */}
            <Link href="/search-jobs" className="btn-hg">Browse open roles</Link>
          </div>
        </div>

        {/* CLIENT STRIP — inside the hero, closing the band, as the reference
            does. Folding it in also removed a boundary that was doing no
            work: as its own section its fill sat 1.011:1 from the hero's. */}
        <div className="hero-trust hr-8">
          <div className="clients-label">Teams we recruit for</div>
          <LogoMarquee />
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
      <section className="prob-sec">
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

      </div>{/* /.ov-scope */}

      {/* WHAT WE BRING */}
      {/* Eyebrow was "The reframe" — the editorial name for what this
          section does, not a word a visitor arrives with. */}
      {/* Cream rather than plain light: it lands between a dark band and two
          light ones, and without a ground of its own the page would run
          this band, why Rivago and how we work as one continuous pale
          stretch. Cream also keeps the meaning this had as a light panel
          inside the dark band it came out of.

          The four cards are dark on that cream, where the reference has them
          dark on dark — see the note in ReframeRail. */}
      <section className="section cream lt rfm-sec">
        <div className="rfm-inner">
          <div className="rfm-head gs">
            <div className="eyebrow" style={{ marginBottom: 18, display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(11,19,17,.06)", color: "var(--text-inv-2)" }}><span className="eyebrow-dot" style={{ background: "var(--accent-inv)" }}></span>What we bring</div>
            {/* Client's copy, with three mechanical corrections.

                "Don't fill the role" instructs the buyer not to do the thing
                they came here to do; "don't just fill the role" is the same
                line without the misread.

                The draft second sentence read "we combine recruiting
                expertise, market intelligence and technology throughout the
                search" — three of the four card labels, verbatim, forty pixels
                above the cards that carry them, and the fourth (Reach Further)
                left out. It now names what those capabilities do instead, and
                covers all four: hired the role before (01), the market around
                it (02), the tools (03), the reach outside your market (04).
                No phrase here appears in ReframeRail.

                Résumé became CV. ProblemList two sections up says "Better
                CVs.", and this is the same page and the same reader.

                No <br />: the line sets itself, and text-wrap:balance on
                .rfm-h2 is inert across a forced break anyway. */}
            <h2 className="rfm-h2">Don&rsquo;t just fill the role. <em>Get it right.</em></h2>
            {/* Second sentence ran "So every search gets someone who has
                hired that role before, the tools to..." — two collisions with
                WHY RIVAGO, one section down. Its h2 is "Six things we do on
                every search", and there is a note at .feat-sec below saying
                that phrase is spoken for; this broke the same rule. And "someone
                who has hired that role before" is the claim its second card
                already makes as a title, "A partner who already works your
                sector".

                The four items now track the four cards in the rail rather
                than the cards two sections away: read the brief, read the
                market, the tooling, the reach. */}
            <p className="rfm-d">The right hire starts with understanding the role, the market around it and the person behind the CV. So a brief goes out with four things attached: a proper read of what the job needs, a current picture of who is hiring in it, tools that work a long list fast, and the reach to look further when the answer isn&rsquo;t close.</p>
          </div>

          <div className="gs">
            <ReframeRail />
          </div>
        </div>
      </section>

      {/* WHY RIVAGO */}
      {/* Two vertically offset columns of cards with a call to action as the
          last cell. The six cards and their copy live in the component, the
          way the carousel, the rail and the tabs each own theirs.

          The lede stays under the heading on the left. The reference runs
          its body copy down the right-hand edge, which is the single most
          recognisable thing about that page. */}
      <section className="why-sec">
        <div className="why-inner">
          <div className="eyebrow ew-light gs" style={{ marginBottom: 18 }}>Why Rivago</div>
          {/* Was "Six things we do on every search." That was false of four
              of the six cards below, and the lede underneath it doubled down.
              Confidential search is a capability for roles that cannot be
              posted, not something done on every search; "You explain your
              hiring bar once" needs a second search to mean anything; the
              offices card is a fact about the firm rather than an act on a
              search; and the guarantee runs 90 days on contingent against
              twelve months on retained, so its terms vary by engagement. Two
              of six survived the claim literally.

              The count is gone with it, for the same reason "Three offices,
              four markets" lost its numerals — a headline that counts its own
              cards starts lying the moment someone adds a seventh.

              It also earns its keep now. This is the "why choose us" block on
              a recruitment company's homepage, and the old h2 carried no
              commercial term at all: across all 329 words of card copy,
              "recruitment" appeared zero times and "staffing" zero times.

              Was "Six reasons clients stay with us" before that — a claim
              about retention, which nobody here has measured. */}
          <h2 className="section-h2 gs" style={{ color: "var(--text)", maxWidth: 700, marginBottom: 18 }}>What you get when you <em>hire through us.</em></h2>
          {/* The section named Rivago exactly once, in an eyebrow that is a
              div and carries no weight — so 329 words of copy were
              unattributable to anyone. A passage an answer engine cannot
              attribute is a passage it will not cite. One sentence fixes it,
              and carries the services and the markets with it. Markets are
              read from lib/routes so this cannot drift from the footer, the
              contact page or the offices card below. */}
          <p className="why-lede gs">Rivago runs permanent, contract and executive searches in {marketsSentence()}. Every one of the six below is something you can hold us to on the first call.</p>
          <WhyCards />
        </div>
      </section>

      {/* FEATURES */}
      <section className="feat-sec">
        <div className="feat-inner">
          {/* "Our approach" said nothing. This section is the process, and
              /services already owns "What we actually do", so the two do not
              collide. */}
          <div className="apr-head">
            <div className="eyebrow ew-dark gs" style={{ marginBottom: 18 }}>Our process</div>
            {/* Literally what the timeline now shows: it opens on Calibrate,
                which is the brief, and closes on Placed & guaranteed. */}
            <h2 className="section-h2 feat-h2 dark gs" style={{ color: "var(--dt)" }}>From the brief to <em>the placement.</em></h2>
            {/* Deliberately not "every search" — the section immediately
                above this one is headed "What you get when you hire through
                us" and used to carry that phrase; the note survives because
                the two sections are still read in one scroll.

                The stage count is read from the data rather than typed, like
                the office count on the card above. */}
            <p className="apr-lead gs">{numberWord(STAGES.length).replace(/^./, (c) => c.toUpperCase())} stages, run the same way each time, with one partner on the search throughout. You know where it stands at each of them.</p>
          </div>
          <ProcessTimeline />
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
              {/* "staff your teams" was not true of three of the seven.
                  Employer of Record begins "for when you have found the right
                  person" — the client found them and Rivago staffs nobody;
                  executive search is one VP-to-C-suite hire; interim is one
                  person two days a week. The reverse fails too: "a role",
                  singular, breaks RPO, which is hiring at volume across a
                  function. These seven span one-role and many-role services,
                  so the only label true of all of them is the one /about
                  already uses off this same data — ways to engage.

                  Two collisions steered the wording. "Seven ways to engage
                  us" rhymed with the support section's "Three ways to reach
                  us" four down — "[Number] ways to [verb] us" twice on one
                  page is the same sentence wearing a different verb. Then
                  "Every way to engage Rivago" ran straight into INDUSTRIES
                  immediately below, which is headed "Every sector. Every
                  function." Naming Rivago also puts the entity into a section
                  whose panels are mostly not in the HTML.

                  No count at all now. It said "Seven", and "Eight" before
                  that when it counted the Staffing Solutions overview as a
                  service — the overview is an index page, the same
                  destination as the "View all services" link beside this
                  heading. A headline that counts its own panels is one edit
                  away from lying, and the carousel's own 01/07 counter says
                  the number anyway, correctly, from the data. */}
              <h2 className="section-h2 gs" style={{ color: "var(--text)", marginBottom: 14 }}>Choose how you <em>engage Rivago.</em></h2>
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
              {/* "Every sector. Every function." — the client's, kept.

                  Two things were wrong with it and only one of them was the
                  headline. The lede underneath used to read "We recruit
                  across every major industry", which walked the first claim
                  back one line later: the two disagreed about the size of
                  what was being promised. That lede is gone.

                  What is left is a rhetorical absolute over eight practices.
                  Raised, and the client's call — and it earns its place on
                  the thing that actually needed saying: five of the eight are
                  sectors (Technology, Finance & Banking, Healthcare, Legal,
                  Aerospace & Defence) and three are functions you hire into
                  any sector (Human Resources, Sales & Marketing, Supply &
                  Operations), which is why the HR card's own description ends
                  "across every industry". Naming both in four words says that
                  more plainly than a paraphrase does.

                  The cost is search: no recruitment term in the h2. The lede
                  carries "recruiters" and the cards carry the role keywords,
                  so it is a cost rather than a hole. */}
              <h2 className="section-h2 gs" style={{ color: "var(--text)", marginBottom: 14 }}>Every sector. <em>Every function.</em></h2>
              {/* Names Rivago — the section had the entity zero times in its
                  own copy, so nothing here could be attributed to anyone. */}
              <p className="ind-sub gs">Rivago runs a dedicated team for each one. They know the roles, the regulations and what a strong hire looks like in it.</p>
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

      {/* TALK TO US removed, at the client's request.

          It was the phone card, the scoping-call card and a "do your own
          homework" card, under "Three ways to reach us."

          Two things left the homepage with it and are not anywhere else on
          this page, so if they should come back, this is what to bring:

            The phone number. tel:+18885085703 was the only tel: link in the
            page body. It is still on /contact-us and in the footer, but a
            visitor who wants to call now has to leave the homepage to find
            it.

            The scoping call. "Thirty minutes with the partner who would take
            the brief... You leave with a plan whether or not you engage us."
            That offer has no other home — WhyCards used to run the same two
            sentences and they were cut from it precisely because this
            section owned the pitch. The only remaining conversion routes on
            the page are the hero, the WhyCards tile, the closing CTA and the
            nav button, and all four go to the same hire modal.

          Two of the audit findings are resolved by the removal rather than
          fixed: the third card was not a way to reach anyone, and its
          "Browse resources" link sat immediately above INSIGHTS, which links
          to the same place.

          One consequence to watch: this was the only white band between
          INDUSTRIES and INSIGHTS, which are both rgb(6,15,7). They now abut
          at 1.00:1, with the 1px hairline the page uses everywhere else as
          the only boundary. */}

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
      {/* Quotes only. The logo strip was folded in here during the reorder
          and has gone back to its own band under the hero, so this section
          no longer carries the marks — the heading and the lede both moved
          off them accordingly.

          Four quotes is what exists. Anonymised to a role and a market, no
          figures, no client named — the form a hiring team will actually
          sign off on. See lib/testimonials.ts. */}
      <section className="prf-sec inv">
        <div className="prf-inner">
          <div className="prf-head">
            <div className="eyebrow ew-light gs" style={{ marginBottom: 14 }}>Clients</div>
            {/* Was "Who we hire for" — which named the logo strip. That has
                gone back under the hero, so the heading names what is
                actually left in this band. */}
            <h2 className="prf-h2 gs">What clients <em>say.</em></h2>
            {/* Under the headline, not beside it. It sat in the right-hand
                half of a flex row, which put a quiet sentence at the same
                optical weight as the h2 and left the two reading as a pair of
                columns rather than a heading and its lede. Every other head
                on this page stacks.

                It also takes the overflow bug out at the root: that row
                needed a flex-shrink:0 and a media query to release a 430px
                cap on a phone, and losing the media query is what put 238px
                of horizontal scroll on the page two commits ago. A block in
                normal flow cannot do that.

                This line claimed consent that has not been obtained. It read
                "Every quote is from someone who ran a search with us AND
                AGREED TO BE QUOTED" — while the header of lib/testimonials.ts
                records, in its own words, that these four "remain
                endorsements that have not been given". The page was asserting
                the one fact the data file says is missing.

                The replacement went too far the other way: "nothing a
                hiring team would need legal sign-off to repeat" is a
                compliance note, not a line for a section headed "What clients
                say". It described the paperwork around the quotes instead of
                the quotes.

                This says what the reader is about to get and how it is
                attributed, in the register of the rest of the page.

                Note where the real claim lives: the heading asserts these are
                clients. No lede can contain that, and none should try to. The
                sentence to restore when the quotes are real is the original
                one — "everyone who ran a search with us and agreed to be
                quoted" — which is the better line and only has to be earned.

                Opened "Every mark below is a client" before that. There are
                no marks below it any more. */}
            <p className="prf-lede gs">Hiring teams in their own words, anonymised to a role and a market rather than a name.</p>
          </div>
          <div className="gs">
            <ClientQuotes />
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
          {/* data-help, at the client's call: the chooser, not the brief
              form. It is the same door the hero opens. */}
          <button type="button" className="btn-hp" data-help style={{ fontSize: "var(--fz5)", padding: "15px 32px" }}>Talk to an expert <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
          {/* routes.viewJobs is the filtered jobs LIST — ten cards and
              twenty-one filter chips, with a detail pane for whichever role
              is selected. I previously called it a detail page on the
              strength of that pane supplying the h1, and moved this link to
              /search-jobs; it was already pointing at the right page. */}
          <Link className="btn-hg" href={routes.viewJobs} style={{ fontSize: "var(--fz5)", padding: "15px 32px" }}>Browse all jobs</Link>
        </div>
      </section>
    </>
  );
}
