import type { AppProps } from "next/app"
import Head from "next/head"

import GlobalStyles from "styles/global"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplace</title>
        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, Next JS, and Styled Components"
        />
        <meta name="theme-color" content="#06092b" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
