'use client'
import { useState } from 'react'
import { Calendar, Filter } from 'lucide-react'
import { PageLayout, PageSection } from '@/components/page-layout'
import { NEWS_UPDATES } from '../data'

type TimeFilter = 'all' | 'week' | 'month' | 'year'

export default function NewsPage() {
  const [filter, setFilter] = useState<TimeFilter>('all')

  const filters: { value: TimeFilter; label: string }[] = [
    { value: 'all', label: 'All Time' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'year', label: 'This Year' },
  ]

  return (
    <PageLayout>
      <PageSection>
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">News & Updates</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
              Latest projects, achievements, and professional milestones.
            </p>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Filter className="w-4 h-4" />
              <span className="font-medium">Filter:</span>
            </div>
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === f.value
                    ? 'bg-black dark:bg-white text-white dark:text-black'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Empty State */}
          {NEWS_UPDATES.length === 0 && (
            <div className="py-20 text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-gray-400" />
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-bold tracking-tight">No updates yet</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                  Check back soon for the latest news, project launches, and professional milestones.
                </p>
              </div>
            </div>
          )}

          {/* News List (when data exists) */}
          {NEWS_UPDATES.length > 0 && (
            <div className="space-y-6">
              {NEWS_UPDATES.map((update) => (
                <div
                  key={update.id}
                  className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors space-y-3"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-lg font-bold tracking-tight">{update.title}</h3>
                        <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                          update.type === 'project' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' :
                          update.type === 'achievement' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                          update.type === 'article' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400' :
                          'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400'
                        }`}>
                          {update.type}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {update.description}
                      </p>
                      {update.link && (
                        <a
                          href={update.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-black dark:text-white hover:underline"
                        >
                          Read more →
                        </a>
                      )}
                    </div>
                    <div className="text-sm text-gray-500 font-medium whitespace-nowrap">
                      {update.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </PageSection>
    </PageLayout>
  )
}