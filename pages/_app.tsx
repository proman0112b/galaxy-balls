import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import Layout from '../components/layout'
import 'react-gallery-carousel/dist/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
