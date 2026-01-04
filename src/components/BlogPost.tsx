'use client'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { Post } from '@/lib/hashnode'

interface BlogPostProps {
  post: Post
}

export function BlogPost({ post }: BlogPostProps) {
  const readingTime = Math.ceil(post.content.markdown.length / 1000)

  return (
    <div className="dark:bg-neutral-900">
      <div className="w-full max-w-2xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7-7l-7 7 7 7" />
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-neutral-500 mb-3">
            <time>
              {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                year: 'numeric',
                month: 'long', 
                day: 'numeric' 
              })}
            </time>
            <span>•</span>
            <span>{readingTime} min read</span>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-800 dark:text-neutral-200 mb-4">
            {post.title}
          </h1>
          
          {post.brief && (
            <p className="text-lg text-gray-600 dark:text-neutral-400 leading-relaxed">
              {post.brief}
            </p>
          )}
        </div>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="mb-8">
            <Image
              src={post.coverImage.url}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-gray dark:prose-invert max-w-none prose-headings:text-gray-800 dark:prose-headings:text-neutral-200 prose-p:text-gray-600 dark:prose-p:text-neutral-400 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-code:text-sm prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              img: ({ src, alt }) => {
                if (!src) return null
                return (
                  <Image
                    src={src}
                    alt={alt || ''}
                    width={800}
                    height={400}
                    className="w-full h-auto rounded-lg my-6"
                    unoptimized={src.includes('cdn.hashnode.com')}
                  />
                )
              },
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  {children}
                </a>
              ),
            }}
          >
            {post.content.markdown}
          </ReactMarkdown>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-neutral-700">
          <div className="flex items-center justify-between text-sm">
            <div className="text-gray-500 dark:text-neutral-500">
              <span>Originally published on </span>
              <a 
                href="https://syntaxandsoul.hashnode.dev/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                Hashnode
              </a>
            </div>
            
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href)
              }}
              className="text-gray-500 dark:text-neutral-500 hover:text-gray-800 dark:hover:text-neutral-200 transition-colors"
            >
              Copy URL
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
