'use client';

import { motion } from 'framer-motion';
import { Quote, Star, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    quote: "Atlas Hoppers organized one of the most seamless and educational industrial visits our college has had. Students loved it, and everything ran smoothly from travel to sessions!",
    author: "Dr. Mehta",
    position: "Dean of Engineering",
    location: "Pune",
    rating: 5,
    category: "Educational",
    avatar: "DM",
    color: "from-blue-500 to-cyan-500"
  },
  {
    quote: "Our corporate retreat was absolutely fantastic! The team bonding activities and beautiful locations helped us connect like never before. Highly professional service!",
    author: "Sarah Johnson",
    position: "HR Director",
    location: "Mumbai",
    rating: 5,
    category: "Corporate",
    avatar: "SJ",
    color: "from-purple-500 to-pink-500"
  },
  {
    quote: "The family holiday package was perfect for our multi-generational trip. From grandparents to toddlers, everyone had an amazing time. Thank you for creating magical memories!",
    author: "Raj Patel",
    position: "Software Engineer",
    location: "Bangalore",
    rating: 5,
    category: "Family",
    avatar: "RP",
    color: "from-green-500 to-teal-500"
  },
  {
    quote: "Our school trip to the science museum was incredibly well-organized. Students were engaged throughout, and the educational value was exceptional. Will definitely book again!",
    author: "Ms. Priya Sharma",
    position: "Principal",
    location: "Delhi",
    rating: 5,
    category: "School",
    avatar: "PS",
    color: "from-orange-500 to-red-500"
  }
];

export default function TestimonialShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-24 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-teal-400 to-green-400 rounded-full blur-lg"
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-3 rounded-full font-semibold text-sm mb-6 shadow-lg"
          >
            <Award className="w-5 h-5" />
            Client Love Stories
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent"
          >
            What Our Clients Say
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Real experiences from real people who trusted us with their journeys
          </motion.p>
        </motion.div>

        {/* Main Testimonial Card */}
        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/20 text-center relative overflow-hidden"
          >
            {/* Decorative Quote Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg"
            >
              <Quote className="w-8 h-8 text-gray-900" />
            </motion.div>

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={`inline-block bg-gradient-to-r ${currentTestimonial.color} text-white px-4 py-2 rounded-full text-sm font-semibold mb-8 shadow-lg`}
            >
              {currentTestimonial.category} Experience
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl leading-relaxed mb-8 font-medium text-white/90 max-w-4xl mx-auto"
            >
              &ldquo;{currentTestimonial.quote}&rdquo;
            </motion.blockquote>

            {/* Rating Stars */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex justify-center gap-1 mb-6"
            >
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                >
                  <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                </motion.div>
              ))}
            </motion.div>

            {/* Author Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center justify-center gap-4"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${currentTestimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                {currentTestimonial.avatar}
              </div>
              <div className="text-left">
                <p className="font-bold text-xl text-yellow-200">{currentTestimonial.author}</p>
                <p className="text-blue-200">{currentTestimonial.position}</p>
                <p className="text-blue-300 text-sm">{currentTestimonial.location}</p>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-full"></div>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Testimonial Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex justify-center gap-3 mt-12"
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-400 shadow-lg' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {[
            { number: "10,000+", label: "Happy Customers", icon: <Users className="w-8 h-8" /> },
            { number: "4.9/5", label: "Average Rating", icon: <Star className="w-8 h-8" /> },
            { number: "500+", label: "Successful Tours", icon: <Award className="w-8 h-8" /> }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.2, duration: 0.6 }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
            >
              <div className="text-yellow-400 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-blue-200">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}