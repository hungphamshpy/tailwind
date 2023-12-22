import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { Nunito } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Nunito({ subsets: ['latin'] })
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
            <main className={inter.className}>
             <Component {...pageProps} />
            </main>
          </HydrationBoundary>
      
    </QueryClientProvider>
  )
}