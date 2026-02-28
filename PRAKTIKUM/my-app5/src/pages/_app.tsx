import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AppShell from '@/components/layout/Appshell'
import Navbar from '@/components/layout/navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  );
};