'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const pageTitles: Record<string, string> = {
  '/': 'Welcome to Atlas Hoppers',
  '/about': 'About Us',
  '/services': 'Our Services',
  '/tours': 'Explore Tours',
  '/contact': 'Get in Touch',
};

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [toursDropdownOpen, setToursDropdownOpen] = useState(false);
  const toursDropdownRef = useRef<HTMLDivElement>(null);
  const title = pageTitles[pathname] || 'Atlas in Hand';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (toursDropdownRef.current && !toursDropdownRef.current.contains(e.target as Node)) {
        setToursDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinkClass = (path: string) =>
    `relative transition-all duration-300 px-4 py-2.5 rounded-lg font-medium text-sm ${
      pathname === path 
        ? 'text-[#f5c624] bg-white/15 shadow-lg backdrop-blur-sm' 
        : 'text-white hover:text-[#f5c624] hover:bg-white/10 hover:shadow-md'
    }`;

  return (
    <header className={`bg-gradient-to-r from-[#03263a] via-[#024c68] to-[#03263a] sticky top-0 z-50 transition-all duration-500 ${
      scrolled ? 'shadow-2xl backdrop-blur-lg bg-opacity-90 border-b border-white/10' : 'shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              className="relative"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src="/atlaslogo.jpg"
                alt="Atlas Logo"
                className="w-12 h-12 object-contain rounded-xl shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'w-12 h-12 bg-gradient-to-br from-[#f5c624] to-[#e6b91a] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300';
                  fallback.innerHTML = '<span class="text-[#03263a] font-bold text-xl">A</span>';
                  target.parentNode?.insertBefore(fallback, target);
                }}
              />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#f5c624] rounded-full opacity-80 animate-pulse"></div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white group-hover:text-[#f5c624] transition-colors duration-300">
                Atlas Hoppers
              </span>
              <span className="text-xs text-[#f5c624]/80 font-medium hidden sm:block">
                let&apos;s hop the world together
              </span>
            </div>
          </Link>

          {/* Dynamic Title - Enhanced */}
          <div className="hidden lg:block text-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg px-6 py-2 border border-white/10"
            >
              <h1 className="text-lg font-semibold text-white">{title}</h1>
              <p className="text-sm text-[#f5c624] italic font-medium">
                hop the world with us 
              </p>
            </motion.div>
          </div>

          {/* Desktop Navigation - Enhanced */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/" className={navLinkClass('/')}>
              Home
            </Link>
            <Link href="/about" className={navLinkClass('/about')}>
              About
            </Link>
            <Link href="/services" className={navLinkClass('/services')}>
              Services
            </Link>

            {/* Tours Dropdown - Enhanced */}
            <div className="relative" ref={toursDropdownRef}>
              <div className="flex items-center">
                <Link href="/tours" className="px-4 py-2.5 text-white hover:text-[#f5c624] hover:bg-white/10 rounded-lg transition-all font-medium text-sm">
                  Tours
                </Link>
                <button
                  onClick={() => setToursDropdownOpen((prev) => !prev)}
                  className="ml-1 p-2 text-white hover:text-[#f5c624] hover:bg-white/10 transition-all rounded-lg"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${toursDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <AnimatePresence>
                {toursDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-56 bg-white/95 backdrop-blur-lg shadow-2xl rounded-2xl border border-gray-100 overflow-hidden z-50"
                  >
                    <div className="p-2">
                      <Link href="/tours/domestic" className="flex items-center px-4 py-3 text-[#03263a] hover:bg-gradient-to-r hover:from-[#f5c624] hover:to-[#e6b91a] hover:text-white transition-all rounded-xl font-medium">
                        <span className="mr-3">🏔️</span> Domestic Tours
                      </Link>
                      <Link href="/tours/international" className="flex items-center px-4 py-3 text-[#03263a] hover:bg-gradient-to-r hover:from-[#f5c624] hover:to-[#e6b91a] hover:text-white transition-all rounded-xl font-medium">
                        <span className="mr-3">✈️</span> International
                      </Link>
                      <Link href="/tours/adventure" className="flex items-center px-4 py-3 text-[#03263a] hover:bg-gradient-to-r hover:from-[#f5c624] hover:to-[#e6b91a] hover:text-white transition-all rounded-xl font-medium">
                        <span className="mr-3">🏕️</span> Adventure
                      </Link>
                      <Link href="/tours/eco" className="flex items-center px-4 py-3 text-[#03263a] hover:bg-gradient-to-r hover:from-[#f5c624] hover:to-[#e6b91a] hover:text-white transition-all rounded-xl font-medium">
                        <span className="mr-3">🌿</span> Eco Tours
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact" className={navLinkClass('/contact')}>
              Contact
            </Link>
          </nav>

          {/* Mobile Hamburger - Enhanced */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-3 text-[#f5c624] hover:bg-white/10 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#f5c624]/50"
          >
            <div className="w-6 h-6 relative">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="absolute w-6 h-6 bg-current top-1 origin-center block transition-all duration-300"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="absolute w-6 h-6 bg-current top-3 block transition-all duration-300"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="absolute w-6 h-6 bg-current top-5 origin-center block transition-all duration-300"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Enhanced */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-b from-[#03263a] to-[#024c68] border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-2">
              {/* Mobile Title */}
              <div className="text-center mb-6 pb-4 border-b border-white/10">
                <h1 className="text-lg font-semibold text-white">{title}</h1>
                <p className="text-sm text-[#f5c624] italic">hop the world with us </p>
              </div>

              <Link href="/" className={`block ${navLinkClass('/')}`}>
                Home
              </Link>
              <Link href="/about" className={`block ${navLinkClass('/about')}`}>
                About
              </Link>
              <Link href="/services" className={`block ${navLinkClass('/services')}`}>
                Services
              </Link>

              {/* Mobile Tours Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={() => setToursDropdownOpen(!toursDropdownOpen)}
                  className="w-full flex justify-between items-center px-4 py-2.5 text-white hover:text-[#f5c624] hover:bg-white/10 rounded-lg transition-all font-medium text-sm"
                >
                  Tours
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${toursDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {toursDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-4 space-y-1 pl-4 border-l-2 border-[#f5c624]/30"
                    >
                      <Link href="/tours" className="block text-sm text-gray-300 hover:text-[#f5c624] py-2 px-3 rounded-lg hover:bg-white/5 transition-all">
                        All Tours
                      </Link>
                      <Link href="/tours/domestic" className="block text-sm text-gray-300 hover:text-[#f5c624] py-2 px-3 rounded-lg hover:bg-white/5 transition-all">
                        🏔️ Domestic
                      </Link>
                      <Link href="/tours/international" className="block text-sm text-gray-300 hover:text-[#f5c624] py-2 px-3 rounded-lg hover:bg-white/5 transition-all">
                        ✈️ International
                      </Link>
                      <Link href="/tours/adventure" className="block text-sm text-gray-300 hover:text-[#f5c624] py-2 px-3 rounded-lg hover:bg-white/5 transition-all">
                        🏕️ Adventure
                      </Link>
                      <Link href="/tours/eco" className="block text-sm text-gray-300 hover:text-[#f5c624] py-2 px-3 rounded-lg hover:bg-white/5 transition-all">
                        🌿 Eco Tours
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/contact" className={`block ${navLinkClass('/contact')}`}>
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;