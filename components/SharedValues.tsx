/* "Who we are — Our shared values". One section, used on /career and
 * /search-jobs, so the two pages cannot drift apart.
 *
 * The four are the values the Careers page already hired for, reworded so
 * they read the same to a candidate, a client or someone joining the team:
 * each now names who it is held to. No new promise is made — every clause
 * restates something already on the site (no handoffs, declining briefs
 * rather than spamming, no inflated ranges, no ghosting).
 *
 * No 01-04. The four are a set, not steps; numbering a set makes a reader
 * look for an order that isn't there. */

const values = [
  { t: "Own the outcome", d: "From first call to signed offer, one person owns the search and stands behind it. Nobody gets handed off, and nobody hides behind a process." },
  { t: "Quality over noise", d: "Five right candidates beat fifty fast ones. We would rather decline a brief than spam a client — or put you forward for a role that does not fit." },
  { t: "Straight talk", d: "Honest with candidates, honest with clients, honest with each other. No inflated ranges, no ghosting. If something is broken, we say so." },
  { t: "Keep learning", d: "Markets move, pay shifts, sectors evolve. Staying sharper than the market we place into is not a perk here — it is the job." },
];

/* tone="plain" puts the band on the page ground with a top rule, for a page
   where it follows another cream band (Search Jobs). Careers keeps cream. */
/* `lede` overrides the intro line for a page with a different reader:
   Careers speaks to people joining; Search Jobs to candidates. */
export default function SharedValues({ tone = "cream", lede }: { tone?: "cream" | "plain"; lede?: string }) {
  return (
    <section className={`section cv-sec lt${tone === "plain" ? " cv-plain" : ""}`} id="values">
      <div className="wrap">
        <span className="eyebrow light">Who we are</span>
        <h2 className="section-h2 gs" style={{ marginTop: 18, marginBottom: 0, color: "var(--text-inv-1)", maxWidth: 640 }}>Our shared <em>values.</em></h2>
        <p className="cv-lede gs">{lede || "The four things we hire for — and hold ourselves to with candidates, clients and each other."}</p>
        <div className="cv-grid">
          {values.map((v) => (
            <div className="cv" key={v.t}>
              <h3 className="cv-t">{v.t}</h3>
              <div className="cv-d">{v.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
