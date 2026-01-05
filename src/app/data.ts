type Project = {
  name: string;
  description: string;
  link: string;
  video: string;
  id: string;
  year: string;
  role: string;
  tech: string;
  // Strategic case study fields
  challenge: string;
  approach: string[];
  solution: string;
  impact: string[];
  metrics?: string;
  clientType: string;
  timeline: string;
  github?: string;
};

type WorkExperience = {
  company: string;
  title: string;
  start: string;
  end: string;
  link: string;
  id: string;
  location?: string;
  description?: string;
  achievements?: string[];
  companyLogo?: string;
  employmentType?: string;
};

type BlogPost = {
  title: string;
  description: string;
  link: string;
  uid: string;
};

type Testimonial = {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
};

type Challenge = {
  id: string;
  title: string;
  description: string;
  type: "coding" | "reading" | "learning" | "project";
  status: "active" | "completed";
  startDate: string;
  endDate?: string;
  progress?: number;
  githubRepo?: string;
  tags: string[];
  totalDays?: number;
  currentDay?: number;
  // Actual vs planned tracking
  plannedDays?: number;
  actualDaysSpent?: number;
  challengeProgress?: number; // Progress in challenge content (0-100)
};

type SocialLink = {
  label: string;
  link: string;
};

type NewsUpdate = {
  id: string;
  title: string;
  description: string;
  date: string;
  type: "project" | "achievement" | "article" | "milestone";
  link?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "EasyGoDocs",
    description:
      "A lightweight, searchable documentation template for clearing any doubt about programming and related topics. Added features like dark mode, full-text search, and Markdown enhancements.",
    link: "https://easygodocs.vercel.app/",
    video: "/videos/easygodocs.mp4",
    image: "/images/projects/easygodocs.png",
    id: "easygodocs",
    year: "2025",
    role: "Contributor & Maintainer",
    tech: "NextJS, Markdown, Search, TypeScript, shadcn",
    clientType: "Open Source Community",
    timeline: "Ongoing",
    challenge:
      "Developers needed a simple, searchable documentation template for programming concepts and tutorials.",
    approach: [
      "Built lightweight documentation framework",
      "Implemented full-text search functionality",
      "Added dark mode support for better user experience",
      "Enhanced Markdown rendering capabilities",
    ],
    solution:
      "Created EasyGoDocs - an open-source documentation template with search, dark mode, and enhanced Markdown support.",
    impact: [
      "Used by multiple open-source projects",
      "Improved documentation accessibility",
      "Enhanced developer learning experience",
      "Featured in 5+ major developer publications",
    ],
    metrics: "500+ subscribers, $50K+ revenue, 95% satisfaction rate",
    github: "https://github.com/EasyGoDocs/easygodocs",
  },
  {
    name: "sstocode",
    description:
      "Upload a UI screenshot → generate React + Tailwind component code. An open source tool for converting designs to code.",
    link: "https://sstocode.vercel.app/",
    video: "/videos/sstocode.mp4",
    image: "/images/projects/sstocode.png",
    id: "sstocode",
    year: "2025",
    role: "Contributor & Maintainer",
    tech: "NextJS, Tailwind CSS, Gemini 2.5 API, Image Processing",
    clientType: "Developer Community",
    timeline: "Ongoing",
    challenge:
      "Developers needed a tool to quickly convert UI screenshots into working React components.",
    approach: [
      "Implemented image processing algorithms",
      "Built React component generation logic",
      "Integrated Tailwind CSS class mapping",
      "Created user-friendly interface",
    ],
    solution:
      "Developed sstocode - a tool that converts UI screenshots into React + Tailwind component code automatically.",
    impact: [
      "Accelerated frontend development workflow",
      "Reduced manual coding time for UI components",
      "Open source tool for developer community",
      "Continuous improvements and feature additions",
    ],
    metrics: "Open source tool",
    github: "https://github.com/KOUSTAV2409/sstocode",
  },
  {
    name: "iamk.xyz Portfolio",
    description:
      "Full-stack Next.js + Tailwind site (self-designed and deployed). Serves as my main showcase and blog platform where I publish in-depth technical articles. Anyone can use this template to create their portfolio as well.",
    link: "https://www.iamk.xyz",
    video: "/videos/portfolio.mp4",
    image: "/images/projects/portfolio.png",
    id: "portfolio",
    year: "2025",
    role: "Designer & Developer",
    tech: "Next.js, Tailwind CSS, TypeScript, MDX",
    clientType: "Personal Project",
    timeline: "3 months",
    challenge:
      "Needed a modern, performant portfolio site that could serve as both showcase and blog platform.",
    approach: [
      "Designed clean, professional interface",
      "Implemented Next.js for optimal performance",
      "Added MDX support for technical blog posts",
      "Created reusable template for others",
    ],
    solution:
      "Built a full-stack portfolio site with blog functionality, optimized for performance and SEO.",
    impact: [
      "Serves as main professional showcase",
      "Platform for technical writing and education",
      "Template available for community use",
      "Excellent performance and SEO scores",
    ],
    metrics: "Personal portfolio & blog",
    github: "https://github.com/KOUSTAV2409/myportfolio",
  },
  {
    name: "Weather app",
    description:
      "Created a fun weather app with the use of openweather api key along with a minimalist , classy frontend to navigate daily weather of any places along with 5 days forecast and detail weather navigation.",
    link: "https://kyweather.vercel.app/",
    video: "/videos/weatherapp.mp4",
    image: "/images/projects/weather-app.png",
    id: "weather-app",
    year: "2025",
    role: "Open-Source Contributor",
    tech: "React, Tailwind CSS, TypeScript, open weather api",
    clientType: "Open Source Community",
    timeline: "Ongoing",
    challenge:
      "Understanding and optimizing the api key along with proper loading state effectively.",
    approach: [
      "understand openweather api",
      "build proper user experience while navigating weather",
    ],
    solution: "better user experience while navigating weather.",
    impact: ["navigate weather in a clean and intuitive interface"],
    metrics: "Open source contribution",
    github: "https://github.com/KOUSTAV2409/weather_app",
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Freelance",
    title: "Full-Stack Developer",
    start: "Nov 2025",
    end: "Present",
    location: "Remote",
    employmentType: "Freelance",
    link: "#",
    id: "freelance-fullstack",
    description:
      "Providing full-stack development services to clients, building modern web applications with React, Next.js, and Node.js.",
    achievements: [
      "Developing custom web applications for various clients",
      "Building responsive frontends with React and Next.js",
      "Creating backend APIs and database solutions",
      "Delivering end-to-end solutions from design to deployment",
    ],
  },
  {
    company: "BiswasCompany (EdTech Platform)",
    title: "Frontend Developer",
    start: "May 2025",
    end: "Nov 2025",
    location: "Remote / Internal Engineering Team",
    employmentType: "Contract",
    link: "#",
    id: "biswas-company",
    description:
      "Built internal tools, dashboards, and user interfaces for the EdTech platform using React and modern frontend technologies.",
    achievements: [
      "Developed internal tools and dashboards using React and TypeScript",
      "Collaborated with product and engineering teams to optimize user interfaces",
      "Implemented responsive designs and improved user experience",
      "Maintained and refactored existing frontend codebase",
    ],
  },
  {
    company: "Sisyphus Infotech",
    title: "Full-Stack Developer Intern",
    start: "Mar 2025",
    end: "May 2025",
    location: "Remote",
    employmentType: "Internship",
    link: "#",
    id: "sisyphus-infotech",
    description:
      "Gained hands-on experience in full-stack development, working on both frontend (React) and backend (Node.js) modules.",
    achievements: [
      "Worked on both frontend (React) and backend (Node.js) modules",
      "Built reusable components, API integrations, and small full-stack features",
      "Practiced production git workflows, code reviews, and collaborative development",
      "Learned modern development practices and team collaboration",
    ],
  },
  {
    company: "Freelance",
    title: "Technical Writer",
    start: "2021",
    end: "Mid 2025",
    location: "Remote",
    employmentType: "Freelance",
    link: "#",
    id: "freelance-writer",
    description:
      "Created technical documentation, tutorials, and educational content for various clients and platforms in the software development space.",
    achievements: [
      "Wrote comprehensive technical documentation for software projects",
      "Created educational content and tutorials for developer communities",
      "Collaborated with development teams to document APIs and workflows",
      "Built expertise in explaining complex technical concepts clearly",
    ],
  },
];

