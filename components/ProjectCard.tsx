import Image from 'next/image'
import { ExternalLink, Eye, Calendar, User } from 'lucide-react'
import { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

const categoryColors = {
  photoshop: 'bg-blue-500',
  illustrator: 'bg-orange-500',
  'corel-draw': 'bg-green-500',
  canva: 'bg-cyan-500',
  'premiere-pro': 'bg-purple-500',
}

const categoryLabels = {
  photoshop: 'Photoshop',
  illustrator: 'Illustrator',
  'corel-draw': 'Corel Draw',
  canva: 'Canva',
  'premiere-pro': 'Premiere Pro',
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
      {/* Project Image */}
      <div className="relative overflow-hidden h-64">
        <Image
          src={project.image}
          alt={`${project.title} - ${project.description}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <div className="flex space-x-3">
              <button className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200">
                <Eye size={20} className="text-gray-900" />
              </button>
              <button className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200">
                <ExternalLink size={20} className="text-gray-900" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-xs font-medium text-white rounded-full ${categoryColors[project.category]}`}>
            {categoryLabels[project.category]}
          </span>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-2 py-1 text-xs font-medium text-white bg-yellow-500 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Project Meta */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          {project.client && (
            <div className="flex items-center">
              <User size={14} className="mr-1" />
              {project.client}
            </div>
          )}
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {project.year}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}