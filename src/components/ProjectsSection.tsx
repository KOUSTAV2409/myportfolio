import Image from 'next/image'
import Link from 'next/link'
import { PROJECTS } from '@/app/data'

export default function ProjectsSection() {
  return (
    <div className="mt-10 sm:mt-14">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        Projects
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {PROJECTS.slice(0, 6).map((project) => (
          <Link 
            key={project.id} 
            className="group block relative overflow-hidden rounded-lg" 
            href={project.link}
            target='blank'
          >
            <Image 
              className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" 
              src={project.image || `/images/projects/${project.id}.jpg`}
              alt={`${project.name} project screenshot`}
              width={320}
              height={160}
            />
            <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
              <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <span className="text-xs">View</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
