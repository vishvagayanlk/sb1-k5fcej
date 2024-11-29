import { useState } from 'react'
import { GetStaticProps } from 'next'
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { format } from 'date-fns'
import BlogTopicNav from '../../components/BlogTopicNav'
import Pagination from '../../components/Pagination'
import Link from 'next/link'
import { TagIcon, ClockIcon } from '@heroicons/react/solid'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  tags: string[]
  coverImage: string
  topic: string
}

// Sample blog posts data
const allPosts: BlogPost[] = Array.from({ length: 24 }, (_, i) => ({
  slug: `post-${i + 1}`,
  title: `Blog Post ${i + 1}`,
  excerpt: 'This is a sample blog post excerpt that demonstrates the content preview.',
  date: new Date(2024, 0, i + 1).toISOString(),
  readingTime: '5 min read',
  tags: ['Web Development', 'JavaScript', 'React'],
  coverImage: '/blog/placeholder.jpg',
  topic: ['web-dev', 'devops', 'ai'][i % 3]
}))

const POSTS_PER_PAGE = 6

export default function Blog({ posts }: { posts: BlogPost[] }) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  
  // Get current posts
  const indexOfLastPost = currentPage * POSTS_PER_PAGE
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <NextSeo
        title="Blog - Wishwa | Full Stack Developer"
        description="Thoughts and insights about web development, programming, and technology"
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
              Latest <span className="gradient-text">Articles</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto font-matter">
              Thoughts and insights about web development, programming, and technology
            </p>
          </div>

          <BlogTopicNav />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {currentPosts.map((post) => (
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
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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
                    
                    <p className="text-gray-400 mb-4 line-clamp-2 font-matter">
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

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </motion.div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const BLOG_DIR = path.join(process.cwd(), 'content/blog')
  const posts: BlogPost[] = []

  // Read all category directories
  const categories = ['web-dev', 'devops', 'ai']
  
  for (const category of categories) {
    const categoryDir = path.join(BLOG_DIR, category)
    
    // Add try-catch to handle directory access errors
    try {
      const files = fs.readdirSync(categoryDir)

      const categoryPosts = files
        .filter(file => file.endsWith('.mdx'))
        .map(file => {
          const filePath = path.join(categoryDir, file)
          const fileContent = fs.readFileSync(filePath, 'utf8')
          const { data } = matter(fileContent)
          
          // Add default values for all required fields
          return {
            slug: file.replace('.mdx', ''),
            title: data.title || 'Untitled Post',
            excerpt: data.excerpt || 'No excerpt available',
            date: data.date || new Date().toISOString(),
            readingTime: data.readingTime || '5 min read',
            tags: Array.isArray(data.tags) ? data.tags : ['Uncategorized'],
            coverImage: data.coverImage || '/images/default-cover.jpg',
            topic: category
          }
        })
        .filter(post => {
          // Filter out any posts with invalid data
          return (
            post.title &&
            post.excerpt &&
            post.date &&
            post.readingTime &&
            post.tags.length > 0 &&
            post.coverImage
          )
        })

      posts.push(...categoryPosts)
    } catch (error) {
      console.error(`Error reading directory ${categoryDir}:`, error)
    }
  }

  // Sort posts by date
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return {
    props: {
      // Ensure posts array is not empty
      posts: posts.length > 0 ? posts : []
    },
    // Add revalidation period
    revalidate: 3600 // Revalidate every hour
  }
}
