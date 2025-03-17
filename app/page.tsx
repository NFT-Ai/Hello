import { client } from "@/lib/sanity"
import { PortableText } from "@portabletext/react"

async function getHomePage() {
  try {
    const query = `*[_type == "page" && slug.current == "home"][0] {
      title,
      description,
      content
    }`
    return await client.fetch(query)
  } catch (error) {
    console.error("Błąd podczas pobierania strony głównej z Sanity:", error)
    return {
      title: "Witaj na mojej stronie",
      description: "Ta treść będzie edytowalna w Sanity CMS po utworzeniu dokumentu",
    }
  }
}

export default async function Home() {
  const page = await getHomePage()

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">{page?.title}</h1>
      <div className="prose max-w-none">
        {page?.description && <p className="text-xl mb-6">{page.description}</p>}
        {page?.content && <PortableText value={page.content} />}
      </div>
    </div>
  )
}

