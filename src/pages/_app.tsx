import { Poppins } from 'next/font/google'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '@/store'
import '@/styles/globals.css'
import { Layout } from '@/components/Layout/Layout'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className={`${poppins.variable} font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </Provider>
  )
}
