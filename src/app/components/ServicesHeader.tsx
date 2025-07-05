import React from 'react';
import { Star } from 'lucide-react';

const ServicesHeader = () => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
        Atlas Hoppers Services
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        From custom group adventures to wellness retreats, discover travel experiences crafted with passion and precision for every kind of explorer
      </p>
      <div className="flex items-center justify-center gap-2 mt-4">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" />
          ))}
        </div>
        <span className="text-gray-600 font-medium">4.8 • 15,000+ Happy Travelers</span>
      </div>
    </div>
  );
};

export default ServicesHeader;