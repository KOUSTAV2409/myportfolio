'use client'
import { ArrowUpRight, Mail, Github, Linkedin } from 'lucide-react'
import { lazy, Suspense } from 'react'
import { PageLayout, PageSection, SectionHeader, JobTitle } from '@/components/page-layout'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  SOCIAL_LINKS,
  EMAIL
} from './data'

const Magnetic = lazy(() => import('@/components/ui/magnetic').then(mod => ({ default: mod.Magnetic })))

export default function HomePage() {
  return (
    <PageLayout>
      {/* Enhanced Hero */}
      <PageSection>
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight leading-[1.1]">
              I build tools that developers love and write guides that actually help
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
              Full-Stack Developer specializing in React ecosystems and developer education. 
              Currently building internal tools at EdTech platforms while contributing to open-source projects.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Available for projects
              </span>
              <span>•</span>
              <span>Bongaon, India</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <Suspense fallback={<div className="w-8 h-8" />}>
              <Magnetic>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:opacity-80 transition-opacity"
                >
                  <Mail className="w-4 h-4" />
                  Let's build something together
                </a>
              </Magnetic>
            </Suspense>
            
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  title={link.label}
                >
                  {link.label === 'GitHub' && <Github className="w-5 h-5" />}
                  {link.label === 'LinkedIn' && <Linkedin className="w-5 h-5" />}
                  {!['GitHub', 'LinkedIn'].includes(link.label) && (
                    <ArrowUpRight className="w-5 h-5" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      {/* Currently Working */}
      <PageSection>
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 space-y-3">
          <h2 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-[0.15em]">Currently</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Building automation workflows at BiswasCompany • Contributing to EasyGoDocs (documentation tool) • 
            Learning Ruby on Rails • Writing about JavaScript fundamentals
          </p>
        </div>
      </PageSection>

      {/* Experience with Achievements */}
      <PageSection>
        <div className="space-y-6">
          <SectionHeader>Experience</SectionHeader>
          <div className="space-y-6">
            {WORK_EXPERIENCE.slice(0, 2).map((job) => (
              <div key={job.id}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <JobTitle>{job.title}</JobTitle>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">{job.company}</p>
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    {job.start} – {job.end}
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {job.id === 'biswas-company' && "Building React dashboards • Optimizing team workflows"}
                  {job.id === 'sisyphus-infotech' && "Full-stack features • Production git workflows"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Projects with Metrics */}
      <PageSection>
        <div className="space-y-8">
          {/* Projects */}
          <div className="space-y-6">
            <SectionHeader>Selected Projects</SectionHeader>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold tracking-tight">EasyGoDocs</h3>
                  <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2.5 py-1 rounded-full font-semibold">Open Source</span>
                  <a
                    href="https://github.com/EasyGoDocs/easygodocs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                  Lightweight documentation template with search and dark mode. Used by multiple projects for technical documentation.
                </p>
                <p className="text-sm text-gray-500 font-medium">React • Markdown • Search • Community-driven</p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold tracking-tight">sstocode</h3>
                  <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2.5 py-1 rounded-full font-semibold">AI Tool</span>
                  <a
                    href="https://github.com/KOUSTAV2409/sstocode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                  Screenshot to React code generator. Accelerates frontend development workflow for UI components.
                </p>
                <p className="text-sm text-gray-500 font-medium">React • Tailwind • AI/ML • Developer Tools</p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold tracking-tight">Portfolio Template</h3>
                  <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-2.5 py-1 rounded-full font-semibold">Template</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                  Modern Next.js portfolio with blog. Reusable template for developers to showcase their work.
                </p>
                <p className="text-sm text-gray-500 font-medium">Next.js • TypeScript • MDX • Performance Optimized</p>
              </div>
            </div>
          </div>

          {/* Skills with Specialization */}
          <div className="space-y-6">
            <SectionHeader>Specializing In</SectionHeader>
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-gray-700 dark:text-gray-300 mb-2 tracking-tight">Frontend Excellence</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  React • Next.js • TypeScript • Tailwind CSS • Component Architecture
                </p>
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-700 dark:text-gray-300 mb-2 tracking-tight">Developer Experience</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  Documentation • Developer Tools • Performance Optimization • Technical Writing
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Enhanced Footer */}
      <PageSection>
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 space-y-3">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div className="space-y-1">
              <div className="font-medium">Bongaon, India • Open to remote opportunities</div>
              <div>Writing at <a href="https://syntaxandsoul.hashnode.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors font-medium underline decoration-1 underline-offset-2">Syntax & Soul</a></div>
            </div>
            <span className="font-medium">© 2024</span>
          </div>
        </div>
      </PageSection>
    </PageLayout>
  )
}
