import { GetStaticProps, GetStaticPaths } from 'next'
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { format } from 'date-fns'
import Link from 'next/link'
import { TagIcon, ClockIcon, ArrowLeftIcon } from '@heroicons/react/solid'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface BlogPost {
  slug: string
  title: string
  content: string
  date: string
  readingTime: string
  tags: string[]
  coverImage: string
}

export default function BlogPost({ post }: { post: BlogPost }) {
  return (
    <>
      <NextSeo
        title={`${post.title} - Wish | Full Stack Developer`}
        description={post.content.slice(0, 160)}
      />

      <article className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-2 text-gray-400 mb-8">
            <Link
              href="/blog"
              className="hover:text-neon-blue transition-colors"
            >
              Blog
            </Link>
            <span>/</span>
            {post.tags[0] && (
              <>
                <Link
                  href={`/blog/tag/${encodeURIComponent(post.tags[0])}`}
                  className="hover:text-neon-blue transition-colors"
                >
                  {post.tags[0]}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-gray-200">{post.title}</span>
          </div>

          <div className="glass-panel p-6 md:p-8">
            <div className="relative aspect-[2/1] rounded-xl overflow-hidden mb-8">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60" />
            </div>

            <div className="flex flex-wrap gap-3 mb-4">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${encodeURIComponent(tag)}`}
                  className="flex items-center gap-1 text-sm text-neon-blue/90 hover:text-neon-blue transition-colors"
                >
                  <TagIcon className="w-4 h-4" />
                  {tag}
                </Link>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-cal text-white mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
              <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
              <span className="flex items-center gap-1">
                <ClockIcon className="w-4 h-4" />
                {post.readingTime}
              </span>
            </div>

            <div className="prose prose-invert prose-blue max-w-none">
              {post.content}
            </div>
          </div>
        </motion.div>
      </article>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const BLOG_DIR = path.join(process.cwd(), 'content/blog')
  const paths: { params: { slug: string } }[] = []
  
  const categories = ['web-dev', 'devops', 'ai']
  
  for (const category of categories) {
    const categoryDir = path.join(BLOG_DIR, category)
    const files = fs.readdirSync(categoryDir)
    
    const categoryPaths = files
      .filter(file => file.endsWith('.mdx'))
      .map(file => ({
        params: { slug: file.replace('.mdx', '') }
      }))
    
    paths.push(...categoryPaths)
  }

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = params?.slug as string
    const BLOG_DIR = path.join(process.cwd(), 'content/blog')
    const categories = ['web-dev', 'devops', 'ai']
    let post = null

    // Search for the post in all category directories
    for (const category of categories) {
      const filePath = path.join(BLOG_DIR, category, `${slug}.mdx`)
      
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContent)
        
        post = {
          slug,
          title: data.title || 'Untitled Post',
          content: content || '',
          date: data.date || new Date().toISOString(),
          readingTime: data.readingTime || '5 min read',
          tags: Array.isArray(data.tags) ? data.tags : ['Uncategorized'],
          coverImage: data.coverImage || '/images/default-cover.jpg',
        }
        break
      }
    }

    // If no post is found, return 404
    if (!post) {
      return {
        notFound: true
      }
    }

    return {
      props: {
        post
      },
      revalidate: 3600 // Revalidate every hour
    }
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return {
      notFound: true
    }
  }
}
