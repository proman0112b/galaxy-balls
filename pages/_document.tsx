import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => (props: any) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.cdnfonts.com/css/aquire" rel="stylesheet" />
          <link href="https://fonts.cdnfonts.com/css/inter" rel="stylesheet" />
          <link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet" />
          <link href="https://fonts.cdnfonts.com/css/arial-rounded-mt-bold" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <noscript>Sorry, your browser does not support JavaScript!</noscript>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
