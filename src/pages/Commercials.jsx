import React, { useState } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import VideoGrid from "../components/VideoGrid";

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
        <section className="px-8 max-w-7xl mx-auto mb-24">
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

        {/* ── PORTFOLIO GRID — BIOMEDICAL ──────────────── */}
        <section className="px-8 max-w-7xl mx-auto mb-32">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
            <div>
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-2">
                [ PLAYLIST · 02 ]
              </p>
              <h2 className="font-headline text-2xl md:text-4xl font-bold tracking-tight uppercase leading-none">
                BioMedical Visualizations
              </h2>
            </div>
            <a href={`https://www.youtube.com/playlist?list=${PLAYLIST_BIOMED}`} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary transition-colors">
              Open on YouTube
              <span className="material-symbols-outlined text-base">arrow_outward</span>
            </a>
          </div>
          <VideoGrid videos={BIOMED_VIDEOS} />
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




// ─────────────────────────────────────────────────────────────────
// Video data — auto-extracted from the two YouTube playlists
// referenced on the legacy Wix Commercials page.
// (regenerable: see docs in HANDOVER.md if/when videos change)
// ─────────────────────────────────────────────────────────────────
const PLAYLIST_FB     = "PLee8tHW01hSOeY10Pe4P3rr9o1Xgnoq18";
const PLAYLIST_BIOMED = "PLee8tHW01hSNpJUqfVfYrkWIPe85ksY4v";

const FB_VIDEOS = [
  { id: "lCslscd4DMM", title: "Ad commercials · Visual Trust & Clarity" },
  { id: "iPRsQSYeMuM", title: "Ad commercials · Visual Trust & Clarity (alt cut)" },
  { id: "OVmfQTDJUUI", title: "Powering Financial Institutions with Visual Trust & Clarity" },
  { id: "iF7iSkC9RSo", title: "The Martian Robot · Depreciative Savings Scheme — Animated VFX Ad" },
  { id: "jWHqDxd_T7c", title: "3D Animated Commercial Production — Banking" },
  { id: "eusKt9p1nJU", title: "Cooking Trailer Previsuals" },
  { id: "X0iTBt7sExA", title: "3D Game Trailer Previsuals" },
  { id: "RFV0U1Usv10", title: "Pervis Promo · Culinary Title Concept" },
  { id: "jGnZJu6tAlc", title: "Restaurant Promo · Short — 3D Animated, Cinematic 3D" },
  { id: "6oIGo579VAI", title: "Restaurant Promo · Bringing Ideas to Life — Cinematic 3D" },
  { id: "_TBdjQUnw28", title: "Motion Graphics · Visual Storytelling" },
  { id: "g2U088jnNZk", title: "Epic Trailer V3 · Pervis Visualization — 3D Game / Animation / Movies" },
];

const BIOMED_VIDEOS = [
  { id: "bp_OY_HU7tI", title: "01 · 3D Medical Animation Explainer Media" },
  { id: "D5Qu7auYzTw", title: "02 · Microscopic Biological Science · Underwater Visualization" },
  { id: "dD8pYOd1WoU", title: "03 · Microscopic Biological Science Visualization" },
  { id: "soY--V7Z1mQ", title: "04 · Journey Into the Microscopic World — 3D Biology Animation" },
  { id: "mpVdxyxRtHM", title: "05 · Microscopic Biological Science Visualization" },
  { id: "WPmF9wP1ORg", title: "06 · Microscopic Biological Science Visualization" },
  { id: "b_lw8r6ykkk", title: "07 · Visualization & Explainer Media" },
  { id: "0NCcFMX9z0I", title: "08 · Microscopic Biological Science Visualization" },
  { id: "YLTT6H2sPsw", title: "09 · Microscopic Biological Science Visualization" },
  { id: "EdHxp6LnQyw", title: "10 · Microscopic Biological Science Visualization" },
  { id: "9KCEFECvkTA", title: "11 · Microscopic Biological Science Visualization" },
  { id: "wRAa9Qx586w", title: "12 · Microscopic Biological Science Visualization" },
  { id: "KPvdSZJC9c4", title: "13 · Microscopic Biological Science Visualization" },
  { id: "rOwt0Q7HwRY", title: "14 · Microscopic Biological Science Visualization" },
  { id: "FtRUkCvWiHA", title: "15 · Microscopic Biological Science Visualization" },
];
