import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiteFooter } from "./IPSeries";
import SiteHeader from "../components/SiteHeader";
import PicsModal from "../components/PicsModal";

/**
 * Cici & the School of Fish.
 *
 * 3D animated series for ages 4-8 — underwater news-reporter adventure
 * blending entertainment with moral education and environmental
 * awareness. 26 episodes × 7 min. Studio: ZA Originals.
 *
 * Source: nmediaservices.wixsite.com/nmedia/02-cici-school-of-fish
 */
const IMG = "/images/ip/cici";

export default function Cici() {
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
                <span className="px-2 py-1 bg-primary/10 border border-primary/30">VOL. 02</span>
                <span>Development</span>
                <span className="text-on-surface-variant">·</span>
                <span>26 EP · 7 min</span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] uppercase">
                Cici &amp; the<br />
                <span className="text-primary">School of Fish.</span>
              </h1>
              <p className="font-label text-sm tracking-[0.2em] text-on-surface-variant uppercase pt-2">
                3D Animation · Ages 4–8 · Underwater Adventure
              </p>
              <p className="text-on-surface-variant font-light leading-relaxed max-w-xl pt-4 text-lg">
                <span className="text-primary">Cici</span> is an assertive, competitive
                8-year-old fish, and an overly enthusiastic news reporter
                broadcasting live from the coral reef. With <span className="text-primary">Spike</span> at
                her side and <span className="text-primary">Mr. Rudolph</span> watching from the
                school bench, every story turns into a lesson on friendship,
                growth, and the world floating above their reef.
              </p>
              <p className="font-label text-[11px] tracking-[0.4em] text-primary uppercase pt-2">
                Swim. Sink. Rise. Repeat.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-surface-container-low border border-outline-variant overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
                <img src={`${IMG}/ci_08.jpg`} alt="Cici · Reporting live from the coral reef" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* ── CAST STRIP ─────────────────────────────────── */}
        <section className="px-8 mb-32 max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
              [ CAST // VISUAL_SHEET ]
            </p>
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter leading-none uppercase">
              The reef.
            </h2>
            <p className="mt-6 text-on-surface-variant font-light max-w-2xl">
              Cici reporting. Spike steady at her side. Mr. Rudolph clumsily
              optimistic. Plus the supporting reef ensemble.
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
          title="Cici · Cast"
          initialZoom={castInitial}
        />

        {/* ── PILOT + PITCH VIDEOS ──────────────────────── */}
        <section className="bg-surface-container-lowest py-32 border-y border-outline-variant">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-12">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ SCREENERS // PILOT_AND_PITCH ]
              </p>
              <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter leading-none uppercase">
                Watch the work.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-label text-[10px] tracking-[0.3em] text-primary uppercase mb-3">
                  Pilot · Cici
                </p>
                <div className="aspect-video bg-surface-container-high border border-outline-variant overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/A9Bfu6J_v2w?rel=0&modestbranding=1"
                    title="Pilot · Cici"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div>
                <p className="font-label text-[10px] tracking-[0.3em] text-primary uppercase mb-3">
                  Pitch · Cici &amp; The School of Fish
                </p>
                <div className="aspect-video bg-surface-container-high border border-outline-variant overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/NerANOEiR3g?rel=0&modestbranding=1"
                    title="Pitch · Cici"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PILOT SYNOPSIS ──────────────────────────── */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ PILOT // SYNOPSIS ]
              </p>
              <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-none">
                Live from<br />the reef.
              </h2>
            </div>
            <div className="lg:col-span-8 text-on-surface-variant font-light leading-relaxed space-y-5">
              <p>
                Join Cici, an assertive and competitive 8-year-old fish who
                is also an overly enthusiastic news reporter. Cici loves a
                good adventure and playing cricket with her best friend
                Spike, but her impulsive nature often leads her into tricky
                situations.
              </p>
              <p>
                Each story follows a familiar shape: Cici makes a mistake,
                understands the consequences with the support of her friends
                and family, and finally amends her wrongdoing. A series
                designed to be a vibrant underwater adventure focused on
                friendship, personal growth, and environmental discovery.
              </p>
              <p className="italic text-on-surface-variant">
                Think of Cici as a young journalist trying to report from the
                middle of a theme park. Surrounded by excitement and
                distractions, until she learns that the best stories are
                found when you slow down and listen.
              </p>
            </div>
          </div>
        </section>

        {/* ── KEY PROJECT PILLARS ────────────────────── */}
        <section className="bg-surface-container-lowest py-32 border-y border-outline-variant">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-12">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ KEY_PROJECT_PILLARS ]
              </p>
              <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter leading-none uppercase">
                What the show<br />is built on.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {PILLARS.map((p) => (
                <article key={p.title} className="bg-surface-container border border-outline-variant p-7 hover:bg-surface-container-high hover:border-primary/30 transition-all">
                  <span className="material-symbols-outlined text-primary text-3xl mb-3 block">{p.icon}</span>
                  <h3 className="font-headline font-bold text-lg uppercase tracking-tight mb-3">{p.title}</h3>
                  <p className="text-sm text-on-surface-variant font-light leading-relaxed">{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── SIGNATURE SEGMENT ──────────────────────── */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ SIGNATURE_SEGMENT ]
              </p>
              <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                What's<br />That<br /><span className="text-primary">U.F.O.?</span>
              </h2>
              <p className="font-label text-[10px] tracking-[0.3em] text-on-surface-variant uppercase mt-3">
                Unidentified Floating Object
              </p>
            </div>
            <div className="lg:col-span-7 text-on-surface-variant font-light leading-relaxed space-y-5">
              <p>
                A central recurring segment in every episode. Cici stumbles on
                an object drifting through the reef, a plastic bag, a
                fishing line, a forgotten shoe, and tries to figure out
                what it is, where it came from, and why it doesn't belong.
              </p>
              <p>
                A thought-provoking, bite-sized format that sheds light on
                the impact of human activities on marine life, designed to
                travel as a standalone short, an adaptable interstitial, or a
                full episode beat.
              </p>
              <p className="text-primary font-medium">
                Foster a sense of responsibility and care for our planet, by
                making the lesson the story, not the homework.
              </p>
            </div>
          </div>
        </section>

        {/* ── FORMAT SPECS ──────────────────────────── */}
        <section className="bg-surface-container-lowest py-24 border-y border-outline-variant">
          <div className="max-w-5xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {SPECS.map((s) => (
              <div key={s.label} className="bg-surface-container border border-outline-variant p-6 text-center">
                <p className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant mb-2">{s.label}</p>
                <p className="font-headline text-xl font-bold tracking-tight text-primary">{s.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <section className="py-32 px-8 text-center bg-surface relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/30 blur-[140px] rounded-full"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight text-headline uppercase">
              Pitch deck. Pilot.<br />Series bible.
            </h2>
            <p className="text-on-surface-variant max-w-md mx-auto mb-10 font-light">
              Looking for partners, broadcasters, OTTs, environmental
              education programs, to bring the world of "Swim. Sink. Rise.
              Repeat." to life.
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

const CAST = [
  { file: "ci_01.png", name: "Cici",       role: "The Reporter · 8" },
  { file: "ci_02.png", name: "Cici",       role: "On the move" },
  { file: "ci_03.png", name: "Spike",      role: "The Yin to her Yang" },
  { file: "ci_04.png", name: "Mr. Rudolph", role: "School Counselor" },
  { file: "ci_05.png", name: "Reef · 01",  role: "Coral classroom" },
  { file: "ci_06.png", name: "Reef · 02",  role: "Open water" },
  { file: "ci_07.png", name: "The Crew",   role: "Together" },
];

const PILLARS = [
  { icon: "eco",          title: "Environmental Awareness", body: "The 'What's That U.F.O.' segment frames human impact on marine life as bite-sized, story-led discovery, never lecture." },
  { icon: "groups",       title: "Relatable Characters",   body: "Spike (Cici's loyal, compassionate 'Yin to her Yang') and Mr. Rudolph, the optimistic counselor who finds wonder in everything." },
  { icon: "psychology",   title: "Moral Education",        body: "Every story follows the same shape: Cici makes a mistake, understands the consequence with friends and family, and amends." },
  { icon: "playlist_play", title: "Format & Scope",        body: "26 episodes × 7 minutes. Targeting children ages 4–8. Broadcast and streaming friendly." },
];

const SPECS = [
  { label: "Audience", value: "Ages 4–8" },
  { label: "Episodes", value: "26" },
  { label: "Length",   value: "7 min" },
  { label: "Format",   value: "3D Animation" },
];
