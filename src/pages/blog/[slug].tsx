import { GetStaticProps, GetStaticPaths } from 'next'
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { format } from 'date-fns'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import { TagIcon, ClockIcon, ArrowLeftIcon } from '@heroicons/react/solid'
import { ImageWithLoading } from '../../components/ImageWithLoading'
import { getPostBySlug, getAllPosts } from '../../lib/blog'
import { BlogPost } from '../../types'

interface BlogPostPageProps {
  post: BlogPost & {
    content: any // MDX content
  }
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  if (!post) return null

  return (
    <>
      <NextSeo
        title={`${post.title} - Developer Blog`}
        description={post.excerpt}
        openGraph={{
          title: post.title,
          description: post.excerpt,
          images: [
            {
              url: post.coverImage,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ],
          type: 'article',
          article: {
            publishedTime: post.date,
            authors: [post.author.name],
            tags: post.tags,
          },
        }}
      />

      <article className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <nav className="flex items-center gap-2 text-gray-400 mb-8">
            <Link
              href="/blog"
              className="hover:text-neon-blue transition-colors flex items-center gap-2"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back to Blog
            </Link>
          </nav>

          <div className="glass-panel p-6 md:p-8">
            <div className="relative aspect-[2/1] rounded-xl overflow-hidden mb-8">
              <ImageWithLoading
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
                priority
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
              <MDXRemote {...post.content} />
            </div>
          </div>
        </motion.div>
      </article>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params?.slug as string, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'coverImage',
    'excerpt',
    'tags',
    'readingTime',
  ])

  if (!post) {
    return {
      notFound: true
    }
  }

  const content = await serialize(post.content || '', {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeHighlight],
    },
  })

  return {
    props: {
      post: {
        ...post,
        content
      }
    },
    revalidate: 3600
  }
}