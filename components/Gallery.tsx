'use client'

import { useState } from 'react'
import ProjectCard from './ProjectCard'
import { Project } from '@/data/projects'

interface GalleryProps {
  projects: Project[]
  showFilters?: boolean
}

const filterCategories = [
  { key: 'all', label: 'All Projects' },
  { key: 'photoshop', label: 'Photoshop' },
  { key: 'illustrator', label: 'Illustrator' },
  { key: 'corel-draw', label: 'Corel Draw' },
  { key: 'canva', label: 'Canva' },
  { key: 'premiere-pro', label: 'Premiere Pro' },
]

export default function Gallery({ projects, showFilters = false }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const handleFilterChange = (category: string) => {
    setActiveFilter(category)
    if (category === 'all') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === category))
    }
  }

  return (
    <div>
      {/* Filter Buttons */}
      {showFilters && (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterCategories.map((filter) => (
            <button
              key={filter.key}
              onClick={() => handleFilterChange(filter.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-indigo-600 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🎨</div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            No projects found
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Try selecting a different category to see more projects.
          </p>
        </div>
      )}
    </div>
  )
}
