export type ArticleSection = { h: string; p: string[] };

/* THE LIBRARY TAXONOMY, at the client's request, replacing play/comp/market.
 *
 * ON "case": THE LIBRARY HOLDS NO CASE STUDIES, AND THIS TAB IS EMPTY BY
 * DESIGN. Nine of them used to sit in this file and were deleted because none
 * of the engagements happened — invented clients ("Ontario Tier-1 bank",
 * "Dubai hospital group"), invented figures, and quotes attributed to officers
 * of companies that do not exist. The tab was asked for, so it is here and it
 * renders an honest empty state rather than being quietly dropped; what it
 * must never do is get refilled with the same material. The moment a client
 * signs off on a real engagement, it belongs here — with figures only if they
 * were actually recorded.
 *
 * The other three are a re-cut of the eight articles that exist, not new
 * writing: two salary guides, two interview guides, four blog posts. Nothing
 * was invented to populate a tab. */
export type Category = "blog" | "case" | "interview" | "salary";

export const CATEGORIES: { id: Category; label: string; plural: string }[] = [
  { id: "blog", label: "Blog", plural: "Blogs" },
  { id: "case", label: "Case study", plural: "Case studies" },
  { id: "interview", label: "Interview guide", plural: "Interview guides" },
  { id: "salary", label: "Salary guide", plural: "Salary guides" },
];

export type Article = {
  id: string;
  title: string;
  dek: string;
  /* ISO, for schema.org datePublished. `displayDate` is the same day written
     for a reader; they are kept side by side rather than derived so the
     rendered date cannot drift from the one handed to a search engine. */
  date: string;
  displayDate: string;
  readTime: string;
  category: Category;
  categoryLabel: string;
  /* Two or three words set into the card artwork. The card art used to be a
     bare gradient repeated on all eight cards; it carries the subject now, so
     each card is legible as a thing before the title is read. */
  kicker: string;
  sections: ArticleSection[];
};

/* THREE FIELDS WERE REMOVED FROM THIS TYPE, all of them unused:
 *
 *   image  — eight hotlinks to images.unsplash.com. Nothing rendered them:
 *            not the card grid, not the article page, not the home page's
 *            InsightsGrid, which says in its own header that it does not load
 *            them. Eight third-party URLs sitting in the bundle for nothing.
 *   tag    — byte-identical to categoryLabel in all eight entries.
 *   kind   — vestigial from when this array also held case studies.
 *
 * ON THE NUMBERS, which is the substantive change here.
 *
 * These articles carried figures presented as Rivago's own research: "the 312
 * technology mandates our practice is running right now", "thirty-four
 * partners across ten sectors", "eleven percent of our placements face a
 * counter-offer", "in our data ... roughly twice as likely", "our
 * submitted-to-offer ratio runs well above the industry norm", "in our own
 * post-mortems". None of it was measured. The same rule the rest of this site
 * is held to applies here with more force, not less: an article is the thing
 * that gets quoted, linked and indexed, and a fabricated statistic in one
 * travels further than the same statistic on a landing page.
 *
 * Every one of those is gone. The arguments survived losing them — they were
 * sound general-practice pieces with false precision applied on top, and what
 * is left is what the firm can actually stand behind. Where a claim is
 * genuinely external and checkable (UAE licensing bodies, how a 409A works,
 * the research on structured interviews) it stays.
 */

