type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
  year: string
  role: string
  tech: string
  problem?: string
  contributions?: string[]
  challenges?: string
  results?: string
  github?: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type Testimonial = {
  name: string
  role: string
  company: string
  content: string
  avatar?: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
    year: '2024',
    role: 'Design & Development',
    tech: 'React, TypeScript, Framer Motion',
    problem: 'Developers needed high-quality, production-ready animated components to build modern web interfaces quickly.',
    contributions: [
      'Designed and developed 50+ premium animated components',
      'Created comprehensive documentation and examples',
      'Built responsive templates for various use cases',
      'Implemented TypeScript support for better developer experience'
    ],
    challenges: 'Ensuring components work across different frameworks while maintaining performance and accessibility standards.',
    results: 'Launched with 500+ early adopters and positive developer feedback.',
    github: 'https://github.com/KOUSTAV2409'
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
    year: '2023',
    role: 'Full Stack Development',
    tech: 'Next.js, Tailwind CSS, Motion',
    problem: 'Open-source community lacked accessible, well-documented animated components for modern web development.',
    contributions: [
      'Built 30+ open-source animated components',
      'Created interactive documentation site',
      'Established component testing and CI/CD pipeline',
      'Grew community to 1000+ GitHub stars'
    ],
    challenges: 'Balancing component flexibility with ease of use while maintaining consistent design patterns.',
    results: 'Achieved 10k+ monthly downloads and active community contributions.',
    github: 'https://github.com/KOUSTAV2409/motion-primitives'
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Reglazed Studio',
    title: 'CEO',
    start: '2024',
    end: 'Present',
    link: 'https://reglazedstudio.com',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Design Engineer',
    start: '2022',
    end: '2024',
    link: '',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2017',
    end: 'Present',
    link: '',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'Product Manager',
    company: 'TechCorp',
    content: 'Koustav delivered exceptional work on our React dashboard. His attention to detail and technical expertise made the project a huge success.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'CTO',
    company: 'StartupXYZ',
    content: 'Working with Koustav was a game-changer. He transformed our design concepts into a beautiful, performant web application.',
  },
  {
    name: 'Emily Johnson',
    role: 'Design Lead',
    company: 'Creative Agency',
    content: 'Koustav bridges the gap between design and development perfectly. His Motion Primitives library has become essential to our workflow.',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/KOUSTAV2409',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/KoustavGan39466',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/koustav-ganguly-5294151b4/',
  },
  {
    label: 'Hashnode Blog',
    link: 'https://syntaxandsoul.hashnode.dev/'
  },
]

export const SKILLS = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Tailwind CSS',
  'Framer Motion',
    'Docker'
]

export const EMAIL = 'koustavganguly24@gmail.com'
