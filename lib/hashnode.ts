const HASHNODE_API = 'https://gql.hashnode.com'
const USERNAME = 'ganguly607'

export interface Post {
  id: string
  title: string
  slug: string
  brief: string
  coverImage?: { url: string }
  publishedAt: string
  url: string
  content: { markdown: string }
}

const POSTS_QUERY = `
  query GetUserPosts($username: String!, $page: Int!, $pageSize: Int!) {
    user(username: $username) {
      posts(page: $page, pageSize: $pageSize) {
        edges {
          node {
            id
            title
            slug
            brief
            coverImage { url }
            publishedAt
            url
            content { markdown }
          }
        }
      }
    }
  }
`

const POST_QUERY = `
  query GetPost($username: String!, $slug: String!) {
    user(username: $username) {
      publication {
        post(slug: $slug) {
          id
          title
          slug
          brief
          coverImage { url }
          publishedAt
          url
          content { markdown }
        }
      }
    }
  }
`

async function fetchHashnode(query: string, variables: any) {
  const response = await fetch(HASHNODE_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables })
  })
  return response.json()
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    console.log('Fetching posts for username:', USERNAME)
    const { data, errors } = await fetchHashnode(POSTS_QUERY, { 
      username: USERNAME, 
      page: 1, 
      pageSize: 20 
    })
    
    if (errors) {
      console.error('GraphQL errors:', errors)
      return []
    }
    
    console.log('API response:', data)
    const posts = data?.user?.posts?.edges?.map((edge: any) => edge.node) || []
    console.log('Processed posts:', posts.length)
    
    // Log the slugs for debugging
    posts.forEach((post: any) => {
      console.log('Post slug:', post.slug, 'Title:', post.title)
    })
    
    return posts
  } catch (error) {
    console.error('Error in getAllPosts:', error)
    return []
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    console.log('Fetching post with slug:', slug)
    
    // First try the direct query
    const { data, errors } = await fetchHashnode(POST_QUERY, { username: USERNAME, slug })
    
    if (errors) {
      console.error('GraphQL errors in getPost:', errors)
    }
    
    console.log('Post API response:', data)
    let post = data?.user?.publication?.post || data?.user?.post || null
    
    // Fallback: get from all posts if direct query fails
    if (!post) {
      console.log('Direct query failed, trying fallback...')
      const allPosts = await getAllPosts()
      post = allPosts.find(p => p.slug === slug) || null
    }
    
    console.log('Found post:', post ? post.title : 'Not found')
    return post
  } catch (error) {
    console.error('Error in getPost:', error)
    return null
  }
}
