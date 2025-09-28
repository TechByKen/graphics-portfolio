import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react'
import { FaInstagram, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              KenvoraX Studios
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Professional graphic design services specializing in Adobe Photoshop, 
              brand identity, and modern professional design solutions that make your business stand out.
            </p>
            <div className="flex space-x-4">
              <button className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200">
               <FaInstagramSquare size={20} />
              </button>
              <button className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200">
                            
                              <FaSquareXTwitter size={20} />
              </button>
              <button className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200">
                <FaLinkedin size={20} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">About</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors duration-200">Portfolio</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors duration-200">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact us</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                diala.kenneth98@gmail.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2" />
                +234 (0) 81 668 850 35
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-2" />
                Port Harcourt, Rivers State, NG
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} KenvoraX Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}