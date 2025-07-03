import { Link } from 'react-router-dom';

const ClothingBanner = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-gray-600 mb-4 max-w-md">
              At African Beauty, we offer more than just skincare and haircare — we provide a
              complete solution for all your beauty needs. Our products are crafted with the finest
              ingredients and authentic African traditions to ensure a premium experience with every use.
            </p>
            <p className="text-gray-600 max-w-md">
              Discover our best-selling products that have gained a loyal following for their exceptional
              quality and remarkable results.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              BEAUTY AND<br />WELLNESS<br />COLLECTION
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClothingBanner;
