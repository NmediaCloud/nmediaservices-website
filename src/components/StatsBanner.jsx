import React from "react";

/**
 * StatsBanner — a scrolling track-record ticker that sits directly under
 * the nav, mirroring the marquee at the foot of the page.
 *
 * Every figure is measured, not estimated:
 *   61.1M   output tokens across 61,080 model turns, aggregated from local
 *           Claude Code usage records (Apr–Sep 2026, 87 active days)
 *   8       Claude models — Opus 4.6/4.7/4.8/5, Fable 5, Sonnet 4.6/5, Haiku 4.5
 *   15,000+ owned 8K image / 4K video assets, per stockflow.media
 *   11      pipeline modules, brief to finished reel
 *
 * Deliberate omission: total tokens *processed* is ~22B, but 96% of that is
 * prompt-cache reads. Output tokens is the honest headline.
 */
const ITEMS = [
  { value: "61.1M",   label: "AI tokens generated" },
  { value: "61,080",  label: "Model turns" },
  { value: "8",       label: "Frontier models · provider-agnostic" },
  { value: "15,000+", label: "8K stills · 4K video shipped" },
  { value: "11",      label: "Pipeline modules · brief → final reel" },
  { value: "20+",     label: "Years in animation & VFX" },
];

function Track() {
  return (
    <div className="flex gap-10 shrink-0 items-center pr-10">
      {ITEMS.map((s) => (
        <span key={s.label} className="flex items-baseline gap-2 whitespace-nowrap">
          <span className="font-headline font-bold text-sm tracking-tight text-headline">
            {s.value}
          </span>
          <span className="font-label text-[10px] tracking-[0.25em] uppercase text-on-surface-variant">
            {s.label}
          </span>
          <span className="text-primary font-bold ml-8" aria-hidden="true">•</span>
        </span>
      ))}
    </div>
  );
}

export default function StatsBanner() {
  return (
    <section
      aria-label="Track record"
      className="w-full border-y border-outline-variant bg-warm-neutral py-3 overflow-hidden relative"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes nm-stats-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .nm-stats-track {
          display: flex;
          white-space: nowrap;
          width: max-content;
          animation: nm-stats-marquee 38s linear infinite;
        }
        .nm-stats-strip:hover .nm-stats-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .nm-stats-track { animation: none; }
        }
      `}} />
      <div className="nm-stats-strip">
        <div className="nm-stats-track">
          {/* duplicated so the -50% loop is seamless */}
          <Track />
          <Track />
        </div>
      </div>
    </section>
  );
}
