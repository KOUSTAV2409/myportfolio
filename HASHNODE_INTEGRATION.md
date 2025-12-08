# Hashnode Blog Integration

## Overview

This portfolio features a **custom Hashnode blog integration** that fetches and displays your Hashnode articles directly on your portfolio site - without using Hashnode Headless CMS or any complex setup.

**Key Benefits:**
- ✅ Full control over blog UI/UX
- ✅ No Hashnode branding
- ✅ Custom styling with your design system
- ✅ Direct GraphQL API integration
- ✅ Free (no Hashnode Pro required)
- ✅ SEO-friendly with custom metadata
- ✅ Markdown rendering with syntax highlighting

## How It Works

### Architecture

```
Hashnode (Content) → GraphQL API → Your Portfolio → Custom UI
```

1. **Write on Hashnode** - Use Hashnode's excellent editor
2. **Fetch via GraphQL** - Direct API calls (no SDK needed)
3. **Render on Your Site** - Full control over design
4. **Keep Hashnode Benefits** - Analytics, community, SEO on Hashnode

### Implementation

#### 1. GraphQL Client (`src/lib/hashnode.ts`)

Simple, lightweight GraphQL client:

```typescript
const HASHNODE_API = 'https://gql.hashnode.com'
const USERNAME = 'your-hashnode-username'

// Fetch all posts
export async function getAllPosts(): Promise<Post[]> {
  const { data } = await fetchHashnode(POSTS_QUERY, { 
    username: USERNAME, 
    page: 1, 
    pageSize: 20 
  })
  return data?.user?.posts?.edges?.map((edge: any) => edge.node) || []
}

// Fetch single post by slug
export async function getPost(slug: string): Promise<Post | null> {
  const allPosts = await getAllPosts()
  return allPosts.find(p => p.slug === slug) || null
}
```

**No dependencies required!** Just native `fetch()`.

#### 2. Blog List Page (`src/app/blog/page.tsx`)

Displays all your Hashnode articles:
- Fetches posts on page load
- Shows title, brief, cover image
- Links to individual post pages

#### 3. Blog Post Page (`src/app/blog/[slug]/page.tsx`)

Renders individual articles:
- Dynamic routing with Next.js
- Fetches post by slug
- Markdown rendering
- Syntax highlighting
- Loading states
- Error handling

#### 4. Custom UI Components

- `BlogPost` - Article layout
- `BlogPostTemplate` - Reusable template
- Markdown rendering with `react-markdown`
- Code syntax highlighting with `sugar-high`

## Setup Instructions

### 1. Get Your Hashnode Username

Your Hashnode username is in your profile URL:
```
https://hashnode.com/@your-username
```

### 2. Update Configuration

Edit `src/lib/hashnode.ts`:

```typescript
const USERNAME = 'your-hashnode-username'  // Change this!
```

### 3. Test Locally

```bash
npm run dev
```

Visit:
- `/blog` - See all posts
- `/blog/your-post-slug` - See individual post

### 4. Deploy

That's it! Your Hashnode posts will automatically appear on your portfolio.

## Features

### ✅ What You Get

1. **Automatic Sync**
   - New posts appear automatically
   - No manual updates needed
   - Fetched on page load

2. **Full Markdown Support**
   - Headings, lists, links
   - Code blocks with syntax highlighting
   - Images, quotes, tables
   - All standard Markdown features

3. **Custom Styling**
   - Match your portfolio design
   - Dark mode support
   - Responsive layout
   - Custom typography

4. **SEO Optimized**
   - Dynamic metadata
   - Open Graph tags
   - Proper heading structure
   - Fast loading

5. **Loading States**
   - Skeleton loaders
   - Error handling
   - 404 pages
   - Smooth transitions

### ❌ What You Don't Need

- ❌ Hashnode Pro subscription
- ❌ Headless CMS setup
- ❌ Complex API keys
- ❌ Webhooks or build triggers
- ❌ Additional dependencies

## Customization

### Change Number of Posts

```typescript
// src/lib/hashnode.ts
pageSize: 20  // Change to 10, 50, etc.
```

### Customize Post Layout

Edit `src/components/BlogPost.tsx`:
- Change typography
- Modify spacing
- Add custom components
- Adjust colors

### Add Filters/Search

Extend `getAllPosts()` to filter by:
- Tags
- Date range
- Search terms

```typescript
export async function getPostsByTag(tag: string): Promise<Post[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter(post => post.tags?.includes(tag))
}
```

### Cache Posts (Optional)

For better performance, add caching:

```typescript
// Next.js App Router
export const revalidate = 3600 // Revalidate every hour

// Or use React Query, SWR, etc.
```

## GraphQL Query Reference

### Get All Posts

```graphql
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
```

### Available Fields

You can also fetch:
- `tags { name }`
- `readTimeInMinutes`
- `reactionCount`
- `responseCount`
- `views`
- `author { name, profilePicture }`

Add them to the query and TypeScript interface.

## Troubleshooting

### Posts Not Showing

1. **Check username:**
   ```typescript
   const USERNAME = 'your-hashnode-username'
   ```

2. **Verify posts are public** on Hashnode

3. **Check console logs:**
   ```bash
   npm run dev
   # Check browser console for errors
   ```

### Styling Issues

1. **Markdown not rendering:**
   - Check `react-markdown` is installed
   - Verify Tailwind typography plugin

2. **Code blocks not highlighted:**
   - Check `sugar-high` is installed
   - Verify syntax highlighting CSS

### Performance Issues

1. **Slow loading:**
   - Add caching with `revalidate`
   - Reduce `pageSize`
   - Use ISR (Incremental Static Regeneration)

2. **Too many API calls:**
   - Implement client-side caching
   - Use SWR or React Query

## Advanced Usage

### Add Reading Time

```typescript
export interface Post {
  // ... existing fields
  readTimeInMinutes: number
}

// Update GraphQL query to include:
// readTimeInMinutes
```

### Add Tags/Categories

```typescript
export interface Post {
  // ... existing fields
  tags: Array<{ name: string }>
}

// Filter by tag
export async function getPostsByTag(tag: string) {
  const allPosts = await getAllPosts()
  return allPosts.filter(post => 
    post.tags?.some(t => t.name === tag)
  )
}
```

### Add Search

```typescript
export async function searchPosts(query: string) {
  const allPosts = await getAllPosts()
  return allPosts.filter(post =>
    post.title.toLowerCase().includes(query.toLowerCase()) ||
    post.brief.toLowerCase().includes(query.toLowerCase())
  )
}
```

## Why This Approach?

### vs Hashnode Headless CMS
- ❌ Requires Hashnode Pro ($5-20/month)
- ❌ More complex setup
- ✅ More features (webhooks, etc.)

### vs Embedding Hashnode
- ❌ Hashnode branding
- ❌ Limited customization
- ❌ Iframe issues

### vs This Approach
- ✅ **Free**
- ✅ **Simple** - Just one file
- ✅ **Full control** - Your design
- ✅ **No vendor lock-in**
- ✅ **Fast** - Direct API calls

## Example Sites Using This

- [iamk.xyz](https://iamk.xyz/blog) - This portfolio
- Add your site here!

## Resources

- [Hashnode GraphQL API Docs](https://api.hashnode.com/)
- [GraphQL Playground](https://gql.hashnode.com/)
- [Hashnode Public API](https://apidocs.hashnode.com/)

## Contributing

Found a bug or have an improvement? Open an issue or PR!

## License

This integration code is MIT licensed. Use it freely!

---

**Questions?** Open an issue or contact: koustavganguly24@gmail.com
