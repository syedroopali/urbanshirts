import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user, account, profile }) {
      const res = await fetch("http://localhost:3000/api/auth/signIn-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: profile?.name,
          email: profile?.email,
          image: profile?.picture,
        }),
      });
      if (!res.ok) return false;
      return true;
    },
  },
});
