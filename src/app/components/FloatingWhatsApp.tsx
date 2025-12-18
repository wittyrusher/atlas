'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X, Phone, Mail, Sparkles, Send, Loader2 } from 'lucide-react';

interface FloatingContactProps {
  phoneNumber?: string;
  defaultMessage?: string;
  position?: 'bottom-right' | 'bottom-left';
  showTooltip?: boolean;
  geminiApiKey?: string;
}

export default function FloatingContact({ 
  phoneNumber = '+918805948784',
  defaultMessage = "Hi! I'd like to know more about your tour packages.",
  position = 'bottom-right',
  showTooltip = true,
  geminiApiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || ''
}: FloatingContactProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTooltipState, setShowTooltipState] = useState(showTooltip);
  const [showAIChat, setShowAIChat] = useState(false);
  const [messages, setMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([
    {
      role: 'assistant',
      content: '🌟 Hello! I\'m your AI Travel Assistant powered by Google Gemini.\n\nTell me:\n✈️ Where do you want to go?\n📅 How many days?\n💰 What\'s your budget?\n🎯 What are your interests?\n\nExample: "Create a 10-day plan for Delhi, Manali and Nainital, budget ₹50,000"'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  const handleAIChat = async () => {
    if (!inputMessage.trim() || isLoading) return;

    // Check if API key exists
    if (!geminiApiKey || geminiApiKey.length < 20) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: '❌ API Key Missing!\n\nPlease add your Gemini API key:\n\n1. Get free key: https://aistudio.google.com/app/apikey\n2. Add to .env.local:\nNEXT_PUBLIC_GEMINI_API_KEY=your_key_here\n3. Restart server: npm run dev' 
      }]);
      return;
    }

    const userMessage = inputMessage.trim();
    setInputMessage('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    // List of models to try in order (using your available models)
    const modelsToTry = [
      'gemini-2.5-flash',
      'gemini-2.0-flash',
      'gemini-flash-latest',
      'gemini-2.5-pro',
      'gemini-pro-latest'
    ];

    try {
      const prompt = `You are an expert travel planner. Create a detailed travel itinerary based on this request: "${userMessage}". 

Include:
- Day-by-day plan with activities
- Accommodation suggestions with approximate costs
- Transportation between places
- Food recommendations
- Total estimated budget breakdown
- Best time to visit
- Important tips

Format it clearly with emojis and proper structure.`;

      let lastError = null;
      let success = false;

      // Try each model until one works
      for (const model of modelsToTry) {
        try {
          console.log(`Trying model: ${model}`);
          
          const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiApiKey}`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                contents: [{
                  parts: [{ text: prompt }]
                }]
              })
            }
          );

          const data = await response.json();

          if (response.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
            const aiResponse = data.candidates[0].content.parts[0].text;
            setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
            console.log(`✅ Success with model: ${model}`);
            success = true;
            break;
          } else {
            lastError = data.error?.message || 'No response';
            console.log(`❌ Failed with ${model}:`, lastError);
          }
        } catch (err: unknown) {
          const error = err as { message?: string };
          lastError = error.message || 'Unknown error';
          console.log(`❌ Error with ${model}:`, error.message);
          continue;
        }
      }

      if (!success) {
        throw new Error(lastError || 'All models failed');
      }

    } catch (error: unknown) {
      console.error('Error:', error);
      
      const err = error as { message?: string };
      let errorMsg = '❌ Unable to generate itinerary.\n\n';
      errorMsg += 'Please try:\n';
      errorMsg += '1. Get a NEW API key from: https://aistudio.google.com/app/apikey\n';
      errorMsg += '2. Make sure to enable "Generative Language API"\n';
      errorMsg += '3. Wait a few minutes after creating the key\n';
      errorMsg += '4. Try again\n\n';
      errorMsg += `Error: ${err.message || 'Unknown error'}`;
      
      setMessages(prev => [...prev, { role: 'assistant', content: errorMsg }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className={`fixed ${positionClasses[position]} z-50 flex gap-4`}>
      {/* AI Chat Window */}
      {showAIChat && (
        <div className={`absolute ${position === 'bottom-right' ? 'right-0 bottom-20' : 'left-0 bottom-20'} bg-white rounded-2xl shadow-2xl w-96 border border-gray-100 flex flex-col h-[500px]`}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold text-white">AI Travel Planner</h3>
                <p className="text-xs text-white/80">Powered by Google Gemini</p>
              </div>
            </div>
            <button 
              onClick={() => setShowAIChat(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-3 ${
                  msg.role === 'user' 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl p-3 flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin text-blue-500" />
                  <span className="text-sm text-gray-600">Creating your itinerary...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleAIChat()}
                placeholder="e.g., 10 days Delhi-Manali-Nainital..."
                className="flex-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                disabled={isLoading}
              />
              <button
                onClick={handleAIChat}
                disabled={isLoading || !inputMessage.trim()}
                className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Expanded Menu */}
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

      {/* Tooltip */}
      {showTooltipState && !isExpanded && !showAIChat && (
        <div className={`absolute ${position === 'bottom-right' ? 'right-24 bottom-2' : 'left-24 bottom-2'} bg-white rounded-lg shadow-lg px-4 py-2 whitespace-nowrap animate-bounce`}>
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

      {/* AI Assistant Button */}
      <button
        onClick={() => {
          setShowAIChat(!showAIChat);
          setIsExpanded(false);
        }}
        className="relative w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
      >
        <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20"></div>
        <div className="absolute inset-0 rounded-full bg-blue-500 animate-pulse opacity-40"></div>
        
        <Sparkles className="w-7 h-7 text-white relative z-10" />
        
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 border-2 border-white rounded-full animate-pulse"></div>
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={() => {
          setIsExpanded(!isExpanded);
          setShowAIChat(false);
        }}
        className="relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
      >
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-40"></div>
        
        <MessageCircle className="w-7 h-7 text-white relative z-10" />
        
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse"></div>
      </button>
    </div>
  );
}