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
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
  SKILLS,
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
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed font-normal">
            I'm a TypeScript enthusiast and I use modern frameworks. I love building tools for 
            developers and generally care too much about attention to detail.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              5+ years experience
            </span>
            <span>•</span>
            <span>50+ projects delivered</span>
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
        <h3 className="text-black dark:text-white text-lg font-medium mb-4">Work Experience</h3>
        <div className="space-y-3">
          {WORK_EXPERIENCE.map((work) => (
            <a
              key={work.id}
              className="group flex items-center justify-between py-3 px-4 rounded-lg bg-gray-100/50 dark:bg-gray-900/50 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
              href={work.link}
              target="_blank"
            >
              <div className="flex-1">
                <h4 className="text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors duration-200">
                  {work.title}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{work.company}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 dark:text-gray-400 text-sm">{work.start} - {work.end}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300">
                  <path d="M7 17L17 7"/>
                  <path d="M7 7h10v10"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      {/* Blog Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="text-black dark:text-white text-lg font-medium mb-4">Blog</h3>
        <div className="space-y-3">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.uid}
              className="group flex items-center justify-between py-3 px-4 rounded-lg bg-gray-100/50 dark:bg-gray-900/50 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
              href={post.link}
            >
              <div className="flex-1">
                <h4 className="text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors duration-200">
                  {post.title}
                </h4>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300">
                <path d="M7 17L17 7"/>
                <path d="M7 7h10v10"/>
              </svg>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="text-black dark:text-white text-lg font-medium mb-4">Selected Projects</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.name} className="space-y-3 group">
              <div className="relative rounded-2xl bg-gray-100/40 dark:bg-gray-900/40 p-1 ring-1 ring-gray-200/50 dark:ring-gray-800/50 ring-inset hover:ring-gray-300/50 dark:hover:ring-gray-700/50 transition-all duration-300">
                <ProjectVideo src={project.video} />
              </div>
              <div className="px-1 space-y-2">
                <div className="flex items-center justify-between">
                  <a
                    className="font-base group relative inline-block font-[450] text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-black dark:focus-visible:outline-white focus-visible:outline-offset-2 rounded-sm"
                    href={project.link}
                    target="_blank"
                  >
                    {project.name}
                    <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-white transition-all duration-200 group-hover:max-w-full"></span>
                  </a>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{project.year}</span>
                </div>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-500">
                  <span>{project.role}</span>
                  <span>•</span>
                  <span>{project.tech}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Connect Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="pt-12 border-t border-gray-200 dark:border-gray-800"
      >
        <h3 className="text-black dark:text-white text-lg font-medium mb-4">Let's work together</h3>
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed font-normal">
            I'm currently accepting new projects and would love to collaborate with you.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a 
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 font-medium text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5" 
              href={`mailto:${EMAIL}`}
            >
              Get in touch
              <svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </a>
            <div className="flex items-center gap-3">
              <span className="text-gray-500 dark:text-gray-400 font-medium text-sm">or find me on</span>
              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.slice(0, 3).map((link) => (
                  <MagneticSocialLink key={link.label} link={link.link}>
                    {link.label}
                  </MagneticSocialLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.main>
  )
}

