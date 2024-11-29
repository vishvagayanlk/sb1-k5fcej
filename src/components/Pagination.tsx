import { motion } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  const getPageNumbers = () => {
    const pages = []
    const showEllipsis = totalPages > 7

    if (showEllipsis) {
      if (currentPage <= 3) {
        // Show first 3, ellipsis, and last 2
        for (let i = 1; i <= 3; i++) pages.push(i)
        pages.push('...')
        pages.push(totalPages - 1, totalPages)
      } else if (currentPage >= totalPages - 2) {
        // Show first 2, ellipsis, and last 3
        pages.push(1, 2)
        pages.push('...')
        for (let i = totalPages - 2; i <= totalPages; i++) pages.push(i)
      } else {
        // Show first, ellipsis, current-1/current/current+1, ellipsis, last
        pages.push(1)
        pages.push('...')
        pages.push(currentPage - 1, currentPage, currentPage + 1)
        pages.push('...')
        pages.push(totalPages)
      }
    } else {
      // Show all pages
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    }

    return pages
  }

  return (
    <nav className="flex items-center justify-center space-x-2">
      {/* Previous Button */}
      <motion.button
        whileHover={!isFirstPage ? { scale: 1.05 } : {}}
        whileTap={!isFirstPage ? { scale: 0.95 } : {}}
        onClick={() => !isFirstPage && onPageChange(currentPage - 1)}
        className={`p-2 rounded-lg flex items-center justify-center transition-colors
          ${isFirstPage 
            ? 'text-gray-500 bg-dark-800/50 cursor-not-allowed' 
            : 'text-gray-300 hover:text-neon-blue bg-dark-800 hover:bg-dark-700'
          }`}
        disabled={isFirstPage}
        aria-label="Previous page"
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </motion.button>

      {/* Page Numbers */}
      <div className="flex items-center space-x-2">
        {getPageNumbers().map((page, index) => (
          page === '...' ? (
            <span
              key={`ellipsis-${index}`}
              className="w-10 text-center text-gray-500"
            >
              •••
            </span>
          ) : (
            <motion.button
              key={page}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => typeof page === 'number' && onPageChange(page)}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all
                ${currentPage === page
                  ? 'bg-neon-blue text-white font-medium'
                  : 'text-gray-300 hover:text-neon-blue bg-dark-800 hover:bg-dark-700'
                }`}
            >
              {page}
            </motion.button>
          )
        ))}
      </div>

      {/* Next Button */}
      <motion.button
        whileHover={!isLastPage ? { scale: 1.05 } : {}}
        whileTap={!isLastPage ? { scale: 0.95 } : {}}
        onClick={() => !isLastPage && onPageChange(currentPage + 1)}
        className={`p-2 rounded-lg flex items-center justify-center transition-colors
          ${isLastPage 
            ? 'text-gray-500 bg-dark-800/50 cursor-not-allowed' 
            : 'text-gray-300 hover:text-neon-blue bg-dark-800 hover:bg-dark-700'
          }`}
        disabled={isLastPage}
        aria-label="Next page"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </motion.button>
    </nav>
  )
}
