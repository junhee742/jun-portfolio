# Jun Portfolio contributor guide

This repository is the public, shareable portfolio for Junhee Lee. Keep the site evidence-first, fast, accessible, and safe to publish.

## Content rules

- Only publish material that has passed the Jun Wiki public-safety review.
- Never add customer names, internal product names, repository identifiers, URLs, schemas, infrastructure details, or private provenance IDs.
- Do not inflate local or internal verification into production outcomes.
- Keep the scope qualifiers that change how a number reads — which service, which environment, demo vs shipped. Removing one makes the claim false, so they are not optional. Put them next to the number where possible; a closing section is fine when several are needed.
- Do not write what you are *not* claiming. That list is infinite, reads as self-defence, and repeating it in every case study produces exactly the templated uniformity this site avoids. Restraint belongs in word choice, not in a notice about restraint.
- Do not tell the reader that identifiers were redacted. They did not ask, and it addresses an auditor rather than the person reading.
- Project copy lives in `src/content/work/`; the homepage is generated from that collection.

## Design rules

- Preserve the editorial-light direction: warm white surface, cobalt accent, strong Korean typography, thin rules, and generous whitespace.
- Avoid card grids, gradients, glass effects, decorative code windows, and unnecessary animation.
- All navigation, case-study links, email links, hover states, focus states, and responsive layouts must work.

## Development

- Use Node.js 22.12 or newer.
- Run `npm run check` and `npm run build` before publishing.
- When starting the development server, use `astro dev --background` and manage it with `astro dev status`, `astro dev logs`, and `astro dev stop`.
