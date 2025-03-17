import { revalidatePath } from "next/cache"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { path, token } = await request.json()

    // Check for the token
    const expectedToken = process.env.SANITY_REVALIDATE_TOKEN
    if (token !== expectedToken) {
      console.error("Invalid revalidation token")
      return NextResponse.json({ message: "Invalid token" }, { status: 401 })
    }

    // Revalidate the path
    revalidatePath(path || "/")
    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    console.error("Error revalidating:", err)
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 })
  }
}

