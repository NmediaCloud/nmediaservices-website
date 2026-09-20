import React, { useState } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import VideoGrid from "../components/VideoGrid";
import { PLAYLIST_FB, FB_VIDEOS } from "../data/commercials";

/**
 * Commercials — Ad / Promo / Trailer Visualisation portfolio.
 *
 * Mirrors the legacy Wix layout (nmediaservices.wixsite.com/nmedia/
 * ad-commercials-nmedia): a hero block + two video grids (F&B + Ad
 * Trailers, then BioMedical Visualizations). Each tile is a click-
 * to-play YouTube embed — thumbnail loads first, iframe swaps in
 * when the user clicks. Keeps the page light despite 27+ videos.
 */
export default function Commercials() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">

      <SiteHeader />

      <main className="pt-32">

        {/* ── HERO ──────────────────────────────────────── */}
        <section className="px-8 mb-16 max-w-7xl mx-auto">
          <div className="border-b border-outline-variant pb-12 text-center">
            <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tight leading-tight uppercase mb-6">
              Ads · Commercial Promos · Trailer Visualization
            </h1>
            <p className="text-on-surface-variant font-light leading-relaxed max-w-3xl mx-auto text-base md:text-lg">
              Show-case for Ad Commercials, Promos and Various-Industries Trailer
              Visualisation across <span className="text-primary">Animation</span>,
              <span className="text-primary"> Game</span>,
              <span className="text-primary"> Movie</span> and
              <span className="text-primary"> VFX</span>.
            </p>
          </div>
        </section>

        {/* ── PORTFOLIO GRID — F&B + AD TRAILERS ───────── */}
        {/* id + scroll-mt: the homepage ad reel links straight here, and the
            offset keeps the heading clear of the fixed site header. */}
        <section id="ad-commercials" className="px-8 max-w-7xl mx-auto mb-24 scroll-mt-28">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
            <div>
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-2">
                [ PLAYLIST · 01 ]
              </p>
              <h2 className="font-headline text-2xl md:text-4xl font-bold tracking-tight uppercase leading-none">
                Ad Commercials
              </h2>
            </div>
            <a href={`https://www.youtube.com/playlist?list=${PLAYLIST_FB}`} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary transition-colors">
              Open on YouTube
              <span className="material-symbols-outlined text-base">arrow_outward</span>
            </a>
          </div>
          <VideoGrid videos={FB_VIDEOS} />
        </section>

        {/* ── CROSS-LINK: BIOMEDICAL ──────────────────── */}
        {/* The science reel lives on its own page now. It sells to medtech and
            pharma rather than to brands, and needed a URL that says so. */}
        <section className="px-8 max-w-7xl mx-auto mb-32">
          <Link
            to="/biomedical"
            className="block bg-gradient-to-br from-primary/10 via-surface-container to-surface-container border border-primary/40 group rounded-xl shadow-[0_4px_20px_-6px_rgb(191_78_16_/_0.35)] hover:shadow-[0_10px_34px_-6px_rgb(191_78_16_/_0.55)] hover:border-primary/70 hover:from-primary/20 hover:-translate-y-1 transition-all duration-300 ease-out p-8"
          >
            <p className="font-label text-[9px] tracking-[0.3em] text-primary uppercase mb-2">
              [ ALSO ON THE REEL ]
            </p>
            <h3 className="font-headline font-bold text-xl text-title leading-tight tracking-tight mb-2">
              BioMedical &amp; Scientific Visualization →
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              3D medical animation, microscopic biology and explainer media for
              medtech, pharma and science communication.
            </p>
          </Link>
        </section>

        {/* ── CTA ───────────────────────────────────────── */}
        <section
          className="py-20 px-8 text-center relative overflow-hidden border-y border-outline-variant"
          style={{ background: "linear-gradient(135deg, #FAF8F5 0%, #FFFFFF 55%, #F3E7DC 100%)" }}
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-headline text-2xl md:text-3xl font-bold tracking-tight leading-tight text-headline">
              Got a campaign? Let's visualise it.
            </h2>
          </div>
        </section>

        {/* ── FOOTER ────────────────────────────────────── */}
        <footer className="bg-surface-container-lowest py-16 px-8 border-t border-outline-variant">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
            <div>
              <p className="font-label text-[10px] tracking-[0.3em] text-primary uppercase mb-4">Contact</p>
              <a href="mailto:nanda@nmediaservices.com" className="block text-sm text-on-surface hover:text-primary transition-colors mb-1">nanda@nmediaservices.com</a>
              <a href="mailto:nmedia.services@gmail.com" className="block text-sm text-on-surface-variant hover:text-primary transition-colors">nmedia.services@gmail.com</a>
            </div>
            <div>
              <p className="font-label text-[10px] tracking-[0.3em] text-primary uppercase mb-4">Studio</p>
              <p className="text-sm text-on-surface-variant">Toronto · M6N 4K7 · CA</p>
            </div>
            <div>
              <p className="font-label text-[10px] tracking-[0.3em] text-primary uppercase mb-4">Channels</p>
              <a href="https://www.youtube.com/@nmediaservices2014" target="_blank" rel="noopener noreferrer"
                 className="block text-sm text-on-surface-variant hover:text-primary transition-colors">
                YouTube · @nmediaservices2014
              </a>
              <a href="https://github.com/NmediaCloud" target="_blank" rel="noopener noreferrer"
                 className="block text-sm text-on-surface-variant hover:text-primary transition-colors mt-1">
                GitHub · @NmediaCloud
              </a>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-outline-variant">
            <p className="text-xs text-on-surface-variant font-label">© Nmedia Inc. · Animation Production Pipeline v1.1</p>
          </div>
        </footer>

      </main>
    </div>
  );
}




