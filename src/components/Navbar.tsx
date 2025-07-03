import { Menu, Search, MessageSquare, User, X } from 'lucide-react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = `Hi! I'd like to know more about your African beauty products.`;
    const whatsappUrl = `https://wa.me/918050265232?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md backdrop-blur-md' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Roda Beauty Magic
              </h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-pink-400 px-3 py-2 rounded-md font-medium transition duration-300">
              Home
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-pink-400 px-3 py-2 rounded-md font-medium transition duration-300">
              About
            </Link>
            <Link to="/shop" className="text-gray-800 hover:text-pink-400 px-3 py-2 rounded-md font-medium transition duration-300">
              Shop
            </Link>
            <Link to="/reviews" className="text-gray-800 hover:text-pink-400 px-3 py-2 rounded-md font-medium transition duration-300">
              Reviews
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-pink-400 px-3 py-2 rounded-md font-medium transition duration-300">
              Contact
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-pink-500 transition duration-300">
              <Search size={20} />
            </button>
            <button className="text-gray-600 hover:text-pink-500 transition duration-300">
              <User size={20} />
            </button>
            <button 
              onClick={handleWhatsAppClick}
              className="text-gray-600 hover:text-green-500 transition duration-300"
              title="Contact us on WhatsApp"
            >
              <MessageSquare size={20} />
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-pink-500 hover:bg-pink-50 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
            isScrolled ? 'bg-white' : 'bg-white/95 backdrop-blur-md'
          }`}>
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-pink-500 hover:bg-pink-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-pink-500 hover:bg-pink-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/shop" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-pink-500 hover:bg-pink-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/reviews" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-pink-500 hover:bg-pink-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-pink-500 hover:bg-pink-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="flex space-x-4 px-3 py-2">
              <button className="text-gray-600 hover:text-pink-500 transition duration-300">
                <Search size={20} />
              </button>
              <button className="text-gray-600 hover:text-pink-500 transition duration-300">
                <User size={20} />
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="text-gray-600 hover:text-green-500 transition duration-300"
                title="Contact us on WhatsApp"
              >
                <MessageSquare size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
