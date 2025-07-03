import { motion } from "framer-motion";
import { MessageSquare, Star, ThumbsUp } from 'lucide-react';
import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    date: "May 15, 2025",
    rating: 5,
    review: "Absolutely love the hair extensions! They blend perfectly with my natural hair and the quality is exceptional. Will definitely be ordering more products soon.",
    likes: 24,
    product: "Premium Hair Extensions",
    images: ["https://images.unsplash.com/photo-1581582915067-ccd65342e3a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"]
  },
  {
    id: 2,
    name: "Aisha Patel",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    date: "June 2, 2025",
    rating: 4,
    review: "The shea butter cream is amazing for my dry skin. Absorbs quickly and keeps my skin moisturized all day. Would recommend to anyone with similar skin issues.",
    likes: 19,
    product: "African Shea Butter Cream"
  },
  {
    id: 3,
    name: "Rahul Kapoor",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    date: "June 20, 2025",
    rating: 5,
    review: "Purchased a shirt from the men's collection and the quality is superb. The fabric, the print, everything is just perfect. Looking forward to buying more items.",
    likes: 31,
    product: "African Print Shirt",
    images: ["https://images.unsplash.com/photo-1564009267138-6aff652dfb6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"]
  },
  {
    id: 4,
    name: "Shreya Gupta",
    avatar: "https://randomuser.me/api/portraits/women/25.jpg",
    date: "June 25, 2025",
    rating: 5,
    review: "I'm in love with the braided wig I ordered! The quality is amazing and it looks so natural. Customer service was also excellent when I had questions about installation. Highly recommend!",
    likes: 42,
    product: "Braided Wig",
    images: ["https://images.unsplash.com/photo-1611146607663-0b1d54b30093?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"]
  },
  {
    id: 5,
    name: "Kavita Reddy",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    date: "July 1, 2025",
    rating: 4,
    review: "The African black soap has completely transformed my skin! My acne has cleared up significantly after just 2 weeks of use. Only giving 4 stars because the packaging could be improved.",
    likes: 27,
    product: "African Black Soap"
  },
  {
    id: 6,
    name: "Vikas Singh",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    date: "July 5, 2025",
    rating: 5,
    review: "The leather sandals are so comfortable and stylish. Great craftsmanship and attention to detail. Perfect for the Indian summer!",
    likes: 18,
    product: "Leather Sandals",
    images: ["https://images.unsplash.com/photo-1534653299134-96a171b61581?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"]
  }
];

export default function ReviewsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [likedReviews, setLikedReviews] = useState<number[]>([]);
  
  const handleLike = (reviewId: number) => {
    if (likedReviews.includes(reviewId)) {
      setLikedReviews(likedReviews.filter(id => id !== reviewId));
    } else {
      setLikedReviews([...likedReviews, reviewId]);
    }
  };
  
  const filteredReviews = activeTab === "all" 
    ? reviews 
    : activeTab === "with-photos" 
      ? reviews.filter(review => review.images?.length) 
      : reviews.filter(review => review.rating === parseInt(activeTab));
  
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={18} 
        className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="bg-white">
      {/* Reviews Header */}
      <div className="bg-gradient-to-r from-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Customer Reviews</h1>
          <p className="mt-4 text-lg text-gray-600">
            See what our customers have to say about our products
          </p>
        </div>
      </div>
      
      {/* Reviews Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Write Review Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <div className="flex">
              <Star size={24} className="text-yellow-400 fill-yellow-400" />
              <Star size={24} className="text-yellow-400 fill-yellow-400" />
              <Star size={24} className="text-yellow-400 fill-yellow-400" />
              <Star size={24} className="text-yellow-400 fill-yellow-400" />
              <Star size={24} className="text-yellow-400 fill-yellow-400" />
            </div>
            <span className="text-lg font-medium text-gray-900">
              Based on {reviews.length} reviews
            </span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-pink-400 text-white font-medium rounded-md shadow-md hover:bg-pink-500 transition duration-300"
          >
            Write a Review
          </motion.button>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex overflow-x-auto pb-2 mb-8 border-b">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 mr-2 text-sm font-medium whitespace-nowrap ${
              activeTab === "all"
                ? "text-pink-500 border-b-2 border-pink-500"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            All Reviews
          </button>
          <button
            onClick={() => setActiveTab("5")}
            className={`px-4 py-2 mr-2 text-sm font-medium whitespace-nowrap ${
              activeTab === "5"
                ? "text-pink-500 border-b-2 border-pink-500"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            5 Star
          </button>
          <button
            onClick={() => setActiveTab("4")}
            className={`px-4 py-2 mr-2 text-sm font-medium whitespace-nowrap ${
              activeTab === "4"
                ? "text-pink-500 border-b-2 border-pink-500"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            4 Star
          </button>
          <button
            onClick={() => setActiveTab("with-photos")}
            className={`px-4 py-2 mr-2 text-sm font-medium whitespace-nowrap ${
              activeTab === "with-photos"
                ? "text-pink-500 border-b-2 border-pink-500"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            With Photos
          </button>
        </div>
        
        {/* Reviews List */}
        <div className="space-y-8">
          {filteredReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-100"
            >
              <div className="flex items-start">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">{review.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{review.date}</p>
                    </div>
                    <div className="flex mt-2 sm:mt-0">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  
                  <div className="mt-2">
                    <span className="text-sm font-medium text-pink-500">{review.product}</span>
                  </div>
                  
                  <p className="mt-3 text-gray-700">{review.review}</p>
                  
                  {review.images && review.images.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {review.images.map((image, i) => (
                        <img 
                          key={i} 
                          src={image} 
                          alt={`Review by ${review.name}`} 
                          className="w-24 h-24 object-cover rounded-md cursor-pointer hover:opacity-90 transition duration-300"
                        />
                      ))}
                    </div>
                  )}
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <button 
                      onClick={() => handleLike(review.id)}
                      className={`flex items-center text-sm transition duration-300 ${
                        likedReviews.includes(review.id) ? "text-pink-500" : "text-gray-500 hover:text-pink-500"
                      }`}
                    >
                      <ThumbsUp size={16} className="mr-1" fill={likedReviews.includes(review.id) ? "currentColor" : "none"} />
                      {likedReviews.includes(review.id) ? review.likes + 1 : review.likes}
                    </button>
                    
                    <button className="flex items-center text-sm text-gray-500 hover:text-pink-500 transition duration-300">
                      <MessageSquare size={16} className="mr-1" />
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
