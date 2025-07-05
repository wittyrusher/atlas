import React, { useState } from 'react';
import { Globe, Users, Map, Camera, HeartPulse, CalendarCheck, Backpack, Compass, Leaf, Star, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Custom Group Tours",
    icon: <Users className="w-6 h-6 md:w-8 md:h-8" />, 
    description: "Tailored to meet the interests and pace of specific groups with fully customized itineraries.",
    fullDescription: `Fully customized itineraries based on group preferences • Special arrangements like bonfires, group games, mini-conferences, local cultural immersions • Dedicated trip leader or tour coordinator • Choice of travel style: budget, premium, or luxury • Available across India and select international locations`,
    audience: "Alumni, photography clubs, societies, spiritual groups, cultural associations",
    rating: 4.9,
    reviews: "2.1k",
    color: "from-blue-500 to-cyan-400",
    bgColor: "from-blue-50 to-cyan-50",
    popular: true,
    comingSoon: false,
    bookingType: "tours" // Navigate to tours page
  },
  {
    id: 2,
    title: "Theme-Based Tours",
    icon: <Map className="w-6 h-6 md:w-8 md:h-8" />,
    description: "Go beyond sightseeing with specialized themed experiences and cultural immersions.",
    fullDescription: `Art & Culture: Rann Utsav, Hornbill Festival, Surajkund Mela, Jaipur Literature Festival • Film & TV: Bollywood Film City Mumbai, Ramoji Hyderabad, K-Drama Trails in Korea • Wildlife & Nature: Safari circuits (Kanha, Bandhavgarh, Kaziranga, Gir), Mangrove walks • Photography Tours: Spiti, Ladakh, Sundarbans, Varanasi Ganga Aarti, Pushkar Fair • Culinary Trails: Hyderabad biryani trail, Delhi street food, Thai cuisine in Bangkok`,
    audience: "Cultural and experiential travelers",
    rating: 4.8,
    reviews: "1.8k",
    color: "from-purple-500 to-pink-400",
    bgColor: "from-purple-50 to-pink-50",
    popular: true,
    comingSoon: false,
    bookingType: "tours" // Navigate to tours page
  },
  {
    id: 3,
    title: "Wellness Retreats",
    icon: <HeartPulse className="w-6 h-6 md:w-8 md:h-8" />,
    description: "Rejuvenate your mind, body, and soul with guided wellness experiences and digital detox.",
    fullDescription: `Guided yoga and meditation in Rishikesh, Coorg, Dharamshala • Panchakarma and Ayurveda treatments in Kerala • Mindfulness treks, sound healing, forest bathing • Digital detox experiences with curated meal plans • Women-only retreats for self-growth and safety`,
    audience: "Wellness seekers and solo rejuvenators",
    rating: 4.9,
    reviews: "1.5k",
    color: "from-green-500 to-emerald-400",
    bgColor: "from-green-50 to-emerald-50",
    popular: false,
    comingSoon: false,
    bookingType: "contact" // Navigate to contact
  },
  {
    id: 4,
    title: "Destination Weddings & Celebrations",
    icon: <CalendarCheck className="w-6 h-6 md:w-8 md:h-8" />,
    description: "Create unforgettable celebrations with end-to-end wedding and event planning services.",
    fullDescription: `Venue scouting, event planning, logistics, guest management • Locations: Goa beaches, Udaipur palaces, Himachal valleys, international resorts • End-to-end coordination for weddings, engagements, anniversaries • Optional pre-wedding adventures (like rafting, trekking, bonfires) • Post-event leisure trips for guests`,
    audience: "Couples & Families",
    rating: 4.8,
    reviews: "987",
    color: "from-rose-500 to-pink-400",
    bgColor: "from-rose-50 to-pink-50",
    popular: true,
    comingSoon: false,
    bookingType: "contact" // Navigate to contact
  },
  {
    id: 5,
    title: "Solo & Couple Getaways",
    icon: <HeartPulse className="w-6 h-6 md:w-8 md:h-8" />,
    description: "Safe, comfortable, and romantic escapes crafted for solo travelers and couples.",
    fullDescription: `Solo trips with safety-vetted hotels and 24/7 concierge • Couple retreats to romantic hill stations, beaches, and forest hideaways • Add-on experiences: candlelight dinner, private sunset cruise, couple spa • Surprise proposal or anniversary planning services • Women solo trips with safety-first itineraries`,
    audience: "Solo travelers and couples",
    rating: 4.7,
    reviews: "1.2k",
    color: "from-red-500 to-orange-400",
    bgColor: "from-red-50 to-orange-50",
    popular: false,
    comingSoon: false,
    bookingType: "tours" // Navigate to tours page
  },
  {
    id: 6,
    title: "International Tours",
    icon: <Globe className="w-6 h-6 md:w-8 md:h-8" />,
    description: "Seamless international travel experiences with complete visa and logistics support.",
    fullDescription: `Complete visa support and travel insurance assistance • Small group departures and private guided options • Best-selling: Dubai, Bali, Sri Lanka, Thailand, Kenya, Bhutan, Vietnam • Curated for different categories: student groups, families, honeymooners, corporate • Partnerships with trusted global DMCs`,
    audience: "All international travelers",
    rating: 4.9,
    reviews: "2.5k",
    color: "from-indigo-500 to-purple-400",
    bgColor: "from-indigo-50 to-purple-50",
    popular: true,
    comingSoon: false,
    bookingType: "international" // Keep as international
  },
  {
    id: 7,
    title: "Festival Specials & Seasonal Tours",
    icon: <Camera className="w-6 h-6 md:w-8 md:h-8" />,
    description: "Experience India's vibrant festivals and seasonal celebrations with VIP access and guided tours.",
    fullDescription: `Attend Holi in Vrindavan, Diwali in Varanasi, Durga Puja in Kolkata • New Year specials in Goa, Andaman, Dubai, and Bali • Monsoon treks, winter snow adventures, summer hill escapes • Include festival passes, VIP access, guided heritage walks, or behind-the-scenes glimpses • Short and long trip options available`,
    audience: "Cultural explorers",
    rating: 4.8,
    reviews: "1.9k",
    color: "from-yellow-500 to-orange-400",
    bgColor: "from-yellow-50 to-orange-50",
    popular: false,
    comingSoon: false,
    bookingType: "contact" // Navigate to contact
  },
  {
    id: 8,
    title: "Weekend & Short Getaways",
    icon: <Backpack className="w-6 h-6 md:w-8 md:h-8" />,
    description: "Quick recharge trips perfect for busy professionals with doorstep pickup and planned itineraries.",
    fullDescription: `2–4 day trips to nearby destinations like Lonavala, Coorg, Nainital, Jaipur, Pondicherry, Hampi • Doorstep pickup, planned meals, guided sightseeing • Custom travel dates for small groups or pre-fixed departures • Available in budget, comfort, and premium options`,
    audience: "Weekend warriors, working professionals",
    rating: 4.6,
    reviews: "3.2k",
    color: "from-teal-500 to-cyan-400",
    bgColor: "from-teal-50 to-cyan-50",
    popular: true,
    comingSoon: false,
    bookingType: "contact" // Navigate to contact
  },
  {
    id: 9,
    title: "Travel Consultancy & Planning",
    icon: <Compass className="w-6 h-6 md:w-8 md:h-8" />,
    description: "Expert travel planning and consultancy services for DIY travelers and busy clients.",
    fullDescription: `Custom itinerary building based on preferences and budget • Visa advisory and documentation checklist • Travel safety tips and destination readiness briefs • Booking support for flights, hotels, local guides • Corporate tie-ups for recurring travel planning`,
    audience: "DIY travelers & busy clients",
    rating: 4.7,
    reviews: "856",
    color: "from-amber-500 to-yellow-400",
    bgColor: "from-amber-50 to-yellow-50",
    popular: false,
    comingSoon: false,
    bookingType: "contact" // Navigate to contact
  },
  {
    id: 10,
    title: "Student Exchange & Leadership Camps",
    icon: <Leaf className="w-6 h-6 md:w-8 md:h-8" />,
    description: "Cross-cultural and leadership programs for students with international summer camps.",
    fullDescription: `School-level short-term exchange programs with ASEAN & SAARC countries • International summer camps with activities in leadership, sustainability, and tech • Fully hosted with safety, education, and fun at the core • Certification-based value addition for student resumes`,
    audience: "Schools and students",
    rating: 4.5,
    reviews: "124",
    color: "from-emerald-500 to-green-400",
    bgColor: "from-emerald-50 to-green-50",
    popular: false,
    comingSoon: true,
    bookingType: "contact" // Navigate to contact
  }
];

