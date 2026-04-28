import { auth } from "@/auth";
import { Session } from "next-auth";
import { NextRequest } from "next/server";

export default auth((req: NextRequest & { auth: Session }) => {
  const isLoggedIn = !!req.auth;
  console.log("ইজার কি লগইন?", isLoggedIn);
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
