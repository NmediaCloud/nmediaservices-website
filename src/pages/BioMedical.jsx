import React from "react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import VideoGrid from "../components/VideoGrid";
import { PLAYLIST_BIOMED, BIOMED_VIDEOS } from "../data/commercials";

/**
 * BioMedical — 3D medical animation and microscopic visualisation.
 *
 * Split out of /commercials on purpose. The two reels sell to different
 * buyers: a medtech or pharma lead arriving on the ad-commercials page saw
 * a tab titled "Ads · Commercial Promos" and a headline about brand
 * campaigns, and had no URL they could pass on without it reading as ad
 * work. The films still come from the shared data module, so nothing is
 * duplicated but the page shell.
 */
export default function BioMedical() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">

      <SiteHeader />

      <main className="pt-32">

        {/* ── HERO ──────────────────────────────────────── */}
        <section className="px-8 mb-16 max-w-7xl mx-auto">
          <div className="border-b border-outline-variant pb-12 text-center">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-4">
              [ BIOMEDICAL // VISUALIZATION ]
            </p>
            <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tight leading-tight uppercase mb-6">
              BioMedical &amp; Scientific Visualization
            </h1>
            <p className="text-on-surface-variant font-light leading-relaxed max-w-3xl mx-auto text-base md:text-lg">
              3D medical animation, microscopic biology and explainer media for
              <span className="text-primary"> medtech</span>,
              <span className="text-primary"> pharma</span> and
              <span className="text-primary"> science communication</span>.
              The invisible, rendered accurately enough to teach from.
            </p>
          </div>
        </section>

        {/* ── THE REEL ──────────────────────────────────── */}
        <section className="px-8 max-w-7xl mx-auto mb-24">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
            <div>
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-2">
                [ REEL · {BIOMED_VIDEOS.length} ]
              </p>
              <h2 className="font-headline text-2xl md:text-4xl font-bold tracking-tight uppercase leading-none">
                The science reel
              </h2>
            </div>
            <a
              href={`https://www.youtube.com/playlist?list=${PLAYLIST_BIOMED}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary transition-colors"
            >
              Open on YouTube
              <span className="material-symbols-outlined text-base">arrow_outward</span>
            </a>
          </div>
          <VideoGrid videos={BIOMED_VIDEOS} />
        </section>

        {/* ── CROSS-LINK ────────────────────────────────── */}
        <section className="px-8 max-w-7xl mx-auto mb-24">
          <Link
            to="/commercials"
            className="block bg-gradient-to-br from-primary/10 via-surface-container to-surface-container border border-primary/40 group rounded-xl shadow-[0_4px_20px_-6px_rgb(191_78_16_/_0.35)] hover:shadow-[0_10px_34px_-6px_rgb(191_78_16_/_0.55)] hover:border-primary/70 hover:from-primary/20 hover:-translate-y-1 transition-all duration-300 ease-out p-8"
          >
            <p className="font-label text-[9px] tracking-[0.3em] text-primary uppercase mb-2">
              [ ALSO ON THE REEL ]
            </p>
            <h3 className="font-headline font-bold text-xl text-title leading-tight tracking-tight mb-2">
              Ads · Promos · Trailer Visualization →
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              The commercial side of the studio: brand promos, cinematic 3D ads
              and game and movie trailer previsuals.
            </p>
          </Link>
        </section>

        {/* ── CTA ───────────────────────────────────────── */}
        <section
          className="py-20 px-8 text-center relative overflow-hidden border-y border-outline-variant"
          style={{ background: "linear-gradient(135deg, #FAF8F5 0%, #FFFFFF 55%, #F3E7DC 100%)" }}
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-headline text-2xl md:text-3xl font-bold tracking-tight leading-tight text-headline mb-4">
              Got a mechanism to explain? Let&apos;s visualise it.
            </h2>
            <a
              href="mailto:nanda@nmediaservices.com"
              className="nm-btn-primary inline-block px-8 py-4 font-label font-bold text-xs tracking-widest uppercase"
            >
              Start a conversation
            </a>
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
