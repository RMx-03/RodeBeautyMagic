import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-pink-50 via-white to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 py-8 sm:py-16 md:py-20 lg:py-28 lg:max-w-2xl lg:w-full mx-4 sm:mx-6 lg:mx-8">
          <div className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 bg-gradient-to-r from-transparent to-white transform translate-x-1/2"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:text-5xl lg:mt-6 xl:text-6xl">
              <span className="block">Your No.1 African</span>
              <span className="block text-pink-400">Products Plug in India 🇮🇳</span>
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Original African Beauty, Delivered to You
            </p>
            
            <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
              <motion.a
                href="/shop"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-400 hover:bg-pink-500 md:py-4 md:text-lg md:px-10 transition duration-300 shadow-md"
              >
                Shop Now
              </motion.a>
              <motion.a
                href="/shop"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-pink-500 bg-white border-pink-400 hover:bg-pink-50 md:py-4 md:text-lg md:px-10 transition duration-300 shadow-md"
              >
                Explore Categories
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1611146790522-3c933c6dc22a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="African beauty products"
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-yellow-400 opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-20 w-24 h-24 bg-pink-400 opacity-10 rounded-full translate-y-1/2"></div>
    </div>
  );
}
