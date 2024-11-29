import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const testimonials = [
  {
    content: "These tools have completely transformed my development workflow. I can't imagine coding without them now.",
    author: "Sarah Chen",
    role: "Senior Developer",
    avatar: "/testimonials/avatar-1.jpg"
  },
  {
    content: "The AI-powered features are incredible. It's like having a smart coding assistant by your side.",
    author: "Michael Rodriguez",
    role: "Full Stack Engineer",
    avatar: "/testimonials/avatar-2.jpg"
  },
  {
    content: "Clean interface, powerful features, and excellent performance. Everything a developer needs.",
    author: "Emma Thompson",
    role: "Tech Lead",
    avatar: "/testimonials/avatar-3.jpg"
  }
]

export function Testimonials() {
  return (
    <section className="container-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-cal mb-4">
            Loved by <span className="gradient-text">Developers</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-matter">
            See what other developers are saying about our tools
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="glass-panel p-6"
            >
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 font-matter">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-cal text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}