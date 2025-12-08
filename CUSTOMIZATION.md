# Quick Customization Guide

This guide will help you customize this portfolio for your own use in under 30 minutes.

## Step 1: Clone & Install (5 minutes)

```bash
git clone https://github.com/KOUSTAV2409/myportfolio.git my-portfolio
cd my-portfolio
npm install
cp .env.example .env
```

## Step 2: Update Personal Data (15 minutes)

### Edit `src/app/data.ts`

This is the MAIN file you need to edit. Everything is here.

#### 1. Basic Contact Info
```typescript
// Line ~300
export const EMAIL = 'your-email@example.com'

export const CURRENT_STATUS = {
  text: 'Available for freelance work',  // Your availability
  date: 'Jan 2025',                      // Current date
  link: 'mailto:your-email@example.com'  // Your email
}
```

#### 2. Your Projects
```typescript
// Line ~50
export const PROJECTS: Project[] = [
  {
    name: 'Your Project Name',
    description: 'What your project does',
    link: 'https://your-project.com',
    video: '/videos/demo.mp4',           // Add video to public/videos/
    id: 'project-1',                     // Unique ID
    year: '2025',
    role: 'Full Stack Developer',
    tech: 'React, Node.js, MongoDB',
    challenge: 'What problem did you solve?',
    approach: [
      'How you approached it - step 1',
      'Step 2',
      'Step 3'
    ],
    solution: 'How you solved it',
    impact: [
      'Result 1',
      'Result 2'
    ],
    metrics: '1000+ users, 95% satisfaction',
    clientType: 'Startup / Personal / Client',
    timeline: '3 months',
    github: 'https://github.com/you/repo'  // Optional
  },
  // Add more projects...
]
```

**Pro tip:** Delete all existing projects and add your own. Keep the structure the same.

#### 3. Work Experience
```typescript
// Line ~150
export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Your Company',
    title: 'Your Job Title',
    start: 'Jan 2024',
    end: 'Present',                      // or 'Dec 2024'
    location: 'Remote',
    employmentType: 'Full-time',         // Full-time/Part-time/Contract/Internship
    link: 'https://company.com',
    id: 'job-1',
    description: 'Brief description of your role',
    achievements: [
      'What you accomplished',
      'Another achievement',
      'One more achievement'
    ]
  },
  // Add more jobs...
]
```

#### 4. Skills
```typescript
// Line ~280
export const SKILLS = [
  'JavaScript',
  'React',
  'Node.js',
  'Your Skill',
  'Another Skill',
  // Add all your skills
]
```

#### 5. Education
```typescript
// Line ~290
export const EDUCATION = {
  institution: 'Your University',
  degree: 'Bachelor of Science in Computer Science',
  duration: '2019-2023',
  cgpa: '3.8 / 4.0'
}
```

#### 6. Social Links
```typescript
// Line ~270
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/yourusername',
  },
  {
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/yourprofile',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/yourhandle',
  },
  // Add more...
]
```

#### 7. Testimonials (Optional)
```typescript
// Line ~250
export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Client Name',
    role: 'CEO',
    company: 'Company Name',
    content: 'What they said about you',
    avatar: '/images/client.jpg'  // Optional
  },
  // Add more or delete all if you don't have any
]
```

#### 8. Blog Posts
```typescript
// Line ~230
export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Your Blog Post Title',
    description: 'Brief description',
    link: '/blog/your-post-slug',
    uid: 'blog-1',
  },
  // Add more or delete if no blog
]
```

## Step 3: Update Site Metadata (5 minutes)

### Edit `src/app/layout.tsx`

Find the metadata section (around line 10-30):

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Your professional description',
  keywords: ['your', 'keywords', 'here'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Name - Portfolio',
    description: 'Your description',
    url: 'https://yoursite.com',
    siteName: 'Your Name',
    // ... update other fields
  },
}
```

## Step 4: Environment Variables (2 minutes)

### Edit `.env`

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX              # Your Google Analytics ID
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com
```

## Step 5: Add Your Media (5 minutes)

### Project Videos
- Place demo videos in `public/videos/`
- Name them clearly: `project-name.mp4`
- Keep file size under 5MB (compress if needed)

### Images
- Profile/avatar: `public/images/avatar.jpg`
- Project screenshots: `public/images/projects/`
- Blog images: `public/blog/`

### Update References
Make sure video/image paths in `data.ts` match your file names:
```typescript
video: '/videos/your-video.mp4'
```

## Step 6: Test Locally (3 minutes)

```bash
npm run dev
```

Open http://localhost:3000 and check:
- [ ] All your info appears correctly
- [ ] Links work
- [ ] Videos play
- [ ] No console errors

## Step 7: Deploy (5 minutes)

### Option A: Vercel (Easiest)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

### Option B: Netlify
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy!

## Common Customizations

### Change Colors
Edit `src/app/globals.css`:
```css
:root {
  --primary: #your-color;
  --secondary: #your-color;
}
```

### Change Fonts
Edit `src/app/layout.tsx`:
```typescript
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
```

### Remove Blog Section
1. Delete `src/app/blog/` directory
2. Remove blog links from navigation
3. Set `BLOG_POSTS = []` in `data.ts`

### Remove Testimonials
Set `TESTIMONIALS = []` in `data.ts`

## Checklist Before Going Live

- [ ] Updated all personal info in `data.ts`
- [ ] Changed site metadata in `layout.tsx`
- [ ] Added your projects with videos/images
- [ ] Updated work experience
- [ ] Added your skills
- [ ] Updated social links
- [ ] Configured `.env` file
- [ ] Tested locally
- [ ] No console errors
- [ ] All links work
- [ ] Deployed successfully

## Need Help?

- Check the main [README.md](./README.md) for detailed docs
- Open an issue on GitHub
- Email: koustavganguly24@gmail.com

## Pro Tips

1. **Start Small:** Update basic info first, then add projects gradually
2. **Use Placeholders:** If you don't have videos, use screenshots or remove video field
3. **Keep It Simple:** Don't add too many projects - quality over quantity
4. **Test Mobile:** Check how it looks on your phone
5. **SEO Matters:** Fill out all metadata fields properly

---

**Time to customize:** ~30 minutes
**Difficulty:** Easy (just editing one main file!)
