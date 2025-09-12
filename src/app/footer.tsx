'use client'
import { TextLoop } from '@/components/ui/text-loop'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

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

export function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 dark:border-gray-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <a href="https://github.com/KOUSTAV2409" target="_blank" rel="noopener noreferrer">
          <TextLoop className="text-sm text-gray-500 dark:text-zinc-500 font-medium">
            <span>© 2025 Koustav </span>
            <span>Built with ❤️ by Koustav</span>
          </TextLoop>
        </a>
        <div className="text-xs text-zinc-400">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
