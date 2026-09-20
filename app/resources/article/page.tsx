import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { routes } from "@/lib/routes";
import { findArticle, articles, type Article, type ArticleSection } from "../data";

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
  const description = article.summary ?? article.dek;
  return {
    title: `${article.title} — Rivago Infotech`,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${article.title} — Rivago Infotech`, description, url },
  };
}

const BackArrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11 7H3M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const Arrow = () => (
  <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

/* One slug function, used by both the Contents list and the headings it
   points at, so a link can never miss its target. */
const slug = (h: string) =>
  h.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function Section({ s }: { s: ArticleSection }) {
  return (
    <section className="ad-sec">
      {/* The id lives on the heading, and scroll-margin-top in the stylesheet
          clears the fixed header — without it every jump link lands with its
          target hidden behind the nav. */}
      <h2 id={slug(s.h)}>{s.h}</h2>
      {s.p.map((para, i) => <p key={i}>{para}</p>)}

      {s.list && (
        <div className="ad-list">
          {s.list.intro && <p className="ad-list-intro">{s.list.intro}</p>}
          <ul>{s.list.items.map((it, i) => <li key={i}>{it}</li>)}</ul>
        </div>
      )}

      {s.table && (
        /* The scroller is a separate element from the table, and it carries
           tabindex so a keyboard user can reach the overflow — a div with
           overflow:auto is not focusable on its own, which makes a wide table
           unreachable without a mouse. */
        <figure className="ad-table-wrap">
          <div className="ad-table-scroll" tabIndex={0} role="group" aria-label={s.h}>
            <table className="ad-table">
              <thead>
                <tr>{s.table.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
              </thead>
              <tbody>
                {s.table.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      j === 0 ? <th key={j} scope="row">{cell}</th> : <td key={j}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {s.table.note && <figcaption>{s.table.note}</figcaption>}
        </figure>
      )}
    </section>
  );
}

export default async function ArticlePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = await searchParams;
  const article = findArticle(typeof id === "string" ? id : undefined);
  if (!article) notFound();

  const url = `https://rivagoinfotech.com/resources/article?id=${article.id}`;

  /* More in this category, newest first, excluding this one. Every article
     used to end with no link to any other — fourteen pieces across four
     categories and not one route between them, which is a dead end for a
     reader and nothing at all for a crawler. */
  const related: Article[] = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  const jsonLd: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.summary ?? article.dek,
      /* Was a Person carrying the article's byline. Those eight names were
         invented, and publishing one as a schema.org Person hands a search
         engine a fabricated author to attribute and index. The publisher is
         the honest answer and the one Rivago can stand behind. */
      author: { "@type": "Organization", name: "Rivago Infotech" },
      publisher: { "@type": "Organization", name: "Rivago Infotech" },
      datePublished: article.date,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    },
  ];

  /* FAQPage built from the same array the page renders, so the structured
     data and the visible text cannot say different things. */
  if (article.faqs?.length) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return (
    <>
      {jsonLd.map((j, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(j) }} />
      ))}

      <article className="ad">
        <header className="ad-head">
          <Link className="detail-back" href={routes.resources}><BackArrow /> Back to all resources</Link>
          <div className="detail-eyebrow">{article.categoryLabel}</div>
          <h1 className="ad-title">{article.title}</h1>

          <div className="ad-meta">
            <span>{article.readTime}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={article.date}>{article.displayDate}</time>
          </div>

          {/* The byline names the organisation, not a person. There is no
              "Reviewed by <name>, <credential>" line, which the reference for
              this layout carries: a named reviewer is a real professional
              lending their credential, and nobody has given one. It belongs
              here the day somebody does. */}
          <p className="ad-by">Written by the Rivago Infotech recruitment team</p>
        </header>

        {/* The dek used to be an <h2> inside a 386px gradient panel — a
            standfirst marked up as a section heading, sitting above the real
            section headings in the outline. It is a paragraph now, and the
            long-form guides lead with `summary`, which answers the question
            outright for a reader who wants it in one go. */}
        <p className="ad-standfirst">{article.summary ?? article.dek}</p>

        {article.sections.length > 1 && (
          <nav className="ad-toc" aria-labelledby="ad-toc-h">
            <h2 id="ad-toc-h" className="ad-toc-h">Contents</h2>
            <ol>
              {article.sections.map((s) => (
                <li key={s.h}><a href={`#${slug(s.h)}`}>{s.h}</a></li>
              ))}
              {article.faqs?.length ? <li><a href="#faq">Frequently asked questions</a></li> : null}
            </ol>
          </nav>
        )}

        <div className="ad-body">
          {article.sections.map((s) => <Section key={s.h} s={s} />)}

          {article.faqs?.length ? (
            <section className="ad-sec ad-faq">
              <h2 id="faq">Frequently asked questions</h2>
              {/* Real <details>, so every answer is in the served HTML and
                  present for a crawler whether or not it is open. */}
              {article.faqs.map((f) => (
                <details key={f.q} className="ad-faq-item">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </section>
          ) : null}

          {article.next?.length ? (
            <section className="ad-sec ad-next">
              <h2 id="where-to-go-next">Where to go next</h2>
              <ul className="ad-next-list">
                {article.next.map((n) => (
                  <li key={n.href}><Link href={n.href}>{n.label}<Arrow /></Link></li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </article>

      {related.length > 0 && (
        <section className="ad-related">
          <div className="ad-related-inner">
            <div className="ad-related-head">
              <h2>More in {article.categoryLabel.toLowerCase()}s</h2>
              <Link className="ad-related-all" href={routes.resources}>All resources<Arrow /></Link>
            </div>
            <ul className="ad-related-grid">
              {related.map((a) => (
                <li key={a.id}>
                  <Link className="rc rc-md" data-cat={a.category} href={`${routes.article}?id=${a.id}`}>
                    <div className="rc-art rc-art-md" aria-hidden="true" />
                    <div className="rc-meta">
                      <span className="rc-cat">{a.categoryLabel}</span>
                      <span className="rc-dot" aria-hidden="true">·</span>
                      <span className="rc-read">{a.readTime}</span>
                    </div>
                    <h3 className="rc-ti">{a.title}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

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
