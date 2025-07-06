// app/tours/page.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tours } from '../data/tours';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TourCard from '../components/TourCard';

export default function ToursPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Tours', icon: '🌍', count: tours.length },
    { id: 'domestic', name: 'Domestic', icon: '🏞️', count: tours.filter(t => t.category === 'domestic').length },
    { id: 'international', name: 'International', icon: '✈️', count: tours.filter(t => t.category === 'international').length },
    { id: 'adventure', name: 'Adventure', icon: '🏔️', count: tours.filter(t => t.category === 'adventure').length },
    { id: 'eco', name: 'Eco Tours', icon: '🌿', count: tours.filter(t => t.category === 'eco').length },
  ];

  const filteredTours = tours.filter(tour => {
    const matchesCategory = activeFilter === 'all' || tour.category === activeFilter;
    const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tour.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get first 3 tours as featured (since there's no featured property)
  const featuredTours = tours.slice(0, 3);
  const popularDestinations = ['Goa', 'Kerala', 'Rajasthan', 'Himachal', 'Thailand', 'Dubai', 'Switzerland', 'Japan'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#013319] via-emerald-800 to-[#013319] opacity-95"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Explore Our
              <span className="block bg-gradient-to-r from-[#f5c624] to-amber-400 bg-clip-text text-transparent">
                Amazing Tours
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Discover extraordinary journeys crafted for every kind of traveler — from serene domestic escapes to thrilling international adventures
            </p>
          </motion.div>
          
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search tours, destinations, experiences..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-14 text-gray-800 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 focus:outline-none focus:ring-4 focus:ring-[#f5c624]/30 transition-all duration-300"
              />
              <svg className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { number: '500+', label: 'Tours Available' },
              { number: '50+', label: 'Destinations' },
              { number: '10K+', label: 'Happy Travelers' },
              { number: '15+', label: 'Years Experience' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-[#f5c624] mb-1">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <main className="px-6 pb-12">
        {/* Category Filter Section */}
        <section className="max-w-6xl mx-auto -mt-12 relative z-20 mb-16">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-center mb-8 text-[#013319]">Browse by Category</h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-[#013319] to-emerald-700 text-white shadow-lg'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-xl">{category.icon}</span>
                  <span>{category.name}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    activeFilter === category.id ? 'bg-white/20' : 'bg-[#f5c624] text-[#013319]'
                  }`}>
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tours Section */}
        {featuredTours.length > 0 && (
          <section className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#013319] mb-4">Featured Tours</h2>
              <p className="text-gray-600 text-lg">Handpicked experiences you shouldn&apos;t miss</p>
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
        )}

        {/* Popular Destinations */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#013319] mb-4">Popular Destinations</h2>
            <p className="text-gray-600 text-lg">Trending places our travelers love</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {popularDestinations.map((destination, idx) => (
              <motion.div
                key={destination}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 hover:from-[#013319] hover:to-emerald-700 text-gray-700 hover:text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  {destination}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Main Tours Grid */}
        <section className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[#013319]">
              {activeFilter === 'all' ? 'All Tours' : `${categories.find(c => c.id === activeFilter)?.name} Tours`}
            </h2>
            <div className="text-gray-600">
              {filteredTours.length} tour{filteredTours.length !== 1 ? 's' : ''} found
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter + searchTerm}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {filteredTours.length > 0 ? (
                filteredTours.map((tour, idx) => (
                  <motion.div
                    key={tour.slug}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                  >
                    <TourCard
                      title={tour.title}
                      description={tour.description}
                      link={`/tours/${tour.category}/${tour.slug}`}
                      image={tour.imageGallery[0] || '/api/placeholder/300/200'}
                      price={tour.price.toString()}
                      duration={`${tour.days} days`}
                      featured={false}
                    />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-gray-400 mb-2">No tours found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Newsletter Signup */}
        <section className="max-w-4xl mx-auto mt-20">
          <div className="bg-gradient-to-r from-[#013319] to-emerald-700 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/api/placeholder/800/400')] bg-cover bg-center opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Tours</h2>
              <p className="text-lg mb-8 opacity-90">Get exclusive deals and early access to new destinations</p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-2xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-[#f5c624]/30"
                />
                <button className="px-8 py-4 bg-[#f5c624] text-[#013319] font-bold rounded-2xl hover:bg-amber-400 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}