import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageSquare, Star } from 'lucide-react';

// Sample product data (in a real app, this would come from props or API)
const products = [
  {
    id: 1,
    name: "Premium Hair Extensions",
    category: "Hair Extensions",
    price: 2499,
    image: "https://images.unsplash.com/photo-1618220324190-8b1e931a3a73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    reviews: 124,
    description: "Premium quality hair extensions made from 100% human hair. Perfect for adding length and volume to your natural hair.",
    features: ["100% Human Hair", "Natural Look", "Easy to Apply", "Long Lasting"],
    gallery: [
      "https://images.unsplash.com/photo-1618220324190-8b1e931a3a73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1581582915067-ccd65342e3a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: 2,
    name: "Braided Wig",
    category: "Wigs",
    price: 3999,
    image: "https://images.unsplash.com/photo-1604772659841-a1612f9aa8bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 4.9,
    reviews: 87,
    description: "Beautiful braided wig handcrafted with precision. Authentic African styling that looks natural and feels comfortable.",
    features: ["Handcrafted Braids", "Comfortable Fit", "Authentic Style", "Breathable Cap"],
    gallery: [
      "https://images.unsplash.com/photo-1604772659841-a1612f9aa8bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1611146607663-0b1d54b30093?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: 3,
    name: "African Print Dress",
    category: "Fashion",
    price: 2899,
    image: "https://images.unsplash.com/photo-1590939076112-bd0c9a321cc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 4.7,
    reviews: 56,
    description: "Vibrant African print dress featuring traditional patterns and modern styling. Perfect for special occasions or everyday wear.",
    features: ["Authentic African Print", "Premium Fabric", "Comfortable Fit", "Modern Design"],
    gallery: [
      "https://images.unsplash.com/photo-1590939076112-bd0c9a321cc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1564009267138-6aff652dfb6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: 4,
    name: "Beaded Necklace Set",
    category: "Accessories",
    price: 1299,
    image: "https://images.unsplash.com/photo-1615655532138-8f2d470ecc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 4.5,
    reviews: 38,
    description: "Handcrafted beaded necklace set with authentic African beads. Each piece tells a story of African heritage and craftsmanship.",
    features: ["Handcrafted Beads", "Authentic Design", "Lightweight", "Unique Patterns"],
    gallery: [
      "https://images.unsplash.com/photo-1615655532138-8f2d470ecc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: 5,
    name: "Leather Sandals",
    category: "Shoes",
    price: 1899,
    image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 4.6,
    reviews: 45,
    description: "Handcrafted leather sandals made from premium African leather. Comfortable and stylish for everyday wear.",
    features: ["Premium Leather", "Handcrafted", "Comfortable Sole", "Durable"],
    gallery: [
      "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1534653299134-96a171b61581?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: 6,
    name: "Shea Moisture Shampoo",
    category: "Hair Products",
    price: 999,
    image: "https://images.unsplash.com/photo-1597354984706-fac992d9306f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 4.8,
    reviews: 73,
    description: "Natural shea butter shampoo that nourishes and strengthens your hair with authentic African ingredients.",
    features: ["Natural Shea Butter", "Chemical Free", "Strengthening Formula", "All Hair Types"],
    gallery: [
      "https://images.unsplash.com/photo-1597354984706-fac992d9306f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: 7,
    name: "African Black Soap",
    category: "Skincare Products",
    price: 499,
    image: "https://images.unsplash.com/photo-1612532275214-e4ca76d0e4d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 4.9,
    reviews: 112,
    description: "Traditional African black soap made from natural ingredients. Gentle cleansing for all skin types with moisturizing properties.",
    features: ["100% Natural", "Traditional Recipe", "All Skin Types", "Moisturizing"],
    gallery: [
      "https://images.unsplash.com/photo-1612532275214-e4ca76d0e4d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    id: 8,
    name: "Men's African Print Shirt",
    category: "Men's Collection",
    price: 1799,
    image: "https://images.unsplash.com/photo-1549826687-4aeb86f0ac4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 4.7,
    reviews: 58,
    description: "Stylish men's shirt featuring authentic African prints. Perfect blend of traditional patterns and modern fashion.",
    features: ["Authentic Print", "Comfortable Fit", "Premium Fabric", "Modern Cut"],
    gallery: [
      "https://images.unsplash.com/photo-1549826687-4aeb86f0ac4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    ]
  }
];

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id || '1'));

  if (!product) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-pink-500 hover:text-pink-600">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppContact = () => {
    const message = `Hi! I'm interested in the ${product.name} (₹${product.price}). Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/918050265232?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link 
          to="/shop" 
          className="flex items-center text-gray-600 hover:text-gray-900 transition duration-300"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Shop
        </Link>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="aspect-w-1 aspect-h-1 w-full"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
            
            {product.gallery && product.gallery.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {product.gallery.slice(1).map((img, index) => (
                  <motion.img 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    src={img} 
                    alt={`${product.name} ${index + 2}`}
                    className="w-full h-32 object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm font-medium text-pink-500 mb-2">{product.category}</p>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              
              <p className="text-3xl font-bold text-gray-900 mb-6">₹{product.price}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp Contact Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppContact}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-4 px-6 rounded-lg transition duration-300 flex items-center justify-center space-x-2"
            >
              <MessageSquare size={20} />
              <span>Contact on WhatsApp</span>
            </motion.button>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Need Help?</h4>
              <p className="text-sm text-gray-600 mb-3">
                Have questions about this product? Contact us directly on WhatsApp for instant support.
              </p>
              <div className="space-y-1 text-sm text-gray-600">
                <p>📞 Call & SMS: +91 9945825508</p>
                <p>💬 WhatsApp: +91 8050265232</p>
                <p>📧 Email: info@rodabeautymagic.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage; 