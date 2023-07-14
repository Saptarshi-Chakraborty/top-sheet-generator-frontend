import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        {/* Google Ads Script */}
        <Script async={true} src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8246079031177347" crossOrigin="anonymous" strategy="lazyOnload" />

        <Script async={true} src="https://www.googletagmanager.com/gtag/js?id=G-TCCV50M5QF" />
        <Script >
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TCCV50M5QF');`}
        </Script>
      </Head >


      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
