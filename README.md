# Portfolio Website

A modern, performant portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a blog with MDX support, project showcase, work experience timeline, and more.

**Live Demo:** [iamk.xyz](https://iamk.xyz)

## Features

- ⚡ Built with Next.js 16 and React 19
- 🎨 Styled with Tailwind CSS 4
- 📝 MDX blog support with syntax highlighting
- 🌙 Dark mode support
- 📱 Fully responsive design
- 🚀 Optimized for performance and SEO
- 📊 Analytics integration (Google Analytics, Vercel Analytics)
- ♿ Accessibility compliant

## Tech Stack

- **Framework:** Next.js 16 (with Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Content:** MDX for blog posts
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React
- **Deployment:** Vercel

## Quick Start

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KOUSTAV2409/myportfolio.git
cd myportfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization Guide

### 1. Personal Information & Content

All personal data is centralized in `src/app/data.ts`. Edit this file to customize:

#### Basic Info
```typescript
export const EMAIL = 'your-email@example.com'

export const CURRENT_STATUS = {
  text: 'Your current availability status',
  date: 'Month Year',
  link: 'mailto:your-email@example.com'
}
```

#### Projects
Update the `PROJECTS` array with your projects:
```typescript
export const PROJECTS: Project[] = [
  {
    name: 'Project Name',
    description: 'Brief description',
    link: 'https://project-url.com',
    video: '/videos/project-demo.mp4', // Place videos in public/videos/
    id: 'unique-project-id',
    year: '2025',
    role: 'Your Role',
    tech: 'Tech Stack Used',
    challenge: 'Problem you solved',
    approach: ['Step 1', 'Step 2', 'Step 3'],
    solution: 'How you solved it',
    impact: ['Impact 1', 'Impact 2'],
    metrics: 'Key metrics or results',
    clientType: 'Client/Project Type',
    timeline: 'Duration',
    github: 'https://github.com/username/repo' // Optional
  }
]
```

#### Work Experience
Update the `WORK_EXPERIENCE` array:
```typescript
export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Company Name',
    title: 'Your Title',
    start: 'Month Year',
    end: 'Present', // or 'Month Year'
    location: 'Location',
    employmentType: 'Full-time/Part-time/Contract/Internship',
    link: 'https://company-website.com',
    id: 'unique-work-id',
    description: 'Brief role description',
    achievements: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3'
    ]
  }
]
```

#### Skills
Update the `SKILLS` array:
```typescript
export const SKILLS = [
  'JavaScript',
  'React',
  'Your Skill 1',
  'Your Skill 2',
  // Add your skills
]
```

#### Education
Update the `EDUCATION` object:
```typescript
export const EDUCATION = {
  institution: 'Your University',
  degree: 'Your Degree',
  duration: 'Start-End Year',
  cgpa: 'Your GPA/CGPA'
}
```

#### Social Links
Update the `SOCIAL_LINKS` array:
```typescript
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/yourusername',
  },
  {
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/yourprofile',
  },
  // Add more social links
]
```

#### Testimonials
Update the `TESTIMONIALS` array:
```typescript
export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Client Name',
    role: 'Their Role',
    company: 'Their Company',
    content: 'Testimonial text',
    avatar: '/images/avatar.jpg' // Optional
  }
]
```

### 2. Blog Posts

#### Add New Blog Post

1. Create a new MDX file in `src/app/blog/[slug]/` directory:
```bash
mkdir -p src/app/blog/your-post-slug
```

2. Create `page.mdx` in that folder:
```mdx
export const metadata = {
  title: 'Your Post Title',
  description: 'Post description for SEO',
  date: '2025-01-15',
  author: 'Your Name',
  tags: ['tag1', 'tag2']
}

# Your Post Title

Your content here...
```

3. Add the post to `BLOG_POSTS` array in `src/app/data.ts`:
```typescript
export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Your Post Title',
    description: 'Brief description',
    link: '/blog/your-post-slug',
    uid: 'unique-blog-id',
  }
]
```

### 3. Images & Media

- **Profile/Avatar:** Place in `public/images/`
- **Project Videos:** Place in `public/videos/`
- **Blog Images:** Place in `public/blog/`
- **Favicons:** Replace files in `public/` directory

Update image references in your components and data files accordingly.

### 4. Styling & Theme

#### Colors
Edit `tailwind.config.js` or use CSS variables in `src/app/globals.css`:
```css
:root {
  --primary: your-color;
  --secondary: your-color;
}
```

#### Fonts
Update fonts in `src/app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({ subsets: ['latin'] })
```

### 5. SEO & Metadata

Update site metadata in `src/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Your description',
  keywords: ['your', 'keywords'],
  authors: [{ name: 'Your Name' }],
  // ... other metadata
}
```

### 6. Analytics

Configure analytics in `.env`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-vercel-id
```

Analytics are automatically integrated via `src/components/analytics-wrapper.tsx`.

### 7. Contact Form (Optional)

If you want to add a contact form, configure:
```env
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
```

Then implement your preferred form solution (e.g., Formspree, EmailJS, or custom API).

## Project Structure

```
myportfolio/
├── public/              # Static assets
│   ├── images/         # Images
│   ├── videos/         # Project demo videos
│   └── blog/           # Blog post images
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── blog/       # Blog posts (MDX)
│   │   ├── data.ts     # Main data file (EDIT THIS!)
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   └── components/     # React components
├── .env                # Environment variables (not in git)
├── .env.example        # Example environment variables
└── package.json        # Dependencies
```

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # Check TypeScript types
npm run format       # Format code with Prettier
npm run clean        # Clean build cache
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!

### Deploy to Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Render
- Any platform supporting Node.js

## Performance Tips

- Optimize images using Next.js Image component
- Keep videos compressed (use MP4 with H.264 codec)
- Minimize JavaScript bundle size
- Use dynamic imports for heavy components
- Enable caching headers

## Troubleshooting

### Build Errors
```bash
npm run clean
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Type Errors
```bash
npm run type-check
```

### Styling Issues
- Clear browser cache
- Check Tailwind CSS configuration
- Verify CSS import order

## Contributing

Feel free to fork this project and customize it for your own use. If you find bugs or have suggestions, please open an issue.

## License

### Code License
This project's code is open source and available under the **MIT License**.

You are free to:
- ✅ Use the code for personal or commercial projects
- ✅ Modify and customize the code
- ✅ Distribute and share the code

### Content License
**All personal content is protected and NOT covered by the MIT License:**

This includes:
- ❌ Personal information, biography, contact details
- ❌ Personal photographs, videos, and images
- ❌ Project descriptions and case studies (as examples of my work)
- ❌ Work experience details
- ❌ Blog posts and written content
- ❌ Testimonials

**You MUST replace all personal content with your own before using this template.**

See [LICENSE](./LICENSE) for full details.

## Credits

Built with ♥️ by [Koustav](https://iamk.xyz)

## Support

If you found this helpful, consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📢 Sharing with others

---

**Need help?** Open an issue or reach out via [email](mailto:koustavganguly24@gmail.com)
