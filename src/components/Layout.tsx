import { motion } from 'framer-motion'
import Navigation from './Navigation'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen pt-16 mesh-background">
      <div className="fixed inset-0 bg-gradient-radial from-transparent to-dark-950 pointer-events-none" />
      <Navigation />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative"
      >
        {children}
      </motion.main>
    </div>
  )
}
