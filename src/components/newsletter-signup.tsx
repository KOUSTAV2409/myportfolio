'use client'
import { useState } from 'react'

interface NewsletterSignupProps {
  variant?: 'inline' | 'footer' | 'sidebar'
  title?: string
  description?: string
}

export function NewsletterSignup({ 
  variant = 'inline',
  title = "Stay Updated",
  description = "Get notified when I publish new articles on JavaScript, web development, and software engineering."
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    
    // Simulate API call - replace with your actual newsletter service
    try {
      // Example: ConvertKit, Mailchimp, or custom API
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  if (variant === 'inline') {
    return (
      <div className="my-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
        <div className="max-w-md">
          <h3 className="text-lg font-medium text-black dark:text-white mb-2">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            {description}
          </p>
          
          {status === 'success' ? (
            <div className="text-sm text-green-600 dark:text-green-400">
              ✓ Thanks for subscribing! Check your email to confirm.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading' || !email}
                className="px-4 py-2 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {status === 'loading' ? '...' : 'Subscribe'}
              </button>
            </form>
          )}
          
          {status === 'error' && (
            <div className="text-sm text-red-600 dark:text-red-400 mt-2">
              Something went wrong. Please try again.
            </div>
          )}
        </div>
      </div>
    )
  }

  if (variant === 'footer') {
    return (
      <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-16">
        <div className="text-center max-w-md mx-auto">
          <h3 className="text-lg font-medium text-black dark:text-white mb-2">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            {description}
          </p>
          
          {status === 'success' ? (
            <div className="text-sm text-green-600 dark:text-green-400">
              ✓ Thanks for subscribing! Check your email to confirm.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading' || !email}
                className="w-full px-4 py-3 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe to Newsletter'}
              </button>
            </form>
          )}
          
          {status === 'error' && (
            <div className="text-sm text-red-600 dark:text-red-400 mt-2">
              Something went wrong. Please try again.
            </div>
          )}
          
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    )
  }

  return null
}
