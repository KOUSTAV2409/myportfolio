'use client'
import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect } from 'react'
import { PlayIcon, PauseIcon, RotateCcwIcon } from 'lucide-react'

interface AlgorithmVizProps {
  title: string
  description: string
  data: number[]
  algorithm: 'bubble' | 'binary-search' | 'tree-traversal'
}

export function AlgorithmViz({ title, description, data, algorithm }: AlgorithmVizProps) {
  const [array, setArray] = useState(data)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [comparing, setComparing] = useState<number[]>([])

  const reset = () => {
    setArray([...data])
    setCurrentStep(0)
    setIsPlaying(false)
    setComparing([])
  }

  const bubbleSort = async () => {
    const arr = [...array]
    const n = arr.length
    
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (!isPlaying) return
        
        setComparing([j, j + 1])
        await new Promise(resolve => setTimeout(resolve, 500))
        
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
          setArray([...arr])
          await new Promise(resolve => setTimeout(resolve, 300))
        }
      }
    }
    setComparing([])
    setIsPlaying(false)
  }

  const play = () => {
    setIsPlaying(true)
    if (algorithm === 'bubble') {
      bubbleSort()
    }
  }

  const pause = () => {
    setIsPlaying(false)
  }

  return (
    <motion.div
      className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>

      <div className="flex items-end justify-center gap-2 mb-6 h-32">
        {array.map((value, index) => (
          <motion.div
            key={index}
            className={`w-8 rounded-t-md flex items-end justify-center text-xs font-medium text-white ${
              comparing.includes(index) 
                ? 'bg-red-500' 
                : 'bg-blue-500'
            }`}
            style={{ height: `${(value / Math.max(...data)) * 100}%` }}
            animate={{
              backgroundColor: comparing.includes(index) ? '#ef4444' : '#3b82f6',
              scale: comparing.includes(index) ? 1.1 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            {value}
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-3">
        <button
          onClick={isPlaying ? pause : play}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {isPlaying ? <PauseIcon className="w-4 h-4" /> : <PlayIcon className="w-4 h-4" />}
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        
        <button
          onClick={reset}
          className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          <RotateCcwIcon className="w-4 h-4" />
          Reset
        </button>
      </div>
    </motion.div>
  )
}
