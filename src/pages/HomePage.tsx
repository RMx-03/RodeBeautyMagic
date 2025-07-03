import HeroNew from '../components/HeroNew';
import MarqueeScroll from '../components/MarqueeScroll';
import CategoryShowcase from '../components/CategoryShowcase';
import CollectionSection from '../components/CollectionSection';
import ClothingBanner from '../components/ClothingBanner';
import ClothingCollection from '../components/ClothingCollection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroNew />
      <MarqueeScroll />
      <CategoryShowcase />
      <CollectionSection />
      <ClothingBanner />
      <ClothingCollection />
    </div>
  );
};

export default HomePage;
