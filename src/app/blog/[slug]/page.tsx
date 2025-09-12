import { getAllPosts, getPost } from '@/lib/hashnode'
import { BlogPost } from '@/components/BlogPost'
import { notFound } from 'next/navigation'

export const revalidate = 3600

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const post = await getPost(slug)
  
  if (!post) {
    notFound()
  }
  
  return <BlogPost post={post} />
}
