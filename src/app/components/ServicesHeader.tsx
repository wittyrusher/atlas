import React from 'react';
import { Star } from 'lucide-react';

const ServicesHeader = () => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
        Hoppico Services
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        From <span className="font-bold">custom group adventures</span> to <span className="font-bold">wellness retreats</span>, discover travel experiences crafted with <span className="font-bold">passion and precision</span> for every kind of explorer
      </p>
      <div className="flex items-center justify-center gap-2 mt-4">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" />
          ))}
        </div>
        <span className="text-gray-600 font-medium"><span className="font-bold">4.8</span> • <span className="font-bold">15,000+ Happy Travelers</span></span>
      </div>
    </div>
  );
};

export default ServicesHeader;