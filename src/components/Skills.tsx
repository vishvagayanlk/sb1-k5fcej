import { motion } from 'framer-motion'

const skills = [
  {
    category: 'Frontend',
    items: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'GraphQL']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    category: 'DevOps',
    items: ['Docker', 'AWS', 'CI/CD', 'Linux', 'Nginx']
  }
]

export function Skills() {
  return (
    <section id="skills" className="container-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {skills.map((skillSet) => (
            <div
              key={skillSet.category}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4">{skillSet.category}</h3>
              <ul className="space-y-2">
                {skillSet.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
