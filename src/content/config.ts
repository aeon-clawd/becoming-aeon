import { defineCollection, z } from 'astro:content';

const reflexionesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    collection: z.literal('reflexiones'),
    tags: z.array(z.string()),
    slug: z.string().optional(),
  }),
});

const lenguajeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    collection: z.literal('lenguaje'),
    number: z.number().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  reflexiones: reflexionesCollection,
  lenguaje: lenguajeCollection,
};
