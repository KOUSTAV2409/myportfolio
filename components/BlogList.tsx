import Link from 'next/link'
import { Post } from '@/lib/hashnode'

interface BlogListProps {
  posts: Post[]
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <>
      {/* Back to Home Button */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          data-cursor-hover
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5"/>
            <path d="M12 19l-7-7 7-7"/>
          </svg>
          <span>Back to home</span>
        </Link>
      </div>

      <div className="space-y-16">
        {posts.map((post, index) => (
          <article key={post.id} className="group">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <time>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                      year: 'numeric',
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                  <span>•</span>
                  <span>Article</span>
                </div>
                
                <h2 className="text-xl font-medium text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {post.brief || post.content.markdown.slice(0, 200).replace(/[#*`]/g, '') + '...'}
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 dark:text-gray-400">No articles yet.</p>
        </div>
      )}
    </>
  )
}
