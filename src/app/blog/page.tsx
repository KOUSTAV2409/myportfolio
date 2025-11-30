'use client'
import { useState, useEffect } from 'react'
import { ArrowUpRight, Calendar, Clock, Heart, MessageCircle, ExternalLink } from 'lucide-react'
import { getAllPosts, Post } from '@/lib/hashnode'

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getAllPosts()
        setPosts(fetchedPosts)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch posts')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const calculateReadTime = (content: string) => {
    return Math.ceil(content.length / 1000) + ' min read'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Technical Writing</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">Loading articles...</p>
          </div>
          <div className="mt-16 space-y-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="flex gap-8">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
                    </div>
                  </div>
                  <div className="w-32 h-20 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Technical Writing</h1>
            <p className="text-xl text-red-500">Error loading articles: {error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-16 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Technical Writing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            In-depth articles on JavaScript, React, system design, and software development
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>Published on</span>
            <a 
              href="https://syntaxandsoul.hashnode.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
            >
              Hashnode
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Articles */}
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 dark:text-gray-400">No articles found.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {posts.map((post, index) => (
              <article key={post.id} className="group">
                <div className="flex gap-8">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                        KG
                      </div>
                      <div>
                        <div className="font-medium text-sm">Koustav Ganguly</div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <time dateTime={post.publishedAt}>
                            {formatDate(post.publishedAt)}
                          </time>
                          <span>·</span>
                          <span>{calculateReadTime(post.content.markdown)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className={`font-bold leading-tight group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors ${
                        index === 0 ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
                      }`}>
                        <a href={`/blog/${post.slug}`}>
                          {post.title}
                        </a>
                      </h3>
                      <p className={`text-gray-600 dark:text-gray-400 leading-relaxed ${
                        index === 0 ? 'text-lg' : 'line-clamp-2'
                      }`}>
                        {post.brief}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-gray-500 text-sm">
                        <a 
                          href={`/blog/${post.slug}`}
                          className="hover:text-blue-500 transition-colors"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Cover Image */}
                  {post.coverImage && (
                    <div className="w-32 h-20 flex-shrink-0 hidden sm:block">
                      <a href={`/blog/${post.slug}`}>
                        <img 
                          src={post.coverImage.url} 
                          alt={post.title}
                          className="w-full h-full object-cover rounded-lg hover:opacity-80 transition-opacity"
                        />
                      </a>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {/* View More on Hashnode */}
        <div className="mt-16 text-center">
          <a
            href="https://syntaxandsoul.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
          >
            View all articles on Hashnode
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Newsletter */}
        <div className="mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
              KG
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">Get my latest articles</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Follow me on Hashnode or subscribe to get notified when I publish new technical articles.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://syntaxandsoul.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Follow on Hashnode
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
