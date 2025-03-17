import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./sanity/schemas"

export default defineConfig({
  name: "default",
  title: "Hello",

  projectId: "aldx01rl",
  dataset: "production",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

