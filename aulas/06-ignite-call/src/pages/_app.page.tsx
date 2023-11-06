// USE THIS FOR pt-BR
// import '../lib/dayjs'

import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { DefaultSeo } from 'next-seo'
import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '../lib/react-query'

import { globalStyles } from '../styles/global'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <DefaultSeo
          openGraph={{
            type: 'wesite',
            locale: 'en_IE',
            url: 'https://www.orafadev.com.br/',
            siteName: 'Rafael Martins | Ignite Call',
          }}
        />
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  )
}
