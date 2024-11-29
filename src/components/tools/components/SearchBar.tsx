import { motion } from 'framer-motion'
import { FiSearch } from 'react-icons/fi'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12"
    >
      <div className="relative max-w-2xl mx-auto">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search tools..."
          className="w-full px-4 py-3 pl-12 bg-dark-800/50 border border-dark-700 rounded-lg
                   text-white placeholder-gray-400 focus:border-neon-blue/50 focus:ring-1 
                   focus:ring-neon-blue/50 transition-colors"
        />
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>
    </motion.div>
  )
}