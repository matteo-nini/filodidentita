# Design

## Theme

Light, warm. Physical scene: someone opens the festival site on a laptop in a sunlit room in early summer, curious, slightly unfamiliar with literary festivals. The ambient quality of the 5th edition brand is mineral, botanical, handmade — like watercolor paper left in afternoon light. Dark sections exist for drama (hero overlay, newsletter) but the dominant register is light and organic.

## Color Strategy

Full palette. Three named roles, each used deliberately. The system comes from the 5th edition visual identity: mineral teal as a field/surface color, deep wine as the primary structural/text color, and muted magenta/pink as the inherited brand warmth and label accent.

### Palette

```
--teal:        oklch(0.72 0.055 192)   /* Mineral field — dusty teal/sage, 5th edition dominant */
--wine:        oklch(0.33 0.10 10)     /* Deep wine/plum — primary text, strong accents */
--rosa:        oklch(0.58 0.20 0)      /* Muted magenta — logo, labels, warmth accent */
--rosa-mid:    oklch(0.52 0.20 0)      /* Hover state for rosa */
--teal-dark:   oklch(0.55 0.065 192)   /* Darker teal for contrast sections */
--teal-pale:   oklch(0.88 0.028 192)   /* Light teal wash for subtle section backgrounds */
--paper:       oklch(0.96 0.008 60)    /* Off-white paper — primary surface */
--paper-warm:  oklch(0.92 0.012 65)    /* Warm paper — alternate sections */
--ink:         oklch(0.14 0.015 195)   /* Near-black with teal tint */
--charcoal:    oklch(0.28 0.018 195)   /* Dark text on light backgrounds */
--stone:       oklch(0.55 0.018 195)   /* Secondary text, metadata */
--fog:         oklch(0.75 0.012 195)   /* Tertiary, disabled states */
--linen:       oklch(0.86 0.018 195)   /* Dividers, borders */
--gold:        oklch(0.67 0.085 70)    /* Music/special event accent */
```

Role assignments:
- **Field surfaces**: `--teal` and `--teal-pale` for bold section backgrounds
- **Primary text**: `--wine` for headings, key accents, bold display
- **Label / warmth accent**: `--rosa` for labels, eyebrows, CTAs
- **Primary content surface**: `--paper`
- **Body text on light**: `--charcoal` (14:1 contrast on --paper, WCAG AAA)
- **Dark sections**: `--ink` background with `oklch(0.97 0.005 195)` text

WCAG AAA notes:
- `--wine` on `--paper`: ~14:1 ✓
- `--charcoal` on `--paper`: ~13:1 ✓
- `oklch(0.97 0.005 195)` on `--ink`: ~17:1 ✓
- `--rosa` on `--paper`: ~4.5:1 — use only for large text (18pt+) or decorative labels, not body copy
- `--wine` on `--teal`: ~6:1 — use for large text only; for small text on teal use `--ink`

## Typography

### Families

```
--font-display: 'Bugaki', Georgia, serif;        /* Brand logotype, display headings */
--font-headline: 'Faustina', Georgia, serif;     /* Event titles, guest names, poster-weight impact */
--font-sans: 'DM Sans', system-ui, sans-serif;   /* UI, labels, metadata, body */
```

