import { Clock, Instagram, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Contact Header */}
      <div className="bg-gradient-to-r from-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            We'd love to hear from you! Get in touch with our team.
          </p>
        </div>
      </div>
      
      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 bg-gradient-to-br from-pink-400 to-orange-400 text-white">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="mb-8">
                We're here to help with any questions about our products, delivery, or anything else you might need assistance with.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-white opacity-80" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p>Call & SMS: <a href="tel:+919945825508" className="hover:underline">+91 9945825508</a></p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <MessageSquare className="h-6 w-6 text-white opacity-80" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">WhatsApp</h3>
                    <p><a href="https://wa.me/918050265232" className="hover:underline">+91 8050265232</a></p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <Instagram className="h-6 w-6 text-white opacity-80" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Instagram</h3>
                    <p><a href="https://www.instagram.com/rodabeutymagic" target="_blank" rel="noopener noreferrer" className="hover:underline">@rodabeutymagic</a></p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-white opacity-80" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p><a href="mailto:info@rodabeautymagic.com" className="hover:underline">info@rodabeautymagic.com</a></p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-white opacity-80" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p>Bangalore, Karnataka, India</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="h-6 w-6 text-white opacity-80" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Business Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 10:00 AM - 6:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                    placeholder="What is this regarding?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white font-medium rounded-md shadow-md hover:from-pink-500 hover:to-pink-600 transition duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-600">Find answers to common questions about our products and services</p>
        </div>
        
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-100"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-2">How do I track my order?</h3>
            <p className="text-gray-600">
              Once your order is shipped, you'll receive a tracking number via email or WhatsApp. You can use this number to track your package's status and estimated delivery date.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-100"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-2">What is your return policy?</h3>
            <p className="text-gray-600">
              We accept returns within 7 days of delivery for unused products in their original packaging. Please contact us to initiate a return. Note that certain products like hair extensions and wigs have specific return conditions.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-100"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-2">Do you ship all across India?</h3>
            <p className="text-gray-600">
              Yes, we deliver to all major cities and most towns across India. Delivery times may vary depending on your location, typically ranging from 3-7 business days.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-100"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-2">What payment methods do you accept?</h3>
            <p className="text-gray-600">
              We accept various payment methods including credit/debit cards, UPI, net banking, and cash on delivery for select products and locations.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
