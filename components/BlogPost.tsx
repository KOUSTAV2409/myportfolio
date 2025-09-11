import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { Post } from '@/lib/hashnode'

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

  return (
    <>
      {/* Back to Home Button */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          data-cursor-hover
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5"/>
            <path d="M12 19l-7-7 7-7"/>
          </svg>
          <span>Back to blog</span>
        </Link>
      </div>

      <main className="prose prose-gray mt-24 pb-20 prose-h4:prose-base dark:prose-invert prose-h1:text-xl prose-h1:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium">
        
        {/* Cover Image */}
        {post.coverImage && (
          <div className="not-prose mb-12 -mt-16">
            <Image
              src={post.coverImage.url}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg"
              unoptimized
            />
          </div>
        )}

        {/* Title */}
        <h1 className="mb-4">{post.title}</h1>
        
        {/* Meta */}
        <div className="not-prose mb-8 text-sm text-gray-500 dark:text-gray-400">
          <time>
            {new Date(post.publishedAt).toLocaleDateString('en-US', { 
              year: 'numeric',
              month: 'long', 
              day: 'numeric' 
            })}
          </time>
          <span className="mx-2">•</span>
          <span>Article</span>
        </div>

        {/* Brief */}
        {post.brief && (
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 font-normal">
            {post.brief}
          </p>
        )}

        <hr className="my-8" />

        {/* Content */}
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            img: ({ src, alt, width, height }) => {
              if (!src || typeof src !== 'string') return null
              
              return (
                <Image
                  src={src}
                  alt={alt || ''}
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-lg my-8"
                  unoptimized={src.includes('cdn.hashnode.com')}
                />
              )
            },
            iframe: ({ src, height, style }) => {
              if (!src || typeof src !== 'string') return null
              
              return (
                <div className="my-8">
                  <iframe
                    src={src}
                    height={height || "400"}
                    style={{ width: '100%', ...style }}
                    className="w-full rounded-lg"
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
                  <Image
                    src={href}
                    alt={typeof children === 'string' ? children : 'Image'}
                    width={800}
                    height={400}
                    className="w-full h-auto rounded-lg my-8"
                    unoptimized
                  />
                )
              }
              
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  {children}
                </a>
              )
            },
          }}
        >
          {processedMarkdown}
        </ReactMarkdown>

        <hr className="my-12" />

        {/* Footer */}
        <div className="not-prose">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Originally published on{' '}
            <a 
              href={post.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Hashnode
            </a>
          </p>
        </div>
      </main>
    </>
  )
}
