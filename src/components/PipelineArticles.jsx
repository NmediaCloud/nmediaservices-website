/**
 * PipelineArticles — horizontal-strip showcase of the 11 article HTMLs
 * served from /public/articles/. Reads /articles/articles.json on mount;
 * each card opens its full article in a new tab.
 *
 * Design notes:
 *   - Uses the site's existing tailwind tokens (surface-container, primary,
 *     font-headline, font-label) so it looks native to the homepage.
 *   - Horizontal scroll on overflow with snap points — works on desktop
 *     and mobile without a separate component.
 *   - Each card has a small subtitle pulled from the article's `tag`
 *     plus a 2-line intro line built from the title (descriptive text
 *     stays light — heavy copy lives on the article itself).
 */
import React, { useEffect, useRef, useState } from "react";

// Every click in this section lands here. The modules are reachable
// from the overview itself, so the reader meets the argument before
// any video player.
const LANDING = "/articles/Pipeline_Production_System.html";

export default function PipelineArticles({ title }) {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const stripRef = useRef(null);
  // Each edge fade only appears when content is actually hidden that way.
  // Showing them unconditionally washed out the first and last cards' text.
  const [edges, setEdges] = useState({ left: false, right: true });

  const syncEdges = () => {
    const el = stripRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setEdges({ left: el.scrollLeft > 4, right: el.scrollLeft < max - 4 });
  };

  // Scroll the strip by ~two card widths on chevron click.
  const nudge = (dir) => {
    const el = stripRef.current;
    if (!el) return;
    const card = el.querySelector("a");
    const step = (card?.offsetWidth || 260) + 4; // card + gap
    el.scrollBy({ left: dir * step * 2, behavior: "smooth" });
  };

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return undefined;
    syncEdges();
    el.addEventListener("scroll", syncEdges, { passive: true });
    window.addEventListener("resize", syncEdges);
    return () => {
      el.removeEventListener("scroll", syncEdges);
      window.removeEventListener("resize", syncEdges);
    };
  }, [articles]);

  useEffect(() => {
    fetch(`/articles/articles.json?v=${Date.now()}`, { cache: "no-cache" })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.statusText)))
      // Only the pipeline panels belong in this strip. CreativeFlow and
      // Shot Studio are standalone projects and have their own cards in the
      // capabilities section further down the page.
      .then((list) => setArticles(list.filter((a) => a.group !== "project")))
      .catch((e) => setError(String(e)));
  }, []);

  if (error || articles.length === 0) return null;   // fail quiet. Strip just doesn't render

  return (
    <section className="py-24 px-8 bg-background border-y border-outline-variant">
      <div className="max-w-[1440px] mx-auto">

        {/* Section heading — matches the Capabilities header rhythm */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            {/* Optional section heading. Passed by HomeDesktop only — HomeMobile
                renders this same component and already carries its own. */}
            {title && (
              <div className="inline-block border border-primary px-8 py-4 mb-8">
                <h2 className="font-['Space_Grotesk'] text-primary text-sm tracking-[0.3em] uppercase font-bold">
                  {title}
                </h2>
              </div>
            )}
            <a href={LANDING} className="block group/head">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
              [ FIELD_NOTES // ANIMATION_PIPELINE_V1.1 ]
            </p>
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-headline leading-none">
              How we built it.
            </h2>
            <p className="mt-4 text-on-surface-variant max-w-xl text-sm leading-relaxed">
              Eleven control panels. One source of truth. Each module gets its own
              field note. What the problem was, how the panel works, what it ships.
            </p>
            </a>
          </div>
          <a
            href="/articles/Pipeline_Production_System.html"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-br from-primary/10 via-surface-container to-surface-container border border-primary/35 hover:border-primary/50 hover:from-primary/15 transition-all duration-300 p-5 group max-w-sm"
          >
            <p className="font-label text-[9px] tracking-[0.3em] text-primary uppercase mb-2">
              [ READ THE FULL SYSTEM ]
            </p>
            <h3 className="font-headline font-bold text-base text-title leading-tight tracking-tight mb-2">
              Pipeline Production System →
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
              Eleven panels walked end-to-end. One source of truth. Format-aware. Cast-locked. Model-agnostic.
            </p>
            <p className="font-label text-[9px] tracking-[0.3em] uppercase text-on-surface-variant">
              {articles.length} articles · video walkthroughs in progress
            </p>
          </a>
        </div>

        {/* Carousel — chevron arrows + click-drag pan, native scrollbar hidden */}
        <div className="relative group/carousel">

          {/* Left chevron */}
          <button
            type="button"
            onClick={() => nudge(-1)}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full bg-surface-container/90 hover:bg-primary text-on-surface hover:text-white border border-outline-variant hover:border-primary backdrop-blur-md flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all hover:scale-110 cursor-pointer shadow-xl shadow-[#4E4A46]/15"
          >
            <span className="material-symbols-outlined" style={{ fontSize: "28px" }}>chevron_left</span>
          </button>

          {/* Right chevron */}
          <button
            type="button"
            onClick={() => nudge(1)}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-12 h-12 rounded-full bg-surface-container/90 hover:bg-primary text-on-surface hover:text-white border border-outline-variant hover:border-primary backdrop-blur-md flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all hover:scale-110 cursor-pointer shadow-xl shadow-[#4E4A46]/15"
          >
            <span className="material-symbols-outlined" style={{ fontSize: "28px" }}>chevron_right</span>
          </button>

          {/* Edge fades */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none transition-opacity duration-300 ${edges.left ? "opacity-100" : "opacity-0"}`}
          />
          <div
            className={`absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none transition-opacity duration-300 ${edges.right ? "opacity-100" : "opacity-0"}`}
          />

        <div
          ref={stripRef}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          className="
          flex gap-1 overflow-x-auto pb-2
          snap-x snap-mandatory
          [&::-webkit-scrollbar]:hidden
        ">
          {articles.map((a) => (
            <a
              key={a.slug}
              href={LANDING}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex-shrink-0 snap-start
                w-[240px] md:w-[260px]
                bg-surface-container hover:bg-surface-container-high
                border border-outline-variant hover:border-primary/40
                relative
                transition-all duration-300 flex flex-col overflow-hidden
              "
            >
              {/* Thin orange accent that draws on hover */}
              <span className="
                absolute top-0 left-0 h-[2px] w-0 z-10
                bg-primary transition-all duration-500
                group-hover:w-full
              " />

              {/* Still, not a player. The card opens the system overview, so a
                  play badge here would promise something the click does not do. */}
              <div className="relative aspect-video bg-surface-container-high overflow-hidden border-b border-outline-variant">
                {a.youtube_id ? (
                  <img src={`https://i.ytimg.com/vi/${a.youtube_id}/hqdefault.jpg`} alt={a.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : a.thumbnail ? (
                  <img src={a.thumbnail.startsWith("./") ? `/articles/${a.thumbnail.slice(2)}` : a.thumbnail} alt={a.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-background text-center px-3">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: "32px" }}>article</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col p-5 flex-1">
                {/* Tag pill */}
                <p className="font-label text-[10px] tracking-widest uppercase text-primary mb-3 leading-none">
                  {a.tag}
                </p>

                {/* Headline */}
                <h3 className="font-headline font-bold text-base text-title leading-tight tracking-tight mb-3 line-clamp-3">
                  {a.title}
                </h3>

                {/* Intro */}
                <p className="text-xs text-on-surface-variant leading-relaxed flex-1 line-clamp-4">
                  {a.intro || ""}
                </p>

                {/* Footer row */}
                <div className="mt-4 pt-3 border-t border-outline-variant flex items-center justify-between">
                  <span className="font-label text-[9px] tracking-[0.2em] uppercase text-on-surface-variant group-hover:text-primary transition-colors">
                    Open the system →
                  </span>
                  <span className="font-label text-[9px] text-on-surface-variant uppercase tracking-wider">
                    {a.stage}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        </div>

        {/* Scroll-hint footer */}
        <p className="mt-4 text-on-surface-variant text-[10px] font-label tracking-widest uppercase text-right">
          Every card opens the full system · {articles.length} modules
        </p>
      </div>
    </section>
  );
}
