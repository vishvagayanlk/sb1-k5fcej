import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../../utils/cn'
import { buttonVariants } from './Button'

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, icon, variant = 'primary', size = 'md', isLoading, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size: 'icon',
            className: cn('p-0 flex items-center justify-center', className),
          })
        )}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {isLoading ? (
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          icon
        )}
      </motion.button>
    )
  }
)

IconButton.displayName = 'IconButton'

export { IconButton }