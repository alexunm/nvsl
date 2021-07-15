import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { Layout } from '../components/Layout'
import { FetchProvider, SessionProvider } from '../providers'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NSVL</title>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      </Head>
      <FetchProvider>
        <SessionProvider>
          <Layout>
            <Layout.Navigation />
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </FetchProvider>
    </>
  )
}
export default MyApp
