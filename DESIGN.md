# Design System: High-End Editorial Technicality

> **Palette: see [THEME.md](THEME.md).** The site migrated from dark mode to the
> Soft Executive Orange light palette. The structural principles below still hold;
> the colour rules marked **superseded** do not.

## 1. Overview & Creative North Star
**Creative North Star: The Digital Architect**

This design system is built to bridge the gap between high-precision engineering and avant-garde artistry. It moves beyond the traditional "template" look by favoring intentional asymmetry, massive typographic contrast, and a "less is more" philosophy that prizes whitespace as a functional element. 

While the source inspiration established a foundation of professional service, this system elevates that vibe into a cutting-edge dark-mode experience. We break the rigid grid through overlapping elements and a layering logic that mimics physical depth. The goal is to create a digital space that feels curated, premium, and motion-ready—where every pixel is intentional and every transition is fluid.

---

## 2. Colors
Our palette is a sophisticated interplay of deep charcoals, stark whites, and subtle metallic greys. It is designed to be high-contrast yet easy on the eyes, favoring tonal depth over vibrant hues.

### The "No-Line" Rule — SUPERSEDED
*Applied to dark mode only. On the light palette, 1px `#DDD6CF` hairlines are the
standard for cards, sections, forms and navigation — a 10%-opacity ghost line is
mathematically invisible on warm white. The original rule read:*

To maintain a high-end editorial feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must never be structural "lines." Instead, define logical breaks through background color shifts. For instance, a `surface-container-low` section should sit directly against the `background`, or a `surface-container-high` card should be placed on a `surface-container-low` section. The transition of tone is the only divider permitted.

### Surface Hierarchy & Nesting — CURRENT
Layering still drives hierarchy; the tiers are now light:
- **Canvas (`#FAF8F5`):** The page ground.
- **Surface (`#FFFFFF`):** Cards, panels, forms, elevated content.
- **Warm neutral (`#F3E7DC`):** Alternate section bands and hover states.

Alternate bands rather than making every section white.

### The "Glass & Gradient" Rule
To avoid a flat, "out-of-the-box" appearance, floating elements (modals, navigation bars, tooltips) should utilize **Glassmorphism**. Use semi-transparent surface colors (e.g., `surface-variant` at 60% opacity) with a `backdrop-filter: blur(20px)`. 

### Signature Textures — CURRENT
Hero and CTA backgrounds use a very subtle warm wash:
`linear-gradient(135deg, #FAF8F5 0%, #FFFFFF 55%, #F3E7DC 100%)`. Keep gradients
restrained — no neon, cyber-blue, terminal-green or black-to-orange drama.

---

## 3. Typography
The typography system uses a high-contrast pairing: **Space Grotesk** for technical, sharp headings and **Inter** for clean, legible body text.

- **Display (Space Grotesk):** Massive, bold, and unapologetic. Used for hero headers and section titles to create an "Editorial" impact.
- **Headline & Title (Space Grotesk):** Provides a technical, architectural feel to the hierarchy.
- **Body & Label (Inter):** Refined and neutral. It acts as the "functional" layer, ensuring that even with artistic layouts, information remains perfectly accessible.

The shift between the sharp, geometric terminals of Space Grotesk and the humanist clarity of Inter signals the brand's dual nature: **Tech Powerhouse meets Creative Studio.**

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering** rather than traditional drop shadows.

- **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural "lift."
- **Ambient Shadows:** If a floating effect is mandatory, use an extra-diffused shadow: `box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4)`. The shadow color must be a tinted version of the background to ensure it looks like ambient light occlusion, not a "pasted" effect.
- **The "Ghost Border" Fallback:** If a container requires definition for accessibility, use the `outline-variant` token at **10% opacity**. Never use a 100% opaque border.
- **Motion Integration:** All elevation changes should be accompanied by a 300ms cubic-bezier transition. As elements "rise" in the hierarchy, they should subtly scale (e.g., `scale: 1.02`) to reinforce the physical layer metaphor.

---

## 5. Components

### Buttons
- **Primary:** Stark `primary` background with `on-primary` text. Use `full` roundedness for a modern, "pill" aesthetic. On hover, apply a subtle gradient shift.
- **Secondary:** `surface-container-high` background. No border. Subtle scale-up on hover.
- **Tertiary:** Text-only using `primary` color with a `2px` spacing-scale-0.5 underline that expands on hover.

### Input Fields
- Avoid boxes. Use a `surface-container-low` background with a `ghost-border` (10% `outline-variant`) only on the bottom edge. Labels use `label-sm` and float above the input upon focus.

### Cards & Lists
- **Strict Rule:** No divider lines. Separate list items using `spacing-4` (1.4rem) of vertical whitespace or a subtle background shift between items.
- **Cards:** Use `lg` (0.5rem) roundedness. Cards should overlap slightly with background imagery to create an "asymmetric" editorial feel.

### Creative Showcase (Custom Component)
- An image-heavy component where text (`display-sm`) overlaps the edge of the media. Use `surface-container-lowest` for the text backing with a high `backdrop-blur` to ensure legibility while keeping the "technical-artistic" vibe.

---

## 6. Do’s and Don’ts

### Do:
- **Use Ample Whitespace:** Use `spacing-16` (5.5rem) and `spacing-20` (7rem) to let high-end imagery and typography breathe.
- **Embrace Asymmetry:** Offset text blocks from the center of images to create a "custom-coded" look rather than a template look.
- **Animate Transitions:** Use staggered fades for list items and "mask-reveals" for large Display typography.

### Don’t:
- **Don't use 1px solid borders.** It breaks the premium "surface-layer" illusion.
- **Don't use pure black as a *background*.** (On the light palette, pure black is
  the correct colour for display `h1`/`h2` **text** — on a warm ground it reads as
  ink on paper, and it is what gives the type ramp its top step.)
- **Don't crowd the screen.** If you feel you need a divider line, you actually need more whitespace (`spacing-8` or higher).
- **Don't use standard easing.** Avoid "linear" or "ease-in-out." Use `cubic-bezier(0.16, 1, 0.3, 1)` for that "expensive" snappiness.

---
## Color Tokens — see THEME.md

The generated dark tokens that stood here are retired. The authoritative palette is
[THEME.md](THEME.md), implemented in [`theme/soft-executive-orange.css`](theme/soft-executive-orange.css)
and wired into `src/index.css`.

- Canvas `#FAF8F5` · Surface `#FFFFFF` · Warm neutral `#F3E7DC`
- Brand `#BF4E10` (hover `#A0400C`) · Pastel `#E7B79A` (decorative only)
- Headline `#000000` · Title `#2A2622` · Body `#4E4A46` · Secondary `#6E6862`
- Hairline `#DDD6CF`

Every pair is WCAG AA verified. Do not substitute lighter tints for text or button
colours — THEME.md records which ones fail and by how much.
