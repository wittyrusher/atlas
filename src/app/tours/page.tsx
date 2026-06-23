'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tours } from '../data/tours';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TourCard from '../components/TourCard';
import FeaturedTours from '../components/FeaturedTours';
import TravelFilterSlider, { type TravelFilterState } from '../components/TravelFilterSlider';

const popularDestinations = [
  'Goa', 'Kerala', 'Rajasthan', 'Himachal',
  'Thailand', 'Dubai', 'Switzerland', 'Japan',
];

export default function ToursPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<TravelFilterState>({
    traveler: null,
    category: 'all',
    recommendedSlugs: null,
  });

  const filteredTours = (() => {
    // 1. Start from full list or category-filtered list
    let base = filters.category === 'all'
      ? tours
      : tours.filter(t => t.category === filters.category);

    // 2. If search term present, filter by search
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      base = base.filter(t =>
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q)
      );
    }

    // 3. If a traveler is selected AND slugs are provided, sort recommended first
    //    but still show all tours in category (recommended ones float to top with a badge)
    if (filters.recommendedSlugs && filters.recommendedSlugs.length > 0) {
      const slugSet = new Set(filters.recommendedSlugs);
      const recommended = base.filter(t => slugSet.has(t.slug));
      const rest        = base.filter(t => !slugSet.has(t.slug));
      return [...recommended, ...rest];
    }

    return base;
  })();

  const recommendedSet = new Set(filters.recommendedSlugs ?? []);
  const featuredTours  = tours.slice(0, 3);

  const sectionTitle = () => {
    if (filters.category !== 'all') {
      return `${filters.category.charAt(0).toUpperCase() + filters.category.slice(1)} Tours`;
    }
    return 'All Tours';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <Header />

      {/* ── COMPACT HERO ─────────────────────────────── */}
      <section className="relative py-12 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#013319] via-[#025228] to-emerald-900" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: 'radial-gradient(circle, #f5c624 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}
            className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight"
          >
            Explore Our{' '}
            <span className="bg-gradient-to-r from-[#f5c624] to-amber-300 bg-clip-text text-transparent">
              Amazing Tours
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 0.72 }} transition={{ duration: 0.55, delay: 0.1 }}
            className="text-sm md:text-base mb-7 max-w-xl mx-auto"
          >
            Extraordinary journeys for every kind of traveler — serene escapes to thrilling adventures.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, delay: 0.18 }}
            className="max-w-lg mx-auto"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search destinations, tours…"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 pl-11 text-gray-800 bg-white/95 rounded-xl shadow-lg border border-white/20 focus:outline-none focus:ring-4 focus:ring-[#f5c624]/30 text-sm transition-all"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="px-4 md:px-6 pb-12">

        {/* ── SMART FILTER SLIDER ──────────────────────── */}
        <section className="max-w-6xl mx-auto -mt-6 relative z-20 mb-14">
          <TravelFilterSlider onChange={setFilters} />
        </section>

        {/* ── TOURS GRID ───────────────────────────────── */}
        <section className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-[#013319]">{sectionTitle()}</h2>
              {filters.traveler && filters.recommendedSlugs && filters.recommendedSlugs.length > 0 && (
                <p className="text-xs text-emerald-600 mt-0.5 font-medium flex items-center gap-1">
                  <span>⭐</span>
                  Top picks for{' '}
                  <strong>{filters.traveler.charAt(0).toUpperCase() + filters.traveler.slice(1)}</strong>
                  {' '}shown first
                </p>
              )}
              {filters.traveler && (!filters.recommendedSlugs || filters.recommendedSlugs.length === 0) && (
                <p className="text-xs text-gray-400 mt-0.5">
                  Showing all tours — pick a category for smart picks
                </p>
              )}
            </div>
            <span className="text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full">
              {filteredTours.length} tours
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filters.category + filters.traveler + searchTerm}
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredTours.length > 0 ? (
                filteredTours.map((tour, idx) => {
                  const isRecommended = recommendedSet.has(tour.slug) && filters.traveler !== null;
                  return (
                    <motion.div
                      key={tour.slug}
                      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: idx * 0.04 }}
                      className="relative"
                    >
                      {/* Recommended badge */}
                      {isRecommended && (
                        <div
                          className="absolute -top-2 -right-2 z-10 text-[10px] font-extrabold px-2 py-0.5 rounded-full text-white shadow-md"
                          style={{ background: '#f97316' }}
                        >
                          ⭐ Top Pick
                        </div>
                      )}
                      <div className={isRecommended ? 'ring-2 ring-orange-400 ring-offset-2 rounded-2xl' : ''}>
                        <TourCard
                          title={tour.title}
                          description={tour.description}
                          link={`/tours/${tour.category}/${tour.slug}`}
                          image={tour.imageGallery[0] || '/api/placeholder/300/200'}
                          price={tour.price.toString()}
                          duration={`${tour.days} days`}
                          featured={false}
                        />
                      </div>
                    </motion.div>
                  );
                })
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

        {/* Featured Tours */}
        <FeaturedTours featuredTours={featuredTours} />

        {/* Popular Destinations */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#013319] mb-2">Popular Destinations</h2>
            <p className="text-gray-500 text-sm">Trending places our travelers love</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {popularDestinations.map((dest, idx) => (
              <motion.div
                key={dest}
                initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <div className="bg-white border border-gray-200 hover:bg-[#013319] hover:text-white hover:border-[#013319] text-gray-700 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer">
                  {dest}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-[#013319] to-emerald-700 rounded-3xl p-10 text-center text-white relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{ backgroundImage: 'radial-gradient(circle, #f5c624 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-3">Stay Updated with Latest Tours</h2>
              <p className="text-sm mb-7 opacity-80">Get exclusive deals and early access to new destinations</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input type="email" placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-xl text-gray-800 text-sm focus:outline-none focus:ring-4 focus:ring-[#f5c624]/30"
                />
                <button className="px-7 py-3 bg-[#f5c624] text-[#013319] font-bold rounded-xl hover:bg-amber-400 transition-colors text-sm">
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