import React from 'react';
import { GraduationCap, Shield, MapPin, Camera, Star, Award } from 'lucide-react';

export default function SchoolTours() {
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

  return (
    <div className="bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 rounded-3xl shadow-2xl overflow-hidden">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 p-8 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
              <GraduationCap size={40} className="text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2">🏫 School Tours</h2>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-yellow-100 text-sm font-medium">4.9 • 2,500+ Happy Students</span>
              </div>
            </div>
          </div>
          <p className="text-xl text-yellow-100 leading-relaxed max-w-4xl">
            Atlas Hoppers organizes educational school tours that go beyond sightseeing—we create learning adventures that spark imagination and build confidence in young minds. Every destination is carefully vetted for safety, age-appropriateness, and experiential value.
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
        {/* Key Offerings Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg"></div>
            Key Offerings
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, index) => (
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

        {/* Add-On Services */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg"></div>
            Add-On Services
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((addon, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 text-sm font-medium">{addon}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 text-center">
          <button 
            onClick={handlePlanTour}
            className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Plan Your School Tour
          </button>
        </div>
      </div>
    </div>
  );
}