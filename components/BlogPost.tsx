import Image from 'next/image'
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
      // Handle other Hashnode embeds (Twitter, etc.)
      .replace(/%\[(https:\/\/[^\]]+)\]/g, (match, url) => {
        // For other URLs, create a link
        return `[${url}](${url})`
      })
      // Clean up Hashnode image alignment syntax
      .replace(/!\[\]\(([^)]+)\)\s*align="[^"]*"/g, '![]($1)')
      .replace(/!\[([^\]]*)\]\(([^)]+)\)\s*align="[^"]*"/g, '![$1]($2)')
      // Remove standalone align attributes
      .replace(/align="[^"]*"/g, '')
      // Convert Hashnode image URLs to proper markdown
      .replace(/https:\/\/cdn\.hashnode\.com\/res\/hashnode\/image\/[^\s)]+/g, (url) => {
        return `![Image](${url})`
      })
  }

  const processedMarkdown = processMarkdown(post.content.markdown)

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {post.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        {post.coverImage && (
          <Image
            src={post.coverImage.url}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
        )}
      </header>
      
      <div className="prose prose-lg prose-gray dark:prose-invert max-w-none
                      prose-headings:text-gray-900 dark:prose-headings:text-white
                      prose-p:text-gray-700 dark:prose-p:text-gray-300
                      prose-a:text-blue-600 dark:prose-a:text-blue-400
                      prose-strong:text-gray-900 dark:prose-strong:text-white
                      prose-code:text-pink-600 dark:prose-code:text-pink-400
                      prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800
                      prose-img:rounded-lg prose-img:shadow-lg">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            img: ({ src, alt, width, height, ...props }) => {
              // Don't render if src is empty or not a string
              if (!src || typeof src !== 'string') return null
              
              return (
                <Image
                  src={src}
                  alt={alt || ''}
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg my-6"
                  unoptimized={src.includes('cdn.hashnode.com')}
                />
              )
            },
            iframe: ({ src, height, style, ...props }) => {
              // Don't render if src is empty or not a string
              if (!src || typeof src !== 'string') return null
              
              return (
                <div className="my-8">
                  <iframe
                    src={src}
                    height={height || "400"}
                    style={{ width: '100%', ...style }}
                    className="rounded-lg border border-gray-200 dark:border-gray-700"
                    frameBorder="0"
                    loading="lazy"
                    allowFullScreen={true}
                    {...props}
                  />
                </div>
              )
            },
            a: ({ href, children, ...props }) => {
              // Handle image URLs that appear as links
              if (href?.includes('cdn.hashnode.com') && (href.includes('.jpg') || href.includes('.png') || href.includes('.jpeg') || href.includes('.webp'))) {
                return (
                  <Image
                    src={href}
                    alt={typeof children === 'string' ? children : 'Image'}
                    width={800}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg my-6"
                    unoptimized
                  />
                )
              }
              
              // Regular links
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  {...props}
                >
                  {children}
                </a>
              )
            },
            code: ({ className, children, ...props }) => (
              <code
                className={`${className} bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm`}
                {...props}
              >
                {children}
              </code>
            ),
            pre: ({ children, ...props }) => (
              <pre
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-6"
                {...props}
              >
                {children}
              </pre>
            )
          }}
        >
          {processedMarkdown}
        </ReactMarkdown>
      </div>
      
      <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Originally published on{' '}
          <a 
            href={post.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Hashnode
          </a>
        </p>
      </footer>
    </article>
  )
}
