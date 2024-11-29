import { motion } from 'framer-motion'
import { BriefcaseIcon } from '@heroicons/react/solid'


const experienceAnimation = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}


const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    period: '2021 - Present',
    description: [
      'Led development of enterprise-scale applications using Next.js and GraphQL',
      'Implemented CI/CD pipelines reducing deployment time by 40%',
      'Mentored junior developers and conducted code reviews',
    ],
    tech: ['Next.js', 'GraphQL', 'AWS', 'Docker']
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Innovations',
    period: '2019 - 2021',
    description: [
      'Developed and maintained multiple client projects',
      'Implemented responsive designs and RESTful APIs',
      'Optimized application performance improving load times by 60%',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis']
  },
  {
    title: 'Frontend Developer',
    company: 'WebTech Agency',
    period: '2018 - 2019',
    description: [
      'Created responsive web applications',
      'Implemented modern UI/UX designs',
      'Collaborated with design team to improve user experience',
    ],
    tech: ['React', 'JavaScript', 'SASS', 'Redux']
  }
]

export function Experience() {
  return (
    <section id="experience" className="container-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cal mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-matter">
            My professional journey in software development
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-4 bottom-4 w-px bg-dark-700 md:left-1/2 md:-ml-0.5" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                variants={experienceAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`glass-panel p-6 md:p-8 max-w-xl mx-auto md:mx-0 
                                ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 p-3 rounded-lg bg-neon-blue/10 text-neon-blue">
                      <BriefcaseIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-sm font-mono text-neon-blue">
                        {experience.period}
                      </span>
                      <h3 className="text-xl font-cal text-white mt-1 mb-2">
                        {experience.title}
                      </h3>
                      <p className="text-lg text-neon-purple mb-4 font-matter">
                        {experience.company}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {experience.description.map((item, i) => (
                          <li key={i} className="text-gray-400 font-matter flex items-start">
                            <span className="text-neon-blue mr-2">›</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {experience.tech.map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}