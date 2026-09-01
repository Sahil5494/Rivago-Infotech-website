import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import Faq, { type FaqItem } from "@/components/Faq";
import { routes, industriesList } from "@/lib/routes";

/* ── ICONS ──
   Small inline SVGs, all matching the hire-talent visual language:
   22x22 viewBox, single #3DFF87 stroke, 1.3–1.5 weight. */

export const Arrow = () => (
  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const SmallArrow = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Check = () => (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
    <path d="M1 4l2.5 2.5L9 1" stroke="#3DFF87" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconPartner = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="8" r="3.5" stroke="#3DFF87" strokeWidth="1.5" />
    <path d="M4 19c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const IconBadge = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 2l2 5 5 .7-3.6 3.5.9 5L11 13.5l-4.3 2.5.9-5L4 7.7l5-.7z" stroke="#3DFF87" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export const IconClock = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="8" stroke="#3DFF87" strokeWidth="1.5" />
    <path d="M11 7v4l3 2" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 2l8 4v5c0 5-3.5 8.5-8 9.5C6.5 19.5 3 16 3 11V6z" stroke="#3DFF87" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export const IconShieldCheck = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 2l8 4v5c0 5-3.5 8.5-8 9.5C6.5 19.5 3 16 3 11V6z" stroke="#3DFF87" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M7.5 11.2l2.2 2.2 4.3-4.3" stroke="#3DFF87" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconGlobe = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="8" stroke="#3DFF87" strokeWidth="1.5" />
    <path d="M2 11h18M11 3a13 13 0 010 16M11 3a13 13 0 000 16" stroke="#3DFF87" strokeWidth="1.5" />
  </svg>
);

export const IconGuarantee = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="3" y="6" width="16" height="13" rx="2" stroke="#3DFF87" strokeWidth="1.5" />
    <path d="M7 6V4a2 2 0 012-2h4a2 2 0 012 2v2M7 12l3 3 6-6" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconScaleFlex = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M6 15V7M6 7L3 10M6 7l3 3" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 7v8M16 15l3-3M16 15l-3-3" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconDoc = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M6 2h7l4 4v14a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="#3DFF87" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M13 2v4h4M7.5 12h7M7.5 15.5h5" stroke="#3DFF87" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const IconMoney = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="8" stroke="#3DFF87" strokeWidth="1.5" />
    <path d="M11 6.5v9M13.5 8.5c0-1-1.1-1.8-2.5-1.8s-2.5.75-2.5 1.8c0 2.4 5 1.2 5 3.6 0 1.05-1.1 1.9-2.5 1.9s-2.5-.85-2.5-1.9" stroke="#3DFF87" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const IconHeart = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 19s-7.2-4.5-9.2-9.1C.5 6.8 2 3.5 5.4 3c2-.3 3.8.8 5.6 2.7C12.8 3.8 14.6 2.7 16.6 3c3.4.5 4.9 3.8 3.6 6.9C18.2 14.5 11 19 11 19z" stroke="#3DFF87" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);

export const IconBuilding = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="4" y="3" width="10" height="17" rx="1" stroke="#3DFF87" strokeWidth="1.5" />
    <rect x="14" y="9" width="5" height="11" rx="1" stroke="#3DFF87" strokeWidth="1.5" />
    <path d="M7 7h2M7 11h2M7 15h2" stroke="#3DFF87" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const IconTarget = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="8" stroke="#3DFF87" strokeWidth="1.5" />
    <circle cx="11" cy="11" r="4" stroke="#3DFF87" strokeWidth="1.5" />
    <circle cx="11" cy="11" r="1" fill="#3DFF87" />
  </svg>
);

export const IconHandshake = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M2 10l4-4 4 2 3-2 5 3-3 5-2-1-3 3-6-3" stroke="#3DFF87" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconTeam = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="7.5" cy="7.5" r="3" stroke="#3DFF87" strokeWidth="1.4" />
    <circle cx="15" cy="9" r="2.3" stroke="#3DFF87" strokeWidth="1.4" />
    <path d="M2.5 19c0-3 2.2-5.4 5-5.4s5 2.4 5 5.4M13.8 19c0-2.3 1.7-4.1 3.6-4.1s3.6 1.8 3.6 4.1" stroke="#3DFF87" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const IconLightning = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M12 2L4 13h6l-1 7 9-12h-6l1-6z" stroke="#3DFF87" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);

export const IconChart = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M3 19V9M9 19V4M15 19v-7M19 19V2" stroke="#3DFF87" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const IconCompass = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="8" stroke="#3DFF87" strokeWidth="1.5" />
    <path d="M14 8l-2 6-4-1.7L9.5 6z" stroke="#3DFF87" strokeWidth="1.3" strokeLinejoin="round" />
  </svg>
);

export const IconKey = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="7" cy="15" r="3.5" stroke="#3DFF87" strokeWidth="1.5" />
    <path d="M9.5 12.5L18 4M15 7l2 2M17.5 4.5l2 2" stroke="#3DFF87" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── LAYOUT PRIMITIVES ── */

