export type TestimonialType = 'client' | 'colleague' | 'community'

export type EnhancedTestimonial = {
  id: string
  name: string
  role: string
  company: string
  content: string
  type: TestimonialType
  avatar?: string
  linkedinUrl?: string
  companyUrl?: string
  projectContext?: string
  rating?: number
  featured: boolean
}

export type CredibilityMarker = {
  type: 'metric' | 'achievement' | 'recognition'
  label: string
  value: string
  description?: string
  icon?: string
}

export const ENHANCED_TESTIMONIALS: EnhancedTestimonial[] = [
  {
    id: 'sarah-techcorp',
    name: 'Sarah Chen',
    role: 'Product Manager',
    company: 'TechCorp',
    content: 'Koustav transformed our approach to technical decision-making. His strategic thinking helped us avoid costly architecture mistakes and delivered a 40% performance improvement.',
    type: 'client',
    projectContext: 'React Dashboard Optimization',
    rating: 5,
    featured: true,
    linkedinUrl: '#',
    companyUrl: '#'
  },
  {
    id: 'michael-startupxyz',
    name: 'Michael Rodriguez',
    role: 'CTO',
    company: 'StartupXYZ',
    content: 'Working with Koustav was transformative. He didn\'t just build our platform - he helped us think through the business implications of every technical choice.',
    type: 'client',
    projectContext: 'Full-stack Platform Development',
    rating: 5,
    featured: true,
    linkedinUrl: '#',
    companyUrl: '#'
  },
  {
    id: 'emily-creative',
    name: 'Emily Johnson',
    role: 'Design Lead',
    company: 'Creative Agency',
    content: 'Koustav bridges design and development perfectly. His Motion Primitives library became essential to our workflow - saved us weeks on every project.',
    type: 'community',
    projectContext: 'Motion Primitives Library',
    rating: 5,
    featured: true,
    linkedinUrl: '#'
  }
]

export const CREDIBILITY_MARKERS: CredibilityMarker[] = [
  {
    type: 'metric',
    label: 'Client Satisfaction',
    value: '98%',
    description: 'Based on 25+ project reviews',
    icon: '⭐'
  },
  {
    type: 'metric',
    label: 'Projects Delivered',
    value: '50+',
    description: 'Across startups to enterprises',
    icon: '🚀'
  },
  {
    type: 'achievement',
    label: 'Open Source Impact',
    value: '10K+',
    description: 'Monthly downloads across projects',
    icon: '📦'
  },
  {
    type: 'recognition',
    label: 'Technical Writing',
    value: '25+',
    description: 'Published articles on CS & business',
    icon: '✍️'
  }
]

export const FEATURED_TESTIMONIALS = ENHANCED_TESTIMONIALS.filter(t => t.featured)
