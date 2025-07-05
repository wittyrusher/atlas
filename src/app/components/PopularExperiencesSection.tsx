'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Palmtree, Landmark, Mountain } from 'lucide-react';

interface Experience {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  hoverGradient: string;
  iconBg: string;
}

export default function PopularExperiencesSection(): React.ReactElement {
  const experiences: Experience[] = [
    {
      title: 'Tropical Escapes',
      description: 'Relax on pristine beaches and soak in the sun on our curated tropical getaways.',
      icon: <Palmtree className="w-12 h-12 text-yellow-500 mb-6" />,
      gradient: 'from-yellow-400/20 to-orange-400/20',
      hoverGradient: 'hover:from-yellow-400/30 hover:to-orange-400/30',
      iconBg: 'bg-yellow-100',
    },
    {
      title: 'City Adventures',
      description: 'Explore bustling cities and iconic landmarks with expert local guides.',
      icon: <Landmark className="w-12 h-12 text-blue-500 mb-6" />,
      gradient: 'from-blue-400/20 to-indigo-400/20',
      hoverGradient: 'hover:from-blue-400/30 hover:to-indigo-400/30',
      iconBg: 'bg-blue-100',
    },
    {
      title: 'Wildlife Safaris',
      description: 'Get up close with nature in India\'s & Africa\'s most stunning reserves.',
      icon: <Mountain className="w-12 h-12 text-green-500 mb-6" />,
      gradient: 'from-green-400/20 to-emerald-400/20',
      hoverGradient: 'hover:from-green-400/30 hover:to-emerald-400/30',
      iconBg: 'bg-green-100',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-[#013319] mb-6"
          >
            Popular Experiences
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover unforgettable adventures tailored to create lasting memories
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`group relative rounded-3xl p-8 bg-gradient-to-br ${exp.gradient} backdrop-blur-sm border border-white/20 shadow-xl transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl ${exp.hoverGradient} cursor-pointer overflow-hidden`}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-2xl ${exp.iconBg} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {exp.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#013319] mb-4 group-hover:text-[#03263a] transition-colors">
                  {exp.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {exp.description}
                </p>
                <div className="flex items-center text-[#03263a] font-semibold group-hover:text-[#f5c624] transition-colors">
                  <span>Learn More</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}