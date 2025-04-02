import { defineCollection, z } from 'astro:content';

const entrada = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    description: z.string(),
    fecha: z.string(),
    localidad: z.string(),
  }),
});

export const collections = {
  entrada,
};