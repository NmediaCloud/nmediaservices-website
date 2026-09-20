import React from "react";
import { GitHubMark } from "./GitHubLink";

/**
 * SoftwareGrid — the in-house tool collection, rendered as one uniform
 * grid on the homepage. Adding a tool is one entry in TOOLS.
 *
 * Status is literal, and worth keeping that way:
 *   "Live"             a stranger can use it today
 *   "Open source"      the code is public under a permissive licence
 *   "Source available" the code is public; use beyond personal needs asking
 *   "In progress"      real and running, but still moving
 *   "In-house"         it ships work but is not published
 *
 * Stockflow leads the section as its own card on the homepage (it carries
 * a video), so it is deliberately not repeated here.
 *
 * Cards render a thumbnail if `image` is set, an icon panel otherwise.
 */
const TOOLS = [
  {
    name: "CreativeFlow",
    tag: "Campaign automation",
    status: "Open source",
    icon: "auto_awesome_mosaic",
    image: "/images/creativeflow.webp",
    body:
      "One campaign brief in; on-brand, localized ad creatives in every aspect ratio out, " +
      "reusing the assets you already own and generating only what is missing.",
    href: "/articles/CreativeFlow.html",
    cta: "Read the write-up",
    repo: "https://github.com/NmediaCloud/creativeflow",
  },
  {
    name: "Tholkappiyar · Thirty-Nine Shots",
    tag: "Recent project · AI performance",
    status: "In-house",
    icon: "movie",
    image: "/articles/images/shotstudio_closeup.jpg",
    body:
      "An ancient Tamil grammarian takes the stage at a Canadian conference. Thirty-nine " +
      "shots and eighteen recorded speeches, with Tamil lip sync, directed from one " +
      "production desk.",
    href: "/articles/ShotStudio.html",
    cta: "Read the write-up",
  },
  {
    name: "MiroFish",
    tag: "Audience simulator",
    status: "In-house",
    icon: "diversity_3",
    image: "/images/cards/mirofish.svg",
    body:
      "A million synthetic viewers test-screen your pitch in twelve minutes, " +
      "demographic-weighted, opinion-bearing, and brutally honest about what does not land.",
    href: "/articles/MiroFish.html",
    cta: "Read the write-up",
  },
  {
    name: "Marketplace Listing Assistant",
    tag: "Vision + automation",
    status: "Source available",
    icon: "sell",
    image: "/images/cards/marketplace-listing-assistant.svg",
    body:
      "Photographs in, marketplace listings out. Identifies the product, researches it, " +
      "recommends a price and writes the copy, then a local agent pre-fills the forms on " +
      "Kijiji, Facebook Marketplace and Karrot and stops before Publish.",
    href: "https://github.com/NmediaCloud/marketplace-listing-assistant",
    cta: "View the source",
  },
  {
    name: "FX Strategy Research Platform",
    tag: "Quantitative research",
    status: "Source available",
    icon: "query_stats",
    image: "/images/cards/fx-strategy-research.svg",
    body:
      "A validated harness for one question, answered honestly: is this a favourable moment to " +
      "act? Nineteen ideas screened across six asset classes, each measured against its costs, " +
      "so capital waits for a setup that earns the green light.",
    href: "/articles/FX_Strategy_Research.html",
    repo: "https://github.com/NmediaCloud/fx-strategy-research",
    cta: "Read the write-up",
  },
  {
    name: "Smart Mirror Backup",
    tag: "Utility · Zero dependencies",
    status: "Source available",
    icon: "sync_saved_locally",
    image: "/images/cards/smart-mirror-backup.svg",
    body:
      "Mirror-backup for Windows with a GUI and a full CLI, in pure Python standard library, " +
      "no pip, no virtualenv, so it runs on a locked-down or offline machine. Deep-verify " +
      "hashing, dry-run first, named profiles.",
    href: "/articles/Smart_Mirror_Backup.html",
    repo: "https://github.com/NmediaCloud/smart-mirror-backup",
    cta: "Read the write-up",
  },
];

function ToolCard({ tool }) {
  const external = tool.href.startsWith("http") || tool.href.endsWith(".html");
  return (
    <article className="bg-surface-container border border-outline-variant hover:border-primary/40 transition-all duration-300 group overflow-hidden flex flex-col">
      {/* The artwork is the biggest target on the card, so it links where the
          card's own call to action does rather than sitting there inert. */}
      <a
        href={tool.href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        aria-label={`${tool.name}: ${tool.cta}`}
        className="block"
      >
        {tool.image ? (
          <div className="relative w-full bg-surface-container-high overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
            <img src={tool.image} alt={tool.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-[1.02] transition-all duration-500" />
          </div>
        ) : (
          <div className="w-full bg-surface-container-high flex items-center justify-center group-hover:bg-surface-container transition-colors" style={{ aspectRatio: "16 / 9" }}>
            <span className="material-symbols-outlined text-primary" style={{ fontSize: "48px" }}>
              {tool.icon}
            </span>
          </div>
        )}
      </a>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <p className="font-label text-[10px] tracking-[0.25em] uppercase text-primary leading-tight">
            {tool.tag}
          </p>
          <span className="inline-block border border-outline-variant px-2 py-0.5 font-label text-[9px] tracking-widest uppercase text-on-surface-variant shrink-0">
            {tool.status}
          </span>
        </div>

        <h4 className="font-headline text-lg font-bold mb-2 text-title">
          <a
            href={tool.href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="hover:text-primary transition-colors"
          >
            {tool.name}
          </a>
        </h4>
        <p className="font-body text-sm text-on-surface-variant leading-relaxed flex-1">{tool.body}</p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4">
          <a
            href={tool.href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex items-center gap-2 font-label text-[10px] tracking-[0.3em] uppercase text-primary hover:gap-3 transition-all"
          >
            {tool.cta}
            <span className="material-symbols-outlined text-base">arrow_outward</span>
          </a>
          {tool.repo && tool.repo !== tool.href && (
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

export default function SoftwareGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {TOOLS.map((t) => (
        <ToolCard key={t.name} tool={t} />
      ))}
    </div>
  );
}
