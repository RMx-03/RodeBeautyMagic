const MarqueeScroll = () => {
  return (
    <div className="bg-black text-white py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        <span className="mx-4 text-sm uppercase font-medium">African Beauty</span>
        <span className="mx-4 text-sm uppercase font-medium">●</span>
        <span className="mx-4 text-sm uppercase font-medium">African Heritage</span>
        <span className="mx-4 text-sm uppercase font-medium">●</span>
        <span className="mx-4 text-sm uppercase font-medium">Premium Products</span>
        <span className="mx-4 text-sm uppercase font-medium">●</span>
        <span className="mx-4 text-sm uppercase font-medium">Natural Ingredients</span>
        <span className="mx-4 text-sm uppercase font-medium">●</span>
        <span className="mx-4 text-sm uppercase font-medium">African Beauty</span>
        <span className="mx-4 text-sm uppercase font-medium">●</span>
        <span className="mx-4 text-sm uppercase font-medium">African Heritage</span>
        <span className="mx-4 text-sm uppercase font-medium">●</span>
        <span className="mx-4 text-sm uppercase font-medium">Premium Products</span>
      </div>
    </div>
  );
};

export default MarqueeScroll;
