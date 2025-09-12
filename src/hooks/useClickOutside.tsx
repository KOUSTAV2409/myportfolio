import { useEffect, useRef, RefObject } from 'react'

export default function useClickOutside(
  ref: RefObject<HTMLElement> | (() => void),
  callback?: () => void
) {
  const internalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Handle both signatures: useClickOutside(callback) and useClickOutside(ref, callback)
    const targetRef = typeof ref === 'function' ? internalRef : ref
    const targetCallback = typeof ref === 'function' ? ref : callback

    if (!targetCallback) return

    const handleClick = (event: MouseEvent) => {
      if (targetRef.current && !targetRef.current.contains(event.target as Node)) {
        targetCallback()
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [ref, callback])

  return typeof ref === 'function' ? internalRef : undefined
}
