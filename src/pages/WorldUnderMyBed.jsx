import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiteFooter } from "./IPSeries";
import SiteHeader from "../components/SiteHeader";
import PicsModal from "../components/PicsModal";

/**
 * The World Under My Bed — IP detail page.
 *
 * Pre-school SEL nature/fantasy series for ages 3-6 (toddler-friendly 2-6).
 * Concept: the place children fear becomes the place that protects them.
 * Cast: Lumi, Patch, Whisp, Pebble, Blink — the Under-Bed Helpers.
 *
 * Source: nmediaservices.wixsite.com/nmedia/the-world-under-my-bed
 */
const IMG = "/images/ip/world-under-my-bed";

export default function WorldUnderMyBed() {
  const [castOpen, setCastOpen] = useState(false);
  const [castInitial, setCastInitial] = useState(null);
  const openCast = (file) => { setCastInitial(file); setCastOpen(true); };

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">

      <SiteHeader />

      <main className="pt-32 pb-24">

        {/* ── BACK CRUMB ─────────────────────────────────── */}
        <div className="px-8 mb-6 max-w-7xl mx-auto">
          <Link to="/ip-series" className="inline-flex items-center gap-2 font-label text-[10px] tracking-[0.3em] uppercase text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Back to IP Slate
          </Link>
        </div>

        {/* ── HERO ──────────────────────────────────────── */}
        <header className="px-8 mb-16 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-end border-b border-outline-variant pb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3 text-primary font-label text-xs tracking-[0.3em] uppercase flex-wrap">
                <span className="px-2 py-1 bg-primary/10 border border-primary/30">VOL. 04</span>
                <span>Development</span>
                <span className="text-on-surface-variant">·</span>
                <span>Bedtime SEL</span>
              </div>
              <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-[0.95] uppercase">
                The World <span className="text-primary">Under</span><br />
                My Bed.
              </h1>
              <p className="font-label text-sm tracking-[0.2em] text-on-surface-variant uppercase pt-2">
                Animation Series · Preschool 2–6 · Bedtime / Gentle Fantasy
              </p>
              <p className="text-on-surface-variant font-light leading-relaxed max-w-xl pt-4 text-lg">
                The place children fear becomes the place that protects them.
                Beneath the bed lives a secret world of gentle helpers, not
                monsters, but creatures who fix fears and soften bad dreams,
                so the morning can start fresh.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-surface-container-low border border-outline-variant overflow-hidden" style={{ aspectRatio: "3 / 4" }}>
                <img src={`${IMG}/wub_01.jpg`} alt="The World Under My Bed · Lumi" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* ── CAST STRIP ─────────────────────────────────── */}
        <section className="px-8 mb-32 max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
              [ CAST // UNDER_BED_HELPERS ]
            </p>
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter leading-none uppercase">
              The helpers.
            </h2>
            <p className="mt-6 text-on-surface-variant font-light max-w-2xl">
              Five gentle protectors plus their quiet world. Each holds a
              different fear and a different way of softening it.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {CAST.map((c) => (
              <figure key={c.file} className="group">
                <button
                  type="button"
                  onClick={() => openCast(c.file)}
                  className="block w-full bg-surface-container border border-outline-variant group-hover:border-primary/40 overflow-hidden transition-all duration-500 cursor-zoom-in transform-gpu group-hover:scale-[1.06] group-hover:shadow-xl group-hover:shadow-primary/20 group-hover:z-10 relative"
                  style={{ aspectRatio: "3 / 4" }}
                  aria-label={`View ${c.name}`}
                >
                  <img src={`${IMG}/${c.file}`} alt={c.name} loading="lazy" className="w-full h-full object-cover opacity-100 transition-opacity duration-500" />
                </button>
                <figcaption className="mt-3 text-center group-hover:text-primary transition-colors">
                  <p className="font-label text-xs tracking-[0.2em] uppercase text-on-surface">{c.name}</p>
                  {c.role && <p className="font-body text-[11px] text-on-surface-variant mt-1">{c.role}</p>}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <PicsModal
          open={castOpen}
          onClose={() => setCastOpen(false)}
          pics={CAST.map((c) => c.file)}
          basePath={IMG}
          title="Under-Bed Helpers · Cast"
          initialZoom={castInitial}
        />

        {/* ── KEY ART ───────────────────────────────────── */}
        <section className="px-8 mb-32 max-w-6xl mx-auto">
          <div className="bg-surface-container border border-outline-variant p-6 md:p-10">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-6 text-center">
              [ KEY ART // YOUR CHILD'S NIGHTLY PROTECTORS ]
            </p>
            <img src={`${IMG}/wub_10.png`} alt="The World Under My Bed. Your Child's Nightly Protectors" className="w-full max-w-3xl mx-auto" />
          </div>
        </section>

        {/* ── PITCH VIDEO ────────────────────────────── */}
        <section className="bg-surface-container-lowest py-32 border-y border-outline-variant">
          <div className="max-w-5xl mx-auto px-8">
            <div className="mb-12">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ SCREENER // PITCH ]
              </p>
              <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter leading-none uppercase">
                Watch the pitch.
              </h2>
            </div>
            <div className="aspect-video bg-surface-container-high border border-outline-variant overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/f9ztBzwGzJw?rel=0&modestbranding=1"
                title="The World Under My Bed · Pitch"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* ── TAGLINE ──────────────────────────────────── */}
        <section className="py-32 px-8">
          <div className="max-w-5xl mx-auto">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-6">
              [ TAGLINE ]
            </p>
            <p className="font-headline text-2xl md:text-4xl font-bold leading-tight tracking-tight">
              The place children <span className="text-primary">fear</span> becomes the
              place that <span className="text-primary">protects</span> them.
            </p>
          </div>
        </section>

        {/* ── CONCEPT ──────────────────────────────────── */}
        <section className="bg-surface-container-lowest py-32 border-y border-outline-variant">
          <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ THE CONCEPT ]
              </p>
              <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-none">
                Turning fear<br />into wonder.
              </h2>
            </div>
            <div className="lg:col-span-7 text-on-surface-variant font-light leading-relaxed space-y-5">
              <p>
                Instead of monsters, this world is home to creatures who fix
                fears and soften bad dreams. A central learner, the child,
                perceives a large threat: the darkness. A unified network of
                specialised helpers uses their unique skills to transform
                that threat into a positive outcome.
              </p>
              <p className="italic">
                Think of a nightlight that doesn't just sit on a shelf, but
                actively steps into the shadows to tidy up the worries of the
                day so the morning can start fresh.
              </p>
              <p>
                Designed for a global preschool audience, emotion-first
                storytelling with minimal dialogue makes it universally
                adaptable for bedtime routines.
              </p>
            </div>
          </div>
        </section>

        {/* ── HELPERS DETAIL ──────────────────────────── */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
              [ MEET // THE_UNDER_BED_HELPERS ]
            </p>
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter leading-none uppercase">
              Specialised helpers.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {HELPERS.map((c) => (
              <article key={c.name} className="bg-surface-container border border-outline-variant p-8 hover:bg-surface-container-high hover:border-primary/30 transition-all">
                <span className="material-symbols-outlined text-primary text-5xl mb-4 block">{c.icon}</span>
                <h3 className="font-headline font-bold text-2xl uppercase tracking-tight mb-1">{c.name}</h3>
                <p className="font-label text-[10px] text-primary tracking-widest uppercase mb-4">{c.role}</p>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">{c.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── THEMES ──────────────────────────────────── */}
        <section className="bg-surface-container-lowest py-32 border-y border-outline-variant">
          <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ THEMES // SEL ]
              </p>
              <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-none">
                What every<br />night carries.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-1">
              {THEMES.map((t) => (
                <div key={t.title} className="bg-surface-container border border-outline-variant p-6 flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary text-xl flex-shrink-0 mt-1">{t.icon}</span>
                  <div>
                    <h4 className="font-headline font-bold text-base uppercase tracking-tight mb-1">{t.title}</h4>
                    <p className="text-sm text-on-surface-variant font-light leading-relaxed">{t.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <section className="py-32 px-8 text-center bg-surface relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/30 blur-[140px] rounded-full"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight text-headline uppercase">
              Pitch deck.<br />Series bible. Look-dev.
            </h2>
            <p className="text-on-surface-variant max-w-md mx-auto mb-10 font-light">
              Available for broadcasters, distributors and OTT acquisition teams.
              Pilot in active development.
            </p>
            <a href="mailto:nanda@nmediaservices.com" className="nm-btn-primary inline-block font-label uppercase px-12 py-5 font-bold text-sm tracking-widest">
              Request Materials →
            </a>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}

// 9 character / world frames from the legacy gallery (wub_01-09).
const CAST = [
  { file: "wub_01.jpg", name: "Lumi",   role: "The Light Keeper" },
  { file: "wub_02.jpg", name: "Whisp",  role: "Gentle Dream Tamer" },
  { file: "wub_03.jpg", name: "Patch",  role: "The Proud Fixer" },
  { file: "wub_04.jpg", name: "Pebble", role: "Calm Watcher" },
  { file: "wub_05.jpg", name: "Blink",  role: "Cheerful Quick Helper" },
  { file: "wub_06.jpg", name: "The Crew",       role: "Together" },
  { file: "wub_07.jpg", name: "Under-Bed",      role: "World" },
  { file: "wub_08.jpg", name: "Soft Shadows",   role: "Atmosphere" },
  { file: "wub_09.jpg", name: "Calm Morning",   role: "Closing beat" },
];

const HELPERS = [
  { name: "Lumi",   icon: "lightbulb",        role: "The Nurturing Light Keeper", body: "As the leader, Lumi is a patient and reassuring creature made of a warm, golden glow, the first to arrive when the lamps go off." },
  { name: "Patch",  icon: "auto_fix_normal",  role: "The Proud Fixer of Things",  body: "Stitched together with button eyes. Helpful, focused, and certain. Patch can repair any broken toy and any small frayed feeling." },
  { name: "Whisp",  icon: "air",              role: "The Gentle Dream Tamer",     body: "A sensitive, cloud-like being who calms bad dreams and untangles them until they are soft." },
  { name: "Pebble", icon: "spa",              role: "The Calm Watcher & Listener", body: "Small, rounded, and steady. Pebble is a comforting and grounded presence in the quiet night." },
  { name: "Blink",  icon: "bolt",             role: "The Cheerful Quick Helper",  body: "A tiny, fast-moving spark of light who is always curious, enthusiastic, and playful. First to a worry, last to leave." },
];

const THEMES = [
  { icon: "psychology",   title: "Naming Big Feelings",    body: "Worry, fear, frustration, missing-someone, each named at preschool scale, never minimised, always met." },
  { icon: "shield",       title: "Brave is Small",          body: "Courage modelled at a size a 3-year-old can mirror: stepping toward, not away. Tiny choices repeated nightly." },
  { icon: "auto_awesome", title: "Transform, Don't Fight",  body: "The Under-Bed Crew never battles the darkness. They tidy it. Reframing the threat as something workable, not an enemy." },
  { icon: "wb_sunny",     title: "A Calm Morning",          body: "Every episode lands on the same beat: sunlight finds the room, and the worry is smaller now. Repeat-watch retention by design." },
];
