import { motion } from 'framer-motion'
import { FiCommand, FiCpu, FiZap, FiShield } from 'react-icons/fi'

const features = [
  {
    icon: FiCommand,
    title: 'Developer Tools',
    description: 'Powerful tools for formatting, testing, and debugging your code',
    color: 'text-neon-blue'
  },
  {
    icon: FiCpu,
    title: 'AI-Powered',
    description: 'Smart suggestions and automated workflows to boost productivity',
    color: 'text-neon-purple'
  },
  {
    icon: FiZap,
    title: 'Lightning Fast',
    description: 'Optimized performance for seamless development experience',
    color: 'text-neon-pink'
  },
  {
    icon: FiShield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security for your development workflow',
    color: 'text-emerald-400'
  }
]

export function Features() {
  return (
    <section className="container-section relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-cal mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-matter">
            Everything you need to streamline your development workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="glass-panel p-6 hover:border-neon-blue/30"
            >
              <div className={`p-3 rounded-lg bg-dark-800 ${feature.color} w-fit mb-4`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-cal text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 font-matter">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}