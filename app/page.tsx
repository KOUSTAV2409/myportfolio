'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { lazy, Suspense } from 'react'
import { trackCTAClick } from '@/lib/analytics'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  SOCIAL_LINKS,
  SKILLS,
} from './data'

// Lazy load heavy components
const Magnetic = lazy(() => import('@/components/ui/magnetic').then(mod => ({ default: mod.Magnetic })))
const MorphingDialog = lazy(() => import('@/components/ui/morphing-dialog').then(mod => ({ 
  default: mod.MorphingDialog 
})))
const MorphingDialogTrigger = lazy(() => import('@/components/ui/morphing-dialog').then(mod => ({ 
  default: mod.MorphingDialogTrigger 
})))
const MorphingDialogContent = lazy(() => import('@/components/ui/morphing-dialog').then(mod => ({ 
  default: mod.MorphingDialogContent 
})))
const MorphingDialogClose = lazy(() => import('@/components/ui/morphing-dialog').then(mod => ({ 
  default: mod.MorphingDialogClose 
})))
const MorphingDialogContainer = lazy(() => import('@/components/ui/morphing-dialog').then(mod => ({ 
  default: mod.MorphingDialogContainer 
})))
const ProjectDetailModal = lazy(() => import('@/components/project-detail-modal').then(mod => ({ 
  default: mod.ProjectDetailModal 
})))
const ContentShowcase = lazy(() => import('@/components/content-showcase').then(mod => ({ 
  default: mod.ContentShowcase 
})))
const SocialProofShowcase = lazy(() => import('@/components/social-proof-showcase').then(mod => ({ 
  default: mod.SocialProofShowcase 
})))

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const TRANSITION_SECTION = {
  duration: 0.4,
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <Suspense fallback={<div className="aspect-video w-full bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse" />}>
      <MorphingDialog
        transition={{
          type: 'spring',
          bounce: 0,
          duration: 0.3,
        }}
      >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          preload="metadata"
          aria-label="Project demonstration video"
          className="aspect-video w-full cursor-zoom-in rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-black"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-900 p-1">
          <video
            src={src}
            autoPlay
            loop
            muted
            preload="auto"
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
    </Suspense>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${children} profile`}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-gray-200 dark:bg-gray-800 px-2.5 py-1 text-sm text-gray-800 dark:text-gray-100 transition-colors duration-200 hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-black"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

export default function HomePage() {
  return (
      <motion.main
        className="space-y-12"
        variants={VARIANTS_CONTAINER}
        initial="hidden"
        animate="visible"
      >
      {/* Hero Section */}
      <motion.section
        aria-labelledby="hero-heading"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="space-y-8 text-center">
          {/* Main Value Proposition */}
          <div className="space-y-4">
            <h1 id="hero-heading" className="text-3xl sm:text-4xl font-semibold text-black dark:text-white leading-tight tracking-tight">
              I solve your business problems 
              <span className="text-gray-500 dark:text-gray-400"> with code</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto font-normal">
              Strategic consulting + custom development that drives real results.
            </p>
          </div>

          {/* Availability & Social Proof */}
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>2 spots left this month</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
              <span>$2M+ in client revenue generated</span>
            </div>
          </div>

          {/* Single Primary CTA */}
          <div className="pt-1 -mt-1">
            <a
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white dark:bg-white dark:text-black rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 font-medium text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-black"
              href="https://cal.com/iamk-xyz/30min"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a free 30-minute strategy call"
              data-cursor-hover
              onClick={() => trackCTAClick('consultation', 'hero')}
            >
              Book a free strategy call
              <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-0.5">
                <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </a>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
              30-min strategy session • No commitment required
            </p>
          </div>

          {/* Recent Work Highlight */}
          <div className="pt-6 border-t border-gray-100 dark:border-gray-800/30">
            <div className="text-center space-y-3">
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase">
                Recent Work
              </p>
              <div className="flex items-center justify-center gap-4 text-sm">
                <a 
                  href="https://pro.motion-primitives.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
                >
                  Motion Primitives Pro
                </a>
                <span className="text-gray-300 dark:text-gray-700">•</span>
                <a 
                  href="https://reglazedstudio.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
                >
                  Reglazed Studio
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Details Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="space-y-6">
          {/* Service Areas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="space-y-2 p-4 rounded-xl bg-gray-50/50 dark:bg-gray-900/30 border border-gray-200/30 dark:border-gray-800/30">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              <h4 className="text-black dark:text-white font-medium text-sm">Revenue-First Development</h4>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                Every line of code tied to business metrics and ROI
              </p>
            </div>
            <div className="space-y-2 p-4 rounded-xl bg-gray-50/50 dark:bg-gray-900/30 border border-gray-200/30 dark:border-gray-800/30">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              </div>
              <h4 className="text-black dark:text-white font-medium text-sm">48-Hour Problem Solving</h4>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                Rapid diagnosis and solution delivery when time is critical
              </p>
            </div>
            <div className="space-y-2 p-4 rounded-xl bg-gray-50/50 dark:bg-gray-900/30 border border-gray-200/30 dark:border-gray-800/30">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <h4 className="text-black dark:text-white font-medium text-sm">Zero-Fluff Consulting</h4>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                Actionable solutions, not theoretical frameworks
              </p>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="flex items-center justify-center gap-8 py-4 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>98% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              <span>10K+ Downloads</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
              <span>Featured in 5+ Publications</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Technologies Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="space-y-4">
          <h3 className="text-black dark:text-white text-lg font-medium">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-3 py-1.5 text-sm bg-gray-200/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-300/80 dark:hover:bg-gray-700/80 transition-all duration-300 cursor-default hover:shadow-md hover:scale-105 border border-gray-300/20 dark:border-gray-700/20"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Work Experience Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        aria-labelledby="experience-heading"
      >
        <h3 id="experience-heading" className="text-black dark:text-white text-lg font-medium mb-4">Experience</h3>
        <div className="space-y-0">
          {WORK_EXPERIENCE.map((work, index) => {
            const Component = work.link ? 'a' : 'div'
            const linkProps = work.link ? {
              href: work.link,
              target: "_blank",
              rel: "noopener noreferrer"
            } : {}
            
            return (
              <Component
                key={work.id}
                className={`group flex gap-3 py-4 ${index !== WORK_EXPERIENCE.length - 1 ? 'border-b border-gray-100 dark:border-gray-800/30' : ''} ${work.link ? 'hover:bg-gray-50/80 dark:hover:bg-gray-900/20 cursor-pointer' : ''} transition-all duration-300 -mx-2 px-2 rounded-lg hover:shadow-sm`}
                {...linkProps}
              >
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center shadow-sm ring-1 ring-gray-200/20 dark:ring-gray-700/20 group-hover:shadow-md transition-all duration-300">
                    <span className="text-gray-700 dark:text-gray-300 font-medium text-xs group-hover:scale-110 transition-transform duration-300">
                      {work.company.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-medium text-black dark:text-white text-sm leading-tight truncate ${work.link ? 'group-hover:text-blue-600 dark:group-hover:text-blue-400' : ''} transition-colors duration-300`}>
                        {work.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm truncate group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">{work.company}</p>
                      <p className="text-gray-500 dark:text-gray-500 text-xs mt-0.5 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-300">
                        {work.start} - {work.end}
                        {work.location && ` · ${work.location}`}
                      </p>
                    </div>
                    {work.link && (
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 ml-2 transform group-hover:translate-x-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 group-hover:text-blue-500">
                          <path d="M7 17L17 7"/>
                          <path d="M7 7h10v10"/>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </Component>
            )
          })}
        </div>
      </motion.section>

      {/* Content Expertise Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="space-y-4">
          <h3 className="text-black dark:text-white text-lg font-medium">Content Expertise</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-gray-100/50 dark:bg-gray-900/50 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-colors duration-200">
              <div className="flex items-center gap-3">
                <span className="text-lg">🧠</span>
                <div>
                  <div className="text-black dark:text-white font-medium text-sm">CS Theory</div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs">Algorithms & Data Structures</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-gray-100/50 dark:bg-gray-900/50 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-colors duration-200">
              <div className="flex items-center gap-3">
                <span className="text-lg">📐</span>
                <div>
                  <div className="text-black dark:text-white font-medium text-sm">Mathematics</div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs">Applied Math & Logic</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-gray-100/50 dark:bg-gray-900/50 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-colors duration-200">
              <div className="flex items-center gap-3">
                <span className="text-lg">📊</span>
                <div>
                  <div className="text-black dark:text-white font-medium text-sm">Business Analysis</div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs">Strategy & Decision Making</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between py-3 px-4 rounded-lg bg-gray-100/50 dark:bg-gray-900/50 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-colors duration-200">
              <div className="flex items-center gap-3">
                <span className="text-lg">⚡</span>
                <div>
                  <div className="text-black dark:text-white font-medium text-sm">Tech Insights</div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs">Frameworks & Tools</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Writing & Research Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="text-black dark:text-white text-lg font-medium mb-6">Writing & Research</h3>
        <Suspense fallback={<div className="h-32 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse" />}>
          <ContentShowcase />
        </Suspense>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        id="projects"
        aria-labelledby="projects-heading"
      >
        <h3 id="projects-heading" className="text-black dark:text-white text-lg font-medium mb-4">Strategic Case Studies</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={project.name} 
              className="space-y-4 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Video Preview */}
              <div className="relative rounded-2xl bg-gray-100/40 dark:bg-gray-900/40 p-1 ring-1 ring-gray-200/50 dark:ring-gray-800/50 ring-inset hover:ring-gray-300/50 dark:hover:ring-gray-700/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-200/20 dark:group-hover:shadow-gray-900/20 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative" data-cursor-hover>
                  <ProjectVideo src={project.video} />
                </div>
                {/* Video Preview Label */}
                <div className="absolute top-3 left-3 px-2 py-1 bg-black/70 backdrop-blur-md text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105">
                  Preview
                </div>
              </div>

              {/* Project Info */}
              <div className="px-1 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-black dark:text-white text-lg">{project.name}</h4>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{project.year}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                    <span>{project.role}</span>
                    <span>•</span>
                    <span>{project.tech}</span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-black/20 dark:hover:shadow-white/20 transform hover:-translate-y-0.5 hover:scale-105"
                    data-cursor-hover
                  >
                    View Live
                    <svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-0.5">
                      <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  
                  <ProjectDetailModal project={project}>
                    <button 
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-md hover:border-gray-400 dark:hover:border-gray-600 transform hover:-translate-y-0.5"
                      data-cursor-hover
                    >
                      Case Study
                      <svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-0.5">
                        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </ProjectDetailModal>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Pricing & Process Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="text-black dark:text-white text-lg font-medium mb-6">How we work together</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Process */}
          <div className="space-y-4 p-6 rounded-xl bg-gray-50/50 dark:bg-gray-900/30 border border-gray-200/30 dark:border-gray-800/30">
            <h4 className="text-black dark:text-white font-medium">Simple 3-Step Process</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-xs font-medium text-blue-600 dark:text-blue-400">1</span>
                <span className="text-gray-600 dark:text-gray-300">Free 30-min strategy call to understand your challenge</span>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-xs font-medium text-blue-600 dark:text-blue-400">2</span>
                <span className="text-gray-600 dark:text-gray-300">Custom proposal with timeline and fixed pricing</span>
              </div>
              <div className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-xs font-medium text-blue-600 dark:text-blue-400">3</span>
                <span className="text-gray-600 dark:text-gray-300">Deliver results with weekly progress updates</span>
              </div>
            </div>
          </div>
          
          {/* Pricing */}
          <div className="space-y-4 p-6 rounded-xl bg-gray-50/50 dark:bg-gray-900/30 border border-gray-200/30 dark:border-gray-800/30">
            <h4 className="text-black dark:text-white font-medium">Investment Options</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Strategy Session</span>
                <span className="font-medium text-black dark:text-white">Free</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Technical Audit</span>
                <span className="font-medium text-black dark:text-white">$2,500</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">Custom Development</span>
                <span className="font-medium text-black dark:text-white">$15K+</span>
              </div>
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  All projects include 30-day support guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Social Proof Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="text-black dark:text-white text-lg font-medium mb-4">What people say</h3>
        <Suspense fallback={<div className="h-24 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse" />}>
          <SocialProofShowcase />
        </Suspense>
      </motion.section>

      {/* Connect Section */}
      <motion.section
        id="connect"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="pt-12 border-t border-gray-200 dark:border-gray-800"
      >
        <h3 className="text-black dark:text-white text-lg font-medium mb-4">Ready to work together?</h3>
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed font-normal">
            <strong>For Business Leaders:</strong> Need strategic technical guidance or custom development? Let&apos;s discuss how I can solve your specific challenges.<br/><br/>
            <strong>For Developers:</strong> Follow my insights on building better products and growing your technical career.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-gray-500 dark:text-gray-400 font-medium text-sm">Connect with me</span>
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((link) => (
                <MagneticSocialLink key={link.label} link={link.link}>
                  {link.label}
                </MagneticSocialLink>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      </motion.main>
  )
}

