import React from 'react';
import { Building2, Briefcase, Users, Award, Star, Zap } from 'lucide-react';

export default function CollegeTrips() {
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

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl shadow-2xl overflow-hidden">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
              <Building2 size={40} className="text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2">🎓 College & Industrial Visits</h2>
              <div className="flex items-center gap-2">
                <div className="flex text-blue-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-blue-100 text-sm font-medium">4.8 • 1,800+ Students Placed</span>
              </div>
            </div>
          </div>
          <p className="text-xl text-blue-100 leading-relaxed max-w-4xl">
            Our college and IV tours bridge theory with reality, allowing students to witness the inner workings of industries, interact with experts, and broaden their professional horizon. Every trip is curated with an understanding of institutional learning objectives.
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
        {/* Top Inclusions Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
            Top Inclusions
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

        {/* Extras Available */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
            Extras Available
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {extras.map((extra, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 text-sm font-medium">{extra}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 text-center">
          <button 
            onClick={handleBookVisit}
            className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Book Industrial Visit
          </button>
        </div>
      </div>
    </div>
  );
}