export const articles: Article[] = [
  {
    /* Was "What VP Engineering really pays in 2026 — across four markets",
       built on invented bands: $220-280k base, "10-15%" bonus, "closer to
       20%" at public companies, Canada "15-20% below". A compensation
       benchmark is nothing but its figures, so this one could not be fixed by
       deleting a sentence — it had to become the article that can be true.

       It is now about what DRIVES the spread rather than what the spread is.
       That is the more useful piece anyway: a reader who understands why two
       offers for the same title differ can read any number they are shown,
       and the piece does not go stale the moment the market moves. */
    id: "vp-eng-pay",
    title: "What actually moves VP Engineering pay",
    dek: "Stage, market and equity culture explain most of the spread in senior engineering comp. The variables to understand before you get to a number.",
    date: "2026-06-04",
    displayDate: "4 Jun 2026",
    readTime: "5 min read",
    category: "salary",
    categoryLabel: "Salary guide",
    kicker: "VP Engineering",
    sections: [
      {
        h: "Stage explains more than city",
        p: [
          "The instinct is to benchmark by location first. In practice, company stage moves a VP Engineering number further than the metro does. A Series B company and a listed one on the same street can be a long way apart on base and still compete for the same candidate, because base was never the whole conversation — it is one of three levers, and the other two move in the opposite direction as a company matures.",
          "Growth-stage companies tend to hold base down and pay in equity that might be worth a great deal or nothing. Public companies invert it: a higher, more certain cash package with a formal bonus plan, and stock that behaves like a slower, safer version of the same thing. Neither is generous or stingy. They are different bets, and a candidate choosing between them is choosing risk, not just pay.",
        ],
      },
      {
        h: "How the four markets differ",
        p: [
          "Across the markets we recruit into — the United States, Canada, the UAE and India — the differences are structural rather than a single adjustment you can apply. Canadian packages sit below equivalent US ones once currency is accounted for, though the gap narrows when benefits and cost of living come into it. The UAE pays base without income tax, which changes the comparison enough that a headline number means something different there than it does elsewhere.",
          "India is the market that has moved most. Senior engineering leadership at global-capability-centre scale now commands packages that would not have been recognisable as the same role a few years ago, and it has the widest internal range of the four.",
          "The thing that does not travel well between these markets is equity culture. It is assumed in the US and Canada, and far less established in the other two — so a candidate weighing a cross-border move should be comparing total structure, not converting one currency into another.",
        ],
      },
      {
        h: "Equity is where the variance lives",
        p: [
          "Most VP Engineering offers at venture-backed companies include a grant vesting over four years with a one-year cliff. What varies enormously is the strike price, the 409A valuation at grant, and — the part most often skipped — whether the company will let someone exercise options after leaving on anything other than the standard 90-day window.",
          "We walk VP-level candidates through the mechanics before an offer is extended, because a candidate who does not understand their own grant negotiates badly, accepts anxiously, and is more likely to leave once they finally read the paperwork.",
        ],
      },
    ],
  },
  {
    id: "offer-declined",
    title: "Why your last senior offer was declined — and the fix",
    dek: "The reasons strong candidates walk at the offer stage, and how to close the gap before it costs you the hire.",
    date: "2026-05-20",
    displayDate: "20 May 2026",
    readTime: "5 min read",
    category: "blog",
    categoryLabel: "Blog",
    kicker: "Offer stage",
    sections: [
      {
        h: "The decline rarely happens at the offer stage",
        p: [
          "By the time an offer is declined, the cause is usually two or three weeks old. A slow interview loop, a hiring manager who went quiet after the second round, a scorecard that shifted mid-process without anyone telling the candidate why — those are the drivers. The offer letter is only where the decision becomes visible.",
          /* Was: "In our data, candidates who wait more than five business
             days between interview rounds are roughly twice as likely to be
             actively engaging with a second process ... Momentum is ... the
             single biggest predictor we track." No such data exists. The
             point stands without the arithmetic. */
          "Every week a loop drags on is a week a strong candidate spends further into someone else's process, and the good ones are always in more than one. Momentum is not a soft factor — a candidate who has to wait to hear from you learns something about how the company makes decisions, and they are right to.",
        ],
      },
      {
        h: "The counter-offer conversation",
        p: [
          /* "Eleven percent of our placements face a counter-offer" was
             invented, as was "leave within twelve months at a markedly higher
             rate". The advice does not need either. */
          "Counter-offers are common enough at senior level that they should be planned for rather than reacted to. We raise it before an offer is extended, not after the counter lands — walking the candidate back through why they started looking, because more money from the current employer rarely addresses the reason someone opened themselves up to a new role in the first place.",
          "We say the same thing to both sides. A placement that boomerangs back to the old employer six months later has served nobody, and a candidate who takes a counter without thinking it through is usually having the same conversation again within the year.",
        ],
      },
      {
        h: "What actually moves the acceptance needle",
        p: [
          "Speed of decision, clarity of the comp structure — especially equity, where ambiguity kills more offers than the number itself — and, the most underrated of the three, whether the candidate has met the team they would actually work with rather than only the hiring manager.",
        ],
      },
    ],
  },
  {
    id: "job-brief",
    title: "How to write a job brief that attracts senior talent",
    dek: "Most briefs repel the exact people you want. Here is the structure that pulls passive candidates into the room.",
    date: "2026-05-14",
    displayDate: "14 May 2026",
    readTime: "7 min read",
    category: "interview",
    categoryLabel: "Interview guide",
    kicker: "The intake call",
    sections: [
      {
        h: "The job description is not the brief",
        p: [
          "A job description tells a candidate what the role is. A hiring brief tells a recruiter what to say no to. Those are different documents, and conflating them is the most common reason a search stalls at week three with a stack of technically-qualified CVs that all feel wrong.",
          "The brief should name the must-haves separately from the nice-to-haves, in writing, agreed by every person in the interview loop before sourcing starts — not negotiated candidate by candidate as profiles come in.",
        ],
      },
      {
        h: "What we ask for in the intake call",
        p: [
          "Three things consistently separate a fast search from a slow one: a real comp band rather than an aspirational one, an honest account of why the seat is open — backfill, growth and restructure each attract a different pool — and a named decision-maker who can say yes without a second committee meeting.",
          "We also ask for the off-limits list explicitly: companies or specific people not to be approached, for conflict-of-interest or relationship reasons. Skipping that step is how a search accidentally burns a client relationship in month two.",
        ],
      },
      {
        h: "The scorecard, not the wish list",
        p: [
          /* Dropped: "which is also why our submitted-to-offer ratio runs well
             above the industry norm" — an unmeasured performance claim, and
             the paragraph closes harder without it. */
          "A scorecard turns a wish list into something a panel can evaluate against consistently, across every candidate. We write it collaboratively in the intake session and use it as the shared instrument for the whole loop, which is what makes calibration possible later: when a hiring manager reacts to the first three profiles, we can adjust the brief with confidence, because everyone knows exactly what was being measured.",
        ],
      },
    ],
  },
  {
    id: "equity-explained",
    title: "Equity, explained: reading a senior offer before you sign",
    dek: "Options vs RSUs, strike prices, cliffs and refreshers — a plain-English guide for candidates weighing an offer.",
    date: "2026-05-06",
    displayDate: "6 May 2026",
    readTime: "9 min read",
    category: "salary",
    categoryLabel: "Salary guide",
    kicker: "Equity at offer",
    sections: [
      {
        h: "The four-year, one-year-cliff standard",
        p: [
          "The overwhelming majority of equity grants at venture-backed companies vest over four years with a one-year cliff — nothing vests until the twelve-month mark, then a quarter vests at once, with the remainder vesting monthly or quarterly afterwards. Leaving before month twelve typically means walking away with no equity at all.",
        ],
      },
      {
        h: "Strike price and the 409A valuation",
        p: [
          "The strike price — what it costs to actually exercise an option — is set at the 409A valuation at the time of grant, a formal appraisal meant to reflect the fair market value of common stock, usually a fraction of the preferred-share price investors pay. A lower strike price at grant is generally better for the candidate, because the spread between it and the eventual sale price is where the value sits.",
          "Ask directly for the current strike price and the date of the last 409A. A company that cannot answer quickly is worth a second look.",
        ],
      },
      {
        h: "The post-departure exercise window",
        p: [
          "Standard practice sets a 90-day window to exercise vested options after leaving, after which unexercised options are typically forfeited. A growing number of companies now offer extended windows — some as long as ten years — which materially changes the calculus of ever leaving. It is one of the highest-leverage and lowest-cost things a candidate can negotiate, and one of the least often asked for.",
        ],
      },
    ],
  },
  {
    id: "uae-licensing",
    title: "Hiring across the UAE: the licensing maze, simplified",
    dek: "DHA, DOH and MOH registration, visa timelines and relocation — what a US or Canadian company needs to know before hiring in the Gulf.",
    date: "2026-04-28",
    displayDate: "28 Apr 2026",
    readTime: "5 min read",
    category: "blog",
    categoryLabel: "Blog",
    kicker: "UAE licensing",
    sections: [
      {
        h: "Start with the sector, not the visa",
        p: [
          "Companies hiring into the UAE for the first time usually open with visa sponsorship, when the harder question is almost always sector licensing. Healthcare roles in Dubai and the northern emirates generally require DHA (Dubai Health Authority) registration; Abu Dhabi runs the equivalent DOH pathway. Financial services roles inside free zones such as DIFC or ADGM answer to a different regulator entirely than a mainland UAE entity does.",
          "Getting the licensing pathway wrong does not just delay a start date. In clinical roles particularly, it can mean a candidate cannot legally begin work at all, however strong the offer they have signed.",
        ],
      },
      {
        h: "Mainland versus free zone",
        p: [
          "A mainland UAE entity operates under MOHRE (Ministry of Human Resources and Emiratisation) labour law, while free-zone entities operate under their own authority with separate employment rules. The two structures also carry different Emiratisation obligations depending on company size and sector.",
        ],
      },
      {
        h: "What we handle end to end",
        p: [
          "For every UAE placement, licensing verification happens before a candidate is submitted rather than after an offer is accepted. We coordinate DHA and equivalent registration transfers with the relevant authority, track visa and Emirates ID timelines against the agreed start date, and flag a credential gap early enough for it to be fixed rather than discovered on day one.",
        ],
      },
    ],
  },
  {
    id: "structured-interviews",
    title: "Structured interviews that actually predict performance",
    dek: "Why the unstructured “culture chat” fails, and the scorecard model we run on every Rivago search.",
    date: "2026-04-19",
    displayDate: "19 Apr 2026",
    readTime: "6 min read",
    category: "interview",
    categoryLabel: "Interview guide",
    kicker: "The scorecard",
    sections: [
      {
        h: "What 'structured' actually means",
        p: [
          "A structured interview asks every candidate the same set of pre-agreed questions, scored against a pre-agreed rubric, by interviewers who settled on what a strong answer looks like before the first candidate walked in. It removes the largest single source of noise in hiring decisions: different interviewers quietly grading against different, unstated standards.",
        ],
      },
      {
        h: "Why unstructured interviews fail quietly",
        p: [
          /* "decades of research showing it is one of the weakest predictors"
             is a real and well-replicated finding in the selection literature,
             so it stays — but stated as what the research says rather than
             with a borrowed air of precision. */
          "An unstructured chemistry interview feels more natural and is far easier to run, which is why it persists despite a long and consistent research literature finding structured formats to be the better predictor of on-the-job performance. It also opens the door to affinity bias: interviewers tend to rate candidates more favourably when the conversation feels comfortable, and comfort correlates with shared background more readily than with shared capability.",
        ],
      },
      {
        h: "How we run it",
        p: [
          "Every screen we conduct uses the scorecard built in the client's intake session as the interview instrument — the same core questions, every candidate, every time. That is also what makes calibration work: when a hiring manager sees the first three profiles and reacts, the brief can be adjusted with confidence, because everyone knows what was being measured to begin with.",
        ],
      },
    ],
  },
  {
    id: "anti-portal",
    title: "The anti-portal manifesto: why partner-led search wins",
    dek: "Job boards optimise for volume. Senior hiring rewards judgement. Here is the case for a named partner over a platform.",
    date: "2026-04-08",
    displayDate: "8 Apr 2026",
    readTime: "4 min read",
    category: "blog",
    categoryLabel: "Blog",
    kicker: "Partner-led search",
    sections: [
      {
        h: "What a portal actually optimises for",
        p: [
          /* optimizes/maximize corrected. The dek of this very article said
             "optimise" while its first heading said "optimizes" — the two
             spellings were eighty characters apart. */
          "A job portal is built to maximise volume: the number of applicants, the number of postings, the number of clicks. Volume is a fine metric if you are selling advertising space. It is a poor proxy for whether the right person for a Director of Finance role in Wilmington ever sees the posting, let alone applies to it.",
          "We do not run one. There is no self-serve dashboard, no automated matching algorithm, no queue of inbound applicants a junior recruiter triages before a human decision gets made. Every search starts with a partner reading the actual brief and thinking about actual people they know or can find, rather than a keyword match against a CV database.",
        ],
      },
      {
        h: "The cost of doing it this way",
        p: [
          /* Was: "A partner who has recruited in aerospace for eleven years is
             expensive to develop ... We have thirty-four of them across ten
             sectors". Both numbers invented, and the second is the kind of
             checkable business fact a reader would take at face value. The
             argument is about the nature of the bench, not its size. */
          "It is genuinely slower to build a practice this way. Sector judgement is expensive to develop and impossible to fake with software — a partner who has spent years recruiting into aerospace knows things about that market that no database contains, and the only way to get one is to have spent the years.",
        ],
      },
      {
        h: "What it buys the client",
        p: [
          "One senior partner owns your search from brief to signed offer: no handoff to business development, no relay through an account manager, no call centre reading from a script when you ring with a question. When something changes mid-search, you are talking to the person running it, the same day, every time.",
        ],
      },
    ],
  },
  {
    id: "bad-hire-cost",
    title: "The real cost of a bad senior hire",
    dek: "Salary is the smallest line item. We break down the true cost — ramp, morale, opportunity — of getting a leadership hire wrong.",
    date: "2026-04-01",
    displayDate: "1 Apr 2026",
    readTime: "8 min read",
    category: "blog",
    categoryLabel: "Blog",
    kicker: "Cost of a mis-hire",
    sections: [
      {
        h: "The number most companies underestimate",
        p: [
          "Direct costs — recruiting fees, onboarding, severance — are the easiest to count and the smallest part of the total. The larger costs are indirect: the hiring manager's time re-running the search, the team's time re-training a replacement, and the productivity gap while a seat sits effectively unowned through a bad hire's slow decline and eventual exit.",
        ],
      },
      {
        h: "The trust cost nobody puts on a spreadsheet",
        p: [
          /* "measurably more skeptical" — nothing was measured, and the word
             was doing the work of evidence. Also the US spelling. */
          "A mis-hire at senior level damages more than the org chart. A team that watches a leader hired with fanfare quietly exit within six months becomes more sceptical of the next hiring announcement, and that scepticism shows up later as slower ramp times and quieter internal referrals.",
        ],
      },
      {
        h: "Where the mis-hire actually starts",
        p: [
          /* Was "In our own post-mortems on searches that didn't work out, the
             root cause traces back to the brief stage far more often than the
             interview stage" — presented as internal research, and there is
             none. Restated as the argument it was standing in for. */
          "Senior mis-hires are usually traceable to the brief rather than the interview. A scorecard vague enough to let a wrong-fit candidate through, or a must-have quietly downgraded to a nice-to-have under time pressure, does its damage months before anyone sits in a room together. That is the direct argument for settling the bar in writing at the start — and for the replacement guarantee we build into every retained and contingent engagement.",
        ],
      },
    ],
  },
];

