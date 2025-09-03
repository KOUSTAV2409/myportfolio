'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import { ProjectDetailModal } from '@/components/project-detail-modal'
import { ContentShowcase } from '@/components/content-showcase'
import { SocialProofShowcase } from '@/components/social-proof-showcase'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { AnalyticsWrapper } from '@/components/analytics-wrapper'
import { trackCTAClick, trackSocialClick, trackProjectView } from '@/lib/analytics'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
  SKILLS,
  TESTIMONIALS,
} from './data'

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
          className="aspect-video w-full cursor-zoom-in rounded-lg"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-900 p-1">
          <video
            src={src}
            autoPlay
            loop
            muted
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
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-gray-200 dark:bg-gray-800 px-2.5 py-1 text-sm text-gray-800 dark:text-gray-100 transition-colors duration-200 hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black"
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
    <AnalyticsWrapper>
      <motion.main
        className="space-y-12"
        variants={VARIANTS_CONTAINER}
        initial="hidden"
        animate="visible"
      >
      {/* About Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed font-normal">
              I help startups and businesses solve complex problems by bridging the gap between 
              <span className="text-black dark:text-white font-medium"> technology and human needs</span>. 
              Through deep conversations and strategic thinking, I guide teams toward decisions that work for both their code and their people.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span>Technical Strategy</span>
              </div>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                <span>Business Analysis</span>
              </div>
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for projects</span>
              </div>
            </div>
          </div>
          
          {/* Value Propositions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
            <div className="space-y-2">
              <h4 className="text-black dark:text-white font-medium text-sm">For Startups</h4>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                Navigate technical decisions with confidence. From architecture choices to team dynamics.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-black dark:text-white font-medium text-sm">For Businesses</h4>
              <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                Transform complex problems into clear solutions through strategic thinking and execution.
              </p>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="flex items-center gap-6 py-3 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span>98% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              <span>50+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
              <span>10K+ Downloads</span>
            </div>
          </div>
          
          {/* Prominent CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <a 
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 font-medium text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5" 
              href="https://cal.com/iamk-xyz/30min"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
            >
              Let's discuss your challenges
              <svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </a>
            <button 
              onClick={() => {
                const projectsSection = document.getElementById('projects')
                projectsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 font-medium text-sm"
              data-cursor-hover
            >
              See case studies
            </button>
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
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-sm bg-gray-200 dark:bg-gray-800 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Work Experience Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="text-black dark:text-white text-lg font-medium mb-4">Experience</h3>
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
                className={`group flex gap-3 py-3 ${index !== WORK_EXPERIENCE.length - 1 ? 'border-b border-gray-100 dark:border-gray-800/30' : ''} ${work.link ? 'hover:bg-gray-50/80 dark:hover:bg-gray-900/20 cursor-pointer' : ''} transition-all duration-200 -mx-2 px-2 rounded-lg`}
                {...linkProps}
              >
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-gray-700 dark:text-gray-300 font-medium text-xs">
                      {work.company.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-medium text-black dark:text-white text-sm leading-tight truncate ${work.link ? 'group-hover:text-blue-600 dark:group-hover:text-blue-400' : ''} transition-colors duration-200`}>
                        {work.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm truncate">{work.company}</p>
                      <p className="text-gray-500 dark:text-gray-500 text-xs mt-0.5">
                        {work.start} - {work.end}
                        {work.location && ` · ${work.location}`}
                      </p>
                    </div>
                    {work.link && (
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2">
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
        <ContentShowcase />
      </motion.section>

      {/* Projects Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        id="projects"
      >
        <h3 className="text-black dark:text-white text-lg font-medium mb-4">Strategic Case Studies</h3>
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
              <div className="relative rounded-2xl bg-gray-100/40 dark:bg-gray-900/40 p-1 ring-1 ring-gray-200/50 dark:ring-gray-800/50 ring-inset hover:ring-gray-300/50 dark:hover:ring-gray-700/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gray-200/20 dark:group-hover:shadow-gray-900/20">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative" data-cursor-hover>
                  <ProjectVideo src={project.video} />
                </div>
                {/* Video Preview Label */}
                <div className="absolute top-3 left-3 px-2 py-1 bg-black/70 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200"
                    data-cursor-hover
                  >
                    View Live
                    <svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  
                  <ProjectDetailModal project={project}>
                    <button 
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                      data-cursor-hover
                    >
                      Case Study
                      <svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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

      {/* Social Proof Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="text-black dark:text-white text-lg font-medium mb-4">What people say</h3>
        <SocialProofShowcase />
      </motion.section>

      {/* Connect Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="pt-12 border-t border-gray-200 dark:border-gray-800"
      >
        <h3 className="text-black dark:text-white text-lg font-medium mb-4">Connect with me</h3>
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed font-normal">
            Let's discuss your next project or just say hello.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-gray-500 dark:text-gray-400 font-medium text-sm">Find me on</span>
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
    </AnalyticsWrapper>
  )
}

