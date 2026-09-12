import React from "react";
import { Link } from "react-router-dom";

/**
 * SiteHeader — canonical top banner used on every page.
 *
 * Matches the homepage nav: logo + "Nmedia Services" wordmark on
 * the left, mailto link on the right. Centered, fixed, with a soft
 * orange-tinted bottom border.
 */
export default function SiteHeader() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-6 max-w-[1440px] left-1/2 -translate-x-1/2 z-50 bg-background/85 backdrop-blur-md border-b border-primary/30">
      <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <img
          alt="Nmedia Services Logo"
          className="nm-logo w-auto object-contain h-10"
          src="https://stockflow.media/assets/Nmedia_logo.png"
        />
        <div className="font-['Space_Grotesk'] font-bold text-xl tracking-tighter text-on-surface">
          Nmedia Services
        </div>
      </Link>
      <a
        className="font-['Space_Grotesk'] tracking-tighter text-sm text-on-surface-variant hover:text-primary transition-colors duration-300 hidden md:inline-block"
        href="mailto:Nanda@nmediaservices.com"
      >
        Nanda@nmediaservices.com
      </a>
    </nav>
  );
}
