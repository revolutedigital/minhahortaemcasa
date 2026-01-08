import { defineCollection, z } from 'astro:content';

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  image: z.string().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
  readTime: z.string().optional(),
  draft: z.boolean().optional().default(false),
});

const guias = defineCollection({
  type: 'content',
  schema: articleSchema,
});

const plantas = defineCollection({
  type: 'content',
  schema: articleSchema,
});

const problemas = defineCollection({
  type: 'content',
  schema: articleSchema,
});

const minhocario = defineCollection({
  type: 'content',
  schema: articleSchema,
});

const microverdes = defineCollection({
  type: 'content',
  schema: articleSchema,
});

const pimentas = defineCollection({
  type: 'content',
  schema: articleSchema,
});

const produtos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    originalPrice: z.number().optional(),
    image: z.string().optional(),
    features: z.array(z.string()).optional(),
    checkoutUrl: z.string().optional(),
    category: z.string().optional(),
  }),
});

export const collections = {
  guias,
  plantas,
  problemas,
  minhocario,
  microverdes,
  pimentas,
  produtos,
};
