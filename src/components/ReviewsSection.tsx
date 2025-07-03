import { MessageSquare, Star, ThumbsUp } from 'lucide-react';
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    date: "May 15, 2025",
    rating: 5,
    review: "Absolutely love the hair extensions! They blend perfectly with my natural hair and the quality is exceptional. Will definitely be ordering more products soon.",
    likes: 24,
    product: "Premium Hair Extensions"
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
    product: "African Print Shirt"
  }
];

export default function ReviewsSection() {
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Customer Reviews</h2>
          <p className="mt-4 text-xl text-gray-600">Love our products? Let the world know!</p>
          
          <div className="mt-8 flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-pink-400 text-white font-medium rounded-md shadow-md hover:bg-pink-500 transition duration-300"
            >
              Leave a Review
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-pink-500 font-medium rounded-md shadow-md border border-pink-400 hover:bg-pink-50 transition duration-300"
            >
              View Customer Photos
            </motion.button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition duration-300"
            >
              <div className="px-6 py-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <img 
                      src={review.avatar} 
                      alt={review.name} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">{review.name}</h3>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-gray-600">{review.review}</p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-pink-500">{review.product}</span>
                    <div className="flex space-x-4 text-gray-500">
                      <button className="flex items-center text-sm hover:text-pink-500 transition duration-300">
                        <MessageSquare size={16} className="mr-1" />
                        Reply
                      </button>
                      <button className="flex items-center text-sm hover:text-pink-500 transition duration-300">
                        <ThumbsUp size={16} className="mr-1" />
                        {review.likes}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/reviews" className="text-pink-500 font-medium hover:text-pink-600 transition duration-300">
            View all reviews →
          </a>
        </div>
      </div>
    </section>
  );
}
