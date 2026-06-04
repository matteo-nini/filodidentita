---
name: Filo d'identità
description: Festival letterario e artistico, Toscana — 5ª edizione, luglio 2026
colors:
  wine: "oklch(0.33 0.10 10)"
  rosa: "oklch(0.58 0.20 0)"
  rosa-mid: "oklch(0.52 0.20 0)"
  teal: "oklch(0.72 0.055 192)"
  teal-dark: "oklch(0.55 0.065 192)"
  teal-pale: "oklch(0.88 0.028 192)"
  paper: "oklch(0.96 0.008 60)"
  paper-warm: "oklch(0.92 0.012 65)"
  ink: "oklch(0.14 0.015 195)"
  charcoal: "oklch(0.28 0.018 195)"
  stone: "oklch(0.55 0.018 195)"
  fog: "oklch(0.75 0.012 195)"
  linen: "oklch(0.86 0.018 195)"
  gold: "oklch(0.67 0.085 70)"
typography:
  display:
    fontFamily: "'Bugaki', Georgia, serif"
    fontSize: "clamp(3rem, 8vw, 7.5rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Faustina', Georgia, serif"
    fontSize: "clamp(1.8rem, 4vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "0.04em"
  title:
    fontFamily: "'Bugaki', Georgia, serif"
    fontSize: "clamp(1.35rem, 2.5vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  body:
    fontFamily: "'DM Sans', system-ui, sans-serif"
    fontSize: "clamp(0.875rem, 1.4vw, 1rem)"
    fontWeight: 300
    lineHeight: 1.85
    letterSpacing: "normal"
  label:
    fontFamily: "'DM Sans', system-ui, sans-serif"
    fontSize: "0.6rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.24em"
spacing:
  gutter: "clamp(1.25rem, 4vw, 2.5rem)"
  section: "clamp(4rem, 9vw, 8rem)"
  container: "1160px"
components:
  button-primary:
    backgroundColor: "{colors.rosa}"
    textColor: "{colors.paper}"
    padding: "0.875rem 1.75rem"
  button-primary-hover:
    backgroundColor: "{colors.rosa-mid}"
    textColor: "{colors.paper}"
  button-wine:
    backgroundColor: "transparent"
    textColor: "{colors.wine}"
    padding: "0.875rem 1.75rem"
  button-wine-hover:
    backgroundColor: "{colors.wine}"
    textColor: "{colors.paper}"
  button-dark:
    backgroundColor: "transparent"
    textColor: "{colors.charcoal}"
    padding: "0.875rem 1.75rem"
  button-dark-hover:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.paper}"
  button-light:
    backgroundColor: "transparent"
    textColor: "oklch(0.97 0.005 195)"
    padding: "0.875rem 1.75rem"
  button-light-hover:
    backgroundColor: "oklch(0.97 0.005 195)"
    textColor: "{colors.ink}"
  nav-cta:
    backgroundColor: "{colors.rosa}"
    textColor: "oklch(0.97 0.005 195)"
    padding: "0.6rem 1.25rem"
  nav-cta-hover:
    backgroundColor: "{colors.wine}"
    textColor: "oklch(0.97 0.005 195)"
---

# Design System: Filo d'identità

## 1. Overview

**Creative North Star: "Il Filo della Festa"**

The festival thread is not decoration: it IS the identity. Every SVG thread path drawn on scroll is the brand making itself visible in real time, materializing on the screen the way a festival materializes in a place. The thread animates from nothing as you arrive at each section, tracing the same line that connects Pontedera, San Miniato, Fucecchio, and Montopoli on the sketched territory map. Motion here is not decoration; it is narrative.

