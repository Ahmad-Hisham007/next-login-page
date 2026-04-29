import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { dbConnect } from "./lib/dbConnect";
import User from "./models/User";
import bcrypt from "bcryptjs";
import authConfig from "./auth.config";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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
