export type ArticleSection = { h: string; p: string[] };
export type Article = {
  id: string;
  kind: "article";
  title: string;
  dek: string;
  byline: string;
  date: string;
  displayDate: string;
  readTime: string;
  tag: string;
  category: "play" | "comp" | "market";
  categoryLabel: string;
  image: string;
  sections: ArticleSection[];
};

export type CaseStudy = {
  id: string;
  kind: "case-study";
  title: string;
  tag: string;
  quarter: string;
  category: "tech" | "health" | "finance" | "legal" | "aero" | "supply" | "gtm";
  categoryLabel: string;
  image: string;
  stats: [string, string][];
  challenge: string[];
  whatWeDid: string[];
  outcome: string[];
  quote: string;
  quoteAttribution: string;
  atGlance: [string, string][];
};

export const featuredArticle = {
  category: "Blog",
  readTime: "6 min read",
  title: "How we deliver five screened candidates in two days — without lowering the bar.",
  dek: "Speed and quality are not a trade-off if the process is built right. Here is exactly how a Rivago partner runs the first 48 hours of a search — from calibrated brief to a shortlist you can actually act on.",
  byline: "Anjali Rao",
  date: "1 Jun 2026",
};

export const featuredCaseStudy = {
  tag: "Technology · United States",
  quarter: "Featured · Q1 2026",
  title: "A Series-C fintech needed forty hires across five departments before their next board meeting.",
  eyebrow: "Engagement type · Embedded talent partner",
  lede: "In January 2026, a $90M-ARR fintech client closed a Series C and committed to 40 hires across engineering, finance, ops, marketing and risk in 90 days. We embedded two partners and a research analyst on-site three days a week, ran a single weekly scorecard meeting with the CEO, and project-managed every loop from intake to offer.",
  ledeBottom: "By day 89, 38 of 40 offers were accepted. The remaining two — both VP-of-Engineering candidates — accepted in the second week of Q2 after a structural change to the role. Zero replacements invoked in the six months since.",
  stats: [
    ["38", "/40", "Offers accepted by day 89"],
    ["90", "days", "Kick-off to substantially complete"],
    ["100", "%", "Six-month retention as of writing"],
  ] as [string, string, string][],
};

