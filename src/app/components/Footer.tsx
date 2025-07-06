import { useState } from 'react';
import Image from 'next/image';
import { X, ExternalLink, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';

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
                    alt="Atlas Logo"
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
                <h3 className="text-xl font-bold">Atlas Hoppers</h3>
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
                    <a href="mailto:atlashoppers26@gmail.com" className="text-sm text-gray-300 hover:text-[#f5c624] transition-colors">
                      atlashoppers26@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#f5c624] transition-colors">
                    <Phone className="w-4 h-4 text-[#f5c624] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Phone</p>
                    <a href="tel:+917410147344" className="text-sm text-gray-300 hover:text-[#f5c624] transition-colors">
                      +91 7410147344
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
                  { icon: Facebook, href: 'https://facebook.com', color: 'hover:bg-blue-600', name: 'Facebook' },
                  { icon: Twitter, href: 'https://twitter.com', color: 'hover:bg-sky-500', name: 'Twitter' },
                  { icon: Instagram, href: 'https://instagram.com', color: 'hover:bg-pink-600', name: 'Instagram' },
                  { icon: Linkedin, href: 'https://linkedin.com', color: 'hover:bg-blue-700', name: 'LinkedIn' }
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
                  &copy; 2025 Atlas Hoppers. All Rights Reserved.
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

      {/* Privacy Policy Modal - Enhanced */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl">
            {/* Modal Header - Enhanced */}
            <div className="flex justify-between items-center p-6 border-b bg-gradient-to-r from-[#03263a] to-[#024c68] text-white">
              <div>
                <h2 className="text-2xl font-bold">Privacy Policy & Terms of Service</h2>
                <p className="text-sm text-[#f5c624] mt-1">Atlas Hoppers - Your trust is our priority</p>
              </div>
              <button 
                onClick={closePrivacyModal} 
                className="text-gray-300 hover:text-white hover:bg-white/10 p-2 rounded-xl transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content - Enhanced */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)] text-gray-800">
              
              <div className="bg-[#f5c624]/10 border border-[#f5c624]/20 rounded-lg p-4 mb-6">
                <p className="text-sm"><strong>Last Updated:</strong> June 2025</p>
              </div>
              
              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-bold text-[#03263a] mb-4 border-b-2 border-[#f5c624] pb-2">PRIVACY POLICY</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[#03263a] mb-2">Information We Collect</h3>
                      
                      <div className="bg-gray-50 rounded-lg p-4 mb-3">
                        <p className="font-medium text-[#03263a] mb-2">Personal Information:</p>
                        <ul className="space-y-1 text-sm text-gray-700 ml-4">
                          <li>• Full name, date of birth, and contact details</li>
                          <li>• Passport and travel document information</li>
                          <li>• Payment and billing information</li>
                          <li>• Emergency contact details</li>
                          <li>• Dietary restrictions and accessibility needs</li>
                          <li>• Travel preferences and booking history</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-medium text-[#03263a] mb-2">Automatic Information:</p>
                        <ul className="space-y-1 text-sm text-gray-700 ml-4">
                          <li>• Website usage data and cookies</li>
                          <li>• Device information and IP addresses</li>
                          <li>• Location data when using our mobile services</li>
                          <li>• Communication records with our staff</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#03263a] mb-2">How We Use Your Information</h3>
                      <p className="text-sm text-gray-700 mb-2">We use your personal information to:</p>
                      <ul className="space-y-1 text-sm text-gray-700 ml-4 bg-gray-50 rounded-lg p-4">
                        <li>• Process and manage your travel bookings</li>
                        <li>• Provide customer support and communicate important updates</li>
                        <li>• Comply with legal requirements and travel regulations</li>
                        <li>• Share necessary details with airlines, hotels, and tour operators</li>
                        <li>• Send promotional materials (with your consent)</li>
                        <li>• Improve our services through analytics</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#03263a] mb-2">Information Sharing</h3>
                      <p className="text-sm text-gray-700 mb-2">We may share your information with:</p>
                      <ul className="space-y-1 text-sm text-gray-700 ml-4 bg-gray-50 rounded-lg p-4">
                        <li>• <strong>Travel suppliers</strong> (airlines, hotels, tour operators) to fulfill bookings</li>
                        <li>• <strong>Payment processors</strong> for secure transaction processing</li>
                        <li>• <strong>Government authorities</strong> when required by law</li>
                        <li>• <strong>Emergency services</strong> if safety concerns arise during travel</li>
                      </ul>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3 mt-3">
                        <p className="text-sm text-red-800">We do <strong>NOT</strong> sell your personal information to third parties for marketing purposes.</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#03263a] mb-2">Your Rights</h3>
                      <p className="text-sm text-gray-700 mb-2">You have the right to:</p>
                      <ul className="space-y-1 text-sm text-gray-700 ml-4 bg-gray-50 rounded-lg p-4">
                        <li>• Access and review your personal information</li>
                        <li>• Request corrections to inaccurate data</li>
                        <li>• Delete your account and associated data</li>
                        <li>• Opt-out of marketing communications</li>
                        <li>• File complaints with relevant data protection authorities</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-[#03263a] mb-4 border-b-2 border-[#f5c624] pb-2">TERMS OF SERVICE & CANCELLATION POLICY</h2>
                  
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                    <h3 className="text-lg font-bold text-red-800 mb-2">STRICT CANCELLATION POLICY</h3>
                    <p className="text-sm text-red-700">
                      <strong>IMPORTANT: Our cancellation policy is firm and non-negotiable. Please read carefully before booking.</strong>
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-medium text-[#03263a] mb-3">Cancellation Fees by Timeline:</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex justify-between p-2 bg-white rounded border-l-4 border-green-400">
                        <span><strong>More than 90 days before departure:</strong></span>
                        <span className="text-green-600 font-semibold">25% of total booking value</span>
                      </li>
                      <li className="flex justify-between p-2 bg-white rounded border-l-4 border-yellow-400">
                        <span><strong>61-90 days before departure:</strong></span>
                        <span className="text-yellow-600 font-semibold">50% of total booking value</span>
                      </li>
                      <li className="flex justify-between p-2 bg-white rounded border-l-4 border-orange-400">
                        <span><strong>31-60 days before departure:</strong></span>
                        <span className="text-orange-600 font-semibold">75% of total booking value</span>
                      </li>
                      <li className="flex justify-between p-2 bg-white rounded border-l-4 border-red-400">
                        <span><strong>15-30 days before departure:</strong></span>
                        <span className="text-red-600 font-semibold">90% of total booking value</span>
                      </li>
                      <li className="flex justify-between p-2 bg-white rounded border-l-4 border-red-600">
                        <span><strong>Less than 15 days before departure:</strong></span>
                        <span className="text-red-700 font-bold">100% (NO REFUND)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-[#03263a] mb-3">Women&apos;s Safety & Security</h3>
                    <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                      <p className="font-medium text-[#03263a] mb-2">Our Commitment:</p>
                      <ul className="space-y-1 text-sm text-gray-700 ml-4">
                        <li>• Vetted and background-verified male guides and drivers</li>
                        <li>• Female escort available for solo women travelers upon request</li>
                        <li>• Verified accommodation partners with proper security measures</li>
                        <li>• 24/7 emergency helpline with female staff availability</li>
                        <li>• Regular safety briefings for all ground staff</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-[#03263a] mb-3">Travel Insurance</h3>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-sm text-blue-800 mb-2">
                        <strong>HIGHLY RECOMMENDED:</strong> We strongly recommend purchasing comprehensive travel insurance.
                      </p>
                      <p className="text-sm text-blue-700">
                        <strong>Mandatory Insurance:</strong> All bookings over ₹4,00,000 per person require proof of comprehensive travel insurance before final documentation will be issued.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="border-t pt-6">
                  <h2 className="text-xl font-bold text-[#03263a] mb-4">Contact Information</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <Mail className="w-6 h-6 text-[#f5c624] mx-auto mb-2" />
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                      <p className="text-sm font-medium">atlashoppers26@gmail.com</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <Phone className="w-6 h-6 text-[#f5c624] mx-auto mb-2" />
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
                      <p className="text-sm font-medium">+91 7410147344</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <MapPin className="w-6 h-6 text-[#f5c624] mx-auto mb-2" />
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Address</p>
                      <p className="text-sm font-medium text-center">
                        885, Bhandarkar Rd, Deccan Gymkhana<br />
                        Pune, Maharashtra 411004
                      </p>
                    </div>
                  </div>
                </section>

                <div className="bg-[#03263a] text-white rounded-lg p-6 text-center">
                  <p className="font-semibold mb-2">By booking with us, you acknowledge that you have read, understood, and agree to these terms.</p>
                  <p className="text-[#f5c624] font-bold">REMEMBER: Our cancellation policy is strict and non-negotiable. Please ensure you are committed to your travel dates before booking.</p>
                </div>
              </div>
            </div>

            {/* Modal Footer - Enhanced */}
            <div className="border-t bg-gray-50 p-4 flex justify-end">
              <button 
                onClick={closePrivacyModal} 
                className="px-6 py-2 bg-gradient-to-r from-[#03263a] to-[#024c68] text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}