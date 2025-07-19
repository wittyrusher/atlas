'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PartnerLogosSection(): React.ReactElement {
  const logos = [
    { src: '/IAOTO.png', alt: 'IAOTO', link: 'https://www.iato.in/' },
    { src: '/IATA.png', alt: 'IATA', link: 'https://www.iata.org/' },
    { src: '/INDIGO.png', alt: 'IndiGo', link: 'https://www.goindigo.in/' },
    { src: '/AIR INDIA.png', alt: 'Air India', link: 'https://www.airindia.com/' },
    { src: '/MINISTRY OF TOURISM.png', alt: 'Ministry of Tourism', link: 'https://tourism.gov.in/' },
    { src: '/EUDUCATION MINSTRY.jpeg', alt: 'Ministry of Education', link: 'https://www.education.gov.in/' },
  ];

  // Triple the logos for ultra-smooth infinite scroll
  const infiniteLogos = [...logos, ...logos, ...logos];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-emerald-100/20 to-blue-100/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-4 -left-4 w-96 h-96 bg-gradient-to-tr from-blue-100/15 to-emerald-100/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Premium Header with Animated Underline */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#013319] via-emerald-700 to-blue-700 bg-clip-text text-transparent mb-4">
              Trusted By Industry Leaders
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto"
          >
            Partnering with the most respected organizations in travel, tourism, and education
          </motion.p>
        </div>

        {/* Premium Infinite Scroll Container */}
        <div className="relative">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />
          
          {/* Main Scrolling Container */}
          <div className="overflow-hidden py-8">
            <motion.div
              className="flex items-center gap-16 md:gap-20"
              animate={{
                x: [0, `-${100 / 3}%`],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                }
              }}
              style={{ width: "300%" }}
            >
              {infiniteLogos.map((logo, idx) => (
                <motion.div
                  key={`${logo.alt}-${idx}`}
                  className="flex-shrink-0 group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.a
                    href={logo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Glow Effect on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Logo Container with Premium Styling */}
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-white/50">
                      {/* Subtle animated border */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                      
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={140}
                        height={80}
                        className="w-28 sm:w-32 md:w-36 h-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10"
                      />
                    </div>
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>


      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}