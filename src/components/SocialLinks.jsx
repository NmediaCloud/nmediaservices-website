import React from "react";
import { GITHUB_URL } from "./GitHubLink";

/**
 * SocialLinks — LinkedIn, YouTube and GitHub, in the footer's wording and
 * styling, reused in the site header so the two cannot drift apart.
 *
 * The GitHub entry is what guarantees a GitHub link on every page, which
 * SiteHeader previously provided through GitHubLink.
 */
export const LINKEDIN_URL = "https://www.linkedin.com/in/mnkmars/";
export const YOUTUBE_URL = "https://www.youtube.com/@nmediaservices2014";

const LINKS = [
  { label: "LinkedIn", href: LINKEDIN_URL },
  { label: "YouTube", href: YOUTUBE_URL },
  { label: "GitHub", href: GITHUB_URL },
];

export default function SocialLinks({ className = "", gap = "gap-6" }) {
  return (
    <div className={`flex items-center ${gap} ${className}`}>
      {LINKS.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-['Space_Grotesk'] text-[10px] tracking-widest uppercase text-on-surface-variant hover:text-primary underline underline-offset-4 decoration-1 hover:decoration-2 transition-all duration-300"
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}
