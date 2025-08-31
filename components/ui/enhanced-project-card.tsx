'use client'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { useState, useRef } from 'react'
import { ExternalLinkIcon, GithubIcon, PlayIcon } from 'lucide-react'

interface EnhancedProjectCardProps {
  title: string
  description: string
  tech: string
  video: string
  link: string
  github?: string
  metrics?: string
  year: string
}

export function EnhancedProjectCard({
  title,
  description,
  tech,
  video,
  link,
  github,
  metrics,
  year
}: EnhancedProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      className="group relative"
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 overflow-hidden shadow-lg">
        {/* Gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Video/Image section */}
        <div className="relative aspect-video overflow-hidden">
          <video
            src={video}
            autoPlay={isVideoPlaying}
            loop
            muted
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onMouseEnter={() => setIsVideoPlaying(true)}
            onMouseLeave={() => setIsVideoPlaying(false)}
          />
          
          {/* Play overlay */}
          <motion.div
            className="absolute inset-0 bg-black/50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: !isVideoPlaying && isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <PlayIcon className="w-12 h-12 text-white" />
          </motion.div>

          {/* Year badge */}
          <div className="absolute top-3 right-3 px-2 py-1 bg-black/70 text-white text-xs rounded-md">
            {year}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          <div className="text-xs text-gray-500 dark:text-gray-500">
            {tech}
          </div>

          {metrics && (
            <motion.div
              className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="text-xs text-green-700 dark:text-green-400 font-medium">
                Impact: {metrics}
              </div>
            </motion.div>
          )}

          {/* Action buttons */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-sm font-medium"
            >
              View Live
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
            
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
              >
                <GithubIcon className="w-4 h-4" />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
