import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL:"https://assignment-0-8-ne31-qn98ujvw8-rubi92948-coders-projects.vercel.app"
})
export const { signIn, signUp, useSession } = createAuthClient()
