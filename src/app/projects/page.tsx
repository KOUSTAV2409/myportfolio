'use client'
import { ArrowUpRight, Github } from 'lucide-react'
import { PROJECTS } from '../data'

function ProjectCard({ project }: { project: any }) {
  return (
    <div className="p-4 sm:p-5 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors space-y-3 h-full flex flex-col">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base sm:text-lg font-bold tracking-tight">{project.name}</h3>
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          )}
          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          )}
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm flex-1">
        {project.description}
      </p>
      
      <div className="space-y-1 mt-auto">
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
    <div className="dark:bg-neutral-900">
      <div className="w-full max-w-2xl mx-auto pt-6 sm:pt-10 px-4 sm:px-6">
        <div className="space-y-4 mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-gray-800 dark:text-neutral-200">Projects</h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
            A collection of things I've built and contributed to.
          </p>
        </div>
        
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
