'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import PartnerLogosSection from '../components/PartnerLogosSection';
import TestimonialShowcase from '../components/TestimonialShowcase';
import QuickAccessSection from '../components/QuickAccessSection';
import FeaturedTours from '../components/FeaturedTours';
import { tours } from '../data/tours';

export default function HomePage(): React.ReactElement {
  // Get first 3 tours as featured (you can modify this logic as needed)
  const featuredTours = tours.slice(3, 6);

  return (
    <section className="min-h-screen bg-blue-50 text-gray-800">
      <Header />
      <HeroSection />
      <QuickAccessSection />
      <FeaturedTours featuredTours={featuredTours} />
      <PartnerLogosSection />
      <TestimonialShowcase />
      <Footer />
    </section>
  );
}