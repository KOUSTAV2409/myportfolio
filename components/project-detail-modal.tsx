'use client'
import { motion } from 'motion/react'
import { XIcon, ExternalLinkIcon, GithubIcon } from 'lucide-react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'

type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
  year: string
  role: string
  tech: string
  problem?: string
  contributions?: string[]
  challenges?: string
  results?: string
  github?: string
}

type ProjectDetailModalProps = {
  project: Project
  children: React.ReactNode
}

export function ProjectDetailModal({ project, children }: ProjectDetailModalProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.4,
      }}
    >
      <MorphingDialogTrigger asChild>
        {children}
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-gray-900 p-8">
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-black dark:text-white">{project.name}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>{project.year}</span>
                  <span>•</span>
                  <span>{project.role}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <ExternalLinkIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Video */}
            <div className="rounded-xl overflow-hidden">
              <video
                src={project.video}
                autoPlay
                loop
                muted
                className="w-full aspect-video"
              />
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h3 className="font-medium text-black dark:text-white">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.split(', ').map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Problem */}
            {project.problem && (
              <div className="space-y-2">
                <h3 className="font-medium text-black dark:text-white">Problem</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}

            {/* Contributions */}
            {project.contributions && (
              <div className="space-y-2">
                <h3 className="font-medium text-black dark:text-white">Key Contributions</h3>
                <ul className="space-y-2">
                  {project.contributions.map((contribution, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                      {contribution}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges */}
            {project.challenges && (
              <div className="space-y-2">
                <h3 className="font-medium text-black dark:text-white">Challenges & Solutions</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            )}

            {/* Results */}
            {project.results && (
              <div className="space-y-2">
                <h3 className="font-medium text-black dark:text-white">Results & Impact</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.results}
                </p>
              </div>
            )}
          </div>
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white dark:bg-gray-900 p-2 shadow-lg"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-gray-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}
