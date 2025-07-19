'use client';

import { useState } from 'react';
import { Send, Users, Phone, MessageCircle, Mail, User, MapPin } from 'lucide-react';

interface ContactFormProps {
  onSubmit?: (formData: FormData) => void;
  whatsappNumber?: string;
}

interface FormData {
  category: string;
  categoryOther: string;
  name: string;
  email: string;
  mobile: string;
  groupSize: string;
  destination: string;
  destinationOther: string;
  message: string;
}

export default function ContactForm({ 
  onSubmit,
  whatsappNumber = '+918805948784' 
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    category: '',
    categoryOther: '',
    name: '',
    email: '',
    mobile: '',
    groupSize: '',
    destination: '',
    destinationOther: '',
    message: ''
  });

  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const maxChars = 200;

  const tourCategories = [
    { value: 'family', label: 'Family Holidays', desc: 'Perfect for family bonding and creating memories' },
    { value: 'solo', label: 'Solo Adventures', desc: 'Explore the world on your own terms' },
    { value: 'school', label: 'School Tours', desc: 'Educational trips for students' },
    { value: 'college', label: 'College & IV Trips', desc: 'Industry visits and educational tours' },
    { value: 'corporate', label: 'Corporate Getaways', desc: 'Team building and corporate events' },
    { value: 'custom', label: 'Custom Tours', desc: 'Personalized itineraries just for you' },
    { value: 'all-tours', label: 'All Tours Package', desc: 'Comprehensive travel experiences' },
    { value: 'other', label: 'Other', desc: 'Specify your custom tour category' }
  ];

  const groupSizes = [
    { value: '1', label: '1 Person', icon: '' },
    { value: '2-5', label: '2-5 People', icon: '' },
    { value: '6-15', label: '6-15 People', icon: '' },
    { value: '16-30', label: '16-30 People', icon: '' },
    { value: '30+', label: '30+ People', icon: '' }
  ];

  const popularDestinations = [
    { value: 'goa', label: 'Goa', category: 'Beach' },
    { value: 'kerala', label: 'Kerala', category: 'Backwaters' },
    { value: 'rajasthan', label: 'Rajasthan', category: 'Heritage' },
    { value: 'himachal', label: 'Himachal Pradesh', category: 'Mountains' },
    { value: 'kashmir', label: 'Kashmir', category: 'Valley' },
    { value: 'uttarakhand', label: 'Uttarakhand', category: 'Adventure' },
    { value: 'andaman', label: 'Andaman', category: 'Islands' },
    { value: 'northeast', label: 'Northeast India', category: 'Culture' },
    { value: 'golden-triangle', label: 'Golden Triangle', category: 'Heritage' },
    { value: 'south-india', label: 'South India', category: 'Temple' },
    { value: 'international', label: 'International', category: 'Global' },
    { value: 'custom', label: 'Custom Destination', category: 'Custom' },
    { value: 'other', label: 'Other', category: 'Custom' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'message') {
      if (value.length <= maxChars) {
        setFormData(prev => ({ ...prev, [name]: value }));
        setCharCount(value.length);
      }
    } else if (name === 'categoryOther' && value.length <= 50) {
      setFormData(prev => ({ ...prev, [name]: value }));
    } else if (name === 'destinationOther' && value.length <= 50) {
      setFormData(prev => ({ ...prev, [name]: value }));
    } else if (name !== 'categoryOther' && name !== 'destinationOther') {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const sendToWhatsApp = async () => {
    const selectedCategory = tourCategories.find(cat => cat.value === formData.category);
    const selectedGroupSize = groupSizes.find(size => size.value === formData.groupSize);
    const selectedDestination = popularDestinations.find(dest => dest.value === formData.destination);
    
    const categoryText = formData.category === 'other' ? formData.categoryOther : selectedCategory?.label;
    const destinationText = formData.destination === 'other' ? formData.destinationOther : selectedDestination?.label;
    
    const whatsappMessage = `NEW TOUR INQUIRY

Category: ${categoryText || formData.category}
Name: ${formData.name}
Email: ${formData.email}
Mobile: ${formData.mobile}
Group Size: ${selectedGroupSize?.label || formData.groupSize}
Destination: ${destinationText || formData.destination}

Message: 
${formData.message}

---
Sent via Contact Form`;

    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = async () => {
    
    if (!formData.mobile.trim()) {
      alert('Mobile number is required for quick communication');
      return;
    }

    if (!formData.category || !formData.name || !formData.email || !formData.groupSize || !formData.destination || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    if (formData.category === 'other' && !formData.categoryOther.trim()) {
      alert('Please specify your tour category');
      return;
    }

    if (formData.destination === 'other' && !formData.destinationOther.trim()) {
      alert('Please specify your destination');
      return;
    }

    if (formData.message.length > maxChars) {
      alert(`Message must be ${maxChars} characters or less`);
      return;
    }

    setIsSubmitting(true);

    try {
      // Send to WhatsApp
      await sendToWhatsApp();
      
      // Call custom onSubmit if provided
      if (onSubmit) {
        onSubmit(formData);
      }

      // Show success message
      alert('Thank you! Your inquiry has been sent. We&apos;ll get back to you shortly via WhatsApp!');
      
      // Reset form
      setFormData({
        category: '',
        categoryOther: '',
        name: '',
        email: '',
        mobile: '',
        groupSize: '',
        destination: '',
        destinationOther: '',
        message: ''
      });
      setCharCount(0);
      
    } catch (err) {
      console.error('Error sending message:', err);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-[20px] rounded-3xl p-8 shadow-2xl border border-white/40 relative overflow-hidden">
          {/* Enhanced background decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-200/40 to-purple-200/40 rounded-full blur-3xl -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-emerald-200/40 to-yellow-200/40 rounded-full blur-3xl translate-y-16 -translate-x-16"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-pink-200/30 to-blue-200/30 rounded-full blur-2xl -translate-x-12 -translate-y-12"></div>
          
          <div className="relative z-10">
            {/* Enhanced Header */}
            <div className="mb-10 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl transform rotate-3">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg transform -rotate-6 translate-y-2">
                  <Send className="w-6 h-6 text-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
                Plan Your Dream Journey
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Fill out the form below and we&apos;ll connect with you on WhatsApp for instant assistance and personalized travel planning
              </p>
            </div>

            <div className="space-y-8">
              {/* Tour Category */}
              <div className="space-y-3">
                <label htmlFor="category" className="block text-base font-bold text-gray-800">
                  Tour Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/25 focus:border-blue-500 transition-all duration-300 bg-white text-gray-900 font-medium text-base shadow-sm hover:border-gray-400"
                >
                  <option value="" className="text-gray-500">Select your tour type</option>
                  {tourCategories.map(category => (
                    <option key={category.value} value={category.value} className="text-gray-900">
                      {category.label}
                    </option>
                  ))}
                </select>
                {formData.category && formData.category !== 'other' && (
                  <p className="text-sm text-blue-700 mt-2 bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
                    {tourCategories.find(cat => cat.value === formData.category)?.desc}
                  </p>
                )}
                {formData.category === 'other' && (
                  <div className="mt-3">
                    <input
                      type="text"
                      name="categoryOther"
                      value={formData.categoryOther}
                      onChange={handleInputChange}
                      maxLength={50}
                      placeholder="Please specify your tour category"
                      className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/25 focus:border-blue-500 transition-all duration-300 text-gray-900 font-medium text-base"
                    />
                    <p className="text-sm text-gray-600 mt-2 font-medium">{formData.categoryOther.length}/50 characters</p>
                  </div>
                )}
              </div>

              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="name" className="block text-base font-bold text-gray-800">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/25 focus:border-blue-500 transition-all duration-300 text-gray-900 font-medium text-base shadow-sm hover:border-gray-400"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="email" className="block text-base font-bold text-gray-800">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/25 focus:border-blue-500 transition-all duration-300 text-gray-900 font-medium text-base shadow-sm hover:border-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile and Group Size Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="mobile" className="block text-base font-bold text-gray-800">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/25 focus:border-blue-500 transition-all duration-300 text-gray-900 font-medium text-base shadow-sm hover:border-gray-400"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <p className="text-sm text-gray-600 font-medium">Required for WhatsApp communication</p>
                </div>

                <div className="space-y-3">
                  <label htmlFor="groupSize" className="block text-base font-bold text-gray-800">
                    Group Size <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <select
                      id="groupSize"
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/25 focus:border-blue-500 transition-all duration-300 bg-white text-gray-900 font-medium text-base shadow-sm hover:border-gray-400"
                    >
                      <option value="" className="text-gray-500">Select group size</option>
                      {groupSizes.map(size => (
                        <option key={size.value} value={size.value} className="text-gray-900">
                          {size.icon} {size.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Destination Field */}
              <div className="space-y-3">
                <label htmlFor="destination" className="block text-base font-bold text-gray-800">
                  Where do you want to travel? <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/25 focus:border-blue-500 transition-all duration-300 bg-white text-gray-900 font-medium text-base shadow-sm hover:border-gray-400"
                  >
                    <option value="" className="text-gray-500">Select your dream destination</option>
                    {popularDestinations.map(destination => (
                      <option key={destination.value} value={destination.value} className="text-gray-900">
                        {destination.label}
                      </option>
                    ))}
                  </select>
                </div>
                {formData.destination && formData.destination !== 'custom' && formData.destination !== 'other' && (
                  <p className="text-sm text-emerald-700 mt-2 bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-200">
                    {popularDestinations.find(dest => dest.value === formData.destination)?.category} destination selected
                  </p>
                )}
                {formData.destination === 'other' && (
                  <div className="mt-3">
                    <input
                      type="text"
                      name="destinationOther"
                      value={formData.destinationOther}
                      onChange={handleInputChange}
                      maxLength={50}
                      placeholder="Please specify your destination"
                      className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/25 focus:border-blue-500 transition-all duration-300 text-gray-900 font-medium text-base"
                    />
                    <p className="text-sm text-gray-600 mt-2 font-medium">{formData.destinationOther.length}/50 characters</p>
                  </div>
                )}
              </div>

              {/* Message */}
              <div className="space-y-3">
                <label htmlFor="message" className="block text-base font-bold text-gray-800">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/25 focus:border-blue-500 transition-all duration-300 resize-vertical text-gray-900 font-medium text-base shadow-sm hover:border-gray-400"
                  placeholder="Tell us about your travel plans, preferred dates, budget, special requirements, or any specific attractions you&apos;d like to visit..."
                />
                <div className={`text-sm text-right font-semibold ${charCount > maxChars * 0.9 ? 'text-red-600' : 'text-gray-600'}`}>
                  {charCount}/{maxChars} characters
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      Send Inquiry via WhatsApp
                    </>
                  )}
                </button>
              </div>

              {/* WhatsApp Note */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-5 text-center">
                <div className="flex items-center justify-center gap-3 text-green-800 font-semibold">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-base">We&apos;ll contact you instantly on WhatsApp for faster assistance!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}