export function Eyebrow({ children, dark = false, style }: { children: ReactNode; dark?: boolean; style?: React.CSSProperties }) {
  return (
    <div
      className={`eyebrow ${dark ? "ew-dark" : "ew-light"}`}
      style={{ marginBottom: 20, display: "inline-flex", alignItems: "center", gap: 7, ...style }}
    >
      <span className="eyebrow-dot"></span>
      {children}
    </div>
  );
}

export type Crumb = { label: string; href?: string };

export function Crumbs({ items }: { items: Crumb[] }) {
  return (
    <div className="crumbs">
      {items.map((it, i) => (
        <Fragment key={it.label}>
          {i > 0 && <span className="crumbs-sep">/</span>}
          {it.href ? <Link href={it.href}>{it.label}</Link> : <span>{it.label}</span>}
        </Fragment>
      ))}
    </div>
  );
}

export function breadcrumbJsonLd(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      item: it.href ? `https://rivagoinfotech.com${it.href === routes.home ? "/" : it.href}` : undefined,
    })),
  };
}

/* ── WHY RIVAGO (guarantee stats + 4-card grid, combined section) ── */

export type StatItem = { val: ReactNode; sup?: string; title: string; desc: string };
export type WhyCard = { title: string; desc: string; icon: ReactNode };

