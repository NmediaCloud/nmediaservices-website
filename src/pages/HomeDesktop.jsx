import React from "react";
import { Link } from "react-router-dom";
import ShowreelStrip from "../components/ShowreelStrip";
import PipelineArticles from "../components/PipelineArticles";
import { FB_VIDEOS, BIOMED_VIDEOS } from "../data/commercials";
import { ANIM_VIDEOS } from "../data/animationVfx";
import { MFX_VIDEOS } from "../data/motionGraphics";
import { GITHUB_URL, GitHubMark } from "../components/GitHubLink";
import SocialLinks from "../components/SocialLinks";
import StatsBanner from "../components/StatsBanner";
import SoftwareGrid from "../components/SoftwareGrid";

const PODCAST_ARTICLE = "/articles/podcast/ep01.html";

// Named in the hero so the studio is not mistaken for image/video
// generation alone. Each one is backed by work shown further down.
const CAPABILITIES = [
  "Production Automation",
  "Animation & VFX",
  "E-commerce Catalogue Generation",
  "Websites & Storefronts",
  "Stock Media Libraries",
  "Game Assets",
];

export default function HomeDesktop() {
  return (
    <div className="selection:bg-primary selection:text-on-primary bg-background min-h-screen text-on-surface font-['Inter']">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-5 md:px-8 py-4 md:py-6 max-w-[1440px] left-1/2 -translate-x-1/2 z-50 bg-background/85 backdrop-blur-md border-b border-primary/30">
        <div className="flex items-center gap-3">
          <img
            alt="Nmedia Services Logo"
            className="nm-logo w-auto object-contain h-10"
            src="/images/nmedia_mark.svg"
          />
          <div className="font-['Space_Grotesk'] font-bold text-base md:text-xl tracking-tighter text-on-surface whitespace-nowrap">
            Nmedia Services
          </div>
        </div>
        {/* The socials show at every width; only the long mailto is held
            back on phones, where it would not fit beside the wordmark. */}
        <div className="flex gap-4 md:gap-8 items-center">
          <SocialLinks />
          <a
            className="font-['Space_Grotesk'] tracking-tighter text-sm text-on-surface-variant hover:text-primary transition-colors duration-300 hidden md:inline-block"
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
                <span className="text-primary">Forward Deployed Engineering.</span>
                {/* The list of domains is desktop-only. On a phone it ran five
                    lines and pushed everything else below the fold. */}
                {/* The supporting tier: smaller, lighter in weight and colour
                    than the two lines above. It has to be a block, not an
                    inline span, or the h1's own 57px strut wins and the
                    line-height set here is ignored. */}
                <span className="hidden md:block md:text-4xl lg:text-5xl font-medium text-on-surface-muted leading-[1.05] mt-1">
                Animation, VFX, game assets,<br />
                <span className="whitespace-nowrap">e-commerce</span> catalogues, websites<br />
                and stock media at scale.</span>
              </h1>
              {/* Desktop keeps the standfirst; a phone does not, where it ran
                  six lines and the capability chips already say it. */}
              <p className="hidden md:block font-body text-xl md:text-2xl text-on-surface-variant max-w-3xl leading-relaxed">
                From story to final render, and from idea to scalable
                production system. Building pipelines behind animation and
                VFX, <span className="whitespace-nowrap">e-commerce</span> catalogue
                generation, product and brand websites.
              </p>
              {/* Capability chips. People kept reading the studio as image and
                  video generation only; naming the domains is the fastest fix. */}
              <div className="hidden md:flex flex-wrap items-center gap-2 mt-8">
                {CAPABILITIES.map((c) => (
                  <span
                    key={c}
                    className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant border border-outline-variant bg-surface-container px-3 py-2"
                  >
                    {c}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Desktop only. On a phone the six figures cost most of a screen
            before the visitor has reached any actual work. */}
        <div className="hidden sm:block">
          <StatsBanner />
        </div>

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
              <p className="hidden md:block font-body text-on-surface-variant max-w-sm">
                The longer record. Public credits, the principal's profile,
                and the platform we ship media assets through.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-2 gap-3 sm:gap-4">
              <Link
                to="/about"
                className="block bg-surface-container p-4 sm:p-8 group hover:bg-surface-bright transition-all duration-300 border border-outline-variant hover:border-primary/30"
              >
                <span className="material-symbols-outlined text-primary mb-3 sm:mb-6 block text-[26px] sm:text-4xl">
                  verified
                </span>
                <h4 className="font-headline text-sm sm:text-xl font-bold mb-2 text-title leading-snug">
                  Creative–Technical Director
                </h4>
                <p className="hidden md:block font-body text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                  Full-stack media tech, AI-native pipelines, motion-graphics
                  + data-science credentials. The pipeline architect's record.
                </p>
              </Link>
              <a
                href="https://www.imdb.com/name/nm12576040/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-surface-container p-4 sm:p-8 group hover:bg-surface-bright transition-all duration-300 border border-outline-variant hover:border-primary/30"
              >
                <span className="font-label tracking-widest text-primary mb-2 sm:mb-6 block text-[9px] sm:text-sm uppercase font-bold leading-tight">
                  Imdb credit listing
                </span>
                <h4 className="font-headline text-sm sm:text-xl font-bold mb-2 text-title leading-snug">
                  Animation and Visual FX
                </h4>
                <p className="hidden md:block font-body text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                  Nandakumar Mohan · IMDb. Visual Effects: PAW Patrol. Known for
                  high-quality production across global animated series.
                </p>
              </a>
              <a
                href="https://www.einpresswire.com/article/592919633/utherverse-hires-3d-animation-veteran-nandakumar-mohan-to-develop-full-motion-hd-animation-for-metaverse-platform"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-surface-container p-4 sm:p-8 group hover:bg-surface-bright transition-all duration-300 border border-outline-variant hover:border-primary/30"
              >
                <span className="font-label tracking-widest text-primary mb-2 sm:mb-6 block text-[9px] sm:text-sm uppercase font-bold leading-tight">
                  Utherverse_Press
                </span>
                <h4 className="font-headline text-sm sm:text-xl font-bold mb-2 text-title leading-snug">
                  Game Animation / AR / VR
                </h4>
                <p className="hidden md:block font-body text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                  Animation Assets development for Unity deployment for immersive,
                  real-time cinematic content. Motion Capture editing and Facial
                  capture implementation.
                </p>
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-surface-container p-4 sm:p-8 group hover:bg-surface-bright transition-all duration-300 border border-outline-variant hover:border-primary/30"
              >
                <GitHubMark className="w-9 h-9 text-primary mb-6 block" />
                <h4 className="font-headline text-sm sm:text-xl font-bold mb-2 text-title leading-snug">
                  Code &amp; Systems
                </h4>
                <p className="hidden md:block font-body text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                  Open-source tooling and the production pipelines behind the
                  work.
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
          {/* The interview — three parts. The tiles are stills, not players:
              every one of them opens the article, which carries all three videos. */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-3 gap-3 min-h-[26px] max-w-6xl">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase">
                // Podcast · At the Speed of Generation
              </p>
              <a
                href={PODCAST_ARTICLE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-label text-[10px] tracking-[0.25em] uppercase text-primary hover:text-primary border border-primary/30 hover:border-primary/60 px-2.5 py-1 transition-all"
              >
                <span className="material-symbols-outlined text-xs" style={{ fontSize: "12px" }}>article</span>
                Read Article
              </a>
            </div>

            {/* Parts 02 and 03 are desktop-only: stacked on a phone the three
                tiles read as the same picture three times. */}
            <div className="grid sm:grid-cols-3 gap-4 items-start max-w-6xl">
              <a
                href={PODCAST_ARTICLE}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                aria-label="Read the interview, Part 01"
              >
                <div className="relative aspect-video bg-surface-container-high border border-outline-variant overflow-hidden shadow-xl">
                  <img
                    src="https://i.ytimg.com/vi/u_oYE4nzRT8/maxresdefault.jpg"
                    alt="The Journey In"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                  />
                </div>
                <p className="font-label text-[10px] tracking-[0.25em] uppercase text-on-surface-variant group-hover:text-primary transition-colors mt-2">
                  Part 01 · The Journey In
                </p>
              </a>
              <a
                href={PODCAST_ARTICLE}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block group"
                aria-label="Read the interview, Part 02"
              >
                <div className="relative aspect-video bg-surface-container-high border border-outline-variant overflow-hidden shadow-xl">
                  <img
                    src="https://i.ytimg.com/vi/ynPxHRSeSo0/maxresdefault.jpg"
                    alt="When the Tools Changed"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                  />
                </div>
                <p className="font-label text-[10px] tracking-[0.25em] uppercase text-on-surface-variant group-hover:text-primary transition-colors mt-2">
                  Part 02 · When the Tools Changed
                </p>
              </a>
              <a
                href={PODCAST_ARTICLE}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block group"
                aria-label="Read the interview, Part 03"
              >
                <div className="relative aspect-video bg-surface-container-high border border-outline-variant overflow-hidden shadow-xl">
                  <img
                    src="https://i.ytimg.com/vi/xV0D9hW2Hyw/maxresdefault.jpg"
                    alt="What Comes Next"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                  />
                </div>
                <p className="font-label text-[10px] tracking-[0.25em] uppercase text-on-surface-variant group-hover:text-primary transition-colors mt-2">
                  Part 03 · What Comes Next
                </p>
              </a>
            </div>

            {/* Speakers — centred under the three tiles. The outer max-w-6xl
                matches the tile row, so mx-auto centres against the tiles
                rather than against the full page width. */}
            <div className="max-w-6xl mt-4">
              <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
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
        </section>

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
                Original animated series. Concept to screen. Toddler SEL,
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
                // Every card lands on the slate, not on a single show. The
                // slate carries the same cards through to each series page,
                // so the reader meets the whole slate before one title.
                return (
                  <Link key={ip.title} to="/ip-series" className={className}>
                    {Inner}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Portfolio showreels. The work comes first, the technology that
            made it second. Client campaign reels lead; the two artist reels
            follow. Alternating bands keep them reading as separate sections
            rather than one endless scroll. */}
        <ShowreelStrip
          title="Ad Commercials · Trailers"
          videos={FB_VIDEOS}
          kicker="[ SHOWREEL // AD_COMMERCIALS_TRAILERS ]"
          headline="Ads that move."
          blurb="Ad commercials, brand promos, and game and movie trailer
                 visualisation. Cinematic 3D, animated VFX and motion graphics
                 for finance, food service, games and film."
          ctaTitle="Ads · Promos · Trailer Visualization →"
          ctaBlurb="Every ad commercial, brand promo and trailer previsual in
                    one place."
          ctaMeta={`${FB_VIDEOS.length} films · ad & trailer reel`}
          ctaTo="/commercials"
          bg="bg-background"
        />

        <ShowreelStrip
          title="BioMedical Visualization"
          videos={BIOMED_VIDEOS}
          kicker="[ SHOWREEL // BIOMEDICAL_VISUALIZATION ]"
          headline="Science, made visible."
          blurb="3D medical animation, microscopic biology and explainer media
                 for medtech, pharma and science communication. The invisible,
                 rendered accurately enough to teach from."
          ctaTitle="BioMedical Visualization →"
          ctaBlurb="The full science reel: 3D medical animation, microscopic
                    biology and explainer media."
          ctaMeta={`${BIOMED_VIDEOS.length} films · science reel`}
          ctaTo="/biomedical"
          bg="bg-surface-container"
        />

        <ShowreelStrip
          title="Animation & VFX"
          videos={ANIM_VIDEOS}
          kicker="[ SHOWREEL // ANIMATION_VFX_CREDITS ]"
          headline="Shows you already know."
          blurb="Character animation and VFX on broadcast series and features.
                 Paw Patrol, Tinker Bell, Puppy Dog Pals, Lego Marvel and
                 Nickelodeon, shipped inside the studios that made them."
          ctaTitle="Animation & VFX Credits →"
          ctaBlurb="The full credit reel, plus the disciplines and projects
                    behind it."
          ctaMeta={`${ANIM_VIDEOS.length} films · credit reel`}
          ctaTo="/animation-vfx"
          bg="bg-background"
        />

        <ShowreelStrip
          title="Motion Graphics & Craft"
          videos={MFX_VIDEOS}
          kicker="[ SHOWREEL // MOTION_GRAPHICS_VFX ]"
          headline="The craft reel."
          blurb="Editing, compositing, lighting and rendering across medical,
                 architectural, product, automotive and broadcast. Twenty-five
                 years of hands-on craft, out of one technical hand."
          ctaTitle="Motion Graphics & VFX →"
          ctaBlurb="The full craft reel, plus the toolchain and services behind
                    it."
          ctaMeta={`${MFX_VIDEOS.length} films · craft reel`}
          ctaTo="/motion-graphics"
          bg="bg-surface-container"
        />

        {/* Pipeline field notes. The technology comes after the work.
            The heading is passed as a prop so HomeMobile, which renders this
            same component, can carry its own section rhythm. */}
        <PipelineArticles title="Pipeline Production Tech" />

        {/* Capabilities */}
        <section className="py-32 px-8 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="font-headline text-5xl font-bold tracking-tighter mb-6 text-headline">
                Projects &amp;<br />Capabilities
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
              <div className="bg-gradient-to-br from-primary/10 via-surface-container to-surface-container border border-primary/40 group rounded-xl shadow-[0_4px_20px_-6px_rgb(191_78_16_/_0.35)] hover:shadow-[0_10px_34px_-6px_rgb(191_78_16_/_0.55)] hover:border-primary/70 hover:from-primary/20 hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden">
                {/* The shot is of the live storefront, so it leads there.
                    The walkthrough button below opens the Stockflow pitch page. */}
                <a
                  href="https://stockflow.media/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full relative bg-surface-container-high cursor-pointer"
                  style={{ aspectRatio: "16 / 9" }}
                  aria-label="Visit Stockflow.Media"
                >
                  <img src="/images/stockflow_preview.webp" alt="Stockflow.Media, the storefront homepage" loading="lazy" className="absolute inset-0 w-full h-full object-cover scale-[1.04] opacity-100 group-hover:scale-[1.06] transition-all duration-500" />
                </a>
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
                    href="/articles/Stockflow_Media.html"
                    className="inline-flex items-center gap-2 font-label text-[10px] tracking-[0.3em] uppercase text-primary hover:gap-3 transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">play_circle</span>
                    Watch the Walkthrough
                  </a>
                </div>
              </div>

              <SoftwareGrid />
              {/* Studio capabilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  objects. Converted to searchable, archivable digital
                  formats. Asset-safe handling.
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
                  Three-pillar content marketing strategy, selling the idea,
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

        {/* About Nmedia Services. Desktop only: four paragraphs of studio
            description is a long scroll to put in front of a phone. */}
        <section className="hidden md:block py-24 px-8 border-y border-outline-variant bg-surface-container-low">
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
                    We specialize in pipeline development and automation, creating
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
                  src="/images/nmedia_mark.svg"
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
    body: "Buzz, a small bee, learns his place in the wide world, every tiny flutter helps the Earth bloom. 54 EP · 4 seasons.",
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
    body: "Lumi, Patch and Whisp turn night-time worry into morning calm. Bedtime SEL for toddlers 2-6.",
    detail_url: "/ip/world-under-my-bed",
    poster: "/images/ip/world-under-bed.png",
  },
  {
    title: "Cici · School of Fish",
    subtitle: "Ages 4–8 · 3D Series",
    icon: "set_meal",
    version: "VOL. 02",
    status: "Development",
    body: "Cici reports live from the coral reef. Ages 4-8 underwater adventure. Friendship, growth, planet. 26 EP × 7 min.",
    detail_url: "/ip/cici",
    poster: "/images/ip/cici.jpg",
  },
  {
    title: "Chimpu · Chase Comedy",
    subtitle: "Pre-K Slapstick",
    icon: "sentiment_very_satisfied",
    version: "VOL. 03",
    status: "Development",
    body: "Bouncy pre-K slapstick. Exaggerated cause-and-effect comedy with character-led mischief and zero dialogue dependency.",
    detail_url: "/ip/chimpu",
    poster: "/images/ip/chimpu.jpg",
  },
];
