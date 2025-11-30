'use client'
import { ArrowUpRight, Github } from 'lucide-react'
import { PageLayout, PageSection, PageHeader, SectionHeader, ProjectTitle } from '@/components/page-layout'
import { PROJECTS } from '../data'

export default function ProjectsPage() {
  return (
    <PageLayout>
      <PageHeader 
        title="Projects" 
        description="A collection of things I've built and contributed to."
      />

      <PageSection>
        <div className="space-y-16">
          {PROJECTS.map((project) => (
            <div key={project.id} className="space-y-6">
              <div className="flex items-center gap-4">
                <ProjectTitle>{project.name}</ProjectTitle>
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                      title="View source"
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
                      title="View live"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                {project.description}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-bold text-gray-700 dark:text-gray-300 mb-3 tracking-tight">Challenge</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-base font-bold text-gray-700 dark:text-gray-300 mb-3 tracking-tight">Solution</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-base font-bold text-gray-700 dark:text-gray-300 mb-3 tracking-tight">Impact</h3>
                  <ul className="space-y-2">
                    {project.impact.map((item, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        — {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-base font-bold text-gray-700 dark:text-gray-300 mb-3 tracking-tight">Tech Stack</h3>
                  <p className="text-sm text-gray-500 font-medium">
                    {project.tech}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageSection>
    </PageLayout>
  )
}
