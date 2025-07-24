'use client';

import { motion } from 'framer-motion';
import React from 'react';
import TourCard from './TourCard'; // Adjust import path as needed

interface Tour {
  slug: string;
  title: string;
  description: string;
  category: string;
  imageGallery: string[];
  price: number;
  days: number;
}

interface FeaturedToursProps {
  featuredTours: Tour[];
  className?: string;
}

export default function FeaturedTours({ 
  featuredTours, 
  className = "" 
}: FeaturedToursProps): React.ReactElement | null {
  // Don't render if no featured tours
  if (!featuredTours || featuredTours.length === 0) {
    return null;
  }

  return (
    <section className={`max-w-6xl mx-auto mb-16 mt-16 px-6 ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#013319] mb-4">Featured Tours</h2>
        <p className="text-gray-600 text-lg mb-6">Handpicked experiences you shouldn&apos;t miss</p>
        <motion.a
          href="/tours"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-[#013319] hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Explore All Tours
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredTours.map((tour, idx) => (
          <motion.div
            key={tour.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <TourCard
              title={tour.title}
              description={tour.description}
              link={`/tours/${tour.category}/${tour.slug}`}
              image={tour.imageGallery[0] || '/api/placeholder/400/300'}
              price={tour.price.toString()}
              duration={`${tour.days} days`}
              featured={true}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}