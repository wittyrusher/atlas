'use client';

import { motion } from 'framer-motion';
import { MapPin, Heart, Star, Globe2, Users } from 'lucide-react';

export default function AboutHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const featureItems = [
    { 
      icon: <MapPin className="w-6 h-6" />, 
      text: "Curated travel packages for all types of explorers",
      gradient: "from-emerald-400 to-teal-500"
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      text: "Experienced local guides and seamless logistics",
      gradient: "from-blue-400 to-indigo-500"
    },
    { 
      icon: <Heart className="w-6 h-6" />, 
      text: "Flexible options for individuals, families, and groups",
      gradient: "from-pink-400 to-rose-500"
    },
    { 
      icon: <Globe2 className="w-6 h-6" />, 
      text: "Commitment to sustainability and authentic experiences",
      gradient: "from-violet-400 to-purple-500"
    }
  ];

  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center p-4">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50"></div>
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(119, 198, 255, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
        
        {/* Floating orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 80, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-xl"
        />
      </div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-6xl"
      >
        <motion.div
          variants={itemVariants}
          className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50 overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated border gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-3xl p-[2px]">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl w-full h-full"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            {/* Header section */}
            <motion.div
              variants={itemVariants}
              className="text-center mb-12"
            >
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 rounded-2xl mb-6 shadow-xl"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8 }}
              >
                <Heart className="w-10 h-10 text-white" />
              </motion.div>
              
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                  Our Story
                </span>
              </motion.h1>
              
              <motion.div
                variants={itemVariants}
                className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
              />
            </motion.div>

            {/* Main content */}
            <motion.div
              variants={itemVariants}
              className="text-center mb-12"
            >
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                At <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Atlas</span>, we believe travel isn&apos;t just about visiting places—it&apos;s about creating
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> magical stories</span> that last a lifetime. Founded by passionate travelers who understand the transformative power of exploration, we&apos;ve dedicated ourselves to crafting extraordinary journeys that connect you with the world&apos;s most incredible destinations and cultures.
              </p>
            </motion.div>

            {/* Features section */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl p-8 border border-blue-200/30 backdrop-blur-sm"
            >
              <div className="text-center mb-8">
                <motion.div
                  className="inline-flex items-center gap-3 mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl shadow-lg">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">
                    Why Choose Us?
                  </h2>
                </motion.div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featureItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group relative"
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-50 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"></div>
                    <div className="relative flex items-start gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50">
                      <motion.div
                        className={`p-3 bg-gradient-to-r ${item.gradient} rounded-xl text-white flex-shrink-0 shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {item.icon}
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-gray-700 font-semibold text-lg leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to action */}
            <motion.div
              variants={itemVariants}
              className="text-center mt-12"
            >
              <motion.a
                href="/tours"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 no-underline"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Journey
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}