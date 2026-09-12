import React from "react";

/** The single place the GitHub destination is defined. */
export const GITHUB_URL = "https://github.com/NmediaCloud";

export function GitHubMark({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.766 2.7 1.256 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.2.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

/**
 * GitHubLink — the canonical GitHub entry point, used in the header
 * of every page. Icon-only on narrow screens, icon + label above sm.
 */
export default function GitHubLink({ showLabel = true }) {
  return (
    <a
      href={GITHUB_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nmedia Services on GitHub"
      title="Nmedia Services on GitHub"
      className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors duration-300"
    >
      <GitHubMark className="w-[18px] h-[18px]" />
      {showLabel && (
        <span className="font-['Space_Grotesk'] tracking-tighter text-sm hidden sm:inline">
          GitHub
        </span>
      )}
    </a>
  );
}
