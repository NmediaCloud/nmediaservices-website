import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiteFooter } from "./IPSeries";
import SiteHeader from "../components/SiteHeader";
import PicsModal from "../components/PicsModal";

/**
 * Tiny Wings, Big Job — IP detail page.
 *
 * Pre-school nature / gentle educational fantasy series for ages 3-6.
 * Buzz is a small bee learning his place in the wide world; every
 * episode shows how small actions keep nature alive and connected.
 *
 * Source bible:
 *   docs.google.com/document/d/1sFSNVC11iu3M_SXkAw-HEGKtfaHR6okBt0O2MdyU7G8
 *
 * Page layout: hero · cast strip · key art · pilot+pitch videos ·
 * synopsis · pilot ep · 4-season slate · episode list · CTA.
 */
const IMG = "/images/ip/tiny-wings";

export default function TinyWingsBuzz() {
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
                <span className="px-2 py-1 bg-primary/10 border border-primary/30">VOL. 01</span>
                <span>Pilot Complete</span>
                <span className="text-on-surface-variant">·</span>
                <span>54 EP · 4 Seasons</span>
              </div>
              <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter leading-[0.95] uppercase">
                Tiny Wings,<br />
                <span className="text-primary">Big Job.</span>
              </h1>
              <p className="font-label text-sm tracking-[0.2em] text-on-surface-variant uppercase pt-2">
                Animation Series · Preschool 3–6 · Nature / Gentle Educational Fantasy
              </p>
              <p className="text-on-surface-variant font-light leading-relaxed max-w-xl pt-4 text-lg">
                Inside a warm, humming hive lives <span className="text-primary">Buzz</span>,
                a small bee learning his place in the wide world. Through gentle
                discoveries, Buzz learns that even the tiniest wings can help
                the Earth bloom, and that every small action quietly keeps
                nature alive and connected.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-surface-container-low border border-outline-variant overflow-hidden" style={{ aspectRatio: "3 / 4" }}>
                <img src={`${IMG}/tw_02.jpg`} alt="Buzz · Tiny Wings, Big Job" className="w-full h-full object-cover" />
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
              The hive.
            </h2>
            <p className="mt-6 text-on-surface-variant font-light max-w-2xl">
              Buzz at the centre. Queen Beatrice, Flora, Nectarine and Pollen
              alongside him. Five gentle teachers in a living, humming world.
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
          title="The Hive · Cast"
          initialZoom={castInitial}
        />

        {/* ── KEY ART ───────────────────────────────────── */}
        <section className="px-8 mb-32 max-w-6xl mx-auto">
          <div className="bg-surface-container border border-outline-variant p-6 md:p-10">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-6 text-center">
              [ KEY ART // A TINY HERO'S PURPOSE ]
            </p>
            <img src={`${IMG}/tw_09.jpg`} alt="A Tiny Hero's Purpose. Tiny Wings Big Job" className="w-full max-w-2xl mx-auto" />
          </div>
        </section>

        {/* ── PILOT + PITCH VIDEO ───────────────────────── */}
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
                  Pilot · Episode 1 · "What's My Job?"
                </p>
                <div className="aspect-video bg-surface-container-high border border-outline-variant overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/tNR547OKgaA?rel=0&modestbranding=1"
                    title="Pilot · What's My Job?"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div>
                <p className="font-label text-[10px] tracking-[0.3em] text-primary uppercase mb-3">
                  Pitch Video · Tiny Wings, Big Job
                </p>
                <div className="aspect-video bg-surface-container-high border border-outline-variant overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/Gg8gb52E5O0?rel=0&modestbranding=1"
                    title="Pitch Video · Tiny Wings, Big Job"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── LOGLINE ──────────────────────────────────── */}
        <section className="py-32 px-8">
          <div className="max-w-5xl mx-auto">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-6">
              [ LOGLINE ]
            </p>
            <p className="font-headline text-2xl md:text-4xl font-bold leading-tight tracking-tight">
              A small bee learning his place in the world, discovering that
              <span className="text-primary"> every tiny flutter</span> helps
              the Earth bloom and buzz with life.
            </p>
          </div>
        </section>

        {/* ── PILOT EPISODE ──────────────────────────── */}
        <section className="bg-surface-container-lowest py-32 border-y border-outline-variant">
          <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ EPISODE 01 // PILOT ]
              </p>
              <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-none">
                What's<br />my job?
              </h2>
            </div>
            <div className="lg:col-span-8 text-on-surface-variant font-light leading-relaxed space-y-5">
              <p>
                Buzz feels unsure as he watches other bees at work. <span className="text-primary">Queen Beatrice</span> gently
                shows him how every bee helps the world in a different way.
                By the end of the day, Buzz understands that being small
                doesn't mean being unimportant.
              </p>
              <p>
                He meets <span className="text-primary">Flora</span> dancing
                from flower to flower. Pollinating, helping flowers make
                seeds for fruits and vegetables. He meets <span className="text-primary">Nectarine</span> carefully
                storing sweet nectar. Making honey that feeds the hive and
                many other creatures. He meets <span className="text-primary">Pollen</span> the brave scout,
                searching for new patches of blooming flowers so the work can
                continue.
              </p>
              <p>
                From that day on, Buzz flew with purpose, knowing he was a
                tiny hero, helping the Earth bloom and buzz with life.
              </p>
            </div>
          </div>
        </section>

        {/* ── 4 SEASONS / KEY ART DESCRIPTIONS ──────── */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
              [ SLATE // 04_SEASONS · 54_EP ]
            </p>
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter leading-none uppercase">
              Buzz grows up.
            </h2>
            <p className="mt-6 text-on-surface-variant font-light max-w-2xl">
              Each season has its own visual identity and emotional arc, but
              the world stays cohesive. No aging-out. No reset. Buzz simply
              earns the next chapter.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {SEASONS.map((s) => (
              <article key={s.title} className="bg-surface-container border border-outline-variant p-8 hover:bg-surface-container-high hover:border-primary/30 transition-all">
                <div className="flex items-baseline justify-between mb-3">
                  <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase">{s.label}</p>
                  <span className="font-label text-[10px] tracking-[0.3em] text-on-surface-variant uppercase">{s.episodes}</span>
                </div>
                <h3 className="font-headline font-bold text-2xl uppercase tracking-tight mb-4">{s.title}</h3>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed mb-5">{s.body}</p>
                <div className="grid grid-cols-3 gap-3 text-[10px] font-label tracking-widest uppercase">
                  <div>
                    <p className="text-on-surface-variant mb-1">Mood</p>
                    <p className="text-on-surface">{s.mood}</p>
                  </div>
                  <div>
                    <p className="text-on-surface-variant mb-1">Palette</p>
                    <p className="text-on-surface">{s.palette}</p>
                  </div>
                  <div>
                    <p className="text-on-surface-variant mb-1">Theme</p>
                    <p className="text-primary">{s.theme}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── EPISODE LIST · S1 ──────────────────────── */}
        <section className="bg-surface-container-lowest py-32 border-y border-outline-variant">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                  [ SEASON_01 // EP_LIST ]
                </p>
                <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter leading-none uppercase">
                  Finding your place.
                </h2>
              </div>
              <span className="font-label text-[10px] tracking-[0.3em] text-on-surface-variant uppercase">
                {S1_EPISODES.length} episodes · 7 min each
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px">
              {S1_EPISODES.map((e) => (
                <article key={e.n} className="bg-surface-container border border-outline-variant p-5 hover:bg-surface-container-high hover:border-primary/35 transition-all">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-label text-[10px] tracking-widest text-primary">EP {String(e.n).padStart(2, "0")}</span>
                  </div>
                  <h4 className="font-headline font-bold text-base uppercase tracking-tight mb-2 leading-tight">"{e.title}"</h4>
                  <p className="text-xs text-on-surface-variant font-light leading-relaxed">{e.beat}</p>
                </article>
              ))}
            </div>
            <p className="mt-10 font-label text-[10px] tracking-[0.3em] uppercase text-on-surface-variant">
              Seasons 2–4 episode lists available in the full series bible · 54 episodes total.
            </p>
          </div>
        </section>

        {/* ── WORLD & PROPS ──────────────────────────── */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ WORLD // VISUAL_BIBLE ]
              </p>
              <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-none">
                A storybook<br />nature world.
              </h2>
              <p className="mt-6 text-on-surface-variant font-light leading-relaxed">
                Soft, golden, sunlit. Rounded shapes and cozy textures. The
                world feels gentle, warm, and inviting from the very first
                frame.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-1">
              <div className="bg-surface-container border border-outline-variant p-6">
                <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">Backgrounds</p>
                <ul className="space-y-2 text-sm text-on-surface-variant font-light">
                  <li className="flex gap-2"><span className="text-primary">·</span>Honeycomb tunnels glowing softly</li>
                  <li className="flex gap-2"><span className="text-primary">·</span>Wide flower fields with oversized petals</li>
                  <li className="flex gap-2"><span className="text-primary">·</span>Sunny skies with drifting pollen</li>
                  <li className="flex gap-2"><span className="text-primary">·</span>Cozy hive interiors filled with light</li>
                </ul>
              </div>
              <div className="bg-surface-container border border-outline-variant p-6">
                <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">Signature Props</p>
                <ul className="space-y-2 text-sm text-on-surface-variant font-light">
                  <li className="flex gap-2"><span className="text-primary">·</span>Glowing pollen dust</li>
                  <li className="flex gap-2"><span className="text-primary">·</span>Honey droplets in leaf cups</li>
                  <li className="flex gap-2"><span className="text-primary">·</span>Flower maps marked with nectar spots</li>
                  <li className="flex gap-2"><span className="text-primary">·</span>Wax cells storing golden honey</li>
                </ul>
              </div>
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
              Pitch deck. Pilot screener.<br />Series bible.
            </h2>
            <p className="text-on-surface-variant max-w-md mx-auto mb-10 font-light">
              Available on request for broadcasters, distributors, OTT acquisition teams.
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

// 8-character cast row (tw_01-08) — five named bee roles + supporting frames.
const CAST = [
  { file: "tw_02.jpg", name: "Buzz",           role: "The Learner Bee" },
  { file: "tw_01.png", name: "Buzz · In Flight", role: "Hovering, curious" },
  { file: "tw_03.png", name: "Inside the Hive", role: "Honeycomb tunnels" },
  { file: "tw_04.png", name: "Queen Beatrice",  role: "The Guide" },
  { file: "tw_05.png", name: "Flora",           role: "The Pollinator" },
  { file: "tw_06.png", name: "Nectarine",       role: "The Honey Maker" },
  { file: "tw_07.png", name: "Pollen",          role: "The Scout" },
  { file: "tw_08.png", name: "The Field",       role: "Bloom day" },
];

const SEASONS = [
  {
    label: "S01",
    title: "Finding Your Place",
    episodes: "13 EP",
    body:  "Buzz hovers near a bright flower, looking curious but slightly unsure. The hive glows warmly behind him; bees work calmly nearby. Beginning. Learning. Comfort.",
    mood:  "Curious · Warm",
    palette: "Yellows · Honey · Pastel green",
    theme: "Belonging",
  },
  {
    label: "S02",
    title: "Learning How to Help",
    episodes: "13 EP",
    body:  "Buzz flies confidently across a colorful field of many different flowers. The world feels wider, brighter, more active. Teamwork and responsibility take centre.",
    mood:  "Energetic · Optimistic",
    palette: "Floral pinks · Greens",
    theme: "Cooperation",
  },
  {
    label: "S03",
    title: "Growing Confidence",
    episodes: "14 EP",
    body:  "Buzz flies higher above the fields, wings spread wide. Below, the hive looks smaller. Showing how far he has come. Calm. Confident. No longer unsure.",
    mood:  "Confident · Peaceful",
    palette: "Sky blues · Whites · Gold",
    theme: "Self-belief",
  },
  {
    label: "S04",
    title: "A Tiny Hero in a Big World",
    episodes: "14 EP",
    body:  "Buzz leads younger bees across blooming fields and changing seasons. Not a hero in spotlight, a quiet guide. Leadership without volume.",
    mood:  "Proud · Gentle",
    palette: "Rich golds · Ambers",
    theme: "Continuity",
  },
];

// Season 1 episodes (from the source bible).
const S1_EPISODES = [
  { n: 1,  title: "What's My Job?",       beat: "Queen Beatrice gently shows Buzz that every bee helps the world in a different way." },
  { n: 2,  title: "The Flower Dance",     beat: "Buzz follows Flora as she moves from flower to flower, spreading pollen." },
  { n: 3,  title: "Sweet as Honey",       beat: "Nectarine teaches Buzz how nectar becomes honey and why sharing matters." },
  { n: 4,  title: "Flying High",          beat: "Pollen the scout shows Buzz how finding new flowers helps everyone." },
  { n: 5,  title: "The Windy Day",        beat: "Strong winds make flying tricky. Buzz learns patience and practice." },
  { n: 6,  title: "Too Tired to Fly",     beat: "Buzz feels worn out. The hive teaches him the value of rest." },
  { n: 7,  title: "The Quiet Flower",     beat: "Buzz helps pollinate a single forgotten flower and sees its quiet magic." },
  { n: 8,  title: "Working Together",     beat: "A big task becomes easy when bees work as one." },
  { n: 9,  title: "Lost Pollen",          beat: "Buzz helps return lost pollen safely back to the hive." },
  { n: 10, title: "Different Wings",      beat: "Buzz notices how every bee flies differently, and that's okay." },
  { n: 11, title: "Storm Day",            beat: "A storm keeps bees inside. Buzz learns some jobs happen within the hive." },
  { n: 12, title: "Bloom Day",            beat: "The fields burst with flowers, and Buzz proudly joins the work." },
];
