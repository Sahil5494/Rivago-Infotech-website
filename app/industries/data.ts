export const practices = [
  {
    id: "technology",
    navLabel: "Technology",
    practiceNum: "Practice 01",
    titleTop: "Technology &",
    titleEm: "engineering leadership.",
    lede: "Engineering and platform leadership, from a company's first VP of Engineering through to a CTO succession — across cloud-native startups and enterprise stacks alike.",
    roles: [
      "VP / SVP of Engineering",
      "Chief Technology Officer",
      "Director of Platform / SRE",
      "Principal / Staff IC tracks",
      "Head of Security",
      "Head of AI / ML Platform",
    ],
  },
  {
    id: "healthcare",
    navLabel: "Healthcare",
    practiceNum: "Practice 02",
    titleTop: "Healthcare,",
    titleEm: "clinical & biotech.",
    lede: "Provider, payer and life-sciences hiring, where licensure and credentialing shape the timeline as much as the search does. We raise that at brief stage rather than at offer.",
    roles: [
      "Chief Medical Officer",
      "Director of Clinical Operations",
      "VP of Regulatory Affairs",
      "Head of Quality & 510(k)",
      "Chief Nursing Officer",
    ],
  },
  {
    id: "legal",
    navLabel: "Legal",
    practiceNum: "Practice 03",
    titleTop: "Legal &",
    titleEm: "general counsel.",
    lede: "First-GC searches, deputy succession and lateral hires for in-house teams — including the confidential ones, where the incumbent does not yet know the search is running.",
    roles: [
      "General Counsel",
      "Deputy General Counsel",
      "Head of Commercial / Privacy",
      "Head of Securities & M&A",
    ],
  },
  {
    id: "finance",
    navLabel: "Finance",
    practiceNum: "Practice 04",
    titleTop: "Finance, banking",
    titleEm: "capital markets.",
    lede: "CFO succession, treasury, risk and the long bench beneath them, across our Wilmington, Ontario and Pune desks.",
    roles: [
      "Chief Financial Officer",
      "Head of Treasury",
      "VP of FP&A",
      "Quant Research Lead",
      "Head of Risk & Compliance",
    ],
  },
  {
    id: "aerospace",
    navLabel: "Aerospace & defence",
    practiceNum: "Practice 05",
    titleTop: "Aerospace,",
    titleEm: "cleared talent.",
    titleMid: "defence &",
    lede: "Tier-1 OEMs, defence primes and the supplier ecosystem beneath them. Where a role requires clearance, we establish that at brief stage — it governs who can realistically be approached.",
    roles: [
      "Director of Manufacturing",
      "Principal Systems Engineer",
      "Head of FAR/AR & compliance",
      "Director, Cleared Cybersecurity",
    ],
  },
  {
    id: "telecom",
    navLabel: "Telecom",
    practiceNum: "Practice 06",
    titleTop: "Telecom &",
    titleEm: "network infrastructure.",
    lede: "5G core, fibre rollout, MSO leadership. We staff inside the operator and the supplier — pricing intelligence across both sides of the table.",
    roles: [
      "Principal Network Architect",
      "VP of Network Operations",
      "Head of 5G Core Engineering",
      "Director, Field Operations",
    ],
  },
  {
    id: "automotive",
    navLabel: "Automotive",
    practiceNum: "Practice 07",
    titleTop: "Automotive &",
    titleEm: "mobility.",
    lede: "OEM, tier-1 supplier, and the new mobility entrants. Battery, ADAS, software-defined vehicle — we know who's hiring and who's quietly looking.",
    roles: [
      "Director of Manufacturing Engineering",
      "Head of Battery Engineering",
      "VP of Software (SDV)",
      "Head of Supply Quality",
    ],
  },
  {
    id: "supply",
    navLabel: "Supply & operations",
    practiceNum: "Practice 08",
    titleTop: "Supply chain",
    titleEm: "operations.",
    lede: "From distribution-centre leadership to global head-of-supply roles. We staff the spine of the business — the people who keep the operation moving when everything else is on fire.",
    roles: [
      "Chief Operating Officer",
      "VP of Supply Chain",
      "Head of Distribution",
      "Director, S&OP",
    ],
  },
  {
    id: "sales",
    navLabel: "Sales & marketing",
    practiceNum: "Practice 09",
    titleTop: "Sales,",
    titleEm: "growth.",
    titleMid: "marketing &",
    lede: "CRO succession, first-VP-of-marketing hires, demand-gen leadership. We know the OTE patterns and we know which “100% to plan” résumé actually beat the number.",
    roles: [
      "Chief Revenue Officer",
      "VP of Marketing",
      "Head of Demand Gen",
      "VP of Customer Success",
    ],
  },
  {
    id: "people",
    navLabel: "People & HR",
    practiceNum: "Practice 10",
    titleTop: "People",
    titleEm: "HR leadership.",
    titleMid: "&",
    lede: "The function that hires our function. CHRO succession, head-of-talent searches and total-rewards leaders — briefs written by people who know exactly how a search should run.",
    roles: [
      "Chief People Officer",
      "VP of Talent Acquisition",
      "Head of Total Rewards",
      "Director of L&D",
    ],
  },
] as const;

