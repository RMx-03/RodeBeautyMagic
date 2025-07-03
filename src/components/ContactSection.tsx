import { Instagram, MessageSquare, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-xl text-gray-600">Get in touch with us for any questions or inquiries</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-xl rounded-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-gray-900">Reach Out to Us</h3>
                  <p className="text-gray-600">
                    We'd love to hear from you! Whether you have a question about our products, delivery, or anything else, our team is ready to assist you.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-pink-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Phone</p>
                        <a href="tel:+919945825508" className="text-base text-gray-600 hover:text-pink-500 transition duration-300">
                          +91 9945825508
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                        <MessageSquare className="h-6 w-6 text-pink-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">WhatsApp</p>
                        <a href="https://wa.me/918050265232" className="text-base text-gray-600 hover:text-pink-500 transition duration-300">
                          +91 8050265232
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                        <Instagram className="h-6 w-6 text-pink-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Instagram</p>
                        <a href="https://www.instagram.com/rodabeutymagic" target="_blank" rel="noopener noreferrer" className="text-base text-gray-600 hover:text-pink-500 transition duration-300">
                          @rodabeutymagic
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-pink-400 to-orange-400 p-8 rounded-lg text-white">
                  <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/30">
                    <h3 className="text-xl font-bold mb-4">Quick Response</h3>
                    <p>
                      We aim to respond to all inquiries within 24 hours. For urgent matters, please contact us via WhatsApp for the fastest response.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
