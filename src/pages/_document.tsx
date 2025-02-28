import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
          media="print"
          onLoad={() => { (document.querySelector('link[rel="stylesheet"]') as HTMLLinkElement).media = 'all'; }}
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
          media="print"
          onLoad={() => { (document.querySelector('link[rel="stylesheet"]') as HTMLLinkElement).media = 'all'; }}
        />
        <meta name="theme-color" content="#0a0c10" />
        <link rel="preload" as="image" href="/images/hero-bg.webp" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}