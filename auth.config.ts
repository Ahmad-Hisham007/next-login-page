import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthConfig } from "next-auth";
export default {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
