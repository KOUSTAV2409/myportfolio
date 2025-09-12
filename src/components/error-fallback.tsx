'use client'

interface ErrorFallbackProps {
  error?: Error
  resetError?: () => void
  message?: string
}

export function ErrorFallback({ 
  error, 
  resetError, 
  message = "Something went wrong" 
}: ErrorFallbackProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      
      <h3 className="text-lg font-medium text-black dark:text-white mb-2">
        {message}
      </h3>
      
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 max-w-md">
        {error?.message || "An unexpected error occurred. Please try again."}
      </p>
      
      {resetError && (
        <button
          onClick={resetError}
          className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-sm font-medium"
        >
          Try again
        </button>
      )}
    </div>
  )
}
