import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { Project } from '../../types'
import { Button } from '../ui/buttons/Button'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="glass-panel overflow-hidden group">
      <div className="relative aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-60" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-cal text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 font-matter mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tech => (
            <span
              key={tech}
              className="px-2 py-1 text-sm bg-dark-800 text-neon-blue rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.github && (
            <a
              className="button ghost"
              href={project.github}
              target="_blank"
            >
              <FiGithub />
              Source
            </a>
          )}
          {project.demo && (
            <Button>
              <a
                className="button ghost"
                href={project.demo}
                target="_blank"
              >
                <FiExternalLink />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}