import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { preloadImage } from '../utils/performance'

interface ImageWithLoadingProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export function ImageWithLoading({ src, alt, className = '', priority = false }: ImageWithLoadingProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (priority) {
      preloadImage(src).then(() => setIsLoaded(true))
    }
  }, [src, priority])

  return (
    <div className="relative overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        initial={false}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoaded(true)}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-dark-800 animate-pulse" />
      )}
    </div>
  )
}