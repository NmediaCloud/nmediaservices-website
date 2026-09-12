import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PipelineArticles from "../components/PipelineArticles";
import GitHubLink, { GITHUB_URL, GitHubMark } from "../components/GitHubLink";
import StatsBanner from "../components/StatsBanner";
import SoftwareGrid from "../components/SoftwareGrid";

export default function HomeDesktop() {
  const [sfVideoOpen, setSfVideoOpen] = useState(false);
  const [pipelineOpen, setPipelineOpen] = useState(false);
  const [podcastOpen, setPodcastOpen] = useState(false);
  return (
    <div className="selection:bg-primary selection:text-on-primary bg-background min-h-screen text-on-surface font-['Inter']">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-6 max-w-[1440px] left-1/2 -translate-x-1/2 z-50 bg-background/85 backdrop-blur-md border-b border-primary/30">
        <div className="flex items-center gap-3">
          <img
            alt="Nmedia Services Logo"
            className="nm-logo w-auto object-contain h-10"
            src="https://stockflow.media/assets/Nmedia_logo.png"
          />
          <div className="font-['Space_Grotesk'] font-bold text-xl tracking-tighter text-on-surface">
            Nmedia Services
          </div>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <GitHubLink />
          <a
            className="font-['Space_Grotesk'] tracking-tighter text-sm text-on-surface-variant hover:text-primary transition-colors duration-300"
            href="mailto:Nanda@nmediaservices.com"
          >
            Nanda@nmediaservices.com
          </a>
        </div>
      </nav>

      <main className="pt-32">
        {/* Hero Section */}
        <section className="px-8 max-w-[1440px] mx-auto mb-16">
          <div className="editorial-grid gap-y-12">
            <div className="col-span-12 md:col-span-10">
              <span className="font-label text-primary text-xs tracking-[0.3em] uppercase mb-6 block font-bold">
                [Animation <span style={{ letterSpacing: "3.6px" }}>Creative +</span> Production + Tech]
              </span>
              <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter leading-[0.95] text-headline mb-8 max-w-5xl">
                Creative &amp; Technical Director.<br />
                <span className="text-primary">Forward Deployed Engineer.</span><br />
                Pipelines, animation, VFX, game assets<br />
                and full-stack production systems.
              </h1>
              <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-3xl leading-relaxed">
                From Story to Final Render. From Idea to Scalable Production
                Systems. We architect high-fidelity, Storytelling for next-gen
                execution. Experienced building scalable content pipelines,
                automation scripts, and production tools
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-8">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nm-btn-secondary inline-flex items-center gap-2.5 px-5 py-3 font-label text-[11px] tracking-[0.2em] uppercase font-bold"
                >
                  <GitHubMark className="w-[18px] h-[18px]" />
                  Code &amp; Contributions
                  <span className="material-symbols-outlined text-base">arrow_outward</span>
                </a>
                <span className="font-label text-[10px] tracking-[0.25em] uppercase text-on-surface-variant">
                  Open source · pipelines · production systems
                </span>
              </div>
            </div>
          </div>
        </section>

        <StatsBanner />

        {/* Credentials & Platforms — split from capability services */}
        <section className="py-24 px-8 bg-warm-neutral border-y border-outline-variant">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-[1440px] mx-auto">
            <div className="lg:col-span-4">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ THE_RECORD // EXTERNAL ]
              </p>
              <h2 className="font-headline text-4xl font-bold tracking-tighter mb-6 text-headline">
                Credentials &<br />Platforms
              </h2>
              <p className="font-body text-on-surface-variant max-w-sm">
                The longer record — public credits, the principal's profile,
                and the platform we ship media assets through.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                to="/about"
                className="block bg-surface-container p-8 group hover:bg-surface-bright transition-all duration-300 border border-outline-variant hover:border-primary/30"
              >
                <span className="material-symbols-outlined text-primary mb-6 block" style={{ fontSize: "36px" }}>
                  verified
                </span>
                <h4 className="font-headline text-xl font-bold mb-2 text-title">
                  Creative–Technical Director
                </h4>
                <p className="font-body text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                  Full-stack media tech, AI-native pipelines, motion-graphics
                  + data-science credentials. The pipeline architect's record.
                </p>
              </Link>
              <a
                href="https://www.imdb.com/name/nm12576040/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-surface-container p-8 group hover:bg-surface-bright transition-all duration-300 border border-outline-variant hover:border-primary/30"
              >
                <span className="font-label tracking-widest text-primary mb-6 block text-sm uppercase font-bold">
                  Imdb credit listing
                </span>
                <h4 className="font-headline text-xl font-bold mb-2 text-title">
                  Animation and Visual FX
                </h4>
                <p className="font-body text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                  Nandakumar Mohan · IMDb. Visual Effects: PAW Patrol. Known for
                  high-quality production across global animated series.
                </p>
              </a>
              <a
                href="https://www.einpresswire.com/article/592919633/utherverse-hires-3d-animation-veteran-nandakumar-mohan-to-develop-full-motion-hd-animation-for-metaverse-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-surface-container p-8 group hover:bg-surface-bright transition-all duration-300 border border-outline-variant hover:border-primary/30"
              >
                <span className="font-label tracking-widest text-primary mb-6 block text-sm uppercase font-bold">
                  Utherverse_Press
                </span>
                <h4 className="font-headline text-xl font-bold mb-2 text-title">
                  Game Animation / AR / VR
                </h4>
                <p className="font-body text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                  Animation Assets development for Unity deployment for immersive,
                  real-time cinematic content. Motion Capture editing and Facial
                  capture implementation.
                </p>
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-surface-container p-8 group hover:bg-surface-bright transition-all duration-300 border border-outline-variant hover:border-primary/30"
              >
                <GitHubMark className="w-9 h-9 text-primary mb-6 block" />
                <h4 className="font-headline text-xl font-bold mb-2 text-title">
                  Code &amp; Systems
                </h4>
                <p className="font-body text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                  Open-source tooling and the production pipelines behind the
                  work — CreativeFlow's campaign automation runs from a clean
                  checkout with no API key.
                </p>
                <span className="inline-flex items-center gap-2 font-label text-[10px] tracking-[0.3em] uppercase text-primary mt-4 group-hover:gap-3 transition-all">
                  @NmediaCloud
                  <span className="material-symbols-outlined text-base">arrow_outward</span>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Recent Project Video Embed */}
        <section className="max-w-[1440px] mx-auto px-8 mb-24">
          <div className="mb-12">
            <a 
              href="/articles/podcast/ep01.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block border border-primary px-8 py-4 mb-8 hover:bg-primary/10 transition-colors"
            >
              <h2 className="font-['Space_Grotesk'] text-primary text-sm tracking-[0.3em] uppercase font-bold">
                Pipeline Production Tech
              </h2>
            </a>
            <div className="grid lg:grid-cols-3 gap-4">
              {/* Pipeline reel — large (2 cols) */}
              <div className="lg:col-span-2">
                <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                  // Pipeline Reel
                </p>
                <button
                  type="button"
                  onClick={() => setPipelineOpen(true)}
                  className="block w-full relative aspect-video bg-surface-container-high border border-outline-variant overflow-hidden shadow-xl group cursor-pointer"
                  aria-label="Play Pipeline Reel"
                >
                  <img src="https://i.ytimg.com/vi/cGGxVzvTbds/maxresdefault.jpg" alt="Animation, Accelerated · Inside an AI-Native Pipeline" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-[1.02] transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/65 backdrop-blur-sm ring-2 ring-primary/60 group-hover:bg-white group-hover:ring-primary flex items-center justify-center shadow-xl shadow-primary/40 transition-all group-hover:scale-110">
                      <span className="material-symbols-outlined text-primary transition-transform" style={{ fontSize: "44px" }}>play_arrow</span>
                    </div>
                  </div>
                </button>
              </div>

              {/* Podcast — At the Speed of Generation, Part 01 (smaller, 1 col, anchored to bottom) */}
              <div className="flex flex-col justify-end">
                <div className="flex items-center justify-between mb-3 gap-3">
                  <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase">
                    // Podcast · Part 01 of 03
                  </p>
                  <a
                    href="/articles/podcast/ep01.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-label text-[10px] tracking-[0.25em] uppercase text-primary hover:text-primary border border-primary/30 hover:border-primary/60 px-2.5 py-1 transition-all"
                  >
                    <span className="material-symbols-outlined text-xs" style={{ fontSize: "12px" }}>article</span>
                    Read Article
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => setPodcastOpen(true)}
                  className="block w-full relative aspect-video bg-surface-container-high border border-outline-variant overflow-hidden shadow-xl group cursor-pointer"
                  aria-label="Play podcast Part 01"
                >
                  <img src="https://i.ytimg.com/vi/u_oYE4nzRT8/maxresdefault.jpg" alt="At the Speed of Generation · Part 01: The Journey In" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-[1.02] transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/65 backdrop-blur-sm ring-2 ring-primary/60 group-hover:bg-white group-hover:ring-primary flex items-center justify-center shadow-xl shadow-primary/40 transition-all group-hover:scale-110">
                      <span className="material-symbols-outlined text-primary transition-transform" style={{ fontSize: "32px" }}>play_arrow</span>
                    </div>
                  </div>
                </button>

                {/* Speaker LinkedIn chips — Ravi (left) + Nanda (right) */}
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <a
                    href="https://www.linkedin.com/in/raviharsh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-surface-container border border-outline-variant hover:border-primary/40 hover:bg-surface-container-high transition-all group"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-colors flex-shrink-0">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface group-hover:text-primary transition-colors">Ravi</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mnkmars/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-surface-container border border-outline-variant hover:border-primary/40 hover:bg-surface-container-high transition-all group"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-colors flex-shrink-0">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface group-hover:text-primary transition-colors">Nanda Mohan</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pipeline Field Notes — moved up to sit directly under the hero video */}
        <PipelineArticles />

        {/* Original IP — Slate (lifted above Capabilities) */}
        <section className="py-24 px-8 bg-surface-container border-y border-outline-variant">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-[1440px] mx-auto">
            <div className="lg:col-span-4">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ ORIGINAL_IP // ANIMATION_SERIES ]
              </p>
              <h2 className="font-headline text-5xl font-bold tracking-tighter mb-6 text-headline">
                IP Slate
              </h2>
              <p className="font-body text-on-surface-variant mb-6 max-w-sm">
                Original animated series — concept to screen. Toddler SEL,
                pre-school comedy, bedtime worlds and short-form cultural
                comedy.
              </p>
              <Link
                to="/ip-series"
                className="inline-flex items-center gap-2 text-primary font-label uppercase text-xs tracking-widest hover:gap-3 transition-all"
              >
                See full slate
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-3">
              {IP_SLATE_HOME.map((ip) => {
                const Inner = (
                  <>
                    <div
                      className="relative w-full overflow-hidden bg-surface-container-lowest"
                      style={{ aspectRatio: "3 / 4" }}
                    >
                      {ip.poster ? (
                        <img src={ip.poster} alt={ip.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-500" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center opacity-30">
                          <span className="material-symbols-outlined text-[120px] text-primary">{ip.icon}</span>
                        </div>
                      )}
                      <span className="absolute top-3 left-3 font-label text-[9px] tracking-[0.3em] text-white uppercase bg-[#4E4A46]/55 backdrop-blur-sm px-2 py-1">
                        {ip.version}
                      </span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-headline text-sm font-bold uppercase tracking-tight leading-tight text-title mb-1">
                        {ip.title}
                      </h4>
                      <p className="font-label text-[9px] tracking-[0.2em] uppercase text-on-surface-variant mb-3">
                        {ip.subtitle}
                      </p>
                      <span
                        className={`inline-block px-2 py-0.5 border text-[9px] font-label tracking-widest uppercase ${
                          ip.status_active
                            ? "border-primary/40 text-primary"
                            : "border-outline-variant text-on-surface-variant"
                        }`}
                      >
                        {ip.status}
                      </span>
                    </div>
                  </>
                );
                const className =
                  "block bg-surface-container group hover:bg-surface-bright transition-all duration-300 border border-outline-variant hover:border-primary/30 overflow-hidden";
                return ip.detail_url ? (
                  <Link key={ip.title} to={ip.detail_url} className={className}>
                    {Inner}
                  </Link>
                ) : (
                  <Link key={ip.title} to="/ip-series" className={className}>
                    {Inner}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-32 px-8 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="font-headline text-5xl font-bold tracking-tighter mb-6 text-headline">
                Capabilities
              </h2>
              <p className="font-body text-on-surface-variant mb-6 max-w-sm">
                Optimizing creative throughput through technical curatorship and
                precision engineering.
              </p>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-label uppercase text-xs tracking-widest hover:gap-3 transition-all mb-12"
              >
                All repositories
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </a>
            </div>
            <div className="lg:col-span-8 space-y-4">
              {/* Software — Stockflow leads (it carries a video), then the collection grid */}
              <div className="bg-gradient-to-br from-primary/10 via-surface-container to-surface-container border border-primary/35 hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                <button
                  type="button"
                  onClick={() => setSfVideoOpen(true)}
                  className="block w-full relative bg-surface-container-high cursor-pointer"
                  style={{ aspectRatio: "16 / 9" }}
                  aria-label="Play Stockflow.Media preview"
                >
                  <img src="https://i.ytimg.com/vi/KfV_Y7hudvM/maxresdefault.jpg" alt="Stockflow.Media preview" loading="lazy" className="absolute inset-0 w-full h-full object-cover scale-[1.04] opacity-100 group-hover:scale-[1.06] transition-all duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/65 backdrop-blur-sm ring-2 ring-primary/60 group-hover:bg-white group-hover:ring-primary flex items-center justify-center transition-all group-hover:scale-110 shadow-xl shadow-primary/40">
                      <span className="material-symbols-outlined text-primary transition-transform" style={{ fontSize: "44px" }}>play_arrow</span>
                    </div>
                  </div>
                </button>
                <div className="p-8 relative">
                  <span className="absolute top-3 right-3 font-label text-[9px] tracking-[0.3em] uppercase text-primary bg-primary/10 border border-primary/35 px-2 py-1">
                    Module
                  </span>
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <span className="text-white font-['Inter'] font-black text-xl tracking-tighter">SF</span>
                  </div>
                  <h4 className="font-headline text-xl font-bold mb-2 text-title">
                    Stockflow.Media
                  </h4>
                  <p className="font-body text-sm text-on-surface-variant group-hover:text-on-surface transition-colors mb-4 max-w-2xl">
                    A scalable content platform offering ready-to-use media
                    assets and automated pipelines for creators, marketers,
                    and production teams.
                  </p>
                  <a
                    href="https://stockflow.media/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-label text-[10px] tracking-[0.3em] uppercase text-primary hover:gap-3 transition-all"
                  >
                    Visit Site
                    <span className="material-symbols-outlined text-base">arrow_outward</span>
                  </a>
                </div>
              </div>

              <SoftwareGrid />
              {/* Studio capabilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://github.com/NmediaCloud/pdf-scripts-toolkit"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-surface-container p-8 group hover:bg-surface-bright transition-all duration-300 border border-outline-variant hover:border-primary/30"
              >
                <span className="font-label tracking-widest text-primary mb-6 block text-sm uppercase font-bold">
                  digitisation · ocr
                </span>
                <h4 className="font-headline text-xl font-bold mb-2 text-title">
                  PDF Scripts Toolkit
                </h4>
                <p className="font-body text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                  The toolkit behind it — scanned pages to searchable PDF, with a
                  vision-language transcription pass for Sanskrit where
                  conventional OCR fails. Source available.
                </p>
              </a>
              <Link
                to="/digital-conversion"
                className="block bg-surface-container p-8 group hover:bg-surface-bright transition-all duration-300 border border-outline-variant hover:border-primary/30"
              >
                <span className="font-label tracking-widest text-primary mb-6 block text-sm uppercase font-bold">
                  physical → digital
                </span>
                <h4 className="font-headline text-xl font-bold mb-2 text-title">
                  Digital Conversion
                </h4>
                <p className="font-body text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                  Books, documents, microfilm, palm scripts, photos and 3D
                  objects — converted to searchable, archivable digital
                  formats. Asset-safe handling.
                </p>
              </Link>
              <Link
                to="/commercials"
                className="block bg-surface-container p-8 group hover:bg-surface-bright transition-all duration-300 border border-outline-variant hover:border-primary/30"
              >
                <span className="font-label tracking-widest text-primary mb-6 block text-sm uppercase font-bold">
                  previs-storytelling
                </span>
                <h4 className="font-headline text-xl font-bold mb-2 text-title">
                  Ad Commercials Trailers
                </h4>
                <p className="font-body text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                  High-impact visual storytelling crafted for brands cinematic
                  ads and trailers designed to engage, convert, and leave a
                  lasting impression.
                </p>
              </Link>
              <Link
                to="/animation-vfx"
                className="block bg-surface-container p-8 group hover:bg-surface-bright transition-all duration-300 border border-outline-variant hover:border-primary/30"
              >
                <span className="font-label tracking-widest text-primary mb-6 block text-sm uppercase font-bold">
                  3d Animation showreel
                </span>
                <h4 className="font-headline text-xl font-bold mb-2 text-title">
                  3D Animation &amp; VFX
                </h4>
                <p className="font-body text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                  High-quality character and environment execution across
                  cinematic pipelines.
                </p>
              </Link>
              <Link
                to="/motion-graphics"
                className="block bg-surface-container p-8 group hover:bg-surface-bright transition-all duration-300 border border-outline-variant hover:border-primary/30"
              >
                <span className="font-label tracking-widest text-primary mb-6 block text-sm uppercase font-bold">
                  MOTION-GRAFIX-REEL
                </span>
                <h4 className="font-headline text-xl font-bold mb-2 text-title">
                  Motion-graphics Vfx Reels
                </h4>
                <p className="font-body text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                  Editing, Compositing, Animation, Lighting and Rendering
                </p>
              </Link>
              <Link
                to="/digital-marketing"
                className="block bg-surface-container p-8 group hover:bg-surface-bright transition-all duration-300 border border-outline-variant hover:border-primary/30"
              >
                <span className="font-label tracking-widest text-primary mb-6 block text-sm uppercase font-bold">
                  paid · owned · earned
                </span>
                <h4 className="font-headline text-xl font-bold mb-2 text-title">
                  Digital Marketing
                </h4>
                <p className="font-body text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                  Three-pillar content marketing strategy — selling the idea,
                  not the product. Wired through a single analytics layer.
                </p>
              </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section
          className="py-40 px-8 text-center relative overflow-hidden border-y border-outline-variant"
          style={{ background: "linear-gradient(135deg, #FAF8F5 0%, #FFFFFF 55%, #F3E7DC 100%)" }}
        >
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="font-headline text-4xl md:text-7xl font-bold tracking-tighter mb-10 leading-none text-headline">
              Have a project or pipeline challenge? Let’s build it.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
              <a
                href="mailto:Nanda@nmediaservices.com"
                className="nm-btn-primary font-label uppercase px-12 py-5 font-bold text-sm tracking-widest inline-block"
              >
                Connect With Us
              </a>
            </div>
          </div>
        </section>

        {/* About Nmedia Services */}
        <section className="py-24 px-8 border-y border-outline-variant bg-surface-container-low">
          <div className="max-w-[1440px] mx-auto">
            <div className="bg-surface-container p-12 flex flex-col md:flex-row justify-between items-start gap-8 border border-outline-variant hover:border-primary/35 transition-colors">
              <div className="flex-1">
                <h4 className="font-headline text-2xl font-bold mb-6 text-title">
                  About Nmedia Services
                </h4>
                <div className="space-y-6">
                  <p className="font-body text-on-surface leading-relaxed">
                    Nmedia Services is a Creative - Technical studio delivering
                    end-to-end solutions for 3D animation, VFX production. We
                    bridge the gap between storytelling and technology, helping
                    studios, brands, and creators turn ideas into production-ready,
                    high-quality visual content.
                  </p>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    From concept development to final delivery, we handle the
                    complete pipeline: story, animatics, design, asset creation,
                    animation, motion capture, lighting, rendering, and
                    compositing. Our strength lies in building efficient, scalable
                    workflows that ensure speed, consistency, and production
                    quality.
                  </p>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    We specialize in pipeline development and automation—creating
                    custom tools, scripting systems, and full-stack solutions
                    tailored for animation, VFX, and game studios. Our expertise
                    also includes motion capture and facial data processing,
                    real-time engine integration (Unreal/Unity), and AI-assisted
                    content creation.
                  </p>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    Led by Nanda, with over 25 years of experience across global
                    productions and major brands, NMedia brings deep industry
                    knowledge, technical precision, and creative leadership to
                    every project. We don’t just create visuals, we build systems
                    that make production faster, smarter, and more reliable.
                  </p>
                  <p className="font-body text-on-surface font-medium">
                    If you're looking for a partner who understands both
                    creativity and production technology, Nmedia is built for
                    studio-wide automation.
                  </p>
                </div>
              </div>
              <div className="h-14 w-14 border-2 border-primary flex items-center justify-center bg-primary/5 shrink-0 mt-2 p-2">
                <img
                  alt="Nmedia Services Logo"
                  src="https://stockflow.media/assets/Nmedia_logo.png"
                  className="nm-logo w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Scrolling Marquee */}
        <div className="bg-surface-container-low py-6 overflow-hidden border-y border-outline-variant w-full relative">
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes desktop-marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-desktop-marquee {
                display: flex;
                white-space: nowrap;
                animation: desktop-marquee 20s linear infinite;
            }
          `}} />
          <div className="animate-desktop-marquee gap-12 font-label text-[10px] tracking-[0.4em] uppercase text-on-surface-variant">
            {/* Double the content so it loops seamlessly */}
            {Array(2).fill(0).map((_, i) => (
                <div key={i} className="flex gap-12 shrink-0">
                    <span>New York // Dubai // London // Singapore</span>
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Latest Tech Trends : <span className="text-primary">Implemented</span>
                    </span>
                    <span className="text-primary font-bold">•</span>
                    <span>Data Pipeline </span>
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Core Engine Updated <span className="text-on-surface font-semibold">v4.8</span>
                    </span>
                    <span className="text-primary font-bold">•</span>
                    <span>
                      Render Farm Load: <span className="text-primary">42%</span>
                    </span>
                    <span className="text-primary font-bold">•</span>
                    <span>Established 2014</span>
                    <span className="text-primary font-bold">•</span>
                </div>
            ))}
          </div>
        </div>
      </main>

      {/* Stockflow.Media video modal */}
      <VideoModal
        open={sfVideoOpen}
        onClose={() => setSfVideoOpen(false)}
        src="https://www.youtube.com/embed/KfV_Y7hudvM?autoplay=1&rel=0&modestbranding=1"
        title="Stockflow.Media · Preview"
      />

      {/* Pipeline Reel modal */}
      <VideoModal
        open={pipelineOpen}
        onClose={() => setPipelineOpen(false)}
        src="https://www.youtube.com/embed/cGGxVzvTbds?autoplay=1&rel=0&modestbranding=1"
        title="Pipeline Reel · Frictionless Production"
      />

      {/* Podcast Part 01 modal */}
      <VideoModal
        open={podcastOpen}
        onClose={() => setPodcastOpen(false)}
        src="https://www.youtube.com/embed/u_oYE4nzRT8?autoplay=1&rel=0&modestbranding=1"
        title="At the Speed of Generation · Part 01: The Journey In"
      />

      {/* Footer */}
      <footer className="bg-warm-neutral w-full flex flex-col md:flex-row justify-between items-center border-t border-outline-variant py-12 px-8">
        <div className="mb-8 md:mb-0">
          <div className="text-on-surface font-bold font-headline mb-2 text-lg">
            Nmedia Inc.
          </div>
          <p className="font-['Space_Grotesk'] text-[10px] tracking-widest uppercase text-on-surface-variant">
            © Since 2015, Production Studio + Tech Lab + Consultant // All Rights Reserved
          </p>
        </div>
        <div className="flex gap-8">
          <a
            className="font-['Space_Grotesk'] text-[10px] tracking-widest uppercase text-on-surface-variant hover:text-primary underline underline-offset-4 decoration-1 hover:decoration-2 transition-all duration-300"
            href="https://www.linkedin.com/company/nmedia-inc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="font-['Space_Grotesk'] text-[10px] tracking-widest uppercase text-on-surface-variant hover:text-primary underline underline-offset-4 decoration-1 hover:decoration-2 transition-all duration-300"
            href="https://www.youtube.com/@nmediaservices2014"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
          </a>
          <a
            className="font-['Space_Grotesk'] text-[10px] tracking-widest uppercase text-on-surface-variant hover:text-primary underline underline-offset-4 decoration-1 hover:decoration-2 transition-all duration-300"
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// VideoModal — fullscreen-ish lightbox for an embed iframe
// ─────────────────────────────────────────────────────────────────
function VideoModal({ open, onClose, src, title }) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[100] bg-[#4E4A46]/92 backdrop-blur-sm flex flex-col"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-8 py-5 border-b border-primary/30">
        <span className="font-label text-[10px] tracking-[0.4em] text-primary uppercase">
          [ NOW PLAYING · {title} ]
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="font-label text-xs tracking-widest text-white/70 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
        >
          CLOSE
          <span className="material-symbols-outlined text-base">close</span>
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center p-8" onClick={(e) => e.stopPropagation()}>
        <div className="w-full max-w-6xl aspect-video bg-surface-container-high border border-outline-variant overflow-hidden">
          <iframe
            className="w-full h-full"
            src={src}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Original IP slate — five-card grid lifted onto the homepage
// ─────────────────────────────────────────────────────────────────
const IP_SLATE_HOME = [
  {
    title: "Tiny Wings, Big Job",
    subtitle: "Preschool 3–6 · Nature Series",
    icon: "flutter_dash",
    version: "VOL. 01",
    status: "Pilot Complete",
    status_active: true,
    body: "Buzz, a small bee, learns his place in the wide world — every tiny flutter helps the Earth bloom. 54 EP · 4 seasons.",
    detail_url: "/ip/tiny-wings-buzz",
    poster: "/images/ip/tiny-wings.jpg",
  },
  {
    title: "The World Under My Bed",
    subtitle: "Pre-school SEL",
    icon: "bedtime",
    version: "VOL. 04",
    status: "Development",
    status_active: true,
    body: "Lumi, Patch and Whisp turn night-time worry into morning calm — bedtime SEL for toddlers 2-6.",
    detail_url: "/ip/world-under-my-bed",
    poster: "/images/ip/world-under-bed.png",
  },
  {
    title: "Cici · School of Fish",
    subtitle: "Ages 4–8 · 3D Series",
    icon: "set_meal",
    version: "VOL. 02",
    status: "Development",
    body: "Cici reports live from the coral reef — ages 4-8 underwater adventure. Friendship, growth, planet. 26 EP × 7 min.",
    detail_url: "/ip/cici",
    poster: "/images/ip/cici.jpg",
  },
  {
    title: "Chimpu · Chase Comedy",
    subtitle: "Pre-K Slapstick",
    icon: "sentiment_very_satisfied",
    version: "VOL. 03",
    status: "Development",
    body: "Bouncy pre-K slapstick — exaggerated cause-and-effect comedy with character-led mischief and zero dialogue dependency.",
    detail_url: "/ip/chimpu",
    poster: "/images/ip/chimpu.jpg",
  },
];
