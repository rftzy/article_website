import { defineCollection, z } from "astro:content";

const articles = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string()
    })
})

export const collection = {
    "articles": articles
}