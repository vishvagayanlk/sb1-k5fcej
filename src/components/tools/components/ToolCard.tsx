import { motion } from 'framer-motion'
import Link from 'next/link'
import { Tool } from '../types'

interface ToolCardProps {
  tool: Tool
  index: number
}

export function ToolCard({ tool, index }: ToolCardProps) {
  return (
    <motion.div
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
              <div className="text-sm text-gray-500">
                {tool.usageCount} uses
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}