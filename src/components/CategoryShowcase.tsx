import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  image: string;
  title: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, link }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <Link 
            to={link} 
            className="bg-white px-4 py-2 text-sm uppercase font-medium"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
};

const CategoryShowcase = () => {
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      title: "Skin Care",
      link: "/shop/skin-care"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      title: "Hair Care",
      link: "/shop/hair-care"
    }
  ];

  const featuredCategories = [
    {
      id: 1,
      title: "Stylish Body Butter for Women",
      link: "/shop/body-butter",
      buttonText: "Shop Now",
      gradient: "from-pink-400 to-rose-500",
      features: ["Moisturizing", "Natural Ingredients", "Long Lasting", "African Shea Butter"]
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      title: "African Black Soap for All",
      link: "/shop/black-soap",
      buttonText: "Shop Now"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left side product cards */}
        <div className="grid grid-cols-1 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              image={product.image}
              title={product.title}
              link={product.link}
            />
          ))}
        </div>
        
        {/* Right side featured categories */}
        <div className="space-y-6">
          {featuredCategories.map((category) => (
            <div key={category.id} className="bg-gray-50 p-4 rounded-md">
              <h3 className="text-lg font-medium mb-2">
                {category.title}
              </h3>
              <div className="relative">
                {category.gradient ? (
                  <div className={`w-full h-60 bg-gradient-to-br ${category.gradient} rounded-md flex items-center justify-center p-6`}>
                    <div className="text-center text-white">
                      <h4 className="text-xl font-bold mb-4 drop-shadow-lg">
                        {category.title}
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        {category.features?.map((feature, index) => (
                          <div key={index} className="bg-white/20 rounded-lg px-3 py-2 backdrop-blur-sm">
                            <span className="font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-60 object-cover rounded-md"
                  />
                )}
                <div className="mt-3">
                  <Link 
                    to={category.link} 
                    className="inline-block bg-black text-white text-sm px-3 py-1 rounded-sm"
                  >
                    {category.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryShowcase;
