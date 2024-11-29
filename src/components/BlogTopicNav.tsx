import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Link from 'next/link'

const topics = [
  { id: 'all', name: 'All Posts' },
  { id: 'web-dev', name: 'Web Development' },
  { id: 'devops', name: 'DevOps' },
  { id: 'ai', name: 'AI & Machine Learning' },
  { id: 'architecture', name: 'Architecture' },
  { id: 'tutorials', name: 'Tutorials' }
]

export default function BlogTopicNav() {
  const router = useRouter()
  const currentTopic = (router.query.topic as string) || 'all'

  return (
    <nav className="mb-12 overflow-x-auto">
      <div className="flex space-x-4 pb-2">
        {topics.map((topic) => (
          <Link
            key={topic.id}
            href={{
              pathname: '/blog',
              query: topic.id === 'all' ? {} : { topic: topic.id }
            }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors
                ${currentTopic === topic.id
                  ? 'bg-neon-blue/10 text-neon-blue'
                  : 'text-gray-400 hover:text-neon-blue'
                }`}
            >
              {topic.name}
              {currentTopic === topic.id && (
                <motion.div
                  layoutId="activeTopicIndicator"
                  className="absolute inset-0 border-2 border-neon-blue rounded-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.div>
          </Link>
        ))}
      </div>
    </nav>
  )
}
