import React, { useState } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import PicsModal, { ABOUT_PICS } from "../components/PicsModal";
import { SiteFooter } from "./IPSeries";

/**
 * About — Founder + studio credentials.
 *
 * Migrates content from:
 *   - mnkmars.wixsite.com/grafix/home  (portfolio bio)
 *   - mnkmars.wixsite.com/certi        (certifications & qualifications)
 *
 * Cast in the site's design system. Acts as the "About" page reachable
 * from the footer or any nav link added later.
 */
export default function About() {
  const [picsOpen, setPicsOpen] = useState(false);
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">

      <SiteHeader />

      <main className="pt-32 pb-24">

        {/* ── HERO (photo + intro) ───────────────────────── */}
        <header className="px-8 mb-24 max-w-7xl mx-auto">
          <div className="border-b border-outline-variant pb-16 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-video bg-surface-container border border-outline-variant overflow-hidden">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://player.vimeo.com/video/1078876514?h=615f148fb2"
                  title="Nmedia Services · Studio Reel"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 font-label text-[10px] text-primary bg-surface/80 px-2 py-1 backdrop-blur-md z-10 pointer-events-none">
                  [ STUDIO REEL ]
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-5">
              <p className="font-label text-primary text-sm tracking-[0.3em] uppercase">
                ABOUT // FOUNDER · STUDIO
              </p>
              <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tight leading-tight uppercase">
                Nanda <span className="text-primary">Mohan.</span>
              </h1>
              <p className="font-label text-sm tracking-[0.2em] text-on-surface-variant uppercase">
                Creative &amp; Technical Director ·{" "}
                <span className="text-primary">Forward Deployed Engineer</span> · Toronto
              </p>
              <p className="text-on-surface-variant font-light leading-relaxed text-lg pt-3">
                Twenty-plus years in animation, lighting and VFX —
                <span className="text-primary"> Disney</span>,
                <span className="text-primary"> Nickelodeon</span>,
                <span className="text-primary"> Lego</span>,
                <span className="text-primary"> Paw Patrol</span> — now running
                an AI-native production studio out of one toolchain.
              </p>
              <button
                type="button"
                onClick={() => setPicsOpen(true)}
                className="inline-flex items-center gap-2 mt-2 font-label text-xs tracking-[0.2em] uppercase text-primary hover:gap-3 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">photo_library</span>
                View Studio Stills · {ABOUT_PICS.length}
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </div>
          </div>
        </header>

        {/* Photo gallery modal — opens on demand */}
        <PicsModal open={picsOpen} onClose={() => setPicsOpen(false)} pics={ABOUT_PICS} />

        {/* ── BIO ──────────────────────────────────────── */}
        <section className="px-8 mb-32 max-w-5xl mx-auto">
          <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-6">
            [ BIO ]
          </p>
          <div className="space-y-6 text-lg text-on-surface-variant font-light leading-relaxed">
            <p>
              Trained as a character animator. Ran the Disney–Pixar composition
              and layout track. Spent two decades shipping series for
              broadcasters and OTTs across animation, motion capture, lighting,
              rendering and technical direction.
            </p>
            <p>
              Nmedia Services is the studio that came out of that — built on
              the principle that <em className="not-italic text-primary">no
              hand-off is faster than no hand-off</em>. Every module of the
              pipeline is operator-runnable from a single browser tab. Every
              project file is the same project file. The toolchain stops
              fighting the work.
            </p>
            <p>
              The current work is model-agnostic by construction. The generation
              layer runs across{" "}
              <em className="not-italic text-primary">eight frontier models</em>{" "}
              rather than betting the pipeline on one — swapping a provider is a
              config change, not a rewrite. Since April 2026 that has meant{" "}
              <em className="not-italic text-primary">61 million generated tokens</em>{" "}
              across 61,080 model turns, spanning storyboard generation, animatics,
              vision-graded QA and reel polish.
            </p>
            <p>
              Some of it is open. {" "}
              <em className="not-italic text-primary">CreativeFlow</em> turns one
              campaign brief into on-brand creatives across every aspect ratio and
              runs on a clean checkout with no API key at all. An{" "}
              <em className="not-italic text-primary">MCP server</em> puts 15,000+
              8K stills and 4K clips directly inside Claude Code, Cursor and Codex.
              The production pipeline itself stays in-house.
            </p>
            <p>
              Adjacent to the animation work: a deliberate stack of credentials
              in generative AI, data analytics, and digital marketing — all
              feeding back into how we run client briefs end-to-end.
            </p>
          </div>
        </section>

        {/* ── DISCIPLINES ──────────────────────────────── */}
        <section className="bg-surface-container-lowest py-32 border-y border-outline-variant">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-12">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ DISCIPLINES ]
              </p>
              <h2 className="font-headline text-2xl md:text-4xl font-bold tracking-tight leading-none uppercase">
                What we run.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              {DISCIPLINES.map((d) => (
                <article key={d.title} className="bg-surface-container border border-outline-variant p-7 hover:bg-surface-container-high hover:border-primary/30 transition-all">
                  <span className="material-symbols-outlined text-primary text-3xl mb-3 block">{d.icon}</span>
                  <h3 className="font-headline font-bold text-lg uppercase tracking-tight mb-2">{d.title}</h3>
                  <p className="text-sm text-on-surface-variant font-light leading-relaxed">{d.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CERTIFICATIONS ─────────────────────────── */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
              [ CREDENTIALS // ONGOING ]
            </p>
            <h2 className="font-headline text-2xl md:text-4xl font-bold tracking-tight leading-none uppercase">
              The Stack.
            </h2>
            <p className="mt-4 text-on-surface-variant font-light max-w-xl">
              Animation craft anchored in two decades of broadcast credits,
              extended into adjacent domains the modern studio needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            {CERT_GROUPS.map((g) => (
              <div key={g.label} className="bg-surface-container-lowest border border-outline-variant p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-primary">{g.icon}</span>
                  <h3 className="font-headline font-bold text-xl uppercase tracking-tight">{g.label}</h3>
                </div>
                <ul className="space-y-2">
                  {g.items.map((it) => (
                    <li key={it} className="text-sm text-on-surface-variant font-light flex gap-2">
                      <span className="text-primary">·</span>{it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── CREDENTIALS WALL (cert thumbnails) ─────────── */}
        <section className="bg-surface-container-lowest py-24 border-y border-outline-variant">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                  [ CREDENTIALS WALL // {CERT_WALL.reduce((n, g) => n + g.items.length, 0)} CERTIFICATES ]
                </p>
                <h2 className="font-headline text-2xl md:text-4xl font-bold tracking-tight leading-none uppercase">
                  Receipts.
                </h2>
              </div>
              <span className="font-label text-[10px] tracking-[0.3em] text-on-surface-variant uppercase">
                Click any tile to view full
              </span>
            </div>

            {CERT_WALL.map((group) => (
              <div key={group.label} className="mb-12 last:mb-0">
                <p className="font-label text-[10px] tracking-[0.3em] text-primary uppercase mb-4">
                  {group.label}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {group.items.map((it) => (
                    <a
                      key={it.file}
                      href={`/images/certificates/${it.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={it.label}
                      className="group block bg-surface-container border border-outline-variant hover:border-primary/40 overflow-hidden aspect-[4/3] relative transition-all"
                    >
                      <img
                        src={`/images/certificates/${it.file}`}
                        alt={it.label}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        <p className="text-xs text-on-surface font-medium leading-tight line-clamp-2">{it.label}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EDUCATION ───────────────────────────────── */}
        <section className="bg-surface-container-lowest py-24 border-y border-outline-variant">
          <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ EDUCATION ]
              </p>
              <h2 className="font-headline text-xl md:text-3xl font-bold tracking-tight uppercase leading-none">
                Foundations.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-surface-container border border-outline-variant p-6">
                <h4 className="font-headline font-bold text-base uppercase tracking-tight mb-1">MBA</h4>
                <p className="text-sm text-on-surface-variant font-light">Master of Business Administration</p>
              </div>
              <div className="bg-surface-container border border-outline-variant p-6">
                <h4 className="font-headline font-bold text-base uppercase tracking-tight mb-1">PGDCA</h4>
                <p className="text-sm text-on-surface-variant font-light">Post-Graduate Diploma in Computer Applications</p>
              </div>
              <div className="bg-surface-container border border-outline-variant p-6">
                <h4 className="font-headline font-bold text-base uppercase tracking-tight mb-1">Disney–Pixar Animation Composition</h4>
                <p className="text-sm text-on-surface-variant font-light">Camera composition + layouts seminar</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXTERNAL ────────────────────────────────── */}
        <section className="py-24 px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
              [ THE LONGER RECORD ]
            </p>
            <h2 className="font-headline text-xl md:text-2xl font-bold tracking-tight mb-10 uppercase leading-none">
              Full credits, externally.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://www.imdb.com/name/nm12576040/" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-3 bg-surface-container border border-outline-variant hover:border-primary/40 text-on-surface px-8 py-4 font-label text-sm tracking-widest uppercase transition-all">
                IMDb · Filmography
                <span className="material-symbols-outlined text-base">arrow_outward</span>
              </a>
              <a href="https://www.linkedin.com/in/mnkmars/" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-3 bg-surface-container border border-outline-variant hover:border-primary/40 text-on-surface px-8 py-4 font-label text-sm tracking-widest uppercase transition-all">
                LinkedIn · Profile
                <span className="material-symbols-outlined text-base">arrow_outward</span>
              </a>
              <Link to="/digital-marketing"
                 className="nm-btn-primary inline-flex items-center justify-center gap-3 px-8 py-4 font-label font-bold text-sm tracking-widest uppercase">
                Marketing Strategy
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}

const DISCIPLINES = [
  { icon: "person",         title: "Character Animation",  body: "Performance acting, body mechanics, blocking through final polish — across stylised and realistic." },
  { icon: "videocam",       title: "Motion Graphics",      body: "Editing, compositing, animation, lighting and rendering — full-stack motion craft." },
  { icon: "view_in_ar",     title: "Polygon Modelling",    body: "Production-grade asset modelling. Props for Disney's Tinker Bell. Game and film pipelines." },
  { icon: "wb_incandescent", title: "Lighting & Render",   body: "V-Ray, Cycles, Eevee. Look-development through final-frame, broadcast-grade output." },
  { icon: "videogame_asset", title: "Motion Capture",      body: "Mocap pipeline ownership — solving, retargeting, cleanup, blending into animator finishes." },
  { icon: "engineering",    title: "Technical Direction",  body: "The role between 'animator' and 'pipeline TD' that keeps shows shipping. End-to-end ownership." },
];

// Credentials wall — actual scans/screenshots from the legacy Wix /certi page.
// Files live in public/images/certificates/.
const CERT_WALL = [
  {
    label: "Generative AI",
    items: [
      { file: "genai_01_firefly.jpg",      label: "Adobe Firefly · First Look" },
      { file: "genai_02_imaging.jpg",      label: "Generative AI Imaging — What Creative Pros Need" },
      { file: "genai_03_enhancing.jpg",    label: "Enhancing Images with AI" },
      { file: "genai_04_dalle.jpg",        label: "DALL-E · Creative Process & Art of Prompting" },
      { file: "genai_05_midjourney.jpg",   label: "Midjourney · Tips & Techniques" },
      { file: "genai_06_prompt_eng.jpg",   label: "Prompt Engineering · How to Talk to AIs" },
      { file: "genai_07_gans.jpg",         label: "Introduction to Generative Adversarial Networks (GANs)" },
    ],
  },
  {
    label: "Data Science & Analytics · MCT Diploma",
    items: [
      { file: "data_01_powerbi_desktop.jpg", label: "Power BI · Desktop" },
      { file: "data_02_powerbi_pro.jpg",     label: "Power BI · Professional" },
      { file: "data_03_blockchain.jpg",      label: "Blockchain Basics" },
      { file: "data_04_hadoop.jpg",          label: "Hadoop 101" },
      { file: "data_05_certi_a.jpg",         label: "Data Science Project · Certificate" },
      { file: "data_06_certi_b.jpg",         label: "Data Science Project · Certificate" },
      { file: "data_07_certi_c.jpg",         label: "Data Science Project · Certificate" },
      { file: "data_08_certi_d.jpg",         label: "Data Science Project · Certificate" },
    ],
  },
  {
    label: "MBA · PGDCA · Diploma scans",
    items: [
      { file: "diploma_page_1.jpg", label: "Diploma · Page 1" },
      { file: "diploma_page_2.jpg", label: "Diploma · Page 2" },
      { file: "diploma_page_3.jpg", label: "Diploma · Page 3" },
      { file: "diploma_page_4.jpg", label: "Diploma · Page 4" },
      { file: "diploma_page_5.jpg", label: "Diploma · Page 5" },
      { file: "diploma_page_6.jpg", label: "Diploma · Page 6" },
      { file: "diploma_page_7.jpg", label: "Diploma · Page 7" },
      { file: "diploma_page_8.jpg", label: "Diploma · Page 8" },
      { file: "diploma_page_9.jpg", label: "Diploma · Page 9" },
    ],
  },
  {
    label: "Digital Marketing",
    items: [
      { file: "dmkt_01_facebook.png",    label: "Facebook Marketing" },
      { file: "dmkt_02_linkedin.png",    label: "LinkedIn Advertising" },
      { file: "dmkt_03_adwords.png",     label: "AdWords Essentials" },
      { file: "dmkt_04_instagram.png",   label: "Instagram for Business" },
      { file: "dmkt_05_twitter.png",     label: "Twitter Marketing" },
      { file: "dmkt_06_youtube.png",     label: "YouTube Marketing" },
      { file: "dmkt_07_mobile.png",      label: "Mobile Marketing" },
      { file: "dmkt_08_millennials.png", label: "Marketing to Millennials" },
      { file: "dmkt_09_tools.png",       label: "Tools for Social Media" },
      { file: "dmkt_10_b2b.png",         label: "B2B Social Media Marketing" },
      { file: "dmkt_11_smb.png",         label: "Marketing for Small Business" },
      { file: "dmkt_12_content.png",     label: "Content Marketing" },
    ],
  },
];

const CERT_GROUPS = [
  {
    label: "Generative AI",
    icon: "auto_awesome",
    items: [
      "Generative AI Imaging Prompt Engineering",
      "Adobe Firefly First Look",
      "DALL-E — Creative Process & Art of Prompting",
      "Introduction to Generative Adversarial Networks (GANs)",
      "Midjourney — Techniques for Images with AI",
    ],
  },
  {
    label: "Data Science & Analytics (MCT Diploma)",
    icon: "analytics",
    items: [
      "Fundamentals of Data Analytics & Statistics",
      "SQL Programming",
      "Business Analytics",
      "Excel & VBA Programming",
      "SAS Programming",
      "R & Python for Data Analytics",
      "Data Mining",
      "Advanced Statistical Modelling",
      "Big Data Analysis & Application",
      "Data Science Projects",
      "Power BI Desktop · Power BI Professional",
      "Blockchain Basics · Hadoop 101",
    ],
  },
  {
    label: "Digital Marketing",
    icon: "campaign",
    items: [
      "Google Web Analytics",
      "Facebook Marketing · LinkedIn Marketing · Instagram for Business",
      "AdWords Essentials · Mobile Marketing",
      "Twitter Marketing · YouTube Marketing",
      "Marketing to Millennials",
      "B2B Social Media Marketing",
      "Marketing for Small Business",
      "Content Marketing",
    ],
  },
  {
    label: "Software Stack",
    icon: "build",
    items: [
      "Maya · 3DS Max · Blender",
      "Nuke · Combustion · After Effects · Premiere",
      "Photoshop · Illustrator · InDesign · Lightroom",
      "Boris FX · Mocha Pro · Sapphire · Continuum",
      "Red Giant Trapcode · Element 3D · Topaz AI",
      "V-Ray (CUDA) · Blender Cycles · Eevee",
    ],
  },
];
