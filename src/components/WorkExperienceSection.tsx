import Image from 'next/image'
import Link from 'next/link'
import { WORK_EXPERIENCE } from '@/app/data'

export default function WorkExperienceSection() {
  return (
    <div className="mt-10 sm:mt-14">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        Work experience
      </h2>

      {/* Timeline */}
      <div>
        {WORK_EXPERIENCE.map((work, index) => (
          <div key={work.id} className="group relative flex gap-x-5">
            {/* Icon */}
            <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
              <div className="relative z-10 size-6 flex justify-center items-center">
                <CompanyIcon companyName={work.company} />
              </div>
            </div>

            {/* Right Content */}
            <div className="grow pb-8 group-last:pb-0">
              <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                {work.start} - {work.end}
              </h3>

              <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                {work.title}
              </p>

              <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                {work.description}
              </p>

              {work.achievements && work.achievements.length > 0 && (
                <ul className="list-disc ms-6 mt-3 space-y-1.5">
                  {work.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}

              {work.link && (
                <div className="mt-3">
                  <Link 
                    className="block border border-gray-200 rounded-lg hover:shadow-2xs focus:outline-hidden dark:border-neutral-700 p-4" 
                    href={work.link}
                  >
                    <div className="flex flex-col justify-center">
                      <h3 className="font-semibold text-sm text-gray-800 dark:text-neutral-300">
                        {work.company}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                        {work.location} • {work.employmentType}
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Helper component for company icons
function CompanyIcon({ companyName }: { companyName: string }) {
  // You can customize this based on the company name
  if (companyName.toLowerCase().includes('notion')) {
    return (
      <svg className="shrink-0 size-6 text-gray-600 dark:text-neutral-400" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.7438 0.940745C6.84695 1.30308 2.6841 1.63631 2.48837 1.67533C1.9396 1.77319 1.44038 2.14544 1.20563 2.63537L1 3.06646L1.01982 13.3407L1.04893 23.615L1.36234 24.2517C1.53886 24.6042 2.73365 26.2499 4.0362 27.9439C6.61221 31.2836 6.79802 31.47 7.77726 31.5679C8.06156 31.597 10.1966 31.4991 12.5081 31.3622C14.8295 31.2154 18.5508 30.99 20.7842 30.863C30.3233 30.2839 29.8334 30.3328 30.3815 29.8627C31.0672 29.2947 31.0183 30.2251 31.0474 17.7377C31.0672 7.15003 31.0573 6.45509 30.9006 6.13177C30.7148 5.76943 30.3815 5.51487 26.0329 2.45885C23.1243 0.421704 22.9186 0.313932 21.6155 0.294111C21.0772 0.274911 16.6307 0.568497 11.7438 0.940745Z" className="fill-black dark:fill-neutral-200" fill="currentColor" />
      </svg>
    )
  }
  
  // Default icon for other companies
  return (
    <svg className="shrink-0 size-6 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 12h.01" />
      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M22 13a18.15 18.15 0 0 1-20 0" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}
