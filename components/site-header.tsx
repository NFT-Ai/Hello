import Link from "next/link"
import { client } from "@/lib/sanity"

async function getMenuItems() {
  try {
    // Pobierz wszystkie strony, które mają showInMenu = true, posortowane według menuOrder
    const query = `*[_type == "page" && showInMenu == true] | order(menuOrder asc) {
      title,
      "slug": slug.current
    }`
    return await client.fetch(query)
  } catch (error) {
    console.error("Błąd podczas pobierania menu z Sanity:", error)
    return []
  }
}

export default async function SiteHeader() {
  const menuItems = await getMenuItems()

  return (
    <header className="bg-white border-b py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-xl font-bold">
          Moja Strona
        </Link>

        <nav>
          <ul className="flex space-x-6">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.slug === "home" ? "/" : `/${item.slug}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

