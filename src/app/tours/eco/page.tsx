'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TourCard from '../../components/TourCard'; // Import your shared component

export default function EcoToursPage() {
  return (
    <div className="min-h-screen bg-white text-[#013319]">
      <Header />
      <main className="px-6 py-12">
        <h1 className="text-3xl font-bold mb-6 text-center">Explore Eco Tours</h1>
        <p className="text-center max-w-2xl mx-auto text-lg mb-12">
          Sustainable travel experiences that connect you with India&apos;s rich wildlife, forests, and nature reserves.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <TourCard 
            title="Bharatpur Birding Tour"
            description="Embark on a bird-watching journey in Bharatpur, one of India's most famous bird sanctuaries."
            link="/tours/eco/bharatpur-birding"
            image="/imagesatlas/ecoatlas/bharatpur birding tour.jpeg"
          />
          <TourCard 
            title="Panna National Park"
            description="Explore the wildlife and natural beauty of Panna, home to tigers, leopards, and more."
            link="/tours/eco/panna"
            image="/imagesatlas/ecoatlas/panna.jpeg"
          />
          <TourCard 
            title="Snow Leopard Expedition (Spiti)"
            description="Go on a thrilling expedition to spot the elusive Snow Leopard in Spiti Valley."
            link="/tours/eco/snow-leopard"
            image="/imagesatlas/ecoatlas/snow leopard.jpeg"
          />
          <TourCard 
            title="Manas Jungle Safari (Assam)"
            description="Experience the wildlife of Manas National Park with a guided jungle safari."
            link="/tours/eco/manas"
            image="/imagesatlas/ecoatlas/manas.jpeg"
          />
          <TourCard 
            title="Bandhavgarh Wildlife Safari"
            description="Explore the rich biodiversity of Bandhavgarh, home to a large tiger population."
            link="/tours/eco/bandhavgarh"
            image="/imagesatlas/ecoatlas/bandhavgarh.jpeg"
          />
          <TourCard 
            title="Orchha Wildlife Safari"
            description="Experience the serene beauty of Orchha and its rich wildlife on safari."
            link="/tours/eco/orchha"
            image="/imagesatlas/ecoatlas/orchha.jpg"
          />
          <TourCard 
            title="Kaziranga Wildlife Safari"
            description="Spot the famous one-horned rhinos in Assam's Kaziranga National Park."
            link="/tours/eco/kaziranga"
            image="/imagesatlas/ecoatlas/kaziranga.jpeg"
          />
          <TourCard 
            title="Ranthambhore Wildlife Safari"
            description="Explore Ranthambhore, home to tigers and exotic jungle landscapes."
            link="/tours/eco/ranthambhore"
            image="/imagesatlas/ecoatlas/ranthambhore.jpeg"
          />
          <TourCard 
            title="Gorumara Wildlife Safari"
            description="Discover rich flora and fauna in West Bengal's Gorumara National Park."
            link="/tours/eco/gorumara"
            image="/imagesatlas/ecoatlas/gorumara.jpeg"
          />
          <TourCard 
            title="Pench Wildlife Camp"
            description="Enjoy thrilling jungle safaris and wildlife at Pench National Park."
            link="/tours/eco/pench"
            image="/imagesatlas/ecoatlas/penchh.jpg"
          />
          <TourCard 
            title="Kanha National Park Safari"
            description="Explore Kanha National Park, home to the majestic Bengal tiger."
            link="/tours/eco/kanha"
            image="/imagesatlas/ecoatlas/kanha.jpeg"
          />
          <TourCard 
            title="Gir Lion Safari"
            description="Get up close with Asiatic lions in Gujarat's Gir National Park."
            link="/tours/eco/gir"
            image="/imagesatlas/ecoatlas/gir.jpeg"
          />
          <TourCard 
            title="Sundarbans Mangrove Safari"
            description="Spot Royal Bengal tigers and explore the unique mangrove ecosystem."
            link="/tours/eco/sundarbans"
            image="/imagesatlas/ecoatlas/sundarban.jpeg"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}