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

const quickFilters = [
  { label: '🏖️ Beach', searchTerm: 'goa' },
  { label: '🏔️ Mountains', searchTerm: 'himachal' },
  { label: '🏝️ Islands', searchTerm: 'kerala' },
  { label: '🏜️ Desert', searchTerm: 'rajasthan' },
];

export default function ToursPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filters, setFilters] = useState<TravelFilterState>({
    traveler: null,
    category: 'all',
    recommendedSlugs: null,
  });

  // ── Newsletter subscribe state ─────────────────────
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [subMessage, setSubMessage] = useState('');

  const handleSubscribe = async () => {
    const trimmed = email.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);

    if (!isValidEmail) {
      setSubStatus('error');
      setSubMessage('Please enter a valid email address.');
      return;
    }

    setSubStatus('loading');
    setSubMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Subscription failed');
      }

      setSubStatus('success');
      setSubMessage("You're on the list! Watch your inbox for exclusive deals.");
      setEmail('');

      // Reset back to idle after a while so the form is reusable
      setTimeout(() => {
        setSubStatus('idle');
        setSubMessage('');
      }, 5000);
    } catch (err) {
      setSubStatus('error');
      setSubMessage('Something went wrong. Please try again in a moment.');
    }
  };

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
      const rest = base.filter(t => !slugSet.has(t.slug));
      return [...recommended, ...rest];
    }

    return base;
  })();

  const recommendedSet = new Set(filters.recommendedSlugs ?? []);
  const featuredTours = tours.slice(0, 3);

  // ── Trending tours: a different slice from featured, ranked by price
  //    as a proxy for "most booked / premium" until real analytics are wired in.
  const trendingTours = [...tours]
    .filter(t => !featuredTours.some(f => f.slug === t.slug))
    .sort((a, b) => b.price - a.price)
    .slice(0, 8);

  const sectionTitle = () => {
    if (filters.category !== 'all') {
      return `${filters.category.charAt(0).toUpperCase() + filters.category.slice(1)} Tours`;
    }
    return 'All Tours';
  };

  const handleQuickFilter = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    setShowSuggestions(false);
  };

  // Get relevant destination suggestions based on search term
  const getSearchSuggestions = () => {
    if (!searchTerm.trim()) return popularDestinations;
    const q = searchTerm.toLowerCase();
    return popularDestinations.filter(dest =>
      dest.toLowerCase().includes(q)
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <Header />

      {/* ── ENHANCED INTERACTIVE HERO ─────────────────────────────── */}
      <section className="relative py-16 px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#013319] via-[#025228] to-emerald-900" />

        {/* Animated Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'radial-gradient(circle, #f5c624 1px, transparent 1px)', backgroundSize: '30px 30px' }}
          animate={{ backgroundPosition: ['0px 0px', '30px 30px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />

        {/* Floating Orbs - Decorative */}
        <motion.div className="absolute top-10 left-10 w-20 h-20 bg-[#f5c624] rounded-full opacity-10 blur-2xl" animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} />
        <motion.div className="absolute bottom-20 right-12 w-32 h-32 bg-emerald-400 rounded-full opacity-10 blur-3xl" animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 0.5 }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Main Content */}
          <div className="text-center text-white mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-medium text-[#f5c624]"
            >
              ✨ Discover Amazing Travel Experiences
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight leading-tight"
            >
              Explore Our{' '}
              <span className="bg-gradient-to-r from-[#f5c624] via-amber-300 to-yellow-200 bg-clip-text text-transparent">
                World of Tours
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm md:text-base text-white/80 max-w-xl mx-auto mb-8 leading-relaxed"
            >
              Extraordinary journeys for every kind of traveler — from serene escapes to thrilling adventures across breathtaking destinations.
            </motion.p>
          </div>

          {/* Enhanced Search Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto mb-8"
          >
            {/* Search Input */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f5c624]/20 to-amber-300/20 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />

              <div className="relative flex items-center">
                <svg className="absolute left-5 w-5 h-5 text-[#f5c624] z-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>

                <input
                  type="text"
                  placeholder="Search destinations, tours…"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  className="w-full pl-14 pr-5 py-4 text-gray-900 bg-white/95 backdrop-blur-md rounded-2xl border-2 border-white/30 hover:border-white/50 focus:border-[#f5c624] focus:outline-none focus:ring-0 transition-all duration-300 font-medium text-base placeholder:text-gray-400 shadow-xl"
                />

                {/* Clear Button */}
                {searchTerm && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setSearchTerm('')}
                    className="absolute right-5 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                )}
              </div>

              {/* Search Suggestions Dropdown */}
              <AnimatePresence>
                {showSuggestions && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 mt-3 bg-white/98 backdrop-blur-md rounded-2xl border border-white/40 shadow-2xl overflow-hidden z-50"
                  >
                    <div className="p-4">
                      {getSearchSuggestions().length > 0 ? (
                        <div className="space-y-1">
                          {getSearchSuggestions().map((dest, idx) => (
                            <motion.button
                              key={dest}
                              initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              onClick={() => handleQuickFilter(dest)}
                              className="w-full text-left px-4 py-2.5 text-gray-700 hover:bg-[#013319]/10 hover:text-[#013319] rounded-lg transition-all duration-200 font-medium flex items-center justify-between group"
                            >
                              <span>{dest}</span>
                              <span className="text-xs text-gray-400 group-hover:text-[#013319]">→</span>
                            </motion.button>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500 text-center py-4 text-sm">No destinations found</p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Quick Filter Pills */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 justify-center mb-3"
          >
            {quickFilters.map((filter, idx) => (
              <motion.button
                key={filter.label}
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => handleQuickFilter(filter.searchTerm)}
                className="px-5 py-2.5 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 hover:border-[#f5c624]/50 text-white rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg"
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Secondary CTA Text */}
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-white/60 text-xs font-medium"
          >
            ⬆️ Quick filters or search for your dream destination
          </motion.p>
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

        {/* ── TRENDING DESTINATIONS ─────────────────────
             Replaces the old plain-pill "Popular Destinations" list with
             real, clickable tours so the section actually helps people
             decide, instead of just naming places. */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-2">
            <div>
              <h2 className="text-3xl font-bold text-[#013319] mb-2">Trending Right Now</h2>
              <p className="text-gray-500 text-sm">Tours our travelers are booking the most this season</p>
            </div>
          </div>

          <div className="relative">
            <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              {trendingTours.map((tour, idx) => (
                <motion.a
                  key={tour.slug}
                  href={`/tours/${tour.category}/${tour.slug}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="group relative flex-shrink-0 w-64 snap-start rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={tour.imageGallery[0] || '/api/placeholder/300/200'}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-[#f5c624] text-[#013319]">
                      🔥 #{idx + 1} Trending
                    </span>
                    <span className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md">
                      {tour.days} days
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#013319] text-sm mb-1 line-clamp-1 group-hover:text-emerald-700 transition-colors">
                      {tour.title}
                    </h3>
                    <p className="text-gray-500 text-xs mb-3 line-clamp-2 leading-relaxed">
                      {tour.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#013319] font-extrabold text-sm">
                        ₹{tour.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1 group-hover:gap-1.5 transition-all">
                        View <span aria-hidden>→</span>
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Fade edges to hint at scrollability */}
            <div className="pointer-events-none absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-slate-50 to-transparent hidden md:block" />
          </div>
        </section>

        {/* ── NEWSLETTER ─────────────────────────────────
             Functional subscribe form: posts to /api/subscribe, which
             emails info@hoppico.in with the new subscriber's address. */}
        <section className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-[#013319] to-emerald-700 rounded-3xl p-10 text-center text-white relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{ backgroundImage: 'radial-gradient(circle, #f5c624 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#f5c624]/15 mb-4 text-2xl">
                ✉️
              </div>
              <h2 className="text-2xl font-bold mb-3">Stay Updated with Latest Tours</h2>
              <p className="text-sm mb-7 opacity-80">Get exclusive deals and early access to new destinations</p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubscribe();
                }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (subStatus === 'error') {
                      setSubStatus('idle');
                      setSubMessage('');
                    }
                  }}
                  disabled={subStatus === 'loading'}
                  className={`flex-1 px-5 py-3 rounded-xl text-gray-800 text-sm focus:outline-none focus:ring-4 transition-all disabled:opacity-60 ${subStatus === 'error'
                      ? 'ring-2 ring-red-400 focus:ring-red-300/40'
                      : 'focus:ring-[#f5c624]/30'
                    }`}
                />
                <button
                  type="submit"
                  disabled={subStatus === 'loading' || subStatus === 'success'}
                  className="px-7 py-3 bg-[#f5c624] text-[#013319] font-bold rounded-xl hover:bg-amber-400 transition-colors text-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[130px]"
                >
                  {subStatus === 'loading' && (
                    <span className="w-4 h-4 border-2 border-[#013319]/30 border-t-[#013319] rounded-full animate-spin" />
                  )}
                  {subStatus === 'success' ? 'Subscribed ✓' : subStatus === 'loading' ? 'Sending…' : 'Subscribe'}
                </button>
              </form>

              <AnimatePresence mode="wait">
                {subMessage && (
                  <motion.p
                    key={subStatus}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className={`text-xs mt-4 font-medium ${subStatus === 'error' ? 'text-red-300' : 'text-emerald-200'
                      }`}
                  >
                    {subStatus === 'success' ? '✓ ' : subStatus === 'error' ? '⚠ ' : ''}
                    {subMessage}
                  </motion.p>
                )}
              </AnimatePresence>

              <p className="text-[11px] text-white/40 mt-4">
                We respect your inbox — no spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}