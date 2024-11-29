import { motion } from 'framer-motion'
import { ProjectCard } from './ProjectCard'
import { projects } from '../../data/projects'

interface ProjectGridProps {
  filter: string
}

export function ProjectGrid({ filter }: ProjectGridProps) {
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter)

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  )
}