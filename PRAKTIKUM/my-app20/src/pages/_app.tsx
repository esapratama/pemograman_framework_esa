import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppShell from "@/components/layout/Appshell";
import Navbar from "@/components/layout/navbar";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </SessionProvider>
  );
}