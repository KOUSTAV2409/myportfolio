'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getAllPosts, Post } from '@/lib/hashnode'

export default function ArticlesSection() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getAllPosts()
        setPosts(fetchedPosts)
      } catch (err) {
        console.error('Failed to fetch posts:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric'
    })
  }

  return (
    <div className="my-10 sm:my-14">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        Articles
      </h2>

      {loading ? (
        <div className="space-y-10">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 mb-2"></div>
              <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-1"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
            </div>
          ))}
        </div>
      ) : posts.length === 0 ? (
        <p className="text-gray-500 text-sm">No articles found.</p>
      ) : (
        <ul className="space-y-6">
          {posts.slice(0, 3).map((post) => (
            <li key={post.id}>
              <a 
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-gray-200 rounded-lg p-4 hover:shadow-sm hover:border-gray-300 transition-all cursor-pointer dark:border-neutral-700 dark:hover:border-neutral-600 relative"
              >
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="size-4 text-gray-400 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </div>
                <p className="mb-2 text-sm text-gray-500 dark:text-neutral-500">
                  {formatDate(post.publishedAt)}
                </p>
                <h5 className="font-medium text-sm text-gray-800 dark:text-neutral-200">
                  {post.title}
                </h5>
                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                  {post.brief}
                </p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
