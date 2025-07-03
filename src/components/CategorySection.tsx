import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Hair Extensions",
    image: "https://images.unsplash.com/photo-1619372202881-5539284d9e16?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "from-pink-400 to-pink-300"
  },
  {
    id: 2,
    name: "Wigs",
    image: "https://images.unsplash.com/photo-1595888160050-91c3453b6ddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "from-yellow-400 to-yellow-300"
  },
  {
    id: 3,
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1503160865246-e5878324ffe8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "from-orange-400 to-orange-300"
  },
  {
    id: 4,
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1575312069541-0d3c1d2b8735?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "from-pink-400 to-pink-300"
  },
  {
    id: 5,
    name: "Shoes",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "from-yellow-400 to-yellow-300"
  },
  {
    id: 6,
    name: "Hair Products",
    image: "https://images.unsplash.com/photo-1597307751356-d025d3cddc4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "from-orange-400 to-orange-300"
  },
  {
    id: 7,
    name: "Skincare Products",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "from-pink-400 to-pink-300"
  },
  {
    id: 8,
    name: "Men's Collection",
    image: "https://images.unsplash.com/photo-1548534955-dbe9946d9913?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "from-yellow-400 to-yellow-300"
  },
  {
    id: 9,
    name: "More African Products",
    image: "https://images.unsplash.com/photo-1516633630673-67bbad747022?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    color: "from-orange-400 to-orange-300"
  }
];

export default function CategorySection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Shop by Categories</h2>
          <p className="mt-4 text-xl text-gray-600">Discover our wide range of authentic African products</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group"
            >
              <Link to={`/shop/${category.id}`} className="block overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300">
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${category.color} opacity-80 group-hover:opacity-90 transition duration-300`}></div>
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white tracking-wide">{category.name}</h3>
                  </div>
                </div>
                <div className="py-4 px-5 bg-white">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Browse collection</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500 group-hover:translate-x-1 transition duration-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
