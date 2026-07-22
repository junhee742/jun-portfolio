import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    order: z.number().int().positive(),
    title: z.string(),
    homeTitle: z.string(),
    summary: z.string(),
    description: z.string(),
    period: z.string(),
    product: z.string(),
    capability: z.string(),
    featured: z.boolean(),
    evidence: z.array(z.string()).min(1),
    role: z.string(),
    scope: z.string(),
    reviewedAt: z.coerce.date(),
    publicSafe: z.literal(true),
  }),
});

export const collections = { work };
