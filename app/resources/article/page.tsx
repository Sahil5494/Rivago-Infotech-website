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

const BackArrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 7H3M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const Arrow = () => (
  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
    author: { "@type": "Person", name: article.byline },
    datePublished: article.date,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="detail-hero">
        <div className="detail-wrap">
          <Link className="detail-back" href={`${routes.resources}?view=blog`}><BackArrow /> Back to all resources</Link>
          <div className="detail-eyebrow">{article.categoryLabel}</div>
          <h1 className="detail-title">{article.title}</h1>
          <div className="detail-meta">
            <span>{article.byline}</span><span>·</span><span>{article.displayDate}</span><span>·</span><span>{article.readTime}</span>
          </div>
          <div className="detail-banner">
            <h2>{article.dek}</h2>
          </div>
        </div>
      </header>

      <div className="detail-body">
        {article.sections.map((s) => (
          <div key={s.h}>
            <h2>{s.h}</h2>
            {s.p.map((para, i) => (<p key={i}>{para}</p>))}
          </div>
        ))}
      </div>

      <section className="rcs-cta">
        <h2>Want the same process<br /><em>on your next hire?</em></h2>
        <p>Send the brief and a partner in your sector comes back with a written plan within one business day.</p>
        <div className="rcs-cta-btns">
          <button className="cs-btn-d" data-hire>Book a strategy call <Arrow /></button>
          <Link className="cs-btn-g" href={routes.resources}>More resources</Link>
        </div>
      </section>
    </>
  );
}
