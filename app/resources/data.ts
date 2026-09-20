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
 * The other three hold fourteen articles: four blogs, five interview guides
 * and five salary guides. Eight were re-cut from the original library; the
 * six guides below them were written, because a re-cut of eight only
 * stretched those two tabs to two apiece. Nothing was invented to populate a
 * tab — where there is no real content, as with case studies, the tab says
 * so. */
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
  /* ── SIX ARTICLES ADDED, three interview guides and three salary guides,
     to give those two tabs something to hold. Written rather than
     re-categorised: the eight that existed only stretched to 2 and 2.

     THE DATES ARE PLACEHOLDERS. They are spread across recent weeks so the
     library does not show a three-month silence under a masthead promising a
     weekly email — but nothing was published on these days. Set each to its
     real publication date before this goes live.

     Every claim in them is either general professional practice or a
     mechanism anyone can verify. There is no "in our data", no percentage,
     no count of mandates or partners. That is the constraint the other eight
     were rewritten to meet and it applies to new writing first. */
  {
    id: "panel-debrief",
    title: "How to run a panel debrief without groupthink",
    dek: "The first person to speak sets the room. A debrief structure that keeps four independent reads from collapsing into one.",
    date: "2026-09-15",
    displayDate: "15 Sep 2026",
    readTime: "6 min read",
    category: "interview",
    categoryLabel: "Interview guide",
    sections: [
      {
        h: "The first voice anchors the room",
        p: [
          "Open a debrief by asking the room what they thought and you will get one opinion, repeated four times with variations. Whoever speaks first — usually the most senior person, or the one who interviewed last — sets a position, and everyone else adjusts toward it rather than away. They are not being spineless. Anchoring is what happens to a group asked to form a view out loud, together, from a standing start.",
          "The cost is specific: you convened four interviewers to get four reads, and you end up with one. If the panel was going to agree with the hiring manager anyway, the other three rounds were an expensive way to make the candidate feel scrutinised.",
        ],
      },
      {
        h: "Score before you meet, not during",
        p: [
          "Each interviewer submits a written score against the agreed scorecard before the debrief opens, and does not see anyone else's until they have. It takes ten minutes and it is the whole intervention — once a view is written down, the person holding it defends it in the room instead of quietly abandoning it.",
          "It also changes what the debrief is for. Nobody needs a meeting to discover that four people agree. The meeting exists to examine the places they did not, which you cannot find until the independent reads are on the table.",
        ],
      },
      {
        h: "A split panel is information, not a problem",
        p: [
          "The instinct when scores diverge is to average them and move on, or to defer to whoever feels strongest. Both throw away the most useful thing in the room. A split usually means one interviewer saw something the others had no opportunity to see — a different question, a different part of the role, a moment late in a conversation that never came up elsewhere.",
          "So ask the divergent scorer what they saw, specifically, before anyone argues. Often it resolves in a sentence: they probed something nobody else did. Sometimes it does not resolve, and that is a genuine finding — a candidate two capable people read completely differently is a risk you now know about rather than one you discover in month four.",
        ],
      },
    ],
  },
  {
    id: "salary-band",
    title: "How to set a salary band before you open the role",
    dek: "A band decided after you meet someone is a band decided by that candidate. Settle it first — and know what to do when the market disagrees.",
    date: "2026-09-02",
    displayDate: "2 Sep 2026",
    readTime: "6 min read",
    category: "salary",
    categoryLabel: "Salary guide",
    sections: [
      {
        h: "Decide before you meet anyone",
        p: [
          "A band set after the first strong candidate is not a band. It is that candidate's expectation with a range drawn around it, and it will move again for the next one. The practical damage shows up later: two people doing the same job on numbers that cannot be explained to either of them, and an internal equity problem that surfaces the first time they compare notes.",
          "Agreeing it up front also forces the conversation nobody wants to have early — what this role is actually worth to the business — at the point where it is still cheap to answer.",
        ],
      },
      {
        h: "What the band has to cover",
        p: [
          "A usable band spans the person you would be delighted to hire and the person you would be content with. If only one of those fits inside it, it is a number with decoration rather than a range, and your recruiter will treat it as a number.",
          "Write down what moves someone from the bottom of it to the top, in terms a panel can assess. \"More experience\" is not one of those terms. \"Has run this function at this scale before\" is, and it gives the offer a reason a candidate can hear without feeling haggled with.",
        ],
      },
      {
        h: "When the market disagrees with your band",
        p: [
          "Sometimes the band is set honestly and the market still says no. There are three legitimate answers, and they are all fine: pay more, change the spec so the role matches the money, or accept that the search takes longer while you find someone for whom the rest of the offer outweighs the gap.",
          "The failure is choosing none of them — leaving the band where it is, the spec where it is, and the expectation of speed where it is. That is the search that runs for five months and ends with the band being raised anyway, having burned the candidates who were approached at the old number and cannot be re-approached at the new one.",
        ],
      },
    ],
  },
  {
    id: "reference-checks",
    title: "Reference checks that tell you something",
    dek: "Most reference calls confirm employment dates and nothing else. The questions that make the call worth making.",
    date: "2026-08-19",
    displayDate: "19 Aug 2026",
    readTime: "5 min read",
    category: "interview",
    categoryLabel: "Interview guide",
    sections: [
      {
        h: "The call most people make is worthless",
        p: [
          "The standard reference call confirms that someone worked somewhere between two dates and was, in the referee's estimation, good. Both facts were already on the CV, and the referee was chosen by the candidate. Run like that it is a formality that costs an hour and tells you nothing you can act on.",
          "It is worth doing properly or not at all. Done properly it is the only part of a process where you hear about someone from a person who has actually watched them work for a year.",
        ],
      },
      {
        h: "Ask about the work, not the person",
        p: [
          "\"What are they like?\" invites a character reference and gets you adjectives. Ask instead what they were responsible for, what they would hand them again without hesitation, and what they would want to give them support on. The third question is the one that earns the call — phrased that way it is an ordinary management question rather than an invitation to criticise, and most referees will answer it honestly.",
          "Be concrete about your own role too. A referee who knows you are hiring someone to run a team of twelve through a replatforming will tell you things they would never volunteer to a generic enquiry.",
        ],
      },
      {
        h: "The question worth saving for last",
        p: [
          "Close with: would you hire them again, and into what role? It is hard to answer evasively. The second half is what makes it work — a referee who would take someone back but into a different job has just told you something precise about fit, and has done it without having to say anything negative.",
          "Listen to the pause as much as the answer. A warm, immediate yes and a considered, qualified yes are different pieces of information, and neither is a reason on its own to stop — they are reasons to go back to the candidate with a better question.",
        ],
      },
    ],
  },
  {
    id: "comparing-offers",
    title: "What a candidate is really comparing when they weigh two offers",
    dek: "Two packages with the same headline number can be worth very different things. What actually differs — and why the higher offer often loses.",
    date: "2026-08-05",
    displayDate: "5 Aug 2026",
    readTime: "7 min read",
    category: "salary",
    categoryLabel: "Salary guide",
    sections: [
      {
        h: "The headline number is the least of it",
        p: [
          "Two offers at the same total can carry entirely different risk. One might be mostly certain cash; the other might lean on equity whose value depends on an outcome years away and outside anyone's control. Adding those together into a single figure and comparing it to another single figure is the most common mistake made at this stage, and it is usually made by the side doing the offering.",
          "Split any offer into what is certain, what is likely, and what is a bet, and compare the three columns separately. A candidate who has done that can explain their decision in a sentence. One who has not will keep circling the total and feel vaguely uneasy about it.",
        ],
      },
      {
        h: "The things that move the comparison",
        p: [
          "Notice period and start date decide whether an offer is even available. Company stage decides what the equity column means. The manager decides most of what the next two years feel like, and is the variable candidates underweight most consistently — the role is fixed at signing, the manager is the thing that changes it afterwards.",
          "Then the unglamorous ones: what the working pattern actually is rather than what the policy says, whether the seat is a backfill or new, and how long the last three people stayed. None of these appear in the package, and all of them are knowable before signing if someone thinks to ask.",
        ],
      },
      {
        h: "Why the higher offer often loses",
        p: [
          "Candidates read process as character. A company that took six weeks and went quiet twice has said something about how it makes decisions, and a bigger number at the end does not undo it — if anything it confirms a suspicion that the money is there to compensate for something.",
          "The offer that wins is frequently the one where the candidate could tell what the job was, met the people they would work with, and got a clear answer when they asked a hard question. That is not a soft advantage over money. It is what someone falls back on when the two columns are close and they have to choose anyway.",
        ],
      },
    ],
  },
  {
    id: "interview-rounds",
    title: "How many interview rounds is too many",
    dek: "Every extra round costs you candidates and buys less signal than the one before it. How to work out what your loop is actually for.",
    date: "2026-07-22",
    displayDate: "22 Jul 2026",
    readTime: "5 min read",
    category: "interview",
    categoryLabel: "Interview guide",
    sections: [
      {
        h: "Every round should answer a question the last one could not",
        p: [
          "The test for a round is whether you can name, in one sentence, the question it exists to answer and why an earlier round could not answer it. Rounds that fail that test are almost always there for a different reason: a stakeholder who wants to be consulted, a habit inherited from a previous company, or a general sense that senior hires ought to be hard.",
          "None of those are bad instincts, and none of them require a separate hour of the candidate's time. A stakeholder who wants a say can have the scorecard and the written debrief.",
        ],
      },
      {
        h: "What a long loop costs you",
        p: [
          "The obvious cost is attrition — strong candidates are in more than one process and the longest one loses by default. The less obvious cost is what the loop says about you. A candidate sitting through a sixth conversation is learning that this company finds decisions difficult, and they are right to wonder whether that stops at hiring.",
          "There is a quality cost too. Signal per round falls quickly: the first two conversations move your estimate a great deal, the fifth barely at all. What extra rounds mostly add is confidence, which feels like information and is not.",
        ],
      },
      {
        h: "A default worth starting from",
        p: [
          "A screen, a craft conversation, a session with the team they would actually work with, and a decision-maker. Four, compressible to three where the decision-maker is in one of the others. Add a fifth only with a named question attached, and be honest about whether a take-home or a paid short engagement would answer it better.",
          "Then hold the shape across candidates. A loop that expands for the ones you are unsure about is not gathering more evidence — it is giving you more chances to talk yourself into a decision you have already half made.",
        ],
      },
    ],
  },
  {
    id: "negotiating-offer",
    title: "Negotiating an offer without burning the relationship",
    dek: "You will be working with these people on Monday. A plain guide to asking for more without making it the first thing they remember about you.",
    date: "2026-07-08",
    displayDate: "8 Jul 2026",
    readTime: "6 min read",
    category: "salary",
    categoryLabel: "Salary guide",
    sections: [
      {
        h: "Ask once, clearly, with a number",
        p: [
          "Vague dissatisfaction gets a vague response. \"I was hoping for a bit more\" puts the work of guessing onto the person who has already told you what they can do, and it usually produces a token increase that satisfies nobody. Name the number and say briefly what it is based on.",
          "Ask once. A second and third approach after an answer has been given reads as bad faith even when it is not, and it is the part people remember. One clear ask, properly reasoned, is almost never held against anyone — it is a normal thing to do and most employers expect it.",
        ],
      },
      {
        h: "Negotiate the package, not just the salary",
        p: [
          "Base pay is often the most constrained line in an offer, tied to bands and internal comparisons the hiring manager cannot break without a wider problem. Other things are frequently easier to move: the start date, a notice buyout, an equity grant or refresh, title, guaranteed remote days, a signing amount that solves a one-off gap without resetting the band.",
          "If base genuinely cannot move, ask what can — as a real question. It is often answered generously, because you have given the other side a way to say yes.",
        ],
      },
      {
        h: "Know what you will do if the answer is no",
        p: [
          "Decide before you ask whether you are accepting at the current number if nothing changes. If you are, the ask is free and you should make it. If you are not, you are declining, and that conversation should be held honestly rather than disguised as a negotiation.",
          "The version that damages a relationship is almost never the ask itself. It is the ask made without a position behind it, repeated, and then accepted anyway at the original number — which teaches your new employer something about you before your first day.",
        ],
      },
    ],
  },
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
