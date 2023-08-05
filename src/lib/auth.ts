import { SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt_decode from "jwt-decode";

const authOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as unknown as {
          email: string;
          password: string;
        };

        const resp = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          }
        );
        const user = await resp.json();
        if (user.token) {
          return user;
        } else {
          throw new Error(
            JSON.stringify({ message: user.message, status: false })
          );
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt" as SessionStrategy,
    maxAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    jwt: async (params) => {
      if (params.user?.token) {
        const decoded = jwt_decode(params.user.token) as {
          email: string;
          name: string;
        };
        params.token.name = decoded.name;
        params.token.email = decoded.email;
        params.token.username = decoded.name;
        params.token.accessToken = params.user.token;
      }

      return params.token;
    },
    session: ({ session, token }) => {
      if (session.user) {
        (session.user as { email: string }).email = token.email as string;
        (session.user as { accessToken: string }).accessToken =
          token.accessToken as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;
