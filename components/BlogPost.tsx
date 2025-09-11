'use client'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { Post } from '@/lib/hashnode'
import { NewsletterSignup } from './newsletter-signup'

interface BlogPostProps {
  post: Post
}

export function BlogPost({ post }: BlogPostProps) {
  // Enhanced markdown processing for Hashnode content
  const processMarkdown = (markdown: string) => {
    return markdown
      // Handle Hashnode embed syntax %[URL]
      .replace(/%\[(https:\/\/codepen\.io\/[^\]]+)\]/g, (match, url) => {
        const penMatch = url.match(/codepen\.io\/([^\/]+)\/pen\/([^\/?]+)/)
        if (penMatch) {
          const [, user, penId] = penMatch
          return `\n\n<iframe src="https://codepen.io/${user}/embed/${penId}?default-tab=result" height="400" style="width: 100%;" scrolling="no" title="CodePen Embed" frameborder="0" loading="lazy"></iframe>\n\n`
        }
        return match
      })
      // Handle Hashnode YouTube embeds
      .replace(/%\[(https:\/\/(?:www\.)?youtube\.com\/watch\?v=([^\]&]+))\]/g, (match, url, videoId) => {
        return `\n\n<iframe src="https://www.youtube.com/embed/${videoId}" width="100%" height="315" frameborder="0"></iframe>\n\n`
      })
      // Handle other Hashnode embeds
      .replace(/%\[(https:\/\/[^\]]+)\]/g, (match, url) => {
        return `[${url}](${url})`
      })
      // Clean up Hashnode image alignment syntax
      .replace(/!\[\]\(([^)]+)\)\s*align="[^"]*"/g, '![]($1)')
      .replace(/!\[([^\]]*)\]\(([^)]+)\)\s*align="[^"]*"/g, '![$1]($2)')
      .replace(/align="[^"]*"/g, '')
      // Convert Hashnode image URLs to proper markdown
      .replace(/https:\/\/cdn\.hashnode\.com\/res\/hashnode\/image\/[^\s)]+/g, (url) => {
        return `![Image](${url})`
      })
  }

  const processedMarkdown = processMarkdown(post.content.markdown)
  const readingTime = Math.ceil(post.content.markdown.length / 1000)

  return (
    <>
      {/* Back to Blog Button */}
      <div className="mb-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors group"
          data-cursor-hover
        >
          <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5"/>
            <path d="M12 19l-7-7 7-7"/>
          </svg>
          <span>Back to writing</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-16 pb-8 border-b border-gray-200 dark:border-gray-800">
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <time>
              {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                year: 'numeric',
                month: 'long', 
                day: 'numeric' 
              })}
            </time>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span>{readingTime} min read</span>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span className="text-xs uppercase tracking-wide font-medium">Article</span>
          </div>
          
          <h1 className="text-2xl font-medium text-black dark:text-white leading-tight">
            {post.title}
          </h1>
          
          {post.brief && (
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light max-w-2xl">
              {post.brief}
            </p>
          )}
        </div>
      </header>

      {/* Cover Image */}
      {post.coverImage && (
        <div className="not-prose mb-12">
          <Image
            src={post.coverImage.url}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-80 object-cover rounded-lg"
            unoptimized
          />
        </div>
      )}

      {/* Content */}
      <main className="prose prose-gray dark:prose-invert prose-h4:prose-base prose-h1:text-xl prose-h1:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium prose-a:text-black dark:prose-a:text-white prose-a:no-underline hover:prose-a:underline prose-a:decoration-1 prose-a:underline-offset-2 prose-code:text-sm prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-pre:bg-gray-50 dark:prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-800 prose-pre:rounded-lg prose-blockquote:border-l-2 prose-blockquote:border-gray-300 dark:prose-blockquote:border-gray-600 prose-blockquote:pl-6 prose-blockquote:italic">
        
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            img: ({ src, alt, width, height }) => {
              if (!src || typeof src !== 'string') return null
              
              return (
                <div className="my-8">
                  <Image
                    src={src}
                    alt={alt || ''}
                    width={800}
                    height={400}
                    className="w-full h-auto rounded-lg"
                    unoptimized={src.includes('cdn.hashnode.com')}
                  />
                </div>
              )
            },
            iframe: ({ src, height, style }) => {
              if (!src || typeof src !== 'string') return null
              
              return (
                <div className="my-8 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
                  <iframe
                    src={src}
                    height={height || "400"}
                    style={{ width: '100%', ...style }}
                    className="w-full"
                    frameBorder="0"
                    loading="lazy"
                    allowFullScreen={true}
                  />
                </div>
              )
            },
            a: ({ href, children }) => {
              if (href?.includes('cdn.hashnode.com') && (href.includes('.jpg') || href.includes('.png') || href.includes('.jpeg') || href.includes('.webp'))) {
                return (
                  <div className="my-8">
                    <Image
                      src={href}
                      alt={typeof children === 'string' ? children : 'Image'}
                      width={800}
                      height={400}
                      className="w-full h-auto rounded-lg"
                      unoptimized
                    />
                  </div>
                )
              }
              
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors no-underline hover:underline decoration-1 underline-offset-2"
                >
                  {children}
                </a>
              )
            },
            h2: ({ children }) => (
              <h2 className="text-lg font-medium text-black dark:text-white mt-12 mb-4 scroll-m-20">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-base font-medium text-black dark:text-white mt-8 mb-3">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {children}
              </p>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-2 border-gray-300 dark:border-gray-600 pl-6 italic text-gray-600 dark:text-gray-400 my-6">
                {children}
              </blockquote>
            ),
          }}
        >
          {processedMarkdown}
        </ReactMarkdown>
      </main>

      {/* Newsletter Signup */}
      <div className="not-prose">
        <NewsletterSignup 
          variant="footer"
          title="Enjoyed this article?"
          description="Subscribe to get notified when I publish new insights on JavaScript, web development, and software engineering."
        />
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <span>Originally published on </span>
            <a 
              href={post.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Hashnode
            </a>
          </div>
          
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href)
            }}
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            Copy URL
          </button>
        </div>
      </footer>
    </>
  )
}
