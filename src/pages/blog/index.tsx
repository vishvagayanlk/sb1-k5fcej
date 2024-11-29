import { GetStaticProps } from 'next'
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { format } from 'date-fns'
import BlogTopicNav from '../../components/BlogTopicNav'
import { ImageWithLoading } from '../../components/ImageWithLoading'
import Link from 'next/link'
import { TagIcon, ClockIcon } from '@heroicons/react/solid'
import { getAllPosts } from '../../lib/blog'
import { BlogPost } from '../../types'

interface BlogPageProps {
  posts: BlogPost[]
}

export default function BlogPage({ posts }: BlogPageProps) {
  // Server-side default text
  const description = "Insights and tutorials about web development, programming, and technology"

  return (
    <>
      <NextSeo
        title="Blog - Developer Insights & Tutorials"
        description={description}
        openGraph={{
          title: 'Blog - Developer Insights & Tutorials',
          description,
          images: [
            {
              url: 'https://yourwebsite.com/og/blog.jpg',
              width: 1200,
              height: 630,
              alt: 'Blog Header Image',
            },
          ],
        }}
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
            <p className="text-gray-400 max-w-2xl mx-auto font-matter" suppressHydrationWarning>
              {description}
            </p>
          </div>

          <BlogTopicNav />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
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
                    <ImageWithLoading
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
                      <span suppressHydrationWarning>
                        {format(new Date(post.date), 'MMMM d, yyyy')}
                      </span>
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
    revalidate: 3600
  }
}