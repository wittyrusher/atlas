import React, { useState } from 'react';
import { GraduationCap, Shield, MapPin, Camera, Star, Award, ChevronDown, ChevronUp } from 'lucide-react';

export default function SchoolTours() {
  const [isExpanded, setIsExpanded] = useState(false);

  const offerings = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "STEM-Based Tours",
      description: "Science museums, ISRO centers, biodiversity parks, planetariums",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Heritage & Cultural Walks", 
      description: "Guided storytelling at forts, palaces, temples, archaeological wonders",
      color: "from-amber-500 to-orange-400"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Nature & Wildlife Trails",
      description: "Jungle safaris, birdwatching, eco-camps in national parks",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Adventure Camps",
      description: "Camping, rope climbing, archery, survival skills under stars",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Leadership Programs",
      description: "Group challenges focused on decision-making and teamwork",
      color: "from-red-500 to-rose-400"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Complete Safety & Logistics",
      description: "AC transport, safe accommodation, licensed guides, 24x7 support",
      color: "from-indigo-500 to-blue-400"
    }
  ];

  const addOns = [
    "Trip kits (caps, IDs, journals)",
    "Custom itineraries by grade level", 
    "School-branded photo & video memory kits",
    "Female tour managers for safety",
    "Medical backup & insurance coverage",
    "Teacher orientation kits"
  ];

  const handlePlanTour = () => {
    // Navigate to contact page
    window.location.href = '/contact';
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 p-4 sm:p-6 lg:p-8 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
            <div className="p-2 sm:p-3 bg-white/20 rounded-xl sm:rounded-2xl backdrop-blur-sm self-start">
              <GraduationCap size={32} className="text-white sm:w-10 sm:h-10" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">🏫 School Tours</h2>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="sm:w-4 sm:h-4" fill="currentColor" />
                  ))}
                </div>
                <span className="text-yellow-100 text-xs sm:text-sm font-medium">4.9 • 2,500+ Happy Students</span>
              </div>
            </div>
          </div>
          <p className="text-sm sm:text-lg lg:text-xl text-yellow-100 leading-relaxed">
            Atlas Hoppers organizes educational school tours that go beyond sightseeing—we create learning adventures that spark imagination and build confidence in young minds. Every destination is carefully vetted for safety, age-appropriateness, and experiential value.
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
              className="w-full sm:flex-1 sm:max-w-xs flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Learn More</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            <button 
              onClick={handlePlanTour}
              className="w-full sm:flex-1 sm:max-w-xs bg-white text-gray-800 font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-yellow-400 transform hover:scale-105 transition-all duration-300"
            >
              Plan Your School Tour
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
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex-shrink-0"></div>
              What We Offer
            </h3>
            
            <button
              onClick={toggleExpanded}
              className="self-start sm:self-auto flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span>Show Less</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>

          {/* All Offerings Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {offerings.map((item, index) => (
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

          {/* Add-On Services */}
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100 mb-6">
            <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex-shrink-0"></div>
              Add-On Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {addOns.map((addon, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm font-medium">{addon}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section when expanded */}
          <div className="text-center mb-8">
            <button 
              onClick={handlePlanTour}
              className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 max-w-xs sm:max-w-none mx-auto"
            >
              Plan Your School Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}