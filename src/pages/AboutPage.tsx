import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-pink-50 to-yellow-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
            >
              About Roda Beauty Magic
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 max-w-2xl mx-auto text-xl text-gray-600"
            >
              Your No.1 African Products Plug in India 🇮🇳
            </motion.p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-400 opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-20 w-32 h-32 bg-pink-400 opacity-10 rounded-full translate-y-1/2"></div>
      </div>
      
      {/* Our Story Section */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="African beauty traditions" 
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-1/2 h-1/2">
                <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1585651546483-71154ea74067?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="African beauty products" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              <div className="absolute -top-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-pink-400 opacity-10 rounded-full"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-10 lg:mt-0"
            >
              <h2 className="text-3xl font-extrabold text-gray-900">Our Story</h2>
              <div className="mt-6 text-gray-600 space-y-6">
                <p>
                  Roda Beauty Magic was born out of a passion for authentic African beauty traditions and a vision to bring them to India. Our founder, who had experienced the incredible benefits of African beauty products firsthand, realized there was a gap in the Indian market for high-quality African beauty essentials.
                </p>
                <p>
                  Starting with a small collection of hair products, our brand has grown to encompass a wide range of authentic African beauty items, from luxurious hair extensions and wigs to nourishing skincare products and stunning fashion pieces.
                </p>
                <p>
                  What sets us apart is our commitment to authenticity and quality. Every product in our collection is carefully selected to ensure it represents the very best of African beauty traditions while meeting the needs of our diverse customer base in India.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Mission & Values */}
      <div className="py-16 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-extrabold text-gray-900">Our Mission & Values</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Bringing authentic African beauty to India with quality and integrity
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Authenticity</h3>
                <p className="text-gray-600">
                  We are committed to providing genuine African products that stay true to their roots and traditions.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Quality</h3>
                <p className="text-gray-600">
                  We handpick every product in our collection to ensure the highest quality and performance.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Inclusivity</h3>
                <p className="text-gray-600">
                  We believe in beauty for all and strive to offer products that cater to diverse needs and preferences.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Tagline Banner */}
      <div className="bg-gradient-to-r from-pink-400 to-orange-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-extrabold text-white sm:text-4xl"
          >
            Be Bold. Be Beautiful. Be African.
          </motion.h2>
        </div>
      </div>
    </div>
  );
}