export const spine = [
  ["01 · Brief", "Intake call", "Sixty minutes with the hiring manager and the practice partner. We pressure-test the JD, agree must-haves, and write the scorecard before sourcing."],
  ["02 · Map", "Market mapping", "A longlist built from the practice partner's own network, the competitor set, and people we have screened before — not a job-board pull."],
  ["03 · Screen", "Calibration interviews", "Structured screens against your scorecard, not a keyword match. You see calibration profiles early, so the brief can be corrected before the shortlist sets."],
  ["04 · Panel", "Loop & debrief", "We project-manage scheduling, debriefs, calibration between rounds and references, and you get a written brief before each interview rather than after it."],
  ["05 · Close", "Offer & care", "Offer negotiation, counter-offer defence, day-90 check-in. Three, six and twelve-month touch-points with both sides."],
] as const;

/* Was "Four numbers we'll stand behind": 21 days median time-to-shortlist,
   94% offer-acceptance, and a partner "reachable on a Tuesday at 10pm". None
   were measured. These are commitments instead — things that are either done
   or not done on a given search, which a client can hold us to without our
   having to publish a statistic we cannot evidence.

   The replacement guarantee keeps its figures: they are documented on
   /services/direct-hire, including what voids them.

   Shape is [when, title, detail]. The first field is the point in a search
   the commitment bites — it replaces the giant figure the cards used to
   lead with, so one card carrying "90 days" no longer sits beside three
   with an empty number slot above them. */
export const writtenGuarantees = [
  ["At brief stage", "A date, in writing", "We commit to a delivery date when we take the brief, not after. If it is going to move, you hear it from us early rather than by waiting it out."],
  ["Every search", "One named partner", "The person who takes the brief screens the candidates and stands behind the recommendation. No handoff to a delivery team you have never met."],
  ["90 days", "Replacement guarantee", "On contingent direct hires; up to twelve months on retained search. Resignation and performance are covered, redundancy and cancelled roles are not — written into the agreement, not buried in terms."],
  ["Every shortlist", "An honest read", "Each shortlist says what is not a perfect fit as well as what is. You can disagree with the assessment, but you will not be guessing at it."],
] as const;

/* Emptied. All three quoted the invented practice partners by first name —
   Marcus, Eleanor, Lila — and were attributed to named clients who do not
   exist. The healthcare one also claimed "eleven clinical placements, zero
   compliance issues" for a Dubai hospital group, which is the same claim
   already removed from the home page for naming a regulator and a market
   Rivago has no office in.

   Refill as real clients agree to be quoted. Anonymised to a sector and a
   country is normal in recruitment and needs only their say-so. */
export const practiceTestimonials = [] as const;
