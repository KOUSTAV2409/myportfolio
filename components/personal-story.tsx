'use client'
import { motion } from 'motion/react'
import { HeartIcon, CodeIcon, TrendingUpIcon } from 'lucide-react'

export function PersonalStory() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl subtle-gradient p-8 border border-indigo-200/50 dark:border-indigo-800/50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-indigo-500 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-purple-500 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-cyan-500 rounded-full"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Avatar Section */}
        <div className="flex flex-col items-center space-y-4">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Avatar Placeholder - Replace with your photo */}
            <div className="w-32 h-32 rounded-full brand-gradient flex items-center justify-center text-white text-4xl font-bold premium-shadow-lg">
              KG
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </motion.div>
          <div className="text-center">
            <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Available for projects</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Usually responds in 2 hours</div>
          </div>
        </div>

        {/* Story Content */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Why I Do This
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I started coding at 16, fascinated by how a few lines of code could solve real problems. 
                What began as curiosity became a mission: <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                helping businesses grow without breaking their systems or budgets</span>.
              </p>
              <p>
                After seeing too many startups fail due to poor technical decisions, I realized that 
                <span className="text-purple-600 dark:text-purple-400 font-medium"> the gap between business needs and technical execution</span> 
                was the real problem to solve.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.div
              className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <HeartIcon className="w-4 h-4 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Passion</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Love what I build</div>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <CodeIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Craft</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Quality over speed</div>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-gray-800/50"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <TrendingUpIcon className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Growth</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Your success is mine</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
