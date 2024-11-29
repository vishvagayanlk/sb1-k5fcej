import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
}

export default function Section({ id, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`container-section ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
        {children}
      </motion.div>
    </section>
  )
}
