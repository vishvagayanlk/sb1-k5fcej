import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import { getAllPosts } from '../../lib/blog'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const posts = getAllPosts(['slug', 'date'])

  const fields = posts.map(post => ({
    loc: `${process.env.SITE_URL}/blog/${post.slug}`,
    lastmod: post.date,
    changefreq: 'weekly',
    priority: 0.7,
  }))

  // This is where we return the correct GetServerSidePropsResult
  return {
    props: {},  // You can return any props here if needed
    // This will correctly handle the sitemap generation
    revalidate: 1, // Optionally set a revalidate time if needed
    notFound: false, // Or you can set notFound: true depending on the conditions
  }
}

export default function Sitemap() {}
