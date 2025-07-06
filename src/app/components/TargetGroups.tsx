'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Building2, Heart, Users, Sparkles, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ReactElement } from 'react';

interface GroupItem {
  title: string;
  desc: string;
  icon: ReactElement;
  gradient: string;
  bgGradient: string;
  glowColor: string;
  features: string[];
  stats: string;
  sectionId: string;
}

const groups: GroupItem[] = [
  {
    title: "School Tours",
    desc: "Safe and enriching trips to science centers, heritage spots, and adventure camps.",
    icon: <GraduationCap size={32} />,
    gradient: "from-yellow-400 via-orange-400 to-red-400",
    bgGradient: "from-yellow-50 via-orange-50 to-red-50",
    glowColor: "from-yellow-400 to-orange-400",
    features: ["Science Centers", "Heritage Sites", "Adventure Camps"],
    stats: "500+ Schools",
    sectionId: "school-tours" // Add section ID for navigation
  },
  {
    title: "College & IV Trips",
    desc: "Educational + industry-specific visits for future-ready students.",
    icon: <Building2 size={32} />,
    gradient: "from-blue-400 via-cyan-400 to-teal-400",
    bgGradient: "from-blue-50 via-cyan-50 to-teal-50",
    glowColor: "from-blue-400 to-cyan-400",
    features: ["Industry Visits", "Tech Tours", "Career Guidance"],
    stats: "200+ Colleges",
    sectionId: "college-trips"
  },
  {
    title: "Corporate Getaways",
    desc: "Team bonding, relaxation, and offsite learning in premium locations.",
    icon: <Users size={32} />,
    gradient: "from-green-400 via-emerald-400 to-teal-400",
    bgGradient: "from-green-50 via-emerald-50 to-teal-50",
    glowColor: "from-green-400 to-emerald-400",
    features: ["Team Building", "Luxury Stays", "Offsite Learning"],
    stats: "100+ Companies",
    sectionId: "corporate-getaways"
  },
  {
    title: "Family Holidays",
    desc: "Carefully crafted experiences for families to explore, bond, and create lifelong memories together.",
    icon: <Heart size={32} />,
    gradient: "from-pink-400 via-rose-400 to-purple-400",
    bgGradient: "from-pink-50 via-rose-50 to-purple-50",
    glowColor: "from-pink-400 to-rose-400",
    features: ["Family Bonding", "Kid-Friendly", "Memory Making"],
    stats: "10,000+ Families",
    sectionId: "family-holidays"
  },
];

export default function TargetGroups() {
  const router = useRouter();

  const handleLearnMore = (sectionId: string): void => {
    // Navigate to services page with hash to scroll to specific section
    router.push(`/services#${sectionId}`);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
            rotate: [0, 180, 360] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 80, 0],
            rotate: [0, -180, -360] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-pink-200 to-yellow-200 rounded-full blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold text-sm mb-6 shadow-lg"
          >
            <Sparkles className="w-5 h-5" />
            Our Specialties
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent"
          >
            Who We Serve
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Tailored experiences for every group, every dream, every adventure
          </motion.p>
        </motion.div>

        {/* Groups Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {groups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: i * 0.15, 
                duration: 0.7,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -15,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${group.glowColor} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 -z-10`}></div>
              
              {/* Card Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${group.bgGradient} rounded-3xl transform group-hover:scale-105 transition-transform duration-300`}></div>
              
              {/* Card Content */}
              <div className="relative p-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 h-full flex flex-col hover:shadow-2xl transition-all duration-300">
                
                {/* Stats Badge */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.15 + 0.5, duration: 0.5 }}
                  className={`absolute -top-3 -right-3 bg-gradient-to-r ${group.gradient} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}
                >
                  {group.stats}
                </motion.div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`mb-6 w-16 h-16 bg-gradient-to-r ${group.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg mx-auto group-hover:shadow-xl transition-shadow duration-300`}
                >
                  {group.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center group-hover:text-gray-900 transition-colors">
                  {group.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 text-center flex-grow">
                  {group.desc}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {group.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15 + 0.7 + idx * 0.1, duration: 0.4 }}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${group.gradient} rounded-full`}></div>
                      {feature}
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleLearnMore(group.sectionId)}
                  className={`w-full bg-gradient-to-r ${group.gradient} text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.button>

                {/* Decorative Progress Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: i * 0.15 + 1, duration: 1 }}
                  className={`mt-4 h-1 bg-gradient-to-r ${group.gradient} rounded-full opacity-60`}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have trusted us with their most precious moments
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/services')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
            >
              Get Custom Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}