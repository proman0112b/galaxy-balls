import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

interface SEOSupportProps {
  title: string
  description: string
  keywords?: string
  canonical?: string
  css?: string
  js?: string
  image?: string
}

const SEOSupport: React.FC<SEOSupportProps> = ({ title, description, canonical, keywords, css, js, image }) => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width,maximum-scale=5,initial-scale=1" />
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta name="og:description" property="og:description" content={description} />
    <meta property="og:site_name" content="nutritionwarehouse" />
    <meta property="og:url" content={`${canonical || 'nutritionwarehouse.com.au'}`} />
    {image ? <meta property="og:image" content={`${image}`} /> : ''}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content={`${canonical || 'nutritionwarehouse.com.au'}`} />
    {image && <meta name="twitter:image" content={`${image}`} />}
    {canonical && <link rel="canonical" href={`${canonical}`} />}
    <link rel="publisher" href="www.nutritionwarehouse.com.au" />
    <meta name="robots" content="index,follow" />
    <meta name="GOOGLEBOT" content="index,follow" />
    {css && <link rel="stylesheet" href={`${css}`} />}
    {js && <Script type="text/javascript" src={`${js}`} />}
  </Head>
)

export default SEOSupport
