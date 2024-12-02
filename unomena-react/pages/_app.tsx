import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lora, Noto_Sans } from 'next/font/google'

const lora = Lora({ subsets: ['latin']});
const notoSans = Noto_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={notoSans.className}>
      <Component {...pageProps} />
    </main>
  ) 
}
