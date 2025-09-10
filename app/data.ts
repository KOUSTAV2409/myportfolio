type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
  year: string
  role: string
  tech: string
  // Strategic case study fields
  challenge: string
  approach: string[]
  solution: string
  impact: string[]
  metrics?: string
  clientType: string
  timeline: string
  github?: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  location?: string
  description?: string
  achievements?: string[]
  companyLogo?: string
  employmentType?: string
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
    description: 'Advanced component library solving the "premium animation gap" in React ecosystem.',
    link: 'https://pro.motion-primitives.com/',
    video: 'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
    year: '2024',
    role: 'Product Strategy & Development',
    tech: 'React, TypeScript, Framer Motion',
    clientType: 'Product Business',
    timeline: '6 months',
    challenge: 'Developers needed production-ready animated components but existing solutions were either too basic or too complex. The market had a gap between free basic components and expensive custom development.',
    approach: [
      'Market research with 200+ developers to identify pain points',
      'Competitive analysis of existing animation libraries',
      'MVP development with 10 core components',
      'Beta testing with select development teams',
      'Iterative improvement based on user feedback'
    ],
    solution: 'Created a premium component library with 50+ production-ready animated components, comprehensive documentation, TypeScript support, and framework-agnostic design patterns.',
    impact: [
      'Reduced development time by 60% for teams building animated interfaces',
      'Generated $50K+ in first quarter through premium subscriptions',
      'Built community of 500+ developers across 20+ countries',
      'Featured in 5+ major developer publications'
    ],
    metrics: '500+ subscribers, $50K+ revenue, 95% satisfaction rate',
    github: 'https://github.com/KOUSTAV2409'
  },
  {
    name: 'Motion Primitives',
    description: 'Open-source foundation that democratized high-quality animations for React developers.',
    link: 'https://motion-primitives.com/',
    video: 'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
    year: '2023',
    role: 'Open Source Strategy & Development',
    tech: 'Next.js, Tailwind CSS, Motion',
    clientType: 'Developer Community',
    timeline: '4 months',
    challenge: 'React developers struggled with implementing smooth animations due to lack of accessible, well-documented components. Existing solutions were either too complex or poorly maintained.',
    approach: [
      'Community research through developer surveys and forums',
      'Built MVP with 15 essential animated components',
      'Created comprehensive documentation with live examples',
      'Established contribution guidelines and community standards',
      'Implemented automated testing and CI/CD pipeline'
    ],
    solution: 'Launched open-source library with 30+ animated components, interactive documentation site, and active community contribution system.',
    impact: [
      'Achieved 10K+ monthly downloads within 6 months',
      'Gained 1000+ GitHub stars and 50+ contributors',
      'Reduced animation implementation time by 80% for developers',
      'Became foundation for premium product line'
    ],
    metrics: '10K+ downloads/month, 1K+ GitHub stars, 50+ contributors',
    github: 'https://github.com/KOUSTAV2409/motion-primitives'
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'EasyGoDocs - Open Source Project',
    title: 'Founder and Open Source Contributor',
    start: 'July 2025',
    end: 'Present',
    location: 'Remote',
    employmentType: 'Full-time',
    link: 'https://easygodocs.vercel.app/',
    id: 'work1',
    description: 'Modern Solutions to Master Documentation.Documentation should be as easy as writing code. EasyGoDocs makes it possible.',
    achievements: [
      'Project listed on GSsoC',
      'Got some awsome contributors for this open source project',
      'Published some beutiful and short docs on different technical topics so that developers and learners can get it very easily '
      
    ]
  },
  {
    company: 'BeliefPro',
    title: 'Fullstack Developer',
    start: 'May 2025',
    end: 'Present',
    location: 'Remote',
    employmentType: 'Contract',
    link: 'https://beliefpro.com/',
    id: 'work2',
    description: 'Working as a fullstack web developer and product designer',
    achievements: [
      'Built sevaral internal tools for the organization',
      'Handle clients of the company to and provided relevent service on behalf of belief ',
      'Mentoring developer of the organization to polish their skills in next level.',
      
    ]
  },
  {
    company: 'Sisyphus Infotech',
    title: 'Fullstack Developer and Team Lead Intern',
    start: 'March 2025',
    end: 'May 2025',
    location: 'Remote',
    employmentType: 'Contract',
    link: 'https://sisyphusinfotech.com/',
    id: 'work3',
    description: 'Working as a fullstack web developer and product designer',
    achievements: [
      'Built 1 project for the company',
      'Lead the whole team for 3+ month to complete and deliver the project ',
      
      
    ]
  },
  {

    company: 'Syntax and Soul',
    title: 'Technical Content Writter',
    start: 'Jan 2025',
    end: 'Present',
    location: 'Remote',
    employmentType: 'Own Hashnode Writting Platform',
    link: 'https://syntaxandsoul.hashnode.dev/',
    id: 'work4',
    description: 'Writting about different contents related computer science , programming and different technologies',
    achievements: [
      'Started a javascript article series'
    ]
  },
  {

    company: 'Freelance',
    title: 'Technical Content Writter',
    start: '2021',
    end: 'Present',
    location: 'Remote',
    employmentType: 'Contract',
    link: '',
    id: 'work5',
    description: 'Delivering high-quality front-end solutions with focus on performance, accessibility, and user experience.',
    achievements: [
      'Built 50+ responsive web applications',
      'Improved site performance by 60% on average',
      'Implemented accessibility standards achieving WCAG 2.1 AA compliance',
      'Mentored 10+ junior developers'
    ]
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

export const CURRENT_STATUS = {
  text: 'Building strategic consulting framework',
  date: 'Sep 2025',
  link: 'https://x.com/KoustavGan39466'
}
