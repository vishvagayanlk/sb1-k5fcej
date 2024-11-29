import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiBook, FiCode } from 'react-icons/fi'
import TypewriterText from '../TypewriterText'

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center container-section">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-cal mb-4">
              Discover Developer Tools That{' '}
              <TypewriterText
                text="Spark Innovation"
                className="gradient-text"
                delay={80}
              />
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-matter">
              A curated collection of modern tools to enhance your development workflow
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto font-matter"
          >
            From code formatting to API testing, find the perfect tools for your development needs
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/tools">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center"
              >
                <FiCode className="mr-2" />
                Explore Tools
                <FiArrowRight className="ml-2" />
              </motion.button>
            </Link>
            <Link href="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center"
              >
                <FiBook className="mr-2" />
                Read Blog
              </motion.button>
            </Link>
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                About Developer
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}