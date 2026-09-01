"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { routes } from "@/lib/routes";
import { articles, caseStudies } from "./data";

type Combined =
  | { kind: "article"; id: string; title: string; dek: string; tag: string; meta: string }
  | { kind: "case-study"; id: string; title: string; dek: string; tag: string; meta: string };

const byId = <T extends { id: string }>(list: T[], id: string): T => list.find((x) => x.id === id) as T;

const order: { kind: "article" | "case-study"; id: string }[] = [
  { kind: "article", id: "anti-portal-manifesto" },
  { kind: "case-study", id: "toronto-bank-compliance" },
  { kind: "article", id: "48-hour-shortlist" },
  { kind: "article", id: "writing-a-hiring-brief" },
  { kind: "article", id: "vp-engineering-pay" },
  { kind: "case-study", id: "uae-hospital-launch" },
  { kind: "article", id: "structured-interviews" },
  { kind: "article", id: "why-offers-get-declined" },
  { kind: "article", id: "equity-compensation" },
  { kind: "case-study", id: "confidential-cfo-placement" },
  { kind: "article", id: "uae-licensing" },
  { kind: "article", id: "cost-of-a-bad-hire" },
];

const combined: Combined[] = order.map((o) => {
  if (o.kind === "article") {
    const a = byId(articles, o.id);
    return { kind: "article", id: a.id, title: a.title, dek: a.dek, tag: a.tag, meta: a.readTime };
  }
  const c = byId(caseStudies, o.id);
  return { kind: "case-study", id: c.id, title: c.title, dek: c.dek, tag: "Case study", meta: c.eyebrow };
});

const Arrow = () => (
  <svg className="arrow" width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

type Tab = "all" | "article" | "case-study";

export default function ResourcesGrid({ initialTab }: { initialTab: Tab }) {
  const [tab, setTab] = useState<Tab>(initialTab);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered = useMemo(() => {
    if (tab === "all") return combined;
    return combined.filter((c) => c.kind === tab);
  }, [tab]);

  return (
    <>
      <style>{`
        .res-bar{display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;margin-bottom:48px}
        .res-tabs{display:flex;gap:6px;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:5px}
        .res-tab{padding:9px 18px;border:none;background:none;border-radius:8px;font-family:var(--ff);font-size:13.5px;font-weight:500;color:var(--text2);cursor:pointer;transition:all .2s var(--ease)}
        .res-tab.on{background:var(--green);color:#030C05}
        .res-news{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
        .res-news-lbl{font-size:13px;color:var(--text2);font-weight:300;white-space:nowrap}
        .res-news-form{display:flex;gap:6px}
        .res-news-form input{padding:10px 14px;background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:9px;font-family:var(--ff);font-size:13px;color:var(--text);outline:none;width:200px;transition:border-color .2s}
        .res-news-form input:focus{border-color:rgba(61,255,135,.4)}
        .res-news-form input::placeholder{color:var(--text3)}
        .res-news-btn{padding:10px 16px;background:var(--green);color:#030C05;border:none;border-radius:9px;font-family:var(--ff);font-size:13px;font-weight:600;cursor:pointer;white-space:nowrap;transition:all .2s}
        .res-news-btn:hover{background:#5AFFA0}
        .res-news-ok{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--green);font-weight:500;padding:10px 4px}
        .res-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .res-card{display:flex;flex-direction:column;background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:24px;text-decoration:none;transition:all .25s var(--ease);min-height:170px}
        .res-card:hover{background:var(--surface2);border-color:rgba(61,255,135,.24);transform:translateY(-3px)}
        .res-card-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;gap:10px}
        .res-tag{display:inline-flex;padding:3px 10px;border-radius:9999px;font-size:10px;font-weight:600;letter-spacing:.05em;text-transform:uppercase}
        .res-tag.article{background:rgba(255,255,255,.06);color:var(--text2);border:1px solid var(--border2)}
        .res-tag.case-study{background:rgba(61,255,135,.1);color:var(--green);border:1px solid rgba(61,255,135,.25)}
        .res-meta{font-size:11px;color:var(--text3);font-family:var(--fm)}
        .res-title{font-size:16px;font-weight:600;color:var(--text);line-height:1.35;letter-spacing:-.01em;margin-bottom:8px}
        .res-dek{font-size:13px;color:var(--text2);line-height:1.62;font-weight:300;flex:1}
        .res-foot{margin-top:16px;display:flex;align-items:center;gap:6px;font-size:12.5px;color:var(--green);font-weight:500}
        .res-card:hover .res-foot svg{transform:translateX(3px)}
        .res-foot svg{transition:transform .2s var(--ease)}
        @media(max-width:900px){.res-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:600px){.res-grid{grid-template-columns:1fr}.res-bar{flex-direction:column;align-items:flex-start}.res-news-form input{width:160px}}
      `}</style>

      <div className="res-bar gs">
        <div className="res-tabs">
          <button className={`res-tab${tab === "all" ? " on" : ""}`} onClick={() => setTab("all")}>All</button>
          <button className={`res-tab${tab === "article" ? " on" : ""}`} onClick={() => setTab("article")}>Blog</button>
          <button className={`res-tab${tab === "case-study" ? " on" : ""}`} onClick={() => setTab("case-study")}>Case Studies</button>
        </div>
        <div className="res-news">
          <span className="res-news-lbl">Hiring intel, every Monday</span>
          {subscribed ? (
            <span className="res-news-ok">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><circle cx="7.5" cy="7.5" r="6.5" stroke="#3DFF87" strokeWidth="1.4" /><path d="M4.7 7.6l1.8 1.8 3.6-4" stroke="#3DFF87" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Subscribed
            </span>
          ) : (
            <form
              className="res-news-form"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSubscribed(true);
              }}
            >
              <input type="email" required placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              <button type="submit" className="res-news-btn">Subscribe</button>
            </form>
          )}
        </div>
      </div>

      <div className="res-grid gs">
        {filtered.map((item) => (
          <Link
            key={item.id}
            href={item.kind === "article" ? `${routes.article}?id=${item.id}` : `${routes.caseStudy}?id=${item.id}`}
            className="res-card"
          >
            <div className="res-card-top">
              <span className={`res-tag ${item.kind}`}>{item.tag}</span>
              <span className="res-meta">{item.meta}</span>
            </div>
            <div className="res-title">{item.title}</div>
            <p className="res-dek">{item.dek}</p>
            <div className="res-foot">Read more <Arrow /></div>
          </Link>
        ))}
      </div>
    </>
  );
}
