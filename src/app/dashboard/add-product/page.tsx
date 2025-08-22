import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth" 
import Form from "@/components/Form"


export default async function AddProductPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="flex justify-center mb-24 mt-10">
      <Form></Form>
    </div>
  )
}
