import type { AppProps } from 'next/app'
import React from 'react'
import { Layout } from '../components/Layout'
import { FetchProvider, SessionProvider } from '../providers'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FetchProvider>
      <SessionProvider>
        <Layout>
          <Layout.Navigation />
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </FetchProvider>
  )
}
export default MyApp
