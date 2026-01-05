'use client'
import { ArrowUpRight, Github } from 'lucide-react'
import { PROJECTS } from '../data'

function ProjectCard({ project }: { project: any }) {
  return (
    <div className="p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-all duration-200 dark:border-neutral-700 hover:border-gray-300 dark:hover:border-neutral-600 h-full flex flex-col">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-medium text-sm text-gray-800 dark:text-neutral-200 group-hover:text-gray-900 dark:group-hover:text-neutral-100">
            {project.name}
          </h3>
          <p className="mt-1 text-xs text-gray-500 dark:text-neutral-500 line-clamp-3">
            {project.description}
          </p>
          <div className="mt-2 text-xs text-gray-400 dark:text-neutral-600">
            {project.year} • {project.role}
          </div>
          <div className="mt-1 text-xs text-gray-400 dark:text-neutral-600">
            {project.tech}
          </div>
        </div>
        <div className="ml-3 flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
            >
              <Github className="size-4 text-gray-400" />
            </a>
          )}
          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity"
            >
              <ArrowUpRight className="size-4 text-gray-400" />
            </a>
          )}
        </div>
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
        
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 mb-8 sm:mb-12">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
