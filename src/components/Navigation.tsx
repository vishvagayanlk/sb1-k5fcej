import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ThemeToggle from './ThemeToggle'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Tools', href: '/tools' }, // Add this line
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#contact' },
  ]

  const isActive = (href: string) => {
    if (href.startsWith('/#')) {
      return router.asPath === '/' && router.asPath.endsWith(href.slice(1))
    }
    return router.asPath.startsWith(href)
  }

  return (
    <nav className="fixed w-full z-50 glass-panel">
      <div className="container-section !py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-xl font-cal gradient-text"
            >
              WISH
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Link
                  href={item.href}
                  className={`nav-link ${isActive(item.href) ? 'text-neon-blue' : ''}`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-dark-800 text-gray-400 hover:text-neon-blue"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XIcon className="w-5 h-5" />
              ) : (
                <MenuIcon className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="md:hidden mt-4"
            >
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <Link
                      href={item.href}
                      className={`block px-4 py-2 rounded-lg text-gray-400 hover:text-neon-blue hover:bg-dark-800/50 ${
                        isActive(item.href) ? 'text-neon-blue bg-dark-800/50' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
