import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"

// Define the schema directly in the config file to ensure it's loaded
const pageSchema = {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
}

export default defineConfig({
  name: "default",
  title: "Hello",

  projectId: "aldx01rl",
  dataset: "production",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: [pageSchema],
  },
})

