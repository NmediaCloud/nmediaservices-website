import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiteFooter } from "./IPSeries";
import SiteHeader from "../components/SiteHeader";
import PicsModal from "../components/PicsModal";

/**
 * Chimpu · Mann Ki Masti.
 *
 * Pre-K slapstick comedy series — a clever monkey adapts to a
 * human-centric world after his forest home is replaced by a luxury
 * hotel. Left behind while his troop is sent to the zoo, Chimpu
 * decides to make the resort his personal playground.
 *
 * Source: nmediaservices.wixsite.com/nmedia/03-chimpu-chase-comedy
 */
const IMG = "/images/ip/chimpu";

export default function Chimpu() {
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
                <span className="px-2 py-1 bg-primary/10 border border-primary/30">VOL. 03</span>
                <span>Development</span>
                <span className="text-on-surface-variant">·</span>
                <span>Pre-K Slapstick</span>
              </div>
              <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-[0.95] uppercase">
                Chimpu<span className="text-primary">.</span><br />
                <span className="text-primary text-4xl md:text-5xl block mt-2">Mann Ki Masti.</span>
              </h1>
              <p className="font-label text-sm tracking-[0.2em] text-on-surface-variant uppercase pt-2">
                Animation Series · Pre-K · Slapstick / Chase Comedy
              </p>
              <p className="text-on-surface-variant font-light leading-relaxed max-w-xl pt-4 text-lg">
                A clever and resourceful monkey adapts to a human-centric world
                after his forest home is replaced by a luxury hotel. Left
                behind while his troop is sent to the zoo, <span className="text-primary">Chimpu</span> decides
                to make the resort his personal playground — and <span className="text-primary">Tiger</span>,
                the hellbound rival, has other plans.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-surface-container-low border border-outline-variant overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
                <img src={`${IMG}/ch_07.png`} alt="Chimpu · Mann Ki Masti — Key Art" className="w-full h-full object-cover" />
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
              The lobby.
            </h2>
            <p className="mt-6 text-on-surface-variant font-light max-w-2xl">
              Chimpu the mischievous hero. Tiger the hellbound rival. The
              hotel that became their stage.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5">
            {CAST.map((c) => (
              <figure key={c.file} className="group">
                <button
                  type="button"
                  onClick={() => openCast(c.file)}
                  className="block w-full bg-surface-container border border-outline-variant group-hover:border-primary/40 overflow-hidden transition-all duration-500 cursor-zoom-in transform-gpu group-hover:scale-[1.06] group-hover:shadow-xl group-hover:shadow-primary/20 group-hover:z-10 relative"
                  style={{ aspectRatio: "3 / 4" }}
                  aria-label={`View ${c.name}`}
                >
                  <img
                    src={`${IMG}/${c.file}`}
                    alt={c.name}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-500"
                  />
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
          title="Chimpu · Cast"
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
                  Pilot · Chimpu Mann Ki Masti
                </p>
                <div className="aspect-video bg-surface-container-high border border-outline-variant overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/MOMNbJIP3vk?rel=0&modestbranding=1"
                    title="Pilot · Chimpu"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div>
                <p className="font-label text-[10px] tracking-[0.3em] text-primary uppercase mb-3">
                  Pitch Video · Chimpu
                </p>
                <div className="aspect-video bg-surface-container-high border border-outline-variant overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/G8nhgC0trDM?rel=0&modestbranding=1"
                    title="Pitch Video · Chimpu"
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
                The hotel<br />becomes<br />the jungle.
              </h2>
            </div>
            <div className="lg:col-span-8 text-on-surface-variant font-light leading-relaxed space-y-5">
              <p>
                In the pilot episode, Chimpu — a clever and resourceful monkey —
                adapts to a human-centric world after his forest home is
                replaced by a luxury hotel. Left behind while his troop is
                sent to the zoo, Chimpu decides to make the resort his
                personal playground.
              </p>
              <p>
                Lobbies become tree canopies. Chandeliers become vines.
                Banana plates become buffets. And the hotel's grumpy guard
                cat, Tiger, makes it his life's mission to chase Chimpu out —
                and fails, gloriously, every time.
              </p>
              <p className="italic text-on-surface-variant">
                Pre-K slapstick — exaggerated cause-and-effect comedy with
                character-led mischief and zero dialogue dependency.
              </p>
            </div>
          </div>
        </section>

        {/* ── LOGLINE ──────────────────────────────────── */}
        <section className="bg-surface-container-lowest py-32 border-y border-outline-variant">
          <div className="max-w-5xl mx-auto px-8">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-6">
              [ LOGLINE ]
            </p>
            <p className="font-headline text-2xl md:text-4xl font-bold leading-tight tracking-tight">
              When the jungle becomes a hotel, the cleverest monkey just
              <span className="text-primary"> changes the rules</span> — one
              banana, one chase, one pratfall at a time.
            </p>
          </div>
        </section>

        {/* ── CRAFT / WHY IT WORKS ────────────────────── */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
              [ CRAFT // PRE_K_COMEDY ]
            </p>
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter leading-none uppercase">
              Built for the<br />pre-K laugh.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {CRAFT.map((c) => (
              <article key={c.title} className="bg-surface-container border border-outline-variant p-7 hover:bg-surface-container-high hover:border-primary/30 transition-all">
                <span className="material-symbols-outlined text-primary text-3xl mb-3 block">{c.icon}</span>
                <h3 className="font-headline font-bold text-lg uppercase tracking-tight mb-3">{c.title}</h3>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">{c.body}</p>
              </article>
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
              Available for broadcasters, distributors, and OTT acquisition
              teams. Pre-K slapstick that travels without translation.
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
  { file: "ch_01.png", name: "Chimpu",  role: "The Mischievous Hero" },
  { file: "ch_02.png", name: "Chimpu",  role: "On the move" },
  { file: "ch_03.png", name: "Chimpu",  role: "Going up" },
  { file: "ch_04.jpg", name: "Tiger",   role: "The Hellbound Rival" },
  { file: "ch_05.png", name: "The Hotel", role: "World" },
  { file: "ch_06.png", name: "The Lobby", role: "Stage" },
];

const CRAFT = [
  { icon: "sentiment_very_satisfied", title: "Slapstick First",     body: "Exaggerated cause-and-effect comedy — pratfalls, near-misses, perfectly-timed chaos. Built for the pre-K laugh." },
  { icon: "translate",                title: "Zero Dialogue Dependency", body: "Chimpu and Tiger barely speak. The story is read in body, beat, and bounce — globally legible from frame one." },
  { icon: "directions_run",           title: "Chase as Engine",      body: "Every episode is a chase episode. Tiger chases Chimpu. The hotel chases its own ghosts. The audience just chases the laugh." },
  { icon: "auto_awesome",             title: "Visual Gag Library",   body: "A growing repertoire of recurring sight gags — banana cart, chandelier swing, room-service trolley — re-staged each episode." },
  { icon: "schedule",                 title: "11-Min Episode Length", body: "Tight, broadcast-friendly format. Two beats per episode, one big set-piece, one quiet button to land it." },
  { icon: "public",                   title: "Travels Without Translation", body: "Hotel + monkey + cat = a story format that ships to any market without a dub track. The pilot proves the floor." },
];
