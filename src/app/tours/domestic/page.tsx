'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TourCard from '../../components/TourCard';

export default function DomesticPage() {
  return (
    <div className="min-h-screen bg-white text-[#013319]">
      <Header />
      <main className="px-6 py-12">
        <h1 className="text-3xl font-bold mb-6 text-center">Domestic Tours</h1>
        <p className="text-center max-w-2xl mx-auto text-lg mb-12">
          Explore India's cultural treasures, breathtaking landscapes, and vibrant cities on these curated domestic tours.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <TourCard title="Hyderabad" description="Explore the rich culture, heritage, and cuisine of Hyderabad, including the iconic Charminar." link="/tours/domestic/hyderabad" image="/imagesatlas/domesticatlas/hydrabad.jpeg" />
          <TourCard title="Kashmir" description="Experience the beauty of the Valley of Kashmir, with its serene landscapes and beautiful gardens." link="/tours/domestic/kashmir" image="/imagesatlas/domesticatlas/kashmir.jpeg" />
          <TourCard title="Himachal with Amritsar" description="Discover the beauty of Himachal Pradesh along with the spiritual significance of Amritsar." link="/tours/domestic/himachal-amritsar" image="/imagesatlas/domesticatlas/amritsar.jpeg" />
          <TourCard title="Rajasthan" description="Visit the magnificent forts, palaces, and deserts of Rajasthan, a land of royal history and culture." link="/tours/domestic/rajasthan" image="/imagesatlas/domesticatlas/rajasthan.jpeg" />
          <TourCard title="Kerala" description="Relax in the backwaters of Kerala, and explore its beaches, hill stations, and unique culture." link="/tours/domestic/kerala" image="/imagesatlas/domesticatlas/kerla.jpeg" />
          <TourCard title="Bangalore - Mysore - Ooty - Coorg" description="Experience the beauty of Southern India, from the bustling city of Bangalore to the tranquil hills of Coorg." link="/tours/domestic/bangalore-ooty" image="/imagesatlas/domesticatlas/mysore.jpeg" />
          <TourCard title="Golden Triangle (Delhi - Agra - Jaipur)" description="Explore India's historical treasures, including the Taj Mahal, Jaipur’s forts, and Delhi’s landmarks." link="/tours/domestic/golden-triangle" image="/imagesatlas/domesticatlas/golden triangle.jpeg" />
          <TourCard title="Manali" description="Relax in the beautiful hill station of Manali, perfect for adventure and nature lovers." link="/tours/domestic/manali" image="/imagesatlas/domesticatlas/manali.jpeg" />
          <TourCard title="Lakshadweep" description="Uncover the untouched beauty of Lakshadweep, a paradise of coral islands and turquoise waters." link="/tours/domestic/lakshadweep" image="/imagesatlas/domesticatlas/lakshadweep.jpeg" />
          <TourCard title="Goa" description="Relax on the beautiful beaches of Goa and explore its vibrant nightlife and Portuguese heritage." link="/tours/domestic/goa" image="/imagesatlas/domesticatlas/goa.jpeg" />
          <TourCard title="Hampi - Badami" description="Discover the ancient ruins and temples in Hampi and Badami, famous for their architectural marvels." link="/tours/domestic/hampi-badami" image="/imagesatlas/domesticatlas/badami.jpg" />
          <TourCard title="Gokarna with Murudeshwar (Coastal Karnataka)" description="Explore the serene beaches of Gokarna and Murudeshwar with its towering Shiva statue." link="/tours/domestic/gokarna-murudeshwar" image="/imagesatlas/domesticatlas/murudeshwar.jpg" />
          <TourCard title="Chennai - Trichy" description="Immerse yourself in the cultural heritage of Tamil Nadu with a visit to Chennai and Trichy." link="/tours/domestic/chennai-trichy" image="/imagesatlas/domesticatlas/chennai.jpeg" />
          <TourCard title="Gujarat (Dwarka & Somnath)" description="Visit the ancient temples of Dwarka and Somnath in Gujarat, rich in religious and historical significance." link="/tours/domestic/gujarat-dwarka-somnath" image="/imagesatlas/domesticatlas/dwarka.jpg" />
          <TourCard title="Rann of Kutch" description="Experience the breathtaking salt desert and the cultural festival in the Rann of Kutch." link="/tours/domestic/rann-of-kutch" image="/imagesatlas/domesticatlas/rann of kutch.jpg" />
          <TourCard title="Kedarnath" description="Embark on a spiritual journey to Kedarnath, one of the Char Dham pilgrimage sites in Uttarakhand." link="/tours/domestic/kedarnath" image="/imagesatlas/domesticatlas/kedarnath.jpg" />
          <TourCard title="Dehradun - Mussoorie" description="Relax in the scenic hill stations of Dehradun and Mussoorie, perfect for nature lovers and trekkers." link="/tours/domestic/dehradun-mussoorie" image="/imagesatlas/domesticatlas/dehradun.jpeg" />
          <TourCard title="Agra - Mathura - Vrindavan" description="Visit iconic historical and spiritual sites in Agra, Mathura, and Vrindavan." link="/tours/domestic/agra-mathura-vrindavan" image="/imagesatlas/domesticatlas/mathura.jpeg" />
          <TourCard title="Meghalaya" description="Explore the wettest place on Earth and the stunning living root bridges of Meghalaya." link="/tours/domestic/meghalaya" image="/imagesatlas/domesticatlas/meghalaya.jpeg" />
          <TourCard title="Dharamshala with Kareri Lake" description="Discover the Tibetan culture and nature with a trek to Kareri Lake from Dharamshala." link="/tours/domestic/dharamshala-kareri-lake" image="/imagesatlas/domesticatlas/kareri lake.jpeg" />
          <TourCard title="Srinagar" description="Experience the charm of Srinagar with its beautiful houseboats, gardens, and Mughal architecture." link="/tours/domestic/srinagar" image="/imagesatlas/domesticatlas/srinagar.jpg" />
          <TourCard title="Diu & Daman" description="Relax at the peaceful beaches and explore the historical forts and churches in Diu and Daman." link="/tours/domestic/diu-daman" image="/imagesatlas/domesticatlas/diu daman.jpg" />
          <TourCard title="Gujarat with Gir National Park" description="Explore the vibrant culture of Gujarat and spot Asiatic lions in Gir National Park." link="/tours/domestic/gujarat-gir" image="/imagesatlas/domesticatlas/gujarat.jpeg" />
          <TourCard title="Jagannath Puri - Bhubaneswar" description="Visit the sacred temples of Jagannath in Puri and the historic temples of Bhubaneswar." link="/tours/domestic/puri-bhubaneswar" image="/imagesatlas/domesticatlas/jagannath.jpeg" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
