'use client'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'

export function Header() {
  return (
    <header className="space-y-6">
      {/* Name and Status */}
      <div className="flex items-center justify-between">
        <Link 
          href="/" 
          className="font-medium text-black dark:text-white hover:opacity-70 transition-opacity"
        >
          Koustav Ganguly
        </Link>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
          <span>Available</span>
        </div>
      </div>
      
      {/* Navigation */}
      <Navbar />
    </header>
  )
}
