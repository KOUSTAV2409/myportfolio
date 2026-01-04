'use client'
import { ArrowUpRight } from 'lucide-react'
import { EDUCATION, SOCIAL_LINKS } from '../data'

export default function AboutPage() {
  return (
    <div className="w-full max-w-2xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-8 text-gray-800 dark:text-neutral-200">About</h1>
      
      {/* Story */}
      <div className="space-y-6 mb-10">
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
          I'm a Full-Stack Developer from Bongaon, India, passionate about building exceptional web applications 
          and sharing knowledge through technical writing. My journey in tech started during my computer science 
          studies, where I discovered the perfect blend of problem-solving and creativity that programming offers.
        </p>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
          Currently, I work with modern technologies like React, Next.js, and Node.js to create scalable web 
          applications. I believe in writing clean, maintainable code and building user experiences that matter. 
          When I'm not coding, you'll find me writing technical articles to help other developers navigate 
          complex concepts.
        </p>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
          I'm always excited about new challenges and opportunities to learn. Whether it's contributing to 
          open-source projects, building internal tools, or explaining complex technical concepts through 
          writing, I approach each project with curiosity and dedication.
        </p>
      </div>

      {/* Education */}
      <div className="space-y-6 mb-10">
        <h2 className="text-lg font-bold text-gray-800 dark:text-neutral-200">Education</h2>
        <div>
          <h3 className="text-lg font-bold tracking-tight mb-1">{EDUCATION.degree}</h3>
          <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">{EDUCATION.institution}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500 font-medium">{EDUCATION.duration}</span>
            <span className="text-sm text-gray-500 font-medium">CGPA: {EDUCATION.cgpa}</span>
          </div>
        </div>
      </div>

      {/* Current Focus */}
      <div className="space-y-6 mb-10">
        <h2 className="text-lg font-bold text-gray-800 dark:text-neutral-200">Currently</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-base font-bold text-gray-700 dark:text-gray-300 mb-2 tracking-tight">Learning</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Ruby & Ruby on Rails, exploring backend development patterns and frameworks.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-700 dark:text-gray-300 mb-2 tracking-tight">Working On</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Building internal tools and dashboards, contributing to open-source projects, 
              and writing technical articles about JavaScript and system design.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-700 dark:text-gray-300 mb-2 tracking-tight">Interests</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Performance optimization, component design patterns, developer education, 
              and creating tools that improve developer experience.
            </p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="space-y-6 mb-10">
        <h2 className="text-lg font-bold text-gray-800 dark:text-neutral-200">Let's Connect</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
            I'm always open to interesting conversations about technology, collaboration opportunities, 
            or just connecting with fellow developers.
          </p>
          <div className="flex flex-wrap gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors font-medium"
              >
                {link.label}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span className="font-medium">Bongaon, India • +917679872265</span>
          <span className="font-medium">Available for projects</span>
        </div>
      </div>
    </div>
  )
}
