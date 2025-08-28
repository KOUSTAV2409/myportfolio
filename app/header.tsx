'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="space-y-2">
        <Link href="/" className="font-medium text-black dark:text-white">
          Koustav 
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Fullstack Developer, UI designer & CS Explorer
        </TextEffect>
        <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span>Available for new projects</span>
        </div>
      </div>
    </header>
  )
}
