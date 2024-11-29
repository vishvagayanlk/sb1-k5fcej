import { motion } from 'framer-motion'
import { MailIcon, GlobeIcon } from '@heroicons/react/outline'
export function Contact() {
  return (
    <section id="contact" className="container-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          I'm currently open to new opportunities. Whether you have a question or 
          just want to say hi, feel free to reach out!
        </p>
        <div className="flex flex-col items-center gap-4">
          <a
            href="mailto:contact@johndoe.dev"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
          >
            <MailIcon className="w-5 h-5" />
            <span>contact@johndoe.dev</span>
          </a>
          <a
            href="https://johndoe.dev"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
          >
            <GlobeIcon className="w-5 h-5" />
            <span>johndoe.dev</span>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
