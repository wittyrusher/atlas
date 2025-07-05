'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero';
import CoreHighlights from '../components/CoreHighlights';
import TargetGroups from '../components/TargetGroups';
import TestimonialShowcase from '../components/TestimonialShowcase';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <section className="max-w-6xl mx-auto px-6 py-12">
          <AboutHero />
        </section>
        <CoreHighlights />
        <TargetGroups />
        <TestimonialShowcase />
      </main>
      <Footer />
    </div>
  );
}
