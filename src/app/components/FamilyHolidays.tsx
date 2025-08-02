import React, { useState } from 'react';
import { Heart, Mountain, Waves, Baby, Hotel, Camera, Star, ChevronDown, ChevronUp } from 'lucide-react';

export default function FamilyHolidays() {
  const [isExpanded, setIsExpanded] = useState(false);

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

  const handlePlanHoliday = () => {
    // Navigate to contact page
    window.location.href = '/contact';
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 p-4 sm:p-6 lg:p-8 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
            <div className="p-2 sm:p-3 bg-white/20 rounded-xl sm:rounded-2xl backdrop-blur-sm self-start">
              <Heart size={32} className="text-white sm:w-10 sm:h-10" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">👨‍👩‍👧 Family Holidays</h2>
              <div className="flex items-center gap-2">
                <div className="flex text-pink-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="sm:w-4 sm:h-4" fill="currentColor" />
                  ))}
                </div>
                <span className="text-pink-100 text-xs sm:text-sm font-medium">4.8 • 3,200+ Happy Families</span>
              </div>
            </div>
          </div>
            <p className="text-sm sm:text-lg lg:text-xl text-pink-100 leading-relaxed">
            Family time is sacred, and we design holidays that feel effortless, exciting, and full of laughter. Whether you&apos;re a couple, a large joint family, or a parent planning a surprise, we offer fully customizable itineraries across India and abroad.
          </p>
        </div>
        
        {/* Decorative Elements - Hidden on mobile */}
        <div className="hidden sm:block absolute top-4 right-4 opacity-20">
          <div className="w-20 h-20 lg:w-32 lg:h-32 bg-white/10 rounded-full"></div>
        </div>
        <div className="hidden sm:block absolute bottom-4 right-8 lg:right-12 opacity-20">
          <div className="w-12 h-12 lg:w-20 lg:h-20 bg-white/10 rounded-full"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Action Buttons - Collapsed State */}
        {!isExpanded && (
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-lg mx-auto">
            <button
              onClick={toggleExpanded}
              className="w-full sm:flex-1 sm:max-w-xs flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-red-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Learn More</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            <button 
              onClick={handlePlanHoliday}
              className="w-full sm:flex-1 sm:max-w-xs bg-white text-gray-800 font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-pink-400 transform hover:scale-105 transition-all duration-300"
            >
              Plan Family Holiday
            </button>
          </div>
        )}

        {/* Expanded Content */}
        <div className={`transition-all duration-700 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[5000px] opacity-100 mt-0' : 'max-h-0 opacity-0 mt-0'
        }`}>
          {/* Header with Close Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8 pt-4 sm:pt-0">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-pink-600 to-red-600 rounded-lg flex-shrink-0"></div>
              Highlights
            </h3>
            
            <button
              onClick={toggleExpanded}
              className="self-start sm:self-auto flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span>Show Less</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>

          {/* All Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${item.color} text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Specialized Add-Ons */}
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100 mb-6">
            <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-pink-600 to-red-600 rounded-lg flex-shrink-0"></div>
              Specialized Add-Ons
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {addOns.map((addon, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-pink-50 to-red-50 hover:from-pink-100 hover:to-red-100 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-600 to-red-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm font-medium">{addon}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section when expanded */}
          <div className="text-center mb-8">
            <button 
              onClick={handlePlanHoliday}
              className="w-full sm:w-auto bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 max-w-xs sm:max-w-none mx-auto"
            >
              Plan Family Holiday
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}