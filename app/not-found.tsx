import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-6xl font-bold mb-4">404</h2>
        <p className="text-xl mb-8">Page not found</p>
        <Link 
          href="/"
          className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded hover:opacity-80 transition-opacity"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
