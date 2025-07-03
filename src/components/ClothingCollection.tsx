import { Link } from 'react-router-dom';

const ClothingCollection = () => {
  return (
    <div className="bg-gradient-to-r from-pink-400 to-orange-400 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="w-full h-80 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center p-8">
              <div className="text-center">
                <h3 className="text-white text-2xl font-bold mb-4 drop-shadow-lg">
                  African Beauty Products Collection
                </h3>
                <div className="grid grid-cols-2 gap-4 text-white text-sm">
                  <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                    <div className="font-semibold">Hair Care</div>
                    <div className="text-xs opacity-90">Extensions & Wigs</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                    <div className="font-semibold">Skin Care</div>
                    <div className="text-xs opacity-90">Natural Soaps</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                    <div className="font-semibold">Fashion</div>
                    <div className="text-xs opacity-90">African Prints</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                    <div className="font-semibold">Accessories</div>
                    <div className="text-xs opacity-90">Jewelry & More</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-16 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-white text-pink-500 px-2">BEAUTY</span><br />
              <span className="bg-white text-pink-500 px-2 inline-block mt-2">COLLECTION</span>
            </h2>
            <p className="text-white mb-8 max-w-md">
              Our beauty collection is crafted as a celebration of rich, versatile, and culturally-infused beauty traditions.
              Each product brings together centuries of African beauty wisdom with modern formulations for exceptional results.
            </p>
            <Link 
              to="/shop" 
              className="inline-block bg-white text-pink-500 px-6 py-3 font-medium self-start hover:bg-gray-100 transition duration-300"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothingCollection;
