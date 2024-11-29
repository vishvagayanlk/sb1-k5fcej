import { motion } from 'framer-motion'
import TypewriterText from './TypewriterText'

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
              Hi, I'm{' '}
              <TypewriterText
                text="Wishwa Wijayasinghe"
                className="gradient-text"
                delay={80}
              />
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-matter">
              Full Stack Developer & Tech Enthusiast
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto font-matter"
          >
            Building exceptional digital experiences with modern web technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
            className="flex gap-4 justify-center"
          >
            <a href="#contact" className="btn-primary">
              Get in Touch
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
