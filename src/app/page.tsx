import ProfileSection from '@/components/ProfileSection'
import ProjectsSection from '@/components/ProjectsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import SkillsSection from '@/components/SkillsSection'
import WorkExperienceSection from '@/components/WorkExperienceSection'
import EducationSection from '@/components/EducationSection'
import ArticlesSection from '@/components/ArticlesSection'
import SubscribeSection from '@/components/SubscribeSection'

export default function Home() {
  return (
    <div className="dark:bg-neutral-900">
      <ProfileSection />
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectsSection />
        <TestimonialsSection />
        <SkillsSection />
        <WorkExperienceSection />
        <EducationSection />
        <ArticlesSection />
        <SubscribeSection />
      </div>
    </div>
  )
}
