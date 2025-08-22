"use client"

import { Button } from "@/components/ui/button"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const { data: session } = useSession()
  const router = useRouter()

  if (session) {
    router.push("/products")
    return null
  }

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <Button
        onClick={() => signIn("google", { callbackUrl: "/" })}>
        Sign in with Google
      </Button>
    </div>
  )
}
