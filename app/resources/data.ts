export type ArticleSection = { h: string; p: string[] };
export type Article = {
  id: string;
  kind: "article";
  title: string;
  dek: string;
  byline: string;
  date: string;
  readTime: string;
  tag: string;
  sections: ArticleSection[];
};

export type CaseStudy = {
  id: string;
  kind: "case-study";
  title: string;
  eyebrow: string;
  dek: string;
  stats: [string, string][];
  challenge: string[];
  whatWeDid: string[];
  outcome: string[];
  quote: string;
  quoteAttribution: string;
  atGlance: [string, string][];
};

export const articles: Article[] = [
  {
    id: "vp-engineering-pay",
    kind: "article",
    title: "What VP of Engineering roles actually pay in 2026",
    dek: "Base, bonus and equity, broken down by company stage — pulled from 312 active mandates, not a survey.",
    byline: "Rivago Editorial Team",
    date: "2026-08-11",
    readTime: "6 min read",
    tag: "Compensation",
    sections: [
      {
        h: "The number everyone asks for first",
        p: [
          "Across the 312 technology mandates our practice is running right now, VP of Engineering base salary in the US clusters between $220k and $280k, with the spread driven almost entirely by company stage rather than city. A Series B startup and a public company in the same metro can be $60k apart on base and still land the same candidate — because the conversation was never only about base.",
          "Total cash — base plus target bonus — typically adds another 10–15% on top of base at growth-stage companies, and closer to 20% at public companies with formal bonus plans. Equity is where the real variance lives, and it is also where most hiring managers underprepare for the negotiation.",
        ],
      },
      {
        h: "Why the 'market rate' question is the wrong one",
        p: [
          "Hiring managers frequently ask us for 'the market rate' for a role, as if there were one number. There isn't. What there is instead is a band, and where a specific candidate sits inside that band depends on scope (how many engineers, how many time zones), scarcity (is this a generalist VP or one who has actually run infrastructure at your scale before) and leverage (how many other offers are realistically in play for this person right now).",
          "We build the band from live data — what our own practice is seeing accepted, in real time, inside the sector — rather than from a compensation survey that was collected eighteen months ago and averaged across every industry. A stale numbers gives you false confidence walking into an offer conversation.",
        ],
      },
      {
        h: "Equity: the part nobody explains well",
        p: [
          "Most VP Engineering offers at venture-backed companies include an equity grant vesting over four years, typically with a one-year cliff. What varies enormously is the strike price, the 409A valuation at grant, and — critically — whether the company will let the candidate exercise options after departure on anything other than the standard 90-day window.",
          "We walk every VP-level candidate through the mechanics before an offer is even extended, because a candidate who doesn't understand their own equity grant is a candidate who negotiates badly, accepts anxiously, and is more likely to leave once they actually read the paperwork. Fewer surprises at signing means fewer surprises at month six.",
        ],
      },
    ],
  },
  {
    id: "48-hour-shortlist",
    kind: "article",
    title: "Inside the 48-hour shortlist",
    dek: "What actually happens in the two days between a signed brief and three names in your inbox.",
    byline: "Rivago Editorial Team",
    date: "2026-07-28",
    readTime: "5 min read",
    tag: "How we work",
    sections: [
      {
        h: "It starts before the clock does",
        p: [
          "The 48-hour number gets treated like a magic trick, so it's worth explaining plainly: the clock starts the moment the brief and scorecard are signed off, not the moment you first mention you might be hiring. Everything before that — the intake call, the comp benchmarking, the calibration on must-haves versus nice-to-haves — happens first, and it's what makes the 48 hours possible rather than reckless.",
          "A partner who already runs your sector walks into that intake call with a rough mental shortlist already forming. That's the actual unlock. Speed isn't a function of working faster; it's a function of not starting from zero.",
        ],
      },
      {
        h: "What happens in the 48 hours",
        p: [
          "Hour one to twelve: the research team activates the longlist — 40 to 80 names pulled from competitor org charts, alumni networks and our private candidate database, cross-checked against who has moved recently and who hasn't. Hour twelve to thirty-two: bespoke outreach, one message per candidate, no copy-paste sequence. Our average reply rate on that outreach sits at 38%, against an industry baseline closer to 9%, because the message references something specific about the person, not the role.",
          "Hour thirty-two to forty-eight: structured screens against your scorecard, and the three strongest, most on-brief candidates get written up and sent — with a one-paragraph rationale for each, not just a résumé attachment.",
        ],
      },
      {
        h: "The honest caveat",
        p: [
          "48 hours is a median for roles inside a partner's active sector, at manager-to-senior individual contributor level. Confidential executive searches and highly specialized technical mandates run longer by design — we'd rather tell you three weeks up front than promise 48 hours and deliver a rushed shortlist that wastes your first interview slot.",
        ],
      },
    ],
  },
  {
    id: "why-offers-get-declined",
    kind: "article",
    title: "Why offers get declined — and how to stop it",
    dek: "Eleven percent of our offers face a counter. Here's what separates the ones that survive from the ones that don't.",
    byline: "Rivago Editorial Team",
    date: "2026-07-14",
    readTime: "7 min read",
    tag: "Offer strategy",
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
          "Candidates who accept a counter-offer leave within twelve months at a markedly higher rate than the broader market, in study after study. We tell clients this plainly, and we tell candidates the same thing, because a placement that boomerangs back to the old employer six months later serves nobody.",
        ],
      },
      {
        h: "What actually moves the acceptance needle",
        p: [
          "Speed of decision, clarity of the comp structure (especially equity, where ambiguity kills more offers than the number itself), and — the most underrated factor — whether the candidate has met the actual team they'd be working with, not just the hiring manager. Offers extended after a candidate has spent even thirty minutes with future peers accept at a meaningfully higher rate in our own placement history.",
        ],
      },
    ],
  },
  {
    id: "writing-a-hiring-brief",
    kind: "article",
    title: "How to write a hiring brief a recruiter can actually use",
    dek: "Most briefs are a job description with a deadline stapled on. Here's what belongs in one instead.",
    byline: "Rivago Editorial Team",
    date: "2026-06-30",
    readTime: "5 min read",
    tag: "Hiring playbook",
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
          "A scorecard converts a wish list into something a panel can actually evaluate against, consistently, across every candidate. We write it collaboratively in the intake session and use it as the shared interview instrument for the entire loop — which is also why our submitted-to-offer ratio runs well above the industry norm: everyone is grading against the same rubric from candidate one.",
        ],
      },
    ],
  },
  {
    id: "equity-compensation",
    kind: "article",
    title: "How equity compensation actually works",
    dek: "Vesting, cliffs, strike price and the questions candidates should ask before they sign — explained plainly.",
    byline: "Rivago Editorial Team",
    date: "2026-06-16",
    readTime: "8 min read",
    tag: "Compensation",
    sections: [
      {
        h: "The four-year, one-year-cliff standard",
        p: [
          "The overwhelming majority of equity grants at venture-backed companies vest over four years with a one-year cliff — meaning nothing vests until the twelve-month mark, then a quarter vests at once, with the remainder vesting monthly or quarterly afterward. Understanding this shapes how a candidate should think about an offer at all: leaving before month twelve typically means walking away with zero equity, full stop.",
        ],
      },
      {
        h: "Strike price and the 409A valuation",
        p: [
          "The strike price — what it costs to actually exercise an option — is set at the 409A valuation at the time of grant, a formal appraisal that is meant to reflect fair market value of common stock, usually a fraction of the preferred-share price investors pay. A lower strike price at grant is generally better for the candidate, because the spread between strike price and eventual sale price is where the value sits.",
          "We encourage every candidate at offer stage to ask directly for the current strike price and the date of the last 409A — a company that can't answer quickly is worth a second look.",
        ],
      },
      {
        h: "The post-departure exercise window",
        p: [
          "Standard practice sets a 90-day window to exercise vested options after leaving a company, after which unexercised options are typically forfeited. A meaningful and growing number of companies now offer extended windows — some up to ten years — which materially changes the calculus of ever leaving. It is one of the highest-leverage, lowest-cost things a candidate can negotiate, and one of the least frequently asked about.",
        ],
      },
    ],
  },
  {
    id: "uae-licensing",
    kind: "article",
    title: "Hiring in the UAE: what licensing actually requires",
    dek: "DHA, HAAD, MOHRE and free-zone rules — a working guide for companies hiring their first UAE team.",
    byline: "Rivago Editorial Team",
    date: "2026-06-02",
    readTime: "6 min read",
    tag: "UAE market",
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
          "A mainland UAE entity operates under MOHRE (Ministry of Human Resources and Emiratisation) labour law, while free-zone entities operate under their own free-zone authority with separate employment rules. The two structures also carry different Emiratisation quota obligations depending on company size and sector — a compliance detail that surprises a lot of first-time employers in the market.",
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
    title: "The case for structured interviews",
    dek: "Unstructured interviews are barely better than a coin flip at predicting job performance. The research is not close.",
    byline: "Rivago Editorial Team",
    date: "2026-05-19",
    readTime: "6 min read",
    tag: "Hiring playbook",
    sections: [
      {
        h: "What 'structured' actually means",
        p: [
          "A structured interview asks every candidate the same set of pre-agreed questions, scored against a pre-agreed rubric, by interviewers who agreed on what a strong answer looks like before the first candidate walked in. It is not a script read in a monotone — it's a discipline that removes the single biggest source of noise in hiring decisions: different interviewers quietly grading against different, unstated standards.",
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
    id: "anti-portal-manifesto",
    kind: "article",
    title: "The anti-portal manifesto",
    dek: "No call centres. No automated outreach. No portal. Here's what we do instead, and why it's slower to build and faster to run.",
    byline: "Rivago Editorial Team",
    date: "2026-05-05",
    readTime: "4 min read",
    tag: "Our approach",
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
    id: "cost-of-a-bad-hire",
    kind: "article",
    title: "The real cost of a bad hire",
    dek: "It's not the severance. A structured breakdown of what a mis-hire actually costs a team, in time and in trust.",
    byline: "Rivago Editorial Team",
    date: "2026-04-21",
    readTime: "6 min read",
    tag: "Hiring playbook",
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
          "A mis-hire at senior level damages more than the org chart. Teams that watch a leader hired with fanfare quietly exit within six months become measurably more skeptical of the next hiring announcement — and that skepticism shows up as slower ramp times and quieter internal referrals for months afterward. It is real, and it compounds.",
        ],
      },
      {
        h: "Where the mis-hire actually starts",
        p: [
          "In our own post-mortems on searches that didn't work out — including a small number of our own — the root cause traces back to the brief stage far more often than the interview stage: a scorecard that was vague enough to let a wrong-fit candidate through, or a must-have that got quietly downgraded to a nice-to-have under time pressure. This is the direct argument for the replacement guarantee we build into every retained and contingent engagement: if the process breaks, we own restarting it, at no additional charge.",
        ],
      },
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "toronto-bank-compliance",
    kind: "case-study",
    title: "Building a compliance team from one hire for a Toronto bank",
    eyebrow: "Canada · Financial Services",
    dek: "A single Director of Risk & Compliance hire became the foundation for a five-person function inside eight months.",
    stats: [["Foundational hire", "1 → 5"], ["Time to first hire", "24 days"], ["Team built out in", "8 months"]],
    challenge: [
      "A mid-size Ontario regional bank needed to stand up a fraud-risk and compliance function ahead of a regulatory deadline, but had no compliance leadership in place and a hiring manager stretched too thin to run a search personally. The bank had tried once before, through a national staffing portal, and had received forty résumés and zero candidates who actually met the regulatory licensing bar.",
      "The brief was narrow by design: someone who had built a compliance function from scratch before, not just operated inside one. That combination is rare, and rare candidates don't apply to job postings.",
    ],
    whatWeDid: [
      "Our finance practice partner mapped a longlist of compliance leaders at comparable regional and national banks who had personally stood up a function in the last five years — a specific, verifiable filter that immediately cut the pool to a workable size. Direct outreach, not a posting, generated the entire candidate pipeline.",
      "Three candidates were screened against a scorecard built jointly with the bank's Chief Risk Officer in the intake session, with reference checks going two levels deep — not just the candidate's most recent manager, but a peer from the function they'd built previously.",
      "The bank extended an offer to the strongest candidate 24 days after the brief was signed. Once she started, Rivago stayed engaged for the build-out that followed — sourcing the four additional hires who reported into her over the following eight months, each search run against a brief she helped write.",
    ],
    outcome: [
      "The full five-person compliance function was in place eight months after the initial Director hire, ahead of the bank's regulatory deadline. All five hires remain in place past their one-year mark, and the bank has since returned to Rivago for two additional confidential searches at the VP level.",
    ],
    quote: "They didn't just fill a seat — they helped us figure out the shape of the team we actually needed, then built it with us one hire at a time.",
    quoteAttribution: "Chief Risk Officer, Ontario regional bank",
    atGlance: [
      ["Client type", "Regional bank"],
      ["Industry", "Financial services"],
      ["Engagement", "Retained, expanded to embedded build-out"],
      ["Team size delivered", "5 hires over 8 months"],
    ],
  },
  {
    id: "uae-hospital-launch",
    kind: "case-study",
    title: "Staffing a second hospital launch in the UAE",
    eyebrow: "UAE · Healthcare",
    dek: "Eleven clinical and administrative hires, fully DHA-licensed, delivered against a fixed facility opening date.",
    stats: [["Clinical hires delivered", "11"], ["Compliance issues", "0"], ["Weeks ahead of opening", "3"]],
    challenge: [
      "A Dubai-based hospital group was opening a second facility with a hard opening date set by the licensing authority — miss the staffing threshold and the opening slips, with real financial and reputational cost. The group needed eleven roles filled across nursing leadership, clinical pharmacy and administration, every one of them subject to DHA licensing verification before a start date could even be scheduled.",
      "Clinical staffing in the UAE carries a compliance layer most staffing firms are not built to handle well — DHA registration transfers, Emirates ID and visa timelines, and credential verification that has to be airtight before day one, not fixed retroactively.",
    ],
    whatWeDid: [
      "Rivago's healthcare practice partner, who has run UAE clinical searches for over seven years, built parallel pipelines for all eleven roles simultaneously rather than sequentially — coordinating with the hospital group's own credentialing office from week one so that licensing transfers were already in motion before offers went out.",
      "Every candidate's DHA eligibility was verified prior to submission, eliminating the single most common cause of clinical hiring delays in the market. Visa and Emirates ID timelines were tracked against the facility's opening date on a shared schedule, with weekly written status updates to the hospital group's CEO.",
    ],
    outcome: [
      "All eleven roles were filled and fully licensed three weeks ahead of the facility's opening date, with zero compliance issues flagged during the licensing authority's final inspection. The hospital group has since engaged Rivago for ongoing clinical recruitment across both facilities.",
    ],
    quote: "Clinical staffing in the UAE is brutal — licensing, DHA registration, the works. Rivago handled all of it without being told twice.",
    quoteAttribution: "Chief People Officer, Dubai hospital group",
    atGlance: [
      ["Client type", "Hospital group, second-facility launch"],
      ["Industry", "Healthcare"],
      ["Engagement", "Contingent, multi-role parallel search"],
      ["Timeline", "11 roles filled in advance of a fixed opening date"],
    ],
  },
  {
    id: "confidential-cfo-placement",
    kind: "case-study",
    title: "A confidential CFO succession, closed without a single posting",
    eyebrow: "United States · Confidential Search",
    dek: "A public-facing succession search run entirely off-market, closed in five weeks with the incumbent never aware it was underway.",
    stats: [["Days to signed offer", "34"], ["Public postings", "0"], ["Confidentiality breaches", "0"]],
    challenge: [
      "A privately held US manufacturer needed to plan for the departure of a long-tenured CFO who had not yet informed the board of his intention to retire. The board needed a successor identified, vetted and ready to make an offer to — without the search becoming visible to the incumbent, the company's lenders, or its competitors.",
      "A confidential executive search at this level rules out almost every conventional recruiting channel. No posting, no portal, no outreach that could plausibly be traced back to the company by name.",
    ],
    whatWeDid: [
      "Our legal and finance practice partners worked jointly on the mandate, given its cross-functional sensitivity, operating under a signed NDA with the three board members who knew the search existed. All candidate approaches referenced only 'a privately held manufacturer in transition' until a candidate had passed an initial screen and signed their own confidentiality agreement.",
      "Six candidates were identified through direct approach to sitting and recently departed CFOs at comparable private manufacturers, screened against a scorecard built with the board's audit committee chair. Reference checks were conducted through back-channel introductions rather than listed references, to preserve confidentiality on both sides.",
    ],
    outcome: [
      "The board extended an offer to the strongest candidate 34 days after the brief was signed. The incumbent CFO was informed of his successor only after the offer was accepted, and the transition was announced publicly on the company's own timeline, with no leak or breach at any point in the process.",
    ],
    quote: "A fully confidential search, run without a job posting anywhere, closed in 33 days — the incumbent was never aware a search was underway.",
    quoteAttribution: "Board member, confidential US manufacturer",
    atGlance: [
      ["Client type", "Privately held manufacturer"],
      ["Industry", "Manufacturing / Executive"],
      ["Engagement", "Retained, fully confidential"],
      ["Team involved", "2 practice partners, NDA-bound"],
    ],
  },
];

export function findArticle(id: string | null | undefined): Article {
  return articles.find((a) => a.id === id) ?? articles[0];
}

export function findCaseStudy(id: string | null | undefined): CaseStudy {
  return caseStudies.find((c) => c.id === id) ?? caseStudies[0];
}
