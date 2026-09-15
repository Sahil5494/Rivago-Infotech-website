/* The five stages of a Rivago search — the single source for every page that
 * shows the process.
 *
 * This exists because the site was describing its own process two different
 * ways. /services said Calibrate, Map, Screen, Panel, Placed & guaranteed.
 * The homepage said Understand the brief, Source, Screen, Submit shortlist,
 * Place and support. Both claimed "five stages" and "one partner". They were
 * not the same five: the homepage had no panel stage at all — no scheduling,
 * debriefs, references or compliance — and carried "Submit shortlist", which
 * is an event inside a stage rather than a stage.
 *
 * A prospect who read both pages met a firm that could not describe its own
 * process the same way twice. So the names, the order and the deliverables
 * live here, and a page that wants to show the process imports them.
 *
 * The /services wording is the one that survived, on two grounds: the names
 * are verbs, and Panel is real work the other set pretended did not happen.
 *
 * `short` and `long` are deliberately different sentences rather than the
 * same sentence twice — two indexable pages carrying identical paragraphs is
 * duplicate content. `short` is a compression of `long`, never a new claim,
 * so the two can't contradict each other.
 *
 * Nothing here is measured: no durations, no volumes, no rates. "Guarantee
 * window" points at terms stated on /services/direct-hire rather than
 * restating them.
 */

export type Stage = {
  /** Two digits, for display. The array index is the real order. */
  n: string;
  name: string;
  /** What the client is left holding at the end of the stage. */
  deliverable: string;
  /** Homepage timeline — one line. */
  short: string;
  /** /services timeline — the fuller version. */
  long: string;
};

export const STAGES: readonly Stage[] = [
  {
    n: "01",
    name: "Calibrate",
    deliverable: "Signed-off scorecard",
    short: "The spec, the bar and the commercials, settled before the search opens.",
    long: "We agree the spec, the bar and the commercials up front, so nothing about the engagement is ambiguous later.",
  },
  {
    n: "02",
    name: "Map",
    deliverable: "Targeted longlist",
    short: "Your partner works their own practice network for this role specifically.",
    long: "Your partner works their own practice network — people approached directly, never a job ad reposted at scale.",
  },
  {
    n: "03",
    name: "Screen",
    deliverable: "Calibrated profiles",
    short: "Everyone you meet has been interviewed against the bar you agreed.",
    long: "Everyone you meet has been interviewed against the agreed bar, with written evidence behind the recommendation.",
  },
  {
    n: "04",
    name: "Panel",
    deliverable: "Debriefs & references",
    short: "Scheduling, debriefs, references and compliance sit with us.",
    long: "We carry the admin — scheduling, debriefs, references and compliance — so your team only spends time on decisions.",
  },
  {
    n: "05",
    name: "Placed & guaranteed",
    deliverable: "Signed start · guarantee applies",
    short: "We close the offer, hold it against counters, and stay accountable after the start date.",
    long: "We close the offer, protect it against counters, and stay accountable through the guarantee window.",
  },
];
