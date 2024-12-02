import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head';
import { Noto_Sans } from 'next/font/google';

const notoSans = Noto_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
          <title>Popstar Ventures</title>
          <meta name="description" content="Creative VC For The Creator Economy" />
          <meta name="viewport" content="width=1440px, initial-scale=1" />
        </Head>
      <main className={notoSans.className}>
        <Component {...pageProps} />
      </main>
    </>
  ) 
}
