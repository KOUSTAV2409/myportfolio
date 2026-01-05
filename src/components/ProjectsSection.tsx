import Image from 'next/image'
import Link from 'next/link'
import { PROJECTS } from '@/app/data'

export default function ProjectsSection() {
  return (
    <div className="mt-10 sm:mt-14">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        Projects
      </h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PROJECTS.slice(0, 6).map((project) => (
          <Link 
            key={project.id} 
            className="group block p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-all duration-200 dark:border-neutral-700 hover:border-gray-300 dark:hover:border-neutral-600" 
            href={project.link}
            target='blank'
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-medium text-sm text-gray-800 dark:text-neutral-200 group-hover:text-gray-900 dark:group-hover:text-neutral-100">
                  {project.name}
                </h3>
                <p className="mt-1 text-xs text-gray-500 dark:text-neutral-500 line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-2 text-xs text-gray-400 dark:text-neutral-600">
                  {project.year}
                </div>
              </div>
              <div className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
