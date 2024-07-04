// next-auth.d.ts
import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

// Extend the User interface to include role
declare module "next-auth" {
  interface User extends DefaultUser {
    role: string;
  }

  interface Session extends DefaultSession {
    user: {
      role: string;
    } & DefaultSession["user"];
  }

  interface JWT {
    role: string;
  }
}
