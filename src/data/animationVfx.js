/**
 * Animation / VFX credit reel — single source of truth for the
 * /animation-vfx page and the homepage ShowreelStrip.
 *
 * These are the broadcast and feature credits, so the cards lead with the
 * property name rather than a description. The brand is the proof.
 *
 * Fields:
 *   id       YouTube video id
 *   title    full display title — used by VideoGrid on the reel page
 *   tag      short category label — used by the homepage strip
 *   headline short card headline — used by the homepage strip
 */

export const ANIM_VIDEOS = [
  { id: "169jD2LiH1A", title: "Paw Patrol · Jet to the Rescue, Paramount Trailer",
    tag: "Paramount",    headline: "Paw Patrol: Jet to the Rescue" },
  { id: "2HMbcoV25ss", title: "Tinker Bell (2008) · Disney Trailer",
    tag: "Disney",       headline: "Tinker Bell" },
  { id: "Evwn1oDgiRU", title: "Puppy Dog Pals · Disney Kids",
    tag: "Disney Kids",  headline: "Puppy Dog Pals" },
  { id: "0c4cQUmFbCE", title: "Paw Patrol · Big Movie Special",
    tag: "Feature",      headline: "Paw Patrol: Big Movie" },
  { id: "21LEzxC2lac", title: "Paw Patrol · Series",
    tag: "Series",       headline: "Paw Patrol" },
  { id: "CTneVWp_NNM", title: "Butterfly Tale · Trailer",
    tag: "Feature",      headline: "Butterfly Tale" },
  { id: "5xitBfO2Ln8", title: "Lego Thor · Marvel",
    tag: "Lego · Marvel", headline: "Lego Thor" },
  { id: "bnsQG2SzHsw", title: "Nickelodeon · Ready Set Dance",
    tag: "Nickelodeon",  headline: "Ready Set Dance" },
  { id: "Cn1JWvVQK3c", title: "Weather Hunters",
    tag: "Series",       headline: "Weather Hunters" },
  { id: "2B6NC1PTMkc", title: "Laidback Lama · NFT Animation",
    tag: "Original",     headline: "Laidback Lama" },
  { id: "v-DrUY9hPRk", title: "Animation Demo Reel · v03",
    tag: "Demo Reel",    headline: "Animation Reel v03" },
  { id: "CHC2yiJ520g", title: "Animation Demo Reel · v04",
    tag: "Demo Reel",    headline: "Animation Reel v04" },
  { id: "sbk-vX8oRyI", title: "Animation Demo Reel · v04 (alt)",
    tag: "Demo Reel",    headline: "Animation Reel v04, Alt Cut" },
  { id: "JRHyRJgZVZ0", title: "Animator Playblast",
    tag: "Process",      headline: "Animator Playblast" },
];
