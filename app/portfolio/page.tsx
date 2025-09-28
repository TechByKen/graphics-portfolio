import { Metadata } from 'next'
import Gallery from '@/components/Gallery'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Portfolio - Creative Design Showcase',
  description: 'Explore our complete portfolio of graphic design projects including brand identities, print design, digital graphics, and video content.',
}

export default function Portfolio() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of our finest work spanning brand identity, digital design, 
            print materials, and multimedia content.
          </p>
        </div>
        <Gallery projects={projects} showFilters={true} />
      </div>
    </main>
  )
}