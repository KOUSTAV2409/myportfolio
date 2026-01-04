'use client'
import { useState, useEffect } from 'react'
import { use } from 'react'
import { getPost, Post } from '@/lib/hashnode'
import { BlogPost } from '@/components/BlogPost'
import Link from 'next/link'

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await getPost(resolvedParams.slug)
        if (!fetchedPost) {
          setError('Post not found')
        } else {
          setPost(fetchedPost)
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch post')
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [resolvedParams.slug])

  if (loading) {
    return (
      <div className="dark:bg-neutral-900 min-h-screen">
        <div className="w-full max-w-2xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse space-y-6">
            <div className="h-4 bg-gray-200 dark:bg-neutral-700 rounded w-24"></div>
            <div className="space-y-3">
              <div className="h-8 bg-gray-200 dark:bg-neutral-700 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 dark:bg-neutral-700 rounded w-1/2"></div>
            </div>
            <div className="h-48 bg-gray-200 dark:bg-neutral-700 rounded"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-neutral-700 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-neutral-700 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-neutral-700 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="dark:bg-neutral-900 min-h-screen">
        <div className="w-full max-w-2xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-neutral-200">Article Not Found</h1>
            <p className="text-gray-600 dark:text-neutral-400">{error || 'The article you\'re looking for doesn\'t exist.'}</p>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7-7l-7 7 7 7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return <BlogPost post={post} />
}
