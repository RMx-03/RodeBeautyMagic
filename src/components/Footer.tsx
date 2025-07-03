import { Instagram, MessageSquare, Phone } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 bg-white text-black px-2 inline-block">RODA BEAUTY MAGIC</h3>
            <p className="text-sm text-gray-300 mb-4">
              Your No.1 African Products Plug in India 🇮🇳. Authentic African beauty products bringing centuries of beauty wisdom to enhance your natural beauty.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/rodabeutymagic" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="tel:+919945825508" className="text-gray-300 hover:text-white">
                <Phone size={20} />
              </a>
              <a href="https://wa.me/918050265232" className="text-gray-300 hover:text-white">
                <MessageSquare size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-bold uppercase mb-4 text-white">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-sm text-gray-300 hover:text-white">All Products</Link></li>
              <li><Link to="/shop" className="text-sm text-gray-300 hover:text-white">Featured</Link></li>
              <li><Link to="/shop" className="text-sm text-gray-300 hover:text-white">New Arrivals</Link></li>
              <li><Link to="/shop" className="text-sm text-gray-300 hover:text-white">Bestsellers</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-bold uppercase mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/reviews" className="text-sm text-gray-300 hover:text-white">Customer Reviews</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-white">Contact Us</Link></li>
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-white">Our Story</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-bold uppercase mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-white">Help Center</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-white">Shipping Info</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-white">Returns</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8">
          <p className="text-sm text-gray-300 text-center">
            &copy; {new Date().getFullYear()} Roda Beauty Magic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
