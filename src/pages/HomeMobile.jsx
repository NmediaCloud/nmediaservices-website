import GitHubLink from "../components/GitHubLink";
import StatsBanner from "../components/StatsBanner";
import React from "react";
import PipelineArticles from "../components/PipelineArticles";

export default function HomeMobile() {
  return (
    <div className="bg-surface-container text-on-surface font-['Inter'] selection:bg-primary selection:text-on-primary">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface-container/70 backdrop-blur-md flex justify-between items-center px-6 h-16">
        <div className="flex items-center gap-3">
          <img
            src="https://stockflow.media/assets/Nmedia_logo.png"
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
              Precision-engineered digital experiences for modern brands and
              technical infrastructures.
            </p>
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
        <PipelineArticles />

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
