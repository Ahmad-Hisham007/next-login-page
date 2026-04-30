import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { dbConnect } from "./lib/dbConnect";
import User from "./models/User";
import bcrypt from "bcryptjs";
import authConfig from "./auth.config";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import LinkedIn from "next-auth/providers/linkedin";

export const { handlers, auth, signIn, signOut } = NextAuth({
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
    LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      issuer: "https://www.linkedin.com/oauth",
      client: {
        id_token_signed_response_alg: "RS256",
      },
      authorization: {
        params: { scope: "openid profile email" }, // Scope গুলো ঠিকঠাক দিন
      },
      wellKnown:
        "https://www.linkedin.com/oauth/.well-known/openid-configuration",
      jwks_endpoint: "https://www.linkedin.com/oauth/openid/jwks",
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
    CredentialsProvider({
      ...authConfig,
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        await dbConnect();
        const user = await User.findOne({ email: credentials?.email });
        if (!user) {
          throw new Error("No user found with this email");
        }
        const isPasswordCorrect = bcrypt.compareSync(
          credentials?.password as string,
          user.password,
        );
        if (!isPasswordCorrect) {
          throw new Error("Password is Incorrect");
        }
        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          phoneNumber: user.phoneNumber,
          image: user.image,
        };
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
});
