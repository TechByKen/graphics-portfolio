import { Metadata } from 'next'
import AboutUsPage from '@/components/AboutUsPage'

export const metadata: Metadata = {
  title: 'About - KenvoraX Studios',
  description: 'Learn about our journey, mission, and expertise in graphic design. Professional designer specializing in Adobe Photoshop, Corel Draw, and modern design solutions.',
  keywords: ['about kenvoraX studios', 'graphic designer', 'design expertise', 'creative journey', 'adobe specialist'],
  openGraph: {
    title: 'About - KenvoraX Studios',
    description: 'Learn about our journey, mission, and expertise in graphic design.',
    type: 'website',
    url: '/about',
    images: [
      {
        url: '/images/about-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About KenvoraX Studios - Professional Graphic Design Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About - Neth Digitals',
    description: 'Learn about our journey, mission, and expertise in graphic design.',
    images: ['/images/about-og-image.jpg'],
  },
  alternates: {
    canonical: '/about',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function About() {
  return <AboutUsPage />
}
