'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <button
          className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded hover:opacity-80 transition-opacity"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  )
}
