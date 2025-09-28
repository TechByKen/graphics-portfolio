'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { 
  User, 
  Award, 
  Target, 
  Heart, 
  Lightbulb, 
  Users, 
  Clock, 
  CheckCircle,
  Star,
  Download,
  Mail,
  Calendar,
  MapPin,
  Palette,
  Code,
  Video,
  Camera,
  Brush,
  Layers,
  Zap,
  TrendingUp,
  Globe
} from 'lucide-react'

// Types
interface Skill {
  name: string
  level: number
  icon: React.ElementType
  category: string
  experience: string
}

interface Achievement {
  year: string
  title: string
  description: string
  icon: React.ElementType
}

interface Value {
  title: string
  description: string
  icon: React.ElementType
}

interface Stat {
  number: string
  label: string
  icon: React.ElementType
}

export default function AboutPageContent() {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState('story')

  useEffect(() => {
    setMounted(true)
  }, [])

  // Data
  const skills: Skill[] = [
    {
      name: 'Adobe Photoshop',
      level: 95,
      icon: Palette,
      category: 'Design Software',
      experience: '8+ years'
    },
    {
      name: 'Adobe Illustrator',
      level: 92,
      icon: Brush,
      category: 'Vector Graphics',
      experience: '7+ years'
    },
    {
      name: 'Corel Draw',
      level: 88,
      icon: Code,
      category: 'Design Software',
      experience: '6+ years'
    },
    {
      name: 'Canva',
      level: 90,
      icon: Layers,
      category: 'Digital Design',
      experience: '5+ years'
    },
    {
      name: 'Adobe Premiere Pro',
      level: 80,
      icon: Video,
      category: 'Video Editing',
      experience: '4+ years'
    },
    {
      name: 'UI/UX Design',
      level: 50,
      icon: Globe,
      category: 'Digital Design',
      experience: '3+ years'
    }
  ]

  const achievements: Achievement[] = [
    {
      year: '2025',
      title: 'Founded KenoraX Studios',
      description: 'Established a comprehensive digital design studio specializing in modern creative solutions.',
      icon: Award
    },
    {
      year: '2024',
      title: 'Adobe Certified Expert',
      description: 'Achieved advanced certification in Adobe Creative Suite, validating expertise in digital design.',
      icon: Star
    },
    {
      year: '2023',
      title: '100+ Projects Completed',
      description: 'Successfully delivered over 100 design projects across various industries and platforms.',
      icon: CheckCircle
    },
    {
      year: '2022',
      title: 'Brand Identity Specialist',
      description: 'Specialized in creating comprehensive brand identities for startups and established businesses.',
      icon: Target
    }
  ]

  const values: Value[] = [
    {
      title: 'Creativity First',
      description: 'We believe in pushing creative boundaries to deliver unique and memorable design solutions.',
      icon: Lightbulb
    },
    {
      title: 'Client-Centric',
      description: 'Every project is tailored to meet specific client needs and pverwhelme their expectations.',
      icon: Users
    },
    {
      title: 'Quality Assurance',
      description: 'We maintain the highest standards of quality in every design element and project delivery.',
      icon: Award
    },
    {
      title: 'Innovation',
      description: 'Staying ahead of design trends and incorporating cutting-edge techniques in our work.',
      icon: Zap
    }
  ]

  const stats: Stat[] = [
    {
      number: '150+',
      label: 'Projects Completed',
      icon: CheckCircle
    },
    {
      number: '50+',
      label: 'Happy Clients',
      icon: Users
    },
    {
      number: '3+',
      label: 'Years Experience',
      icon: Clock
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      icon: Star
    }
  ]

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 pt-16">
      {/* Hero Section */}
      <section className="pt-8 pb-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-slate-900 dark:via-indigo-900 dark:to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <User className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">About Neth Digitals</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Crafting Digital 
              <span className="text-yellow-400 block">Experiences</span>
              That Matter
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              We're passionate about transforming ideas into stunning visual realities. 
              With years of expertise and a keen eye for detail, we bring your brand's vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Download className="w-5 h-5 inline mr-2" />
                Download Portfolio
              </button>
              <button className="px-8 py-4 border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-semibold rounded-xl transition-all duration-300">
                <Mail className="w-5 h-5 inline mr-2" />
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-16 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {[
              { id: 'story', label: 'Our Story' },
              { id: 'skills', label: 'Skills' },
              { id: 'journey', label: 'Journey' },
              { id: 'values', label: 'Values' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium rounded-lg transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Story */}
          {activeTab === 'story' && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    The Story Behind 
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Neth Digitals</span>
                  </h2>
                  <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p>
                      Neth Digitals was born from a passion for creating meaningful digital experiences. 
                      What started as a freelance journey has evolved into a comprehensive design studio 
                      that serves clients worldwide.
                    </p>
                    <p>
                      Our founder's journey began with a simple belief: great design has the power to 
                      transform businesses and connect with audiences on an emotional level. This philosophy 
                      continues to drive every project we undertake.
                    </p>
                    <p>
                      Today, we specialize in brand identity, digital design, video production, and 
                      comprehensive creative solutions that help businesses stand out in the digital landscape.
                    </p>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl">
                    <div className="flex items-start">
                      <Heart className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Our Mission</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          To empower businesses with exceptional design solutions that not only look stunning 
                          but also drive meaningful results and create lasting connections with their audience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
                    <Image
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop"
                      alt="Creative workspace showing modern design tools and setup"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                  </div>
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <Lightbulb className="w-16 h-16 text-black" />
                  </div>
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                    <Palette className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center group">
                  <MapPin className="w-12 h-12 text-indigo-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">Port Harcourt, Rivers State, Nigeria</p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center group">
                  <Calendar className="w-12 h-12 text-indigo-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Availability</h3>
                  <p className="text-gray-600 dark:text-gray-300">Mon - Fri: 9AM - 6PM WAT</p>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center group">
                  <TrendingUp className="w-12 h-12 text-indigo-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Growth</h3>
                  <p className="text-gray-600 dark:text-gray-300">Expanding globally since 2024</p>
                </div>
              </div>
            </div>
          )}

          {/* Skills */}
          {activeTab === 'skills' && (
            <div className="animate-fade-in">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Technical <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Mastering industry-leading tools and technologies to deliver exceptional design solutions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon
                  return (
                    <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 group">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {skill.name}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{skill.category}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                          <span>Proficiency</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                          <div
                            className="h-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        {skill.experience} experience
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Journey */}
          {activeTab === 'journey' && (
            <div className="animate-fade-in">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Key milestones and achievements that shaped our growth and expertise
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-indigo-500 to-purple-600 h-full"></div>
                
                <div className="space-y-12">
                  {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon
                    return (
                      <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                        <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 group">
                            <div className="flex items-start">
                              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                <IconComponent className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-indigo-600 mb-2">{achievement.year}</div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                  {achievement.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                  {achievement.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="w-8 h-8 bg-white dark:bg-slate-900 border-4 border-indigo-500 rounded-full flex-shrink-0 z-10"></div>
                        
                        <div className="flex-1 hidden md:block"></div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Values */}
          {activeTab === 'values' && (
            <div className="animate-fade-in">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Core Values</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  The principles that guide every decision we make and every project we undertake
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => {
                  const IconComponent = value.icon
                  return (
                    <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 group">
                      <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  )
                })}
              </div>

              {/* CTA Section */}
              <div className="mt-20 text-center">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
                  <h3 className="text-3xl font-bold mb-6">Ready to Work with Us?</h3>
                  <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                    Let's discuss your project and see how we can bring your vision to life 
                    with our expertise and passion for professional design.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Start a Project
                    </button>
                    <button className="px-8 py-4 border-2 border-white/50 hover:border-white hover:bg-white/10 font-semibold rounded-xl transition-all duration-300">
                      Schedule a Call
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}