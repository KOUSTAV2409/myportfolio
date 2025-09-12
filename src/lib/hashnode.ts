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



async function fetchHashnode(query: string, variables: any) {
  try {
    const response = await fetch(HASHNODE_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables })
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    return response.json()
  } catch (error) {
    console.error('Hashnode API fetch error:', error)
    throw error
  }
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
    
    // Use the working getAllPosts and find the specific post
    const allPosts = await getAllPosts()
    const post = allPosts.find(p => p.slug === slug) || null
    
    console.log('Found post:', post ? post.title : 'Not found')
    return post
  } catch (error) {
    console.error('Error in getPost:', error)
    return null
  }
}
