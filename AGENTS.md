# Jun Portfolio contributor guide

This repository is the public, shareable portfolio for Junhee Lee. Keep the site evidence-first, fast, accessible, and safe to publish.

## Content rules

- Only publish material that has passed the Jun Wiki public-safety review.
- Never add customer names, internal product names, repository identifiers, URLs, schemas, infrastructure details, or private provenance IDs.
- Do not inflate local or internal verification into production outcomes.
- Preserve the explicit boundary statements in each case study.
- Project copy lives in `src/content/work/`; the homepage is generated from that collection.

## Design rules

- Preserve the editorial-light direction: warm white surface, cobalt accent, strong Korean typography, thin rules, and generous whitespace.
- Avoid card grids, gradients, glass effects, decorative code windows, and unnecessary animation.
- All navigation, case-study links, email links, hover states, focus states, and responsive layouts must work.

## Development

- Use Node.js 22.12 or newer.
- Run `npm run check` and `npm run build` before publishing.
- When starting the development server, use `astro dev --background` and manage it with `astro dev status`, `astro dev logs`, and `astro dev stop`.
