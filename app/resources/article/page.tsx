import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { routes } from "@/lib/routes";
import { findArticle } from "../data";

/* findArticle returns undefined for an id that is not in the library, and
   both exports below answer 404 rather than substituting an article.
   Previously it fell back to articles[0], so every misspelt, stale or
   invented id — and the bare /resources/article with no query at all —
   returned HTTP 200 carrying the first article, each one canonical-tagged to
   its own bogus URL. That is an unbounded set of indexable duplicates, and a
   reader following a broken link was quietly shown something else. */
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
  const { id } = await searchParams;
  const article = findArticle(typeof id === "string" ? id : undefined);
  if (!article) return { title: "Article not found — Rivago Infotech" };
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
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.dek,
    /* Was a Person carrying the article's byline. Those eight names were
       invented, and publishing one as a schema.org Person hands a search
       engine a fabricated author to attribute and index. The publisher is
       the honest answer and the one Rivago can stand behind. */
    author: { "@type": "Organization", name: "Rivago Infotech" },
    datePublished: article.date,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="detail-hero">
        <div className="detail-wrap">
          <Link className="detail-back" href={routes.resources}><BackArrow /> Back to all resources</Link>
          <div className="detail-eyebrow">{article.categoryLabel}</div>
          <h1 className="detail-title">{article.title}</h1>
          <div className="detail-meta">
            <span>{article.displayDate}</span><span>·</span><span>{article.readTime}</span>
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
        {/* Was "comes back with a written plan within one business day". The
            site's own brief form promises a reply in one business day, not a
            written plan — this CTA had quietly upgraded the commitment, and a
            deliverable is a much larger thing to promise than an answer. It
            now says what the rest of the site says. */}
        <p>Send the brief and a partner in your sector reads it and replies within one business day.</p>
        <div className="rcs-cta-btns">
          <button className="cs-btn-d" data-hire>Book a strategy call <Arrow /></button>
          <Link className="cs-btn-g" href={routes.resources}>More resources</Link>
        </div>
      </section>
    </>
  );
}
