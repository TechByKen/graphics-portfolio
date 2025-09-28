import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { FaHome } from 'react-icons/fa'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-800 mb-4">
            404
          </h1>
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-4xl">🎨</span>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. 
          It might have been moved or deleted.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
                      
                <FaHome className="mr-2" size={20} />
            Go Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-8 py-4 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400 dark:hover:text-black font-semibold rounded-xl transition-all duration-300"
          >
            <ArrowLeft className="mr-2" size={20} />
            Go Back
          </button>
        </div>
      </div>
    </main>
  )
}