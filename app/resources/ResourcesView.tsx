"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { routes } from "@/lib/routes";
import { articles, featuredArticle } from "./data";

/* Was three tabs — All, Blog, Case Studies — over a mixed library.
 *
 * The case studies are gone (see the note at the foot of ./data.ts), and
 * without them "All" and "Blog" render the same eight articles from the same
 * array. Two tabs showing identical content is worse than none, so the tab
 * bar went with them and this is now one view: the articles library.
 *
 * Every author slot is gone too. The eight bylines were invented people, and
 * an avatar and a name are the two things on a card a reader is most likely
 * to take at face value. The cards carry what is true instead — category,
 * length and date.
 */

function NewsletterInline() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  if (ok) return <span style={{ padding: "8px 16px", fontSize: "var(--fz2)", color: "var(--accent-inv)", fontWeight: 500 }}>Subscribed ✓</span>;
  return (
    <form
      className="rsub-form"
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setOk(true);
      }}
    >
      <input type="email" placeholder="your@email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Subscribe</button>
    </form>
  );
}

function NewsletterBand({ heading, sub }: { heading: React.ReactNode; sub: string }) {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  return (
    <section className="bg-news">
      <div className="bg-news-inner">
        <h2>{heading}</h2>
        <p>{sub}</p>
        {ok ? (
          <div style={{ padding: "11px 18px", fontSize: "var(--fz3)", color: "var(--accent-inv)", fontWeight: 500 }}>Subscribed — your first brief is on its way.</div>
        ) : (
          <form
            className="bg-news-form"
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setOk(true);
            }}
          >
            <input type="email" placeholder="you@company.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
}

const bgFilters: { f: string; label: string }[] = [
  { f: "all", label: "All" },
  { f: "play", label: "Hiring playbook" },
  { f: "comp", label: "Compensation" },
  { f: "market", label: "Market read" },
];

export default function ResourcesView() {
  const [bgFilter, setBgFilter] = useState("all");
  const visible = useMemo(() => (bgFilter === "all" ? articles : articles.filter((a) => a.category === bgFilter)), [bgFilter]);

  return (
    <div className="rwrap">
      <div className="rhead">
        <span className="reyebrow">Resources</span>
        <h1 className="rtitle">
          Ideas, evidence &amp; <em>market intel.</em>
        </h1>
      </div>

      {/* The tab bar stood here. The newsletter row it shared a line with
          stays — it is the only control left, so it takes the full width. */}
      <div className="rbar rbar-solo">
        <div className="rsub">
          <span className="rsub-l">Get our latest updates sent straight to your inbox.</span>
          <NewsletterInline />
        </div>
      </div>
      <div className="rdiv" />

      <div style={{ padding: "44px 0 0" }}>
        <span className="bg-eyb">Featured · This week</span>
        <div className="bg-feat">
          <div className="bg-feat-art">
            <span className="ftag">Hiring playbook</span>
            <h2>{featuredArticle.title}</h2>
          </div>
          <div className="bg-feat-body">
            <div className="bg-feat-eyb">{featuredArticle.readTime}</div>
            <div className="bg-feat-lede">{featuredArticle.dek}</div>
            <div className="bg-feat-date">{featuredArticle.date}</div>
          </div>
        </div>
      </div>

      <div style={{ padding: "64px 0 0" }}>
        <span className="bg-eyb">The archive</span>
        <h2 className="bg-fh">Every piece,<br />filtered <em>your way.</em></h2>
        <div className="bg-fbar">
          {bgFilters.map((f) => {
            const count = f.f === "all" ? articles.length : articles.filter((a) => a.category === f.f).length;
            return (
              <button key={f.f} className={`bg-fchip${bgFilter === f.f ? " on" : ""}`} onClick={() => setBgFilter(f.f)}>
                {f.label} <span className="ct">{count}</span>
              </button>
            );
          })}
        </div>
        <div className="bg-grid">
          {visible.map((a) => (
            <Link key={a.id} className="bg-card" data-cat={a.category} href={`${routes.article}?id=${a.id}`}>
              <div className="bg-trow"><span className="bg-tag">{a.categoryLabel}</span><span className="bg-meta">{a.readTime}</span></div>
              <div className="bg-ti">{a.title}</div>
              <div className="bg-ex">{a.dek}</div>
              <div className="bg-foot">{a.displayDate}</div>
            </Link>
          ))}
        </div>
      </div>

      <NewsletterBand
        heading={<>Hiring intel, <em>every Monday.</em></>}
        sub="One short email a week — a comp benchmark, a market read, and the roles worth knowing about. No noise."
      />
    </div>
  );
}
