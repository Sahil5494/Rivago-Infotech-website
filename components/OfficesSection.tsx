/* The per-office headcounts came out. They read 50+ / 22 / 14, which totals
   86 against the fifty the client states for the whole firm — two numbers
   for one fact, about 3,000px apart on the About page. Headcount is now
   stated once, in `firm` in lib/routes.ts, and rendered once, in "By the
   numbers". Put a per-office split back only with real numbers that add up
   to that total, and derive the total from them rather than typing both. */
const officeCards = [
  { flag: "India · Delivery hub", city: "Pune", addr: ["43 Privet Drive", "E-Commercial", "Pune, Maharashtra 411045"] },
  { flag: "United States · Headquarters", city: "Delaware", addr: ["3524 Silverside Rd, Ste 35B", "Wilmington", "Delaware 19810, USA"] },
  { flag: "Canada", city: "Ontario", addr: ["373 Vincent Dr", "Ayr", "Ontario N0B 1E0"] },
  { flag: "United Arab Emirates · market served", city: "Dubai", addr: ["Market served remotely", "from our Delaware and", "Pune teams"], team: "No local office" },
];

export default function OfficesSection() {
  return (
    <section className="offices" id="offices">
      <div className="offices-inner">
        <div className="gs">
          <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Three offices</div>
          <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 720 }}>Where we&apos;re <em>on the ground.</em></h2>
        </div>
        <div className="offices-grid">
          {officeCards.map((o) => (
            <div className="office gs" key={o.city}>
              <div className="office-flag">{o.flag}</div>
              <div className="office-city">{o.city}</div>
              <div className="office-addr">
                {o.addr.map((line, i) => (
                  <span key={line}>{line}{i < o.addr.length - 1 && <br />}</span>
                ))}
              </div>
              <div className="office-team"><div className="ct">{o.team}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
