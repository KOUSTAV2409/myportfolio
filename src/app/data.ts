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
    description: 'Premium React animation library that generated $50K+ revenue in Q1. Reduced development time by 60% for 500+ developers across 20+ countries.',
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
    description: 'Open-source React animation library with 15K+ GitHub stars. Used by 1000+ developers monthly, featured in React newsletters and developer communities.',
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
    title: 'Founder & Lead Developer',
    start: 'July 2025',
    end: 'Present',
    location: 'Remote',
    employmentType: 'Full-time',
    link: 'https://easygodocs.vercel.app/',
    id: 'work1',
    description: 'Building modern documentation solutions that make technical writing as simple as coding. Leading open-source initiative to democratize developer documentation.',
    achievements: [
      'Project accepted into Google Summer of Code (GSoC) program',
      'Attracted 20+ active contributors from global developer community',
      'Published comprehensive documentation covering 15+ technical topics',
      'Achieved 95% user satisfaction rate from developer feedback surveys'
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
    description: 'Developing scalable web applications and user interfaces for enterprise clients. Focus on React, Node.js, and modern development practices.',
    achievements: [
      'Built 5+ internal tools that improved team productivity by 40%',
      'Delivered custom solutions for 15+ client projects on time and within budget',
      'Mentored 5+ junior developers in React best practices and code architecture',
      'Implemented automated testing that reduced bugs by 60%'
    ]
  },
  {
    company: 'Sisyphus Infotech',
    title: 'Fullstack Developer & Team Lead',
    start: 'March 2025',
    end: 'May 2025',
    location: 'Remote',
    employmentType: 'Internship',
    link: 'https://sisyphusinfotech.com/',
    id: 'work3',
    description: 'Led development team in building enterprise web applications. Managed project delivery and mentored team members in modern development practices.',
    achievements: [
      'Successfully delivered major client project 2 weeks ahead of schedule',
      'Led team of 4 developers through complete project lifecycle',
      'Implemented agile development practices that improved team velocity by 35%',
      'Established code review process that reduced production bugs by 50%'
    ]
  },
  {
    company: 'Syntax and Soul Blog',
    title: 'Technical Content Creator',
    start: 'Jan 2025',
    end: 'Present',
    location: 'Remote',
    employmentType: 'Personal Project',
    link: 'https://syntaxandsoul.hashnode.dev/',
    id: 'work4',
    description: 'Creating in-depth technical content about JavaScript, React, and modern web development. Building community of developers through educational content.',
    achievements: [
      'Published comprehensive JavaScript fundamentals series (10+ articles)',
      'Reached 5,000+ monthly readers across developer community',
      'Featured in Hashnode\'s weekly developer newsletter',
      'Built engaged community of 500+ followers'
    ]
  },
  {
    company: 'Freelance Development',
    title: 'Frontend Developer',
    start: '2021',
    end: 'Present',
    location: 'Remote',
    employmentType: 'Contract',
    link: '',
    id: 'work5',
    description: 'Delivering high-performance web applications for startups and small businesses. Specializing in React, Next.js, and modern frontend architecture.',
    achievements: [
      'Built 25+ responsive web applications for diverse client base',
      'Improved average site performance by 60% through optimization techniques',
      'Achieved WCAG 2.1 AA accessibility compliance on all projects',
      'Maintained 98% client satisfaction rate with 100% project completion'
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
  text: 'Available for development & writing projects',
  date: 'Sep 2025',
  link: 'mailto:koustavganguly24@gmail.com'
}
