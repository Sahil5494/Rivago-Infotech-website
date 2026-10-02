"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { routes, articleHref } from "@/lib/routes";
import { articles, featuredArticle, CATEGORIES, type Category } from "./data";
import ArticleArt from "./ArticleArt";

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

/* The art panel lives in ./ArticleArt: the article's licensed photo where it
   has one, otherwise a diagram drawn for its topic. It used to be the
   category colourway alone, at an earlier call of the client's. */

/* A category row's rail with prev/next arrows. Rows clip their fourth card
   on desktop, and a mouse has no sideways scroll, so without these most of a
   row was out of reach. The rail is still a plain overflow scroller (every
   card in the document and the tab order); the arrows only scroll it, are
   disabled at either end, and disappear when the row fits. */
function Rail({ label, head, children }: { label: string; head: React.ReactNode; children: React.ReactNode }) {
  const ref = useRef<HTMLUListElement>(null);
  const [can, setCan] = useState({ prev: false, next: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () =>
      setCan({ prev: el.scrollLeft > 4, next: el.scrollLeft + el.clientWidth < el.scrollWidth - 4 });
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, []);

  const go = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 22 : el.clientWidth * 0.8;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <>
      <div className="rrow-h">
      {head}
      {(can.prev || can.next) && (
        <div className="rrail-nav">
          <button type="button" className="rrail-btn" onClick={() => go(-1)} disabled={!can.prev} aria-label={`Previous ${label}`}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M11 7H3M6 4L3 7l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button type="button" className="rrail-btn" onClick={() => go(1)} disabled={!can.next} aria-label={`Next ${label}`}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      )}
      </div>
      <ul className="rrail" ref={ref}>{children}</ul>
    </>
  );
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

  /* Only categories with something in them get a tab or a row. Case
     studies has none yet — an empty shelf with a "0" on its tab made the
     library look thin — and returns by itself with its first entry. */
  const liveCategories = CATEGORIES.filter((c) => articles.some((a) => a.category === c.id));

  /* On All, the three featured articles are not repeated in their rows. */
  const featuredIds = new Set([featuredArticle.id, ...featuredRest.map((a) => a.id)]);

  const tabs: { id: TabId; label: string }[] = [
    { id: "all", label: "All" },
    ...liveCategories.map((c) => ({ id: c.id as TabId, label: c.plural })),
  ];

  return (
    <>
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
          Salary guides, interview guides and market reads from the recruiters running the searches. No sign-up, no gate.
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
          <span className="rsub-l">New guides by email — no schedule, no spam.</span>
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
              <Link className="rc rc-lg" data-cat={featuredArticle.category} href={articleHref(featuredArticle.id)}>
                <ArticleArt article={featuredArticle} size="lg" />
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
                  <Link className="rc rc-sm" data-cat={a.category} key={a.id} href={articleHref(a.id)}>
                    <ArticleArt article={a} size="sm" />
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

          {liveCategories.map((c) => {
            const items = articles.filter((a) => a.category === c.id && !featuredIds.has(a.id));
            if (!items.length) return null;
            return (
              <section className="rrow" key={c.id}>
                <Rail
                  label={c.plural.toLowerCase()}
                  head={
                    <>
                      <h2 className="rsec-h">{c.plural}</h2>
                      <button type="button" className="rrow-all" onClick={() => setTab(c.id)}>
                        View all<ArrowNE />
                      </button>
                    </>
                  }
                >
                  {items.map((a) => (
                    <li key={a.id}>
                      <Link className="rc rc-rail" data-cat={a.category} href={articleHref(a.id)}>
                        <ArticleArt article={a} size="md" />
                        <h3 className="rc-ti">{a.title}<ArrowNE /></h3>
                        <div className="rc-rail-meta">
                          <time dateTime={a.date}>{a.displayDate}</time>
                          <span aria-hidden="true">·</span>
                          <span>{a.readTime}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </Rail>
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
                <Link className="rc rc-md" data-cat={a.category} key={a.id} href={articleHref(a.id)}>
                  <ArticleArt article={a} size="md" />
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
    </div>

    {/* THE SIGN-UP BAND, to the design the client sent — full bleed, a sage
        ground, the headline on a highlight, and a wide capsule with a dark
        button. It sits OUTSIDE .rwrap rather than breaking out of it with
        100vw margins: a viewport-width child inside a max-width wrapper is
        the standard way to get a horizontal scrollbar on a page that is
        otherwise clean, and there is no reason to risk it when moving one
        element up a level does the same job exactly.

        THE COPY IS NOT THE REFERENCE'S, and it is worth saying why since the
        design is. The reference reads "Every benchmark, playbook and case
        study we publish — distilled into one short brief, twice a month. The
        evidence behind better senior-hiring decisions."

        Three of those cannot be said here. There are no benchmarks: the
        invented figures came out of these articles, which is why vp-eng-pay
        is now about what moves pay rather than what it is. There are no case
        studies — that tab renders an empty state for exactly this reason.
        And "twice a month" is the same promise as the "every Monday" that
        was just removed, only slower; the archive above would contradict it
        on the reader's first visit.

        The headline is the reference's and is the best thing in it — a
        proposition about the reader rather than a label. The line under it
        keeps the reference's shape and closing beat, with the three claims
        replaced by things that exist. "Thinking" rather than "evidence" for
        the same reason the h1 at the top of the page stopped saying it. */}
    <section className="bg-news">
      <div className="bg-news-inner">
        <h2><span className="bg-news-hl">Know before <em>you hire.</em></span></h2>
        <p>Every guide and market read we publish, in one short email when there is one. The thinking behind better senior-hiring decisions, nothing else.</p>
        <NewsletterForm id="bg-news-email" variant="band" placeholder="you@company.com" />
      </div>
    </section>
    </>
  );
}