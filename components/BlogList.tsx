import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/lib/hashnode'

interface BlogListProps {
  posts: Post[]
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black dark:text-white mb-2">Blog</h1>
        <p className="text-gray-600 dark:text-gray-400">Latest articles from my Hashnode blog</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <article key={post.id}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <div className="p-6 rounded-xl bg-gray-50/80 dark:bg-gray-900/40 border border-gray-200/60 dark:border-gray-800/60 hover:bg-gray-100/80 dark:hover:bg-gray-900/60 hover:border-gray-300/60 dark:hover:border-gray-700/60 transition-all duration-300 h-full">
                {post.coverImage && (
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={post.coverImage.url}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 rounded-md text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-800">
                      📝 Article
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>
                  
                  <h2 className="font-medium text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                    {post.brief || post.content.markdown.slice(0, 150) + '...'}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Read on Hashnode
                    </span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:translate-x-0.5 transition-all duration-200">
                      <path d="M7 17L17 7"/>
                      <path d="M7 7h10v10"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
