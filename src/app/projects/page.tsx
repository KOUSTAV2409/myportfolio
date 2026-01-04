'use client'
import { ArrowUpRight, Github } from 'lucide-react'
import { PROJECTS } from '../data'

function ProjectCard({ project }: { project: any }) {
  return (
    <div className="p-5 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors space-y-3">
      <div className="flex items-center gap-4">
        <h3 className="text-lg font-bold tracking-tight">{project.name}</h3>
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {project.tech.split(', ').map((tech: string, index: number) => (
          <span
            key={index}
            className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <div className="w-full max-w-2xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-8 text-gray-800 dark:text-neutral-200">Projects</h1>
      
      <div className="space-y-6">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
