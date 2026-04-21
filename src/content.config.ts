import { defineCollection } from "astro:content";

const placeholders = defineCollection({
  loader: () => []
});

export const collections = {
  placeholders
};