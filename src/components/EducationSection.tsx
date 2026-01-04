import { EDUCATION } from '@/app/data'

export default function EducationSection() {
  return (
    <div className="mt-10 sm:mt-14">
      <h2 className="mb-3 font-medium text-gray-800 dark:text-neutral-200">
        Education
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700">
          <UniversityIcon />

          <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
            {EDUCATION.duration}
          </h3>

          <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
            {EDUCATION.degree}
          </p>

          <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
            {EDUCATION.institution}
          </p>

          {EDUCATION.cgpa && (
            <p className="mt-1 text-xs text-gray-500 dark:text-neutral-500">
              CGPA: {EDUCATION.cgpa}
            </p>
          )}
        </div>

        {/* You can add more education entries here if needed */}
        <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700">
          <div className="shrink-0 size-10 mb-3 text-gray-400 dark:text-neutral-600">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="currentColor" fillOpacity="0.1"/>
              <path d="M20 12L28 16L20 20L12 16L20 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 20L20 24L28 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 24L20 28L28 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
            Ongoing
          </h3>

          <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
            Continuous Learning
          </p>

          <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
            Online Courses & Certifications
          </p>
        </div>
      </div>
    </div>
  )
}

function UniversityIcon() {
  return (
    <div className="shrink-0 size-10 mb-3">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill="#1f2937" />
        <path d="M20 8L32 14L20 20L8 14L20 8Z" fill="white" />
        <path d="M8 18L20 24L32 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 22L20 28L32 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}
