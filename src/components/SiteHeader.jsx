import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

/**
 * SiteHeader — canonical top banner used on every page.
 *
 * Matches the homepage nav: logo + "Nmedia Services" wordmark on
 * the left, GitHub + mailto on the right. Centered, fixed, with a
 * soft orange-tinted bottom border.
 *
 * Every subpage renders this, so the GitHub link here is what
 * guarantees one on every page of the site.
 */
export default function SiteHeader() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-6 max-w-[1440px] left-1/2 -translate-x-1/2 z-50 bg-background/85 backdrop-blur-md border-b border-primary/30">
      <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <img
          alt="Nmedia Services Logo"
          className="nm-logo w-auto object-contain h-10"
          src="/images/nmedia_mark.svg"
        />
        <div className="font-['Space_Grotesk'] font-bold text-xl tracking-tighter text-on-surface">
          Nmedia Services
        </div>
      </Link>
      <div className="flex items-center gap-6">
        <SocialLinks />
        <a
          className="font-['Space_Grotesk'] tracking-tighter text-sm text-on-surface-variant hover:text-primary transition-colors duration-300 hidden md:inline-block"
          href="mailto:Nanda@nmediaservices.com"
        >
          Nanda@nmediaservices.com
        </a>
      </div>
    </nav>
  );
}
