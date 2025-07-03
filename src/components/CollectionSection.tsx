import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  image?: string;
  gradient?: string;
  features?: string[];
  price: string;
  link: string;
}

interface CollectionTabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const CollectionTab: React.FC<CollectionTabProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`px-4 py-2 text-sm font-medium ${
        isActive ? 'bg-black text-white' : 'bg-white text-black border border-gray-300'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group">
      <div className="relative bg-gray-100 mb-3">
        {product.gradient ? (
          <div className={`w-full h-64 bg-gradient-to-br ${product.gradient} flex items-center justify-center p-4`}>
            <div className="text-center text-white">
              <h3 className="text-lg font-bold mb-3 drop-shadow-lg">
                {product.name}
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {product.features?.map((feature, index) => (
                  <div key={index} className="bg-white/20 rounded-md px-2 py-1 backdrop-blur-sm">
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-64 object-cover"
          />
        )}
        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 bg-black bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
          <Link 
            to={product.link} 
            className="bg-white text-black px-4 py-2 text-sm font-medium mb-2"
          >
            Add to Cart
          </Link>
          <Link 
            to={product.link} 
            className="bg-black text-white px-4 py-2 text-sm font-medium"
          >
            Buy Now
          </Link>
        </div>
      </div>
      <h3 className="text-sm font-medium">{product.name}</h3>
      <p className="text-sm">{product.price}</p>
    </div>
  );
};

const CollectionSection = () => {
  const [activeTab, setActiveTab] = useState('hoodies');
  
  const tabs = [
    { id: 'hoodies', label: 'Skin Care' },
    { id: 'caps', label: 'Hair Products' },
    { id: 'trending', label: 'Body Care' },
    { id: 'outwear', label: 'Accessories' },
    { id: 'accessories', label: 'Soaps' }
  ];
  
  const products = [
    {
      id: 1,
      name: 'Shea Butter Body Cream',
      image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      price: '$28.00',
      link: '/shop/product/1'
    },
    {
      id: 2,
      name: 'Organic African Black Soap',
      gradient: 'from-teal-500 to-cyan-600',
      features: ['100% Natural', 'Deep Cleansing', 'All Skin Types', 'Traditional Recipe'],
      price: '$15.00',
      link: '/shop/product/2'
    },
    {
      id: 3,
      name: 'Argan Oil Hair Treatment',
      image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      price: '$22.00',
      link: '/shop/product/3'
    },
    {
      id: 4,
      name: 'Natural Hair Growth Oil',
      gradient: 'from-emerald-500 to-green-600',
      features: ['Hair Growth', 'Natural Oils', 'Strengthening', 'Nourishing'],
      price: '$19.00',
      link: '/shop/product/4'
    }
  ];
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-bold mb-8 bg-black text-white px-2 inline-block">OUR COLLECTION</h2>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => (
          <CollectionTab 
            key={tab.id}
            label={tab.label}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CollectionSection;
