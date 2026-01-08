import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import ProfileSection from '@/components/ProfileSection'

// Dynamic imports for heavy sections
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'))
const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'))
const SkillsSection = dynamic(() => import('@/components/SkillsSection'))
const WorkExperienceSection = dynamic(() => import('@/components/WorkExperienceSection'))
const EducationSection = dynamic(() => import('@/components/EducationSection'))
const ArticlesSection = dynamic(() => import('@/components/ArticlesSection'))
const SubscribeSection = dynamic(() => import('@/components/SubscribeSection'))

// Loading component
function SectionLoading() {
  return (
    <div className="animate-pulse py-8">
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="dark:bg-neutral-900">
      <ProfileSection />
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6">
        <Suspense fallback={<SectionLoading />}>
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={<SectionLoading />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<SectionLoading />}>
          <SkillsSection />
        </Suspense>
        <Suspense fallback={<SectionLoading />}>
          <WorkExperienceSection />
        </Suspense>
        <Suspense fallback={<SectionLoading />}>
          <EducationSection />
        </Suspense>
        <Suspense fallback={<SectionLoading />}>
          <ArticlesSection />
        </Suspense>
        <Suspense fallback={<SectionLoading />}>
          <SubscribeSection />
        </Suspense>
      </div>
    </div>
  )
}
