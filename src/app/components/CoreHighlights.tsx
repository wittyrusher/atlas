'use client';

import { Briefcase, GraduationCap, Globe2, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CoreHighlights() {
  const highlights = [
    { 
      icon: <GraduationCap size={40} />, 
      title: "100+ Educational Tours", 
      desc: "For schools & colleges across India",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    { 
      icon: <Briefcase size={40} />, 
      title: "Corporate Retreats", 
      desc: "Productive + relaxing destinations",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    { 
      icon: <Users size={40} />, 
      title: "50,000+ Students", 
      desc: "Trusted by schools & institutions",
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-50 to-teal-50"
    },
    { 
      icon: <Globe2 size={40} />, 
      title: "Pan-India Reach", 
      desc: "From Himachal to Kerala",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.3),transparent)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(168,85,247,0.3),transparent)] animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold text-sm mb-4"
          >
            <Award className="w-5 h-5" />
            Our Achievements
          </motion.div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Trusted by Thousands
          </h2>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: i * 0.15, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Card Background with Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} rounded-2xl transform group-hover:scale-105 transition-transform duration-300`}></div>
              
              {/* Card Content */}
              <div className="relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 text-center h-full flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
                {/* Floating Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`mx-auto mb-6 w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg transform group-hover:shadow-xl transition-shadow duration-300`}
                >
                  {item.icon}
                </motion.div>

                {/* Content */}
                <div>
                  <h4 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-gray-900 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                {/* Decorative Element */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '60%' }}
                  transition={{ delay: i * 0.15 + 0.5, duration: 0.8 }}
                  className={`mx-auto mt-6 h-1 bg-gradient-to-r ${item.color} rounded-full`}
                ></motion.div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}></div>
            </motion.div>
          ))}
        </div>

              {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center mt-16"
      >
        <motion.a
          href="/tours"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-purple-700 no-underline"
        >
          Start Your Journey Today
        </motion.a>
      </motion.div>
      </div>
    </section>
  );
}