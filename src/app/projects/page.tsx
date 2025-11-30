'use client'
import { ArrowUpRight, Github } from 'lucide-react'
import { PageLayout, PageSection, SectionHeader } from '@/components/page-layout'
import { PROJECTS } from '../data'

function ProjectCard({ project }: { project: any }) {
  return (
    <div className="p-5 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors space-y-3">
      <div className="flex items-center gap-4">
        <h3 className="text-lg font-bold tracking-tight">{project.name}</h3>
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
        {project.description}
      </p>
      
      <div className="space-y-1">
        <p className="text-xs text-gray-500 font-medium">
          {project.tech}
        </p>
        <p className="text-xs text-gray-500 font-medium">
          {project.year} • {project.role}
        </p>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <PageLayout>
      <PageSection>
        <div className="space-y-4 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
            A collection of things I've built and contributed to.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </PageSection>
    </PageLayout>
  )
}
