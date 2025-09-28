import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Home - Professional Graphic Design Services',
  description: 'Welcome to KenvoraX Studios. Professional graphic designer specializing in Adobe Photoshop, brand identity, and creative solutions.',
}

export default function Home() {
  // Get featured projects for homepage
  const featuredProjects = projects.filter(project => project.featured).slice(0, 6)

  return (
    <main>
      <Hero />
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Showcasing our best design projects
            </p>
          </div>
          <Gallery projects={featuredProjects} />
        </div>
      </section>
    </main>
  )
}
