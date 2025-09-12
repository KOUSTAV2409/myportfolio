'use client'
import { motion } from 'motion/react'
import { BookOpenIcon, TrendingUpIcon, BrainIcon, EyeIcon } from 'lucide-react'

const FEATURED_CONTENT = [
  {
    id: 1,
    title: 'The $2M Algorithm Mistake',
    subtitle: 'How one O(n²) function cost a startup their Series A',
    category: 'Case Study',
    readTime: '8 min',
    views: '12.5K',
    icon: <BrainIcon className="w-5 h-5" />,
    preview: 'A seemingly innocent sorting function was processing 100K+ records on every page load...',
    engagement: 'High',
    color: 'red'
  },
  {
    id: 2,
    title: 'React 19 Performance Secrets',
    subtitle: 'Undocumented optimizations that 99% of developers miss',
    category: 'Technical Deep Dive',
    readTime: '12 min',
    views: '8.2K',
    icon: <TrendingUpIcon className="w-5 h-5" />,
    preview: 'React 19 introduced subtle changes that can 3x your app performance if you know where to look...',
    engagement: 'Medium',
    color: 'blue'
  },
  {
    id: 3,
    title: 'Scaling to 1M Users',
    subtitle: 'The architecture decisions that matter (and the ones that don\'t)',
    category: 'Business Strategy',
    readTime: '15 min',
    views: '15.7K',
    icon: <BookOpenIcon className="w-5 h-5" />,
    preview: 'Most startups over-engineer early and under-engineer late. Here\'s the exact roadmap...',
    engagement: 'High',
    color: 'green'
  }
]

export function ContentEngagement() {
  return (
    <div className="space-y-8">
      {/* Hook Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Technical Insights That Drive Business Results
        </h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Deep dives into the technical decisions that make or break startups. 
          Real stories, real numbers, actionable insights.
        </p>
        
        {/* Engagement Stats */}
        <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <EyeIcon className="w-4 h-4" />
            <span>50K+ monthly readers</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpenIcon className="w-4 h-4" />
            <span>25+ in-depth articles</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUpIcon className="w-4 h-4" />
            <span>Featured in 5+ publications</span>
          </div>
        </div>
      </motion.div>

      {/* Featured Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURED_CONTENT.map((content, index) => (
          <motion.div
            key={content.id}
            className="group h-full p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg bg-${content.color}-100 dark:bg-${content.color}-900/30 flex items-center justify-center text-${content.color}-600 dark:text-${content.color}-400`}>
                {content.icon}
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  content.engagement === 'High' 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                    : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                }`}>
                  {content.engagement} engagement
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3 mb-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-lg leading-tight">
                  {content.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  {content.subtitle}
                </p>
              </div>
              
              <p className="text-gray-500 dark:text-gray-500 text-sm leading-relaxed">
                {content.preview}
              </p>
            </div>

            {/* Meta */}
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <span className="font-medium text-indigo-600 dark:text-indigo-400">
                  {content.category}
                </span>
                <span>{content.readTime} read</span>
              </div>
              <div className="flex items-center gap-1">
                <EyeIcon className="w-3 h-3" />
                <span>{content.views} views</span>
              </div>
            </div>

            {/* Hover CTA */}
            <motion.div
              className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <div className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                Read full article →
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
