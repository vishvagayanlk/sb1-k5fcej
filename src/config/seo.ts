const SEO = {
  defaultTitle: 'John Doe | Full Stack Developer',
  titleTemplate: '%s | John Doe',
  description: 'Full Stack Developer specializing in building exceptional digital experiences with modern web technologies.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://johndoe.dev',
    siteName: 'John Doe - Full Stack Developer',
    images: [
      {
        url: 'https://johndoe.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'John Doe - Full Stack Developer',
      },
    ],
  },
  twitter: {
    handle: '@johndoe',
    site: '@johndoe',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'full stack developer, web development, react, typescript, node.js, software engineer',
    },
    {
      name: 'author',
      content: 'John Doe',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
}

export default SEO