/* The featured slot is now a REFERENCE to a real article rather than a
   separate literal.
 *
 * It used to be its own object with a title, a dek, a read time and a date,
 * and it described an article that did not exist anywhere in this array — so
 * the largest element on /resources was a card for something a reader could
 * not go and read. It rendered as a div with no href and no link inside it.
 *
 * Its headline was also "How we deliver five screened candidates in two days"
 * and its dek "the first 48 hours of a search". That is the same unmeasured
 * delivery promise already flagged on /hire-talent, and it contradicts what
 * the FAQ on the home page says about timelines. Nothing replaced it, because
 * the honest version of that article is one nobody has written yet.
 *
 * Pointing at an id means the featured card can never again describe an
 * article that is not there, and its tag, read time and date come from the
 * same row the archive below is reading. */
export const FEATURED_ID = "job-brief";

export const featuredArticle: Article =
  articles.find((a) => a.id === FEATURED_ID) ?? articles[0];

/* The nine case studies stood here, plus featuredCaseStudy above and the
   CaseStudy type and findCaseStudy below.

   Removed because none of the engagements happened. They carried invented
   clients ("Ontario Tier-1 bank", "Dubai hospital group", "$1.2B
   distributor"), invented figures (14 placements, 60-day cycles, $420K and
   $580K comp, "0 Replacements", "100% 12-mo stick") and quotes attributed
   to officers of companies that do not exist. The featured one claimed 38
   of 40 offers accepted by day 89 and 100% six-month retention.

   /resources is an articles library now. Rivago has written work; it does
   not yet have a client who has signed off on a published engagement. When
   one does, a case study belongs here again — with figures only if they
   were actually recorded. */

/* Returns undefined for an id that does not exist, so the route can answer
   404. It used to fall back to articles[0], which meant every misspelt or
   invented id — /resources/article?id=anything — served the first article at
   HTTP 200 under a canonical tag pointing at itself. That is an unbounded
   set of duplicate URLs for a crawler to find, and a reader following a
   broken link was shown a different article with no indication anything had
   gone wrong. */
export function findArticle(id: string | null | undefined): Article | undefined {
  return id ? articles.find((a) => a.id === id) : undefined;
}
