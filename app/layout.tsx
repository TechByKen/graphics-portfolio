import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://kenvoraXStudios.com'),
  title: {
    default: 'KenvoraX Studios - Professional Graphic Designer',
    template: '%s | KenvoraX Studios'
  },
  description: 'Professional graphic designer specializing in Adobe Creative Suite, Corel Draw, and modern design solutions. Creating stunning visuals for your brand.',
  keywords: ['graphic design', 'adobe photoshop', 'adobe illustrator', 'corel draw', 'canva', 'premiere pro', 'brand identity', 'logo design'],
  authors: [{ name: 'KenvoraX Studios' }],
  creator: 'KenvoraX Studios',
  publisher: 'KenvoraX Studios',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          {children}
        </Suspense>
        <Footer/>
      </body>
    </html>
  )
}
