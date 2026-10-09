# Areese — A Different Beginning

A cinematic, interactive story about a smaller wedding and the possibilities it leaves for married life.

## Run locally

```sh
npm install
npm run dev
```

## Validate and build

```sh
npx tsc -p tsconfig.app.json
npm run build
```

The entry point is `src/App.tsx`, with styling in `src/styles/global.css`. React and Framer Motion power scroll reveals, transitions, and the reading progress indicator. The SVG scenes are authored locally and need no external image services. The previous slideshow components remain available but are not used by the entry point.

## Experience

- Four chapters: perspective, possibilities, a combined plan, and a closing invitation.
- Larger type throughout for reading across a room: 30–33px body text on a 1920px-wide display, with responsive mobile layouts.
- Five unnumbered faith reflections: prophetic simplicity, israf, prohibited practices, riya, and the nikah.
- Wedding, travel, house, and meal illustrations with subtle continuous animation.
- Budget slider and simple-celebration allowance, with animated spending-versus-savings bars.
- Separate travel, home-fund, and orphan-meal scenarios; editable meal cost.
- A 25/60/15 example allocation of the savings across all three goals.
- Keyboard-operable controls, mobile layouts, a motion toggle, and support for the operating system’s reduced-motion preference.

Figures are explicitly labelled as illustrative assumptions, with rounding and leftover money explained. Religious references and editorial assumptions are documented in `data.md` and linked in the experience.
