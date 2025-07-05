'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function QuickAccessSection(): React.ReactElement {
  const categories = [
    {
      name: 'International',
      path: '/tours/international',
      image: '/bang 1.jpg',
      description: 'Discover breathtaking destinations across the globe',
      color: 'from-blue-500 to-purple-600',
      textColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      delay: '0ms'
    },
    {
      name: 'Domestic',
      path: '/tours/domestic',
      image: '/indiagate.jpg',
      description: 'Explore the hidden gems of your homeland',
      color: 'from-emerald-500 to-teal-600',
      textColor: 'text-emerald-600',
      iconBg: 'bg-emerald-100',
      delay: '100ms'
    },
    {
      name: 'Eco Tours',
      path: '/tours/eco',
      image: '/bang 6.jpg',
      description: 'Sustainable adventures in pristine nature',
      color: 'from-green-500 to-lime-600',
      textColor: 'text-green-600',
      iconBg: 'bg-green-100',
      delay: '200ms'
    },
    {
      name: 'Adventure',
      path: '/tours/adventure',
      image: '/adventureact.jpg',
      description: 'Thrilling experiences for the bold at heart',
      color: 'from-orange-500 to-red-600',
      textColor: 'text-orange-600',
      iconBg: 'bg-orange-100',
      delay: '300ms'
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#f5c624] to-amber-400 rounded-full text-sm font-medium text-[#013319] mb-6 shadow-lg">
            <span className="w-2 h-2 bg-[#013319] rounded-full animate-pulse"></span>
            Curated Travel Experiences
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#013319] mb-6 tracking-tight leading-tight">
            Discover Your Next
            <span className="block bg-gradient-to-r from-[#f5c624] to-amber-500 bg-clip-text text-transparent">
              Adventure
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose from our carefully crafted tour categories, each designed to create unforgettable memories
          </p>
        </div>

        {/* Unique Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
          {categories.map((category, idx) => {
            // Create unique positioning for each card
            const getGridClass = () => {
              switch(idx) {
                case 0: return 'lg:col-span-5 lg:row-span-2'; // Large card
                case 1: return 'lg:col-span-4 lg:row-span-1'; // Medium card
                case 2: return 'lg:col-span-3 lg:row-span-1'; // Small card
                case 3: return 'lg:col-span-7 lg:row-span-1'; // Wide card
                default: return 'lg:col-span-3';
              }
            };

            const getCardHeight = () => {
              switch(idx) {
                case 0: return 'h-96 md:h-[500px]'; // Tall
                case 1: return 'h-64 md:h-72'; // Medium
                case 2: return 'h-64 md:h-72'; // Medium
                case 3: return 'h-56 md:h-64'; // Short but wide
                default: return 'h-64';
              }
            };

            return (
              <Link
                key={category.name}
                href={category.path}
                className={`group block ${getGridClass()}`}
                style={{ 
                  animationDelay: category.delay,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className={`relative ${getCardHeight()} bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:rotate-1 border border-gray-100`}>
                  {/* Image Container */}
                  <div className="relative h-full overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-all duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-0 group-hover:opacity-80 transition-all duration-500`}></div>
                    
                    {/* Floating Badge */}
                    <div className={`absolute top-4 right-4 ${category.iconBg} backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 shadow-lg transform transition-all duration-300 group-hover:scale-110`}>
                      <div className={`w-3 h-3 ${category.color.replace('from-', 'bg-').split(' ')[0]} rounded-full animate-pulse`}></div>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                      <div className="transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        {/* Category Name */}
                        <h3 className={`text-2xl md:text-3xl font-bold text-white mb-2 ${idx === 0 ? 'md:text-4xl' : ''} drop-shadow-lg`}>
                          {category.name}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-white/90 text-sm md:text-base mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 leading-relaxed">
                          {category.description}
                        </p>

                        {/* CTA Button */}
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                          <span className="text-white font-semibold text-sm md:text-base">
                            Explore Now
                          </span>
                          <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:translate-x-1">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Can't find what you're looking for?</p>
          <Link 
            href="/tours" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#013319] to-emerald-800 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 hover:scale-105"
          >
            <span>View All Tours</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>

      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}