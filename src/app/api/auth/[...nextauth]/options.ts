import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";

export const options: NextAuthOptions = {
  pages: {
    signIn: "/auth/signin",
  },

  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as any,
      clientSecret: process.env.GITHUB_SECRET as any
    }),

    GoogleProvider({
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
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: "Edmond Boakye", password: "123456" };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
};
