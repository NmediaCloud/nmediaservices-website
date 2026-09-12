import React from "react";
import SiteHeader from "../components/SiteHeader";
import { SiteFooter } from "./IPSeries";
import { GITHUB_URL, GitHubMark } from "../components/GitHubLink";

/**
 * Software — index of the tools built in-house.
 *
 * Adding a tool is one entry in TOOLS below. Keep `status` honest: "Live"
 * means a stranger can use it today, "Open source" means the code is public,
 * "In-house" means it exists and ships work but is not published.
 */
export default function Software() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">
      <SiteHeader />

      <main className="pt-32 pb-24">
        {/* ── HERO ──────────────────────────────────────── */}
        <header className="px-8 mb-20 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-outline-variant pb-12">
            <div className="space-y-4">
              <p className="font-label text-primary text-sm tracking-[0.3em] uppercase">
                [ SOFTWARE // BUILT_IN_HOUSE ]
              </p>
              <h1 className="text-4xl md:text-7xl font-black font-headline leading-[0.9] tracking-tighter max-w-4xl uppercase">
                The Software
              </h1>
              <p className="text-on-surface-variant font-light leading-relaxed max-w-2xl text-lg pt-2">
                Tools built to solve a real production problem, then hardened
                until someone other than their author could run them. Some are
                open source, some ship client work quietly.
              </p>
            </div>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nm-btn-secondary inline-flex items-center gap-2.5 px-5 py-3 font-label text-[11px] tracking-[0.2em] uppercase font-bold shrink-0"
            >
              <GitHubMark className="w-[18px] h-[18px]" />
              All repositories
              <span className="material-symbols-outlined text-base">arrow_outward</span>
            </a>
          </div>
        </header>

        {/* ── GRID ──────────────────────────────────────── */}
        <section className="px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TOOLS.map((t) => (
              <ToolCard key={t.name} tool={t} />
            ))}
          </div>
        </section>

        {/* ── IN THE WORKS — renders only when there is something ── */}
        {UPCOMING.length > 0 && (
        <section className="px-8 max-w-7xl mx-auto mt-20">
          <div className="border-t border-outline-variant pt-12">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
              [ IN_THE_WORKS ]
            </p>
            <h2 className="font-headline text-2xl md:text-3xl font-bold tracking-tight uppercase mb-6">
              Being written up next.
            </h2>
            <div className="flex flex-wrap gap-2">
              {UPCOMING.map((u) => (
                <span
                  key={u}
                  className="inline-block border border-outline-variant bg-surface-container px-3 py-2 font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant"
                >
                  {u}
                </span>
              ))}
            </div>
          </div>
        </section>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}

function ToolCard({ tool }) {
  const external = tool.href.startsWith("http") || tool.href.endsWith(".html");
  return (
    <article className="bg-surface-container border border-outline-variant hover:border-primary/30 transition-all duration-300 group overflow-hidden flex flex-col">
      {tool.image ? (
        <div className="relative w-full bg-surface-container-high overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
          <img
            src={tool.image}
            alt={tool.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
          />
        </div>
      ) : (
        <div className="w-full bg-surface-container-high flex items-center justify-center" style={{ aspectRatio: "16 / 9" }}>
          <span className="material-symbols-outlined text-primary" style={{ fontSize: "56px" }}>
            {tool.icon}
          </span>
        </div>
      )}

      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4 mb-3">
          <p className="font-label text-[10px] tracking-[0.3em] uppercase text-primary">{tool.tag}</p>
          <span className="inline-block border border-outline-variant px-2 py-0.5 font-label text-[9px] tracking-widest uppercase text-on-surface-variant shrink-0">
            {tool.status}
          </span>
        </div>

        <h3 className="font-headline text-xl font-bold mb-2 text-title">{tool.name}</h3>
        <p className="font-body text-sm text-on-surface-variant leading-relaxed flex-1">{tool.body}</p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-5">
          <a
            href={tool.href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex items-center gap-2 font-label text-[10px] tracking-[0.3em] uppercase text-primary hover:gap-3 transition-all"
          >
            {tool.cta}
            <span className="material-symbols-outlined text-base">arrow_outward</span>
          </a>
          {tool.repo && (
            <a
              href={tool.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-label text-[10px] tracking-[0.3em] uppercase text-on-surface-variant hover:text-primary transition-colors"
            >
              <GitHubMark className="w-[14px] h-[14px]" />
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────────
// Published tools. Status is literal — see the note at the top.
// ─────────────────────────────────────────────────────────────────
const TOOLS = [
  {
    name: "Stockflow.Media",
    tag: "Platform · Live",
    status: "Live",
    icon: "inventory_2",
    body:
      "A content platform shipping 15,000+ royalty-free 8K stills and 4K clips, " +
      "with automated delivery pipelines behind it. A hosted MCP server exposes the " +
      "whole catalogue to AI assistants — searchable from inside Claude Code, Cursor " +
      "or Codex without installing anything.",
    href: "https://stockflow.media/",
    cta: "Visit platform",
    repo: "https://github.com/NmediaCloud/stockflow-mcp",
  },
  {
    name: "CreativeFlow",
    tag: "Campaign automation · Open source",
    status: "Open source",
    icon: "auto_awesome_mosaic",
    image: "/images/creativeflow.png",
    body:
      "One campaign brief in; on-brand, localized ad creatives in every aspect ratio out — " +
      "reusing the assets you already own and generating only what is missing. Runs on a " +
      "clean checkout with no API key: the default provider renders offline.",
    href: "/articles/CreativeFlow.html",
    cta: "Read the write-up",
    repo: "https://github.com/NmediaCloud/creativeflow",
  },
  {
    name: "Marketplace Listing Assistant",
    tag: "Vision + automation · Source-available",
    status: "Source available",
    icon: "sell",
    body:
      "Photographs in, marketplace listings out. Identifies the product, researches it, " +
      "compares existing listings, recommends a price and writes the copy — then a local " +
      "Playwright agent pre-fills the forms on Kijiji, Facebook Marketplace and Karrot " +
      "and stops before Publish. The final submission stays a human action.",
    href: "https://github.com/NmediaCloud/marketplace-listing-assistant",
    cta: "View the source",
    repo: "https://github.com/NmediaCloud/marketplace-listing-assistant",
  },
  {
    name: "PDF Scripts Toolkit",
    tag: "Digitisation · Source-available",
    status: "Source available",
    icon: "document_scanner",
    body:
      "Scanned book pages to searchable PDF — image adjustment, smart cropping, " +
      "images-to-PDF and OCR, plus a vision-language transcription pass for Sanskrit. " +
      "Built for Tamil, Hindi and Sanskrit printed matter. Each stage is a " +
      "self-contained script; nothing to build.",
    href: "https://github.com/NmediaCloud/pdf-scripts-toolkit",
    cta: "View the source",
    repo: "https://github.com/NmediaCloud/pdf-scripts-toolkit",
  },
  {
    name: "FX Strategy Research Platform",
    tag: "Quant research · Source-available",
    status: "Source available",
    icon: "query_stats",
    body:
      "A validated harness for one question, answered honestly: does this trading idea " +
      "have an edge? Seventeen research modules — factor scans, pair and lead-lag " +
      "analysis, regime census, cost accounting, a risk engine and a broker adapter. " +
      "Paper-first by default; the live path is gated behind two separate opt-ins.",
    href: "https://github.com/NmediaCloud/fx-strategy-research",
    cta: "View the source",
    repo: "https://github.com/NmediaCloud/fx-strategy-research",
  },
  {
    name: "UGC Pipeline",
    tag: "Video factory · Source-available",
    status: "In progress",
    icon: "autoplay",
    image: "/images/ugc_pipeline.png",
    body:
      "One spreadsheet row in, one finished UGC, ad or podcast video out. Nine " +
      "self-contained modules — script, TTS, lipsync, b-roll, title cards, overlay, " +
      "SFX, music, compositing — with a vision-graded QA pass. Still under active " +
      "development; published to be read.",
    href: "/articles/UGC_Pipeline.html",
    cta: "Read the write-up",
    repo: "https://github.com/NmediaCloud/ugc-tools",
  },
  {
    name: "Smart Mirror Backup",
    tag: "Utility · Source-available",
    status: "Source available",
    icon: "sync_saved_locally",
    body:
      "Mirror-backup for Windows with a GUI and a full CLI, written in pure Python " +
      "standard library — zero third-party dependencies, so it runs on a locked-down " +
      "or offline machine. Deep-verify hashing, dry-run first, named profiles.",
    href: "https://github.com/NmediaCloud/smart-mirror-backup",
    cta: "View the source",
    repo: "https://github.com/NmediaCloud/smart-mirror-backup",
  },
  {
    name: "MiroFish",
    tag: "Audience simulator · In-house",
    status: "In-house",
    icon: "diversity_3",
    body:
      "A million synthetic viewers test-screen your pitch in twelve minutes — " +
      "demographic-weighted, opinion-bearing, and brutally honest about what does not land.",
    href: "/articles/MiroFish.html",
    cta: "Read the write-up",
  },
];

// Named but not yet published. Real projects, not roadmap aspirations.
const UPCOMING = [];
