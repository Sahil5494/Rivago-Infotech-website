/* Data for the Services page that is genuinely read from here.
 *
 * WHAT WAS DELETED, AND WHY IT IS WORTH KNOWING. This file used to be 405
 * lines. Nine of its eleven exports were dead — app/services/page.tsx hard-
 * codes its own markup and never imported them, and the one component that
 * did (ServicesRolesTabs.tsx) was itself unreferenced by any route.
 *
 * Dead code is normally a tidiness problem. This was not, because of what
 * the dead code held: `rlsTabs` carried ninety per-role placement counts
 * ("38 placements", "34 placements"), thirty-six sector metrics ("38%
 * outreach reply rate versus 9% industry baseline", "97% 90-day retention",
 * "312 active technology mandates this quarter") and nine sample placements
 * with salaries and equity ("$345K base + 0.3% equity"). None of it was
 * measured. It was one import away from being published, and it read as
 * authoritative precisely because it was structured data rather than prose.
 *
 * Also removed for the same reason: `whyNumsr` (48h median shortlist, 94%
 * offer-accept), `gdStats` (1,000+ placements, 10+ years) and the bullets in
 * `engagementModels`. The firm's real figures live in `firm` in
 * lib/routes.ts — one copy, supplied by the client.
 *
 * What is left is the two exports the page actually reads. */

// Plotted on the rotating globe in the Global Delivery section. lat/lon are
// real coordinates — the globe projects them onto the sphere, so they must
// stay accurate rather than being nudged for visual balance.
//
// Four points, three of them offices (see `offices` in lib/routes.ts) and
// Dubai a served market with no address. The globe shows coverage, not
// premises, so Dubai belongs here and deliberately does NOT appear in the
// footer, the contact page or the LocalBusiness schema.
export type GdHub = { name: string; sub: string; lat: number; lon: number; hq?: boolean };

export const gdHubs: GdHub[] = [
  { name: "Delaware", sub: "GLOBAL HQ", lat: 39.7, lon: -75.5, hq: true },
  { name: "Ontario", sub: "CANADA", lat: 43.4, lon: -80.3 },
  { name: "Dubai", sub: "UAE", lat: 25.2, lon: 55.3 },
  { name: "Pune", sub: "INDIA", lat: 18.5, lon: 73.8 },
];

// The industry grid shared by the service sub-pages via
// _components/shared.tsx → IndustriesGrid2Section.
export const indgCards: { icon: string; title: string; desc: string; tags: string[] }[] = [
  { icon: "💻", title: "Technology", desc: "Software engineering, cloud infrastructure, data, cybersecurity, AI/ML, product management and digital transformation from startup to enterprise.", tags: ["Engineering", "Cloud", "Data", "AI/ML"] },
  { icon: "🏦", title: "Finance & Banking", desc: "Investment banking, risk, compliance, financial planning, treasury and accounting across global financial institutions and fintech firms.", tags: ["Risk", "Compliance", "FP&A", "Treasury"] },
  { icon: "🏥", title: "Healthcare", desc: "Clinical, nursing, allied health, pharmaceutical and healthcare administration across hospitals, clinics and life-sciences organisations.", tags: ["Clinical", "Pharma", "Allied Health"] },
  { icon: "⚖️", title: "Legal", desc: "In-house counsel, contracts, privacy, compliance officers and legal operations professionals across corporate and private practice.", tags: ["In-house", "Contracts", "Compliance"] },
  { icon: "✈️", title: "Aerospace & Defence", desc: "Tier-1 OEMs, defence primes and the supplier ecosystem — cleared engineering, systems and programme talent, pre-vetted for clearance.", tags: ["Systems", "Cleared", "Programme"] },
  { icon: "🏭", title: "Supply & Operations", desc: "Supply chain, procurement, logistics and plant leadership for companies scaling their physical and digital operations globally.", tags: ["Supply Chain", "Procurement", "Logistics"] },
  { icon: "📈", title: "Sales & Marketing", desc: "B2B and B2C sales, demand generation, brand, growth, customer success and revenue operations across all markets.", tags: ["Sales", "Growth", "Brand", "CX"] },
  { icon: "👥", title: "People & HR", desc: "HR business partners, talent acquisition, L&D, reward and employee relations from coordinator to CHRO across every sector.", tags: ["HR BP", "TA", "L&D", "Reward"] },
];
