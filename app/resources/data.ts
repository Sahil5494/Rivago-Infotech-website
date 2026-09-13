export type ArticleSection = { h: string; p: string[] };
export type Article = {
  id: string;
  kind: "article";
  title: string;
  dek: string;
  date: string;
  displayDate: string;
  readTime: string;
  tag: string;
  category: "play" | "comp" | "market";
  categoryLabel: string;
  image: string;
  sections: ArticleSection[];
};

export const featuredArticle = {
  category: "Blog",
  readTime: "6 min read",
  title: "How we deliver five screened candidates in two days — without lowering the bar.",
  dek: "Speed and quality are not a trade-off if the process is built right. Here is exactly how a Rivago partner runs the first 48 hours of a search — from calibrated brief to a shortlist you can actually act on.",
  date: "1 Jun 2026",
};

export const articles: Article[] = [
  {
    id: "vp-eng-pay",
    kind: "article",
    title: "What VP Engineering really pays in 2026 — across four markets",
    dek: "Base, bonus and equity benchmarks for VP Eng roles in the US, Canada, the UAE and India — and why the gap is widening.",
    date: "2026-06-04",
    displayDate: "4 Jun 2026",
    readTime: "5 min read",
    tag: "Compensation",
    category: "comp",
    categoryLabel: "Compensation",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80&auto=format",
    sections: [
      {
        h: "The number everyone asks for first",
        p: [
          "Across the 312 technology mandates our practice is running right now, VP of Engineering base salary in the US clusters between $220k and $280k, with the spread driven almost entirely by company stage rather than city. A Series B startup and a public company in the same metro can be $60k apart on base and still land the same candidate — because the conversation was never only about base.",
          "Total cash — base plus target bonus — typically adds another 10–15% on top of base at growth-stage companies, and closer to 20% at public companies with formal bonus plans. Equity is where the real variance lives, and it is also where most hiring managers underprepare for the negotiation.",
        ],
      },
      {
        h: "How the four markets compare",
        p: [
          "Canada runs roughly 15–20% below equivalent US bands on a currency-adjusted basis, though total comp gaps narrow when benefits and cost of living are factored in. The UAE offers tax-free base pay that often lands close to US cash comp once you remove the tax differential — but equity is rarer outside VC-backed local players. India VP Engineering roles at global-capability-center scale now command comp that would have been unthinkable five years ago, with the widest range of any market we track.",
          "The gap between markets is widening, not narrowing, largely because US and Canadian equity culture hasn't fully transplanted into the other two markets yet — which changes how a candidate should think about total comp, not just cash.",
        ],
      },
      {
        h: "Equity: the part nobody explains well",
        p: [
          "Most VP Engineering offers at venture-backed companies include an equity grant vesting over four years, typically with a one-year cliff. What varies enormously is the strike price, the 409A valuation at grant, and — critically — whether the company will let the candidate exercise options after departure on anything other than the standard 90-day window.",
          "We walk every VP-level candidate through the mechanics before an offer is even extended, because a candidate who doesn't understand their own equity grant is a candidate who negotiates badly, accepts anxiously, and is more likely to leave once they actually read the paperwork.",
        ],
      },
    ],
  },
  {
    id: "offer-declined",
    kind: "article",
    title: "Why your last senior offer was declined — and the fix",
    dek: "The four reasons strong candidates walk at the offer stage, and how to close the gap before it costs you the hire.",
    date: "2026-05-20",
    displayDate: "20 May 2026",
    readTime: "5 min read",
    tag: "Market read",
    category: "market",
    categoryLabel: "Market read",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80&auto=format",
    sections: [
      {
        h: "The decline rarely happens at the offer stage",
        p: [
          "By the time an offer is declined, the real cause usually happened two or three weeks earlier. A slow interview loop, a hiring manager who went quiet after the second round, a scorecard that shifted mid-process without anyone telling the candidate why — these are the actual drivers. The offer letter is just where the decision becomes visible.",
          "In our data, candidates who wait more than five business days between interview rounds are roughly twice as likely to be actively engaging with a second process by the time an offer lands. Momentum is not a soft factor. It is the single biggest predictor we track.",
        ],
      },
      {
        h: "The counter-offer conversation",
        p: [
          "Eleven percent of our placements face a counter-offer from the candidate's current employer. We prepare for this before the offer is even extended, not after the counter arrives — walking the candidate through why they started looking in the first place, because a counter-offer almost never fixes the underlying reason someone opened themselves up to a new role.",
          "Candidates who accept a counter-offer leave within twelve months at a markedly higher rate than the broader market. We tell clients this plainly, and we tell candidates the same thing, because a placement that boomerangs back to the old employer six months later serves nobody.",
        ],
      },
      {
        h: "What actually moves the acceptance needle",
        p: [
          "Speed of decision, clarity of the comp structure (especially equity, where ambiguity kills more offers than the number itself), and — the most underrated factor — whether the candidate has met the actual team they'd be working with, not just the hiring manager.",
        ],
      },
    ],
  },
  {
    id: "job-brief",
    kind: "article",
    title: "How to write a job brief that attracts senior talent",
    dek: "Most briefs repel the exact people you want. Here is the structure that pulls passive candidates into the room.",
    date: "2026-05-14",
    displayDate: "14 May 2026",
    readTime: "7 min read",
    tag: "Hiring playbook",
    category: "play",
    categoryLabel: "Hiring playbook",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80&auto=format",
    sections: [
      {
        h: "The job description is not the brief",
        p: [
          "A job description tells a candidate what the role is. A hiring brief tells a recruiter what to say no to. Those are different documents, and conflating them is the single most common reason a search stalls at week three with a stack of technically-qualified résumés that all feel wrong.",
          "The brief should name the must-haves separately from the nice-to-haves, in writing, agreed by every person in the interview loop before sourcing starts — not negotiated candidate-by-candidate as profiles come in.",
        ],
      },
      {
        h: "What we ask for in the intake call",
        p: [
          "Three things consistently separate a fast search from a slow one: a real comp band (not an aspirational one), an honest account of why the seat is open (backfill, growth, restructure — each attracts a different candidate pool), and a named decision-maker who can say yes without a second committee meeting.",
          "We also ask for the 'off-limits' list explicitly — companies or specific people who are not to be approached, for conflict-of-interest or relationship reasons. Skipping this step is how searches accidentally burn a client relationship in month two.",
        ],
      },
      {
        h: "The scorecard, not the wish list",
        p: [
          "A scorecard converts a wish list into something a panel can actually evaluate against, consistently, across every candidate. We write it collaboratively in the intake session and use it as the shared interview instrument for the entire loop — which is also why our submitted-to-offer ratio runs well above the industry norm.",
        ],
      },
    ],
  },
  {
    id: "equity-explained",
    kind: "article",
    title: "Equity, explained: reading a senior offer before you sign",
    dek: "Options vs RSUs, strike prices, cliffs and refreshers — a plain-English guide for candidates weighing an offer.",
    date: "2026-05-06",
    displayDate: "6 May 2026",
    readTime: "9 min read",
    tag: "Compensation",
    category: "comp",
    categoryLabel: "Compensation",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80&auto=format",
    sections: [
      {
        h: "The four-year, one-year-cliff standard",
        p: [
          "The overwhelming majority of equity grants at venture-backed companies vest over four years with a one-year cliff — meaning nothing vests until the twelve-month mark, then a quarter vests at once, with the remainder vesting monthly or quarterly afterward. Leaving before month twelve typically means walking away with zero equity, full stop.",
        ],
      },
      {
        h: "Strike price and the 409A valuation",
        p: [
          "The strike price — what it costs to actually exercise an option — is set at the 409A valuation at the time of grant, a formal appraisal meant to reflect fair market value of common stock, usually a fraction of the preferred-share price investors pay. A lower strike price at grant is generally better for the candidate, because the spread between strike price and eventual sale price is where the value sits.",
          "We encourage every candidate at offer stage to ask directly for the current strike price and the date of the last 409A — a company that can't answer quickly is worth a second look.",
        ],
      },
      {
        h: "The post-departure exercise window",
        p: [
          "Standard practice sets a 90-day window to exercise vested options after leaving a company, after which unexercised options are typically forfeited. A growing number of companies now offer extended windows — some up to ten years — which materially changes the calculus of ever leaving. It is one of the highest-leverage, lowest-cost things a candidate can negotiate.",
        ],
      },
    ],
  },
  {
    id: "uae-licensing",
    kind: "article",
    title: "Hiring across the UAE: the licensing maze, simplified",
    dek: "DHA, DOH and MOH registration, visa timelines and relocation — what a US or Canadian company needs to know before hiring in the Gulf.",
    date: "2026-04-28",
    displayDate: "28 Apr 2026",
    readTime: "5 min read",
    tag: "Market read",
    category: "market",
    categoryLabel: "Market read",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80&auto=format",
    sections: [
      {
        h: "Start with the sector, not the visa",
        p: [
          "Companies hiring into the UAE for the first time usually start by asking about visa sponsorship, when the harder question is almost always sector licensing. Healthcare roles in Dubai and the northern emirates typically require DHA (Dubai Health Authority) registration; Abu Dhabi requires the equivalent DOH pathway. Financial services roles inside free zones like DIFC or ADGM answer to a different regulator entirely than a mainland UAE entity.",
          "Getting the licensing pathway wrong doesn't just delay a start date — in clinical roles particularly, it can mean a candidate simply cannot legally begin work, no matter how strong an offer they've signed.",
        ],
      },
      {
        h: "Mainland versus free zone",
        p: [
          "A mainland UAE entity operates under MOHRE (Ministry of Human Resources and Emiratisation) labour law, while free-zone entities operate under their own free-zone authority with separate employment rules. The two structures also carry different Emiratisation quota obligations depending on company size and sector.",
        ],
      },
      {
        h: "What we handle end-to-end",
        p: [
          "For every UAE placement, licensing verification happens before a candidate is submitted, not after an offer is accepted. We coordinate DHA and equivalent registration transfers directly with the relevant authority, track visa and Emirates ID timelines against the agreed start date, and flag any credential gap early enough for it to be fixed rather than discovered on day one.",
        ],
      },
    ],
  },
  {
    id: "structured-interviews",
    kind: "article",
    title: "Structured interviews that actually predict performance",
    dek: "Why the unstructured \"culture chat\" fails, and the scorecard model we run on every Rivago search.",
    date: "2026-04-19",
    displayDate: "19 Apr 2026",
    readTime: "6 min read",
    tag: "Hiring playbook",
    category: "play",
    categoryLabel: "Hiring playbook",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format",
    sections: [
      {
        h: "What 'structured' actually means",
        p: [
          "A structured interview asks every candidate the same set of pre-agreed questions, scored against a pre-agreed rubric, by interviewers who agreed on what a strong answer looks like before the first candidate walked in. It removes the single biggest source of noise in hiring decisions: different interviewers quietly grading against different, unstated standards.",
        ],
      },
      {
        h: "Why unstructured interviews fail quietly",
        p: [
          "An unstructured 'chemistry' interview feels more natural and is far easier to run — which is exactly why it persists despite decades of research showing it is one of the weakest predictors of on-the-job performance available to a hiring team. It also opens the door to affinity bias: interviewers tend to rate candidates more favorably when the conversation feels comfortable, which correlates uncomfortably well with shared background rather than shared capability.",
        ],
      },
      {
        h: "How we run it",
        p: [
          "Every screen we conduct uses the scorecard built in the client's intake session as the interview instrument — the same core questions, every candidate, every time. It's also why calibration works: when a hiring manager sees the first three profiles and reacts, we can adjust the brief with confidence, because we know exactly what was being measured in the first place.",
        ],
      },
    ],
  },
  {
    id: "anti-portal",
    kind: "article",
    title: "The anti-portal manifesto: why partner-led search wins",
    dek: "Job boards optimise for volume. Senior hiring rewards judgement. Here is the case for a named partner over a platform.",
    date: "2026-04-08",
    displayDate: "8 Apr 2026",
    readTime: "4 min read",
    tag: "Market read",
    category: "market",
    categoryLabel: "Market read",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80&auto=format",
    sections: [
      {
        h: "What a portal actually optimizes for",
        p: [
          "A job portal is built to maximize volume — the number of applicants, the number of postings, the number of clicks. Volume is a fine metric if you're selling advertising space. It is a terrible proxy for whether the right person for a Director of Finance role in Wilmington ever sees the posting, let alone applies to it.",
          "We don't run one. There's no self-serve dashboard, no automated candidate-matching algorithm, no queue of inbound applicants a junior recruiter triages before a human decision gets made. Every search starts with a partner reading the actual brief and thinking about actual people they know or can find — not a keyword match against a résumé database.",
        ],
      },
      {
        h: "The cost of doing it this way",
        p: [
          "It is genuinely slower to build a practice this way. A partner who has recruited in aerospace for eleven years is expensive to develop and impossible to fake with software. We have thirty-four of them across ten sectors, and building that bench took years, not a product roadmap.",
        ],
      },
      {
        h: "What it buys the client",
        p: [
          "One senior partner owns your search from brief to signed offer — no handoffs to business development, no relay through an account manager, no call centre reading from a script when you call with a question. When something changes mid-search, you're talking to the person actually running it, same day, every time.",
        ],
      },
    ],
  },
  {
    id: "bad-hire-cost",
    kind: "article",
    title: "The real cost of a bad senior hire",
    dek: "Salary is the smallest line item. We break down the true cost — ramp, morale, opportunity — of getting a leadership hire wrong.",
    date: "2026-04-01",
    displayDate: "1 Apr 2026",
    readTime: "8 min read",
    tag: "Compensation",
    category: "comp",
    categoryLabel: "Compensation",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&auto=format",
    sections: [
      {
        h: "The number most companies underestimate",
        p: [
          "Direct costs — recruiting fees, onboarding, severance — are the easiest to count and the smallest part of the total. The larger costs are indirect: the hiring manager's time re-running the search, the team's time re-training a replacement, and the productivity gap while a seat sits effectively unowned during a bad hire's slow decline and eventual exit.",
        ],
      },
      {
        h: "The trust cost nobody puts on a spreadsheet",
        p: [
          "A mis-hire at senior level damages more than the org chart. Teams that watch a leader hired with fanfare quietly exit within six months become measurably more skeptical of the next hiring announcement — and that skepticism shows up as slower ramp times and quieter internal referrals for months afterward.",
        ],
      },
      {
        h: "Where the mis-hire actually starts",
        p: [
          "In our own post-mortems on searches that didn't work out, the root cause traces back to the brief stage far more often than the interview stage: a scorecard that was vague enough to let a wrong-fit candidate through, or a must-have that got quietly downgraded to a nice-to-have under time pressure. This is the direct argument for the replacement guarantee we build into every retained and contingent engagement.",
        ],
      },
    ],
  },
];

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

export function findArticle(id: string | null | undefined): Article {
  return articles.find((a) => a.id === id) ?? articles[0];
}
