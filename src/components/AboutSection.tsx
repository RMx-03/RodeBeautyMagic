import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:max-w-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Welcome to Roda Beauty Magic!</h2>
            <div className="mt-3 max-w-3xl mx-auto text-xl text-gray-600 sm:mt-4">
              <p className="mt-6">
                We are passionate about bringing authentic African beauty products to India. Our mission is to make high-quality African beauty essentials accessible to everyone who appreciates the rich traditions and natural ingredients that Africa has to offer.
              </p>
              <p className="mt-4">
                From hair extensions and wigs to skincare products and fashion, we curate the best products that celebrate African beauty and style.
              </p>
              
              <div className="mt-10 flex justify-center lg:justify-start">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex py-3 px-6 rounded-md shadow-md bg-gradient-to-r from-pink-400 to-pink-500 text-white font-medium"
                >
                  <a href="/about">Learn More About Us</a>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-10 lg:mt-0 relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative mx-auto w-full rounded-lg shadow-lg overflow-hidden">
              <img 
                className="w-full" 
                src="https://images.unsplash.com/photo-1544717684-1243da23b545?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="African beauty products showcase" 
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-yellow-400 opacity-20 rounded-full"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-pink-400 opacity-20 rounded-full"></div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400">
            Be Bold. Be Beautiful. Be African.
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
