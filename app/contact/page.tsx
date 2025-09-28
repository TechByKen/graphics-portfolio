import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact - Get In Touch',
  description: 'Ready to start your next design project? Contact Neth Digitals for professional graphic design services and creative solutions.',
}

export default function Contact() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Let's Work <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Together</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to uplift your brand to the climax? Get in touch and let's discuss your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Get in Touch
            </h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-indigo-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">hello@nethdigitals.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-indigo-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">+234 (0) 816 688 5035</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-indigo-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">Port Harcourt, Rivers State, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-6 h-6 text-indigo-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Hours</h3>
                  <p className="text-gray-600 dark:text-gray-300">Mon - Sat: 9AM - 6PM WAT</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}