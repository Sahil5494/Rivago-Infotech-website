const officeCards = [
  { flag: "India · Delivery hub", city: "Pune", addr: ["43 Privet Drive", "E-Commercial", "Pune, Maharashtra 411045"], team: "50+ people" },
  { flag: "United States · Headquarters", city: "Delaware", addr: ["3524 Silverside Rd, Ste 35B", "Wilmington", "Delaware 19810, USA"], team: "22 people" },
  { flag: "Canada", city: "Ontario", addr: ["373 Vincent Dr", "Ayr", "Ontario N0B 1E0"], team: "14 people" },
  { flag: "United Arab Emirates · market served", city: "Dubai", addr: ["Market served remotely", "from our Delaware and", "Pune teams"], team: "No local office" },
];

export default function OfficesSection() {
  return (
    <section className="offices" id="offices">
      <div className="offices-inner">
        <div className="gs">
          <div className="eyebrow ew-light" style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>Three offices</div>
          <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 720 }}>Where we&apos;re <em style={{ fontFamily: "var(--fs)", fontStyle: "italic", color: "var(--green)" }}>on the ground.</em></h2>
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
