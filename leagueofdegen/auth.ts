import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

export const {handlers, signIn, signOut, auth} = NextAuth( {
  // Configure one or  authentication providers
  providers: [
    DiscordProvider({
      clientId: process.env.CLIENT_ID!, 
      clientSecret: process.env.CLIENT_SECRET!,
    }),
    // ...add more providers here
  ],
})