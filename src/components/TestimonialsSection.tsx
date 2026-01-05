import Image from 'next/image'
import { TESTIMONIALS } from '@/app/data'

export default function TestimonialsSection() {
  return (
    <div className="mt-10 sm:mt-14">
      <h2 className="mb-3 font-medium text-gray-800 dark:text-neutral-200">
        Testimonials
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 border-y border-gray-200 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
        {TESTIMONIALS.slice(0, 2).map((testimonial, index) => (
          <div key={index} className={`${index === 0 ? 'sm:-ms-4' : ''} py-6 sm:px-4`}>
            {/* Review */}
            <blockquote>
              <span className="text-sm text-gray-800 dark:text-neutral-200">
                {testimonial.content}
              </span>

              <footer className="mt-3">
                <div className="flex items-center gap-x-2">
                  {testimonial.avatar && (
                    <Image 
                      className="shrink-0 size-5 rounded-full" 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={20}
                      height={20}
                    />
                  )}
                  <div className="grow">
                    <div className="text-xs text-gray-500 dark:text-neutral-500">
                      {testimonial.name}
                      {testimonial.role && testimonial.company && (
                        <span> - {testimonial.role} at {testimonial.company}</span>
                      )}
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  )
}
