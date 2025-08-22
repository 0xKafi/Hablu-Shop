import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth" 

export default async function AddProductPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="flex items-center space-x-3">
      <p className="text-sm">Hello, {session.user?.name}</p>
    </div>
  )
}
