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
        <ul className="space-y-10">
          {posts.slice(0, 3).map((post) => (
            <li key={post.id}>
              <p className="mb-2 text-sm text-gray-500 dark:text-neutral-500">
                {formatDate(post.publishedAt)}
              </p>
              <h5 className="font-medium text-sm text-gray-800 dark:text-neutral-200">
                {post.title}
              </h5>
              <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                {post.brief}
              </p>
              <p className="mt-1">
                <a 
                  className="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" 
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Continue reading
                </a>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
