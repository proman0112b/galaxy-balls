import '../i18n'
import i18next from 'i18next'
import { useEffect, useState } from 'react'
import { defaultLanguage, languages } from '../i18n'
import { useRouter } from 'next/router'

import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import Layout from '../components/layout'
import 'react-gallery-carousel/dist/index.css'
import 'swiper/css/bundle'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { asPath, query } = router

  // Detect current language
  const slug = asPath.split('/')[1]
  const langSlug = languages.includes(slug) && slug
  const language = query.lang || langSlug || defaultLanguage

  const [clientLanguage, setClientLanguage] = useState<any>(language)

  useEffect(() => {
    setClientLanguage(language)
  }, [language])

  // Don't trigger `i18next.changeLanguage()` on root folder, use `router` to redirect to the specific language
  if (asPath !== '/' && asPath !== '/404') {
    i18next.changeLanguage(clientLanguage)
  }

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
