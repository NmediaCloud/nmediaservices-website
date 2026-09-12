import React, { useState } from "react";

/**
 * VideoGrid — responsive grid of click-to-play YouTube tiles.
 *
 * Props:
 *   videos: [{ id, title }]   YouTube video IDs + display titles
 *   cols:   2 | 3 (default 2) Number of columns at lg+ breakpoint
 *
 * Each tile renders the YouTube `hqdefault.jpg` thumbnail until
 * clicked, then swaps to a real iframe (lite-youtube pattern).
 * Keeps initial page weight low even with 25+ embeds.
 */
export default function VideoGrid({ videos, cols = 2 }) {
  const colClass = cols === 3
    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    : "grid-cols-1 md:grid-cols-2";
  return (
    <div className={`grid ${colClass} gap-4`}>
      {videos.map((v) => <VideoTile key={v.id} video={v} />)}
    </div>
  );
}

function VideoTile({ video }) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <div className="relative aspect-video bg-surface-container border border-outline-variant overflow-hidden shadow-xl">
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      className="group relative aspect-video bg-surface-container border border-outline-variant hover:border-primary/40 overflow-hidden text-left transition-all"
    >
      <img
        src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
        alt={video.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="w-16 h-16 rounded-full bg-white/65 backdrop-blur-sm ring-2 ring-primary/60 group-hover:bg-white group-hover:ring-primary flex items-center justify-center group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-primary transition-transform text-3xl ml-1">play_arrow</span>
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="font-headline text-sm md:text-base text-on-surface font-bold leading-tight line-clamp-2">
          {video.title}
        </p>
      </div>
    </button>
  );
}
