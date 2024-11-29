import { motion } from 'framer-motion'
import { FiCode, FiCoffee, FiUsers, FiAward } from 'react-icons/fi'

const stats = [
  {
    icon: FiCode,
    value: '500K+',
    label: 'Lines of Code',
    color: 'text-neon-blue'
  },
  {
    icon: FiUsers,
    value: '50+',
    label: 'Happy Clients',
    color: 'text-neon-purple'
  },
  {
    icon: FiAward,
    value: '30+',
    label: 'Projects Completed',
    color: 'text-neon-pink'
  },
  {
    icon: FiCoffee,
    value: '∞',
    label: 'Cups of Coffee',
    color: 'text-amber-500'
  }
]

export function Stats() {
  return (
    <section className="container-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 text-center"
            >
              <div className={`flex justify-center mb-4 ${stat.color}`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-cal mb-2">{stat.value}</div>
              <div className="text-gray-400 font-matter">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}