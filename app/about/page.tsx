import Link from "next/link";
import type { Metadata } from "next";
import { routes, offices } from "@/lib/routes";
import OfficesSection from "@/components/OfficesSection";
import CardSlider from "@/components/CardSlider";

export const metadata: Metadata = {
  title: "About Rivago Infotech · Partner-led executive search since 2019",
  description:
    "Rivago Infotech is a partner-led executive search and recruitment firm founded in 2017. Ten senior partners and a fifty-strong team across offices in Pune, the US, Canada, the UAE and India place senior operators in technology, healthcare, legal, finance and aerospace. No portals, no handoffs, no automated outreach.",
  alternates: { canonical: "https://rivagoinfotech.com/about" },
  openGraph: {
    title: "About Rivago Infotech · Partner-led executive search since 2019",
    description: "Ten senior partners across three offices placing senior operators in technology, healthcare, legal, finance and aerospace. No portals. No handoffs.",
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

const numbers = [
  { v: "2017", l: "Founded in Pune, India by three ex-operators" },
  { v: "50", l: "People across Delaware, Pune and Ontario" },
  { v: "10", l: "Senior partners, each running one industry practice" },
  { v: "6,400", u: "+", l: "Senior operators placed since founding · 1,847 in the last twelve months" },
];

const timeline = [
  { year: "2017 · Pune", title: "Founded by three operators", desc: "Anjali Rao, Suresh Iyer and Mark Chen — who met inside Persistent Systems' India team — open the first office in Koregaon Park, Pune. First retained search: a VP of Engineering for a Pune fintech, closed in 31 days.", aside: "First-year revenue: $740K. First-year hires: nine." },
  { year: "2019 · Delaware, US", title: "Incorporated in the United States", desc: "Rivago incorporates in Delaware and opens its first US office to run the technology practice on American soil. The firm's first $1M-revenue engagement is signed within nine months — an embedded talent partnership with a publicly-traded SaaS.", aside: "US office today: 22 people, four partners." },
  { year: "2021 · Ontario, Canada", title: "North American expansion", desc: "The Ontario office opens to serve financial services and pre-IPO technology across Canada — the firm's second North American market and its first cross-border bench.", aside: "First Canadian engagement: a bank risk team, 12 hires." },
  { year: "2023 · Dubai, UAE", title: "Into the Gulf", desc: "The UAE office opens in DIFC, anchored by a healthcare partnership with a Gulf hospital group expanding across the region.", aside: "First UAE engagement: 11 placements in 60 days." },
  { year: "2025 · Dubai", title: "The fourth market", desc: "The UAE desk opens to serve the legal and finance practices in the City and the Square Mile. Three senior partners relocate from Ontario and Delaware; six new hires are made locally.", aside: "UAE desk today: served from Delaware and Pune 2026." },
  { year: "2026 · Today", title: "50 people, four markets, ten practices", desc: "Profitable every year since founding. No external capital. Still owned and operated by the original three partners plus seven employee-partners. Still no portal.", aside: "Year-nine revenue: confidential. Profit margin: healthy." },
];

const leadership = [
  { img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=750&fit=crop&crop=face&auto=format", name: "Anjali Rao", title: "Co-founder & Managing Partner", bio: "Fourteen years inside Persistent Systems before founding Rivago. Runs the firm's largest accounts and chairs the partner committee." },
  { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face&auto=format", name: "Suresh Iyer", title: "Co-founder & Partner · Operations", bio: "Owns delivery quality, the partner-development program, and the firm's internal tooling. Believed by clients to never sleep." },
  { img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=750&fit=crop&crop=face&auto=format", name: "Mark Chen", title: "Co-founder & Partner · US", bio: "Heads the US office in Delaware. Joined the GTM practice in 2019; now runs the firm's relationships with venture-backed scale-ups across North America." },
  { img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=750&fit=crop&crop=face&auto=format", name: "Dr. Lila Mehta", title: "Partner · Healthcare practice", bio: "MD, MPH. Twelve years at Mount Sinai before Genentech; seven years at Rivago. Personally referenced every clinical placement above Director." },
  { img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=750&fit=crop&crop=face&auto=format", name: "Eleanor Pritchard", title: "Partner · Legal practice · Delaware", bio: "Yale JD, NY and CA bars. Six years at Cleary Gottlieb, four years in-house at Stripe before joining Rivago to build the legal practice in 2023." },
  { img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=750&fit=crop&crop=face&auto=format", name: "Cmdr. James O'Sullivan", title: "Partner · Aerospace & defence", bio: "Twenty years US Navy (retired). Joined Rivago in 2019 to establish the cleared-talent program. Active TS/SCI." },
  { img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=750&fit=crop&crop=face&auto=format", name: "Aisha Karim", title: "Partner · People & HR practice", bio: "SHRM-SCP. Senior People leadership at Airbnb and Unilever before joining Rivago to build the firm's CHRO-search business in 2017." },
  { img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=750&fit=crop&crop=face&auto=format", name: "Maya Rasmussen", title: "Partner · GTM practice", bio: "Seven years at Salesforce and Datadog in commercial leadership. Joined Rivago in 2019 to run the GTM practice across all client markets." },
];

const principles = [
  { title: "Quality over", em: "volume.", desc: "Five candidates who fit, not fifty who do not. We would rather decline a brief than spam your inbox." },
  { title: "Specificity over", em: "hype.", desc: "Numbers, denominators, dates. No “world-class” talk. We earn the right to a superlative by delivering." },
  { title: "Ownership, not", em: "handoffs.", desc: "One partner from brief to placement. They took it. They run it. They stand behind the recommendation." },
  { title: "Discretion as", em: "default.", desc: "Confidential as standard. NDAs on request. We share with one client at a time, with your permission." },
];

const refusals = [
  { title: "We won't submit a CV", titleBreak: "without", em: "explicit consent.", desc: "Every candidate sees the brief, hears who the company is, and signs off on the submission. We've lost mandates over this. We've never lost a candidate's trust over it." },
  { title: "We won't run a search", titleBreak: "with", em: "no scorecard.", desc: "If we can't agree on what “good” looks like in writing, the search doesn't start. It's the single most reliable predictor of a sticky placement, and the easiest discipline to skip." },
  { title: "We won't hand off", titleBreak: "to a", em: "coordinator.", desc: "The partner who took the brief runs the search. The partner who runs the search closes the offer. The partner who closed the offer checks in at month twelve. One name. One person. Always." },
  { title: "We won't poach", titleBreak: "from", em: "our own placements.", desc: "Twelve months off-limits as standard on retained engagements; twenty-four on senior-most retained searches. The promise that lets clients tell us things they wouldn't tell anyone else." },
  { title: "We won't take an engagement", titleBreak: "we", em: "can't deliver.", desc: "If a brief is unwinnable — wrong comp band, wrong location, wrong timeline — we'll say so on the first call and lose the work. Nobody benefits from a six-month search that ends in nothing." },
  { title: "We won't bill", titleBreak: "for", em: "a portal.", desc: "Every fee we charge buys a person on the line. If you wanted software you would have bought software. We're aware of the irony." },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* EDITORIAL HERO */}
      <header className="about-hero">
        <div className="about-hero-inner">
          <div className="eyebrow ew-light gs" style={{ marginBottom: 36, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>About Rivago</div>
          <h1 className="gs">A search firm built around<br /><em>one quiet idea</em> — that<br />hiring a person is not a transaction.</h1>
          <p className="lede gs">Founded in 2017 in Pune by three operators who had spent the prior decade hiring inside the orgs they now serve. Today, fifty people across three offices — headquartered in Delaware, with teams in Pune and Ontario, led by ten senior partners. No call centres. No automated outreach. No portal.</p>
        </div>
      </header>

      {/* OUR STORY / BELIEF */}
      <section className="belief gs">
        <div className="belief-inner">
          <div>
            <div className="belief-label">Our story</div>
            <h2 style={{ marginTop: 18, fontSize: "clamp(28px,3.4vw,44px)", lineHeight: 1.08, letterSpacing: "-.024em", fontWeight: 400, color: "var(--dt)", maxWidth: 320 }}>A different kind of <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>recruitment firm.</em></h2>
          </div>
          <div className="belief-body">
            <p style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--dt)" }}>&ldquo;We wanted to build the firm we had always wanted to hire from. Honest about the brief. Slow to send the wrong candidate. Fast for the right one.&rdquo;</p>
            <p>The search industry built itself around <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>volume.</em> More résumés. More portals. More &ldquo;candidates per requisition.&rdquo; We came up inside it and watched the work degrade for both sides — hiring managers drowning in unscreened profiles, candidates ignored after their fourth round.</p>
            <p>So we built Rivago around the opposite premise. Fewer searches per partner. <strong>Longer relationships.</strong> Honest briefs in both directions. A single person on the line — who learns your business and stays with you for the next role, and the one after that.</p>
            <p>It costs more per hire. It also <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>sticks.</em> Ninety-one percent of the people we place are still in seat twelve months later.</p>
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="numbers gs">
        <div className="numbers-inner">
          <div style={{ marginBottom: 56 }}>
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>By the numbers</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 720, marginBottom: 0 }}>Nearly a decade of <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>placed hires.</em></h2>
          </div>
          <div className="numbers-card">
            {numbers.map((n) => (
              <div className="num-cell" key={n.l}>
                <div className="num-v">{n.v}{n.u && <span className="u">{n.u}</span>}</div>
                <div className="num-l">{n.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline">
        <div className="timeline-inner">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Seven years, abbreviated</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 720, marginBottom: 0 }}>The decisions that <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>made the firm.</em></h2>
          </div>
          <div className="tl-rows">
            {timeline.map((t) => (
              <div className="tl-row gs" key={t.year}>
                <div className="tl-year">{t.year}</div>
                <div className="tl-main"><h3>{t.title}</h3><p>{t.desc}</p></div>
                <div className="tl-aside">{t.aside}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="leaders" id="leadership">
        <div className="leaders-inner">
          <div className="gs">
            <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Leadership · founding partners + practice heads</div>
            <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 720, marginBottom: 0 }}>The eight people whose<br />names go on the <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>first call.</em></h2>
          </div>
          <div className="leaders-grid">
            {leadership.map((p) => (
              <div className="leader gs" key={p.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <div className="leader-photo"><img src={p.img} alt={p.name} loading="lazy" decoding="async" /></div>
                <div>
                  <div className="leader-name">{p.name}</div>
                  <div className="leader-title">{p.title}</div>
                  <div className="leader-bio">{p.bio}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE — 4 PRINCIPLES */}
      <section className="values">
        <div className="values-inner">
          <div className="gs">
            <div className="eyebrow-plain gs" style={{ marginBottom: 20 }}>What we believe</div>
            <h2 className="section-h2" style={{ color: "var(--dt)", maxWidth: 720, marginBottom: 0 }}>Four principles.<br /><em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>No exceptions.</em></h2>
          </div>
          <div className="values-grid values-grid-4">
            {principles.map((v, i) => (
              <div className="value gs" key={v.title}>
                <div className="value-num">{String(i + 1).padStart(2, "0")}</div>
                <h3>{v.title} <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>{v.em}</em></h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE WON'T DO — 6 REFUSALS */}
      <section className="values" style={{ background: "var(--cream)" }}>
        <div className="values-inner">
          <div className="gs">
            <div className="eyebrow" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>What we won&apos;t do</div>
            <h2 className="section-h2" style={{ color: "var(--dt)", maxWidth: 720, marginBottom: 0 }}>Our values, mostly stated<br />as the <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>things we refuse.</em></h2>
          </div>
          <CardSlider trackClassName="values-grid values-grid-divider" nav="dots">
            {refusals.map((v, i) => (
              <div className="value gs" key={v.title} style={{ background: "var(--cream)" }}>
                <div className="value-num">{String(i + 1).padStart(2, "0")}</div>
                <h3>{v.title}<br />{v.titleBreak} <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "#0A7040" }}>{v.em}</em></h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </CardSlider>
        </div>
      </section>

      {/* OFFICES */}
      <OfficesSection />

      {/* CLOSING CTA */}
      <section className="careers" id="get-in-touch">
        <div className="careers-inner gs">
          <div className="eyebrow ew-light" style={{ margin: "0 auto 28px", display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Work with us</div>
          <h2>Start a conversation with<br />a <em>partner</em> — not a portal.</h2>
          <p>Whether you&apos;re building a team or weighing your next move, you&apos;ll talk to a senior partner who knows your market. No intake bots, no call queues, no résumé black holes.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="btn btn-prim" href={`${routes.hireTalent}#intake`} data-hire>Submit a Brief
              <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link className="btn btn-ghost" href={routes.contactUs}>Contact us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
