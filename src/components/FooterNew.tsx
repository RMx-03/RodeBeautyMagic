import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const FooterNew = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 bg-black text-white px-2 inline-block">AFRICAN BEAUTY</h3>
            <p className="text-sm text-gray-600 mb-4">
              Celebrating African beauty traditions with premium, authentic products.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-800 hover:text-gray-600">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-800 hover:text-gray-600">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-800 hover:text-gray-600">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-bold uppercase mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/shop/skin-care" className="text-sm text-gray-600 hover:text-black">Skin Care</Link></li>
              <li><Link to="/shop/hair-care" className="text-sm text-gray-600 hover:text-black">Hair Care</Link></li>
              <li><Link to="/shop/body-care" className="text-sm text-gray-600 hover:text-black">Body Care</Link></li>
              <li><Link to="/shop/accessories" className="text-sm text-gray-600 hover:text-black">Accessories</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-bold uppercase mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-black">About Us</Link></li>
              <li><Link to="/reviews" className="text-sm text-gray-600 hover:text-black">Customer Reviews</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 hover:text-black">Contact Us</Link></li>
              <li><Link to="/faq" className="text-sm text-gray-600 hover:text-black">FAQs</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-bold uppercase mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-sm text-gray-600 hover:text-black">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-black">Privacy Policy</Link></li>
              <li><Link to="/shipping" className="text-sm text-gray-600 hover:text-black">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-sm text-gray-600 hover:text-black">Returns & Refunds</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-sm text-gray-600 text-center">
            &copy; {new Date().getFullYear()} African Beauty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
