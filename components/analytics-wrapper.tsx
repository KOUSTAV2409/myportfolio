'use client'
import { useEffect } from 'react'
import { trackScrollDepth } from '@/lib/analytics'

export function AnalyticsWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout
    
    const handleScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
        
        if (scrolled > 25 && scrolled < 50) {
          trackScrollDepth(25)
        } else if (scrolled > 50 && scrolled < 75) {
          trackScrollDepth(50)
        } else if (scrolled > 75 && scrolled < 90) {
          trackScrollDepth(75)
        } else if (scrolled > 90) {
          trackScrollDepth(100)
        }
      }, 1000)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return <>{children}</>
}
