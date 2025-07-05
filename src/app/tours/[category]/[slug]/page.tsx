'use client';

import { useParams } from 'next/navigation';
import { tours } from '../../../data/tours';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';

const listVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

export default function TourDetailPage() {
  const { slug } = useParams();
  const tour = tours.find((t) => t.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isBookingHovered, setIsBookingHovered] = useState(false);
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  if (!tour) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#f5c624] to-[#f59e0b] rounded-full flex items-center justify-center">
          <span className="text-white text-2xl">🗺️</span>
        </div>
        <h1 className="text-2xl font-bold text-[#013319] mb-2">Tour not found</h1>
        <p className="text-gray-600">The tour you're looking for doesn't exist.</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fefefe] via-[#f8fffe] to-[#f0fdf4] text-[#013319]">
      <Header />

      {/* Enhanced Hero Section */}
      <section ref={heroRef} className="relative h-[70vh] w-full overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <img
            src={tour.imageGallery[selectedImage]}
            alt={tour.title}
            className="object-cover w-full h-full transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </motion.div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-end pb-16 px-6 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="w-2 h-2 bg-[#f5c624] rounded-full animate-pulse"></span>
              <span className="text-white font-medium">{tour.days} Days Journey</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
              {tour.title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl leading-relaxed drop-shadow-lg">
              {tour.description.slice(0, 150)}...
            </p>
          </motion.div>
        </div>

        {/* Image Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {tour.imageGallery.map((_, i) => (
            <button
              key={i}
              onClick={() => setSelectedImage(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === selectedImage 
                  ? 'bg-[#f5c624] scale-125' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className="px-6 md:px-16 py-16 relative">
        {/* Floating Background Elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-[#f5c624]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-60 left-10 w-48 h-48 bg-[#013319]/5 rounded-full blur-3xl"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
          {/* Main Details */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="prose prose-lg max-w-none"
            >
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                {tour.description}
              </p>
            </motion.div>

            {/* Enhanced Image Gallery */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-[#f5c624] to-[#f59e0b] rounded-full"></span>
                Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {tour.imageGallery.map((src, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -10 }}
                    whileTap={{ scale: 0.95 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedImage(i)}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                      <img
                        src={src}
                        alt={`Tour image ${i + 1}`}
                        className="object-cover h-56 w-full group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white font-medium">View Image</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Enhanced Itinerary */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-gradient-to-r from-[#f5c624] to-[#f59e0b] rounded-full"></span>
                📍 Your Journey
              </h2>
              <div className="space-y-6">
                {tour.itinerary.map((item, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={listVariant}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="group relative"
                  >
                    <div className="bg-white hover:bg-gradient-to-r hover:from-[#f5c624]/5 hover:to-transparent p-6 rounded-2xl border-l-4 border-[#f5c624] shadow-sm hover:shadow-xl transition-all duration-500 backdrop-blur-sm">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#f5c624] to-[#f59e0b] rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {i + 1}
                        </div>
                        <div className="font-medium text-[#013319] leading-relaxed group-hover:text-[#013319] transition-colors">
                          {item}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Enhanced Inclusions & Exclusions */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Inclusions */}
              <div className="group relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-green-100 opacity-80"></div>
                <div className="relative p-8 backdrop-blur-sm border border-emerald-200/50 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                      <span className="text-white text-lg">✓</span>
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-800">What's Included</h3>
                  </div>
                  <ul className="space-y-4">
                    {tour.inclusions.map((item, i) => (
                      <motion.li
                        key={i}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={listVariant}
                        className="flex items-start gap-3 text-emerald-700 leading-relaxed group-hover:translate-x-2 transition-transform duration-300"
                      >
                        <span className="text-emerald-600 text-lg flex-shrink-0 mt-0.5">✔️</span>
                        <span className="font-medium">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Exclusions */}
              <div className="group relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-100 opacity-80"></div>
                <div className="relative p-8 backdrop-blur-sm border border-orange-200/50 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                      <span className="text-white text-lg">✕</span>
                    </div>
                    <h3 className="text-2xl font-bold text-orange-800">Not Included</h3>
                  </div>
                  <ul className="space-y-4">
                    {tour.exclusions.map((item, i) => (
                      <motion.li
                        key={i}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={listVariant}
                        className="flex items-start gap-3 text-orange-700 leading-relaxed group-hover:translate-x-2 transition-transform duration-300"
                      >
                        <span className="text-red-600 text-lg flex-shrink-0 mt-0.5">✖️</span>
                        <span className="font-medium">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Enhanced Sticky Booking Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="sticky top-28 h-fit"
          >
            <div className="relative overflow-hidden rounded-2xl">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f5c624]/5 to-[#013319]/5"></div>
              
              {/* Content */}
              <div className="relative p-8 border border-[#f5c624]/30 shadow-2xl backdrop-blur-sm">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold mb-2 text-[#013319]">{tour.title}</h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#f5c624] to-[#f59e0b] mx-auto rounded-full"></div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center p-4 bg-white/50 rounded-xl">
                    <span className="font-medium text-gray-700">Price</span>
                    <span className="text-2xl font-bold text-[#013319]">₹{tour.price}</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/50 rounded-xl">
                    <span className="font-medium text-gray-700">Duration</span>
                    <span className="text-xl font-semibold text-[#013319]">{tour.days} Days</span>
                  </div>
                </div>

                <motion.a
                  href={`https://wa.me/918805948784?text=I'm%20interested%20in%20the%20${encodeURIComponent(tour.title)}%20tour!`}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setIsBookingHovered(true)}
                  onMouseLeave={() => setIsBookingHovered(false)}
                  className="block relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r from-[#013319] to-[#025a28] transform transition-transform duration-500 ${isBookingHovered ? 'translate-x-0' : 'translate-x-full'}`}></div>
                  <div className="relative bg-gradient-to-r from-[#f5c624] to-[#f59e0b] text-white font-bold py-4 px-6 rounded-xl text-center text-lg shadow-lg">
                    <span className="flex items-center justify-center gap-2">
                      <span>📱</span>
                      Book via WhatsApp
                    </span>
                  </div>
                </motion.a>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    🔒 Secure booking • 📞 24/7 support • ✨ Best price guaranteed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}