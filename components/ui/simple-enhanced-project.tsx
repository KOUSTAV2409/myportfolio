'use client'
import { motion } from 'motion/react'
import { useState } from 'react'
import { ExternalLinkIcon } from 'lucide-react'

interface SimpleEnhancedProjectProps {
  title: string
  description: string
  tech: string
  video: string
  link: string
  year: string
  children: React.ReactNode // For the case study button
}

export function SimpleEnhancedProject({
  title,
  description,
  tech,
  video,
  link,
  year,
  children
}: SimpleEnhancedProjectProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <motion.div
      className="space-y-4 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative rounded-2xl bg-gray-100/40 dark:bg-gray-900/40 p-1 ring-1 ring-gray-200/50 dark:ring-gray-800/50 ring-inset hover:ring-gray-300/50 dark:hover:ring-gray-700/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gray-200/20 dark:group-hover:shadow-gray-900/20">
        
        {/* Subtle gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
        
        <div className="relative" data-cursor-hover>
          <div className="relative cursor-pointer">
            <video
              src={video}
              autoPlay={isVideoPlaying}
              loop
              muted
              className="aspect-video w-full cursor-zoom-in rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
              onMouseEnter={() => setIsVideoPlaying(true)}
              onMouseLeave={() => setIsVideoPlaying(false)}
            />
          </div>
        </div>
        
        <div className="absolute top-3 left-3 px-2 py-1 bg-black/70 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Preview
        </div>
      </div>

      <div className="px-1 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-black dark:text-white text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {title}
            </h4>
            <span className="text-xs text-gray-500 dark:text-gray-400">{year}</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
            <span>{tech}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200 hover:scale-105"
            data-cursor-hover
          >
            View Live
            <ExternalLinkIcon className="w-4 h-4" />
          </a>
          {children}
        </div>
      </div>
    </motion.div>
  )
}
