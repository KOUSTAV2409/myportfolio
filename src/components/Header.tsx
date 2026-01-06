'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCalOpen, setIsCalOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav className="mt-4 relative max-w-2xl w-full bg-white border border-gray-200 rounded-[24px] mx-2 flex flex-wrap md:flex-nowrap items-center justify-between p-1 ps-3 sm:ps-4 md:py-0 sm:mx-auto dark:bg-neutral-900 dark:border-neutral-700">
          <div className="flex items-center">
            {/* Logo */}
            <Link 
              className="flex-none rounded-md text-2xl inline-block font-bold focus:outline-hidden focus:opacity-80 text-gray-800 dark:text-white" 
              href="/" 
              aria-label="Koustav Ganguly"
              style={{ fontFamily: 'Fasthin Regular, sans-serif' }}
            >
              iamk
            </Link>
          </div>

          <div className="flex items-center gap-1 md:order-4 md:ms-4">
            <button 
              className="w-full sm:w-auto whitespace-nowrap py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200" 
              onClick={() => setIsCalOpen(true)}
            >
              Book a call
            </button>

            <div className="md:hidden">
              <button 
                type="button" 
                className="hs-collapse-toggle flex justify-center items-center size-9.5 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation"
              >
                <svg className={`${isMenuOpen ? 'hidden' : 'block'} shrink-0 size-3.5`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg className={`${isMenuOpen ? 'block' : 'hidden'} shrink-0 size-4`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className={`${isMenuOpen ? 'block' : 'hidden'} hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block`}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
              <Link className={`py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 ${pathname === '/' ? 'border-gray-800 font-medium text-gray-800 dark:border-neutral-200 dark:text-neutral-200' : 'border-transparent text-gray-500 dark:text-neutral-400'} hover:text-gray-800 focus:outline-hidden dark:hover:text-neutral-200`} href="/">Home</Link>
              <Link className={`py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 ${pathname === '/projects' ? 'border-gray-800 font-medium text-gray-800 dark:border-neutral-200 dark:text-neutral-200' : 'border-transparent text-gray-500 dark:text-neutral-400'} hover:text-gray-800 focus:outline-hidden dark:hover:text-neutral-200`} href="/projects">Projects</Link>
              <Link className={`py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 ${pathname === '/blog' ? 'border-gray-800 font-medium text-gray-800 dark:border-neutral-200 dark:text-neutral-200' : 'border-transparent text-gray-500 dark:text-neutral-400'} hover:text-gray-800 focus:outline-hidden dark:hover:text-neutral-200`} href="/blog">Blog</Link>
              <Link className={`py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 ${pathname === '/about' ? 'border-gray-800 font-medium text-gray-800 dark:border-neutral-200 dark:text-neutral-200' : 'border-transparent text-gray-500 dark:text-neutral-400'} hover:text-gray-800 focus:outline-hidden dark:hover:text-neutral-200`} href="/about">About</Link>
              <Link className={`py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 ${pathname === '/news' ? 'border-gray-800 font-medium text-gray-800 dark:border-neutral-200 dark:text-neutral-200' : 'border-transparent text-gray-500 dark:text-neutral-400'} hover:text-gray-800 focus:outline-hidden dark:hover:text-neutral-200`} href="/news">News</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Cal.com Modal */}
      {isCalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
          onClick={() => setIsCalOpen(false)}
        >
          <div 
            className="bg-white dark:bg-neutral-900 rounded-xl shadow-2xl w-full max-w-4xl h-[500px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsCalOpen(false)}
              className="absolute -top-2 -right-2 z-10 w-8 h-8 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
            >
              ✕
            </button>
            <iframe
              src="https://cal.com/iamk-xyz/30min"
              className="w-full h-full rounded-xl"
              frameBorder="0"
            />
          </div>
        </div>
      )}
    </>
  )
}