Load order for Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Faustina:wght@400;600;700;800&display=swap" rel="stylesheet" />
```
Bugaki loaded via @font-face (existing). DM Sans already loaded.

### Scale

```
Display (Bugaki):      clamp(4rem, 10vw, 10rem)     — hero title, manifesto
Headline (Faustina):   clamp(1.8rem, 4vw, 5.5rem)   — event titles, guest names (Bold/ExtraBold 700-800)
H2 (Bugaki):           clamp(2rem, 4.5vw, 4rem)     — section headings (italic)
H3 (Bugaki):           clamp(1.35rem, 2.5vw, 2rem)  — sub-headings
Body:                  clamp(0.9rem, 1.4vw, 1rem)   — paragraphs (DM Sans 300-400)
Label:                 0.58–0.62rem / 500 / 0.22–0.28em tracking / uppercase (DM Sans)
```

Hierarchy rule: ratio ≥ 1.3 between adjacent scale steps.

### Usage guidance

- Bugaki italic: brand headings, manifesto sentences, city names, anything that needs warmth and character
- Faustina Bold/ExtraBold: guest names, event titles — all-caps with 0.04–0.08em tracking for poster impact
- DM Sans: all UI text, body copy, labels, metadata, buttons
- Avoid Faustina for body copy; it is a display font only

## Layout

```
--section-gap:   clamp(4rem, 9vw, 8rem)
--container:     1160px
--gutter:        clamp(1.25rem, 4vw, 2.5rem)
--ease:          cubic-bezier(0.25, 0.46, 0.45, 0.94)
--ease-out:      cubic-bezier(0.0, 0.0, 0.2, 1)
```

Layout principles from the brand:
- Full-bleed sections are encouraged. The teal and ink backgrounds should bleed to the viewport edge.
- Vary spacing for rhythm: tight groupings within a section, generous gaps between sections.
- Container is a maximum, not a requirement. Let hero elements and large type overflow or fill the viewport.

## Shapes and Surfaces

### Organic image frames

Photos should use wavy/scalloped bottom edges rather than sharp rectangles. CSS clip-path approach:

```css
.img-wave-bottom {
  clip-path: polygon(
    0% 0%, 100% 0%, 100% 88%,
    96% 92%, 90% 88%, 84% 93%, 78% 89%,
    72% 94%, 66% 90%, 60% 95%, 54% 91%,
    48% 96%, 42% 92%, 36% 88%, 30% 93%,
    24% 89%, 18% 94%, 12% 90%, 6% 95%,
    0% 91%
  );
}
```

Adjust the wave amplitude and frequency per context. Tighter waves for smaller frames; shallower waves for full-bleed.

### Botanical silhouettes

Faint leaf/plant forms in section backgrounds. Implemented as inline SVG or CSS mask with opacity 0.04–0.08 on teal backgrounds. Do not use on paper/light backgrounds.

### Thread / filo motif

A hand-drawn thread SVG line element used as a decorative signature. Appears overlaid on photos (white, opacity 0.25–0.4) and as section dividers (wine or rosa, opacity 0.5). The line should feel drawn, not perfect. Use `stroke-linecap: round` and slight irregularity.

### Grain texture

```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,...");  /* SVG fractal noise */
  background-size: 200px;
}
```

Increase opacity to 0.035 on teal sections. Decrease to 0.015 on paper sections.

## Components

### Label

```css
.label {
  font-family: var(--font-sans);
  font-size: 0.58rem;
  font-weight: 500;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--rosa);
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
}
.label::before {
  content: '';
  width: 1.25rem;
  height: 1px;
  background: var(--rosa);
}
```

On dark/teal backgrounds: use `oklch(0.97 0.005 195)` for the label color instead of `--rosa`.

### Button

```css
.btn {
  font-family: var(--font-sans);
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 0.875rem 1.75rem;
  border: 1px solid currentColor;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  transition: background 0.32s var(--ease), color 0.32s var(--ease);
}

/* Variants */
.btn-wine   { color: var(--wine); }
.btn-wine:hover { background: var(--wine); color: var(--paper); }

.btn-rosa   { background: var(--rosa); color: var(--paper); border-color: var(--rosa); }
.btn-rosa:hover { background: var(--rosa-mid); border-color: var(--rosa-mid); }

.btn-light  { color: oklch(0.97 0.005 195); border-color: oklch(0.97 0.005 195 / 0.35); }
.btn-light:hover { background: oklch(0.97 0.005 195); color: var(--ink); }
```

### Fade-up animation

```css
.fade-up {
  opacity: 0;
  transform: translateY(1.5rem);
  transition: opacity 0.7s var(--ease-out), transform 0.7s var(--ease-out);
}
.fade-up.visible { opacity: 1; transform: translateY(0); }

@media (prefers-reduced-motion: reduce) {
  .fade-up { opacity: 1; transform: none; transition: none; }
}
```

### Program row (editorial list)

Event and program items as table-like rows, not cards. Structure: date/place column | title + guest | time. Featured row: larger Faustina display size, not different background color.

### Ticker

Horizontal scrolling marquee with Bugaki italic items. Pause on hover. Border-block separators in `--linen` (on paper) or `oklch(0.97 0.005 195 / 0.12)` (on dark).

## Motion

- Page load: staggered fade-up with `data-delay` offset (0–200ms range). No simultaneous reveals.
- Image carousel: opacity crossfade with slow ken-burns (9s). No transform animation on reduced-motion.
- Hover states: 0.25–0.32s transitions, `var(--ease)`.
- No layout property animation. No bounce, no elastic.
- One well-orchestrated entrance per section; no scattered micro-interactions.
