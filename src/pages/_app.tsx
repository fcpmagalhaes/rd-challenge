import Head from 'next/head'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head><title>RD Front End Challenge</title></Head>
      <Component {...pageProps} />
    </>
  )
}
