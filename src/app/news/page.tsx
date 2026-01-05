'use client'
import { useState } from 'react'
import { Calendar, Filter } from 'lucide-react'
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

  const filterNewsByTime = (news: typeof NEWS_UPDATES, timeFilter: TimeFilter) => {
    if (timeFilter === 'all') return news

    const now = new Date()
    const currentYear = now.getFullYear()
    const currentMonth = now.getMonth()
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)

    return news.filter(item => {
      const itemDate = new Date(item.date)
      
      switch (timeFilter) {
        case 'week':
          return itemDate >= oneWeekAgo
        case 'month':
          return itemDate.getFullYear() === currentYear && itemDate.getMonth() === currentMonth
        case 'year':
          return itemDate.getFullYear() === currentYear
        default:
          return true
      }
    })
  }

  const filteredNews = filterNewsByTime(NEWS_UPDATES, filter)

  return (
    <div className="dark:bg-neutral-900">
      <div className="w-full max-w-2xl mx-auto pt-6 sm:pt-10 px-4 sm:px-6">
        <div className="space-y-6 sm:space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-gray-800 dark:text-neutral-200">News & Updates</h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
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
                    ? 'bg-gray-800 dark:bg-white text-white dark:text-gray-800'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Empty State */}
          {filteredNews.length === 0 && (
            <div className="py-20 text-center space-y-6 mb-8 sm:mb-12">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-gray-400" />
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-base sm:text-lg font-medium text-gray-800 dark:text-neutral-200">
                  {filter === 'all' ? 'No updates yet' : `No updates for ${filters.find(f => f.value === filter)?.label.toLowerCase()}`}
                </h2>
                <p className="text-sm text-gray-600 dark:text-neutral-400 max-w-md mx-auto">
                  {filter === 'all' 
                    ? 'Check back soon for the latest news, project launches, and professional milestones.'
                    : 'Try selecting a different time period to see more updates.'
                  }
                </p>
              </div>
            </div>
          )}

          {/* News List (when data exists) */}
          {filteredNews.length > 0 && (
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              {filteredNews.map((update) => (
                <div
                  key={update.id}
                  className="p-4 sm:p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors space-y-3"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-sm font-medium text-gray-800 dark:text-neutral-200">{update.title}</h3>
                        <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                          update.type === 'project' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' :
                          update.type === 'achievement' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                          update.type === 'article' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400' :
                          'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400'
                        }`}>
                          {update.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-neutral-400">
                        {update.description}
                      </p>
                      {update.link && (
                        <a
                          href={update.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                        >
                          Read more →
                        </a>
                      )}
                    </div>
                    <div className="text-[13px] text-gray-500 font-medium whitespace-nowrap">
                      {update.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
