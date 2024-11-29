import { motion } from 'framer-motion'
import { ChipIcon, CodeIcon, TerminalIcon } from '@heroicons/react/outline'

export function About() {
  const skills = [
    'JavaScript/TypeScript',
    'React/Next.js',
    'Node.js',
    'Python',
    'AWS',
    'Docker',
  ]

  return (
    <section id="about" className="container-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="space-y-4 text-gray-300 font-sans">
                <p>
                  Hello! I'm <span className="text-neon-blue font-medium">Wishwa Gayan Wijayasinghe</span>, 
                  but you can call me Wish. I'm a passionate developer who loves creating innovative digital experiences.
                </p>
                <p>
                  With a keen eye for detail and a love for clean code, I specialize in building 
                  modern web applications that combine functionality with cutting-edge design.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-display text-2xl font-bold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-dark-800/50 border border-dark-700 
                               text-neon-blue text-sm font-mono hover:border-neon-blue/50 
                               transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-panel p-6 hover:border-neon-purple/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-neon-purple/10 text-neon-purple">
                    <CodeIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">Clean Code Advocate</h3>
                    <p className="text-gray-400">
                      Writing maintainable, efficient, and scalable code is not just a practice, 
                      it's a principle I live by.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-6 hover:border-neon-blue/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-neon-blue/10 text-neon-blue">
                    <TerminalIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">Problem Solver</h3>
                    <p className="text-gray-400">
                      Turning complex problems into simple, elegant solutions is what drives me 
                      in software development.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-6 hover:border-neon-pink/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-neon-pink/10 text-neon-pink">
                    <ChipIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2">Tech Enthusiast</h3>
                    <p className="text-gray-400">
                      Always staying ahead of the curve with emerging technologies and industry 
                      best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
