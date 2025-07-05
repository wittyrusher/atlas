import React from 'react';
import { Users, Target, Heart, Mic, Trophy, Globe, Star } from 'lucide-react';

export default function CorporateGetaways() {
  const inclusions = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Customized Agendas",
      description: "Choose between wellness, leadership, innovation, or relaxation themes",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Wellness Retreats",
      description: "Yoga & meditation sessions, spa bookings, and nature treks",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Offsite Conferences",
      description: "AV setups, networking dinners, keynote speaker arrangements",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Gamified Team Building",
      description: "Problem-solving hunts, beach Olympics, escape room challenges",
      color: "from-orange-500 to-red-400"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Recognition Nights",
      description: "Awards & celebration dinners with curated menus and live entertainment",
      color: "from-yellow-500 to-amber-400"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Travel Across India or Abroad",
      description: "Hills of Himachal, coasts of Goa, jungles of Jim Corbett, Dubai, Thailand, Sri Lanka",
      color: "from-indigo-500 to-blue-400"
    }
  ];

  const addOns = [
    "Branded corporate goodies",
    "Onsite photographer & videographer",
    "CSR project inclusion",
    "Hybrid event tech setup",
    "Executive transportation",
    "Corporate branding & signage"
  ];

  const handlePlanRetreat = () => {
    // Navigate to contact page
    window.location.href = '/contact';
  };

  return (
    <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl shadow-2xl overflow-hidden">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 p-8 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
              <Users size={40} className="text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2">👔 Corporate Getaways</h2>
              <div className="flex items-center gap-2">
                <div className="flex text-green-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-green-100 text-sm font-medium">4.9 • 500+ Companies Trust Us</span>
              </div>
            </div>
          </div>
          <p className="text-xl text-green-100 leading-relaxed max-w-4xl">
            Take your team out for more than just a break. Atlas Hoppers' corporate getaways focus on culture, creativity, and connectivity. We turn destinations into dynamic hubs for growth, wellness, and collective momentum.
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
        {/* What's Included Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg"></div>
            What's Included
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inclusions.map((item, index) => (
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

        {/* Optional Add-Ons */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg"></div>
            Optional Add-Ons
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((addon, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-green-50 to-teal-50 hover:from-green-100 hover:to-teal-100 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 text-sm font-medium">{addon}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 text-center">
          <button 
            onClick={handlePlanRetreat}
            className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Plan Corporate Retreat
          </button>
        </div>
      </div>
    </div>
  );
}