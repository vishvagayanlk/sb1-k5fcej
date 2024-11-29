/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://yourwebsite.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://yourwebsite.com/sitemap.xml',
      'https://yourwebsite.com/server-sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/admin/*'],
      },
    ],
  },
  exclude: ['/admin/*', '/api/*'],
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 0.7,
}
