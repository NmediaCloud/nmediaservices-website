import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiteFooter } from "./IPSeries";
import SiteHeader from "../components/SiteHeader";
import PicsModal from "../components/PicsModal";

/**
 * Micro Series — Woh Shaadi Jo Meri Nahi Thi.
 *
 * Vertical microdrama in Hindi — observational comedy / drama threaded
 * through the rituals of a modern wedding week. 4-act structure across
 * 40 micro-episodes (eps 1-10 / 11-20 / 21-30 / 31-40).
 *
 * Source: nmediaservices.wixsite.com/nmedia/micro-series-woh-shaadi
 */
const IMG = "/images/ip/woh-shaadi";

export default function WohShaadi() {
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
                <span className="px-2 py-1 bg-primary/10 border border-primary/30">VOL. 05</span>
                <span>Concept</span>
                <span className="text-on-surface-variant">·</span>
                <span>Micro Drama · Hindi</span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] uppercase">
                Woh Shaadi <span className="text-primary">Jo Meri</span><br />
                Nahi Thi.
              </h1>
              <p className="font-label text-sm tracking-[0.2em] text-on-surface-variant uppercase pt-2">
                Vertical Series · Hindi · 40 Micro-Episodes · 4 Acts
              </p>
              <p className="text-on-surface-variant font-light leading-relaxed max-w-xl pt-4 text-lg">
                A micro-drama threaded through the rituals of a modern wedding
                week. Three lives — <span className="text-primary">Aarohi</span>,
                <span className="text-primary"> Kabir</span> and
                <span className="text-primary"> Meera</span> — collide in
                ninety-second cliffhangers built for the phone screen.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-surface-container-low border border-outline-variant overflow-hidden" style={{ aspectRatio: "9 / 16" }}>
                <img src={`${IMG}/ws_06.jpg`} alt="Woh Shaadi · Key Art" className="w-full h-full object-cover" />
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
              The triangle.
            </h2>
            <p className="mt-6 text-on-surface-variant font-light max-w-2xl">
              Aarohi at the centre — Kabir in the middle, Meera at the edge of
              the frame. Five faces shape the story.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
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
          title="Woh Shaadi · Cast"
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
                  Pilot · Micro Drama Hindi · Woh Shaadi
                </p>
                <div className="aspect-video bg-surface-container-high border border-outline-variant overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/D448kWYvUmM?rel=0&modestbranding=1"
                    title="Pilot · Woh Shaadi Jo Meri Nahi Thi"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div>
                <p className="font-label text-[10px] tracking-[0.3em] text-primary uppercase mb-3">
                  Pitch Video · Woh Shaadi
                </p>
                <div className="aspect-video bg-surface-container-high border border-outline-variant overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/rU8TEZlTt44?rel=0&modestbranding=1"
                    title="Pitch Video · Woh Shaadi"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ANATOMY OF A MICRODRAMA INFOGRAPHIC ───── */}
        <section className="py-32 px-8 max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
              [ STORY_PITCH // ANATOMY ]
            </p>
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter leading-none uppercase">
              4 acts. 40 episodes.
            </h2>
          </div>
          <div className="bg-surface-container border border-outline-variant p-6 md:p-10">
            <img src={`${IMG}/ws_08.png`} alt="Anatomy of a Microdrama — Story Pitch" className="w-full max-w-4xl mx-auto" />
          </div>
        </section>

        {/* ── ACTS ───────────────────────────────────── */}
        <section className="bg-surface-container-lowest py-24 border-y border-outline-variant">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
              {ACTS.map((a) => (
                <article key={a.label} className="bg-surface-container border border-outline-variant p-7 hover:bg-surface-container-high hover:border-primary/30 transition-all">
                  <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-2">{a.label}</p>
                  <h3 className="font-headline font-bold text-2xl uppercase tracking-tight mb-2">{a.title}</h3>
                  <p className="font-label text-[10px] tracking-[0.3em] text-on-surface-variant uppercase mb-4">{a.range}</p>
                  <p className="text-sm text-on-surface-variant font-light leading-relaxed">{a.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT MICRODRAMA ──────────────────────── */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ FORMAT // MICRODRAMA ]
              </p>
              <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-none">
                A TV series<br />compressed for<br /><span className="text-primary">the phone.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 text-on-surface-variant font-light leading-relaxed space-y-5">
              <p>
                Microdrama is a fast-growing storytelling format made for
                today's short-attention, mobile-first audience — especially
                popular on TikTok, Instagram Reels, YouTube Shorts and
                dedicated micro-drama apps.
              </p>
              <p>
                A micro-drama is a short episodic story told in very small
                time units — strong emotions, fast hooks, cliffhangers in
                every cut.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
                {SPECS.map((s) => (
                  <div key={s.label} className="bg-surface-container border border-outline-variant p-4">
                    <p className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant mb-1">{s.label}</p>
                    <p className="font-headline text-lg font-bold tracking-tight text-primary">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── KEY CHARACTERISTICS ─────────────────── */}
        <section className="bg-surface-container-lowest py-32 border-y border-outline-variant">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-12">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ CRAFT // CHARACTERISTICS ]
              </p>
              <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter leading-none uppercase">
                How every<br />episode runs.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              {CHARACTERISTICS.map((c) => (
                <article key={c.title} className="bg-surface-container border border-outline-variant p-7 hover:bg-surface-container-high hover:border-primary/30 transition-all">
                  <span className="material-symbols-outlined text-primary text-3xl mb-3 block">{c.icon}</span>
                  <h3 className="font-headline font-bold text-lg uppercase tracking-tight mb-3">{c.title}</h3>
                  <p className="text-sm text-on-surface-variant font-light leading-relaxed">{c.body}</p>
                </article>
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
              Pitch deck. Pilot.<br />Story bible.
            </h2>
            <p className="text-on-surface-variant max-w-md mx-auto mb-10 font-light">
              Available for vertical-platform partners, micro-drama apps, and
              OTT acquisition teams.
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
  { file: "ws_03.jpg", name: "Aarohi",   role: "The Jilted Lover · 22" },
  { file: "ws_01.png", name: "Aarohi",   role: "On the street" },
  { file: "ws_02.png", name: "Kabir",    role: "The Burdened Groom · 25" },
  { file: "ws_04.png", name: "Meera",    role: "The Knowing Aide · 27" },
  { file: "ws_05.png", name: "The Frame", role: "Wedding week" },
];

const ACTS = [
  { label: "ACT 01", title: "The Shock",   range: "EP 01–10", body: "Aarohi arrives, creating immediate tension with a visibly unhappy Kabir." },
  { label: "ACT 02", title: "The Secrets", range: "EP 11–20", body: "Hidden conversations begin to reveal family pressures and a secret debt." },
  { label: "ACT 03", title: "The Truth",   range: "EP 21–30", body: "The bride confronts Aarohi, revealing she knows everything about the past love affair." },
  { label: "ACT 04", title: "The Decision", range: "EP 31–40", body: "With time running out, a final choice looms — will the wedding stop?" },
];

const SPECS = [
  { label: "Episode",      value: "30s – 3 min" },
  { label: "Orientation",  value: "Vertical 9:16" },
  { label: "Episode count", value: "30 – 100+" },
  { label: "Hook",         value: "Sec. 3–5" },
];

const CHARACTERISTICS = [
  { icon: "bolt",          title: "Extremely Fast Storytelling", body: "Conflict starts in the first 3–5 seconds. No slow buildup. Every scene moves the plot forward." },
  { icon: "smartphone",    title: "Vertical-First",              body: "Designed for the phone screen — composition, framing and rhythm built for the thumb scroll." },
  { icon: "view_carousel", title: "Multi-Episode Drops",         body: "Released as multiple episodes — 30 to 100+ — designed to keep the viewer in a session loop." },
  { icon: "favorite",      title: "Strong Emotions",             body: "Heightened, telenovela-grade emotional beats — desire, betrayal, secrets, choice." },
  { icon: "fitness_center", title: "Cliffhanger Cuts",           body: "Every episode ends on a turn — the next tap of the play button is the only resolution available." },
  { icon: "translate",     title: "Culturally Grounded",          body: "Hindi-language micro-drama with a wedding-week container that travels — Indian weddings are a global format." },
];
