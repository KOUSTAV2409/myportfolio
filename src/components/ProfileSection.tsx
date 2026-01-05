import Image from 'next/image'
import { EMAIL, SOCIAL_LINKS } from '@/app/data'

export default function ProfileSection() {
  return (
    <div className="w-full max-w-2xl mx-auto pt-6 sm:pt-10 px-4 sm:px-6">
      {/* Profile */}
      <div className="flex items-center gap-x-4">
        <div className="shrink-0">
          <Image 
            className="shrink-0 size-14 sm:size-20 rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-700" 
            src="/profile.png" 
            alt="Koustav Ganguly Profile Picture"
            width={80}
            height={80}
            priority
            quality={95}
          />
        </div>

        <div className="grow">
          <h1 className="text-base sm:text-lg font-medium text-gray-800 dark:text-neutral-200">
            Koustav Ganguly
          </h1>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            Full-Stack Developer & Technical Writer
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span>Available for projects</span>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="mt-8">
        <p className="text-sm text-gray-600 dark:text-neutral-400">
          I am a seasoned developer with over 3 years of experience in creating visually appealing and user-centric applications. My expertise spans across full-stack development, helping clients bring their digital visions to life.
        </p>

        <p className="mt-3 text-sm text-gray-600 dark:text-neutral-400">
          Currently, I work remotely building internal tools and dashboards, where I design and develop modern web applications, convert designs into responsive code, and provide comprehensive support to users. I am passionate about crafting elegant and functional solutions that enhance user experiences.
        </p>

        <ul className="mt-5 flex flex-col gap-y-3">
          <li className="flex items-center gap-x-2.5">
            <svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <a className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </li>

          {SOCIAL_LINKS.map((social, index) => (
            <li key={index} className="flex items-center gap-x-2.5">
              {social.label === 'Twitter' || social.label === 'X' ? (
                <svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.1881 10.1624L22.7504 0H20.7214L13.2868 8.82385L7.34878 0H0.5L9.47944 13.3432L0.5 24H2.5291L10.3802 14.6817L16.6512 24H23.5L14.1881 10.1624ZM11.409 13.4608L3.26021 1.55962H6.37679L20.7224 22.5113H17.6058L11.409 13.4613V13.4608Z" fill="currentColor" />
                </svg>
              ) : social.label === 'LinkedIn' ? (
                <svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              ) : social.label === 'GitHub' ? (
                <svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              ) : (
                <svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                  <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                  <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
                </svg>
              )}
              <a className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href={social.link}>
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
