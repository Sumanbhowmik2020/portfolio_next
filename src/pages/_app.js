import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
//import { Main } from 'next/document';
import { Montserrat } from "next/font/google"
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script'


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})
export default function App({ Component, pageProps }) {
  const router=useRouter();
  return (
    <>
      <Script async id="otracker" src="https://otrackerdocs.onpassive.com/bundle.js?ver=1706026907414" domain_id="D6TDQ8" domain_name="https://sumanbhowmik.com/"/>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar />
          <AnimatePresence mode='wait'>
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
        <Footer />
      </main>
    </>
  )


}
