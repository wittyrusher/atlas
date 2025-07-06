'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TourCard from '../../components/TourCard'; // Import the TourCard component

export default function AdventurePage() {
  return (
    <div className="min-h-screen bg-white text-[#013319]">
      <Header />
      <main className="px-6 py-12">
        <h1 className="text-3xl font-bold mb-6 text-center">Explore Adventure Tours</h1>
        <p className="text-center max-w-2xl mx-auto text-lg mb-12">
          Embark on thrilling adventures across the Himalayas and beyond. Check out our top adventure tours for adrenaline seekers.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <TourCard 
            title="Hampta Pass - Chandratal" 
            description="Embark on an adventurous trek from Hampta Pass to Chandratal Lake, enjoying breathtaking views of the Himalayas." 
            link="/tours/adventure/hampta-pass"
            image="/imagesatlas/adventureatlas/chandratal.jpeg"
          />
          <TourCard 
            title="Kedarkantha" 
            description="Summit the famous Kedarkantha peak with mesmerizing winter landscapes and panoramic views." 
            link="/tours/adventure/kedarkantha"
            image="/imagesatlas/adventureatlas/kedarkanth.jpg"
          />
          <TourCard 
            title="Dayara Bugyal with Rishikesh" 
            description="Trek the scenic Dayara Bugyal and unwind in the spiritual city of Rishikesh." 
            link="/tours/adventure/dayara-bugyal"
            image="/imagesatlas/adventureatlas/dayara.jpeg"
          />
          <TourCard 
            title="Tungnath - Chandrashila - Chopta" 
            description="Hike to the highest temple of Lord Shiva at Tungnath and enjoy mesmerizing views from Chandrashila peak." 
            link="/tours/adventure/tungnath-chopta"
            image="/imagesatlas/adventureatlas/tungnath.jpeg"
          />
          <TourCard 
            title="Ladakh" 
            description="Experience the rugged beauty of Ladakh, known for its monasteries, valleys, and high-altitude lakes." 
            link="/tours/adventure/ladakh"
            image="/imagesatlas/adventureatlas/ladakh.cms"
          />
          <TourCard 
            title="Sikkim" 
            description="Discover the tranquil beauty of Sikkim, from the majestic Kanchenjunga to the peaceful monasteries." 
            link="/tours/adventure/sikkim"
            image="/imagesatlas/adventureatlas/sikkim.jpg"
          />
          <TourCard 
            title="Spiti Valley" 
            description="Embark on a journey to the arid and remote Spiti Valley, a haven for adventure and nature lovers." 
            link="/tours/adventure/spiti-valley"
            image="/imagesatlas/adventureatlas/spiti valley.jpeg"
          />
          <TourCard 
            title="Nainital & Jim Corbett" 
            description="Explore the beautiful lakes and hill stations of Nainital, followed by a wildlife safari in Jim Corbett National Park." 
            link="/tours/adventure/nainital-jimcorbett"
            image="/imagesatlas/adventureatlas/naintal.jpeg"
          />
          <TourCard 
            title="Manali - Kasol" 
            description="Enjoy the scenic beauty of Manali and the laid-back charm of Kasol in Himachal Pradesh." 
            link="/tours/adventure/manali-kasol"
            image="/imagesatlas/adventureatlas/kasol.jpeg"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}