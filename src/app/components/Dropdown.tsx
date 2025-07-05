'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Toggle Button */}
      <div className="flex items-center space-x-1">
        <Link
          href="/services"
          className="text-white hover:text-[#f5c624] transition font-medium"
        >
          Services
        </Link>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-white hover:text-[#f5c624] transition"
          aria-label="Toggle dropdown"
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50"
          >
            <ul className="py-2 space-y-1">
              <li>
                <Link
                  href="/services/tours"
                  className="block px-4 py-2 text-[#013319] hover:bg-[#f5c624] hover:text-white transition rounded-sm"
                >
                  Tours
                </Link>
              </li>
              <li>
                <Link
                  href="/services/packages"
                  className="block px-4 py-2 text-[#013319] hover:bg-[#f5c624] hover:text-white transition rounded-sm"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/services/custom"
                  className="block px-4 py-2 text-[#013319] hover:bg-[#f5c624] hover:text-white transition rounded-sm"
                >
                  Custom Trips
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
