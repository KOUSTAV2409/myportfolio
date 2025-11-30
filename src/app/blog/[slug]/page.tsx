'use client'
import { useState, useEffect } from 'react'
import { use } from 'react'
import { getPost, Post } from '@/lib/hashnode'
import { BlogPost } from '@/components/BlogPost'
import { ErrorBoundary } from '@/components/error-boundary'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

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
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
            <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Article Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400">{error || 'The article you\'re looking for doesn\'t exist.'}</p>
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <BlogPost post={post} />
    </ErrorBoundary>
  )
}
