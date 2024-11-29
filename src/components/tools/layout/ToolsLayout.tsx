import { motion } from 'framer-motion'
import { SciFiBackground } from '../../SciFiBackground'
import Navigation from '../../Navigation'

interface ToolsLayoutProps {
  children: React.ReactNode
}

export function ToolsLayout({ children }: ToolsLayoutProps) {
  return (
    <div className="min-h-screen mesh-background">
      <SciFiBackground />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container-section pt-24"
      >
        {children}
      </motion.main>
    </div>
  )
}