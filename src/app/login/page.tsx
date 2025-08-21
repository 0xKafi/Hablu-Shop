"use client"

import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const { data: session } = useSession()
  const router = useRouter()

  // If user is already logged in, redirect to home (or dashboard)
  if (session) {
    router.push("/")
    return null
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Sign in with Google
      </button>
    </div>
  )
}
