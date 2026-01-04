import Link from 'next/link'
import { BLOG_POSTS } from '@/app/data'

export default function ArticlesSection() {
  return (
    <div className="my-10 sm:my-14">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        Articles
      </h2>

      {/* List */}
      <ul className="space-y-10">
        {BLOG_POSTS.slice(0, 3).map((post, index) => (
          <li key={post.uid}>
            <p className="mb-2 text-sm text-gray-500 dark:text-neutral-500">
              2024
            </p>
            <h5 className="font-medium text-sm text-gray-800 dark:text-neutral-200">
              {post.title}
            </h5>
            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
              {post.description}
            </p>
            <p className="mt-1">
              <Link 
                className="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" 
                href={post.link}
              >
                Continue reading
              </Link>
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
