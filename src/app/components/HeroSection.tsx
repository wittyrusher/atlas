'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Slide {
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    image: '/manali1.jpg',
    title: 'Explore the Mountains',
    description: 'Find peace and adventure in the Himalayan foothills.',
  },
  {
    image: '/manali2.jpg',
    title: 'Experience the Culture',
    description: 'Dive into the local traditions and vibrant festivals.',
  },
  {
    image: '/manali3.jpg',
    title: 'Relax in Nature',
    description: 'Unplug and rejuvenate in the lap of nature.',
  },
];

export default function HeroSection(): React.ReactElement {
  const [current, setCurrent] = useState<number>(0);
  const [imageError, setImageError] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleImageError = (index: number) => {
    setImageError(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Show image only if it hasn't errored */}
          {!imageError[current] && (
            <Image
              src={slides[current].image}
              alt={`Slide ${current + 1}`}
              fill
              className="object-cover"
              priority={current === 0}
              onError={() => handleImageError(current)}
            />
          )}

          {/* Fallback gradient background when image fails */}
          {imageError[current] && (
            <div className="absolute inset-0 bg-gradient-to-br from-[#03263a] via-[#024c68] to-[#03263a]" />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 text-white px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h1
                key={slides[current].title}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                {slides[current].title}
              </motion.h1>
              <motion.p
                key={slides[current].description}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-xl md:text-2xl lg:text-3xl mb-8 font-light opacity-90 max-w-3xl"
              >
                {slides[current].description}
              </motion.p>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  href="/tours"
                  className="inline-block bg-[#f5c624] text-[#03263a] px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  View Travel Packages
                </Link>
                <Link
                  href="/contact"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#03263a] transition-all duration-300"
                >
                  Plan Your Trip
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? 'bg-[#f5c624] scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
}