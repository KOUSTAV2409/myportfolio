'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Post } from '@/lib/hashnode'

interface BlogPostProps {
  post: Post
}

export function BlogPost({ post }: BlogPostProps) {
  const readingTime = Math.ceil(post.content.markdown.length / 1000)

  return (
    <div className="dark:bg-neutral-900">
      <div className="w-full max-w-2xl mx-auto pt-6 sm:pt-10 px-4 sm:px-6">
        {/* Back Button */}
        <div className="mb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7-7l-7 7 7 7" />
            </svg>
            Back
          </Link>
        </div>

        {/* Article Header */}
        <div className="mb-10">
          <p className="mb-2 text-sm text-gray-500 dark:text-neutral-500">
            {new Date(post.publishedAt).toLocaleDateString('en-US', { 
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}
          </p>
          
          <h1 className="font-medium text-gray-800 dark:text-neutral-200 mb-4 text-lg sm:text-xl leading-tight">
            {post.title}
          </h1>
          
          {post.brief && (
            <p className="text-sm text-gray-500 dark:text-neutral-500 leading-relaxed">
              {post.brief}
            </p>
          )}
        </div>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="mb-10">
            <Image
              src={post.coverImage.url}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-auto rounded-lg"
              priority
              unoptimized
            />
          </div>
        )}

        {/* Content */}
        <div className="space-y-6 text-sm text-gray-600 dark:text-neutral-400 leading-relaxed">
          <div 
            dangerouslySetInnerHTML={{
              __html: post.content.markdown
                // Convert images
                .replace(/!\[\]\((https:\/\/cdn\.hashnode\.com[^)]+)\)\s*align="[^"]*"/g, '<img src="$1" alt="" class="w-full h-auto rounded-lg my-6" loading="lazy" />')
                .replace(/!\[([^\]]*)\]\((https:\/\/[^)]+)\)/g, '<img src="$2" alt="$1" class="w-full h-auto rounded-lg my-6" loading="lazy" />')
                // Convert headers
                .replace(/^### (.*$)/gim, '<h3 class="font-medium text-gray-800 dark:text-neutral-200 mb-3 mt-8 text-base">$1</h3>')
                .replace(/^## (.*$)/gim, '<h2 class="font-medium text-gray-800 dark:text-neutral-200 mb-4 mt-10 text-lg">$1</h2>')
                .replace(/^# (.*$)/gim, '<h1 class="font-medium text-gray-800 dark:text-neutral-200 mb-4 mt-8 text-xl">$1</h1>')
                // Convert bold
                .replace(/\*\*(.*?)\*\*/g, '<strong class="font-medium text-gray-800 dark:text-neutral-200">$1</strong>')
                // Convert links
                .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-gray-800 dark:text-neutral-200 underline hover:no-underline">$1</a>')
                // Convert code blocks
                .replace(/```([^`]+)```/g, '<pre class="bg-gray-50 dark:bg-neutral-800 rounded-lg p-4 overflow-x-auto my-6 text-sm"><code>$1</code></pre>')
                // Convert inline code
                .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
                // Convert CodePen embeds
                .replace(/%\[(https:\/\/codepen\.io\/[^\]]+)\]/g, (match, url) => {
                  const penMatch = url.match(/codepen\.io\/([^\/]+)\/pen\/([^\/?]+)/)
                  if (penMatch) {
                    const [, user, penId] = penMatch
                    return `<div class="my-8 rounded-lg overflow-hidden"><iframe src="https://codepen.io/${user}/embed/${penId}?default-tab=result" height="400" style="width: 100%; border: none;" loading="lazy"></iframe></div>`
                  }
                  return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-gray-800 dark:text-neutral-200 underline">${url}</a>`
                })
                // Convert paragraphs
                .split('\n\n')
                .map(paragraph => {
                  if (paragraph.trim() === '') return ''
                  if (paragraph.includes('<h1>') || paragraph.includes('<h2>') || paragraph.includes('<h3>') || 
                      paragraph.includes('<img') || paragraph.includes('<iframe') || paragraph.includes('<pre>')) {
                    return paragraph
                  }
                  return `<p class="mb-4">${paragraph.trim()}</p>`
                })
                .join('')
            }}
          />
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-neutral-700">
          <p className="text-xs text-gray-500 dark:text-neutral-500">
            Originally published on{' '}
            <a 
              href="https://syntaxandsoul.hashnode.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-gray-800 hover:decoration-2 dark:hover:text-neutral-400"
            >
              Hashnode
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
