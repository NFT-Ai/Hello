import { client } from "@/lib/sanity"

async function getData() {
  try {
    const query = `*[_type == "page" && slug.current == "home"][0]`
    return await client.fetch(query)
  } catch (error) {
    console.error("Error fetching data from Sanity:", error)
    // Return fallback data if fetch fails
    return {
      title: "Welcome to My Website",
      description: "This content will be editable in Sanity CMS once connected",
    }
  }
}

export default async function Home() {
  const data = await getData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-4">{data?.title || "Welcome to My Website"}</h1>
        <p className="text-xl">{data?.description || "This content is editable in Sanity CMS"}</p>
      </div>
    </main>
  )
}

