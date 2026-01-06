'use client'

import { TextLoop } from '@/components/ui/text-loop'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { SOCIAL_LINKS } from '@/app/data'

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4" />,
  },
  {
    label: 'System',
    id: 'system',
    icon: <MonitorIcon className="h-4 w-4" />,
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex rounded-lg bg-zinc-100 dark:bg-zinc-800 p-1">
      {THEMES_OPTIONS.map((themeOption) => {
        const isActive = theme === themeOption.id
        return (
          <button
            key={themeOption.id}
            className={`inline-flex h-7 w-7 items-center justify-center rounded transition-colors duration-100 ${
              isActive 
                ? 'bg-white dark:bg-zinc-700 text-zinc-950 dark:text-zinc-50' 
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'
            }`}
            type="button"
            aria-label={`Switch to ${themeOption.label} theme`}
            onClick={() => setTheme(themeOption.id)}
          >
            {themeOption.icon}
          </button>
        )
      })}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-6 border-t border-gray-200 dark:border-neutral-700">
        <div className="flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <a href="https://github.com/KOUSTAV2409" target="_blank" rel="noopener noreferrer">
              <TextLoop className="text-xs text-gray-600 dark:text-neutral-400">
                <span>© 2025 Koustav</span>
                <span>Built with ❤️ by Koustav</span>
              </TextLoop>
            </a>
          </div>

          <ul className="flex flex-wrap items-center">
            {SOCIAL_LINKS.map((social, index) => (
              <li key={index} className="group inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-gray-400 dark:text-neutral-500 dark:before:bg-neutral-600">
                <Link 
                  className="relative text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" 
                  href={social.link}
                >
                  {social.label}
                  <svg className="absolute -top-1 -right-2 size-2.5 opacity-0 group-hover:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </Link>
              </li>
            ))}
            <li className="inline-block">
              <ThemeSwitch />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
