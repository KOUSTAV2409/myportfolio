'use client'
import { motion } from 'motion/react'
import { FEATURED_TESTIMONIALS } from '@/app/social-proof-data'

export function SocialProofShowcase() {
  return (
    <div className="space-y-8">
      {FEATURED_TESTIMONIALS.map((testimonial, index) => (
        <motion.div
          key={testimonial.id}
          className="group relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 }}
        >
          {/* Quote mark */}
          <div className="absolute -left-2 -top-1 text-6xl text-gray-200 dark:text-gray-800 font-serif leading-none select-none">
            "
          </div>
          
          <div className="pl-8 space-y-6">
            <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed font-normal italic">
              {testimonial.content}
            </p>
            
            <div className="flex items-end justify-between pt-4 border-t border-gray-100 dark:border-gray-800/50">
              <div className="space-y-1">
                <p className="font-medium text-black dark:text-white tracking-tight">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
              
              {testimonial.projectContext && (
                <div className="text-xs text-gray-400 dark:text-gray-500 font-mono hidden sm:block">
                  {testimonial.projectContext}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
