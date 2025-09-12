'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { XIcon, ExternalLinkIcon, GithubIcon } from 'lucide-react'
import useClickOutside from '@/hooks/useClickOutside'

type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
  year: string
  role: string
  tech: string
  challenge: string
  approach: string[]
  solution: string
  impact: string[]
  metrics?: string
  clientType: string
  timeline: string
  github?: string
}

interface ProjectDetailModalProps {
  project: Project
  children: React.ReactNode
}

export function ProjectDetailModal({ project, children }: ProjectDetailModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useClickOutside(() => setIsOpen(false))

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        {children}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
                <div>
                  <h2 className="text-xl font-medium text-black dark:text-white">{project.name}</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{project.clientType} • {project.timeline}</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors"
                  data-cursor-hover
                >
                  <XIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Challenge */}
                <div className="space-y-2">
                  <h3 className="text-black dark:text-white font-medium">Challenge</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">{project.challenge}</p>
                </div>

                {/* Approach */}
                <div className="space-y-3">
                  <h3 className="text-black dark:text-white font-medium">Approach</h3>
                  <div className="space-y-2">
                    {project.approach.map((step, index) => (
                      <div key={index} className="flex gap-3 text-sm">
                        <span className="text-gray-500 dark:text-gray-400 font-medium">{index + 1}.</span>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solution */}
                <div className="space-y-2">
                  <h3 className="text-black dark:text-white font-medium">Solution</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">{project.solution}</p>
                </div>

                {/* Impact */}
                <div className="space-y-3">
                  <h3 className="text-black dark:text-white font-medium">Impact</h3>
                  <div className="space-y-2">
                    {project.impact.map((impact, index) => (
                      <div key={index} className="flex gap-3 text-sm">
                        <span className="text-gray-400 dark:text-gray-600">•</span>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{impact}</p>
                      </div>
                    ))}
                  </div>
                  {project.metrics && (
                    <div className="mt-3 p-3 bg-gray-100 dark:bg-gray-900 rounded-lg">
                      <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">{project.metrics}</p>
                    </div>
                  )}
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h3 className="text-black dark:text-white font-medium">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(', ').map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-sm font-medium"
                    data-cursor-hover
                  >
                    <ExternalLinkIcon className="w-4 h-4" />
                    View Live
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors text-sm font-medium"
                      data-cursor-hover
                    >
                      <GithubIcon className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
