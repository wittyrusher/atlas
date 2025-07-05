'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import ImmediateAssistance from '../components/ImmediateAssistance';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <ContactForm />
      <ImmediateAssistance />
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}