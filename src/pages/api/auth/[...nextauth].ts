import NextAuth from "next-auth";
import type { DefaultJWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

declare module "next-auth" {
  /** Returned by the `CredentialsProvider.authorize()` function */
  interface User {
    user: DefaultJWT;
    access: string;
    refresh: string;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
    user: DefaultJWT;
  }
}

export default NextAuth({
  // pages: {
  //   signIn: "/auth/signin",
  // },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(`${process.env.API_BASE_URL}/auth/token`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account?.provider === "credentials") {
        return {
          user: {
            name: `${user.user?.first_name} ${user.user?.last_name}`,
            email: user.user?.email,
            image: user.user?.avatar,
            sub: String(user.user?.id),
          },
          accessToken: user?.access,
          refreshToken: user?.refresh,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return { ...session, ...token };
    },
  },
});
