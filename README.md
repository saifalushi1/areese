# Areese — A beautiful marriage. A simple walimah.

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
- A compact perspective slideshow: one overview and five faith topics, with previous/next arrows, direct slide dots, and scoped left/right keyboard navigation. Each slide has a small animated illustration. Slides advance only when the user chooses.
- Wedding, travel, a farm with two animated horses, aid being sent to Gaza, and Kaaba illustrations with subtle continuous animation. Perspective illustrations include a warm table beneath a question mark of light, a humble tent beneath the stars, a cake-weighted scale cracking the ground, a clean table keeping smoky symbols outside its light, an ornate vessel leaking golden light under a spotlight, and a small gathering facing an open road toward sunrise.
- A USD 50,000 starting wedding budget and USD 10,000 celebration allowance, with horizontal bars proportional to each celebration’s total cost on one shared scale.
- Separate travel, home-fund, orphan-meal, and Hajj-for-two scenarios; editable meal cost. Themed savings visuals replace the dots: passport stamps, keys, food bowls, and Kaaba stamps with a separate reserve badge. They recalculate from the budget and meal cost. At the default budget, travel shows six trips and a $4,000 reserve.
- A USD 30,000 illustrative Hajj fund, including remaining savings or the shortfall and a link to official Nusuk packages. First-year Hajj is an aspiration dependent on dates, eligibility, permits, and availability.
- Four selectable priority plans, keeping the same four allocation rows: Hajj first, Home first, Travel first, and Giving first. Every plan recalculates from available savings; whole-dollar rounding leaves any remainder unallocated.
- Keyboard-operable controls, mobile layouts, support for the operating system’s reduced-motion preference.

Figures are explicitly labelled as illustrative assumptions, with rounding and leftover money explained. Religious references and editorial assumptions are documented in `data.md` and linked in the experience.
