'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PartnerLogosSection(): React.ReactElement {
  const logos = [
    { src: '/IAOTO.png', alt: 'IAOTO', link: 'https://www.iato.in/' },
    { src: '/IATA.png', alt: 'IATA', link: 'https://www.iata.org/' },
    { src: '/INDIGO.png', alt: 'IndiGo', link: 'https://www.goindigo.in/' },
    { src: '/AIR INDIA.png', alt: 'Air India', link: 'https://www.airindia.com/' },
    { src: '/MINISTRY OF TOURISM.png', alt: 'Ministry of Tourism', link: 'https://tourism.gov.in/' },
    { src: '/EUDUCATION MINSTRY.jpeg', alt: 'Ministry of Education', link: 'https://www.education.gov.in/' },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-[#013319] mb-10"
        >
          Trusted By Our Partners
        </motion.h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, idx) => (
            <motion.a
              key={idx}
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="block"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-24 sm:w-28 h-auto object-contain"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