export function WhyRivagoSection({
  eyebrowText = "Why Rivago",
  heading,
  stats,
  cards,
  alt = false,
}: {
  eyebrowText?: string;
  heading: ReactNode;
  stats: StatItem[];
  cards: WhyCard[];
  alt?: boolean;
}) {
  return (
    <section className={`section${alt ? " alt" : ""}`}>
      <div className="wrap">
        <div className="gs">
          <Eyebrow>{eyebrowText}</Eyebrow>
          <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 740 }}>{heading}</h2>
        </div>
        <div className="guarantee" style={{ marginTop: 48 }}>
          {stats.map((s) => (
            <div className="gtee gs" key={s.title}>
              <div className="gtee-val">{s.val}{s.sup && <sup>{s.sup}</sup>}</div>
              <div className="gtee-title">{s.title}</div>
              <div className="gtee-desc">{s.desc}</div>
            </div>
          ))}
        </div>
        <div className="why-grid" style={{ marginTop: 20 }}>
          {cards.map((c) => (
            <div className="why-card gs" key={c.title}>
              <div className="why-icon">{c.icon}</div>
              <div className="why-title">{c.title}</div>
              <div className="why-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── PROCESS TIMELINE ── */

export type ProcStage = { step: string; title: string; desc: string; side: [string, string][] };

export function ProcessSection({
  eyebrowText = "How it works",
  heading,
  stages,
  alt = true,
}: {
  eyebrowText?: string;
  heading: ReactNode;
  stages: ProcStage[];
  alt?: boolean;
}) {
  return (
    <section className={`section${alt ? " alt" : ""}`}>
      <div className="wrap">
        <div className="gs">
          <Eyebrow>{eyebrowText}</Eyebrow>
          <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 760 }}>{heading}</h2>
        </div>
        <div className="proc-deep">
          {stages.map((s) => (
            <div className="pd-row gs" key={s.step}>
              <div className="pd-step">{s.step}</div>
              <div className="pd-main"><h3>{s.title}</h3><p>{s.desc}</p></div>
              <div className="pd-side">
                {s.side.map(([k, v]) => (
                  <div className="pd-side-row" key={k}><span>{k}</span><span className="v">{v}</span></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── INDUSTRIES GRID ── */

export function IndustriesSection({
  eyebrowText = "Industries",
  heading,
  sub,
  showAllLink = true,
  alt = false,
}: {
  eyebrowText?: string;
  heading: ReactNode;
  sub?: string;
  showAllLink?: boolean;
  alt?: boolean;
}) {
  return (
    <section className={`section${alt ? " alt" : ""}`}>
      <div className="wrap">
        <div className="gs">
          <Eyebrow>{eyebrowText}</Eyebrow>
          <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 720 }}>{heading}</h2>
          {sub && <p style={{ color: "var(--text2)", maxWidth: 560, marginTop: 18, fontSize: 16, fontWeight: 300, lineHeight: 1.7 }}>{sub}</p>}
        </div>
        <div className="ind-grid gs" style={{ marginTop: 44 }}>
          {industriesList.map((ind) => (
            <div className="ind-card" key={ind.title}>
              <div className="ind-icon">{ind.icon}</div>
              <div className="ind-title">{ind.title}</div>
              <div className="ind-desc">{ind.desc}</div>
              <div className="ind-tags">{ind.tags.map((t) => <span className="ind-tag" key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
        {showAllLink && (
          <div className="gs" style={{ marginTop: 40, textAlign: "center" }}>
            <Link className="ind-all" href={routes.industries} style={{ display: "inline-flex" }}>Explore all industries <Arrow /></Link>
          </div>
        )}
      </div>
    </section>
  );
}

/* ── CUSTOMER STORY (single featured cream panel) ── */

export type StoryMetric = { val: string; label: string };

export function StorySection({
  eyebrowText = "Client story",
  heading,
  tag,
  quote,
  initials,
  name,
  role,
  metrics,
}: {
  eyebrowText?: string;
  heading: ReactNode;
  tag: string;
  quote: string;
  initials: string;
  name: string;
  role: string;
  metrics?: StoryMetric[];
}) {
  return (
    <section className="section cream">
      <div className="wrap">
        <div className="gs" style={{ textAlign: "center" }}>
          <Eyebrow dark style={{ margin: "0 auto 20px" }}>{eyebrowText}</Eyebrow>
          <h2 className="section-h2" style={{ color: "var(--dt)", maxWidth: 680, margin: "0 auto" }}>{heading}</h2>
        </div>
        <div className="tc-card gs" style={{ maxWidth: 800, margin: "48px auto 0", padding: "44px 42px" }}>
          <span className="tc-tag">{tag}</span>
          <p className="tc-quote-serif" style={{ fontSize: 21 }}>&ldquo;{quote}&rdquo;</p>
          <div className="tc-author2">
            <div style={{ width: 42, height: 42, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg,#3DFF87,#00A882)", color: "#030C05", fontWeight: 600, fontSize: 13, letterSpacing: ".02em" }}>{initials}</div>
            <div><div className="tc-author2-name">{name}</div><div className="tc-author2-role">{role}</div></div>
          </div>
          {metrics && metrics.length > 0 && (
            <div style={{ display: "flex", gap: 32, marginTop: 28, paddingTop: 24, borderTop: "1px solid rgba(0,0,0,.07)", flexWrap: "wrap" }}>
              {metrics.map((m) => (
                <div key={m.label}>
                  <div style={{ fontFamily: "var(--fs)", fontStyle: "italic", fontSize: 32, color: "#0A7040", lineHeight: 1 }}>{m.val}</div>
                  <div style={{ fontSize: 12, color: "var(--dt3)", marginTop: 6, maxWidth: 140 }}>{m.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── */

export function FaqSection({ heading, items }: { heading: ReactNode; items: FaqItem[] }) {
  return (
    <section className="faq-sec">
      <div className="faq-inner">
        <div style={{ textAlign: "center" }}>
          <Eyebrow style={{ margin: "0 auto 16px" }}>FAQ</Eyebrow>
          <h2 className="section-h2" style={{ color: "var(--text)", marginBottom: 0 }}>{heading}</h2>
        </div>
        <Faq items={items} />
      </div>
    </section>
  );
}

/* ── CTA (cream) ── */

export type CtaAction =
  | { label: string; hire: true; href?: undefined }
  | { label: string; hire?: false; href: string };

export function CtaSection({
  heading,
  sub,
  primary,
  secondary,
  footnote,
}: {
  heading: ReactNode;
  sub: string;
  primary: CtaAction;
  secondary?: CtaAction;
  footnote?: string;
}) {
  return (
    <section className="clients-cta gs">
      <h2>{heading}</h2>
      <p>{sub}</p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        {primary.hire ? (
          <button className="btn btn-cream-prim" data-hire>{primary.label} <Arrow /></button>
        ) : (
          <Link className="btn btn-cream-prim" href={primary.href}>{primary.label} <Arrow /></Link>
        )}
        {secondary && (
          secondary.hire ? (
            <button className="btn btn-cream-ghost" data-hire>{secondary.label}</button>
          ) : (
            <Link className="btn btn-cream-ghost" href={secondary.href}>{secondary.label}</Link>
          )
        )}
      </div>
      {footnote && <p style={{ marginTop: 18, fontSize: 12.5, opacity: 0.7 }}>{footnote}</p>}
    </section>
  );
}

/* ── ARTICLE TEASERS ── */

export type ArticleTeaser = { title: string; dek: string };

export function InsightsSection({
  heading,
  articles,
  alt = false,
}: {
  heading: ReactNode;
  articles: ArticleTeaser[];
  alt?: boolean;
}) {
  return (
    <section className={`section${alt ? " alt" : ""}`}>
      <div className="wrap">
        <div className="gs">
          <Eyebrow>Perspectives</Eyebrow>
          <h2 className="section-h2" style={{ color: "var(--text)", maxWidth: 640 }}>{heading}</h2>
        </div>
        <div className="why-grid" style={{ gridTemplateColumns: "repeat(3,1fr)", marginTop: 44 }}>
          {articles.map((a) => (
            <Link href={routes.resources} className="why-card gs" key={a.title} style={{ textDecoration: "none" }}>
              <div className="why-title">{a.title}</div>
              <div className="why-desc">{a.dek}</div>
              <div style={{ marginTop: 18, fontSize: 13, color: "var(--green)", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 6 }}>Read more <SmallArrow /></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
