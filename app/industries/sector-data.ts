/* What the per-sector pages (/industries/[id]) add to the practice data in
   ./data.ts. Kept in its own file so the /industries hub, whose data and
   layout the client asked to keep as they were, is untouched by it.

   `jobDepts` maps a practice to the job board's `dept` values
   (app/view-jobs/jobs-data.ts), so a sector page can count and list its
   live roles and link to the board filtered to them.

   `core` groups the board's actual job titles in those departments into
   families. Nothing here is written from scratch: every family is a cluster
   of titles that are on the board today.

   Aerospace, telecom and automotive have no roles on the board, so they
   get no departments and no core list — their pages show the leadership
   roles the practice already claimed and nothing the board does not
   support. */
/* `placed` shows the placed-candidates row from lib/placements.ts. Every
   placement there is a technology hire, so only technology sets it.

   `title` / `lede` override the hub's wording on the sector page only. The
   hub's technology copy is about leadership searches; the sector page leads
   with the hands-on engineering hiring the board and the placements show,
   and keeps leadership as the second half of the sentence. */
/* `rich` turns on the longer sector page: why hiring in the sector is hard,
   why Rivago, and the search stages reworded for the sector. Written only
   from what the site already says or what the board shows — no figures that
   were not counted, no claim about technical testing, speed or guarantees.
   Each "hard" card links to the firm's own article on that problem. */
export type SectorCard = { t: string; d: string; article?: string };
export type SectorRich = {
  hard: SectorCard[];
  steps: { t: string; d: string }[];
};

export const sectorExtras: Record<string, {
  jobDepts: readonly string[];
  core: readonly string[];
  placed?: boolean;
  title?: { top: string; em: string };
  lede?: string;
  rich?: SectorRich;
}> = {
  technology: {
    placed: true,
    rich: {
      hard: [
        {
          t: "The best engineers aren\u2019t looking",
          d: "Strong engineers are usually employed and not on job boards. A posting reaches the people applying to everything, not the ones you want to hire.",
          article: "anti-portal",
        },
        {
          t: "A CV lists tools, not depth",
          d: "A keyword match finds anyone who has touched a technology. Telling a year of exposure from owning it in production takes a conversation about what they actually built.",
          article: "skills-based-hiring",
        },
        {
          t: "Slow loops lose people",
          d: "Good engineers rarely have one process running. Every extra round is another week for a faster offer to land first.",
          article: "interview-rounds",
        },
        {
          t: "Contract or permanent is the real decision",
          d: "Whether a role should be contract, contract-to-hire or permanent shapes who will take the call. Getting it wrong shrinks the market before the search starts.",
          article: "contract-vs-permanent",
        },
      ],
      steps: [
        { t: "A scorecard for the stack", d: "An intake call with the hiring manager agrees the stack, the level and the must-haves, and writes them into a scorecard before any sourcing starts." },
        { t: "Engineers who aren\u2019t on job boards", d: "A longlist from the partner\u2019s own network and the teams building on the same stack \u2014 not a job-board pull." },
        { t: "Depth, not keywords", d: "Each candidate is screened against the scorecard on what they have built and owned, not the tools listed on the CV. You see the first profiles early, so the brief can be corrected." },
        { t: "A short, managed loop", d: "We schedule the interviews and gather feedback after every round, so the process keeps moving and strong candidates are not lost to a faster offer." },
        { t: "Offer to start date", d: "Offer negotiation and counter-offer defence, through to the day they start \u2014 whether the role is contract, contract-to-hire or permanent." },
      ],
    },
    title: { top: "Technology &", em: "engineering talent." },
    lede: "Contract, contract-to-hire and permanent engineers — full-stack, data, cloud, AI and QA — and the leadership searches above them, from a company's first VP of Engineering to a CTO succession.",
    jobDepts: ["Technology", "Product", "Design"],
    core: [
      "Full-stack & backend engineers",
      "Frontend & mobile engineers",
      "Data & analytics engineers",
      "ML / AI engineers",
      "DevOps, SRE & cloud",
      "QA & test automation",
      "Security engineers",
      "Product managers & designers",
    ],
  },
  healthcare: {
    jobDepts: ["Healthcare"],
    core: [
      "Nurse managers & clinical nurse specialists",
      "Clinical research associates",
      "Clinical data managers",
      "Regulatory affairs",
      "QA / GMP",
      "Pharmacovigilance",
    ],
  },
  legal: {
    jobDepts: ["Legal"],
    core: ["Corporate & commercial counsel", "Privacy counsel", "Contracts managers", "Paralegals"],
  },
  finance: {
    jobDepts: ["Finance"],
    core: ["FP&A analysts & managers", "Controllers & accountants", "Compliance & AML", "Treasury analysts", "Internal audit"],
  },
  aerospace: { jobDepts: [], core: [] },
  telecom: { jobDepts: [], core: [] },
  automotive: { jobDepts: [], core: [] },
  supply: {
    jobDepts: ["Operations"],
    core: [
      "Supply chain & demand planning",
      "Logistics & transportation",
      "Distribution centre & plant managers",
      "Manufacturing, process & quality engineers",
      "Procurement",
    ],
  },
  sales: {
    jobDepts: ["Sales & Marketing"],
    core: ["Account executives", "Customer success", "Demand generation & product marketing", "Sales engineers & implementation"],
  },
  people: {
    jobDepts: ["People"],
    core: ["HR business partners & managers", "Technical recruiters & sourcers", "Talent acquisition managers", "Compensation & benefits", "L&D"],
  },
};
