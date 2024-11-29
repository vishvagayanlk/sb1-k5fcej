import { useState } from 'react'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import { ToolsLayout } from '../../components/tools/layout/ToolsLayout'
import { SearchBar } from '../../components/tools/components/SearchBar'
import { ToolCategory } from '../../components/tools/components/ToolCategory'
import { tools } from '../../components/dashboard/tools'

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  // Group tools by category
  const categories = tools.reduce((acc, tool) => {
    const category = acc.find(c => c.id === tool.category)
    if (category) {
      category.tools.push(tool)
    } else {
      acc.push({
        id: tool.category,
        name: tool.category.charAt(0).toUpperCase() + tool.category.slice(1),
        tools: [tool]
      })
    }
    return acc
  }, [] as { id: string; name: string; tools: typeof tools }[])

  // Filter tools based on search query
  const filteredCategories = categories.map(category => ({
    ...category,
    tools: category.tools.filter(tool =>
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.tools.length > 0)

  return (
    <>
      <NextSeo
        title="Developer Tools - Wish"
        description="A collection of useful tools for developers"
      />

      <ToolsLayout>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-cal mb-4">
              Developer <span className="gradient-text">Tools</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto font-matter">
              A collection of useful tools to help streamline your development workflow
            </p>
          </div>

          <SearchBar value={searchQuery} onChange={setSearchQuery} />

          {filteredCategories.map(category => (
            <ToolCategory
              key={category.id}
              title={category.name}
              tools={category.tools}
            />
          ))}
        </motion.div>
      </ToolsLayout>
    </>
  )
}