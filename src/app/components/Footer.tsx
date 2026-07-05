import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';
import TermsAndConditions from '@/app/components/TermsAndConditions';

export default function Footer() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const openPrivacyModal = () => setShowPrivacyModal(true);
  const closePrivacyModal = () => setShowPrivacyModal(false);

  return (
    <>
      <footer className="bg-gradient-to-t from-[#03263a] via-[#024c68] to-[#03263a] text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid gap-8 lg:gap-12 sm:grid-cols-2 lg:grid-cols-4">

            {/* About Section - Enhanced with Logo */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Image
                    src="/atlaslogo.jpg"
                    alt="Hoppico Logo"
                    width={40}
                    height={40}
                    className="object-contain rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'w-10 h-10 bg-gradient-to-br from-[#f5c624] to-[#e6b91a] rounded-xl flex items-center justify-center shadow-lg';
                      fallback.innerHTML = '<span class="text-[#03263a] font-bold text-lg">A</span>';
                      target.parentNode?.insertBefore(fallback, target);
                    }}
                  />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#f5c624] rounded-full opacity-80 animate-pulse"></div>
                </div>
                <h3 className="text-xl font-bold">Hoppico</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                We specialize in delivering exceptional travel services. Whether you&apos;re looking for adventure, relaxation, or a bit of both, we have the perfect solution for you.
              </p>
              <div className="flex items-center space-x-2 text-[#f5c624] text-sm">
                <Heart className="w-4 h-4" />
                <span>Crafting memories since 2020</span>
              </div>
            </div>

            {/* Quick Links - Enhanced */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#f5c624]">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About Us', href: '/about' },
                  { name: 'Services', href: '/services' },
                  { name: 'Contact', href: '/contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-[#f5c624] transition-all duration-300 text-sm flex items-center group"
                    >
                      <span className="w-2 h-2 bg-[#f5c624] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info - Enhanced */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#f5c624]">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#f5c624] transition-colors">
                    <Mail className="w-4 h-4 text-[#f5c624] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Email</p>
                    <a href="mailto:thehoppico@gmail.com" className="text-sm text-gray-300 hover:text-[#f5c624] transition-colors">
                      thehoppico@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#f5c624] transition-colors">
                    <Phone className="w-4 h-4 text-[#f5c624] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Phone</p>
                    <a href="tel:+918805948784" className="text-sm text-gray-300 hover:text-[#f5c624] transition-colors">
                      +91 8805948784
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#f5c624] transition-colors">
                    <MapPin className="w-4 h-4 text-[#f5c624] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Address</p>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      885, Bhandarkar Rd, Deccan Gymkhana<br />
                      Pune, Maharashtra 411004
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media - Enhanced */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#f5c624]">Follow Us</h3>
              <p className="text-gray-300 text-sm mb-6">
                Stay connected for travel tips, exclusive deals, and adventure stories!
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: 'https://www.facebook.com/hoppicoofficial', color: 'hover:bg-blue-600', name: 'Facebook' },
                  { icon: Twitter, href: 'https://x.com/hoppico', color: 'hover:bg-sky-500', name: 'Twitter' },
                  { icon: Instagram, href: 'https://www.instagram.com/hoppico.in/', color: 'hover:bg-pink-600', name: 'Instagram' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/company/hoppico', color: 'hover:bg-blue-700', name: 'LinkedIn' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {social.name}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Enhanced */}
        <div className="border-t border-white/10 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2">
                <p className="text-sm text-gray-400">
                  &copy; 2025 Hoppico. All Rights Reserved.
                </p>
                <span className="text-[#f5c624]">•</span>
                <p className="text-sm text-gray-400">
                  Made with <Heart className="w-3 h-3 text-red-500 inline mx-1" /> in India
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={openPrivacyModal}
                  className="text-sm text-gray-400 hover:text-[#f5c624] transition-colors flex items-center space-x-1 group"
                >
                  <span>Privacy Policy & Terms</span>
                  <ExternalLink className="w-3 h-3 group-hover:transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy & Terms - opens as full-page overlay on the current page */}
      {showPrivacyModal && <TermsAndConditions onClose={closePrivacyModal} />}
    </>
  );
}