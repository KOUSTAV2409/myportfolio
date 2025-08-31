'use client'
import { motion } from 'motion/react'
import { ShieldCheckIcon, ClockIcon, UsersIcon } from 'lucide-react'

export function RiskReversal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-green-200/50 dark:border-green-800/50"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
            <ShieldCheckIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <div className="font-medium text-green-800 dark:text-green-300 text-sm">30-Day Guarantee</div>
            <div className="text-xs text-green-600 dark:text-green-400">Not satisfied? Full refund</div>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
            <ClockIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <div className="font-medium text-blue-800 dark:text-blue-300 text-sm">Quick Response</div>
            <div className="text-xs text-blue-600 dark:text-blue-400">Usually reply within 2 hours</div>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
            <UsersIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <div className="font-medium text-purple-800 dark:text-purple-300 text-sm">Limited Spots</div>
            <div className="text-xs text-purple-600 dark:text-purple-400">Only 3 clients per month</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function UrgencyBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-lg bg-gradient-to-r from-orange-500 to-red-500 p-4 text-white"
    >
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            className="w-2 h-2 bg-white rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <div>
            <div className="font-medium text-sm">December 2024 Spots Filling Fast</div>
            <div className="text-xs opacity-90">Only 2 consultation slots remaining this month</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs opacity-75">Next available:</div>
          <div className="font-medium text-sm">Jan 15, 2025</div>
        </div>
      </div>
    </motion.div>
  )
}
