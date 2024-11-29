import { cn } from '../../../utils/cn'

interface ButtonGroupProps {
  children: React.ReactNode
  className?: string
  orientation?: 'horizontal' | 'vertical'
}

export function ButtonGroup({ children, className, orientation = 'horizontal' }: ButtonGroupProps) {
  return (
    <div
      className={cn(
        'inline-flex',
        orientation === 'horizontal' ? 'flex-row' : 'flex-col',
        orientation === 'horizontal' ? '[&>button]:rounded-none [&>button:first-child]:rounded-l-lg [&>button:last-child]:rounded-r-lg' : '[&>button]:rounded-none [&>button:first-child]:rounded-t-lg [&>button:last-child]:rounded-b-lg',
        '[&>button:not(:last-child)]:border-r [&>button:not(:first-child)]:-ml-px',
        className
      )}
    >
      {children}
    </div>
  )
}