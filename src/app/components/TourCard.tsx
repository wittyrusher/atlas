import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TourCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
  price?: string;
  duration?: string;
  featured?: boolean;
}

const TourCard: React.FC<TourCardProps> = ({ 
  title, 
  description, 
  link, 
  image, 
  price, 
  duration, 
  featured = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-2 -right-2 z-20 bg-gradient-to-r from-[#f5c624] to-[#f59e0b] text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
          ⭐ Featured
        </div>
      )}

      <a
        href={link}
        className="block h-full relative overflow-hidden rounded-2xl transition-all duration-700 hover:shadow-2xl"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8fffe] to-[#f0fdf4] opacity-90"></div>
        
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-[#f5c624] via-[#f59e0b] to-[#f5c624] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute inset-[2px] rounded-2xl bg-white"></div>

        {/* Content Container */}
        <div className="relative h-full flex flex-col">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-t-2xl">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.7 }}
            />
            
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Price Tag */}
            {price && (
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-[#013319] shadow-lg">
                ₹{price}
              </div>
            )}

            {/* Duration Badge */}
            {duration && (
              <div className="absolute top-4 right-4 bg-[#f5c624]/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-white shadow-lg">
                {duration}
              </div>
            )}

            {/* Hover Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-white font-semibold text-sm">
                View Details →
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-6 flex flex-col">
            <h3 className="text-xl font-bold mb-3 text-[#013319] group-hover:text-[#f5c624] transition-colors duration-300 leading-tight">
              {title}
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
              {description}
            </p>

            {/* Action Button */}
            <div className="relative overflow-hidden rounded-xl">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#013319] to-[#025a28]"
                initial={{ x: '-100%' }}
                animate={{ x: isHovered ? '0%' : '-100%' }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <div className="relative bg-gradient-to-r from-[#f5c624] to-[#f59e0b] text-white py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 group-hover:shadow-lg">
                <span className="flex items-center justify-center gap-2">
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    Explore Tour
                  </span>
                  <motion.span
                    animate={{ x: isHovered ? 4 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-8 right-8 w-16 h-16 bg-[#f5c624]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="absolute bottom-8 left-8 w-20 h-20 bg-[#013319]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </a>
    </motion.div>
  );
};

export default TourCard;