export const articles: Article[] = [
  {
    id: "vp-eng-pay",
    kind: "article",
    title: "What VP Engineering really pays in 2026 — across four markets",
    dek: "Base, bonus and equity benchmarks for VP Eng roles in the US, Canada, the UAE and India — and why the gap is widening.",
    byline: "Anjali Rao",
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
    byline: "Priya Bhatt",
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
    byline: "Neha Kapoor",
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
    byline: "Rivago Research",
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
    byline: "Saurabh Mehta",
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
    byline: "Marcus Whelan",
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
    byline: "Anjali Rao",
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
    byline: "Priya Bhatt",
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

export const caseStudies: CaseStudy[] = [
  {
    id: "toronto-bank",
    kind: "case-study",
    title: "Building a risk, compliance & legal team for a Ontario Tier-1 bank in 60 days",
    tag: "Finance · Canada",
    quarter: "Retained · Q4 2025",
    category: "finance",
    categoryLabel: "Finance",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80&auto=format",
    stats: [["14", "Placements"], ["60d", "Cycle"], ["0", "Replacements"]],
    challenge: [
      "A Tier-1 Ontario bank needed to stand up a risk, compliance and legal function ahead of a regulatory deadline, running three concurrent retained searches at once — Head of Risk, Deputy General Counsel and Director of Compliance — with no internal recruiting bandwidth to run them in parallel.",
      "Each of the three roles required a different specialist background, and the bank could not afford a search that treated them as interchangeable finance hires. It had tried a national staffing portal for a similar build the year before and received volume without the licensing or regulatory fit it actually needed.",
    ],
    whatWeDid: [
      "Rivago assigned one partner as the single point of contact across all three searches, with dedicated finance and legal practice specialists doing the sourcing for each. All three briefs were calibrated in a single joint intake session with the bank's CRO, so the scorecards stayed consistent even though the roles didn't.",
      "Direct outreach — not postings — generated the entire pipeline across all three searches. References were checked two levels deep on every finalist, not just the most recent manager.",
      "Once the three anchor hires were in place, the engagement expanded into a broader build-out: eleven additional placements across the function over the following months, each search run against a brief the new leadership team helped write.",
    ],
    outcome: [
      "All three anchor roles were filled inside the 60-day cycle, ahead of the bank's regulatory deadline, and the full 14-person build-out has a zero-replacement record to date. The bank has since returned to Rivago for two additional confidential searches at the VP level.",
    ],
    quote: "They didn't just fill three seats — they helped us figure out the shape of the team we actually needed, then built it with us one hire at a time.",
    quoteAttribution: "Chief Risk Officer, Ontario Tier-1 bank",
    atGlance: [
      ["Client type", "Tier-1 regional bank"],
      ["Industry", "Financial services"],
      ["Engagement", "Retained, expanded to embedded build-out"],
      ["Team size delivered", "14 hires across risk, compliance & legal"],
    ],
  },
  {
    id: "uae-health",
    kind: "case-study",
    title: "Supporting a UAE hospital group expansion across clinical, admin & operations",
    tag: "Healthcare · UAE",
    quarter: "Contingent · Q3 2025",
    category: "health",
    categoryLabel: "Healthcare",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80&auto=format",
    stats: [["11", "Placements"], ["48h", "First list"], ["100%", "Cleared"]],
    challenge: [
      "A Dubai-based hospital group was opening a second facility with a hard opening date set by the licensing authority — miss the staffing threshold and the opening slips, with real financial and reputational cost. The group needed eleven roles filled across nursing leadership, clinical pharmacy and administration, every one of them subject to DHA licensing verification before a start date could even be scheduled.",
      "Clinical staffing in the UAE carries a compliance layer most staffing firms are not built to handle well — DHA registration transfers, Emirates ID and visa timelines, and credential verification that has to be airtight before day one.",
    ],
    whatWeDid: [
      "Rivago's healthcare practice partner, who has run UAE clinical searches for over seven years, built parallel pipelines for all eleven roles simultaneously rather than sequentially — coordinating with the hospital group's own credentialing office from week one so licensing transfers were already in motion before offers went out.",
      "Every candidate's DHA eligibility was verified prior to submission, eliminating the single most common cause of clinical hiring delays in the market. The first shortlist landed inside 48 hours of kickoff, with weekly written status updates to the hospital group's CEO after that.",
    ],
    outcome: [
      "All eleven roles were filled and fully licensed ahead of the facility's opening date, with zero compliance issues flagged during the licensing authority's final inspection. The hospital group has since engaged Rivago for ongoing clinical recruitment across both facilities.",
    ],
    quote: "Clinical staffing in the UAE is brutal — licensing, DHA registration, the works. Rivago handled all of it without being told twice.",
    quoteAttribution: "Chief People Officer, Dubai hospital group",
    atGlance: [
      ["Client type", "Hospital group, second-facility launch"],
      ["Industry", "Healthcare"],
      ["Engagement", "Contingent, multi-role parallel search"],
      ["Timeline", "11 roles fully licensed ahead of a fixed opening date"],
    ],
  },
  {
    id: "london-cto",
    kind: "case-study",
    title: "CTO succession at an Ontario-based vertical SaaS at $40M ARR",
    tag: "Technology · Canada",
    quarter: "Retained · Q1 2026",
    category: "tech",
    categoryLabel: "Technology",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80&auto=format",
    stats: [["1", "CTO hire"], ["42d", "Brief-to-offer"], ["$420K", "Total comp"]],
    challenge: [
      "A vertical SaaS company at $40M ARR needed to replace a founding CTO who had signaled an exit within the next two quarters, without disrupting the engineering org or tipping off competitors that a transition was coming. An internal candidate was a plausible successor but hadn't been formally evaluated against the external market.",
      "The board wanted a genuine build-vs-buy comparison — a real external shortlist run in parallel with a structured internal evaluation, not an external search used to rubber-stamp a decision already made.",
    ],
    whatWeDid: [
      "Rivago ran a confidential retained search in parallel with the board's internal evaluation process, briefed directly by the CEO and board chair. An eighteen-month off-limits agreement was negotiated with the client before sourcing began, given the sensitivity of approaching competitor CTOs.",
      "Seven external candidates were mapped, screened and calibrated against the same scorecard used to evaluate the internal candidate, giving the board a genuinely comparable shortlist rather than two different evaluation standards.",
    ],
    outcome: [
      "The board extended an offer to the strongest candidate from the combined pool 42 days after the brief was signed, at $420K total comp. The transition was announced on the company's own timeline with no leak to the market beforehand.",
    ],
    quote: "We got a real comparison, not a search designed to confirm what we already thought. That changed the decision we actually made.",
    quoteAttribution: "Board Chair, Ontario vertical SaaS",
    atGlance: [
      ["Client type", "Vertical SaaS, $40M ARR"],
      ["Industry", "Technology"],
      ["Engagement", "Retained, confidential succession"],
      ["Off-limits agreement", "18 months"],
    ],
  },
  {
    id: "aero-cleared",
    kind: "case-study",
    title: "Cleared-talent build-out for a Tier-1 defence prime in northern Virginia",
    tag: "Aerospace · US",
    quarter: "Retained · Q4 2025",
    category: "aero",
    categoryLabel: "Aerospace",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80&auto=format",
    stats: [["6", "Cleared hires"], ["42d", "Cycle"], ["100%", "Pre-cleared"]],
    challenge: [
      "A Tier-1 defence prime needed six roles filled requiring active TS/SCI clearance for a program with a fixed government milestone date. The clearance requirement alone eliminates the vast majority of the available talent pool, and a candidate whose clearance lapses mid-process can stall a search by months.",
      "The client had run a previous search through a generalist staffing vendor that surfaced candidates who claimed clearance eligibility but weren't actually pre-cleared — a costly discovery late in the process.",
    ],
    whatWeDid: [
      "Rivago sourced exclusively through its cleared-talent program, verifying active clearance status before any candidate was submitted rather than after an offer was extended. Average verification cycle across the six roles ran 12 days from first contact.",
      "The aerospace practice partner coordinated directly with the client's facility security officer to confirm clearance transfer timelines before offers went out, avoiding the gap-in-coverage risk that stalls cleared-talent placements industry-wide.",
    ],
    outcome: [
      "All six roles were filled with candidates who were 100% pre-cleared at submission, closing the full search in 42 days against a program milestone the client could not move.",
    ],
    quote: "Every candidate they sent us was already cleared. That alone saved us months against a deadline we didn't control.",
    quoteAttribution: "Program Director, Tier-1 defence prime",
    atGlance: [
      ["Client type", "Defence prime contractor"],
      ["Industry", "Aerospace & Defense"],
      ["Engagement", "Retained, cleared-talent program"],
      ["Clearance level", "Active TS/SCI, verified pre-submission"],
    ],
  },
  {
    id: "ny-gc",
    kind: "case-study",
    title: "First-GC search for a pre-IPO Delaware fintech ahead of S-1 filing",
    tag: "Legal · US",
    quarter: "Retained · Q1 2026",
    category: "legal",
    categoryLabel: "Legal",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80&auto=format",
    stats: [["1", "GC hire"], ["38d", "Cycle"], ["$420K", "Base"]],
    challenge: [
      "A pre-IPO Delaware fintech needed its first General Counsel ahead of an S-1 filing, with securities-litigation experience as a hard requirement and pre-IPO operating experience strongly preferred — a narrow combination that ruled out most in-house counsel candidates and most law-firm partners equally.",
      "The board wanted the hire closed before the S-1 drafting process began in earnest, which put real time pressure on an already narrow search.",
    ],
    whatWeDid: [
      "Rivago's legal practice partner mapped candidates who had specifically taken a company through an S-1 process before, rather than general securities counsel — a filter that produced a short but highly qualified list. Five finalists were screened against a scorecard built with the CEO and board's lead independent director.",
      "Reference checks focused specifically on how each candidate had handled the S-1 drafting relationship with outside counsel and underwriters, since that working relationship was the single highest-risk part of the role.",
    ],
    outcome: [
      "The board extended an offer to the first-choice candidate 38 days after the brief was signed, at a base of $420K. The new GC was in seat before S-1 drafting began.",
    ],
    quote: "We needed someone who had actually done this before, not someone who could learn on the job during our own IPO. Rivago found exactly that.",
    quoteAttribution: "CEO, pre-IPO Delaware fintech",
    atGlance: [
      ["Client type", "Pre-IPO fintech"],
      ["Industry", "Legal / Financial services"],
      ["Engagement", "Retained, single search"],
      ["Requirement", "Prior S-1 experience, non-negotiable"],
    ],
  },
  {
    id: "interim-coo",
    kind: "case-study",
    title: "COO succession plus full supply-chain leadership build at a $1.2B distributor",
    tag: "Supply · US",
    quarter: "Embedded · Q3 2025",
    category: "supply",
    categoryLabel: "Supply Chain",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80&auto=format",
    stats: [["4", "Senior hires"], ["11w", "Cycle"], ["100%", "12-mo stick"]],
    challenge: [
      "A $1.2B distributor needed to replace a retiring COO while simultaneously rebuilding the supply-chain leadership layer beneath the role — VP Supply, Head of Distribution and Director of S&OP — rather than filling one seat and leaving the rest of the org to absorb the gap.",
      "The four roles were interdependent enough that hiring them sequentially risked each new leader inheriting a still-forming team beneath them.",
    ],
    whatWeDid: [
      "Rivago embedded a partner and research analyst on-site for the engagement, running all four searches in parallel against a leadership structure agreed with the CEO upfront rather than four independent briefs. The incoming COO, once identified, was looped into the remaining three searches before their own start date.",
      "Relocation was handled end-to-end for two of the four finalists, coordinated directly with the client's HR team to keep start dates aligned across the new leadership group.",
    ],
    outcome: [
      "All four roles were filled within an 11-week cycle, with the full leadership group starting within weeks of each other. All four hires remain in place past the twelve-month mark.",
    ],
    quote: "They didn't just replace our COO — they rebuilt the whole layer underneath, as one coordinated team instead of four separate searches.",
    quoteAttribution: "CEO, $1.2B distributor",
    atGlance: [
      ["Client type", "National distributor"],
      ["Industry", "Supply chain & operations"],
      ["Engagement", "Embedded, coordinated leadership build"],
      ["Team size delivered", "4 senior hires in 11 weeks"],
    ],
  },
  {
    id: "series-a-gtm",
    kind: "case-study",
    title: "CRO succession for a $80M ARR vertical SaaS off plan for two quarters",
    tag: "GTM · US",
    quarter: "Retained · Q2 2025",
    category: "gtm",
    categoryLabel: "GTM",
    image: "https://images.unsplash.com/photo-1554774853-b415df9eeb92?w=800&q=80&auto=format",
    stats: [["1", "CRO hire"], ["31d", "Cycle"], ["+38%", "QoQ pipeline"]],
    challenge: [
      "An $80M ARR vertical SaaS company had missed plan for two consecutive quarters and needed a new CRO who could diagnose whether the problem was pipeline, execution or the market itself — and be trusted with the answer even if it was uncomfortable for the board.",
      "Candidates who talk well about a 'beat plan' history are common. Candidates who can independently verify that history is real are much harder to find.",
    ],
    whatWeDid: [
      "Rivago's GTM practice partner built a shortlist filtered specifically for verifiable beat-plan history — confirmed through five backchannel references per finalist, not the candidate's own account of their record.",
      "The final offer was structured collaboratively with the board's compensation committee once the finalist was identified, balancing base, OTE and equity against the urgency of the hire.",
    ],
    outcome: [
      "The offer was signed 31 days after the brief, at $320K base plus $230K OTE and 0.4% equity. Pipeline was up 38% quarter-over-quarter within the new CRO's first two quarters in seat.",
    ],
    quote: "We needed someone who could tell us the truth about our pipeline, not someone who'd tell the board what it wanted to hear. That's who we got.",
    quoteAttribution: "Board Member, vertical SaaS company",
    atGlance: [
      ["Client type", "Vertical SaaS, $80M ARR"],
      ["Industry", "Go-to-market / Sales leadership"],
      ["Engagement", "Retained, single search"],
      ["Verification", "Beat-plan history confirmed via backchannel references"],
    ],
  },
  {
    id: "cmo-meddevice",
    kind: "case-study",
    title: "CMO appointment for a $200M-revenue Series-D medical-device company",
    tag: "Healthcare · US",
    quarter: "Retained · Q4 2025",
    category: "health",
    categoryLabel: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format",
    stats: [["1", "CMO hire"], ["52d", "Cycle"], ["$580K", "Comp"]],
    challenge: [
      "A $200M-revenue Series-D medical-device company needed a Chief Medical Officer with direct 510(k) and PMA regulatory-submission experience — a hard requirement that immediately narrowed the field to physicians with both clinical credibility and regulatory-affairs depth, a genuinely rare combination.",
      "The board wanted internal advisory input on the final decision without slowing the external search down, which meant running both tracks in parallel rather than sequentially.",
    ],
    whatWeDid: [
      "Rivago's healthcare practice partner mapped candidates specifically by 510(k)/PMA submission history, verified through public FDA filings before outreach — a step that eliminated candidates who overstated their regulatory role on paper.",
      "Three internal clinical advisors were interviewed alongside the external shortlist, with their feedback folded into the same scorecard used for external candidates, keeping the evaluation standard consistent across both groups.",
    ],
    outcome: [
      "The board extended an offer 52 days after the brief was signed, at $580K total comp. The new CMO's first PMA submission under the role cleared FDA review on schedule.",
    ],
    quote: "The regulatory-submission requirement alone made this feel impossible. Rivago found someone who had actually done exactly this, twice.",
    quoteAttribution: "CEO, Series-D medical-device company",
    atGlance: [
      ["Client type", "Series-D medical-device company"],
      ["Industry", "Healthcare / Medical devices"],
      ["Engagement", "Retained, single search"],
      ["Requirement", "Verified 510(k) and PMA submission history"],
    ],
  },
  {
    id: "dubai-quant",
    kind: "case-study",
    title: "Quant team build for a Dubai-based fund with $400M AUM",
    tag: "Finance · UAE",
    quarter: "Contingent · Q3 2025",
    category: "finance",
    categoryLabel: "Finance",
    image: "https://images.unsplash.com/photo-1642790551116-18e150f248e3?w=800&q=80&auto=format",
    stats: [["5", "Quant hires"], ["9w", "Cycle"], ["100%", "Relocated"]],
    challenge: [
      "A Dubai-based fund with $400M AUM needed to build a five-person quant desk spanning systematic, fundamental and execution strategies — a specialist talent pool that barely exists inside the UAE, meaning the search had to run internationally from day one with relocation built into every offer.",
      "None of the five roles could be filled from the local market at the seniority the fund needed, and relocation logistics for quant talent from outside the GCC add real complexity on top of an already narrow technical search.",
    ],
    whatWeDid: [
      "Rivago's finance practice partner ran the search internationally, sourcing candidates from major quant hubs and screening each against strategy-specific technical assessments built with the fund's CIO. Every offer included relocation handled in-house by Rivago — visas, housing search support and onboarding logistics — rather than left to the candidate to self-manage.",
    ],
    outcome: [
      "All five roles were filled within nine weeks, and all five hires relocated to Dubai with Rivago managing the full process. The desk was fully staffed and trading within the fund's target window.",
    ],
    quote: "Building a quant desk from outside the region sounded impossible on our timeline. Rivago handled the search and the relocation as one process, not two.",
    quoteAttribution: "Chief Investment Officer, Dubai-based fund",
    atGlance: [
      ["Client type", "Investment fund, $400M AUM"],
      ["Industry", "Finance / Quantitative trading"],
      ["Engagement", "Contingent, international search"],
      ["Relocation", "100% of hires relocated from outside the GCC"],
    ],
  },
];

export function findArticle(id: string | null | undefined): Article {
  return articles.find((a) => a.id === id) ?? articles[0];
}

export function findCaseStudy(id: string | null | undefined): CaseStudy {
  return caseStudies.find((c) => c.id === id) ?? caseStudies[0];
}