export const CHALLENGES: Challenge[] = [
  {
    id: "js-30-days",
    title: "30 Days of JavaScript",
    description:
      "Building 30 different JavaScript projects to master core concepts and modern ES6+ features.",
    type: "coding",
    status: "active",
    startDate: "2025-12-10",
    githubRepo: "https://github.com/KOUSTAV2409/30DaysOfJS_Koustav",
    tags: ["JavaScript", "ES6+", "DOM", "Projects"],
    plannedDays: 30,
    actualDaysSpent: 1, // kotodin nije kaj korle
    challengeProgress: (1 / 30) * 100, // (currentday / 30)*100
    currentDay: 1, // kotodiner kaj complete holo
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Exploring the Intersection of Design, AI, and Design Engineering",
    description: "How AI is changing the way we design",
    link: "/blog/exploring-the-intersection-of-design-ai-and-design-engineering",
    uid: "blog-1",
  },
  {
    title: "Why I left my job to start my own company",
    description:
      "A deep dive into my decision to leave my job and start my own company",
    link: "/blog/exploring-the-intersection-of-design-ai-and-design-engineering",
    uid: "blog-2",
  },
  {
    title: "What I learned from my first year of freelancing",
    description:
      "A look back at my first year of freelancing and what I learned",
    link: "/blog/exploring-the-intersection-of-design-ai-and-design-engineering",
    uid: "blog-3",
  },
  {
    title: "How to Export Metadata from MDX for Next.js SEO",
    description:
      "A guide on exporting metadata from MDX files to leverage Next.js SEO features.",
    link: "/blog/example-mdx-metadata",
    uid: "blog-4",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechCorp",
    content:
      "Koustav delivered exceptional work on our React dashboard. His attention to detail and technical expertise made the project a huge success.",
  },
  {
    name: "Michael Rodriguez",
    role: "CTO",
    company: "StartupXYZ",
    content:
      "Working with Koustav was a game-changer. He transformed our design concepts into a beautiful, performant web application.",
  },
  {
    name: "Emily Johnson",
    role: "Design Lead",
    company: "Creative Agency",
    content:
      "Koustav bridges the gap between design and development perfectly. His Motion Primitives library has become essential to our workflow.",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    link: "https://github.com/KOUSTAV2409",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/koustav-ganguly-5294151b4/",
  },
  {
    label: "X",
    link: "https://x.com/iamk_xyz",
  },
  {
    label: "Hashnode Blog",
    link: "https://syntaxandsoul.hashnode.dev/",
  },
  {
    label: "Portfolio Blog",
    link: "https://www.iamk.xyz/blog",
  },
];

export const SKILLS = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "shadcn/ui",
  "Git",
  "Markdown",
  "Excalidraw",
  "VS Code",
  "REST APIs",
  "Component design",
  "State management",
  "API integration",
  "Performance optimization",
  "Ruby & Ruby on Rails (learning)",
];

export const EDUCATION = {
  institution: "West Bengal State University (WBSU)",
  degree: "Bachelor of science in computer science",
  duration: "2019-2022",
  cgpa: "8.87 / 10",
};

export const EMAIL = "koustavganguly24@gmail.com";

export const CURRENT_STATUS = {
  text: "Available for development & writing projects",
  date: "Sep 2025",
  link: "mailto:koustavganguly24@gmail.com",
};

export const NEWS_UPDATES: NewsUpdate[] = [
  // Example structure - currently empty
  // {
  //   id: 'news-1',
  //   title: 'Launched EasyGoDocs v2.0',
  //   description: 'Released major update with improved search functionality and new dark mode theme.',
  //   date: 'Dec 15, 2025',
  //   type: 'project',
  //   link: 'https://easygodocs.vercel.app/'
  // },
];
