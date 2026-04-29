import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      checks: ["none"],
    }),
    CredentialsProvider({
      async authorize(credentials) {
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
