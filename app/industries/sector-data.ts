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
   placement there is a technology hire, so only technology sets it. */
export const sectorExtras: Record<string, { jobDepts: readonly string[]; core: readonly string[]; placed?: boolean }> = {
  technology: {
    placed: true,
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
