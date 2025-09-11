'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import { CONTENT_ITEMS, CONTENT_CATEGORIES, type ContentCategory } from '@/app/content-data'
import { getAllPosts, type Post } from '@/lib/hashnode'

export function ContentShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<ContentCategory | 'all'>('all')
  const [showAll, setShowAll] = useState(false)
  const [hashnodePosts, setHashnodePosts] = useState<Post[]>([])
  
  // Fetch Hashnode posts on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getAllPosts()
        setHashnodePosts(posts)
      } catch (error) {
        console.error('Error fetching Hashnode posts:', error)
      }
    }
    fetchPosts()
  }, [])

  // Convert Hashnode posts to content items format
  const hashnodeContentItems = hashnodePosts.map(post => ({
    id: `hashnode-${post.id}`,
    title: post.title,
    description: post.brief || post.content.markdown.slice(0, 150) + '...',
    category: 'tech-stack' as ContentCategory,
    readTime: '5 min',
    publishedAt: post.publishedAt,
    link: `/blog/${post.slug}`,
    featured: false,
    tags: ['Hashnode', 'Blog']
  }))

  // Get latest 2 Hashnode posts for featured section (replace static content)
  const featuredContent = hashnodeContentItems.slice(0, 2).map(item => ({
    ...item,
    featured: true
  }))

  // Combine all content items
  const allContentItems = [...CONTENT_ITEMS, ...hashnodeContentItems]
  
  const filteredContent = selectedCategory === 'all' 
    ? allContentItems 
    : allContentItems.filter(item => item.category === selectedCategory)

  // Show only first 4 items by default, all when showAll is true
  const displayedContent = showAll ? filteredContent : filteredContent.slice(0, 4)
  const hasMoreContent = filteredContent.length > 4

  const isInternalLink = (link: string) => link.startsWith('/')

  const LinkWrapper = ({ item, children }: { item: any, children: React.ReactNode }) => {
    if (isInternalLink(item.link)) {
      return (
        <Link href={item.link} className="group">
          {children}
        </Link>
      )
    }
    return (
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="group">
        {children}
      </a>
    )
  }

  return (
    <div className="space-y-6">
      {/* Featured Content */}
      <div className="space-y-4">
        <h4 className="text-black dark:text-white font-medium">Featured Writing</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredContent.map((item) => (
            <motion.div key={item.id}>
              <LinkWrapper item={item}>
                <div
                  className="p-4 rounded-xl bg-gray-50/80 dark:bg-gray-900/40 border border-gray-200/60 dark:border-gray-800/60 hover:bg-gray-100/80 dark:hover:bg-gray-900/60 hover:border-gray-300/60 dark:hover:border-gray-700/60 transition-all duration-300 h-full flex flex-col"
                  data-cursor-hover
                >
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 rounded-md text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-800">
                        {CONTENT_CATEGORIES[item.category].icon} {CONTENT_CATEGORIES[item.category].label}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{item.readTime}</span>
                      {item.id.startsWith('hashnode-') && (
                        <span className="text-xs text-blue-500 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded">
                          Latest
                        </span>
                      )}
                    </div>
                    <h5 className="font-medium text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors line-clamp-2">
                      {item.title}
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 flex-1">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-3 mt-auto">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200/50 dark:bg-gray-800/50 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:translate-x-0.5 transition-all duration-200">
                      <path d="M7 17L17 7"/>
                      <path d="M7 7h10v10"/>
                    </svg>
                  </div>
                </div>
              </LinkWrapper>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-black dark:text-white font-medium">All Writing</h4>
          <a 
            href="https://syntaxandsoul.hashnode.dev/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            data-cursor-hover
          >
            External blog →
          </a>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              setSelectedCategory('all')
              setShowAll(false)
            }}
            className={`px-3 py-1.5 text-sm rounded-lg transition-colors duration-200 ${
              selectedCategory === 'all'
                ? 'bg-black text-white dark:bg-white dark:text-black'
                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
            data-cursor-hover
          >
            All
          </button>
          {Object.entries(CONTENT_CATEGORIES).map(([key, category]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedCategory(key as ContentCategory)
                setShowAll(false)
              }}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors duration-200 ${
                selectedCategory === key
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
              data-cursor-hover
            >
              {category.icon} {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content List */}
      <div className="space-y-3">
        <AnimatePresence mode="wait">
          {displayedContent.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.05 }}
            >
              <LinkWrapper item={item}>
                <div
                  className="flex items-center justify-between py-3 px-4 rounded-lg bg-gray-100/50 dark:bg-gray-900/50 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
                  data-cursor-hover
                >
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <h5 className="text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors duration-200">
                        {item.title}
                      </h5>
                      <span className="px-2 py-0.5 rounded text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-800">
                        {CONTENT_CATEGORIES[item.category].icon}
                      </span>
                      {item.id.startsWith('hashnode-') && (
                        <span className="text-xs text-blue-500 dark:text-blue-400">
                          📝
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-500 dark:text-gray-400">{item.readTime}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300">
                      <path d="M7 17L17 7"/>
                      <path d="M7 7h10v10"/>
                    </svg>
                  </div>
                </div>
              </LinkWrapper>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Show More/Less Button */}
        {hasMoreContent && (
          <motion.div 
            className="pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="w-full py-3 px-4 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white bg-gray-100/50 dark:bg-gray-900/50 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 rounded-lg transition-all duration-300 border border-gray-200/50 dark:border-gray-800/50 hover:border-gray-300/50 dark:hover:border-gray-700/50"
              data-cursor-hover
            >
              {showAll ? (
                <span className="flex items-center justify-center gap-2">
                  Show Less
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 15l-6-6-6 6"/>
                  </svg>
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Show {filteredContent.length - 4} More Articles
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </span>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
