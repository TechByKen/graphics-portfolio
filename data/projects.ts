export interface Project {
  id: number
  title: string
  category: 'photoshop' | 'illustrator' | 'corel-draw' | 'canva' | 'premiere-pro'
  image: string
  description: string
  featured: boolean
  tags: string[]
  client?: string
  year: number
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Brand Identity',
    category: 'photoshop',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop',
    description: 'Complete brand identity package with logo, business cards, and style guide for a tech startup.',
    featured: true,
    tags: ['branding', 'logo design', 'business cards'],
    client: 'TechStart Inc.',
    year: 2024
  },
  {
    id: 2,
    title: 'Vector Illustration Series',
    category: 'illustrator',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop',
    description: 'Custom vector illustrations for a children\'s book featuring colorful characters and scenes.',
    featured: true,
    tags: ['illustration', 'vector art', 'children\'s book'],
    client: 'Rainbow Publishing',
    year: 2024
  },
  {
    id: 3,
    title: 'Print Design Campaign',
    category: 'corel-draw',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop',
    description: 'Professional print materials including brochures, flyers, and posters for a marketing campaign.',
    featured: true,
    tags: ['print design', 'brochures', 'marketing'],
    client: 'Creative Agency Co.',
    year: 2023
  },
  {
    id: 4,
    title: 'Social Media Templates',
    category: 'canva',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    description: 'Engaging social media templates and graphics for consistent brand presence across platforms.',
    featured: false,
    tags: ['social media', 'templates', 'branding'],
    client: 'Social Buzz',
    year: 2024
  },
  {
    id: 5,
    title: 'Product Launch Video',
    category: 'premiere-pro',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop',
    description: 'Professional video editing and motion graphics for a product launch campaign.',
    featured: true,
    tags: ['video editing', 'motion graphics', 'product launch'],
    client: 'Innovation Labs',
    year: 2024
  },
  {
    id: 6,
    title: 'Restaurant Menu Design',
    category: 'photoshop',
    image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600&h=400&fit=crop',
    description: 'Elegant menu design with food photography integration and modern typography.',
    featured: true,
    tags: ['menu design', 'restaurant', 'typography'],
    client: 'Gourmet Bistro',
    year: 2023
  },
]