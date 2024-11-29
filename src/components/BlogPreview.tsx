import { motion } from 'framer-motion'
import Link from 'next/link'
import { format } from 'date-fns'
import { BlogPost } from '../types'
import { FiArrowRight, FiClock, FiTag } from 'react-icons/fi'

interface BlogPreviewProps {
  posts: BlogPost[]
}

export function BlogPreview({ posts = [] }: BlogPreviewProps) {
  // Server-side default text
  const description = "Explore articles about development, best practices, and tech insights"

  if (posts.length === 0) {
    return null
  }

  return (
    <section className="container-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-cal mb-4">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-matter" suppressHydrationWarning>
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {posts.slice(0, 3).map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
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
                  <div className="flex items-center gap-2 text-sm text-neon-blue mb-3">
                    <FiTag className="w-4 h-4" />
                    {post.tags?.[0] || 'General'}
                  </div>

                  <h3 className="text-xl font-cal text-white mb-2 hover:text-neon-blue transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-2 font-matter">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span suppressHydrationWarning>
                      {format(new Date(post.date), 'MMMM d, yyyy')}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiClock className="w-4 h-4" />
                      {post.readingTime}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center"
            >
              View All Articles
              <FiArrowRight className="ml-2" />
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}