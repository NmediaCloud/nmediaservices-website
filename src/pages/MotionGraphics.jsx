import React, { useState } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import VideoGrid from "../components/VideoGrid";
import PicsModal, { ARCHI_RENDER_PICS } from "../components/PicsModal";

/**
 * MotionGraphics — Motion Graphics VFX showcase.
 *
 * Recreates mnkmars.wixsite.com/grafix/motion-graphics in the site's
 * design system. Keeps every credit, tool and capability from the
 * source page, restated in dark-mode editorial form.
 */
export default function MotionGraphics() {
  const [archiOpen, setArchiOpen] = useState(false);
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">

      <SiteHeader />

      <main className="pt-32">

        {/* ── HERO ──────────────────────────────────────── */}
        <section className="px-8 mb-16 max-w-7xl mx-auto">
          <div className="border-b border-outline-variant pb-12">
            <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tight leading-tight uppercase">
              Motion <span className="text-primary">Graphics</span> VFX
            </h1>
            <p className="mt-8 text-on-surface-variant font-light leading-relaxed max-w-2xl text-lg">
              Editing. Compositing. Animation. Lighting. Rendering. End-to-end
              motion-graphics craft across medical, architectural, product,
              automotive and broadcast — delivered out of one technical hand.
            </p>
          </div>
        </section>

        {/* ── STATUS TICKER ─────────────────────────────── */}
        <div className="w-full overflow-hidden bg-surface-container-low py-3 mb-24 whitespace-nowrap border-y border-outline-variant">
          <div className="flex gap-12 font-label text-[10px] tracking-[0.4em] text-primary uppercase">
            <span className="block">
              MAYA · 3DS_MAX · BLENDER · NUKE · AFTER_EFFECTS · V-RAY · CYCLES ·
              EEVEE · RED_GIANT · BORIS_FX · MOCHA · ELEMENT_3D · TOPAZ_AI
            </span>
          </div>
        </div>

        {/* ── VIDEO REEL ─────────────────────────────── */}
        <section className="px-8 max-w-7xl mx-auto mb-32">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
            <div>
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-2">
                [ REEL · {MFX_VIDEOS.length} ]
              </p>
              <h2 className="font-headline text-2xl md:text-4xl font-bold tracking-tight uppercase leading-none">
                Motion Graphics & VFX Reels
              </h2>
            </div>
            <a href="https://www.youtube.com/@nmediaservices2014" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant hover:text-primary transition-colors">
              Open on YouTube
              <span className="material-symbols-outlined text-base">arrow_outward</span>
            </a>
          </div>
          <VideoGrid videos={MFX_VIDEOS} cols={3} />
        </section>

        {/* ── ARCHITECTURAL RENDER GALLERY TRIGGER ──────── */}
        <section className="px-8 max-w-7xl mx-auto mb-32">
          <div className="border border-outline-variant bg-surface-container-low p-10 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-2">
                [ STILLS · {ARCHI_RENDER_PICS.length} ]
              </p>
              <h2 className="font-headline text-2xl md:text-4xl font-bold tracking-tight uppercase leading-none">
                Architectural Render Gallery
              </h2>
              <p className="mt-4 text-on-surface-variant font-light max-w-xl">
                Interior, exterior and product visualisation stills — V-Ray and
                Corona renders across residential, commercial and concept work.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setArchiOpen(true)}
              className="nm-btn-primary inline-flex items-center gap-3 px-8 py-4 font-label font-bold text-sm tracking-widest uppercase cursor-pointer self-start md:self-auto"
            >
              View Gallery · {ARCHI_RENDER_PICS.length}
              <span className="material-symbols-outlined text-base">photo_library</span>
            </button>
          </div>
        </section>

        <PicsModal
          open={archiOpen}
          onClose={() => setArchiOpen(false)}
          pics={ARCHI_RENDER_PICS}
          basePath="/images/archi-renders"
          title="Architectural Renders"
        />

        {/* ── SERVICES GRID ─────────────────────────────── */}
        <section className="px-8 max-w-7xl mx-auto mb-32">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ DISCIPLINES // FULL_STACK ]
              </p>
              <h2 className="font-headline text-2xl md:text-4xl font-bold tracking-tight text-headline leading-none uppercase">
                What we craft.
              </h2>
            </div>
            <span className="font-label text-[10px] tracking-[0.3em] text-on-surface-variant uppercase">
              {SERVICES.length} services · one pipeline
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {SERVICES.map((s) => (
              <article key={s.id} className="group bg-surface-container border border-outline-variant p-7 hover:bg-surface-container-high hover:border-primary/30 transition-all">
                <p className="font-label text-[10px] text-primary mb-2 tracking-widest uppercase">{s.id}</p>
                <h3 className="font-headline font-bold text-lg uppercase tracking-tight mb-3 leading-tight">{s.title}</h3>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">{s.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── TOOLS / PIPELINE ──────────────────────────── */}
        <section className="bg-surface-container-lowest py-32 border-y border-outline-variant">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ TOOLCHAIN // PRODUCTION_GRADE ]
              </p>
              <h2 className="font-headline text-2xl md:text-4xl font-bold tracking-tight text-headline leading-none uppercase mb-6">
                The Stack.
              </h2>
              <p className="text-on-surface-variant font-light max-w-xl">
                Every render leaves the studio through a known pipeline. Tools
                are picked per shot, never per habit.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TOOL_GROUPS.map((g) => (
                <div key={g.label}>
                  <p className="font-label text-[10px] tracking-[0.3em] text-primary uppercase mb-3">{g.label}</p>
                  <ul className="space-y-2">
                    {g.tools.map((t) => (
                      <li key={t} className="text-sm text-on-surface-variant font-light flex gap-2">
                        <span className="text-primary">·</span>{t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NOTABLE ─────────────────────────────────── */}
        <section className="bg-surface-container-lowest py-24 border-y border-outline-variant">
          <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ NOTABLE // BLENDER_PROJECT ]
              </p>
              <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-none">
                350 hours.<br />Two GPUs.<br />Twenty minutes.
              </h2>
            </div>
            <div className="lg:col-span-7 text-on-surface-variant font-light leading-relaxed space-y-4">
              <p>
                Gaia client demo reel + explainer graphics — rendered in Blender
                across two 1080Ti GPUs. 350 production hours into a 20-minute
                output. Look-development, lighting, compositing and final cut
                handled inside one pipeline.
              </p>
              <p className="text-sm text-on-surface-variant">
                Tools: Blender Cycles · Eevee · Nuke · After Effects ·
                Topaz AI suite.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA (minimal pull-quote) ──────────────────────── */}
        <section
          className="py-20 px-8 text-center relative overflow-hidden border-y border-outline-variant"
          style={{ background: "linear-gradient(135deg, #FAF8F5 0%, #FFFFFF 55%, #F3E7DC 100%)" }}
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-headline text-2xl md:text-3xl font-bold tracking-tight leading-tight text-headline">
              Need a render that survives every channel?
            </h2>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}


// ── DATA ──────────────────────────────────────────────────────────

const SERVICES = [
  { id: "MFX-01", title: "Medical Animation",          body: "Mechanism-of-action, anatomy, surgical procedure walk-throughs. Peer-review-grade accuracy." },
  { id: "MFX-02", title: "Architectural Viz",          body: "Architectural perspective, lighting and projection — interior and exterior render passes." },
  { id: "MFX-03", title: "Product Rendering",          body: "Hero product shots, 360° turntables, exploded views — PBR shaders, real-world calibrated." },
  { id: "MFX-04", title: "Rota-Mation (3D Rotation)",  body: "Camera-driven product rotation reels for ad and e-commerce. Continuous lighting, broadcast loops." },
  { id: "MFX-05", title: "VFX Animation",              body: "Motion-design VFX, explainer overlays, kinetic typography, branded stings — built for cuts." },
  { id: "MFX-06", title: "AI-Guided Restoration",      body: "Film and video restoration with AI-assisted colour grading. Topaz AI suite + manual retouch." },
  { id: "MFX-07", title: "Visualisation & Camera",     body: "Camera animation, look-development, virtual camera blocking — pre-vis through final." },
  { id: "MFX-08", title: "Texturing & Shaders",        body: "UV unwrap, texture authoring, shader build-out across V-Ray, Cycles, Eevee." },
  { id: "MFX-09", title: "Vehicle / Prop Animation",   body: "Car animation, mechanical prop work — physics-aware rigs and engine-ready exports." },
];

const TOOL_GROUPS = [
  { label: "3D Applications", tools: ["Autodesk Maya", "Autodesk 3DS Max", "Blender"] },
  { label: "Compositing & Edit", tools: ["Nuke", "Combustion", "Adobe Premiere", "After Effects"] },
  { label: "Design", tools: ["Photoshop", "Illustrator", "Envato Elements"] },
  { label: "Plugins & Render", tools: [
    "Red Giant Trapcode",
    "Boris FX Suite",
    "Continuum",
    "Mocha Pro",
    "Sapphire",
    "Element 3D",
    "Topaz Labs AI",
    "V-Ray (CUDA)",
    "Blender Cycles",
    "Blender Eevee",
  ] },
];

// Video reel — extracted from mnkmars.wixsite.com/grafix/motion-graphics
const MFX_VIDEOS = [
  { id: "b8UPY9rjlrs", title: "VFX Demo Reel · 2021 HD" },
  { id: "nxTnRqdpPHk", title: "Motion Graphics Demo" },
  { id: "LuiYYaAt25U", title: "Motion Graphics · Demo Reel 1" },
  { id: "kHQ1pkRylh4", title: "VFX Animation · Shallows (movie)" },
  { id: "AI2mrdHQw38", title: "Blender Eevee Lighting" },
  { id: "OhxO1qIRPS0", title: "V-Ray vs Chaos Vantage · Render Compare" },
  { id: "Zv0MH0oaYCw", title: "Maya · Animation" },
  { id: "EOqZrNMbTPo", title: "Gaia 01 · Demo Reel" },
  { id: "6LQcNk8D8oE", title: "Gaia 02 · Demo Reel" },
  { id: "DwM-MNxhrBk", title: "Product Render Reel" },
  { id: "ImaQ5uUw8w0", title: "Architectural Renders" },
  { id: "D1J9dFpbEFo", title: "Interior Lighting Render" },
  { id: "GQYPvs7hxUo", title: "House · Projection Animation" },
  { id: "62-rFxpMgZE", title: "Audi MFI · Automotive Render" },
  { id: "OmVuDU-EzAY", title: "Film Colorization" },
  { id: "9XiSwH_g4fU", title: "Paper Mill · Overview" },
  { id: "74vyNfIkBT0", title: "RajTV · Motion Graphics 2004" },
  { id: "607iGob7JOU", title: "Montage · Motion Gfx + AfterEffects" },
  { id: "u4xIs7M3jrA", title: "Medical Animation" },
  { id: "W99UN6bWrbo", title: "Medical Animation · Explainer" },
  { id: "jd-3X9jSLSY", title: "Medical Explainer" },
  { id: "4H2TgCJNq40", title: "Cell · Microscopic 01" },
  { id: "SbDR4Zco4Ks", title: "Cell · Microscopic 02" },
  { id: "n8ZvCtbwlzI", title: "Virus on Membrane" },
  { id: "t3m1w21hMvQ", title: "Reel 03" },
  { id: "A8TujFQAFOw", title: "Vertical Reel" },
];


function SiteFooter() {
  const CHANNEL = "https://www.youtube.com/@nmediaservices2014";
  return (
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
          <a href={CHANNEL} target="_blank" rel="noopener noreferrer" className="block text-sm text-on-surface-variant hover:text-primary transition-colors">YouTube · @nmediaservices2014</a>
          <a href="https://github.com/NmediaCloud" target="_blank" rel="noopener noreferrer" className="block text-sm text-on-surface-variant hover:text-primary transition-colors mt-1">GitHub · @NmediaCloud</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-outline-variant">
        <p className="text-xs text-on-surface-variant font-label">© Nmedia Inc. · Animation Production Pipeline v1.1</p>
      </div>
    </footer>
  );
}
