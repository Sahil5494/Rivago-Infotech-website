"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { routes } from "@/lib/routes";
import { articles, featuredArticle, CATEGORIES, type Category } from "./data";

/* /resources, rebuilt to the reference layout the client sent (metaview.ai):
 * title and standfirst, a row of category tabs, a Featured block running one
 * large card beside two stacked small ones, then the archive grid below.
 *
 * Three departures from the reference, each for a reason in this repo rather
 * than a preference:
 *
 * 1. NO SEARCH FIELD. The reference puts one under its standfirst. It has a
 *    library large enough to need one; this has eight articles, all of which
 *    fit on one screen under the tabs. A search box over eight items is a
 *    control that mostly returns "no results".
 *
 * 2. CARD ART IS DESIGNED, NOT PHOTOGRAPHIC. So is the reference's — two of
 *    its three visible cards are a gradient panel rather than an image. Each
 *    card here takes its category's colourway, so the library reads as four
 *    visual families. What it used to be was one mint gradient repeated on
 *    every card: the mechanism to vary by category existed
 *    (.bg-card[data-cat]::before) but the three values were so close that the
 *    grid looked like a loading state.
 *
 * 3. THE CASE STUDIES TAB IS EMPTY, deliberately. See the note at the top of
 *    ./data.ts — it renders an explanation rather than nothing, and rather
 *    than the invented engagements that were deleted from this file.
 */

const WEB3FORMS_ACCESS_KEY = "2344bac7-cbde-4313-8fea-b5716d55e448";

/* THE NEWSLETTER FORMS NOW ACTUALLY SEND.
 *
 * Both of them used to do this, on submit:
 *
 *     e.preventDefault();
 *     if (email.trim()) setOk(true);
 *
 * — no request, nothing stored, the address dropped on the next render —
 * and then told the visitor "Subscribed — your first brief is on its way."
 * A real person handed over personal data and was told something untrue
 * about what happened to it. The inputs also carried no name attribute, so
 * there was nothing to submit even if a submit had existed, and no label,
 * which is a WCAG 3.3.2 failure on top.
 *
 * They now post to the same api.web3forms.com endpoint and access key the
 * brief form and the hire modal use, following that form's shape exactly:
 * an explicit email test, the botcheck honeypot, a subject that says which
 * form fired, replyto set to the subscriber, and a failure path that names a
 * real address rather than silently swallowing the error.
 *
 * The confirmation copy changed with it. "Your first brief is on its way"
 * described an automation that does not exist — nothing is scheduled by
 * subscribing. It now says only what is true: the address arrived.
 *
 * One form, two shells. They were separate components with the same logic
 * duplicated, which is how they came to have subtly different lies in their
 * success states. */
function NewsletterForm({
  id,
  variant,
  placeholder,
}: {
  id: string;
  variant: "inline" | "band";
  placeholder: string;
}) {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr("");
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setErr("Please enter a valid email address.");
      return;
    }

    const fd = new FormData();
    fd.append("access_key", WEB3FORMS_ACCESS_KEY);
    fd.append("from_name", "Rivago Website");
    fd.append("botcheck", "");
    fd.append("subject", "Newsletter signup — " + value);
    fd.append("Email", value);
    fd.append("replyto", value);
    fd.append("Source", "Resources newsletter");
    fd.append("ccemail", "info@rivagoinfotech.com");

    setBusy(true);
    try {
      const r = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      const d = await r.json();
      setBusy(false);
      if (!d || d.success !== true) throw new Error(d?.message || "Submission failed");
      setOk(true);
      setEmail("");
    } catch {
      setBusy(false);
      setErr("Could not send — please check your connection, or email us at info@rivagoinfotech.com.");
    }
  }

  /* Says what happened, and nothing more. There is no scheduled send to
     promise, so it does not promise one. */
  if (ok) {
    return (
      <p className={variant === "inline" ? "rsub-done" : "bg-news-done"} role="status">
        Thanks — we&rsquo;ve got your address and you&rsquo;ll be on the next one.
      </p>
    );
  }

  return (
    <>
      <form className={variant === "inline" ? "rsub-form" : "bg-news-form"} onSubmit={onSubmit} noValidate>
        <label className="sr-only" htmlFor={id}>
          Email address for the Rivago hiring newsletter
        </label>
        <input
          id={id}
          name="email"
          type="email"
          autoComplete="email"
          placeholder={placeholder}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={err ? true : undefined}
          aria-describedby={err ? `${id}-err` : undefined}
        />
        <button type="submit" disabled={busy}>{busy ? "Sending…" : "Subscribe"}</button>
      </form>
      {err && (
        <p className={variant === "inline" ? "rsub-err" : "bg-news-err"} id={`${id}-err`} role="alert">
          {err}
        </p>
      )}
    </>
  );
}

