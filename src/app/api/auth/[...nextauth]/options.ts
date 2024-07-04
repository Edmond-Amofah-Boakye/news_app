import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import { DBCONNECTION } from "@/DB/connection";
import userModel from "@/model/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  
  pages: {
    signIn: "/auth/signin",
  },

  providers: [
    GitHubProvider({
      profile(profile){
        return {
          id: profile.id.toString(),
          name: profile.name ?? profile.login,
          email: profile.email,
          image: profile.avatar_url,
          role: profile.role ?? "user"
        }
      },

      clientId: process.env.GITHUB_ID as any,
      clientSecret: process.env.GITHUB_SECRET as any
    }),

    GoogleProvider({
        profile(profile) {
          return {
            id: profile.sub,
            name: profile.name,
            email: profile.email,
            image: profile.picture,
            role: profile.role ?? "user",  
          };
        },

        clientId: process.env.GOOGLE_CLIENT_ID as any,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as any
      }),

      TwitterProvider({
        clientId: process.env.TWITTER_CLIENT_ID as any,
        clientSecret: process.env.TWITTER_CLIENT_SECRET as any
      }),

    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "email", type: "email", placeholder: "eddy@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          throw new Error("Missing credentials");
        }

        await DBCONNECTION()
        const user = await userModel.findOne({email: credentials?.email}).select("+password");

        if(!user){
          throw new Error("no user found")
        }

        const passwordMatches = await bcrypt.compare((credentials?.password) || "", user.password)
  
        if (passwordMatches) { return user}

        // Return null if user data could not be retrieved
        throw new Error("invalid credentials")
      },
    }),
  ],

  callbacks: {
    jwt({ token, user }) {
      if(user) token.role = user.role as string
      return token
    },
    session({ session, token }) {
      if(session?.user) session.user.role = token.role as string
      return session
    }
  }
};
