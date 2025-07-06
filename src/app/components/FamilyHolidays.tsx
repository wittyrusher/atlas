import React from 'react';
import Link from 'next/link';
import { Heart, Mountain, Waves, Baby, Hotel, Camera, Star, ArrowRight } from 'lucide-react';

export default function FamilyHolidays() {
  const highlights = [
    {
      icon: <Mountain className="w-6 h-6" />,
      title: "All-Generations Travel Plans",
      description: "Sightseeing, leisure, and downtime balanced for all age groups",
      color: "from-pink-500 to-rose-400"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Fun & Activity Packed",
      description: "Amusement parks, cooking classes, cultural fests, and nature trails",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: <Waves className="w-6 h-6" />,
      title: "Beach Escapes or Hill Getaways",
      description: "Maldives, Andamans, Kerala, Nainital, Bhutan & more",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Baby className="w-6 h-6" />,
      title: "Custom Plans for Special Needs",
      description: "Elder care, baby-proof rooms, dietary accommodations",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: <Hotel className="w-6 h-6" />,
      title: "Handpicked Stays",
      description: "Resorts with kids&apos; clubs, villas with private chefs, houseboats, heritage homes",
      color: "from-orange-500 to-amber-400"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Occasion Planning",
      description: "Surprise birthday/anniversary setups, photoshoots, and romantic dinners",
      color: "from-red-500 to-pink-400"
    }
  ];

  const addOns = [
    "Surprise travel reveals (for gifting trips)",
    "Multilingual guides for international tours",
    "Festive season packages (Diwali, Christmas, Summer Break)",
    "Dedicated travel buddy for senior citizens",
    "Child-friendly activity coordinators",
    "Family photography services"
  ];

  // Navigation functions would be removed since we're using simple links
  
  return (
    <div className="bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 rounded-3xl shadow-2xl overflow-hidden">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 p-8 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
              <Heart size={40} className="text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2">👨‍👩‍👧 Family Holidays</h2>
              <div className="flex items-center gap-2">
                <div className="flex text-pink-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-pink-100 text-sm font-medium">4.8 • 3,200+ Happy Families</span>
              </div>
            </div>
          </div>
          <p className="text-xl text-pink-100 leading-relaxed max-w-4xl">
            Family time is sacred, and we design holidays that feel effortless, exciting, and full of laughter. Whether you&apos;re a couple, a large joint family, or a parent planning a surprise, we offer fully customizable itineraries across India and abroad.
          </p>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 opacity-20">
          <div className="w-32 h-32 bg-white/10 rounded-full"></div>
        </div>
        <div className="absolute bottom-4 right-12 opacity-20">
          <div className="w-20 h-20 bg-white/10 rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Highlights Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-600 to-red-600 rounded-lg"></div>
            Highlights
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Add-Ons */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-r from-pink-600 to-red-600 rounded-lg"></div>
            Specialized Add-Ons
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((addon, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-pink-50 to-red-50 hover:from-pink-100 hover:to-red-100 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-pink-600 to-red-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 text-sm font-medium">{addon}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 text-center">
          <Link 
            href="/tours"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 no-underline"
          >
            Plan Family Holiday
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}