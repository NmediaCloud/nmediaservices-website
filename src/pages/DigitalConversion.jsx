import React, { useState } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import PicsModal from "../components/PicsModal";

/**
 * DigitalConversion — single-page presentation of the digital
 * conversion service line. One scroll, six service sections, each
 * with intro · image strip · video placeholder · key points.
 *
 * Source: nmediaservices.wixsite.com/site (+ /optical-mark-reading,
 * /medical-records-management-1, /library-books-conversion,
 * /palm-script-conversion, /photos-negatives-scanning, /miscellaneous)
 */

// ── Re-usable section block ──────────────────────────────────────
function ServiceSection({ id, kicker, title, subtitle, intro, images, basePath, points, flashcard, alt = false, onZoom, noVideo = false, videoId, verticalImages = false, fullWidthImages = false }) {
  return (
    <section
      id={id}
      className={`scroll-mt-32 py-32 px-8 ${alt ? "bg-surface-container-lowest border-y border-outline-variant" : ""}`}
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading + flashcard */}
        <div className="grid lg:grid-cols-12 gap-12 mb-12 items-start">
          <div className="lg:col-span-3">
            {flashcard && (
              <button
                type="button"
                onClick={() => onZoom(flashcard)}
                className="block w-full bg-surface-container border border-outline-variant hover:border-primary/40 overflow-hidden cursor-zoom-in transition-all group"
                style={{ aspectRatio: "3 / 4" }}
                aria-label={`Zoom ${title} flashcard`}
              >
                <img
                  src={flashcard}
                  alt={`${title} flashcard`}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                />
              </button>
            )}
          </div>
          <div className="lg:col-span-4">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
              {kicker}
            </p>
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-none">
              {title}
            </h2>
            {subtitle && (
              <p className="font-label text-sm tracking-[0.2em] text-on-surface-variant uppercase mt-3">
                {subtitle}
              </p>
            )}
          </div>
          <div className="lg:col-span-5 text-on-surface-variant font-light leading-relaxed space-y-4">
            {intro.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>

        {/* Image strip — clickable to zoom */}
        {images && images.length > 0 && (
          fullWidthImages ? (
            <div className="max-w-5xl mx-auto space-y-6 mb-10">
              {images.map((img) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => onZoom(`${basePath}/${img}`)}
                  className="block w-full bg-surface-container border border-outline-variant hover:border-primary/40 overflow-hidden cursor-zoom-in transition-all duration-500 group transform-gpu hover:scale-[1.005]"
                  aria-label="Zoom image"
                >
                  <img
                    src={`${basePath}/${img}`}
                    alt=""
                    loading="lazy"
                    className="w-full h-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity duration-500 bg-surface-container-high"
                  />
                </button>
              ))}
            </div>
          ) : verticalImages ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-6xl mx-auto items-start">
              {[
                // Column A: even-index slides except the last.
                images.filter((_, i) => i % 2 === 0 && i !== images.length - 1),
                // Column B: odd-index slides + last (closing slide pushed right to balance).
                images.filter((_, i) => i % 2 === 1 || i === images.length - 1)
                       .filter((v, i, a) => a.indexOf(v) === i),
              ].map((col, ci) => (
                <div key={ci} className="space-y-6">
                  {col.map((img) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => onZoom(`${basePath}/${img}`)}
                      className="block w-full bg-surface-container border border-outline-variant hover:border-primary/40 overflow-hidden cursor-zoom-in transition-all duration-500 group transform-gpu hover:scale-[1.01]"
                      aria-label="Zoom image"
                    >
                      <img
                        src={`${basePath}/${img}`}
                        alt=""
                        loading="lazy"
                        className="w-full h-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity duration-500 bg-white"
                      />
                    </button>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {images.map((img) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => onZoom(`${basePath}/${img}`)}
                  className="block bg-surface-container border border-outline-variant hover:border-primary/40 overflow-hidden cursor-zoom-in transition-all duration-500 group transform-gpu hover:scale-[1.02]"
                  style={{ aspectRatio: "4 / 3" }}
                  aria-label="Zoom image"
                >
                  <img
                    src={`${basePath}/${img}`}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </button>
              ))}
            </div>
          )
        )}

        {/* Video placeholder + key points */}
        {noVideo ? (
          <div>
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-4">// Key points</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {points.map((pt) => (
                <li key={pt} className="text-sm text-on-surface-variant font-light leading-relaxed flex gap-2">
                  <span className="text-primary">·</span>{pt}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              {videoId ? (
                <div className="aspect-video bg-surface-container-high border border-outline-variant overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="aspect-video bg-background border border-outline-variant flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-primary/30 blur-[120px] rounded-full"></div>
                  </div>
                  <span className="material-symbols-outlined text-primary text-[64px] mb-4 relative">play_circle</span>
                  <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase relative">
                    [ VIDEO_WALKTHROUGH // COMING_SOON ]
                  </p>
                  <p className="font-body text-xs text-on-surface-variant mt-2 relative">
                    Process reel for {title.toLowerCase().replace(/\.$/, "")} drops here.
                  </p>
                </div>
              )}
            </div>
            <div className="lg:col-span-5">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-4">// Key points</p>
              <ul className="space-y-3">
                {points.map((pt) => (
                  <li key={pt} className="text-sm text-on-surface-variant font-light leading-relaxed flex gap-2">
                    <span className="text-primary">·</span>{pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// All zoomable images across sections (paths relative to /).
const ALL_PICS = [
  "images/digital-conversion/dc_07.jpg",
  ...["omr_01.jpg","omr_02.jpg","omr_03.jpg"].map(f => `images/digital-conversion/omr/${f}`),
  "images/digital-conversion/dc_03.jpg",
  ...["med_04.jpg","med_05.jpg","med_07.jpg","med_08.jpg"].map(f => `images/digital-conversion/med/${f}`),
  "images/digital-conversion/dc_04.jpg",
  ...["books_01.jpg","books_02.jpg"].map(f => `images/digital-conversion/books/${f}`),
  "images/digital-conversion/dc_05.jpg",
  ...["palm_01.jpg","palm_02.jpg","palm_03.jpg","palm_04.jpg","palm_05.jpg","palm_06.jpg","palm_07.jpg","palm_08.jpg"].map(f => `images/digital-conversion/palm/${f}`),
  "images/digital-conversion/dc_06.png",
  "images/digital-conversion/dc_02.jpg",
  "images/digital-conversion/dc_09.jpg",
];

export default function DigitalConversion() {
  const [zoomOpen, setZoomOpen] = useState(false);
  const [zoomInitial, setZoomInitial] = useState(null);
  const onZoom = (src) => { setZoomInitial(src.replace(/^\//, "")); setZoomOpen(true); };
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">

      <SiteHeader />

      <main className="pt-32">

        {/* ── HERO ──────────────────────────────────────── */}
        <header className="px-8 mb-16 max-w-7xl mx-auto">
          <div className="border-b border-outline-variant pb-12">
            <span className="font-label text-primary text-sm tracking-[0.3em] uppercase block mb-4">
              SERVICE // PHYSICAL → DIGITAL
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase">
              Digital <span className="text-primary">Conversion</span>.
            </h1>
            <p className="mt-8 text-on-surface-variant font-light leading-relaxed max-w-2xl text-lg">
              Books, documents, microfilm, palm scripts, photographs and
              physical objects — converted into searchable, archivable,
              shareable digital formats. Experienced personnel, time-tested
              procedures, careful asset handling.
            </p>
          </div>
        </header>

        {/* ── SECTION INDEX (visual flashcards) ──────── */}
        <section className="px-8 mb-20 max-w-7xl mx-auto">
          <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-4">
            [ ON THIS PAGE ]
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {INDEX.map((i, idx) => (
              <a
                key={i.id}
                href={`#${i.id}`}
                className="block bg-surface-container border border-outline-variant hover:border-primary/40 hover:bg-surface-container-high transition-all group overflow-hidden"
              >
                <div className="bg-surface-container-high overflow-hidden" style={{ aspectRatio: "3 / 4" }}>
                  <img
                    src={i.flashcard}
                    alt={i.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-500"
                  />
                </div>
                <div className="p-3">
                  <p className="font-label text-[9px] tracking-[0.3em] text-primary uppercase mb-1">
                    0{idx + 1}
                  </p>
                  <p className="font-headline text-xs font-bold uppercase tracking-tight text-on-surface group-hover:text-primary transition-colors leading-tight">
                    {i.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── PROMISE STRIP ────────────────────────────── */}
        <section className="bg-surface-container-lowest py-20 border-y border-outline-variant">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {PROMISE.map((p) => (
              <div key={p.title} className="bg-surface-container border border-outline-variant p-7">
                <span className="material-symbols-outlined text-primary text-3xl mb-3 block">{p.icon}</span>
                <h3 className="font-headline font-bold text-base uppercase tracking-tight mb-2">{p.title}</h3>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 01 · PALM SCRIPTS ────────────────────── */}
        <ServiceSection
          id="palm"
          kicker="[ 01 // PALM_SCRIPTS ]"
          title="Palm-Leaf Manuscripts."
          subtitle="Conservation · Heritage · Non-Destructive"
          flashcard="/images/digital-conversion/dc_05.jpg"
          onZoom={onZoom}
          videoId="sY_PCsHZ5iU"
          verticalImages
          basePath="/images/digital-conversion/palm"
          images={["palm_01.jpg","palm_02.jpg","palm_03.jpg","palm_04.jpg","palm_05.jpg","palm_06.jpg","palm_07.jpg","palm_08.jpg"]}
          intro={[
            "Palm-leaf manuscripts (palm scripts) are among the most fragile artefacts a library can hold. We capture them with conservation-grade overhead equipment — no contact, no flex, no tape — preserving the physical object while delivering high-resolution digital records.",
            "Where the script is legible enough, we add an OCR pass tuned to the language and shape; where it isn't, we deliver the high-fidelity master image so a human scholar can transcribe later. Either way, the manuscript leaves the way it came in.",
          ]}
          points={[
            "Conservation-grade overhead capture · zero contact pressure.",
            "Climate-controlled handling area · gloved personnel.",
            "Per-leaf metadata · script-direction aware processing.",
            "OCR pass where legible · master-image preservation always.",
            "Multi-language tuning · regional script profiles supported.",
          ]}
        />

        {/* ── 02 · BOOKS / LIBRARY ─────────────────── */}
        <ServiceSection
          id="books"
          kicker="[ 02 // LIBRARY_BOOKS ]"
          title="Library Books."
          subtitle="Bound · Fragile · Full-Catalog"
          alt
          flashcard="/images/digital-conversion/dc_04.jpg"
          onZoom={onZoom}
          noVideo
          fullWidthImages
          basePath="/images/digital-conversion/books"
          images={["books_01.jpg","books_02.jpg"]}
          intro={[
            "Whole-collection library digitisation. Bound book scanners with edge capture preserve the spine without splitting; fragile or rare titles run on overhead readers that capture without flexing the binding.",
            "Workflow: cleaning → naming-convention rollout → digitisation → page enhancement (crop, rotate, contrast) → PDF assembly with metadata, bookmarks and OCR. Delivered on hard drive or DVD with a folder structure mirrored to the library catalog.",
          ]}
          points={[
            "Edge-scanner for healthy bound books · flat orthography capture.",
            "Overhead capture for fragile / rare books · minimal handling.",
            "Per-book naming convention agreed with the library upfront.",
            "OCR pass · searchable PDF · bookmarks · catalog metadata.",
            "Low-res web-portable derivatives alongside archive masters.",
            "Capacity to process more than 40,000 images daily.",
          ]}
        />

        {/* ── 03 · HOSPITAL RECORDS ────────────────── */}
        <ServiceSection
          id="med"
          kicker="[ 03 // HOSPITAL_RECORDS ]"
          title="Hospital Records."
          subtitle="HIPAA-aware · Indexed · Secure"
          flashcard="/images/digital-conversion/dc_03.jpg"
          onZoom={onZoom}
          noVideo
          basePath="/images/digital-conversion/med"
          images={["med_04.jpg","med_05.jpg","med_07.jpg","med_08.jpg"]}
          intro={[
            "Patient charts, lab reports, imaging summaries and historical paper files digitised with privacy-first handling. Secure facility, signed handlers, chain-of-custody from pickup to archive.",
            "Output is indexed against your patient ID schema and retention policy — searchable on demand, with redaction support for shared copies.",
          ]}
          points={[
            "Patient ID indexing · per-record metadata captured at scan time.",
            "Retention-policy aware · time-stamped digital chain of custody.",
            "HIPAA-aware handling · signed personnel · access logs.",
            "Optional OCR for searchable charts — clinical-typography tuned.",
            "Redaction utilities for sharing or research extracts.",
          ]}
        />

        {/* ── 04 · PHOTOS / NEGATIVES ──────────────── */}
        <ServiceSection
          id="photo"
          kicker="[ 04 // PHOTOS_AND_NEGATIVES ]"
          title="Photos · Negatives · Films."
          subtitle="Image Processing · Restoration"
          alt
          flashcard="/images/digital-conversion/dc_06.png"
          onZoom={onZoom}
          noVideo
          basePath="/images/digital-conversion/photo"
          images={[]}
          intro={[
            "Photo prints, photographic negatives and positive films scanned at archive resolution. Each image is colour-corrected, dust-cleaned and optimised to international standards — a clean master plus a derivative ready for sharing or print.",
            "Image-processing support from experienced operators using current capture and restoration tooling — useful when the original carries decades of fade, scratch or staining.",
          ]}
          points={[
            "Photo prints · negatives · positive film capture.",
            "Colour correction · dust + scratch cleanup · density balance.",
            "Archive-resolution master + access-resolution derivative.",
            "Restoration on request — fade recovery, tear repair, stain reduction.",
            "EXIF and per-image metadata preserved or applied.",
          ]}
        />

        {/* ── 05 · OMR ─────────────────────────────── */}
        <ServiceSection
          id="omr"
          kicker="[ 05 // OPTICAL_MARK_READING ]"
          title="Optical Mark Reading."
          subtitle="OMR · Form Reading · High-Throughput"
          flashcard="/images/digital-conversion/dc_07.jpg"
          onZoom={onZoom}
          noVideo
          basePath="/images/digital-conversion/omr"
          images={["omr_01.jpg","omr_02.jpg","omr_03.jpg"]}
          intro={[
            "OMR — the high-volume, fixed-template capture of marks (bubbles, ticks, multi-choice) into structured data. Exam sheets, surveys, ballots, registration forms — anywhere a mark on paper needs to become a row in a database, fast and audited.",
            "Captured on calibrated readers with edge-detection thresholds tuned to the form layout. Output: validated CSV / database rows — ready for grading, analysis, or downstream pipelines.",
          ]}
          points={[
            "Bubble-sheet exam capture · multi-choice, true/false, gradeable.",
            "Survey and questionnaire processing at thousands of pages a day.",
            "Form intake — registration, applications, voting.",
            "Per-form QA pass · misread flagging · re-scan on demand.",
            "Output: CSV, Excel, JSON, or direct database import.",
          ]}
        />

        {/* ── 06 · MISC / CAPABILITY ────────────────── */}
        <ServiceSection
          id="misc"
          kicker="[ 06 // CAPABILITY_AND_FACILITY ]"
          title="Facility, Volume, Trust."
          subtitle="Toronto · 1200+ sq ft · 40,000+ images / day"
          alt
          flashcard="/images/digital-conversion/dc_02.jpg"
          onZoom={onZoom}
          noVideo
          basePath="/images/digital-conversion/misc"
          images={[]}
          intro={[
            "Strategically located in Toronto, with skilled and qualified personnel, dedicated lease-line internet, structured cabling, secure 24-hour facility and ergonomically designed workstations. Digitisation solutions delivered to clients in the US, Canada, Europe, Middle East and Asia.",
            "Pricing is custom-quoted against quantity, complexity and turnaround. We assess each project, give you an honest scope, and only initiate work against a clear PO and an agreed advance. We prioritise client satisfaction over throughput.",
          ]}
          points={[
            "Toronto facility · 1200+ sq ft · 24-hour security · fire-alarmed.",
            "Capacity: 40,000+ images per day in active production.",
            "Ergonomic workstations · structured cabling · leased internet.",
            "Stringent privacy policy · international-standard compliance.",
            "Custom quotes per project · advance-payment initiation.",
            "Reference clients across BHEL Engineering, ICAI, Knowledge Works Global, and others.",
          ]}
        />

        {/* ── DELIVERY FORMATS ──────────────────────── */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
              [ DELIVERY // FORMATS ]
            </p>
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter leading-none uppercase">
              How it ships.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            {OUTPUTS.map((o) => (
              <div key={o} className="bg-surface-container border border-outline-variant p-4 text-sm text-on-surface-variant font-light flex gap-2">
                <span className="text-primary">·</span>{o}
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <section className="py-32 px-8 text-center bg-surface relative overflow-hidden border-t border-outline-variant">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/30 blur-[140px] rounded-full"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight text-headline uppercase">
              Got a shelf<br />that needs digitising?
            </h2>
            <p className="text-on-surface-variant max-w-md mx-auto mb-10 font-light">
              Quotes scoped to volume, source format, fragility and delivery
              spec. Pickup, on-site, or shipped — whichever protects the asset.
            </p>
            <a href="mailto:nanda@nmediaservices.com" className="nm-btn-primary inline-block font-label uppercase px-12 py-5 font-bold text-sm tracking-widest">
              Request a Quote →
            </a>
          </div>
        </section>

        <SiteFooter />
      </main>

      <PicsModal
        open={zoomOpen}
        onClose={() => setZoomOpen(false)}
        pics={ALL_PICS}
        basePath=""
        title="Digital Conversion · Gallery"
        initialZoom={zoomInitial}
      />
    </div>
  );
}

const INDEX = [
  { id: "palm",  title: "Palm Scripts",        flashcard: "/images/digital-conversion/dc_05.jpg" },
  { id: "books", title: "Library Books",       flashcard: "/images/digital-conversion/dc_04.jpg" },
  { id: "med",   title: "Hospital Records",    flashcard: "/images/digital-conversion/dc_03.jpg" },
  { id: "photo", title: "Photos & Negatives",  flashcard: "/images/digital-conversion/dc_06.png" },
  { id: "omr",   title: "OMR",                 flashcard: "/images/digital-conversion/dc_07.jpg" },
];

const PROMISE = [
  { icon: "verified",          title: "Experienced Personnel",  body: "Time-tested procedures handle each format correctly — fragile, oversized, photo-sensitive or rare." },
  { icon: "tune",              title: "Built To Your Spec",      body: "Tasks scoped to your needs, budget and schedule — not a one-size-fits-all conveyor belt." },
  { icon: "shield",            title: "Asset-Safe Process",      body: "Production process designed for the utmost safety in handling your originals — never destructive unless you ask." },
  { icon: "workspace_premium", title: "Quality + Accuracy",      body: "Reasonable budget, audited output. Re-scans on demand. QA is part of the price, not an upsell." },
];

const OUTPUTS = [
  "Searchable PDF (image + text)",
  "Image-only PDF",
  "Vector PDF",
  "Normal PDF",
  "Hyperlinks · bookmarks",
  "Document info fields",
  "Catalog searching",
  "Books → PDF",
  "Paper → PDF",
  "Microfilm → PDF",
  "TIFF · JPEG · GIF · PNG",
  "EPUB / e-book",
  "OCR text export",
  "MS Word (with notice)",
  "3D mesh · slicer-ready",
  "Custom on request",
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
        <p className="text-xs text-on-surface-variant font-label">© Nmedia Inc. · Digital Conversion Services</p>
      </div>
    </footer>
  );
}
