import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { routes, articleHref } from "@/lib/routes";
import { findArticle, articles, type Article, type ArticleSection } from "../data";
import ArticleToc from "@/components/ArticleToc";
import { ogBase } from "@/lib/og";

/* One static page per article at /resources/<id>, built at compile time.
   An id that is not in the library is a 404 (dynamicParams = false) rather
   than a substitute article. The old /resources/article?id=<id> address
   permanently redirects here — see app/resources/article/page.tsx. */
export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = findArticle(slug);
  if (!article) return { title: "Article not found — Rivago Infotech" };
  const url = `https://rivagoinfotech.com${articleHref(article.id)}`;
  const description = article.summary ?? article.dek;
  return {
    title: `${article.title} — Rivago Infotech`,
    description,
    alternates: { canonical: url },
    openGraph: { ...ogBase, type: "article", publishedTime: article.date, title: `${article.title} — Rivago Infotech`, description, url },
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

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: id } = await params;
  const article = findArticle(id);
  if (!article) notFound();

  const url = `https://rivagoinfotech.com${articleHref(article.id)}`;

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
      url,
      image: "https://rivagoinfotech.com/assets/og-image.png",
      articleSection: article.categoryLabel,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://rivagoinfotech.com/" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://rivagoinfotech.com/resources" },
        { "@type": "ListItem", position: 3, name: article.title, item: url },
      ],
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

          {/* next/image rather than a bare <img>: this is the largest element
              on the page and the one that decides the LCP. priority, because
              it is above the fold at every width and lazy-loading it would
              delay the very paint it dominates. */}
          {article.image && (
            <figure className="ad-hero">
              <Image
                src={article.image.src}
                alt={article.image.alt}
                width={1600}
                height={1067}
                sizes="(max-width: 1099px) 100vw, 680px"
                priority
              />
            </figure>
          )}
        </header>

        {/* The dek used to be an <h2> inside a 386px gradient panel — a
            standfirst marked up as a section heading, above the real section
            headings in the outline. It is a paragraph now, lifted onto its
            own ground so a skimming reader catches it, and the long-form
            guides lead with `summary`, which answers the question outright. */}
        <div className="ad-standfirst">
          <p>{article.summary ?? article.dek}</p>
        </div>

        {/* Two columns from 1100px up: Contents in the left margin, article
            in the right. Below that the stylesheet returns the TOC to a block
            at the top of the flow. */}
        <div className="ad-cols">
          {article.sections.length > 1 && (
            <div className="ad-aside">
              <ArticleToc
                items={[
                  ...article.sections.map((sec) => ({ id: slug(sec.h), label: sec.h })),
                  ...(article.faqs?.length ? [{ id: "faq", label: "Frequently asked questions" }] : []),
                ]}
              />
            </div>
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
        </div>
      </article>

      {related.length > 0 && (
        <section className="ad-related">
          <div className="ad-related-inner">
            <div className="ad-related-head">
              <h2>More in {article.categoryLabel.toLowerCase()}s</h2>
              <Link className="ad-related-all" href={routes.resources}>All resources<Arrow /></Link>
            </div>
            {/* A list, not cards. Related is filtered to this article's own
                category, so every card shared one colourway — and with the
                kicker removed from the art, that was three identical green
                rectangles in a row. These are navigation rather than display,
                so they are rows: title, then category and length. */}
            <ul className="ad-related-list">
              {related.map((a) => (
                <li key={a.id}>
                  <Link href={articleHref(a.id)}>
                    <span className="ad-rel-ti">{a.title}</span>
                    <span className="ad-rel-meta">{a.categoryLabel} · {a.readTime}</span>
                    <Arrow />
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
