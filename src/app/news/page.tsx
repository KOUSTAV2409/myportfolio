'use client'
import { useState } from 'react'
import { Calendar, Filter } from 'lucide-react'
import { NEWS_UPDATES } from '../data'

type TimeFilter = 'all' | 'week' | 'month' | 'year'

export default function NewsPage() {
  const [filter, setFilter] = useState<TimeFilter>('all')

  return (
    <div className="w-full max-w-2xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-8 text-gray-800 dark:text-neutral-200">News & Updates</h1>
      
      <div className="space-y-6">
        <p className="text-gray-600 dark:text-gray-400">
          Stay updated with my latest projects, achievements, and articles.
        </p>
        
        {NEWS_UPDATES.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No updates yet. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {NEWS_UPDATES.map((update) => (
              <div key={update.id} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                <h3 className="font-semibold text-gray-800 dark:text-neutral-200">{update.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{update.description}</p>
                <p className="text-sm text-gray-500 mt-2">{update.date}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
