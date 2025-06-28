import { defineCollection, z } from "astro:content";

import { glob, file } from "astro/loaders";

const images = defineCollection({
    loader: file("src/content/data/images.json"),
    schema: ({ image }) =>
        z.object({
            id: z.string(),
            src: image(),
            alt: z.string(),
        }),
});

const research = defineCollection({
    loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/research" }),
    schema: z.object({
        title: z.string(),
        location: z.string(),
        duration: z.string(),
    }),
});

const education = defineCollection({
    loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/education" }),
    schema: z.object({
        title: z.string(),
        location: z.string(),
        duration: z.string(),
    }),
});

const experience = defineCollection({
    loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/experience" }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            location: z.string(),
            duration: z.string(),
            image: image(),
        }),
});

const awards = defineCollection({
    loader: file("src/content/data/awards.json"),
    schema: z.object({
        id: z.number(),
        name: z.string(),
    }),
});

export const collections = { images, research, education, experience, awards };
