'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Only show on desktop
    const checkDevice = () => {
      setIsDesktop(window.innerWidth > 768 && !('ontouchstart' in window))
    }
    
    checkDevice()
    window.addEventListener('resize', checkDevice)

    if (!isDesktop) return

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
      setIsVisible(true)
    }
    
    const handleMouseLeave = () => {
      setIsHovering(false)
      setIsVisible(false)
    }

    // Only track movement
    window.addEventListener('mousemove', moveCursor)

    // Only show cursor when hovering interactive elements
    const interactiveElements = document.querySelectorAll('a, button, []')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('resize', checkDevice)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [cursorX, cursorY, isDesktop])

  if (!isDesktop) return null

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference" data-cursor-hover
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      animate={{
        scale: isVisible ? (isHovering ? 1.5 : 1) : 0,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        scale: { duration: 0.2 },
        opacity: { duration: 0.2 },
      }}
    >
      <div className="w-full h-full bg-white rounded-full" data-cursor-hover />
    </motion.div>
  )
}
