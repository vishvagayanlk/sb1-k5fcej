import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'Project Nexus',
    description: 'A modern e-commerce platform built with Next.js, featuring real-time inventory management and seamless payment integration.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
    github: 'https://github.com/username/project',
    live: 'https://project-demo.com',
    image: '/projects/project1.png'
  },
  {
    title: 'DevFlow',
    description: 'Developer productivity tool that helps teams streamline their workflow with AI-powered code suggestions.',
    tech: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
    github: 'https://github.com/username/project',
    live: 'https://project-demo.com',
    image: '/projects/project2.png'
  },
  {
    title: 'CryptoVision',
    description: 'Real-time cryptocurrency tracking and analytics platform with advanced charting capabilities.',
    tech: ['Vue.js', 'Python', 'WebSocket', 'PostgreSQL'],
    github: 'https://github.com/username/project',
    live: 'https://project-demo.com',
    image: '/projects/project3.png'
  }
]

export function FeaturedProjects() {
  return (
    <section id="projects" className="container-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cal mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-matter">
            A collection of projects that showcase my passion for building innovative solutions
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-hover"
            >
              <div className="glass-panel p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Project Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-cal text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 font-matter">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors duration-200"
                      >
                        <FiGithub className="w-5 h-5" />
                        <span className="font-matter">Source</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors duration-200"
                      >
                        <FiExternalLink className="w-5 h-5" />
                        <span className="font-matter">Live Demo</span>
                      </a>
                    </div>
                  </div>
                  
                  {/* Project Image */}
                  <div className="relative rounded-lg overflow-hidden">
                    <div className="aspect-[16/9]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-dark-950/50 backdrop-blur-[2px] opacity-0 hover:opacity-100 transition-opacity duration-200" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}