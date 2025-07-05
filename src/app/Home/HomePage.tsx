'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import PartnerLogosSection from '../components/PartnerLogosSection';
import TestimonialShowcase  from '../components/TestimonialShowcase';
import PopularExperiencesSection from '../components/PopularExperiencesSection';
import QuickAccessSection from '../components/QuickAccessSection';

export default function HomePage(): React.ReactElement {
  return (
    <section className="min-h-screen bg-blue-50 text-gray-800">
      <Header />
      <HeroSection />
      <QuickAccessSection />
      <PartnerLogosSection />
      <TestimonialShowcase/>
      <PopularExperiencesSection />
      <Footer />
    </section>
  );
}
