'use client'
import { motion } from 'motion/react'
import { ReactNode } from 'react'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

export const VARIANTS_ITEM = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

interface PageLayoutProps {
  children: ReactNode
  className?: string
}

export function PageLayout({ children, className = "space-y-12" }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-2xl mx-auto px-6 py-8">
        <motion.main
          variants={VARIANTS_CONTAINER}
          initial="hidden"
          animate="visible"
          className={className}
        >
          {children}
        </motion.main>
      </div>
    </div>
  )
}

export function PageSection({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.section variants={VARIANTS_ITEM} className={className}>
      {children}
    </motion.section>
  )
}

export function PageHeader({ title, description }: { title: string, description?: string }) {
  return (
    <PageSection>
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight leading-tight">{title}</h1>
        {description && (
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </PageSection>
  )
}

export function SectionHeader({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] mb-6">
      {children}
    </h2>
  )
}

export function ProjectTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-lg font-semibold tracking-tight leading-tight">
      {children}
    </h3>
  )
}

export function JobTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-base font-semibold tracking-tight">
      {children}
    </h3>
  )
}
