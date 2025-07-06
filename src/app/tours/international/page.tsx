'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TourCard from '../../components/TourCard'; // Import the TourCard component

export default function InternationalToursPage() {
  return (
    <div className="min-h-screen bg-white text-[#013319]">
      <Header />
      <main className="px-6 py-12">
        <h1 className="text-3xl font-bold mb-6 text-center">Explore International Tours</h1>
        <p className="text-center max-w-2xl mx-auto text-lg mb-12">
          Discover the world&apos;s most iconic destinations. From Europe to Asia, find your next international adventure with us.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <TourCard 
            title="Spain" 
            description="Experience the vibrant culture, history, and beautiful landscapes of Spain." 
            link="/tours/international/spain"
            image="/imagesatlas/internationalatlas/bali.jpeg"
          />
          <TourCard 
            title="Dubai" 
            description="Explore the modern marvels of Dubai, from luxury shopping to thrilling desert safaris." 
            link="/tours/international/dubai"
            image="/imagesatlas/internationalatlas/dubai.jpg"
          />
          <TourCard 
            title="Singapore" 
            description="Visit the futuristic city-state of Singapore with its world-class architecture and lush gardens." 
            link="/tours/international/singapore"
            image="/imagesatlas/internationalatlas/singapur.jpeg"
          />
          <TourCard 
            title="Pattaya - Bangkok (Thailand)" 
            description="Unwind in Pattaya's beaches and experience the bustling city life of Bangkok." 
            link="/tours/international/pattaya-bangkok"
            image="/imagesatlas/internationalatlas/pattyata.jpeg"
          />
          <TourCard 
            title="Phuket - Krabi (Thailand)" 
            description="Relax on the beautiful beaches of Phuket and Krabi, known for their crystal-clear waters and vibrant nightlife." 
            link="/tours/international/phuket-krabi"
            image="/imagesatlas/internationalatlas/phuket.jpeg"
          />
          <TourCard 
            title="Bali (Indonesia)" 
            description="Experience the tropical paradise of Bali with its stunning beaches, temples, and culture." 
            link="/tours/international/bali"
            image="/imagesatlas/internationalatlas/bali.jpeg"
          />
          <TourCard 
            title="Sri Lanka" 
            description="Explore the cultural treasures, pristine beaches, and wildlife of Sri Lanka." 
            link="/tours/international/sri-lanka"
            image="/imagesatlas/internationalatlas/shri lanka.jpg"
          />
          <TourCard 
            title="Bhutan" 
            description="Visit the peaceful kingdom of Bhutan, famous for its monasteries, mountains, and unique culture." 
            link="/tours/international/bhutan"
            image="/imagesatlas/internationalatlas/bhutan.jpeg"
          />
          <TourCard 
            title="Namibia (Southern Africa)" 
            description="Discover the stunning landscapes of Namibia, from the deserts to the wildlife in Etosha National Park." 
            link="/tours/international/namibia"
            image="/imagesatlas/internationalatlas/namiba.jpg"
          />
          <TourCard 
            title="Kenya (East Africa)" 
            description="Experience the beauty of Kenya with its famous safaris and the stunning wildlife of the Maasai Mara." 
            link="/tours/international/kenya"
            image="/imagesatlas/internationalatlas/kenya.jpg"
          />
          <TourCard 
            title="Vietnam" 
            description="Discover the rich culture, history, and natural beauty of Vietnam, from Halong Bay to Ho Chi Minh City." 
            link="/tours/international/vietnam"
            image="/imagesatlas/internationalatlas/vietnam.jpeg"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}