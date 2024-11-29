import { motion } from 'framer-motion'
import { tools } from '../dashboard/tools'
import Link from 'next/link'

export function ToolsShowcase() {
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
            Popular <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-matter">
            Discover our most-used developer tools and utilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.slice(0, 6).map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link href={`/tools/${tool.id}`}>
                <div className="glass-panel p-6 hover:border-neon-blue/30 transition-all duration-200">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-neon-blue/10 text-neon-blue">
                      <tool.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-cal text-white mb-2">{tool.name}</h3>
                      <p className="text-gray-400 font-matter mb-4">{tool.description}</p>
                      <span className="text-neon-blue hover:text-neon-purple transition-colors">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/tools">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              View All Tools
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}