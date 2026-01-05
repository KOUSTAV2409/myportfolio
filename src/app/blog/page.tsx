'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts, Post } from '@/lib/hashnode'

function BlogProfileSection() {
  return (
    <div className="w-full max-w-2xl mx-auto pt-6 sm:pt-10 px-4 sm:px-6">
      {/* Profile */}
      <div className="flex items-center gap-x-4">
        <div className="shrink-0">
          <div className="size-14 sm:size-20 rounded-full bg-gray-800 dark:bg-white flex items-center justify-center">
            <span className="text-white dark:text-gray-800 font-bold text-lg sm:text-xl">KG</span>
          </div>
        </div>

        <div className="grow">
          <h1 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
            Technical Writing
          </h1>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            JavaScript, React & System Design Articles
          </p>
        </div>
      </div>

      {/* About */}
      <div className="mt-8">
        <p className="text-sm text-gray-600 dark:text-neutral-400">
          I write in-depth technical articles about JavaScript fundamentals, React patterns, and system design concepts. 
          My goal is to explain complex topics in a clear, practical way that helps developers build better applications.
        </p>

        <p className="mt-3 text-sm text-gray-600 dark:text-neutral-400">
          All articles are published on my Hashnode blog where I share insights from real-world development experience, 
          code examples, and best practices for modern web development.
        </p>

        <ul className="mt-5 flex flex-col gap-y-3">
          <li className="flex items-center gap-x-2.5">
            <svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <a className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="https://syntaxandsoul.hashnode.dev/" target="_blank" rel="noopener noreferrer">
              syntaxandsoul.hashnode.dev
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

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

  return (
    <div className="dark:bg-neutral-900">
      <BlogProfileSection />
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6">
        {/* Articles section */}
        <div className="mt-10 sm:mt-14">
          <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
            Latest Articles
          </h2>

          {loading ? (
            <div className="space-y-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 mb-2"></div>
                  <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-1"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <p className="text-red-500 text-sm">Error loading articles: {error}</p>
          ) : posts.length === 0 ? (
            <p className="text-gray-500 text-sm">No articles found.</p>
          ) : (
            <ul className="space-y-10">
              {posts.map((post) => (
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

        {/* Subscribe section */}
        <div className="my-10 sm:my-14">
          <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
            Follow My Writing
          </h2>

          <div className="p-1.5 flex flex-col sm:flex-row items-center gap-2 border border-gray-200 rounded-lg dark:border-neutral-700">
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
                <svg className="shrink-0 size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
              <input 
                type="text" 
                className="py-1.5 sm:py-2 ps-9 pe-3 block w-full border-transparent rounded-lg sm:text-sm focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500" 
                placeholder="Visit my Hashnode blog"
                readOnly
              />
            </div>
            <Link 
              href="https://syntaxandsoul.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto whitespace-nowrap py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200"
            >
              Visit Blog
              <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
          <p className="mt-2 text-xs text-gray-500 dark:text-neutral-500">
            Follow me on Hashnode for regular updates and new articles.
          </p>
        </div>
      </div>
    </div>
  )
}
