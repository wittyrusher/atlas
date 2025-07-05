'use client';

import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesList from '../components/ServicesList';
import SchoolTours from '../components/SchoolTours';
import CollegeTrips from '../components/CollegeTrips';
import CorporateGetaways from '../components/CorporateGetaways';
import FamilyHolidays from '../components/FamilyHolidays';
import ServicesHeader from '../components/ServicesHeader';

export default function ServicesPage() {
  useEffect(() => {
    // Handle hash-based scrolling when component mounts
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Smooth scroll to the element with offset for header
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
          // Add a small delay to ensure proper positioning
          setTimeout(() => {
            window.scrollBy(0, -100); // Adjust offset as needed
          }, 100);
        }
      }
    };

    // Handle initial page load
    handleHashScroll();

    // Handle hash changes (if user navigates using browser buttons)
    window.addEventListener('hashchange', handleHashScroll);

    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 py-12 mt-5">
        <ServicesHeader />
        
        {/* Individual Service Sections with IDs */}
        <div className="space-y-24">
          <div id="school-tours" className="scroll-mt-32">
            <SchoolTours />
          </div>
          
          <div id="college-trips" className="scroll-mt-32">
            <CollegeTrips />
          </div>
          
          <div id="corporate-getaways" className="scroll-mt-32">
            <CorporateGetaways />
          </div>
          
          <div id="family-holidays" className="scroll-mt-32">
            <FamilyHolidays />
          </div>
        </div>
        
        <div className='space-y-12 mt-16'>
          <ServicesList />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}