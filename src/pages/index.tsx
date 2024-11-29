import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { Hero } from '../components/home/Hero'
import { ToolsShowcase } from '../components/home/ToolsShowcase'
import { BlogPreview } from '../components/BlogPreview'
import { SciFiBackground } from '../components/SciFiBackground'
import { getAllPosts } from '../lib/blog'
import { BlogPost } from '../types'

interface HomeProps {
  posts: BlogPost[]
}

export default function Home({ posts = [] }: HomeProps) {
  return (
    <>
      <NextSeo
        title="DevToolkit - Modern Developer Tools & Insights"
        description="Discover modern developer tools and insightful articles to enhance your development workflow"
      />
      <SciFiBackground />
      <main>
        <Hero />
        <ToolsShowcase />
        <BlogPreview posts={posts} />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tags',
    'readingTime',
  ])

  return {
    props: { 
      posts: posts || [] 
    },
    revalidate: 3600,
  }
}