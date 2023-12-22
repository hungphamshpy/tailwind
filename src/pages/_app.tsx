import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

import { QueryClient, QueryClientProvider, HydrationBoundary } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // With SSR, we usually want to set some default staleTime
      // above 0 to avoid refetching immediately on the client
      staleTime: 600 * 1000,
    },
  },
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      
          <HydrationBoundary state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </HydrationBoundary>
      
    </QueryClientProvider>
  )
}