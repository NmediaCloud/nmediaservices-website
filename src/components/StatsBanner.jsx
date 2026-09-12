import React from "react";

/**
 * StatsBanner — a compact, measured track-record strip under the nav.
 *
 * Section-oriented rather than scrolling: six figures in a single row that
 * can be read at a glance instead of waiting for a marquee to come round.
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
const STATS = [
  { value: "61.1M",   label: "AI tokens generated" },
  { value: "61,080",  label: "Model turns" },
  { value: "8",       label: "Frontier models" },
  { value: "15,000+", label: "Assets shipped" },
  { value: "11",      label: "Pipeline modules" },
  { value: "20+",     label: "Years animation & VFX" },
];

export default function StatsBanner() {
  return (
    <section
      aria-label="Track record"
      className="w-full border-y border-outline-variant bg-warm-neutral"
    >
      <div className="max-w-[1440px] mx-auto px-8 py-5">
        <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-4">
          {STATS.map((s) => (
            <div key={s.label} className="min-w-0">
              <dd className="font-headline text-xl md:text-2xl font-bold tracking-tighter text-headline leading-none">
                {s.value}
              </dd>
              <dt className="font-label text-[9px] tracking-[0.2em] uppercase text-on-surface-variant mt-1.5 leading-tight">
                {s.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
