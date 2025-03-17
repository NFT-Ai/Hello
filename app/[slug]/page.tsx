import { client } from "@/lib/sanity"
import { PortableText } from "@portabletext/react"
import { notFound } from "next/navigation"

// Generuje statyczne ścieżki dla stron
export async function generateStaticParams() {
  const query = `*[_type == "page" && slug.current != "home"] {
    "slug": slug.current
  }`
  const pages = await client.fetch(query)
  return pages.map((page) => ({
    slug: page.slug,
  }))
}

async function getPage(slug) {
  try {
    const query = `*[_type == "page" && slug.current == $slug][0] {
      title,
      description,
      content
    }`
    return await client.fetch(query, { slug })
  } catch (error) {
    console.error(`Błąd podczas pobierania strony ${slug} z Sanity:`, error)
    return null
  }
}

export default async function Page({ params }) {
  const page = await getPage(params.slug)

  if (!page) {
    notFound()
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">{page.title}</h1>
      <div className="prose max-w-none">
        {page.description && <p className="text-xl mb-6">{page.description}</p>}
        {page.content && <PortableText value={page.content} />}
      </div>
    </div>
  )
}

