'use client';

import { Phone, MessageCircle, Mail } from 'lucide-react';

interface ContactOptionsProps {
  phoneNumber?: string;
  email?: string;
}

export default function ContactOptions({ 
  phoneNumber = '+918805948784',
  email = 'atlashoppers26@gmail.com' 
}: ContactOptionsProps) {

  const openWhatsApp = () => {
    const message = "Hello! I'd like to get in touch regarding my inquiry.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openCall = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const openEmail = () => {
    window.open(`mailto:${email}`, '_self');
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100">
      
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Get in Touch</h2>
        <p className="text-gray-600">Choose your preferred way to contact us</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* WhatsApp */}
        <button
          onClick={openWhatsApp}
          className="group bg-green-500 hover:bg-green-600 text-white p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <div className="flex flex-col items-center gap-3">
            <MessageCircle className="w-8 h-8" />
            <div className="text-center">
              <div className="font-semibold text-lg">WhatsApp</div>
              <div className="text-sm opacity-90">Quick chat</div>
            </div>
          </div>
        </button>

        {/* Phone Call */}
        <button
          onClick={openCall}
          className="group bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <div className="flex flex-col items-center gap-3">
            <Phone className="w-8 h-8" />
            <div className="text-center">
              <div className="font-semibold text-lg">Call</div>
              <div className="text-sm opacity-90">Direct support</div>
            </div>
          </div>
        </button>

        {/* Email */}
        <button
          onClick={openEmail}
          className="group bg-purple-500 hover:bg-purple-600 text-white p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <div className="flex flex-col items-center gap-3">
            <Mail className="w-8 h-8" />
            <div className="text-center">
              <div className="font-semibold text-lg">Email</div>
              <div className="text-sm opacity-90">Detailed inquiry</div>
            </div>
          </div>
        </button>
      </div>

      {/* Contact Info Display */}
      <div className="mt-8 grid md:grid-cols-2 gap-4 text-sm">
        <div className="bg-white/80 rounded-lg p-4 text-center">
          <div className="font-medium text-gray-700 mb-1">Phone & WhatsApp</div>
          <div className="text-gray-600">{phoneNumber}</div>
        </div>
        <div className="bg-white/80 rounded-lg p-4 text-center">
          <div className="font-medium text-gray-700 mb-1">Email</div>
          <div className="text-gray-600">{email}</div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-8 space-y-6">
        
        {/* Business Hours */}
        <div className="bg-white/60 rounded-xl p-6 text-center">
          <h3 className="font-semibold text-gray-800 mb-3">Business Hours</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between items-center">
              <span>Monday - Friday</span>
              <span className="font-medium">9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Saturday</span>
              <span className="font-medium">10:00 AM - 4:00 PM</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Sunday</span>
              <span className="font-medium">Closed</span>
            </div>
          </div>
          <div className="mt-3 text-xs text-blue-600 bg-blue-50 rounded-lg p-2">
            WhatsApp available 24/7 for quick questions
          </div>
        </div>



      </div>
    </div>
  );
}