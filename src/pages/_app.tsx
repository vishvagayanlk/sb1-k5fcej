import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'
import { AnimatePresence } from 'framer-motion'
import Layout from '../components/Layout'
import '../styles/globals.css'
import SEO from '../config/seo'

export default function App({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <DefaultSeo {...SEO} />
      <Layout>
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  )
}
