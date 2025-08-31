'use client'
import { useState, useRef, useEffect } from 'react'
import { motion } from 'motion/react'

interface OptimizedVideoProps {
  src: string
  className?: string
}

export function OptimizedVideo({ src, className = '' }: OptimizedVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleMouseEnter = () => {
    if (videoRef.current && isLoaded) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isInView && (
        <video
          ref={videoRef}
          src={src}
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover rounded-lg"
          onLoadedData={() => setIsLoaded(true)}
        />
      )}
      
      {!isLoaded && (
        <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center">
          <motion.div
            className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      )}
    </div>
  )
}
