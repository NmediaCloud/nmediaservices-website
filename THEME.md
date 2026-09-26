# Soft Executive Orange — Nmedia house theme

The standard palette for Nmedia pages and builds, including projects outside this
repo. Drop [`theme/soft-executive-orange.css`](theme/soft-executive-orange.css) in,
import it before your own styles, and build against the tokens rather than hexes.

**North star:** experienced creative-technology consultancy. Confident, warm,
premium, business-friendly. Not a hacker, crypto, gaming or terminal aesthetic.

Key principle: **keep the orange, remove the darkness, add warmth, whitespace and
confidence.**

---

## The palette

| Role | Token | Hex | |
|---|---|---|---|
| Page canvas | `--bg-primary` | `#FAF8F5` | soft warm white |
| Cards, panels, forms | `--bg-surface` | `#FFFFFF` | |
| Alternate bands, hover | `--bg-warm-neutral` | `#F3E7DC` | soft sand |
| Brand | `--brand-primary` | `#BF4E10` | fills, icons, borders **and** text |
| Brand hover / orange-on-sand | `--brand-hover` | `#A0400C` | |
| Pastel accent | `--brand-secondary` | `#E7B79A` | **decorative only — never text** |
| Display headings `h1`/`h2` | `--text-headline` | `#000000` | |
| Sub-headings `h3`/`h4` | `--text-title` | `#2A2622` | |
| Body | `--text-primary` | `#4E4A46` | warm charcoal, never pure black |
| Meta, captions | `--text-secondary` | `#6E6862` | |
| Display sub-lines | `--text-muted` | `#7C756E` | **large text only — never below 24px** |
| Hairlines | `--border-primary` | `#DDD6CF` | |

**Balance:** ~65–70% canvas/white, 15–20% warm neutral, 10–15% orange. Orange stays
the recognisable signature; the confidence comes from typography, spacing and clean
surfaces, not from flooding the page with accent colour.

**Section rhythm** — alternate rather than making everything white:
`canvas → white → canvas → sand → white → subtle warm gradient CTA`.

---

## Contrast — all measured, all AA

| Pair | Ratio | Needs |
|---|---|---|
| Headline `#000000` on canvas | 19.81:1 | 3.0 |
| Title `#2A2622` on white | 15.01:1 | 4.5 |
| Body `#4E4A46` on canvas | 8.28:1 | 4.5 |
| Secondary `#6E6862` on canvas | 5.19:1 | 4.5 |
| Muted `#7C756E` on canvas, 48px | 4.28:1 | 3.0 |
| Secondary `#6E6862` on sand | 4.52:1 | 4.5 |
| Orange `#BF4E10` on canvas | 4.59:1 | 4.5 |
| Orange `#BF4E10` on white | 4.87:1 | 4.5 |
| White on orange button | 4.87:1 | 4.5 |
| Orange `#A0400C` on sand | 5.34:1 | 4.5 |

### Rules that exist because something measurably failed

These are not stylistic preferences. Each one was a real defect caught by audit:

- **Never use a pale orange for text or as a button fill.** `#D9895B` is 2.58:1 as
  text and 2.73:1 under a white label. `#FF6A00` is 2.71:1. Both look superb on
  black and fail completely on warm white — a saturated orange is already light, so
  on a dark ground the lightness gap is huge and on a light ground there is none.
- **Never dim text with opacity modifiers.** `text-secondary/50`–`/80` drops
  `#6E6862` to 2.1–3.0:1. Use size and weight for hierarchy instead.
- **`--border-primary` and `--color-outline` are not text colours.** `#9A918A`
  measures 2.92:1 on the canvas, below even the 3:1 large-text floor. When a
  display line needs to sit lighter than `--text-secondary`, stop at
  `--text-muted` `#7C756E` and keep it above 24px.
- **Pastel `#E7B79A` is decorative only.** 1.80:1 on white. It must never carry
  text, and nothing white may sit on it — that includes the light end of a gradient.
- **Orange text on sand or on a tinted orange chip** only reaches 4.01:1. Step down
  to `--brand-hover`. The stylesheet's unlayered exception block does this
  automatically for Tailwind builds.
- **White line-art logos go invisible.** Apply `.nm-logo` rather than shipping a
  second asset.

---

## Components

**Primary button** — `.nm-btn-primary`: orange fill, white label, hover `#A0400C`.
**Secondary button** — `.nm-btn-secondary`: white, charcoal label, `#DDD6CF` border,
hover sand. No glowing or neon buttons.

**Cards** — `.nm-card`: white, `1px solid #DDD6CF`, `0 8px 28px rgba(78,74,70,.06)`.
Restrained shadows only; cards should read as established, not as dark app windows.

**Navigation** — `rgba(250,248,245,0.94)` with backdrop blur, charcoal links, orange
on hover/active, `#DDD6CF` divider.

**Gradients** — subtle only. `linear-gradient(135deg,#FAF8F5,#FFFFFF 55%,#F3E7DC)`
for warm washes, `linear-gradient(135deg,#A0400C,#BF4E10)` for orange. Never neon,
cyber-blue, terminal-green, or dramatic black-to-orange.

**Do not introduce a blue or navy brand system.** The intent is to modernise the
existing orange identity, not replace it.

---

## Technical personality

Keep it, but demote it to roughly 10–15% of the visual language. Small monospace
labels with orange accents — `PIPELINE / 01`, `CREATIVE AI / 02` — are good. Console
boxes, binary strings, system-status readouts and green/red indicator lights as the
*main* language are not. Monospace is for technical tags and metadata, never body copy.

---

## Imagery

Do not recolour project imagery. The controlled neutral UI exists so the work is the
visually rich part of the page. Text placed over photography is exempt from the
token rules — white on a `rgba(78,74,70,0.55)` scrim is correct there.

---

## Auditing a build

Contrast bugs in this palette are not visible by eye — the failures found here all
looked fine in a screenshot. Check computed values in the browser.

Two traps when writing an audit script:

1. **Tailwind v4 emits `oklab()`** for every alpha-modified colour. Neither a regex
   nor canvas `fillStyle` parses it; convert oklab→sRGB explicitly or every reading
   is garbage.
2. **Gradient elements report `background-color: transparent`.** Read
   `background-image` and check each stop, or you will get false failures.
