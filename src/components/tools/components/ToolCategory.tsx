import { motion } from 'framer-motion'
import { ToolCard } from './ToolCard'
import { Tool } from '../types'

interface ToolCategoryProps {
  title: string
  tools: Tool[]
}

export function ToolCategory({ title, tools }: ToolCategoryProps) {
  return (
    <section className="mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-cal mb-6"
      >
        {title}
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <ToolCard key={tool.id} tool={tool} index={index} />
        ))}
      </div>
    </section>
  )
}