'use client';

import { useState } from 'react';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  defaultMessage?: string;
  position?: 'bottom-right' | 'bottom-left';
  showTooltip?: boolean;
}

export default function FloatingWhatsApp({ 
  phoneNumber = '+918805948784',
  defaultMessage = "Hi! I'd like to know more about your tour packages.",
  position = 'bottom-right',
  showTooltip = true
}: FloatingWhatsAppProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTooltipState, setShowTooltipState] = useState(showTooltip);

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6'
  };

  const openWhatsApp = (category?: string) => {
    let message = defaultMessage;
    
    if (category) {
      const messages = {
        general: "Hi! I'd like to know more about your tour packages.",
        urgent: "Hi! I need immediate assistance with my travel plans.",
        booking: "Hi! I'd like to make a booking inquiry.",
        support: "Hi! I need help with my existing booking."
      };
      message = messages[category as keyof typeof messages] || defaultMessage;
    }
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsExpanded(false);
  };

  const openCall = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const openEmail = () => {
    window.open('mailto:info@tours.com?subject=Tour Inquiry', '_self');
  };

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      {/* Tooltip */}
      {showTooltipState && !isExpanded && (
        <div className={`absolute ${position === 'bottom-right' ? 'right-20 bottom-2' : 'left-20 bottom-2'} bg-white rounded-lg shadow-lg px-4 py-2 whitespace-nowrap animate-bounce`}>
          <div className="text-sm font-medium text-gray-800">Need help? Chat with us!</div>
          <div className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45 ${position === 'bottom-right' ? '-right-1' : '-left-1'}`}></div>
          <button 
            onClick={() => setShowTooltipState(false)}
            className="absolute -top-1 -right-1 w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center"
          >
            <X className="w-2 h-2" />
          </button>
        </div>
      )}

      {/* Expanded Menu */}
      {isExpanded && (
        <div className={`absolute ${position === 'bottom-right' ? 'right-0 bottom-20' : 'left-0 bottom-20'} bg-white rounded-2xl shadow-2xl p-4 w-64 border border-gray-100`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">How can we help?</h3>
            <button 
              onClick={() => setIsExpanded(false)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-2">
            {/* WhatsApp Options */}
            <button
              onClick={() => openWhatsApp('general')}
              className="w-full flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-xl transition-colors text-left"
            >
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-medium text-gray-800">General Inquiry</div>
                <div className="text-xs text-gray-600">Ask about our tours</div>
              </div>
            </button>

            <button
              onClick={() => openWhatsApp('urgent')}
              className="w-full flex items-center gap-3 p-3 bg-red-50 hover:bg-red-100 rounded-xl transition-colors text-left"
            >
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-medium text-gray-800">Urgent Help</div>
                <div className="text-xs text-gray-600">Immediate assistance</div>
              </div>
            </button>

            <button
              onClick={() => openWhatsApp('booking')}
              className="w-full flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors text-left"
            >
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-medium text-gray-800">Book Now</div>
                <div className="text-xs text-gray-600">Make a reservation</div>
              </div>
            </button>

            {/* Other Contact Methods */}
            <div className="border-t pt-2 mt-2">
              <div className="text-xs text-gray-500 mb-2">Other ways to reach us:</div>
              <div className="flex gap-2">
                <button
                  onClick={openCall}
                  className="flex-1 flex items-center justify-center gap-2 p-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">Call</span>
                </button>
                <button
                  onClick={openEmail}
                  className="flex-1 flex items-center justify-center gap-2 p-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Email</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <button
        onClick={() => isExpanded ? openWhatsApp() : setIsExpanded(true)}
        className="relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
      >
        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-40"></div>
        
        {/* Icon */}
        <MessageCircle className="w-7 h-7 text-white relative z-10" />
        
        {/* Online Indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse"></div>
      </button>
    </div>
  );
}