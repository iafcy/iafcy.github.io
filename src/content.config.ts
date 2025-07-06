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

const publications = defineCollection({
    loader: file("src/content/data/publications.json"),
    schema: ({ image }) => 
        z.object({
            id: z.string(),
            title: z.string(),
            authors: z.string(),
            year: z.number(),
            venue: z.string(),
            image: image(),
            award: z.string().optional(),
            links: z
                .object({
                    paper: z.string().url().optional(),
                    code: z.string().url().optional(),
                    website: z.string().url().optional(),
                })
                .optional(),
        }),
});

export const collections = { images, research, education, experience, awards, publications };
