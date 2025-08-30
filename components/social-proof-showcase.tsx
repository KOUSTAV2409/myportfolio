'use client'
import { motion } from 'motion/react'
import { ENHANCED_TESTIMONIALS, CREDIBILITY_MARKERS, FEATURED_TESTIMONIALS } from '@/app/social-proof-data'

export function SocialProofShowcase() {
  return (
    <div className="space-y-8">
      {/* Credibility Metrics - Minimal Style */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {CREDIBILITY_MARKERS.map((marker, index) => (
          <motion.div
            key={marker.label}
            className="text-center space-y-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-2xl font-semibold text-black dark:text-white">{marker.value}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{marker.label}</div>
            {marker.description && (
              <div className="text-xs text-gray-500 dark:text-gray-400">{marker.description}</div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Testimonials - Clean List Style */}
      <div className="space-y-3">
        {FEATURED_TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="group py-4 px-4 rounded-lg bg-gray-100/50 dark:bg-gray-900/50 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-normal italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-black dark:text-white text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
                {testimonial.projectContext && (
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {testimonial.projectContext}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Client Names - Subtle Text List */}
      <div className="space-y-3">
        <h4 className="text-black dark:text-white font-medium text-sm">Trusted by</h4>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
          <span>TechCorp</span>
          <span>•</span>
          <span>StartupXYZ</span>
          <span>•</span>
          <span>Creative Agency</span>
          <span>•</span>
          <span>DevCommunity</span>
          <span>•</span>
          <span className="text-gray-500 dark:text-gray-500">and 15+ others</span>
        </div>
      </div>
    </div>
  )
}
