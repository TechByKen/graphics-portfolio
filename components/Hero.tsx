import Image from 'next/image'
import { ArrowRight} from 'lucide-react'
import Link from 'next/link'
import { FaRocket } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden"
  style={{
    backgroundImage: "url('/myphoto/bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex mt-2 items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              <span className="text-sm font-medium">Available for new projects</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Professional Design
              <br />
              Solutions for SMEs
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-lg">
              Professional graphic designer specializing in Adobe Photoshop, 
              brand identity, and modern design solutions that solvees problems for SMEs with designs that communicates.
            </p>
            
            <div className="flex flex-col md:mb-4 sm:flex-row gap-4">
              <Link href='/portfolio' className="group px-8 py-4 bg-white hover:bg-blue-400 hover:text-white text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                View Portfolio
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </Link>
              <Link href='/contact' className="px-8 py-4 border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-semibold rounded-xl transition-all duration-300 flex items-center justify-center">
                 Get Started
                <FaRocket className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20}/>
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full md:rounded-4xl overflow-hidden border-4 border-white/20 shadow-2xl mb-2 nt-2 relative">
                <Image
                  src="/myphoto/myPhoto3.png"
                  alt="Professional graphic designer at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 320px, 384px"
                  priority
                />
              </div>
              
             
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}