import { getAllPosts } from '@/lib/hashnode'
import { BlogList } from '@/components/BlogList'

export const revalidate = 3600

export default async function BlogPage() {
  const posts = await getAllPosts()
  return <BlogList posts={posts} />
}
