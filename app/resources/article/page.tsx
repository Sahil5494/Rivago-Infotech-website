import Link from "next/link";
import type { Metadata } from "next";
import { routes } from "@/lib/routes";
import { findArticle } from "../data";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
  const { id } = await searchParams;
  const article = findArticle(typeof id === "string" ? id : undefined);
  const url = `https://rivagoinfotech.com/resources/article?id=${article.id}`;
  return {
    title: `${article.title} — Rivago Infotech`,
    description: article.dek,
    alternates: { canonical: url },
    openGraph: { title: `${article.title} — Rivago Infotech`, description: article.dek, url },
  };
}

const Arrow = () => (
  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const BackArrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 7H3M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export default async function ArticlePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = await searchParams;
  const article = findArticle(typeof id === "string" ? id : undefined);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.dek,
    author: { "@type": "Organization", name: "Rivago Infotech" },
    datePublished: article.date,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <style>{`
        .detail-banner{position:relative;height:280px;margin:0 44px;border-radius:24px;overflow:hidden;background:
          radial-gradient(ellipse 70% 90% at 15% 20%,rgba(61,255,135,.22) 0%,transparent 55%),
          radial-gradient(ellipse 60% 80% at 85% 90%,rgba(0,180,120,.18) 0%,transparent 55%),
          linear-gradient(155deg,#0A1A0C 0%,#061308 55%,#030C05 100%);
          border:1px solid var(--border);display:flex;align-items:center;justify-content:center;text-align:center;padding:32px}
        .detail-banner::before{content:'';position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.05) 1px,transparent 1px);background-size:26px 26px;opacity:.5}
        .detail-banner-txt{position:relative;z-index:1;font-family:var(--fs);font-style:italic;font-size:clamp(20px,2.6vw,32px);color:rgba(240,244,240,.92);max-width:640px;line-height:1.4;letter-spacing:-.01em}
        .detail-wrap{max-width:740px;margin:0 auto;padding:0 44px}
        .detail-byline{display:flex;align-items:center;justify-content:center;gap:10px;font-size:13px;color:var(--text3);margin-top:18px;flex-wrap:wrap}
        .detail-byline .dot{width:3px;height:3px;border-radius:50%;background:var(--text3)}
        .detail-body h2{font-size:24px;font-weight:400;letter-spacing:-.02em;color:var(--text);margin:44px 0 16px}
        .detail-body h2:first-child{margin-top:0}
        .detail-body p{font-size:16px;color:var(--text2);line-height:1.85;font-weight:300;margin-bottom:18px}
        .detail-back{display:inline-flex;align-items:center;gap:7px;font-size:13px;color:var(--text2);margin-bottom:32px;transition:color .18s}
        .detail-back:hover{color:var(--green)}
        @media(max-width:900px){.detail-banner{margin:0 20px;height:220px}}
      `}</style>

      <header className="page-hero" style={{ paddingBottom: 44 }}>
        <div className="page-hero-inner">
          <div className="crumbs"><Link href={routes.home}>Home</Link><span className="crumbs-sep">/</span><Link href={routes.resources}>Resources</Link><span className="crumbs-sep">/</span><span>Article</span></div>
          <div className="eyebrow ew-light gs" style={{ marginBottom: 24, display: "inline-flex", alignItems: "center", gap: 7 }}><span className="eyebrow-dot"></span>{article.tag}</div>
          <h1 className="gs" style={{ fontSize: "clamp(32px,4.6vw,52px)" }}>{article.title}</h1>
          <p className="lead gs" style={{ marginTop: 16 }}>{article.dek}</p>
          <div className="detail-byline gs">
            <span>{article.byline}</span><span className="dot" /><span>{new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span><span className="dot" /><span>{article.readTime}</span>
          </div>
        </div>
      </header>

      <div className="detail-banner gs">
        <div className="detail-banner-txt">&ldquo;{article.dek}&rdquo;</div>
      </div>

      <section className="section">
        <div className="detail-wrap">
          <Link className="detail-back gs" href={routes.resources}><BackArrow /> Back to all resources</Link>
          <div className="detail-body">
            {article.sections.map((s) => (
              <div className="gs" key={s.h}>
                <h2>{s.h}</h2>
                {s.p.map((para, i) => (<p key={i}>{para}</p>))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="clients-cta gs">
        <h2>Want the same process<br />on <em>your next hire?</em></h2>
        <p>Send the brief and a partner in your sector comes back with a written plan within one business day.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button className="btn btn-cream-prim" data-hire>Book a strategy call <Arrow /></button>
          <Link className="btn btn-cream-ghost" href={routes.resources}>More resources</Link>
        </div>
      </section>
    </>
  );
}