interface ServiceCardProps {
  service: typeof services[0];
  isExpanded: boolean;
  onToggle: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isExpanded, onToggle }) => {
  const handleBookNow = () => {
    if (service.comingSoon) return;
    
    switch (service.bookingType) {
      case "tours":
        window.location.href = "/tours";
        break;
      case "international":
        // Keep international tours as they are (you can add specific logic here if needed)
        break;
      case "contact":
      default:
        window.location.href = "/contact";
        break;
    }
  };

  return (
    <div className={`relative group bg-gradient-to-br ${service.bgColor} rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 mx-2 md:mx-0`}>
      {/* Popular Badge */}
      {service.popular && (
        <div className="absolute top-2 right-2 md:top-4 md:right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full shadow-lg backdrop-blur-sm">
          🔥 Popular
        </div>
      )}
      
      {/* Coming Soon Badge */}
      {service.comingSoon && (
        <div className="absolute top-2 right-2 md:top-4 md:right-4 z-10 bg-gradient-to-r from-gray-600 to-gray-500 text-white text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full shadow-lg backdrop-blur-sm">
          🚀 Coming Soon
        </div>
      )}

      {/* Mobile Layout: Vertical Stack */}
      <div className="md:hidden p-4">
        {/* Header */}
        <div className="flex items-start gap-3 mb-4 pr-16 md:pr-0">
          <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg`}>
            {service.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-gray-800 mb-1 leading-tight">
              {service.title}
            </h3>
            <div className="flex items-center gap-1 mb-1">
              <Star className="text-yellow-400 w-3 h-3 fill-current" />
              <span className="text-xs font-medium text-gray-600">{service.rating}</span>
              <span className="text-xs text-gray-500">({service.reviews})</span>
            </div>
            <p className="text-xs text-gray-500 font-medium">
              {service.audience}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Expandable Details */}
        <div className={`transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="mb-4 p-3 bg-white/60 rounded-lg">
            <h4 className="font-semibold text-gray-800 text-sm mb-2">What's included:</h4>
            <div className="space-y-1">
              {service.fullDescription.split(' • ').map((item, index) => (
                <div key={index} className="flex items-start gap-2 text-xs text-gray-600">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0 mt-1.5`}></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2">
          <button 
            onClick={onToggle}
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white/70 hover:bg-white text-gray-700 font-medium rounded-lg shadow hover:shadow-md transition-all duration-200 w-full"
          >
            <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          
          <button 
            onClick={handleBookNow}
            className={`flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${service.color} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full ${service.comingSoon ? 'opacity-60 cursor-not-allowed' : ''}`}
            disabled={service.comingSoon}
          >
            <span>{service.comingSoon ? 'Coming Soon' : 'Book Now'}</span>
            {!service.comingSoon && <ArrowRight className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Desktop Layout: Horizontal */}
      <div className="hidden md:flex items-center p-6 min-h-[200px]">
        {/* Left: Icon and Title */}
        <div className="flex-shrink-0 w-1/3 pr-6">
          <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
            {service.title}
          </h3>
          <div className="flex items-center gap-1 mb-2">
            <Star className="text-yellow-400 w-4 h-4 fill-current" />
            <span className="text-sm font-medium text-gray-600">{service.rating}</span>
            <span className="text-xs text-gray-500">({service.reviews} reviews)</span>
          </div>
          <p className="text-xs text-gray-500 font-medium italic">
            For: {service.audience}
          </p>
        </div>

        {/* Right: Content */}
        <div className="flex-1">
          <p className="text-gray-600 leading-relaxed mb-4">
            {service.description}
          </p>

          {/* Expandable Details */}
          <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="mb-4 p-4 bg-white/50 rounded-xl">
              <h4 className="font-semibold text-gray-800 text-sm mb-2">What's included:</h4>
              <div className="space-y-2">
                {service.fullDescription.split(' • ').map((item, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0 mt-2`}></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button 
              onClick={onToggle}
              className="flex items-center gap-2 px-4 py-2 bg-white/70 hover:bg-white text-gray-700 font-medium rounded-xl shadow hover:shadow-md transition-all duration-300"
            >
              <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            
            <button 
              onClick={handleBookNow}
              className={`flex items-center gap-2 px-6 py-2 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group/btn ${service.comingSoon ? 'opacity-60 cursor-not-allowed' : ''}`}
              disabled={service.comingSoon}
            >
              <span>{service.comingSoon ? 'Coming Soon' : 'Book Now'}</span>
              {!service.comingSoon && <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />}
            </button>
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default function AtlasHoppersServices() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const toggleCard = (serviceId: number) => {
    setExpandedCard(expandedCard === serviceId ? null : serviceId);
  };

  const filteredServices = filter === 'popular' 
    ? services.filter(service => service.popular)
    : filter === 'coming-soon'
    ? services.filter(service => service.comingSoon)
    : services;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 md:px-8 py-2 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
              filter === 'all'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 shadow'
            }`}
          >
            All Services
          </button>
          <button
            onClick={() => setFilter('popular')}
            className={`px-4 md:px-8 py-2 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
              filter === 'popular'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 shadow'
            }`}
          >
            🔥 Popular
          </button>
          <button
            onClick={() => setFilter('coming-soon')}
            className={`px-4 md:px-8 py-2 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
              filter === 'coming-soon'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 shadow'
            }`}
          >
            🚀 Coming Soon
          </button>
        </div>

        {/* Services Grid */}
        <div className="space-y-4 md:space-y-6">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isExpanded={expandedCard === service.id}
              onToggle={() => toggleCard(service.id)}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 md:mt-16 mx-2 md:mx-0">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl md:rounded-3xl p-6 md:p-12 text-white text-center shadow-2xl">
            <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">Ready to Start Your Next Adventure?</h3>
            <p className="text-blue-100 mb-6 md:mb-8 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
              Our travel experts are standing by to help you plan the perfect journey tailored to your dreams and preferences
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4">
              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-white text-blue-600 font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl md:rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl text-sm md:text-base"
              >
                Get Free Consultation
              </button>
              <button 
                onClick={() => window.location.href = '/tours'}
                className="border-2 border-white text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl md:rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl text-sm md:text-base"
              >
                View Sample Itineraries
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}