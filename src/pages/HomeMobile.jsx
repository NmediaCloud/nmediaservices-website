import GitHubLink from "../components/GitHubLink";
import StatsBanner from "../components/StatsBanner";
import SoftwareGrid from "../components/SoftwareGrid";
import React from "react";
import { Link } from "react-router-dom";
import ShowreelStrip from "../components/ShowreelStrip";
import PipelineArticles from "../components/PipelineArticles";
import { FB_VIDEOS, BIOMED_VIDEOS } from "../data/commercials";
import { ANIM_VIDEOS } from "../data/animationVfx";
import { MFX_VIDEOS } from "../data/motionGraphics";

// Mirrors the desktop hero — see HomeDesktop.jsx.
const CAPABILITIES = [
  "Production Automation",
  "Animation & VFX",
  "E-commerce Catalogues",
  "Websites & Storefronts",
  "Stock Media",
  "Game Assets",
];

export default function HomeMobile() {
  return (
    <div className="bg-surface-container text-on-surface font-['Inter'] selection:bg-primary selection:text-on-primary">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface-container/70 backdrop-blur-md flex justify-between items-center px-6 h-16">
        <div className="flex items-center gap-3">
          <img
            src="/images/nmedia_mark.svg"
            alt="Nmedia Services Logo"
            className="nm-logo h-8 w-auto object-contain"
          />
          <span className="font-['Space_Grotesk'] tracking-tighter uppercase text-xl font-bold text-on-surface">
            NMEDIA
          </span>
        </div>
        <div className="flex items-center gap-4">
          <GitHubLink showLabel={false} />
          <button className="text-on-surface active:scale-95 transition-transform">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>
      <main className="pt-16">
        {/* Section 1: Hero */}
        <section className="relative min-h-[707px] flex flex-col justify-center px-6 py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,#564338_0%,transparent_70%)]"></div>
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-primary"></div>
              <span className="font-label text-xs tracking-[0.3em] text-on-surface-variant uppercase">
                Established 2014
              </span>
            </div>
            <h1 className="font-headline text-5xl font-bold tracking-tighter leading-[0.9] mb-8">
              Creative + Technical{" "}
              <span className="bg-gradient-to-br from-[#A0400C] to-primary bg-clip-text text-transparent">
                Direction Development
              </span>
            </h1>
            <p className="font-body text-on-surface-variant max-w-sm mb-12 text-lg leading-relaxed">
              Animation and VFX, e-commerce catalogue generation, websites and
              storefronts, and a 15,000-asset stock media library, with the
              production pipelines behind all of it.
            </p>
            {/* Capability chips, mirroring the desktop hero. */}
            <div className="flex flex-wrap gap-2 mb-10">
              {CAPABILITIES.map((c) => (
                <span
                  key={c}
                  className="font-label text-[9px] tracking-[0.2em] uppercase text-on-surface-variant border border-outline-variant bg-surface-container px-2.5 py-1.5"
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:Nanda@nmediaservices.com"
                className="nm-btn-primary px-8 py-4 font-label font-bold text-sm tracking-widest uppercase active:scale-[0.98] transition-all text-center block"
              >
                EXPLORE SYSTEMS
              </a>
            </div>
          </div>
          {/* Kinetic Marquee */}
          <div className="absolute bottom-0 left-0 w-full py-4 border-t border-outline-variant overflow-hidden bg-surface-container-lowest flex whitespace-nowrap">
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes mobile-marquee {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
              }
              .animate-mobile-marquee {
                  display: flex;
                  white-space: nowrap;
                  animation: mobile-marquee 20s linear infinite;
              }
            `}} />
            <div className="animate-mobile-marquee">
                {Array(2).fill(0).map((_, i) => (
                    <div key={i} className="font-label text-[10px] tracking-[0.2em] text-primary px-4 shrink-0">
                        LIVE UPDATES // SYSTEM STATUS: NOMINAL // CORE LOADED // ARCHITECTING FUTURE // 01010101 // LIVE UPDATES //
                    </div>
                ))}
            </div>
          </div>
        </section>

        <StatsBanner />

        {/* Credentials & Platforms. Desktop carried these trust signals and
            mobile did not, so on a phone the record was invisible. */}
        <section className="py-20 px-6 bg-warm-neutral border-y border-outline-variant">
          <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
            [ THE_RECORD // EXTERNAL ]
          </p>
          <h2 className="font-headline text-3xl font-bold tracking-tighter mb-4 text-headline">
            Credentials &amp;<br />Platforms
          </h2>
          <p className="font-body text-sm text-on-surface-variant mb-8">
            Public credits, the principal&apos;s profile, and the platform we
            ship media assets through.
          </p>
          <div className="grid grid-cols-1 gap-3">
            <Link
              to="/about"
              className="block bg-surface-container p-6 border border-outline-variant active:border-primary/40 transition-all"
            >
              <span className="material-symbols-outlined text-primary mb-4 block" style={{ fontSize: "30px" }}>verified</span>
              <h4 className="font-headline text-lg font-bold mb-2 text-title">Creative, Technical Director</h4>
              <p className="font-body text-sm text-on-surface-variant">
                Full-stack media tech, AI-native pipelines, motion-graphics and
                data-science credentials.
              </p>
            </Link>
            <a
              href="https://www.imdb.com/name/nm12576040/"
              target="_blank" rel="noopener noreferrer"
              className="block bg-surface-container p-6 border border-outline-variant active:border-primary/40 transition-all"
            >
              <span className="font-label tracking-widest text-primary mb-4 block text-xs uppercase font-bold">
                IMDb credit listing
              </span>
              <h4 className="font-headline text-lg font-bold mb-2 text-title">Animation and Visual FX</h4>
              <p className="font-body text-sm text-on-surface-variant">
                Nandakumar Mohan on IMDb. Visual effects, Paw Patrol. Known for
                high-quality production across global animated series.
              </p>
            </a>
            <a
              href="https://www.utherverse.com/"
              target="_blank" rel="noopener noreferrer"
              className="block bg-surface-container p-6 border border-outline-variant active:border-primary/40 transition-all"
            >
              <span className="font-label tracking-widest text-primary mb-4 block text-xs uppercase font-bold">
                Utherverse_Press
              </span>
              <h4 className="font-headline text-lg font-bold mb-2 text-title">Game Animation / AR / VR</h4>
              <p className="font-body text-sm text-on-surface-variant">
                Animation assets for Unity deployment, immersive real-time
                cinematic content. Motion and facial capture implementation.
              </p>
            </a>
            <a
              href="https://github.com/NmediaCloud"
              target="_blank" rel="noopener noreferrer"
              className="block bg-surface-container p-6 border border-outline-variant active:border-primary/40 transition-all"
            >
              <span className="font-label tracking-widest text-primary mb-4 block text-xs uppercase font-bold">
                Code &amp; Systems
              </span>
              <h4 className="font-headline text-lg font-bold mb-2 text-title">@NmediaCloud</h4>
              <p className="font-body text-sm text-on-surface-variant">
                Open-source tooling and the production pipelines behind the
                work. CreativeFlow runs from a clean checkout with no API key.
              </p>
            </a>
          </div>
        </section>


        {/* Section 2: Recent Project */}
        <section className="bg-surface-container-low py-24 px-6">
          <a 
            href="https://stockflow.media"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-12 hover:opacity-80 transition-opacity"
          >
            <span className="font-label text-xs text-primary tracking-[0.2em] block mb-4">
              [ 01 ]
            </span>
            <h2 className="font-headline text-xl font-bold tracking-tight text-headline uppercase leading-snug">
              PIPELINE PRODUCTION TECH
            </h2>
          </a>
          <div className="relative aspect-video bg-surface-container-highest group">
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <button className="w-16 h-16 rounded-full bg-white/65 backdrop-blur-sm ring-2 ring-primary/60 active:bg-white text-primary flex items-center justify-center active:scale-95 transition-transform pointer-events-auto">
                <span className="material-symbols-outlined text-3xl">play_arrow</span>
              </button>
            </div>
            <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full z-0"
                frameBorder="0"
                referrerPolicy="strict-origin-when-cross-origin"
                src="https://www.youtube.com/embed/cGGxVzvTbds?si=SSRsGhcEXVbSoSQ0"
                title="Animation, Accelerated · Inside an AI-Native Pipeline"
            ></iframe>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-8">
            <div>
              <span className="font-label text-[10px] text-on-surface-variant block mb-1 uppercase tracking-widest">
                Client
              </span>
              <span className="font-body text-sm font-medium">Global Nexus Group</span>
            </div>
            <div>
              <span className="font-label text-[10px] text-on-surface-variant block mb-1 uppercase tracking-widest">
                Year
              </span>
              <span className="font-body text-sm font-medium">2014</span>
            </div>
          </div>
        </section>

        {/* Pipeline Field Notes — moved up to sit directly under the hero video */}
        {/* Original IP slate. Desktop-only until now. */}
        <section className="py-20 px-6 bg-surface-container border-y border-outline-variant">
          <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
            [ ORIGINAL_IP // ANIMATION_SERIES ]
          </p>
          <h2 className="font-headline text-4xl font-bold tracking-tighter mb-4 text-headline">
            IP Slate
          </h2>
          <p className="font-body text-sm text-on-surface-variant mb-8">
            Original animated series, concept to screen. Toddler SEL, pre-school
            comedy, bedtime worlds and short-form cultural comedy.
          </p>
          <Link
            to="/ip-series"
            className="inline-flex items-center gap-2 font-label text-[10px] tracking-[0.3em] uppercase text-primary"
          >
            See the slate
            <span className="material-symbols-outlined text-base">arrow_outward</span>
          </Link>
        </section>

        {/* Portfolio showreels. Client campaign reels lead, artist reels
            follow, technology last. Alternating bands keep them distinct. */}
        <ShowreelStrip
          videos={FB_VIDEOS}
          kicker="[ SHOWREEL // AD_COMMERCIALS_TRAILERS ]"
          headline="Ads that move."
          blurb="Ad commercials, brand promos, and game and movie trailer
                 visualisation. Cinematic 3D, animated VFX and motion graphics."
          ctaTitle="Ads · Promos · Trailer Visualization →"
          ctaBlurb="Every ad commercial, brand promo and trailer previsual in
                    one place."
          ctaMeta={`${FB_VIDEOS.length} films · ad & trailer reel`}
          ctaTo="/commercials"
          bg="bg-background"
        />

        <ShowreelStrip
          videos={BIOMED_VIDEOS}
          kicker="[ SHOWREEL // BIOMEDICAL_VISUALIZATION ]"
          headline="Science, made visible."
          blurb="3D medical animation, microscopic biology and explainer media
                 for medtech, pharma and science communication."
          ctaTitle="BioMedical Visualization →"
          ctaBlurb="The full science reel: 3D medical animation, microscopic
                    biology and explainer media."
          ctaMeta={`${BIOMED_VIDEOS.length} films · science reel`}
          ctaTo="/biomedical"
          bg="bg-surface-container"
        />

        <ShowreelStrip
          videos={ANIM_VIDEOS}
          kicker="[ SHOWREEL // ANIMATION_VFX_CREDITS ]"
          headline="Shows you already know."
          blurb="Character animation and VFX on broadcast series and features.
                 Paw Patrol, Tinker Bell, Lego Marvel and Nickelodeon."
          ctaTitle="Animation & VFX Credits →"
          ctaBlurb="The full credit reel, plus the disciplines behind it."
          ctaMeta={`${ANIM_VIDEOS.length} films · credit reel`}
          ctaTo="/animation-vfx"
          bg="bg-background"
        />

        <ShowreelStrip
          videos={MFX_VIDEOS}
          kicker="[ SHOWREEL // MOTION_GRAPHICS_VFX ]"
          headline="The craft reel."
          blurb="Editing, compositing, lighting and rendering across medical,
                 architectural, product, automotive and broadcast."
          ctaTitle="Motion Graphics & VFX →"
          ctaBlurb="The full craft reel, plus the toolchain behind it."
          ctaMeta={`${MFX_VIDEOS.length} films · craft reel`}
          ctaTo="/motion-graphics"
          bg="bg-surface-container"
        />

        <PipelineArticles />

        {/* Software collection. The Stockflow storefront leads, then the grid. */}
        <section className="py-20 px-6 bg-surface">
          <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
            [ SOFTWARE // SHIPPED ]
          </p>
          <h2 className="font-headline text-4xl font-bold tracking-tighter mb-8 text-headline">
            What we ship.
          </h2>
          <a
            href="https://stockflow.media/"
            target="_blank" rel="noopener noreferrer"
            className="block bg-gradient-to-br from-primary/10 via-surface-container to-surface-container border border-primary/35 overflow-hidden mb-4"
          >
            <span className="block relative w-full bg-surface-container-high" style={{ aspectRatio: "16 / 9" }}>
              <img
                src="/images/stockflow_preview.webp"
                alt="Stockflow.Media storefront homepage"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </span>
            <span className="block p-6">
              <span className="font-headline text-lg font-bold mb-2 text-title block">Stockflow.Media</span>
              <span className="font-body text-sm text-on-surface-variant block">
                A scalable content platform offering ready-to-use media assets
                and automated pipelines for creators, marketers and production
                teams.
              </span>
            </span>
          </a>
          <SoftwareGrid />
        </section>

        {/* Studio services. Mirrors the desktop cards, minus the three now
            covered by the showreel strips above. */}
        <section className="py-20 px-6 bg-surface-container-low border-y border-outline-variant">
          <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
            [ STUDIO // SERVICES ]
          </p>
          <h2 className="font-headline text-4xl font-bold tracking-tighter mb-8 text-headline">
            Also on the desk.
          </h2>
          <div className="grid grid-cols-1 gap-3">
            <a
              href="/articles/UGC_Pipeline.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-surface-container border border-outline-variant active:border-primary/40 transition-all overflow-hidden"
            >
              <span className="block relative w-full bg-surface-container-high overflow-hidden" style={{ aspectRatio: "16 / 9" }}><img src="/images/cards/ugc-pipeline.svg" alt="A spreadsheet row becoming a finished video" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" /></span>
              <span className="block p-6">
              <span className="font-label tracking-widest text-primary mb-4 block text-xs uppercase font-bold">
                video factory
              </span>
              <h4 className="font-headline text-lg font-bold mb-2 text-title">UGC Pipeline</h4>
              <p className="font-body text-sm text-on-surface-variant">
                One spreadsheet row in, one finished UGC, ad or podcast video
                out. Nine self-contained modules, with a vision-graded QA pass.
              </p>
              </span>
            </a>
            <Link to="/digital-conversion" className="block bg-surface-container p-6 border border-outline-variant active:border-primary/40 transition-all">
              <span className="font-label tracking-widest text-primary mb-4 block text-xs uppercase font-bold">
                physical &rarr; digital
              </span>
              <h4 className="font-headline text-lg font-bold mb-2 text-title">Digital Conversion</h4>
              <p className="font-body text-sm text-on-surface-variant">
                Books, documents, microfilm, palm scripts, photos and 3D objects.
                Converted to searchable, archivable digital formats.
              </p>
            </Link>
            <Link to="/digital-marketing" className="block bg-surface-container p-6 border border-outline-variant active:border-primary/40 transition-all">
              <span className="font-label tracking-widest text-primary mb-4 block text-xs uppercase font-bold">
                paid &middot; owned &middot; earned
              </span>
              <h4 className="font-headline text-lg font-bold mb-2 text-title">Digital Marketing</h4>
              <p className="font-body text-sm text-on-surface-variant">
                Three-pillar content marketing strategy, selling the idea, not
                the product. Wired through a single analytics layer.
              </p>
            </Link>
          </div>
        </section>


        {/* Section 3: Capabilities Grid */}
        <section className="py-24 px-6 bg-surface">
          <div className="mb-16">
            <span className="font-label text-xs text-primary tracking-[0.2em] block mb-4">
              [ 02 ]
            </span>
            <h2 className="font-headline text-4xl font-bold tracking-tighter uppercase">
              Capabilities
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-surface-container p-8 border-l-2 border-primary">
              <span className="material-symbols-outlined text-primary mb-6">
                architecture
              </span>
              <h3 className="font-headline text-lg font-bold mb-3 uppercase">
                System Design
              </h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                Scaling architectures from conceptual blueprints to
                production-ready frameworks.
              </p>
            </div>
            <div className="bg-surface-container-low p-8">
              <span className="material-symbols-outlined text-outline mb-6">
                code_blocks
              </span>
              <h3 className="font-headline text-lg font-bold mb-3 uppercase">
                Engine Development
              </h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                High-performance custom codebases built for speed and long-term
                modularity.
              </p>
            </div>
            <div className="bg-surface-container p-8 border-l-2 border-primary">
              <span className="material-symbols-outlined text-primary mb-6">
                auto_awesome_motion
              </span>
              <h3 className="font-headline text-lg font-bold mb-3 uppercase">
                Creative Direction
              </h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                Visual storytelling through technical precision and aesthetic
                rigor.
              </p>
            </div>
            <div className="bg-surface-container-low p-8">
              <span className="material-symbols-outlined text-outline mb-6">
                database
              </span>
              <h3 className="font-headline text-lg font-bold mb-3 uppercase">
                Asset Curation
              </h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                Managing and optimizing high-volume digital libraries for rapid
                deployment.
              </p>
            </div>
            <div className="bg-surface-container p-8 border-l-2 border-primary">
              <span className="material-symbols-outlined text-primary mb-6">
                monitoring
              </span>
              <h3 className="font-headline text-lg font-bold mb-3 uppercase">
                Technical Audit
              </h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                Deep-dive analysis of existing pipelines to identify and
                eliminate bottlenecks.
              </p>
            </div>
            <div className="bg-surface-container-low p-8">
              <span className="material-symbols-outlined text-outline mb-6">
                settings_input_component
              </span>
              <h3 className="font-headline text-lg font-bold mb-3 uppercase">
                Core Pipeline
              </h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                End-to-end integration of technical workflows across disparate
                teams.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Call to Action */}
        <section className="py-24 px-6 bg-surface-container-highest flex flex-col items-center text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter mb-8 max-w-xs uppercase leading-none">
            Have a project or pipeline challenge? Let’s build it.
          </h2>
          <button className="nm-btn-primary w-full py-5 font-label font-bold tracking-[0.2em] active:opacity-80 transition-all font-bold">
            CONNECT WITH US
          </button>
        </section>

        {/* Section 5: About Nmedia Services */}
        <section className="py-24 px-6 bg-surface">
          <div className="flex flex-col gap-12">
            <div className="w-full h-64 bg-surface-container-low overflow-hidden">
              <img className="w-full h-full object-cover opacity-100" alt="About Visual" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKvxRhv3rTfE0jxEV3JWwcwCTRZNb4MvShosNu_ot8-XhRDXis-0__oMGdqIrgFCycYK3BG4LytQf1FJaisFRvc8xy2cyT9kraT5jDXGOd4x_IqZbathAHlObUp_PI49kOya-Ln1vP7GwfnRPYcZoS7iqIHJ3b5rHP1Nrg5CnlXa6buoyFLQhjIM7L3Cw3GSFmnRGglZ74SvqTuSTOPajTjQSfweckjzWDJIqudVkV1MlS-uV9-6AKYmqyPkrNSWX3ZhztrYPhCyk" />
            </div>
            <div>
              <span className="font-label text-xs text-primary tracking-[0.2em] block mb-4">
                [ 03 ]
              </span>
              <h2 className="font-headline text-4xl font-bold tracking-tighter uppercase mb-6">
                About Nmedia Services
              </h2>
              <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-6">
                We operate at the intersection of aesthetic curation and raw
                technical power. NMEDIA is a specialized agency focused on
                long-form digital durability.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-surface-container-low">
                  <span className="font-label text-primary font-bold">A.</span>
                  <p className="font-body text-sm">
                    Decentralized thinking with centralized execution standards.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-surface-container-low">
                  <span className="font-label text-primary font-bold">B.</span>
                  <p className="font-body text-sm">
                    Focus on high-availability systems and premium visual assets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-outline-variant bg-warm-neutral flex flex-col items-center py-12 px-6 gap-8 text-center">
        <div className="flex flex-col items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            terminal
          </span>
          <span className="text-on-surface font-bold font-['Space_Grotesk'] tracking-tighter uppercase">
            NMEDIA
          </span>
        </div>
        <nav className="flex flex-col gap-4">
          <a className="text-on-surface-variant font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.2em] hover:text-primary transition-all" href="#">
            STATIONS
          </a>
          <a className="text-on-surface-variant font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.2em] hover:text-primary transition-all" href="#">
            PROJECTS
          </a>
          <a className="text-on-surface-variant font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.2em] hover:text-primary transition-all" href="#">
            CORE_SYSTEM
          </a>
        </nav>
        <div className="text-on-surface-variant font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.2em] pt-8">
          © 2024 NMEDIA [ TECHNICAL_CURATOR ]
        </div>
      </footer>
    </div>
  );
}
