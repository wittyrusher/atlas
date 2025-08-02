import React, { useState } from 'react';
import { Building2, Briefcase, Users, Award, Star, Zap, ChevronDown, ChevronUp } from 'lucide-react';

export default function CollegeTrips() {
  const [isExpanded, setIsExpanded] = useState(false);

  const inclusions = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Plant & Facility Tours",
      description: "Access to factories, ports, tech parks, pharma labs, energy plants",
      color: "from-blue-500 to-indigo-400"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Academic Extensions",
      description: "Research center visits, university tie-ups, live project observations",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Professional Interactions",
      description: "Talks by engineers, entrepreneurs, startup founders, domain experts",
      color: "from-green-500 to-teal-400"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certification Workshops",
      description: "Digital marketing, AI/ML basics, leadership training sessions",
      color: "from-orange-500 to-red-400"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Skill-Building Itineraries",
      description: "Designed for Engineering, BBA/MBA, BSc/IT, Commerce streams",
      color: "from-cyan-500 to-blue-400"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Stay & Travel",
      description: "Budget and premium options, always hygienic and student-safe",
      color: "from-indigo-500 to-purple-400"
    }
  ];

  const extras = [
    "Certificate of Participation",
    "Comprehensive travel insurance",
    "Internship guidance on request",
    "Faculty-student group discounts",
    "Industry networking opportunities",
    "Career guidance sessions"
  ];

  const handleBookVisit = () => {
    // Navigate to contact page
    window.location.href = '/contact';
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-4 sm:p-6 lg:p-8 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
            <div className="p-2 sm:p-3 bg-white/20 rounded-xl sm:rounded-2xl backdrop-blur-sm self-start">
              <Building2 size={32} className="text-white sm:w-10 sm:h-10" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">🎓 College & Industrial Visits</h2>
              <div className="flex items-center gap-2">
                <div className="flex text-blue-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="sm:w-4 sm:h-4" fill="currentColor" />
                  ))}
                </div>
                <span className="text-blue-100 text-xs sm:text-sm font-medium">4.8 • 1,800+ Students Placed</span>
              </div>
            </div>
          </div>
          <p className="text-sm sm:text-lg lg:text-xl text-blue-100 leading-relaxed">
            Our college and IV tours bridge theory with reality, allowing students to witness the inner workings of industries, interact with experts, and broaden their professional horizon. Every trip is curated with an understanding of institutional learning objectives.
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
              className="w-full sm:flex-1 sm:max-w-xs flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Learn More</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            
            <button 
              onClick={handleBookVisit}
              className="w-full sm:flex-1 sm:max-w-xs bg-white text-gray-800 font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-blue-400 transform hover:scale-105 transition-all duration-300"
            >
              Book Industrial Visit
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
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex-shrink-0"></div>
              Top Inclusions
            </h3>
            
            <button
              onClick={toggleExpanded}
              className="self-start sm:self-auto flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span>Show Less</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>

          {/* All Inclusions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {inclusions.map((item, index) => (
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

          {/* Extras Available */}
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100 mb-6">
            <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex-shrink-0"></div>
              Extras Available
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {extras.map((extra, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm font-medium">{extra}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section when expanded */}
          <div className="text-center mb-8">
            <button 
              onClick={handleBookVisit}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 max-w-xs sm:max-w-none mx-auto"
            >
              Book Industrial Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}