import { AppProps } from 'next/app'
import { useEffect } from 'react'

import SmoothProvider from '@/lib/react-smooth-scrolling'

import Layout from '@/components/Layout'
import Context from '@/context'

import '@/utils/debounce'
import Header from '@/components/Header'
import Player from '@/components/Player'

export default function App({
  Component: SsrComponent,
  pageProps: ssrPageProps
}: AppProps) {
  useEffect(() => {
    import('@/utils/NewHTMLElementFeatures')
    console.log(
      '%cSolrachix',
      'color: blue; font-size: 120px; font-weight: 900;'
    )
  }, [])
  return (
    <Context>
      <Layout>
        <main>
          <Header />
          <SsrComponent {...ssrPageProps} />
        </main>

        <Player />
      </Layout>
    </Context>
  )
}
