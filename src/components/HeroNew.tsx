import React from 'react';
import { Link } from 'react-router-dom';

const HeroNew = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center rounded-lg overflow-hidden mb-8">
          <div className="md:w-1/2 p-8 md:p-12">
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-4">
              <span className="bg-black text-white px-2">AFRICAN</span><br />
              <span className="block bg-black text-white px-2 inline-block mt-2">BEAUTY</span>
            </h1>
            <p className="text-gray-600 mb-8 max-w-md">
              Discover a sublime experience in the realm of beauty with African Beauty.
              Our products are meticulously crafted to enhance your beauty in celebration of
              Africa's rich beauty heritage.
            </p>
            <div className="flex space-x-4">
              <Link 
                to="/shop" 
                className="inline-block bg-black text-white px-6 py-3 font-medium"
              >
                Buy Product
              </Link>
              <Link 
                to="/about" 
                className="inline-block border border-black px-6 py-3 font-medium"
              >
                Explore Product
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1515688594390-b649af70d282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1095&q=80" 
              alt="African Beauty Products" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroNew;
