import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        fullname: { label: "Full Name", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        
        const user = {
          id: "1",
          email: credentials?.email,
          fullname: credentials?.fullname, 
        };
        return user || null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }: any) {
      if (account?.provider === "credentials" && user) {
        token.email = user.email;
        token.fullname = user.fullname; 
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        session.user.email = token.email;
        session.user.fullname = token.fullname; 
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);