import { motion } from 'framer-motion'
import { Button } from '../ui/buttons/Button'
import { ButtonGroup } from '../ui/buttons/ButtonGroup'

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Development' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'design', label: 'UI/UX Design' }
]

interface ProjectFiltersProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function ProjectFilters({ activeFilter, onFilterChange }: ProjectFiltersProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center mb-12"
    >
      <ButtonGroup>
        {filters.map(filter => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? 'primary' : 'ghost'}
            onClick={() => onFilterChange(filter.id)}
          >
            {filter.label}
          </Button>
        ))}
      </ButtonGroup>
    </motion.div>
  )
}