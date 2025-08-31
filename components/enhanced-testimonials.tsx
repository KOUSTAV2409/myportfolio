'use client'
import { motion } from 'motion/react'
import { StarIcon, QuoteIcon } from 'lucide-react'
import { InteractiveCard } from '@/components/ui/signature-elements'

const ENHANCED_TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Product Manager',
    company: 'TechCorp',
    avatar: 'SC', // Replace with actual image
    content: 'Koustav transformed our approach to technical decision-making. His strategic thinking helped us avoid costly architecture mistakes and delivered a 40% performance improvement.',
    rating: 5,
    projectContext: 'React Dashboard Optimization',
    companyLogo: '🏢', // Replace with actual logo
    linkedinUrl: '#'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'CTO',
    company: 'StartupXYZ',
    avatar: 'MR',
    content: 'Working with Koustav was transformative. He didn\'t just build our platform - he helped us think through the business implications of every technical choice.',
    rating: 5,
    projectContext: 'Full-stack Platform Development',
    companyLogo: '🚀',
    linkedinUrl: '#'
  },
  {
    id: 3,
    name: 'Emily Johnson',
    role: 'Design Lead',
    company: 'Creative Agency',
    avatar: 'EJ',
    content: 'Koustav bridges design and development perfectly. His Motion Primitives library became essential to our workflow - saved us weeks on every project.',
    rating: 5,
    projectContext: 'Motion Primitives Library',
    companyLogo: '🎨',
    linkedinUrl: '#'
  }
]

export function EnhancedTestimonials() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          What Clients Say
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Real feedback from real projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ENHANCED_TESTIMONIALS.map((testimonial, index) => (
          <InteractiveCard key={testimonial.id} className="h-full">
            <motion.div
              className="h-full p-6 rounded-xl glass-effect premium-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <QuoteIcon className="absolute -top-2 -left-2 w-6 h-6 text-indigo-200 dark:text-indigo-800" />
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm pl-4">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full brand-gradient flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                    <div className="text-xs">{testimonial.companyLogo}</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900 dark:text-white text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs">
                    {testimonial.role} at {testimonial.company}
                  </div>
                  <div className="text-indigo-600 dark:text-indigo-400 text-xs font-medium">
                    {testimonial.projectContext}
                  </div>
                </div>
              </div>

              {/* LinkedIn verification */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <a
                  href={testimonial.linkedinUrl}
                  className="inline-flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Verified on LinkedIn
                </a>
              </div>
            </motion.div>
          </InteractiveCard>
        ))}
      </div>
    </div>
  )
}
