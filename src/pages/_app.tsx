// import '@component/styles/globals.css'
import { SSRProvider } from 'react-bootstrap'
import '../scss/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <SSRProvider><Component {...pageProps} /></SSRProvider>
}
