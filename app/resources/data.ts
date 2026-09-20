/* A section is paragraphs, optionally with one table and/or one list. The
   long-form guides need both; the fourteen shorter articles use neither, so
   they are optional and none of those entries changed. */
export type ArticleTable = { head: string[]; rows: string[][]; note?: string };
export type ArticleSection = {
  h: string;
  p: string[];
  table?: ArticleTable;
  list?: { intro?: string; items: string[] };
};

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
  /* The long-form guides carry the extras; the original fourteen do not, so
     every one of these is optional.

     `summary` is the standfirst — the answer up front, for a reader who
     wants it in one paragraph and for an assistant quoting the page.
     `faqs` render as real text AND as FAQPage structured data, from the same
     array, so the two cannot drift.
     `next` is the "Where to go next" row. There is deliberately NO reviewer
     field: the reference this structure came from carries "Reviewed by
     <name>, <credential>", and a named reviewer is a real person's
     professional endorsement. Nobody has given one, so there is nowhere to
     put an invented one. Add the field when a real reviewer exists. */
  summary?: string;
  /* Hero image. Optional, and only the six long-form guides carry one —
     see the note where they are set for why, and for which of them are a
     genuine fit rather than decoration. */
  image?: { src: string; alt: string };
  sections: ArticleSection[];
  faqs?: { q: string; a: string }[];
  next?: { label: string; href: string }[];
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
  /* ── SIX LONG-FORM GUIDES ────────────────────────────────────────────────
     Written to the structure the client sent (a HireGenie guide): a summary
     that answers the question up front, a table where the content is a
     comparison, sections a reader can jump to, an FAQ that doubles as
     FAQPage data, and a "where to go next" row.

     TOPICS were picked against what is actually being searched in
     recruitment this year — AI in hiring, skills-based hiring, candidate
     experience and speed, talent mobility — filtered to the ones that (a)
     map to a service Rivago actually sells, (b) do not duplicate the
     fourteen articles already here, and (c) can be written without a single
     figure nobody has measured. That last filter removed the obvious
     candidates: "average time to hire", "cost per hire" and "what X pays in
     2026" are the highest-volume queries in this space and all three are
     answerable only with data this firm does not have.

     NO REVIEWER BYLINE. The reference carries "Reviewed by <name>,
     <credential>". That is a real person lending professional credibility,
     and inventing one would be the same act as the invented authors already
     removed from this file — worse, because a credential is a claim about
     qualifications. The Article type has no reviewer field for that reason.

     DATES ARE PLACEHOLDERS, as with the six above. Set them at publication.

     HERO IMAGES. These six carry one; the fourteen shorter articles do not,
     because there is nothing honest to give them — public/assets holds eight
     Adobe Stock frames licensed to the Rivago account and already used on
     the services carousel, and spreading eight photographs across twenty
     articles would mean each appearing two or three times.

     Of the six used here, two are a genuine fit: the signed contract on the
     Employer of Record guide, and the planning session on skills-based
     hiring. The other four are generic office photography that decorates the
     page rather than illustrating it. That is worth knowing rather than
     pretending otherwise, and public/assets/services/LICENCES.md takes the
     same view of them in its own words: "These are placeholders ... Rivago's
     own photography beats all of it." Swap them as it is shot. */
  {
    id: "engineering-team-by-stage",
    title: "Building an engineering team by growth stage",
    dek: "Which engineering hire to make at seed, Series A, B and beyond — and why the sequence matters more than the titles.",
    date: "2026-09-18",
    displayDate: "18 Sep 2026",
    readTime: "9 min read",
    category: "blog",
    categoryLabel: "Blog",
    image: { src: "/assets/services/direct-office.jpg", alt: "An open-plan office floor with people working at desks" },
    summary:
      "An engineering team should be built in sequence, not all at once. At seed you want builders who can ship across the stack, with architectural judgement borrowed rather than employed. At Series A you make your first hire who owns a domain rather than a ticket queue. At Series B you split delivery from platform, and add your first engineering manager — because the span of control, not the headcount, is what breaks first. At Series C you add a leadership layer above the managers. The two failure modes are hiring the senior title before there is anything for it to lead, and leaning on generalists long past the point the system needed an owner.",
    sections: [
      {
        h: "Engineering hiring by stage, at a glance",
        p: [
          "This guide is about sequence: which engineering role to add at each stage, and what has to be true before it makes sense. The titles below are the ones most commonly used, but titles travel badly between companies — treat the middle column as the definition and the right-hand column as the label you will probably advertise.",
        ],
        table: {
          head: ["Stage", "What engineering must own", "The hire to make", "Typical title"],
          rows: [
            ["Pre-seed / seed", "Shipping the product at all; no specialisation", "Generalists who can carry a feature end to end", "Founding engineer, full-stack"],
            ["Series A", "A system somebody is accountable for", "First domain owner, and first dedicated QA or infra if the product demands it", "Senior / staff engineer"],
            ["Series B", "Delivery and platform as separate concerns", "Split the team, and add your first line manager", "Engineering manager + platform lead"],
            ["Series C+", "Multiple teams, shared standards, technical strategy", "A leadership layer above the managers", "Director / VP Engineering"],
            ["Growth / pre-exit", "Reliability, security and succession in every critical area", "Depth and redundancy, not new functions", "VP or CTO with a full org beneath"],
          ],
          note: "A guide, not a rule. Companies whose product is itself technical infrastructure hit each of these earlier than companies where engineering supports a commercial business.",
        },
      },
      {
        h: "Seed: builders, and borrowed judgement",
        p: [
          "At seed the only thing engineering has to do is ship. There is no platform to own, no team to lead, and the architecture that matters is the one that lets you change your mind next month. What you want is people who can carry a feature from idea to production without a handoff, and who are comfortable with the fact that most of what they write will be replaced.",
          "The judgement question is real, though, and it is the one founders most often get wrong. Early architectural decisions are expensive to reverse, and a team of capable generalists with nobody who has built the thing before will make some of them badly. The answer at this stage is usually to borrow that judgement rather than employ it — a fractional CTO, an advisor who has shipped in your domain, a technical investor who will take the call. That is much cheaper than hiring a VP Engineering to supervise three people.",
          "The trap is title inflation. A senior title offered at seed to close a candidate creates a problem at Series B, when the person holding it either has to grow into a job they were never hired for or watch someone be hired above them.",
        ],
      },
      {
        h: "Series A: the first owner",
        p: [
          "Series A is where engineering stops being a group of people shipping and starts being a system somebody is accountable for. There is production traffic, there are customers who notice outages, and there is enough code that nobody holds all of it in their head. This is the point to hire your first real owner: someone whose job is a domain rather than a ticket queue.",
          "In practice this is a senior or staff engineer, not a manager. The distinction matters commercially as well as organisationally — a staff engineer is paid for technical judgement and an engineering manager is paid for people, and hiring one while briefing for the other is how a search runs for four months and ends with an offer declined.",
          "This is also where the first specialist hire becomes defensible, but only if the product demands it. A team shipping a regulated product needs someone who owns compliance in the build. A team running significant infrastructure needs someone who owns it. A team doing neither does not need a dedicated platform engineer yet, however much it would like one.",
        ],
      },
      {
        h: "Series B: split delivery from platform, and add a manager",
        p: [
          "By Series B two things have usually broken at once. The first is that product delivery and platform work are competing for the same people, and platform always loses — it has no customer asking for it, so it is deferred until something falls over. The second is span of control: a founder or lead who was informally managing five engineers is now informally managing eleven, badly, on top of their real job.",
          "Splitting the team is the structural fix, and it is the stage where a dedicated platform or infrastructure owner stops being a luxury. Adding your first engineering manager is the people fix. Both are usually needed within a quarter or two of each other.",
          "Be deliberate about what the manager is for. An engineering manager hired to write code will resent the job within six months; one hired to run people while a team of four ships will be bored. The honest version of the brief at this stage is usually a hands-on manager with a real team to grow into — and saying that out loud attracts the people who want it.",
        ],
        list: {
          intro: "Three signals that you are at this stage rather than approaching it:",
          items: [
            "Platform work is only done during incidents, because it is the only time it gets prioritised.",
            "Someone senior spends more than half their week on one-to-ones, hiring and unblocking, and calls it the part of the job they do at night.",
            "Two engineers have solved the same problem differently in the same quarter, and nobody noticed until review.",
          ],
        },
      },
      {
        h: "Series C and beyond: the leadership layer",
        p: [
          "At Series C there are multiple teams, which means there are managers, which means there is a question about who runs them and who owns the standards between them. This is where a Director or VP of Engineering is genuinely warranted: not to write the code, and not to manage individual engineers, but to own the shape of the organisation and the technical strategy across it.",
          "The timing argument here is the same as it is for any senior appointment. Hiring a VP Engineering before there is an engineering organisation to lead produces an expensive person doing staff-engineer work, usually badly, because that was never the job they wanted. Build the layer beneath first, then hire the person to lead it.",
        ],
      },
      {
        h: "Growth and pre-exit: depth, not new functions",
        p: [
          "Late-stage engineering hiring is rarely about adding a function nobody was doing. It is about depth and redundancy: a second person who understands each critical system, security and reliability owned rather than assumed, and a succession answer for every role whose departure would be a genuine problem.",
          "Diligence is the forcing function. An acquirer or a late-stage investor will ask who owns each part of the system and what happens if that person leaves, and the honest answer is much easier to give if you built the redundancy before you were asked.",
        ],
      },
      {
        h: "The two mistakes that come from hiring out of sequence",
        p: [
          "Almost every engineering-org problem at a growing company traces back to one of two errors. The first is hiring the senior title too early — a VP or a Head of brought in before there is an organisation to lead, who ends up doing individual contributor work at a leadership salary and leaves out of boredom within the year. The second is leaning on generalists too long, keeping a seed-stage structure through Series B until the system has no owner, the platform has no advocate, and the people have no manager.",
          "The fix for both is the same: hire to the stage the business is actually at, and to the stage it will reach in the next twelve to eighteen months, rather than to the title that sounds reassuring in a board meeting.",
        ],
      },
      {
        h: "How Rivago helps",
        p: [
          "A large part of our technology practice is helping founders and engineering leaders hire the role the business is ready for, rather than the one on the original brief. That often means saying that a search should be for a staff engineer rather than a VP, or that the platform hire should come before the third product engineer.",
          "If you tell us where the company is and where it is going, we will tell you which appointment we would make first — including when the honest answer is that you do not need us yet.",
        ],
      },
    ],
    faqs: [
      { q: "When should a startup hire its first engineering manager?", a: "Usually around Series B, when informal management has outgrown the person doing it alongside another full-time job — typically somewhere past six or seven engineers reporting loosely to one lead. The trigger is span of control rather than headcount: one person spending most of a week on one-to-ones, hiring and unblocking is the signal, whatever the team size." },
      { q: "Should we hire a VP Engineering or a staff engineer?", a: "A staff engineer is paid for technical judgement and a VP Engineering is paid for organisation and strategy, and at most Series A companies the gap is only fillable by the former. Hire the VP once there are managers to lead. Briefing for one while advertising the other is a common reason senior technical searches stall." },
      { q: "When does a platform or infrastructure hire make sense?", a: "When platform work is only being done during incidents, because it has no customer to advocate for it and loses every prioritisation contest to product delivery. That usually arrives around Series B, earlier if the product is itself infrastructure." },
      { q: "Is it a mistake to give early engineers senior titles?", a: "It creates a problem later rather than immediately. A title given at seed to close a candidate has to be honoured at Series B, when either the person grows into a job they were not hired for or somebody is hired above them. Neither is fatal, but both are easier to avoid than to fix." },
      { q: "What is the right order to build an engineering team?", a: "Broadly: generalists at seed with architectural judgement borrowed rather than employed, a first domain owner at Series A, a split of delivery and platform plus a first manager at Series B, a leadership layer at Series C, and depth and redundancy at growth stage. Hire to the stage you are at and the one you will reach within twelve to eighteen months." },
    ],
    next: [
      { label: "Technology hiring", href: "/industries#technology" },
      { label: "Direct hire", href: "/services/direct-hire" },
      { label: "Executive search", href: "/services/executive-search" },
    ],
  },
  {
    id: "ai-in-recruitment",
    title: "AI in recruitment: what it does well, and where it fails",
    dek: "Screening, sourcing and matching have all been automated. A clear-eyed account of which parts work, which parts are oversold, and what a buyer should ask.",
    date: "2026-09-11",
    displayDate: "11 Sep 2026",
    readTime: "10 min read",
    category: "blog",
    categoryLabel: "Blog",
    image: { src: "/assets/services/contract.jpg", alt: "A software developer working at a computer in an office" },
    summary:
      "AI is genuinely good at the parts of recruitment that are search and summarisation — finding people who match a pattern, drafting outreach, extracting structure from unstructured CVs, scheduling. It is unreliable at the parts that are judgement: deciding who is actually good, predicting performance, and assessing anything the training data under-represents. The practical line is that AI should widen the top of the funnel and remove administration, while a human owns every decision that eliminates a candidate. Buyers should ask any vendor three things: what the model was trained on, what happens when it is wrong, and who is accountable for the decision.",
    sections: [
      {
        h: "What AI is genuinely good at",
        p: [
          "Recruitment contains a great deal of work that is pattern-matching and text handling, and machines have become very good at both. Sourcing is the clearest case: given a description of a person, a model can search a very large index and return candidates who resemble it, far faster and more exhaustively than a human working through a database by keyword. That is a real improvement, because the limiting factor in most searches is how many relevant people you ever saw.",
          "The same applies to the administrative layer. Parsing a CV into structured fields, scheduling across five calendars, drafting a first outreach message, summarising a call, chasing a reference — these are tasks with a correct answer and a low cost of error, and automating them frees the hours that were never the valuable part of the job.",
        ],
        list: {
          intro: "The uses where the technology is straightforwardly better than the manual alternative:",
          items: [
            "Searching a large candidate index for people who resemble a described profile.",
            "Extracting structured data from CVs, job specs and notes.",
            "Scheduling, reminders, and the administrative traffic around a loop.",
            "Drafting — outreach, summaries, debrief notes — with a human editing before it is sent.",
            "Surfacing inconsistencies for a human to check, rather than resolving them.",
          ],
        },
      },
      {
        h: "Where it fails, and why the failure is hard to see",
        p: [
          "The difficult cases are the ones that look like pattern-matching and are actually judgement. Whether someone will be good in a role is not a property of their CV; it is a prediction about a person in a context, and the historical data a model learns from records who was hired and who succeeded under a previous set of decisions — including the bad ones. A model trained on past hiring learns past hiring, and that includes whatever was wrong with it.",
          "This is why automated scoring of candidates deserves more scepticism than automated sourcing. A sourcing model that misses good people costs you reach, which you can notice and correct. A scoring model that eliminates good people produces a shortlist that looks clean and confident, and you never see what it removed. The error is invisible by construction, which is exactly the property you do not want in a system making decisions about people.",
          "The second failure mode is narrower and more practical: models are weakest where the training data is thinnest. Unusual career paths, non-linear histories, credentials from smaller markets, career breaks, and roles whose titles do not travel between industries are all under-represented, and all of them describe candidates who are often excellent and consistently under-ranked.",
        ],
      },
      {
        h: "The line we draw",
        p: [
          "The rule that survives contact with real searches is this: automation may widen the funnel and carry administration, but a human owns every decision that removes a candidate. Anything that adds people to consideration is low-risk and usually worth doing. Anything that subtracts them needs a person who can be asked why.",
          "That is not a philosophical position. It is a practical one about where errors become visible. An over-inclusive shortlist wastes a screening call. An over-exclusive one costs you a hire you will never know you missed.",
        ],
        table: {
          head: ["Task", "Sensible to automate?", "Why"],
          rows: [
            ["Finding candidates who match a profile", "Yes", "Widens reach; errors cost time, not people"],
            ["Parsing CVs and specs into structured data", "Yes", "Deterministic, checkable, low stakes"],
            ["Scheduling and follow-up", "Yes", "No judgement involved"],
            ["Drafting outreach and summaries", "With editing", "Output is reviewed before it has an effect"],
            ["Ranking or scoring candidates", "With caution", "Encodes historical decisions; errors are hidden"],
            ["Rejecting candidates automatically", "No", "Removes people with no human accountable"],
            ["Assessing culture, potential or motivation", "No", "Not inferable from the available data"],
          ],
        },
      },
      {
        h: "What a buyer should ask a vendor",
        p: [
          "Most procurement conversations about recruitment AI focus on accuracy claims, which are the least useful thing to compare because nobody discloses the test set. Three other questions tell you more.",
          "What was the model trained on, and does it include your kind of role in your kind of market? A tool trained largely on one sector's hiring in one country will rank candidates from elsewhere lower, and it will do so quietly. What happens when it is wrong — is there a route by which a candidate or a hiring manager can surface a bad outcome, and does anything change as a result? And who is accountable for a decision the system makes: if a candidate asks why they were rejected, is there a person who can answer, or only a score?",
          "There is a regulatory dimension to the third question that is moving quickly. Several jurisdictions now place obligations on employers using automated tools in hiring decisions — around disclosure, human oversight, and in some cases independent auditing. The specifics vary by jurisdiction and change often enough that anything written here would date; the practical point is that automated rejection is the highest-risk use both ethically and legally, and it is the one to keep a human in.",
        ],
      },
      {
        h: "What this means for candidates",
        p: [
          "If you are applying rather than hiring, the honest advice is unglamorous. Structure helps: clear titles, explicit technologies and responsibilities, and plain descriptions of what you owned are easier for both a model and a tired human to parse than elegant prose. That is not gaming the system; it is writing clearly.",
          "The more useful move is to reduce how much of your candidacy depends on automated screening at all. A referral, a direct approach, or a recruiter who has actually spoken to you all route around the part of the process most likely to misread an unusual history. That has always been true. Automation has made it more true.",
        ],
      },
      {
        h: "How Rivago helps",
        p: [
          "We use these tools for what they are good at — mapping a market, surfacing people a keyword search would not reach, and taking administration off a search — and we do not use them to decide who is worth meeting. Every candidate presented to a client has been interviewed by the partner presenting them, and every rejection has a person behind it who can say why.",
          "If a tool is part of your own process and you want a second opinion on where it sits in the funnel, that is a conversation we are happy to have without a mandate attached.",
        ],
      },
    ],
    faqs: [
      { q: "Can AI replace a recruiter?", a: "It replaces parts of the work — searching, parsing, scheduling, drafting — and not the part that decides who is actually good. Prediction of performance from a CV is not a solved problem, and the errors a scoring model makes are invisible in a way that sourcing errors are not. The useful framing is that automation widens the funnel while a human owns every decision that removes someone." },
      { q: "Is it safe to use AI to screen out candidates automatically?", a: "It is the highest-risk use, both practically and legally. A model trained on historical hiring reproduces historical decisions, and an over-exclusive shortlist costs you hires you will never see. Several jurisdictions also place obligations on employers using automated tools in hiring decisions — disclosure, human oversight, and in some cases auditing. Keep a person accountable for rejections." },
      { q: "Does AI make hiring more biased or less?", a: "Either, depending on where it sits. Used to widen reach it can surface people a keyword search would never have found. Used to rank or reject it encodes whatever was in the training data, and is weakest exactly where that data is thinnest — unusual paths, career breaks, credentials from smaller markets." },
      { q: "What should I ask a recruitment AI vendor?", a: "What the model was trained on and whether it covers your roles and markets; what happens when it is wrong and whether anything changes as a result; and who is accountable for a decision it makes. Accuracy claims are the least comparable thing on offer, because the test set is never disclosed." },
      { q: "How should a candidate write a CV that AI will read properly?", a: "Plainly. Explicit titles, technologies and responsibilities, and direct descriptions of what you owned, parse better for both software and a tired human than elegant prose. The higher-leverage move is to route around automated screening altogether — a referral or a direct conversation with a recruiter does not depend on it." },
    ],
    next: [
      { label: "How we work", href: "/about" },
      { label: "Talk to a partner", href: "/contact-us" },
      { label: "Recruitment Process Outsourcing", href: "/services/rpo" },
    ],
  },
  {
    id: "skills-based-hiring",
    title: "Skills-based hiring: how to actually do it",
    dek: "Dropping the degree requirement is the easy part. What has to change in the brief, the screen and the interview for skills-based hiring to mean anything.",
    date: "2026-09-08",
    displayDate: "8 Sep 2026",
    readTime: "8 min read",
    category: "interview",
    categoryLabel: "Interview guide",
    image: { src: "/assets/services/rpo.jpg", alt: "A team working through a planning session with sticky notes on a wall" },
    summary:
      "Skills-based hiring means assessing what someone can do rather than inferring it from where they have been. Most attempts fail at the second step: the degree requirement comes off the advert, and the screen, the shortlist and the interview carry on using employer prestige and job titles as proxies. Doing it properly means naming the skills that actually predict success in the role, deciding in advance how each one will be evidenced, and replacing CV-pattern screening with something that tests the claim. It widens the pool meaningfully — but only if the assessment work is done, and it is more work, not less.",
    sections: [
      {
        h: "What it actually means",
        p: [
          "Skills-based hiring is the practice of assessing a candidate against what the job requires them to do, rather than inferring capability from credentials, employer names or years served. The argument for it is simple: those proxies were never very predictive, and they systematically exclude people who can do the work but took an unusual route to being able to.",
          "The argument against doing it badly is equally simple. A proxy is a cheap signal, and removing it without replacing it leaves you with nothing — which is why so many skills-based initiatives quietly revert within a year. The degree line comes off the advert, applications rise, the screening team has no new instrument, and they fall back on exactly the same heuristics they used before.",
        ],
      },
      {
        h: "Start with the brief, not the advert",
        p: [
          "The work begins before anything is posted. Name the four or five things a person has to be able to do for this role to go well, in terms specific enough that two people would agree on whether a candidate had demonstrated them. \"Strong communicator\" fails that test. \"Can take an ambiguous request from a non-technical stakeholder and come back with a scoped proposal\" passes it.",
          "Then, for each one, decide in advance how it will be evidenced — a work sample, a structured question with a known good answer, a portfolio walkthrough, a reference question. Deciding this before you meet anyone is what stops the bar moving candidate by candidate, and it is the same discipline behind a good scorecard.",
        ],
        list: {
          intro: "A usable skill definition has three parts:",
          items: [
            "The task, described concretely enough to be observed rather than asserted.",
            "The standard — what a strong answer looks like, agreed before the first interview.",
            "The evidence — which stage of the process will test it, and how.",
          ],
        },
      },
      {
        h: "The screen is where it usually fails",
        p: [
          "If the shortlist is still being built by scanning CVs for recognisable employers and titles, nothing has changed except the wording of the advert. This is the step that takes real effort to replace, because CV-pattern screening is fast and the alternatives are not.",
          "The workable replacements are a short structured application — three or four questions about relevant work, scored against the standard you agreed — or a brief, genuinely brief, work sample. Both cost more than reading a CV. Both are also the only thing that makes the rest of the exercise meaningful, and a structured application is cheaper than most teams expect once the questions are written.",
          "One caution on work samples: length is where goodwill is lost. An unpaid exercise that takes a candidate a full day will be completed mainly by people who can afford a spare day, which reintroduces the selection effect you were trying to remove. Keep it under an hour, or pay for it.",
        ],
      },
      {
        h: "What to keep from the old process",
        p: [
          "Skills-based does not mean credential-blind in every case. Where a qualification is a legal or regulatory requirement — clinical registration, a licence to practise, a security clearance — it is not a proxy for capability, it is a condition of doing the job at all, and treating it as a bias to be removed is a category error.",
          "Domain experience is the more interesting case. It is often a genuine requirement and often a lazy one, and the way to tell is to ask what specifically the experience provides. If the answer is knowledge of a regulatory environment or a technical stack, that is testable and therefore a skill. If the answer is that everyone in the team has it, that is a proxy.",
        ],
      },
      {
        h: "What changes, and what it costs",
        p: [
          "Done properly, the pool widens — that is the point, and it is the return. You will see candidates from adjacent industries, from non-traditional educational routes, and from smaller employers whose names carry no signal, and some of them will be the strongest people in the process.",
          "The cost is front-loaded work and slower screening. Designing the assessment is real effort, interviewers have to be trained on the standard, and a structured application takes longer to review than a CV. Teams that expect skills-based hiring to be faster are usually disappointed. Teams that expect it to reach people they were not reaching are usually not.",
        ],
      },
      {
        h: "How Rivago helps",
        p: [
          "Every search we run starts with a scorecard agreed in the intake session, and every candidate we present has been interviewed against it — which is the same discipline under a different name. Where a client wants to move to skills-based hiring, the practical help is usually in the first hour: turning a brief full of proxies into a list of things a person has to be able to do, and deciding how each one gets evidenced.",
          "We will also tell you when a requirement on the brief is doing no work, which is the least popular and most useful part of the conversation.",
        ],
      },
    ],
    faqs: [
      { q: "What is skills-based hiring?", a: "Assessing candidates against what the role requires them to do, rather than inferring capability from credentials, employer names or years served. In practice it means defining the four or five skills that predict success, deciding in advance how each will be evidenced, and screening against that rather than against CV patterns." },
      { q: "Why do skills-based hiring initiatives fail?", a: "Almost always at the screen. The degree requirement comes off the advert but the shortlist is still built by scanning CVs for recognisable employers and titles, so nothing has changed except the wording. Removing a proxy without replacing it with an assessment leaves the team with no instrument and they revert to the old heuristics." },
      { q: "Should we still require a degree?", a: "Only where it is a legal or regulatory condition of doing the job — clinical registration, a licence to practise, a clearance. Elsewhere, ask what specifically the qualification provides. If the answer is a testable body of knowledge, test it. If the answer is that it filters the pile, it is a proxy." },
      { q: "Are work samples a good idea?", a: "Yes, with one caution: length. An unpaid exercise that takes a full day is completed mainly by candidates who can afford a spare day, which reintroduces the selection effect you were trying to remove. Keep it under an hour, or pay for it." },
      { q: "Does skills-based hiring make hiring faster?", a: "No, and teams expecting that are usually disappointed. The work is front-loaded — designing assessments, training interviewers, reviewing structured applications — and a structured application takes longer to read than a CV. What it does reliably is widen the pool." },
    ],
    next: [
      { label: "Structured interviews", href: "/resources/article?id=structured-interviews" },
      { label: "Writing a job brief", href: "/resources/article?id=job-brief" },
      { label: "Talk to a partner", href: "/contact-us" },
    ],
  },
  {
    id: "contract-vs-permanent",
    title: "Contract, temporary, interim or permanent: which one you need",
    dek: "Four engagement types, four different problems. A decision guide for choosing the structure before you write the brief.",
    date: "2026-09-04",
    displayDate: "4 Sep 2026",
    readTime: "8 min read",
    category: "blog",
    categoryLabel: "Blog",
    image: { src: "/assets/services/temporary.jpg", alt: "Warehouse workers scanning boxes on a distribution floor" },
    summary:
      "The four common engagement types solve different problems and are not interchangeable. Permanent hiring is for work that continues indefinitely and benefits from accumulated context. Contract is for defined scope with a known end — a project, a migration, a build. Temporary is for capacity: peaks, seasonal volume and cover. Interim is for a leadership gap, where the job is to hold or turn something around rather than to do the work. Choosing the wrong structure is expensive in a specific way: permanent hiring for temporary work produces redundancies, and contracting for permanent work loses the institutional knowledge you were paying to build.",
    sections: [
      {
        h: "The four types, side by side",
        p: [
          "Most briefs arrive with the engagement type already decided, and a reasonable share of them have it wrong — usually because the structure was chosen by which budget was available rather than by what the work actually is. It is worth five minutes at the start.",
        ],
        table: {
          head: ["Type", "The problem it solves", "Typical length", "How it is usually charged"],
          rows: [
            ["Permanent", "Ongoing work that rewards accumulated context", "Indefinite", "One-off fee on hire"],
            ["Contract", "Defined scope with a known end", "Weeks to months, fixed term", "Hourly or daily markup"],
            ["Temporary", "Capacity — peaks, seasonal volume, cover", "Days to weeks", "Hourly markup"],
            ["Interim", "A leadership gap that cannot wait for a search", "Months", "Day rate, month to month"],
          ],
          note: "Commercial models vary by market and by role. Confirm the structure before budgeting.",
        },
      },
      {
        h: "Permanent: when the context is the point",
        p: [
          "Permanent hiring is right when the work continues indefinitely and when someone who has been doing it for two years is materially better at it than someone who started last month. That second condition is the real test, and it is not true of every role. Where institutional knowledge compounds — the systems, the customers, the reasons things are the way they are — a permanent hire is the only structure that captures it.",
          "The cost of getting this wrong in the other direction is redundancy. Hiring permanently for work that has a foreseeable end means an exit process, notice, possibly a payment, and a person who has to be told. That is worse for everyone than a contract that concludes on the date everyone agreed at the start.",
        ],
      },
      {
        h: "Contract: defined scope, known end",
        p: [
          "Contract engagements suit work with a shape: a migration, a system build, a regulatory programme, a product launch. The end is foreseeable even if the exact date moves, and the value is in the specific capability rather than in the accumulated context.",
          "Two things make contract work well. The first is genuine scope — a contract brief that says \"help the team\" will run long, cost more than budgeted, and leave nobody able to say whether it succeeded. The second is worker classification, which is where contract engagements most often go wrong administratively. How a contractor is engaged, paid and supervised determines their status, and getting it wrong creates liability that surfaces later. This is one of the main reasons contract hiring runs through an agency payroll rather than direct.",
        ],
      },
      {
        h: "Temporary: capacity, not capability",
        p: [
          "Temporary staffing solves a different problem again: you have more work than people for a known period. A seasonal peak, a site that needs covering, a team down two people to parental leave. The requirement is capacity at a known standard, deployed quickly and scaled back when the peak passes.",
          "The distinction from contract matters commercially. A contractor is usually engaged for a capability you do not have; a temporary worker for capacity you have run out of. Briefing one as the other produces either an overqualified person doing volume work and leaving, or an underqualified one on a project that needed specialist judgement.",
        ],
      },
      {
        h: "Interim: holding or turning, not doing",
        p: [
          "Interim leadership is for a gap at the top of a function — a departure, a parental leave, an acquisition, a turnaround — where the organisation cannot wait the three to six months a permanent search will take, and where the job is to lead rather than to execute.",
          "The most common briefing error here is treating interim as a cheaper permanent hire. It is not cheaper: day rates for genuine interim operators are high, precisely because the person is expected to be effective in week one with no ramp. What you are buying is speed and experience, not a discount. The second error is failing to name the mandate. \"Hold the function steady until the permanent hire lands\" and \"restructure the department\" are different jobs requiring different people, and the interim should be told which one it is before they start.",
        ],
        list: {
          intro: "Four questions that usually settle the choice:",
          items: [
            "Does the work have a foreseeable end? If yes, it is contract or temporary, not permanent.",
            "Is someone better at this after two years than after two months? If yes, lean permanent.",
            "Is the gap at the top of a function, with people reporting into it? If yes, interim rather than contract.",
            "Are you short of capability or short of capacity? Capability is contract; capacity is temporary.",
          ],
        },
      },
      {
        h: "Hiring across borders changes the question",
        p: [
          "If the person will work in a country where you have no legal entity, the engagement type is only half the decision — the other half is who employs them. Contracting an individual directly across a border is where worker classification risk is highest, and the consequences land on the client rather than the worker.",
          "An Employer of Record is the usual answer: a third party becomes the legal employer in-country, handling payroll, tax, benefits and contracts, while the person works for you day to day. That is a separate decision from permanent versus contract, and it applies to both.",
        ],
      },
      {
        h: "How Rivago helps",
        p: [
          "We run all four structures, which means we have no commercial reason to talk you into the one with the largest fee. The most useful conversation is usually at the brief stage, before anything is advertised: what the work actually is, whether it ends, and whether the constraint is capability or capacity.",
          "Where the answer involves hiring somewhere you hold no entity, we can act as the employer of record for it rather than sending you elsewhere.",
        ],
      },
    ],
    faqs: [
      { q: "What is the difference between contract and temporary staffing?", a: "Contract solves a capability gap on work with a defined scope and a foreseeable end — a migration, a build, a programme. Temporary solves a capacity gap: more work than people for a known period, such as a seasonal peak or cover for leave. Briefing one as the other tends to produce either an overqualified person doing volume work, or an underqualified one on work that needed specialist judgement." },
      { q: "When should I hire permanently rather than on contract?", a: "When the work continues indefinitely and when somebody who has done it for two years is materially better at it than someone who started last month. If that second condition is not true, the accumulated context you are paying for does not exist and a contract may fit better. Hiring permanently for work with a foreseeable end means a redundancy process later." },
      { q: "What is an interim leader, and how is it different from a contractor?", a: "An interim fills a gap at the top of a function, with people reporting into the role, and is expected to be effective in week one without a ramp. A contractor is engaged for a specific capability on defined work. Interim is not a cheaper permanent hire — day rates are high, and what you buy is speed and experience." },
      { q: "Why does worker classification matter?", a: "How a contractor is engaged, paid and supervised determines their employment status, and getting it wrong creates liability that surfaces later — usually for the client rather than the worker. It is one of the main reasons contract hiring runs through an agency payroll rather than a direct arrangement, and the risk is highest across borders." },
      { q: "Can I hire a contractor in a country where I have no entity?", a: "Directly, it is the highest-risk version of a classification problem. The usual answer is an Employer of Record: a third party becomes the legal employer in-country for payroll, tax, benefits and contracts while the person works for you day to day. That decision is separate from whether the engagement is permanent or contract." },
    ],
    next: [
      { label: "All staffing services", href: "/services" },
      { label: "Contract staffing", href: "/services/contract-staffing" },
      { label: "Interim & fractional leadership", href: "/services/interim-leadership" },
    ],
  },
  {
    id: "employer-of-record",
    title: "Employer of Record: when to use one, and when not to",
    dek: "Hiring someone in a country where you have no entity. What an EOR actually does, what it costs you in control, and the cases where it is the wrong tool.",
    date: "2026-08-28",
    displayDate: "28 Aug 2026",
    readTime: "8 min read",
    category: "blog",
    categoryLabel: "Blog",
    image: { src: "/assets/services/eor.jpg", alt: "A pen resting on a signed contract" },
    summary:
      "An Employer of Record is a company that becomes the legal employer of your worker in a country where you have no entity, handling payroll, tax, benefits, contracts and statutory compliance while the person works for you day to day. It is the right tool for hiring one to a handful of people in a market you are testing, for moving quickly, and for removing classification risk. It is the wrong tool once headcount in a country is large enough that per-employee fees exceed the cost of an entity, where the role requires the worker to sign on your behalf, and in the small number of markets where EOR arrangements are legally constrained.",
    sections: [
      {
        h: "What an EOR actually does",
        p: [
          "Employment is a legal relationship with a jurisdiction attached. To employ someone in a country, somebody has to be their legal employer there: registered, running compliant payroll, withholding the right taxes, providing statutory benefits, and issuing a contract that satisfies local law. Setting up an entity to do that takes months and carries ongoing cost.",
          "An Employer of Record short-circuits it. The EOR already has the entity and the registrations. It employs the person formally, and you direct their work. On paper there are two relationships: the worker's employment contract with the EOR, and your service agreement with the EOR. In practice the person joins your team, uses your systems and reports to your manager.",
        ],
        list: {
          intro: "What sits with the EOR:",
          items: [
            "The employment contract, compliant with local law.",
            "Payroll, income tax withholding and social contributions.",
            "Statutory benefits, leave entitlements and any mandatory insurance.",
            "Onboarding paperwork, and termination handled to local requirements.",
            "Liability for getting the above right.",
          ],
        },
      },
      {
        h: "When it is the right tool",
        p: [
          "The clearest case is testing a market. You want one salesperson in a country, or two engineers, and you do not yet know whether the market justifies an entity. An EOR lets you find out with a person actually working there rather than with a forecast.",
          "The second case is speed. Entity formation is measured in months and EOR onboarding in days or weeks, so when a strong candidate is available now and the entity is a quarter away, the EOR is the difference between hiring them and losing them.",
          "The third is classification risk, and it is the one most often underrated. The alternative to an EOR is frequently engaging the person as an independent contractor — which, where they work full-time to your direction on your systems, is the arrangement most likely to be reclassified as employment later, with back taxes and penalties attached. The EOR removes that exposure by making the employment real.",
        ],
      },
      {
        h: "What it costs, and what you give up",
        p: [
          "Commercially, an EOR is usually a per-employee monthly fee on top of salary and statutory costs. That is the number to model against entity formation, and the crossover point depends on the country and on how many people you expect to employ there. A useful way to frame it: an EOR is cheap for a handful of people and expensive for a department.",
          "The subtler cost is control. You are directing someone's work but you are not their employer, and that shapes things at the edges. Equity participation is more complicated. Some benefits are harder to offer than they would be in your own entity. Termination follows local law and the EOR's process, not yours. None of these are reasons to avoid an EOR; they are reasons to know what you are signing.",
        ],
      },
      {
        h: "When it is the wrong tool",
        p: [
          "Three situations push you toward an entity instead. The first is scale — once headcount in a country is substantial, per-employee fees stop being the cheaper option and you are paying a premium for flexibility you no longer need. The second is any role that requires the person to act for your company in a legal capacity: signing contracts, holding a regulated licence on your behalf, representing the entity to a regulator. They are not employed by you, which is precisely the point, and it becomes a problem here.",
          "The third is jurisdictional. EOR arrangements are not uniformly straightforward everywhere — some markets constrain the practice, and some treat long-running arrangements differently from short ones. Rules change, and anything specific written here would date. The practical step is to confirm the position in the specific country before committing, rather than assuming EOR is universally available.",
        ],
      },
      {
        h: "EOR is not a hiring service",
        p: [
          "One distinction worth making, because it is a common source of confusion in procurement. An EOR employs a person you have already chosen. It does not find them. Recruitment and employment of record are separate services that are often bought together and sometimes sold as one.",
          "That matters when comparing providers. A pure EOR platform will onboard whoever you send it and has no view on whether the hire is a good one. A recruiter who also acts as EOR can run the search and then employ the person in-country, which removes a handoff — but the two services should still be priced and judged separately.",
        ],
      },
      {
        h: "How Rivago helps",
        p: [
          "We recruit into the United States, Canada, the UAE and India, and where a client needs to hire somewhere they hold no entity, we can act as the employer of record for that person rather than handing them to a third party. That means one relationship covering the search and the employment.",
          "If the honest answer is that you should form an entity instead, we will say so — that conversation is quicker than the alternative and it comes up more often than you would expect.",
        ],
      },
    ],
    faqs: [
      { q: "What is an Employer of Record?", a: "A company that becomes the legal employer of your worker in a country where you have no entity. It holds the employment contract and handles payroll, tax withholding, statutory benefits and compliant termination, while the person works to your direction day to day." },
      { q: "Is an EOR cheaper than setting up an entity?", a: "For a handful of people, usually yes — entity formation takes months and carries ongoing cost. For a department, usually no: per-employee monthly fees add up and at some headcount you are paying a premium for flexibility you no longer need. The crossover depends on the country and on how many people you expect to employ there." },
      { q: "What is the difference between an EOR and hiring a contractor?", a: "A contractor is engaged as an independent business; an EOR arrangement is real employment with someone else as the employer. Where a person works full-time to your direction on your systems, the contractor route is the one most likely to be reclassified as employment later, with back taxes and penalties. An EOR removes that exposure." },
      { q: "When should I not use an EOR?", a: "At scale in one country, where an entity becomes cheaper; for any role that must act for your company in a legal capacity, such as signing contracts or holding a regulated licence, because the person is not employed by you; and in markets where EOR arrangements are legally constrained. Confirm the position in the specific country rather than assuming availability." },
      { q: "Does an EOR find candidates for me?", a: "No. An EOR employs a person you have already chosen — recruitment and employment of record are separate services, often bought together and sometimes sold as one. A recruiter who also acts as EOR removes a handoff, but the two should still be priced and judged separately." },
    ],
    next: [
      { label: "Employer of Record", href: "/services/employer-of-record" },
      { label: "All staffing services", href: "/services" },
      { label: "Talk to a partner", href: "/contact-us" },
    ],
  },
  {
    id: "salary-benchmarking",
    title: "How to benchmark a salary without a salary survey",
    dek: "Published data is stale, generic, or behind a paywall. Five sources you already have access to, and how to combine them into a defensible band.",
    date: "2026-08-22",
    displayDate: "22 Aug 2026",
    readTime: "7 min read",
    category: "salary",
    categoryLabel: "Salary guide",
    image: { src: "/assets/services/executive.jpg", alt: "A microphone on a boardroom table" },
    summary:
      "Most salary benchmarking problems come from treating a single published number as the answer. Published surveys are lagging by construction, aggregate across job titles that mean different things at different companies, and rarely segment finely enough to be useful for a specific role in a specific market. A more defensible band comes from triangulating five sources you already have: your own recent offers and declines, what candidates currently tell you they are on, advertised ranges where pay transparency applies, what your recruiter is seeing in live searches, and internal equity. None is sufficient alone; together they produce a range you can explain.",
    sections: [
      {
        h: "Why the published number is not the answer",
        p: [
          "A salary survey is a photograph of the past. It reports what was paid during a collection window that closed before publication, which means every number in it lags the market by months at minimum, and by considerably more in a year where the market moved.",
          "The deeper problem is aggregation. A survey reports a figure for a title, but titles are not standardised — a senior engineer at a forty-person company and one at a multinational are different jobs with the same name, and a single median across both describes neither. The finer the segmentation you need, the thinner the sample supporting it, and most surveys stop segmenting well before the level of detail a specific hiring decision requires.",
          "None of this makes surveys useless. It makes them one input, best used for direction and structure rather than as the number.",
        ],
      },
      {
        h: "The five sources you already have",
        p: [
          "A defensible band comes from triangulation. Each of these is biased in a known direction, which is what makes combining them work — the biases do not point the same way.",
        ],
        table: {
          head: ["Source", "What it tells you", "How it is biased"],
          rows: [
            ["Your own recent offers", "What you have actually been willing to pay", "Reflects your constraints, not the market's"],
            ["Offers that were declined", "Where your number stopped being competitive", "Only visible if you ask why"],
            ["What candidates say they earn", "Live market rates at the top of the funnel", "Self-reported; skews high"],
            ["Advertised ranges", "What competitors will commit to publicly", "Wide by design where disclosure is required"],
            ["Your recruiter's live searches", "What is closing right now, at your level", "Depends on how honest they are"],
          ],
        },
      },
      {
        h: "Declines are the most useful and most wasted signal",
        p: [
          "The single most informative data point available to you is an offer a good candidate turned down, and the reason. It is precise — a specific person, a specific role, a specific number, a specific alternative — and it is current in a way no survey can be.",
          "Most companies throw it away. The candidate declines, the recruiter records \"accepted another offer\", and nothing is learned. Asking one further question — what did the other offer look like, and was it the money — turns a lost candidate into the best benchmarking input you will get all quarter. Not everyone will answer. Enough will.",
        ],
      },
      {
        h: "Transparency rules have changed what is visible",
        p: [
          "In a growing number of jurisdictions employers are required to publish a pay range on job advertisements, and in some, to disclose ranges to candidates or existing employees on request. Where those rules apply, a substantial amount of competitor pay data became publicly readable, which is genuinely new.",
          "Read it carefully, though. A published range is what a company will commit to publicly, which tends to be wider than what it will actually pay for a specific person — the top of an advertised band is often reserved for a candidate who does not exist. The useful reading is the floor, which is much harder to inflate, and the relative position of competitors against each other.",
          "The specific obligations vary by jurisdiction and are changing, so confirm what applies where you are hiring rather than assuming.",
        ],
      },
      {
        h: "Build the band, then write down why",
        p: [
          "Combine the sources into a range with a defined bottom and top, and — this is the part usually skipped — write down what moves a candidate from one end to the other, in terms a panel can assess. A band with no articulated progression is a number with decoration, and it will be treated as a single figure by everyone who reads it.",
          "Then check internal equity before you go to market. A band that is correct externally and wrong internally creates a problem you will meet later, the first time two people doing the same job compare notes. Where the external market has genuinely moved past your existing team, that is a decision to make deliberately rather than to discover.",
        ],
      },
      {
        h: "How Rivago helps",
        p: [
          "Recruiters see the part of the market that is actually transacting — what is being offered, what is being accepted, and what is being turned down, live, at the level you are hiring. That is the input a survey cannot provide, and it is worth asking for specifically rather than accepting a general reassurance that your band is fine.",
          "We will tell you when a band is below what we are seeing close, including when that is not what you want to hear, because the alternative is a search that runs for months and ends with the band being raised anyway.",
        ],
      },
    ],
    faqs: [
      { q: "Are salary surveys worth buying?", a: "As one input, for direction and structure, yes. As the answer, no. They lag the market by construction, and they aggregate across titles that mean different things at different companies — a senior engineer at a forty-person company and at a multinational are different jobs sharing a name. The finer the segmentation you need, the thinner the sample behind it." },
      { q: "How do I benchmark a salary with no budget for data?", a: "Triangulate five sources you already have: your own recent offers, offers that were declined and why, what candidates report earning, advertised ranges where pay transparency applies, and what your recruiter is seeing close in live searches. Each is biased in a different direction, which is what makes combining them work." },
      { q: "Can I trust the salary ranges in job adverts?", a: "Read the floor rather than the ceiling. Where disclosure is required, published ranges are what a company will commit to publicly, which is usually wider than what it will pay a specific person — the top is often reserved for a candidate who does not exist. The bottom is much harder to inflate, and relative positions between competitors are informative." },
      { q: "What is the most useful salary data a company already has?", a: "Offers that strong candidates declined, and the reason. It is a specific person, a specific number and a specific alternative, and it is current in a way no survey can be. Most companies record \"accepted another offer\" and learn nothing; one follow-up question turns it into the best input of the quarter." },
      { q: "Should I match the market if it has moved past my existing team?", a: "That is a deliberate decision rather than a discovery, and it should be made before you go to market rather than after. A band that is right externally and wrong internally creates a problem the first time two people doing the same job compare notes." },
    ],
    next: [
      { label: "Setting a salary band", href: "/resources/article?id=salary-band" },
      { label: "What moves VP Engineering pay", href: "/resources/article?id=vp-eng-pay" },
      { label: "Talk to a partner", href: "/contact-us" },
    ],
  },
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
