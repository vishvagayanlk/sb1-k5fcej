import { GetStaticProps, GetStaticPaths } from 'next'
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost } from '../../../types'
import BlogTopicNav from '../../../components/BlogTopicNav'
import { TagIcon, ClockIcon } from '@heroicons/react/solid'
import { format } from 'date-fns'

export default function TagPage({ posts }: { posts: BlogPost[] }) {
  const router = useRouter()
  const { tag } = router.query

  return (
    <>
      <NextSeo
        title={`${tag} Posts - Blog`}
        description={`Articles tagged with ${tag}`}
      />

      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-cal mb-4">
              Posts tagged with <span className="gradient-text">{tag}</span>
            </h1>
          </div>

          <BlogTopicNav />

          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-panel hover:border-neon-blue/30 transition-all duration-200"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative aspect-video rounded-t-2xl overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 text-sm text-neon-blue/90"
                        >
                          <TagIcon className="w-4 h-4" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-xl font-cal text-white mb-2 hover:text-neon-blue transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{format(new Date(post.date), 'MMMM d, yyyy')}</span>
                      <span className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        {post.readingTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const BLOG_DIR = path.join(process.cwd(), 'content/blog')
  const categories = ['web-dev', 'devops', 'ai']
  const allTags = new Set<string>()

  for (const category of categories) {
    const categoryDir = path.join(BLOG_DIR, category)
    const files = fs.readdirSync(categoryDir)

    files.forEach(file => {
      const filePath = path.join(categoryDir, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContent)
      if (data.tags) {
        data.tags.forEach((tag: string) => allTags.add(tag))
      }
    })
  }

  const paths = Array.from(allTags).map(tag => ({
    params: { tag }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tag = params?.tag as string
  const BLOG_DIR = path.join(process.cwd(), 'content/blog')
  const posts: BlogPost[] = []
  const categories = ['web-dev', 'devops', 'ai']

  for (const category of categories) {
    const categoryDir = path.join(BLOG_DIR, category)
    try {
      const files = fs.readdirSync(categoryDir)

      const categoryPosts = files
        .filter(file => file.endsWith('.mdx'))
        .map(file => {
          const filePath = path.join(categoryDir, file)
          const fileContent = fs.readFileSync(filePath, 'utf8')
          const { data } = matter(fileContent)
          return {
            slug: file.replace('.mdx', ''),
            title: data.title || 'Untitled Post',
            excerpt: data.excerpt || 'No excerpt available',
            date: data.date || new Date().toISOString(),
            readingTime: data.readingTime || '5 min read',
            tags: Array.isArray(data.tags) ? data.tags : ['Uncategorized'],
            coverImage: data.coverImage || '/images/default-cover.jpg',
            topic: category,
            author: {
              picture: data.author.picture || '/images/default-avatar.jpg',
              name: data.author.name || 'Unknown Author'
            }
          }
        })
        .filter(post => post.tags.includes(tag))

      posts.push(...categoryPosts)
    } catch (error) {
      console.error(`Error reading directory ${categoryDir}:`, error)
    }
  }

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return {
    props: {
      posts
    }
  }
}