This is a festival that takes positions. The design follows. Color is used with commitment: the mineral teal and deep wine dominate full-bleed sections, not accent slivers. The muted magenta (the logo's inherited warmth) appears on labels and CTAs, never on body text. Every tint in the system pulls toward a brand hue; pure gray is prohibited. The palette references Italian mineral pigments, Tuscan terra cotta, and the warm grain of handmade paper left in afternoon light — not digital brand trends.

Motion is choreographed once per section, then silent. Thread SVG paths draw themselves via `stroke-dashoffset` transition when their section enters the viewport. Town dots on the territory map materialize in staggered sequence as the thread passes through them. The hero entrance sequences elements with orchestrated stagger at ease-out-expo. One well-rehearsed entrance per section; no scattered micro-interactions.

**Key Characteristics:**
- Full-bleed teal and ink sections span the viewport edge, never boxed in a container
- SVG curly thread paths drawn on scroll entry are the visual signature of every page
- Zero border-radius throughout: sharp corners read as intentional, handmade, not careless
- Organic wave clip-paths on photos instead of rectangular frames
- Faustina 800 UPPERCASE for guest names and event titles; poster weight, not editorial
- Botanical silhouette SVG on teal sections floats on a 13s ambient loop
- `prefers-reduced-motion` disables all entrance animations; paths and dots reveal immediately

## 2. Colors: Il Campo Minerale

Three active roles, eleven supporting neutrals. Every color earns a specific context.

### Primary
- **Vino Profondo** (`oklch(0.33 0.10 10)`): The structural color. Deep wine/plum for primary headings, program titles, territory labels, and strong structural accents. On `--paper`: 14:1 contrast (WCAG AAA). Never used as a section background.
- **Magenta Caldo — Rosa** (`oklch(0.58 0.20 0)`): The brand warmth and accent. Exclusive to labels (eyebrow lines), CTA buttons, nav link underlines on hover, footer column headers, and the label rule pseudo-element. On `--paper`: ~4.5:1 — used only at label scale (0.6rem uppercase) or as a filled button surface, never for body copy.

### Secondary
- **Teal Minerale** (`oklch(0.72 0.055 192)`): The dominant field color. Full-bleed manifesto section background. References Italian mineral pigments and dusty sage in Tuscan summer light. On teal: use `--ink` for small text, `oklch(0.97 0.005 195)` for large/display. `--wine` on teal achieves 6:1 — large text only.
- **Teal Pallido** (`oklch(0.88 0.028 192)`): Light teal wash for the territory section background. Quieter mineral presence. `--wine` on teal-pale: ~8:1 (WCAG AAA for normal text).

### Tertiary
- **Oro della Musica** (`oklch(0.67 0.085 70)`): Reserved exclusively for music events and concert accents. Do not migrate to general UI.

### Neutral
- **Carta a Mano — Paper** (`oklch(0.96 0.008 60)`): Primary content surface. Warm-yellow offset references handmade paper, not clinical white.
- **Pergamena Calda — Paper Warm** (`oklch(0.92 0.012 65)`): Alternate section surface (about-strip). Creates visual rhythm without a full color shift.
- **Inchiostro Minerale — Ink** (`oklch(0.14 0.015 195)`): Near-black with teal tint. Dark section backgrounds (newsletter, footer, mobile nav). Never pure black.
- **Carbone** (`oklch(0.28 0.018 195)`): Primary text on light backgrounds. 13:1 on `--paper` (WCAG AAA).
- **Pietra** (`oklch(0.55 0.018 195)`): Secondary text. Venue lines, ticker items, footer body. Metadata only.
- **Nebbia** (`oklch(0.75 0.012 195)`): Tertiary text. Timestamps. Never for body copy.
- **Lino** (`oklch(0.86 0.018 195)`): Dividers and borders (1px). Program list separators, nav scroll shadow.

**The No-Neutral-Gray Rule.** Every tint must pull toward a brand hue (chroma ≥ 0.008 in OKLCH). Pure grays (`oklch(L 0 0)`) are prohibited. They flatten the handmade warmth and introduce institutional coldness.

**The Rosa Reserve Rule.** Rosa appears on ≤15% of any screen surface, always at label scale or as a filled button. Overuse kills the warmth.

## 3. Typography

**Display Font:** Bugaki (custom @font-face, woff + otf; regular + italic)
**Headline Font:** Faustina (Google Fonts, weights 700 and 800)
**Body/UI Font:** DM Sans (Google Fonts, weights 300 and 400)

**Character:** Bugaki provides the brand's emotional core: organic, slightly irregular, deeply Italian in spirit. Faustina 800 brings poster-weight impact for event titles without competing with the brand voice. DM Sans carries everything functional: clean, contemporary, legible at small sizes. Three fonts, three distinct registers. No overlap permitted.

### Hierarchy

- **Display** (Bugaki 400 italic, `clamp(3rem, 8vw, 7.5rem)`, line-height 1.05, tracking -0.02em): Hero title, manifesto phrases, large brand moments. Section headings: `clamp(2rem, 4.5vw, 4rem)`. Always italic.
- **Headline** (Faustina 800, `clamp(1.8rem, 4vw, 5.5rem)`, line-height 1.1, tracking 0.04–0.08em, UPPERCASE): Guest names and event titles. Poster weight. The ratio from body to headline should feel dramatic.
- **Title** (Bugaki 400 italic, `clamp(1.35rem, 2.5vw, 2rem)`, line-height 1.15, tracking -0.015em): Sub-headings, town names on mobile territory list.
- **Body** (DM Sans 300, `clamp(0.875rem, 1.4vw, 1rem)`, line-height 1.85): All paragraph text. Maximum line length: 65–75ch.
- **Label** (DM Sans 500, 0.58–0.62rem, tracking 0.22–0.28em, uppercase): Eyebrow lines. Always preceded by a `1.25rem × 1px` horizontal rule in the label color. Color adapts to surface.

**The Three-Voice Rule.** Bugaki owns brand moments (headings, manifesto, hero). Faustina owns event impact (titles, guest names). DM Sans owns everything else (UI, body, labels, buttons). Never cross the streams.

**The Italic Doctrine.** Bugaki italic is the brand's emotional register. Section headings lean italic. "d'identità" in the logotype is always italic. Upright Bugaki is rare, used only when content carries its own weight.

## 4. Elevation

This system is flat by default. Depth is created through alternating color fields (paper → teal-pale → paper-warm → ink), not through shadows.

**The Single Elevation Exception.** The navigation acquires exactly one elevation gesture on scroll: `backdrop-filter: blur(16px)` with `background: oklch(0.96 0.008 60 / 0.95)` and `1px solid var(--linen)` bottom border. Functional only — legibility over scrolled content. The only blur in the system.

No drop shadows on cards, images, buttons, or containers. The wave clip-path creates visual separation through shape, not shadow.

**The Flat Field Rule.** If you reach for `box-shadow`, stop. Replace with a full border or a background tint. Shadows are a readability tool here, nothing more.

## 5. Components

### Buttons

Zero border-radius on all variants. Border on all four sides, never a side-stripe. DM Sans 500, 0.65rem, uppercase, 0.18em tracking, padding `0.875rem 1.75rem`. Transition: 0.32s `cubic-bezier(0.25, 0.46, 0.45, 0.94)` on background, color, border-color. Focus: `outline: 2px solid [accent]; outline-offset: 2px` on `:focus-visible`.

- **btn-rosa (Primary):** Background `--rosa`, text `--paper`. Hover: `--rosa-mid`. Primary CTAs (hero, newsletter).
- **btn-wine:** Transparent, text and border `--wine`. Hover: fills wine, text paper. Secondary actions on light sections.
- **btn-dark:** Transparent, text and border `--charcoal`. Hover: fills charcoal, text paper. Program header CTAs.
- **btn-light:** Text `oklch(0.97 0.005 195)`, border at 35% opacity. For ink backgrounds only. Hover: fills light, text ink.
- **btn-outline:** Text and border `--rosa`. Hover: fills rosa, text paper.

### Label (Eyebrow)

DM Sans 500, 0.6rem, 0.24em tracking, uppercase. `display: inline-flex; align-items: center; gap: 0.65rem`. `::before` pseudo-element: `width: 1.25rem; height: 1px; background: currentColor`. Color: `--rosa` on paper/warm/ink sections; `oklch(0.97 0.005 195 / 0.5)` on teal sections.

### Navigation

Fixed, `z-index: 100`. Initially transparent. With `data-nav="light"` on `<body>`: links at `oklch(0.97 0.005 195 / 0.85)`, logo inverted. CTA retains rosa always.

On scroll past 60px: `background: oklch(0.96 0.008 60 / 0.95)` + `backdrop-filter: blur(16px)` + `box-shadow: 0 1px 0 var(--linen)`, padding reduces to 1rem. All three properties transition at 0.4s.

Desktop links: DM Sans 400, 0.63rem uppercase, 0.16em tracking. Hover/active: `::after` grows from 0 to 100% width (1px, rosa). Mobile (≤860px): fullscreen ink overlay. Mobile links: Bugaki italic `clamp(2rem, 8vw, 3.5rem)`, rosa on hover.

### Thread Motif (Signature Component)

Curly SVG `<path>` elements as section dividers, photo overlays, and the territory map thread. All paths use `stroke-linecap: round; stroke-linejoin: round`. Curliness from tight C-curves with alternating high/low control points (±18–22 SVG units), not pure sine waves.

Positioning: parent needs `position: relative; overflow: hidden`. Thread SVGs use `position: absolute; pointer-events: none` via `.section-thread`. Horizontal dividers: `preserveAspectRatio="none"`. Full-coverage overlays: `preserveAspectRatio="xMidYMid slice"`.

Draw-on animation: `data-thread-svg` for scroll-triggered; `data-thread-hero` fires at load +600ms. JS calls `path.getTotalLength()`, sets dasharray/dashoffset, transitions to 0 at `cubic-bezier(0.16, 1, 0.3, 1)` over 1.9–2.5s. Under `prefers-reduced-motion`: immediate reveal.

Placements: hero (white, 0.26/0.13 opacity), manifesto (white, 0.20), program divider (wine, 0.26), territory map (wine via `currentColor`, 0.52), about photo overlay (white, 0.30/0.14), newsletter top (white, 0.15).

### Image Treatment (Wave Clip-path)

Photos use `clip-path: polygon(...)` with a wavy/scalloped bottom edge. Rectangular crops are not permitted. Amplitude and frequency vary by context. Example for a full-height photo column:
```css
clip-path: polygon(
  0% 0%, 100% 0%, 100% 87%,
  96% 91%, 90% 87%, 84% 92%, 78% 88%,
  72% 93%, 66% 89%, 60% 94%, 54% 90%,
  48% 95%, 42% 91%, 36% 87%, 30% 92%,
  24% 88%, 18% 93%, 12% 89%, 6% 94%, 0% 90%
);
```

### Program Row (Editorial List)

Three-column grid: `9.5rem [date + place] | 1fr [title + guest + venue] | 4rem [time]`. At 960px: time collapses. At 680px: single column, date/place inline. Borders in `--linen` (1px). Hover: paper → paper-warm (0.25s). Event title: Faustina 800 UPPERCASE, `clamp(0.85rem, 1.4vw, 1.1rem)`. Guest name: Faustina 700 UPPERCASE, 0.82rem. Opening event enlarges title to `clamp(1.1rem, 2.2vw, 1.85rem)`.

### Territory Map (Signature Component)

Inline SVG (`viewBox="0 0 1200 340"`, `width: 100%; height: auto`). Color via `style="color: oklch(0.33 0.10 10)"` on the SVG element; all children use `currentColor`. Town markers: outer ring (`r=10`, stroke only, opacity 0.25) + inner dot (`r=4.5`, filled, opacity 0.62). Names: Bugaki italic, 24 SVG units, opacity 0.72. Dates: DM Sans, 10.5 SVG units, opacity 0.42.

SVG carries `data-territory-map`. JS draws the path on threshold 0.2, then town groups (`.town-group`, opacity 0 → 1, 0.6s) stagger in at 700ms + (i × 230ms). On mobile (≤680px): map hidden; accessible `<ul>` list with large Bugaki names takes over. Map SVG carries `aria-hidden="true"`; the list is the canonical semantic source.

### Botanical Silhouette

SVG ellipse cluster on teal backgrounds at opacity 0.07 (white on teal). Ambient float: 13s ease-in-out loop, `translateY(0) → translateY(-18px) rotate(0.6deg) → translateY(-7px) rotate(-0.35deg)`. `transform-origin: 50% 92%`. Disabled under `prefers-reduced-motion`. Teal sections only.

## 6. Do's and Don'ts

### Do:
- **Do** use full-bleed teal and ink section backgrounds spanning 100% viewport width. The color is the content; never contain it.
- **Do** animate thread SVG paths with `stroke-dashoffset` on scroll entry. `data-thread-svg` on the SVG, `.thread-path` on the path; JS calls `getTotalLength()` and transitions to 0 at ease-out-expo.
- **Do** use the wave `clip-path` on every featured photo. Rectangular crops contradict the organic language.
- **Do** use Faustina 800 UPPERCASE for all event titles and guest names. The scale jump from body should feel poster-dramatic.
- **Do** tint every neutral toward the brand hue (chroma ≥ 0.008). Ink is `oklch(0.14 0.015 195)`, not `#000`. Paper is `oklch(0.96 0.008 60)`, not `#fff`.
- **Do** honor `prefers-reduced-motion`: skip all entrance animations, reveal thread paths and town dots immediately.
- **Do** use the Label component (horizontal-rule + DM Sans uppercase) as the eyebrow for every section. Consistency here is load-bearing for the page rhythm.
- **Do** keep all buttons zero border-radius and full-border on all four sides.
- **Do** use `cubic-bezier(0.16, 1, 0.3, 1)` for hero entrances and thread draw-on; `cubic-bezier(0.25, 0.46, 0.45, 0.94)` for UI state changes.
- **Do** use the botanical silhouette SVG on teal sections at opacity 0.04–0.08 with the ambient float loop.

### Don't:
- **Don't** use generic festival or ticketing aesthetics: no Eventbrite-style card grids, no boxed layouts with symmetric padding on all sides, no institutional palettes.
- **Don't** introduce corporate coldness: neutral gray palettes without brand tint, detached tone, design that prioritizes smoothness over personality.
- **Don't** apply the overdesigned "brand system cleanliness" of a startup pitch deck. This festival is handmade and lived-in. Sterility is a failure state.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe. Full borders, background tints, or nothing.
- **Don't** use `background-clip: text` with a gradient. Gradient text is decorative noise here.
- **Don't** use glassmorphism decoratively. The nav scroll blur is the only permitted blur; it is functional, not aesthetic.
- **Don't** use identical card grids for event listings. Program rows are editorial; cards are a product-UI pattern.
- **Don't** mix the three font roles. Faustina for event impact only; Bugaki for brand display; DM Sans for everything functional.
- **Don't** add border-radius to buttons, inputs, or any rectangular container.
- **Don't** place `--rosa` on body copy at small sizes. Approved only at label scale (0.6rem+ uppercase) or as a filled surface.
- **Don't** use bounce or elastic easing anywhere. Natural deceleration only.
- **Don't** animate CSS layout properties. Transform, opacity, and `stroke-dashoffset` only.
