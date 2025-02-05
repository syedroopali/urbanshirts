import React, { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import NavBar from "@/components/navigation/NavBar";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  subsets: ["latin"],
});

const layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className}`}>
        <SessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            <main className="min-h-screen">{children}</main>
          </ThemeProvider>
          <Footer />
        </SessionProvider>
        <Toaster />
      </body>
    </html>
  );
};

export default layout;
