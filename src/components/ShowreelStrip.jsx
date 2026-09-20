/**
 * ShowreelStrip — horizontal-strip showcase of a portfolio reel.
 *
 * Rendered twice on the homepage, above PipelineArticles: once for ad
 * commercials / trailer visualisation, once for biomedical visualisation.
 * The work comes first, the technology that made it second.
 *
 * The two reels get EQUAL weight on purpose — they pitch to different
 * industries and neither is the junior partner. They are told apart by
 * the band colour (`bg` prop), not by size or position.
 *
 * Design notes:
 *   - Deliberately shares the PipelineArticles chassis (chevrons, edge
 *     fades, snap scroll, card proportions) so all three strips read as
 *     a family rather than unrelated carousels.
 *   - Cards open the film on YouTube; the header card goes to the full
 *     /commercials portfolio where both playlists live.
 *   - Thumbnails ask for maxresdefault and fall back to hqdefault — not
 *     every upload has a maxres still, and a broken image in a portfolio
 *     strip costs more than the extra request.
 */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function ShowreelStrip({
  videos,
  title,            // optional boxed heading (desktop passes one, mobile does not)
  kicker,
  headline,
  blurb,
  ctaTitle,
  ctaBlurb,
  ctaMeta,
  ctaTo = "/commercials",
  bg = "bg-background",
}) {
  const stripRef = useRef(null);
  // Each edge fade only appears when content is actually hidden that way.
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
  }, [videos]);

  if (!videos || videos.length === 0) return null;

  // The edge fades blend into the band, so they follow the background.
  const fadeFrom = bg === "bg-background" ? "from-background" : "from-surface-container";
  const fadeTo   = bg === "bg-background" ? "to-background"   : "to-surface-container";
  // Cards need to sit a step off the band or they disappear into it.
  const cardBg   = bg === "bg-background" ? "bg-surface-container" : "bg-background";

  return (
    <section className={`py-24 px-8 ${bg} border-y border-outline-variant`}>
      <div className="max-w-[1440px] mx-auto">

        {/* Section heading — matches the PipelineArticles header rhythm */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            {title && (
              <div className="inline-block border border-primary px-8 py-4 mb-8">
                <h2 className="font-['Space_Grotesk'] text-primary text-sm tracking-[0.3em] uppercase font-bold">
                  {title}
                </h2>
              </div>
            )}
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
              {kicker}
            </p>
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-headline leading-none">
              {headline}
            </h2>
            <p className="mt-4 text-on-surface-variant max-w-xl text-sm leading-relaxed">
              {blurb}
            </p>
          </div>
          <Link
            to={ctaTo}
            className="block bg-gradient-to-br from-primary/10 via-surface-container to-surface-container border border-primary/35 hover:border-primary/50 hover:from-primary/15 transition-all duration-300 p-5 group max-w-sm"
          >
            <p className="font-label text-[9px] tracking-[0.3em] text-primary uppercase mb-2">
              [ SEE THE FULL PORTFOLIO ]
            </p>
            <h3 className="font-headline font-bold text-base text-title leading-tight tracking-tight mb-2">
              {ctaTitle}
            </h3>
            <p className="text-xs text-on-surface-variant leading-relaxed mb-3">
              {ctaBlurb}
            </p>
            <p className="font-label text-[9px] tracking-[0.3em] uppercase text-on-surface-variant">
              {ctaMeta}
            </p>
          </Link>
        </div>

        {/* Carousel — chevron arrows + snap scroll, native scrollbar hidden */}
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
            className={`absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r ${fadeFrom} to-transparent pointer-events-none transition-opacity duration-300 ${edges.left ? "opacity-100" : "opacity-0"}`}
          />
          <div
            className={`absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l ${fadeTo} to-transparent pointer-events-none transition-opacity duration-300 ${edges.right ? "opacity-100" : "opacity-0"}`}
          />

          <div
            ref={stripRef}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="
              flex gap-1 overflow-x-auto pb-2
              snap-x snap-mandatory
              [&::-webkit-scrollbar]:hidden
            "
          >
            {videos.map((v) => (
              <Link
                key={v.id}
                to={ctaTo}
                href={ctaTo}
                className={`
                  group flex-shrink-0 snap-start
                  w-[240px] md:w-[260px]
                  ${cardBg} hover:bg-surface-container-high
                  border border-outline-variant hover:border-primary/40
                  relative
                  transition-all duration-300 flex flex-col overflow-hidden
                `}
              >
                {/* Thin orange accent that draws on hover */}
                <span className="
                  absolute top-0 left-0 h-[2px] w-0 z-10
                  bg-primary transition-all duration-500
                  group-hover:w-full
                " />

                {/* Thumbnail + play badge */}
                <div className="relative aspect-video bg-surface-container-high overflow-hidden border-b border-outline-variant">
                  <img
                    src={`https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`}
                    onLoad={(e) => {
                      // When a video has no max-res still, YouTube answers 200
                      // with a 120x90 grey placeholder rather than a 404, so
                      // onError never fires. Size is the only tell.
                      const img = e.currentTarget;
                      if (img.naturalWidth <= 120 && !img.dataset.fallback) {
                        img.dataset.fallback = "1";
                        img.src = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;
                      }
                    }}
                    onError={(e) => {
                      if (!e.currentTarget.dataset.fallback) {
                        e.currentTarget.dataset.fallback = "1";
                        e.currentTarget.src = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;
                      }
                    }}
                    alt={v.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/50 via-transparent to-transparent" />
                </div>

                <div className="flex flex-col p-5 flex-1">
                  {/* Tag pill */}
                  <p className="font-label text-[10px] tracking-widest uppercase text-primary mb-3 leading-none">
                    {v.tag}
                  </p>

                  {/* Headline */}
                  <h3 className="font-headline font-bold text-base text-title leading-tight tracking-tight mb-3 line-clamp-3">
                    {v.headline}
                  </h3>

                  {/* Footer row */}
                  <div className="mt-auto pt-3 border-t border-outline-variant flex items-center justify-between">
                    <span className="font-label text-[9px] tracking-[0.2em] uppercase text-on-surface-variant group-hover:text-primary transition-colors">
                      Open the portfolio →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>

        {/* Scroll-hint footer */}
        <p className="mt-4 text-on-surface-variant text-[10px] font-label tracking-widest uppercase text-right">
          Every card opens the portfolio · {videos.length} films
        </p>
      </div>
    </section>
  );
}
