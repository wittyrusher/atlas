
'use client';

import { motion } from 'framer-motion';
import { MapPin, Heart, Star, Globe2, Users } from 'lucide-react';

export default function AboutHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const featureItems = [
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      text: "Curated travel packages for all types of explorers",
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      text: "Experienced local guides and seamless logistics",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
      text: "Flexible options for individuals, families, and groups",
      gradient: "from-pink-400 to-rose-500"
    },
    {
      icon: <Globe2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      text: "Commitment to sustainability and authentic experiences",
      gradient: "from-violet-400 to-purple-500"
    }
  ];

  return (
    <div className="relative overflow-hidden w-full">
      {/* Enhanced Mobile-Friendly Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 60%)",
              "radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 60%)",
              "radial-gradient(circle at 20% 60%, rgba(6, 182, 212, 0.08) 0%, transparent 60%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />

        {/* Subtle floating orbs - hidden on mobile for performance */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="hidden sm:block absolute top-1/4 left-1/4 w-20 h-20 lg:w-32 lg:h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="hidden sm:block absolute bottom-1/4 right-1/4 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 rounded-full blur-xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full px-4 sm:px-6 py-8 sm:py-12 lg:py-16"
      >
        <motion.div
          variants={itemVariants}
          className="relative bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-12 shadow-lg sm:shadow-2xl border border-white/60 overflow-hidden max-w-6xl mx-auto"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          {/* Subtle border gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 via-purple-200/30 to-teal-200/30 rounded-2xl sm:rounded-3xl p-[1px] sm:p-[2px]">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl w-full h-full"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Header section */}
            <motion.div
              variants={itemVariants}
              className="text-center mb-6 sm:mb-8 lg:mb-12"
            >
              <motion.div
                className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-lg"
                whileHover={{ rotate: 360, scale: 1.05 }}
                transition={{ duration: 0.8 }}
              >
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                  Our Story
                </span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="w-16 h-0.5 sm:w-24 sm:h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
              />
            </motion.div>

            {/* Main content */}
            <motion.div
              variants={itemVariants}
              className="text-center mb-6 sm:mb-8 lg:mb-12"
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto px-2">
                At <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Hoppico</span>, we believe travel isn&apos;t just about visiting places—it&apos;s about creating
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> magical stories</span> that last a lifetime. Founded by passionate travelers who understand the transformative power of exploration, we&apos;ve dedicated ourselves to crafting extraordinary journeys that connect you with the world&apos;s most incredible destinations and cultures.
              </p>
            </motion.div>

            {/* Features section */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-50/80 to-blue-50/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-200/50 backdrop-blur-sm"
            >
              <div className="text-center mb-6 sm:mb-8">
                <motion.div
                  className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg sm:rounded-xl shadow-md">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">
                    Why Choose Us?
                  </h2>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {featureItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group relative"
                    whileHover={{
                      scale: 1.02,
                      y: -2,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-slate-50/80 rounded-lg sm:rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300"></div>
                    <div className="relative flex items-start gap-3 sm:gap-4 p-3 sm:p-4 lg:p-6 bg-white/40 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/60">
                      <motion.div
                        className={`p-2 sm:p-3 bg-gradient-to-r ${item.gradient} rounded-lg sm:rounded-xl text-white flex-shrink-0 shadow-md`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {item.icon}
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-700 font-medium sm:font-semibold text-sm sm:text-base lg:text-lg leading-relaxed">
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
              className="text-center mt-6 sm:mt-8 lg:mt-12"
            >
              <motion.a
                href="/tours"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 no-underline"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
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