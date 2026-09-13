import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import ServiceCarousel from "./ServiceCarousel";
import LogoMarquee from "@/components/LogoMarquee";
import { routes } from "@/lib/routes";
import "./services.css";

/* Rebuilt around the one job no other page does.
 *
 * The previous version was twelve sections and 10,181px, and seven of them
 * repeated something else: a client strip and a "done the way it should be"
 * block from the home page, a five-stage process identical to the home page's
 * approach tabs, TWO sector breakdowns that both duplicated /industries, a
 * case-study band and an articles band from /resources. It was a second home
 * page wearing the services page's URL.
 *
 * What only this page can do is help someone work out which engagement model
 * fits their problem and then send them to that sub-page. So it is now a
 * comparison on one consistent axis — what it is for, who employs the person,
 * how the money works, how long it runs — with the detail left where it
 * belongs, on the seven service pages.
 *
 * Gone with the old layout: "Typical roles · last 90 days", "97% 90-day
 * retention", "3.4× inbound interest per OEM mandate", the "48-hour median
 * shortlist" and "Talent in 5–7 days" bullets, and a closing section that
 * promised "We'll be back tomorrow" with "a written shortlist plan within one
 * business day". None of it was measured.
 */

const DESC =
  "Contract, contract-to-hire, direct hire, executive search, RPO and Employer of Record across the United States, Canada, the UAE and India. Compare the seven ways to engage Rivago — who employs the person, how the commercials work, and how long each one runs.";

export const metadata: Metadata = {
  title: "Staffing Solutions & Recruitment Services | Rivago Infotech",
  description: DESC,
  alternates: { canonical: "https://rivagoinfotech.com/services" },
  openGraph: {
    type: "website",
    siteName: "Rivago Infotech",
    title: "Staffing Solutions & Recruitment Services | Rivago Infotech",
    description: DESC,
    url: "/services",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630 }],
  },
};

/* Kept from the old page's FAQ, minus the figures. The delivery question used
   to answer "5–7 days" and "48 hours"; the team question claimed 40-person
   cohorts built on a single contract. Neither was measured. The commercial
   questions are the ones this page should answer — scope and market questions
   are answered on the home page. */
const faqItems = [
  {
    q: "What is the difference between contract, contract-to-hire and direct hire?",
    a: "Contract staffing places a professional on our payroll for a fixed term — you get the skill without the headcount commitment, and we handle payroll, tax and worker classification. Contract-to-hire is the same arrangement with the option to convert them to your employee once the fit is proven. Direct hire is permanent from day one, on a contingent fee and backed by a replacement guarantee. If you are not sure which fits, your partner will recommend a structure on the first call — including the cheaper one, where that is the right answer.",
  },
  {
    q: "How quickly can you get us candidates?",
    a: "It depends on the engagement and the role, and we give you a date in writing when we take the brief rather than a number on a website. Contract and temporary roles move fastest, because the people are often already known to us. Executive search runs longest — a retained mandate is measured in months, and anyone promising otherwise is selling you something. Whatever we commit to, you hear from us early if it is going to move.",
  },
  {
    q: "What happens if a placement does not work out?",
    a: "Every permanent placement carries a replacement guarantee — 90 days on contingent direct hires, up to 12 months on retained searches. If someone leaves inside the window we restart the search at no additional fee. The exclusions are written into the agreement rather than buried in terms: it covers resignation and performance-based termination, not redundancy, a cancelled role, or a material change to the job the candidate accepted. On contract, we replace a poor fit quickly and you pay only for time worked.",
  },
  {
    q: "We already have a staffing partner. Do we have to replace them?",
    a: "No. Plenty of our clients bring us in alongside an incumbent — often on the roles they are struggling to fill, or in a market where we have deeper reach. We are happy to prove ourselves on a single hard requisition before you consolidate anything. If we earn more of your work, good; if not, you have lost nothing.",
  },
  {
    q: "Do you work across all four markets on one engagement?",
    a: "Yes. Rivago operates across the United States, Canada, the UAE and India, and a single engagement can span them. Worth knowing up front: notice periods differ sharply between those markets — two weeks is conventional in the US, while 60 to 90 days is common in India. That is usually the single biggest factor in when someone actually starts, and we will raise it at brief stage rather than at offer.",
  },
  {
    q: "We need a team to own a project, not one hire. Can you do that?",
    a: "Yes — that is the Recruitment Process Outsourcing side of the business. Rather than filling one seat we stand up a function or a project pod, with one partner accountable for the outcome end to end, working under your brand and in your workflow. It is priced as a monthly programme rather than per placement, which is usually the cheaper answer at volume.",
  },
];

