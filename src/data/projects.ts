export const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and GraphQL',
    image: '/projects/ecommerce.jpg',
    category: 'web',
    technologies: ['Next.js', 'GraphQL', 'Tailwind CSS', 'PostgreSQL'],
    github: 'https://github.com/username/project',
    demo: 'https://project-demo.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Mobile task management app with real-time collaboration',
    image: '/projects/task-app.jpg',
    category: 'mobile',
    technologies: ['React Native', 'Firebase', 'Redux'],
    github: 'https://github.com/username/project',
    demo: 'https://project-demo.com'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Personal portfolio website with modern design',
    image: '/projects/portfolio.jpg',
    category: 'design',
    technologies: ['React', 'Three.js', 'Framer Motion'],
    github: 'https://github.com/username/project',
    demo: 'https://project-demo.com'
  }
] as const