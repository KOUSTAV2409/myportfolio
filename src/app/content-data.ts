export type ContentCategory = 'cs-theory' | 'math' | 'business-analysis' | 'tech-stack' | 'case-study'

export type ContentItem = {
  id: string
  title: string
  description: string
  category: ContentCategory
  readTime: string
  publishedAt: string
  link: string
  featured?: boolean
  tags: string[]
}

export const CONTENT_CATEGORIES = {
  'cs-theory': {
    label: 'CS Theory',
    description: 'Deep dives into computer science fundamentals',
    color: 'blue',
    icon: '🧠'
  },
  'math': {
    label: 'Mathematics',
    description: 'Mathematical concepts behind algorithms',
    color: 'purple',
    icon: '📐'
  },
  'business-analysis': {
    label: 'Business Analysis',
    description: 'Tech decisions through business lens',
    color: 'green',
    icon: '📊'
  },
  'tech-stack': {
    label: 'Tech Insights',
    description: 'Thoughts on frameworks and tools',
    color: 'orange',
    icon: '⚡'
  },
  'case-study': {
    label: 'Case Studies',
    description: 'Real-world problem solving',
    color: 'red',
    icon: '🔍'
  }
} as const

export const CONTENT_ITEMS: ContentItem[] = [
  {
    id: 'graph-algorithms-business',
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design and build digital products in the modern era.',
    category: 'cs-theory',
    readTime: '8 min',
    publishedAt: '2024-01-15',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    featured: true,
    tags: ['AI', 'Design', 'Engineering', 'Future']
  },
  {
    id: 'mdx-metadata-guide',
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A comprehensive guide on leveraging MDX metadata for better SEO and social sharing.',
    category: 'tech-stack',
    readTime: '5 min',
    publishedAt: '2024-01-10',
    link: '/blog/example-mdx-metadata',
    featured: true,
    tags: ['Next.js', 'MDX', 'SEO', 'Metadata']
  },
  {
    id: 'complexity-analysis-practical',
    title: 'Big O Notation: From Theory to Production Code',
    description: 'Making algorithmic complexity analysis practical for everyday development decisions.',
    category: 'math',
    readTime: '10 min',
    publishedAt: '2024-01-05',
    link: 'https://syntaxandsoul.hashnode.dev/',
    tags: ['Big O', 'Performance', 'Algorithms']
  },
  {
    id: 'startup-tech-debt',
    title: 'Managing Technical Debt in Fast-Growing Startups',
    description: 'Case study: How we balanced speed vs quality in a 10x growth scenario.',
    category: 'case-study',
    readTime: '15 min',
    publishedAt: '2023-12-20',
    link: 'https://syntaxandsoul.hashnode.dev/',
    tags: ['Technical Debt', 'Startup', 'Strategy']
  },
  {
    id: 'nextjs-architecture-scale',
    title: 'Next.js Architecture Patterns for Scale',
    description: 'Lessons learned from building production apps that serve millions of users.',
    category: 'tech-stack',
    readTime: '14 min',
    publishedAt: '2023-12-15',
    link: 'https://syntaxandsoul.hashnode.dev/',
    tags: ['Next.js', 'Architecture', 'Scale']
  }
]

export const FEATURED_CONTENT = CONTENT_ITEMS.filter(item => item.featured)