const ArrowIco = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ServicesPage() {
  return (
    <div className="svcx">
      {/* HERO. The old one was still on the pre-change palette — neon #3DFF87
          on near-black, centred, with the old button treatment — so the home
          page and this one looked like two different companies. */}
      <section className="svcx-hero">
        <div className="svcx-wrap">
          <div className="eyebrow" style={{ marginBottom: 18 }}>Staffing solutions</div>
          <h1 className="svcx-h1">Seven ways to engage.<br /><em>One way of working.</em></h1>
          <p className="svcx-lead">
            What changes between them is the commitment, the commercials, and who
            carries the employment. What does not change is the search — the same
            brief, the same screening, the same partner from first call to start
            date.
          </p>
          <div className="svcx-cta">
            <Link className="btn-hp" href={routes.hireTalent}>Talk to an expert <ArrowIco /></Link>
            <a className="btn-hg" href="#compare">Compare the models</a>
          </div>
        </div>
      </section>

      <section className="svcx-cli">
        <div className="clients-label">Teams we recruit for</div>
        <LogoMarquee />
      </section>

      {/* THE SERVICES — media left, one service right, per the reference.
          Replaces the comparison table I had built here: showing all seven at
          once and then again one at a time would be the same data twice on one
          page, which is exactly what this rebuild is removing. The three facts
          a buyer compares on ride inside each panel instead. */}
      <section className="svcx-cmp" id="compare">
        <div className="svcx-wrap">
          <div className="eyebrow" style={{ marginBottom: 18 }}>Which one fits</div>
          <h2 className="svcx-h2">Start with the problem,<br /><em>not the product.</em></h2>
          <p className="svcx-sub">
            These overlap more than the names suggest, and the wrong one is
            expensive in a way that does not show up until month three.
          </p>
          <ServiceCarousel />
        </div>
      </section>

      {/* HOW A SEARCH RUNS — deliberately compact. The full version, with the
          artefact from each stage, is the approach section on the home page.
          Repeating it in full here is what made the old page a second home
          page. */}
      <section className="svcx-run">
        <div className="svcx-wrap">
          <div className="eyebrow" style={{ marginBottom: 18 }}>The same, every time</div>
          <h2 className="svcx-h2 svcx-h2-sm">However you engage us,<br /><em>the search runs the same way.</em></h2>
          <ol className="svcx-stages">
            {[
              ["Understand the brief", "One call with the hiring manager and the partner who runs the search."],
              ["Source", "Referrals, direct approach and people we already know — not job boards."],
              ["Screen", "Brief, right to work, availability and rate, all checked before you see a name."],
              ["Submit", "A shortlist with a written view attached, including what is not a perfect fit."],
              ["Place and support", "Offer, onboarding handover, and check-ins with both sides afterwards."],
            ].map(([t, d], i) => (
              <li key={t}>
                <span className="svcx-stn">{String(i + 1).padStart(2, "0")}</span>
                <b>{t}</b>
                <span className="svcx-std">{d}</span>
              </li>
            ))}
          </ol>
          <Link className="svcx-more" href={routes.home}>See what each stage produces <ArrowIco /></Link>
        </div>
      </section>

      <section className="svcx-faq">
        <div className="svcx-wrap svcx-wrap-narrow">
          <div className="eyebrow" style={{ marginBottom: 18 }}>Before you engage</div>
          <h2 className="svcx-h2 svcx-h2-sm">The commercial questions,<br /><em>answered properly.</em></h2>
          <Faq items={faqItems} />
        </div>
      </section>

      <section className="svcx-end inv">
        <div className="svcx-wrap">
          <h2 className="svcx-h2">Tell us the role.</h2>
          <p className="svcx-lead">
            We will come back with the structure we would use and what it would
            cost, before you commit to anything.
          </p>
          <div className="svcx-cta">
            <Link className="btn-hp" href={routes.hireTalent}>Talk to an expert <ArrowIco /></Link>
            <Link className="btn-hg" href={routes.contactUs}>Contact us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
