'use client'
import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { PlayIcon, EyeIcon } from 'lucide-react'

interface InteractiveCodeProps {
  code: string
  language: string
  title?: string
  output?: string
  demo?: React.ReactNode
}

export function InteractiveCode({ 
  code, 
  language, 
  title, 
  output, 
  demo 
}: InteractiveCodeProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showOutput, setShowOutput] = useState(false)

  return (
    <motion.div
      className="group relative rounded-xl bg-gray-900 border border-gray-800 overflow-hidden"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
          <span className="text-sm font-medium text-gray-300">{title}</span>
          <div className="flex items-center gap-2">
            {output && (
              <button
                onClick={() => setShowOutput(!showOutput)}
                className="p-1 rounded hover:bg-gray-700 transition-colors"
              >
                <PlayIcon className="w-4 h-4 text-green-400" />
              </button>
            )}
            {demo && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1 rounded hover:bg-gray-700 transition-colors"
              >
                <EyeIcon className="w-4 h-4 text-blue-400" />
              </button>
            )}
          </div>
        </div>
      )}
      
      <div className="p-4">
        <pre className="text-sm text-gray-300 overflow-x-auto">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>

      <AnimatePresence>
        {showOutput && output && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-gray-700 bg-gray-800"
          >
            <div className="p-4">
              <div className="text-xs text-gray-400 mb-2">Output:</div>
              <pre className="text-sm text-green-400">{output}</pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isExpanded && demo && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-gray-700 bg-gray-50 dark:bg-gray-800"
          >
            <div className="p-4">
              <div className="text-xs text-gray-400 mb-2">Live Demo:</div>
              {demo}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
