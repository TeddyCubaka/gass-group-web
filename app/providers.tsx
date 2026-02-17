"use client";

import { SessionProvider } from "next-auth/react";
import { LocaleProvider } from "@/contexts/locale-context";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState, useEffect, ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="h-20 bg-white" />
        <main className="flex-1">{children}</main>
      </div>
    );
  }

  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <LocaleProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LocaleProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
