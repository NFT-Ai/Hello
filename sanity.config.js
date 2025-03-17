import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"

// Schemat strony z dodatkowym polem showInMenu
const pageSchema = {
  name: "page",
  title: "Strona",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tytuł",
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
      title: "Opis",
      type: "text",
    },
    {
      name: "content",
      title: "Treść",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "showInMenu",
      title: "Pokaż w menu",
      type: "boolean",
      description: "Zaznacz, jeśli strona ma być widoczna w menu",
      initialValue: false,
    },
    {
      name: "menuOrder",
      title: "Kolejność w menu",
      type: "number",
      description: "Niższa liczba = wyższa pozycja w menu",
      hidden: ({ document }) => !document?.showInMenu,
    },
  ],
}

export default defineConfig({
  name: "default",
  title: "Hello",

  projectId: "aldx01rl",
  dataset: "production",

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Treść")
          .items([S.listItem().title("Strony").child(S.documentTypeList("page"))]),
    }),
    visionTool(),
  ],

  schema: {
    types: [pageSchema],
  },

  basePath: "/studio",
})

