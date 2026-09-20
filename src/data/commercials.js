/**
 * Commercials video data — single source of truth for the /commercials
 * portfolio page and the homepage ShowreelStrip instances.
 *
 * Auto-extracted from the two YouTube playlists referenced on the legacy
 * Wix Commercials page. (regenerable: see docs in HANDOVER.md)
 *
 * Fields:
 *   id       YouTube video id
 *   title    full display title — used by VideoGrid on the portfolio page
 *   tag      short category label — used by the homepage strip
 *   headline short card headline — used by the homepage strip
 */

export const PLAYLIST_FB     = "PLee8tHW01hSOeY10Pe4P3rr9o1Xgnoq18";
export const PLAYLIST_BIOMED = "PLee8tHW01hSNpJUqfVfYrkWIPe85ksY4v";

export const FB_VIDEOS = [
  { id: "lCslscd4DMM", title: "Ad commercials · Visual Trust & Clarity",
    tag: "Ad Commercial",    headline: "Visual Trust & Clarity" },
  { id: "iPRsQSYeMuM", title: "Ad commercials · Visual Trust & Clarity (alt cut)",
    tag: "Ad Commercial",    headline: "Visual Trust & Clarity, Alt Cut" },
  { id: "OVmfQTDJUUI", title: "Powering Financial Institutions with Visual Trust & Clarity",
    tag: "Finance",          headline: "Powering Financial Institutions" },
  { id: "iF7iSkC9RSo", title: "The Martian Robot · Depreciative Savings Scheme — Animated VFX Ad",
    tag: "Animated VFX Ad",  headline: "The Martian Robot" },
  { id: "jWHqDxd_T7c", title: "3D Animated Commercial Production — Banking",
    tag: "Banking",          headline: "3D Animated Commercial" },
  { id: "eusKt9p1nJU", title: "Cooking Trailer Previsuals",
    tag: "Previs · Trailer", headline: "Cooking Trailer Previsuals" },
  { id: "X0iTBt7sExA", title: "3D Game Trailer Previsuals",
    tag: "Previs · Game",    headline: "3D Game Trailer" },
  { id: "RFV0U1Usv10", title: "Pervis Promo · Culinary Title Concept",
    tag: "Title Concept",    headline: "Culinary Title Sequence" },
  { id: "jGnZJu6tAlc", title: "Restaurant Promo · Short — 3D Animated, Cinematic 3D",
    tag: "Restaurant Promo", headline: "Cinematic 3D Short" },
  { id: "6oIGo579VAI", title: "Restaurant Promo · Bringing Ideas to Life — Cinematic 3D",
    tag: "Restaurant Promo", headline: "Bringing Ideas to Life" },
  { id: "_TBdjQUnw28", title: "Motion Graphics · Visual Storytelling",
    tag: "Motion Graphics",  headline: "Visual Storytelling" },
  { id: "g2U088jnNZk", title: "Epic Trailer V3 · Pervis Visualization — 3D Game / Animation / Movies",
    tag: "Epic Trailer",     headline: "Pervis Visualization V3" },
];

export const BIOMED_VIDEOS = [
  { id: "bp_OY_HU7tI", title: "01 · 3D Medical Animation Explainer Media",
    tag: "Medical Animation", headline: "3D Medical Explainer" },
  { id: "D5Qu7auYzTw", title: "02 · Microscopic Biological Science · Underwater Visualization",
    tag: "BioMedical",        headline: "Underwater Microscopy" },
  { id: "dD8pYOd1WoU", title: "03 · Microscopic Biological Science Visualization",
    tag: "BioMedical",        headline: "Microscopic Science · 03" },
  { id: "soY--V7Z1mQ", title: "04 · Journey Into the Microscopic World — 3D Biology Animation",
    tag: "3D Biology",        headline: "Journey Into the Microscopic World" },
  { id: "mpVdxyxRtHM", title: "05 · Microscopic Biological Science Visualization",
    tag: "BioMedical",        headline: "Microscopic Science · 05" },
  { id: "WPmF9wP1ORg", title: "06 · Microscopic Biological Science Visualization",
    tag: "BioMedical",        headline: "Microscopic Science · 06" },
  { id: "b_lw8r6ykkk", title: "07 · Visualization & Explainer Media",
    tag: "Explainer",         headline: "Visualization & Explainer Media" },
  { id: "0NCcFMX9z0I", title: "08 · Microscopic Biological Science Visualization",
    tag: "BioMedical",        headline: "Microscopic Science · 08" },
  { id: "YLTT6H2sPsw", title: "09 · Microscopic Biological Science Visualization",
    tag: "BioMedical",        headline: "Microscopic Science · 09" },
  { id: "EdHxp6LnQyw", title: "10 · Microscopic Biological Science Visualization",
    tag: "BioMedical",        headline: "Microscopic Science · 10" },
  { id: "9KCEFECvkTA", title: "11 · Microscopic Biological Science Visualization",
    tag: "BioMedical",        headline: "Microscopic Science · 11" },
  { id: "wRAa9Qx586w", title: "12 · Microscopic Biological Science Visualization",
    tag: "BioMedical",        headline: "Microscopic Science · 12" },
  { id: "KPvdSZJC9c4", title: "13 · Microscopic Biological Science Visualization",
    tag: "BioMedical",        headline: "Microscopic Science · 13" },
  { id: "rOwt0Q7HwRY", title: "14 · Microscopic Biological Science Visualization",
    tag: "BioMedical",        headline: "Microscopic Science · 14" },
  { id: "FtRUkCvWiHA", title: "15 · Microscopic Biological Science Visualization",
    tag: "BioMedical",        headline: "Microscopic Science · 15" },
];

/** Everything, in strip order: ads and trailers first, then the science reel. */
export const ALL_SHOWREEL = [...FB_VIDEOS, ...BIOMED_VIDEOS];
