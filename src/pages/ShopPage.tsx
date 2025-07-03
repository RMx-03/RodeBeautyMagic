import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp, Filter, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  "All Products",
  "Hair Extensions",
  "Wigs",
  "Fashion",
  "Accessories",
  "Shoes",
  "Hair Products",
  "Skincare Products",
  "Men's Collection"
];

const products = [
  {
    id: 1,
    name: "Premium Hair Extensions",
    category: "Hair Extensions",
    price: 2499,
    image: "https://images.unsplash.com/photo-1618220324190-8b1e931a3a73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    reviews: 124,
    gradient: "from-purple-400 to-pink-400"
  },
  {
    id: 2,
    name: "Braided Wig",
    category: "Wigs",
    price: 3999,
    image: "https://images.unsplash.com/photo-1604772659841-a1612f9aa8bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 4.9,
    reviews: 87,
    gradient: "from-blue-400 to-purple-500"
  },
  {
    id: 3,
    name: "African Print Dress",
    category: "Fashion",
    price: 2899,
    image: "https://images.unsplash.com/photo-1590939076112-bd0c9a321cc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 4.7,
    reviews: 56,
    gradient: "from-green-400 to-blue-500"
  },
  {
    id: 4,
    name: "Beaded Necklace Set",
    category: "Accessories",
    price: 1299,
    image: "https://images.unsplash.com/photo-1615655532138-8f2d470ecc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 4.5,
    reviews: 38,
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    id: 5,
    name: "Leather Sandals",
    category: "Shoes",
    price: 1899,
    image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 4.6,
    reviews: 45,
    gradient: "from-red-400 to-pink-500"
  },
  {
    id: 6,
    name: "Shea Moisture Shampoo",
    category: "Hair Products",
    price: 999,
    image: "https://images.unsplash.com/photo-1597354984706-fac992d9306f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    reviews: 73,
    gradient: "from-indigo-400 to-purple-600"
  },
  {
    id: 7,
    name: "African Black Soap",
    category: "Skincare Products",
    price: 499,
    image: "https://images.unsplash.com/photo-1612532275214-e4ca76d0e4d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 4.9,
    reviews: 112,
    gradient: "from-teal-400 to-blue-600"
  },
  {
    id: 8,
    name: "Men's African Print Shirt",
    category: "Men's Collection",
    price: 1799,
    image: "https://images.unsplash.com/photo-1549826687-4aeb86f0ac4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 4.7,
    reviews: 58,
    gradient: "from-orange-400 to-red-500"
  }
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [sortBy, setSortBy] = useState("featured");
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  const filteredProducts = selectedCategory === "All Products" 
    ? products 
    : products.filter(product => product.category === selectedCategory);
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0; // featured - default order
  });

  const handleWhatsAppContact = (product: any, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const message = `Hi! I'm interested in the ${product.name} (₹${product.price}). Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/918050265232?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white">
      {/* Shop Header */}
      <div className="bg-gradient-to-r from-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Shop African Products</h1>
          <p className="mt-4 text-lg text-gray-600">
            Browse our collection of authentic African beauty products
          </p>
        </div>
      </div>
      
      {/* Shop Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar / Categories */}
          <div className="w-full lg:w-64 flex-shrink-0 mb-8 lg:mb-0 lg:mr-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <Filter size={18} className="mr-2" />
                Categories
              </h2>
              
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-sm transition duration-200 ${
                      selectedCategory === category
                        ? "bg-pink-100 text-pink-500 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-between mb-8">
              <p className="text-sm text-gray-500">
                Showing {sortedProducts.length} products
              </p>
              
              <div className="relative">
                <button 
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center space-x-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-50"
                >
                  <span>Sort by: {sortBy === "featured" ? "Featured" : sortBy === "price-low" ? "Price: Low to High" : sortBy === "price-high" ? "Price: High to Low" : "Rating"}</span>
                  {isSortOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                
                {isSortOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 py-1">
                    <button 
                      onClick={() => { setSortBy("featured"); setIsSortOpen(false); }}
                      className={`block px-4 py-2 text-sm w-full text-left ${sortBy === "featured" ? "text-pink-500 bg-pink-50" : "text-gray-700 hover:bg-gray-50"}`}
                    >
                      Featured
                    </button>
                    <button 
                      onClick={() => { setSortBy("price-low"); setIsSortOpen(false); }}
                      className={`block px-4 py-2 text-sm w-full text-left ${sortBy === "price-low" ? "text-pink-500 bg-pink-50" : "text-gray-700 hover:bg-gray-50"}`}
                    >
                      Price: Low to High
                    </button>
                    <button 
                      onClick={() => { setSortBy("price-high"); setIsSortOpen(false); }}
                      className={`block px-4 py-2 text-sm w-full text-left ${sortBy === "price-high" ? "text-pink-500 bg-pink-50" : "text-gray-700 hover:bg-gray-50"}`}
                    >
                      Price: High to Low
                    </button>
                    <button 
                      onClick={() => { setSortBy("rating"); setIsSortOpen(false); }}
                      className={`block px-4 py-2 text-sm w-full text-left ${sortBy === "rating" ? "text-pink-500 bg-pink-50" : "text-gray-700 hover:bg-gray-50"}`}
                    >
                      Rating
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white rounded-lg shadow-md overflow-hidden group"
                >
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="relative h-60 overflow-hidden">
                      <div className={`w-full h-full bg-gradient-to-br ${product.gradient} flex items-center justify-center p-6`}>
                        <h3 className="text-white text-xl font-bold text-center leading-tight drop-shadow-lg">
                          {product.name}
                        </h3>
                      </div>
                      <div className="absolute top-2 right-2 bg-white bg-opacity-90 rounded-full px-2 py-1 text-xs font-medium flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-yellow-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {product.rating}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="text-xs font-medium text-pink-500 mb-1">{product.category}</div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">{product.name}</h3>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
                        <span className="text-sm text-gray-500">{product.reviews} reviews</span>
                      </div>
                    </div>
                  </Link>
                  
                  <div className="px-4 pb-4">
                    <button 
                      onClick={(e) => handleWhatsAppContact(product, e)}
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md transition duration-300 flex items-center justify-center space-x-2"
                    >
                      <MessageSquare size={16} />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
