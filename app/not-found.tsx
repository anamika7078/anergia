import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-soft">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-primary-blue mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-primary-dark mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-primary-dark/70 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-primary-blue text-primary-white rounded-lg font-semibold hover:bg-primary-orange transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

