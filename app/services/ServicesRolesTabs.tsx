"use client";

import { useState } from "react";

type Role = { title: string; band: string };
type Domain = { key: string; label: string; roles: Role[] };

const domains: Domain[] = [
  {
    key: "tech",
    label: "Technology",
    roles: [
      { title: "Senior Backend Engineer", band: "$150k–$190k" },
      { title: "Staff Software Engineer", band: "$180k–$230k" },
      { title: "Engineering Manager", band: "$170k–$215k" },
      { title: "DevOps / Platform Engineer", band: "$140k–$175k" },
      { title: "Data Engineer", band: "$135k–$170k" },
      { title: "Machine Learning Engineer", band: "$160k–$210k" },
      { title: "Product Manager, Technical", band: "$150k–$195k" },
      { title: "Cybersecurity Engineer", band: "$145k–$185k" },
      { title: "Cloud Solutions Architect", band: "$165k–$205k" },
      { title: "QA / Test Automation Lead", band: "$115k–$145k" },
    ],
  },
  {
    key: "finance",
    label: "Finance & Banking",
    roles: [
      { title: "VP, Investment Banking", band: "$210k–$280k" },
      { title: "Financial Planning & Analysis Manager", band: "$130k–$165k" },
      { title: "Risk & Compliance Officer", band: "$120k–$155k" },
      { title: "Senior Credit Analyst", band: "$100k–$130k" },
      { title: "Treasury Manager", band: "$135k–$170k" },
      { title: "Controller", band: "$150k–$190k" },
      { title: "Portfolio Manager", band: "$180k–$240k" },
      { title: "Internal Audit Manager", band: "$125k–$160k" },
      { title: "Financial Analyst, Senior", band: "$95k–$120k" },
    ],
  },
  {
    key: "health",
    label: "Healthcare",
    roles: [
      { title: "Registered Nurse, ICU", band: "$95k–$125k" },
      { title: "Clinical Operations Director", band: "$140k–$180k" },
      { title: "Physician Assistant", band: "$115k–$140k" },
      { title: "Healthcare Compliance Manager", band: "$105k–$135k" },
      { title: "Pharmacist, Clinical", band: "$120k–$150k" },
      { title: "Medical Affairs Manager", band: "$140k–$175k" },
      { title: "Practice Administrator", band: "$90k–$115k" },
      { title: "Clinical Research Associate", band: "$85k–$110k" },
    ],
  },
  {
    key: "sales",
    label: "Sales & Marketing",
    roles: [
      { title: "VP of Sales", band: "$180k–$240k" },
      { title: "Enterprise Account Executive", band: "$120k–$160k base" },
      { title: "Demand Generation Manager", band: "$110k–$140k" },
      { title: "Brand & Creative Director", band: "$130k–$165k" },
      { title: "Customer Success Manager, Sr.", band: "$95k–$125k" },
      { title: "Revenue Operations Manager", band: "$115k–$150k" },
      { title: "Product Marketing Manager", band: "$125k–$155k" },
      { title: "Growth Marketing Lead", band: "$110k–$140k" },
    ],
  },
  {
    key: "ops",
    label: "Operations",
    roles: [
      { title: "VP of Operations", band: "$175k–$230k" },
      { title: "Supply Chain Director", band: "$145k–$185k" },
      { title: "Procurement Manager", band: "$110k–$140k" },
      { title: "Logistics & Fulfilment Manager", band: "$100k–$130k" },
      { title: "Plant / Site Operations Manager", band: "$120k–$155k" },
      { title: "Continuous Improvement Lead", band: "$105k–$135k" },
      { title: "Program Manager, Operations", band: "$115k–$145k" },
      { title: "Facilities Manager", band: "$90k–$115k" },
    ],
  },
  {
    key: "legal",
    label: "Legal",
    roles: [
      { title: "General Counsel", band: "$220k–$300k" },
      { title: "Senior Corporate Counsel", band: "$170k–$215k" },
      { title: "Compliance Counsel", band: "$140k–$175k" },
      { title: "Contracts Manager", band: "$110k–$140k" },
      { title: "Paralegal, Senior", band: "$80k–$105k" },
      { title: "Employment Counsel", band: "$150k–$190k" },
      { title: "Legal Operations Manager", band: "$120k–$150k" },
      { title: "IP Counsel", band: "$165k–$210k" },
    ],
  },
];

export default function ServicesRolesTabs() {
  const [active, setActive] = useState(domains[0].key);
  const domain = domains.find((d) => d.key === active) ?? domains[0];

  return (
    <div className="gs">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          marginBottom: 28,
        }}
      >
        {domains.map((d) => (
          <button
            key={d.key}
            onClick={() => setActive(d.key)}
            style={{
              padding: "9px 16px",
              borderRadius: 9999,
              fontSize: 13,
              fontWeight: 500,
              fontFamily: "var(--ff)",
              cursor: "pointer",
              border: active === d.key ? "1px solid rgba(61,255,135,.4)" : "1px solid var(--border)",
              background: active === d.key ? "rgba(61,255,135,.1)" : "var(--surface)",
              color: active === d.key ? "var(--green)" : "var(--text2)",
              transition: "all .2s ease",
            }}
          >
            {d.label}
          </button>
        ))}
      </div>
      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 20,
          padding: "8px 0",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: 32,
          }}
        >
          {domain.roles.map((r, i) => (
            <div
              key={r.title}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                padding: "16px 28px",
                borderBottom: i < domain.roles.length - 2 ? "1px solid var(--border)" : "none",
              }}
            >
              <span style={{ fontSize: 14.5, color: "var(--text)", fontWeight: 500 }}>{r.title}</span>
              <span style={{ fontSize: 12.5, color: "var(--green)", fontFamily: "var(--fm)", flexShrink: 0 }}>{r.band}</span>
            </div>
          ))}
        </div>
      </div>
      <p style={{ marginTop: 18, fontSize: 12.5, color: "var(--text3)" }}>
        Bands reflect typical US market rates for direct hire; contract and international bands vary by market and are confirmed during intake.
      </p>
    </div>
  );
}
