import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container mx-auto py-12 px-4 text-center">
      <h1 className="text-4xl font-bold mb-6">404 - Strona nie znaleziona</h1>
      <p className="text-xl mb-6">Przepraszamy, ale strona której szukasz nie istnieje.</p>
      <Link href="/" className="text-blue-600 hover:underline">
        Wróć do strony głównej
      </Link>
    </div>
  )
}

