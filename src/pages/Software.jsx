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

        {/* ── IN THE WORKS ──────────────────────────────── */}
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
      "with automated delivery pipelines behind it. An MCP server exposes the whole " +
      "catalogue to AI assistants — searchable from inside Claude Code, Cursor or Codex.",
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
    name: "UGC Pipeline",
    tag: "Video factory · In-house",
    status: "In-house",
    icon: "autoplay",
    image: "/images/ugc_pipeline.png",
    body:
      "One spreadsheet row in, one finished UGC, ad or podcast video out. Vision-graded QA " +
      "throughout — the factory behind owned and paid social creative.",
    href: "/articles/UGC_Pipeline.html",
    cta: "Read the write-up",
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

// Named but not yet written up. Keep honest — these are real projects,
// not roadmap aspirations.
const UPCOMING = [
  "PDF Scripts Toolkit · Sanskrit VLM OCR",
  "Marketplace Listing Assistant",
  "Smart Mirror Backup",
  "FX Strategy Research Platform",
  "UGC Tools",
  "Text-to-Speech",
];