const ArrowNE = () => (
  <svg className="rc-go" width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M4.5 11.5L11.5 4.5M11.5 4.5H5.8M11.5 4.5v5.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* The art panel: the category's colourway and nothing else, at the client's
   call. It used to carry the article's kicker ("Offer stage", "UAE
   licensing") and a small RIVAGO wordmark. Both are gone, and the `kicker`
   field left the Article type with them rather than staying in the data
   unread — an unused field is exactly how `image`, `tag` and `kind` came to
   sit in that file for nothing.

   Worth knowing about the result: cards in one row now share a colourway
   with no text to tell them apart, so a row of five salary guides is five
   identical panels. The titles underneath do the distinguishing. */
function CardArt({ size }: { size: "lg" | "sm" | "md" }) {
  return <div className={`rc-art rc-art-${size}`} aria-hidden="true" />;
}

type TabId = "all" | Category;

export default function ResourcesView() {
  const [tab, setTab] = useState<TabId>("all");

  const visible = useMemo(
    () => (tab === "all" ? articles : articles.filter((a) => a.category === tab)),
    [tab],
  );

  /* The featured block belongs to the whole library, so it only shows on All.
     Filtered down to one category it would either repeat a card from the grid
     immediately below it or promote something outside the filter the reader
     just chose. */
  const showFeatured = tab === "all";
  const featuredRest = articles.filter((a) => a.id !== featuredArticle.id).slice(0, 2);
  const gridItems = showFeatured
    ? articles.filter((a) => a.id !== featuredArticle.id && !featuredRest.includes(a))
    : visible;

  const tabs: { id: TabId; label: string }[] = [
    { id: "all", label: "All" },
    ...CATEGORIES.map((c) => ({ id: c.id as TabId, label: c.plural })),
  ];

  return (
    <div className="rwrap">
      <div className="rhead">
        <span className="reyebrow">Resources</span>
        {/* Was "Ideas, evidence & market intel." Evidence is the one thing
            this library does not carry: there are no case studies, no client
            results and — since the invented statistics came out of the
            articles — no proprietary data either. */}
        <h1 className="rtitle">
          Hiring intelligence, <em>free to read.</em>
        </h1>
        <p className="rstand">
          Salary guides, interview guides and market reads from the partners running the searches. No sign-up, no gate.
        </p>
      </div>

      {/* THE CONTROL BAR, back to the original export's arrangement: filter
          pills on the left, the newsletter sign-up on the right, one row, a
          hairline under it. The rebuild had put the newsletter in a band of
          its own near the foot of the page, which left this row half empty
          and buried the only sign-up above the fold.

          TABS. role=tablist would be a lie — these filter a list that is
          always in the document rather than swapping panels, so they are
          toggle buttons with aria-pressed, which is what they actually are.
          type="button" because a <button> with no type defaults to submit. */}
      <div className="rbar">
        <div className="rtabs" role="group" aria-label="Filter resources by type">
          {tabs.map((t) => {
            const count = t.id === "all" ? articles.length : articles.filter((a) => a.category === t.id).length;
            return (
              <button
                key={t.id}
                type="button"
                className={`rtab${tab === t.id ? " on" : ""}`}
                aria-pressed={tab === t.id}
                onClick={() => setTab(t.id)}
              >
                {t.label}
                <span className="rtab-ct">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="rsub">
          <span className="rsub-l">Get our latest updates sent straight to your inbox.</span>
          <NewsletterForm id="rsub-email" variant="inline" placeholder="your@email" />
        </div>
      </div>
      <div className="rdiv" />

      <p className="sr-only" aria-live="polite">{`Showing ${visible.length} of ${articles.length} resources.`}</p>

      {/* ── THE "ALL" VIEW ─────────────────────────────────────────────────
          One row per category — heading, a View all on the right, and a
          horizontal rail of cards — which is the reference's arrangement and
          replaces the single flat archive grid that stood here.

          The rail is a real overflow scroller rather than a carousel with
          arrows: every card is in the document and reachable by tab, and with
          two items in a category it simply does not scroll. Nothing here
          renders only the visible slide, which is the failure the services
          carousel on the home page still has.

          View all sets the tab rather than navigating. These are client-side
          filters over one array; sending the reader to a URL would need eight
          routes for a library that fits on one screen.

          Articles in the Featured block above also appear in their category
          row. That is the convention in the reference and everywhere else
          this pattern is used — a featured item is still a member of its
          category — but with eight articles it is more visible than it would
          be with eighty. Say the word and Featured comes off the All view. */}
      {showFeatured && (
        <>
          <section className="rfeat-sec">
            <h2 className="rsec-h">Featured</h2>
            <div className="rfeat">
              {/* A LINK, not a div. This is the largest element on the page and
                  it used to be inert — no href, no anchor anywhere inside it —
                  because it described an article that existed nowhere in the
                  library. See the note on FEATURED_ID in ./data.ts. */}
              <Link className="rc rc-lg" data-cat={featuredArticle.category} href={`${routes.article}?id=${featuredArticle.id}`}>
                <CardArt size="lg" />
                <div className="rc-meta">
                  <span className="rc-cat">{featuredArticle.categoryLabel}</span>
                  <span className="rc-dot" aria-hidden="true">·</span>
                  <span className="rc-read">{featuredArticle.readTime}</span>
                </div>
                <h3 className="rc-ti">{featuredArticle.title}<ArrowNE /></h3>
                <p className="rc-ex">{featuredArticle.dek}</p>
              </Link>

              <div className="rfeat-side">
                {featuredRest.map((a) => (
                  <Link className="rc rc-sm" data-cat={a.category} key={a.id} href={`${routes.article}?id=${a.id}`}>
                    <CardArt size="sm" />
                    <div className="rc-meta">
                      <span className="rc-cat">{a.categoryLabel}</span>
                      <span className="rc-dot" aria-hidden="true">·</span>
                      <span className="rc-read">{a.readTime}</span>
                    </div>
                    <h3 className="rc-ti">{a.title}<ArrowNE /></h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {CATEGORIES.map((c) => {
            const items = articles.filter((a) => a.category === c.id);
            return (
              <section className="rrow" key={c.id}>
                <div className="rrow-h">
                  <h2 className="rsec-h">{c.plural}</h2>
                  <button type="button" className="rrow-all" onClick={() => setTab(c.id)}>
                    View all<ArrowNE />
                  </button>
                </div>

                {items.length > 0 ? (
                  <ul className="rrail">
                    {items.map((a) => (
                      <li key={a.id}>
                        <Link className="rc rc-rail" data-cat={a.category} href={`${routes.article}?id=${a.id}`}>
                          <CardArt size="md" />
                          <h3 className="rc-ti">{a.title}<ArrowNE /></h3>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  /* The Case studies row. Compact here because it is one row
                     among four; the full explanation is on its own tab. */
                  <p className="rrow-empty">
                    Nothing here yet — we publish an engagement only once the client has signed it
                    off. <button type="button" className="rlink" onClick={() => setTab("case")}>Why this is empty</button>
                  </p>
                )}
              </section>
            );
          })}
        </>
      )}

      {/* ── A SINGLE CATEGORY ──────────────────────────────────────────────
          A grid rather than a rail: the reader has asked for one category, so
          the whole of it should be on screen at once instead of behind a
          sideways scroll. */}
      {!showFeatured && (
        <section className="rarch">
          <h2 className="rsec-h">{tabs.find((t) => t.id === tab)?.label}</h2>

          {gridItems.length > 0 ? (
            <div className="rgrid">
              {gridItems.map((a) => (
                <Link className="rc rc-md" data-cat={a.category} key={a.id} href={`${routes.article}?id=${a.id}`}>
                  <CardArt size="md" />
                  <div className="rc-meta">
                    <span className="rc-cat">{a.categoryLabel}</span>
                    <span className="rc-dot" aria-hidden="true">·</span>
                    <span className="rc-read">{a.readTime}</span>
                  </div>
                  <h3 className="rc-ti">{a.title}<ArrowNE /></h3>
                  <p className="rc-ex">{a.dek}</p>
                  <span className="rc-date">{a.displayDate}</span>
                </Link>
              ))}
            </div>
          ) : (
            /* The Case studies tab lands here. It says what is true rather than
               rendering an empty grid or a spinner — and rather than being
               refilled with the fabricated engagements that were deleted from
               ./data.ts. */
            <div className="rempty">
              <p className="rempty-h">No case studies published yet.</p>
              <p className="rempty-p">
                We only publish an engagement once the client has signed it off, with figures only
                where they were actually recorded. Nothing has cleared that bar yet — so rather than
                fill this page with illustrative examples, we have left it empty.
              </p>
              <p className="rempty-p">
                The guides and market reads in the other tabs are written by the same partners who
                run the searches. <Link href={routes.contactUs}>Talk to one of them</Link> if you want
                the detail a case study would have given you.
              </p>
            </div>
          )}
        </section>
      )}

      {/* The inline sign-up moved up to the control bar, where the original
          export had it. This band keeps the second one: the bar is above the
          fold and this catches someone who has read to the bottom. */}
      <section className="bg-news">
        <div className="bg-news-inner">
          <h2>Hiring intel, <em>every Monday.</em></h2>
          <p>One short email a week — a comp benchmark, a market read, and the roles worth knowing about. No noise.</p>
          <NewsletterForm id="bg-news-email" variant="band" placeholder="you@company.com" />
        </div>
      </section>
    </div>
  );
}
