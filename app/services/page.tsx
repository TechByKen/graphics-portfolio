import { Metadata } from 'next'
import Image from 'next/image'
import { 
  Palette, 
  Code, 
  Video, 
  Camera, 
  CheckCircle, 
  Clock, 
  Star, 
  ArrowRight, 
  Zap,
  Award,
  Users,
  TrendingUp
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services - Professional Design Solutions',
  description: 'Comprehensive design services including brand identity, print design, digital graphics, and video production. Professional results tailored to your needs.',
}

const services = [
  {
    id: 1,
    name: "Brand Identity Design",
    description: "Complete brand packages that establish your unique visual identity and market presence",
    features: ["Logo Design & Variations", "Brand Guidelines & Style Guide", "Business Card Design", "Letterhead & Stationery", "Social Media Kit", "Brand Colors & Typography"],
    startingPrice: 500,
    deliveryTime: "5-7 days",
    software: ["Adobe Photoshop", "Adobe Illustrator"],
    icon: Palette,
    popular: true,
    gradient: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    name: "Print Design",
    description: "Professional print materials that make a lasting impression and drive business results",
    features: ["Brochures & Flyers", "Poster Design", "Packaging Design", "Banner & Signage", "Menu Design", "Marketing Collaterals"],
    startingPrice: 200,
    deliveryTime: "3-5 days",
    software: ["Corel Draw", "Adobe Photoshop"],
    icon: Code,
    popular: false,
    gradient: "from-green-500 to-teal-600"
  },
  {
    id: 3,
    name: "Digital Graphics",
    description: "Engaging digital content optimized for web and social media platforms",
    features: ["Social Media Graphics", "Web Banners", "Digital Advertisements", "Infographics", "Email Templates", "Icon Design"],
    startingPrice: 150,
    deliveryTime: "2-3 days",
    software: ["Canva", "Adobe Photoshop"],
    icon: Camera,
    popular: false,
    gradient: "from-pink-500 to-rose-600"
  },
  {
    id: 4,
    name: "Video Production",
    description: "Professional video editing and motion graphics that captivate your audience",
    features: ["Video Editing & Post-Production", "Motion Graphics", "Intro/Outro Creation", "Social Media Videos", "Promotional Videos", "Color Correction"],
    startingPrice: 300,
    deliveryTime: "7-10 days",
    software: ["Adobe Premiere Pro"],
    icon: Video,
    popular: false,
    gradient: "from-purple-500 to-indigo-600"
  }
]

const processSteps = [
  {
    step: 1,
    title: "Discovery & Consultation",
    description: "We start by understanding your vision, goals, and requirements through a detailed consultation.",
    icon: Users
  },
  {
    step: 2,
    title: "Concept Development",
    description: "Our team creates initial concepts and designs based on your brief and brand guidelines.",
    icon: Zap
  },
  {
    step: 3,
    title: "Design & Refinement",
    description: "We develop the chosen concept with multiple revisions to ensure perfection.",
    icon: Award
  },
  {
    step: 4,
    title: "Delivery & Support",
    description: "Final files are delivered with ongoing support for any questions or adjustments.",
    icon: TrendingUp
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director, TechStart",
    rating: 5,
    comment: "Neth Digitals transformed our brand identity completely. The logo and brand guidelines exceeded our expectations!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616c35de71b?w=60&h=60&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    role: "Restaurant Owner",
    rating: 5,
    comment: "The menu design and promotional materials helped increase our sales by 30%. Absolutely professional work!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
  },
  {
    name: "Emily Davis",
    role: "E-commerce Founder",
    rating: 5,
    comment: "Outstanding social media graphics and digital assets. Our engagement rates have never been higher!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
  }
]

export default function Services() {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-slate-900 dark:via-indigo-900 dark:to-purple-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Zap className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Professional Design Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Creative Solutions
              <br />
              <span className="text-yellow-400">That Drive Results</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              From brand identity to digital graphics, we provide comprehensive design services 
              that elevate your business and connect with your audience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                View Our Work
              </button>
              <button className="px-8 py-4 border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-semibold rounded-xl transition-all duration-300">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive design solutions tailored to meet your unique business needs and objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <div key={service.id} className="relative group">
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 h-full">
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute -top-4 left-8">
                        <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-semibold rounded-full shadow-lg">
                          Most Popular
                        </span>
                      </div>
                    )}

                    {/* Service Header */}
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent size={32} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">
                          {service.name}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Clock size={14} className="mr-1" />
                          {service.deliveryTime}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                          <CheckCircle size={16} className="text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Software Used */}
                    <div className="mb-6">
                      <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                        Software Used:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.software.map((soft, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                          >
                            {soft}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div>
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                          ${service.startingPrice}
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 ml-1">starting</span>
                      </div>
                      <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center">
                        Get Started
                        <ArrowRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Design Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures exceptional results and client satisfaction every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => {
              const IconComponent = step.icon
              return (
                <div key={step.step} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={32} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See what our clients say about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
                    <Image
                      src={testimonial.avatar}
                      alt={`${testimonial.name} - ${testimonial.role}`}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's collaborate to create stunning designs that elevate your business 
            and connect with your audience. Get started with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white hover:bg-gray-100 text-indigo-600 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Your Project
            </button>
            <button className="px-8 py-4 border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-semibold rounded-xl transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}