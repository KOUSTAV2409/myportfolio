import Link from 'next/link'
import { Post } from '@/lib/hashnode'

interface BlogListProps {
  posts: Post[]
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <>
      {/* Back to Home Button */}
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors group"
          data-cursor-hover
        >
          <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5"/>
            <path d="M12 19l-7-7 7-7"/>
          </svg>
          <span>Back to home</span>
        </Link>
      </div>

      {/* Header */}
      <div className="mb-16 pb-8 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-2xl font-medium text-black dark:text-white mb-3">Writing</h1>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          Thoughts on development, design, and building digital experiences.
        </p>
        <div className="flex items-center gap-4 mt-4 text-sm text-gray-500 dark:text-gray-400">
          <span>{posts.length} articles</span>
          <span>•</span>
          <a 
            href="https://syntaxandsoul.hashnode.dev/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            View on Hashnode →
          </a>
        </div>
      </div>

      {/* Articles */}
      <div className="space-y-12">
        {posts.map((post, index) => (
          <article key={post.id} className="group">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="space-y-3 py-4 -mx-4 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <time>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                      year: 'numeric',
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </time>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="text-xs uppercase tracking-wide font-medium">Article</span>
                </div>
                
                <h2 className="text-lg font-medium text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors leading-snug">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {post.brief || post.content.markdown.slice(0, 180).replace(/[#*`]/g, '') + '...'}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                    Read article
                  </span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-black dark:group-hover:text-white group-hover:translate-x-0.5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7"/>
                    <path d="M7 7h10v10"/>
                  </svg>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 dark:text-gray-400">No articles published yet.</p>
        </div>
      )}
    </>
  )
}
