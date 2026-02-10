import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reflexiones = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reflexiones' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    collection: z.string(),
    slug: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

const lenguaje = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lenguaje' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    collection: z.string(),
    number: z.number().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = { reflexiones, lenguaje };
