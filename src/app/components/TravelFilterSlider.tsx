'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ── Types ──────────────────────────────────────────────────────────────────
export interface TravelFilterState {
  traveler: string | null;
  category: string;
  recommendedSlugs: string[] | null; // null = show all in category
}

interface Props {
  onChange: (state: TravelFilterState) => void;
}

interface SliderItem {
  id: string;
  label: string;
  emoji: string;
  color: string;
  accent: string;
  section: 'traveler' | 'category';
  desc: string;
}

interface Recommendation {
  badge: string;
  badgeColor: string;
  headline: string;
  subline: string;
  tags: string[];
  icon: string;
  // Real tour slugs from tours.ts that match this combo
  slugs: string[];
}

// ── Slider Data ────────────────────────────────────────────────────────────
const TRAVELER_ITEMS: SliderItem[] = [
  { id: 'solo',    section: 'traveler', label: 'Solo',    emoji: '🧳', color: '#0f4c35', accent: '#34d399', desc: 'Just you & the world' },
  { id: 'couple',  section: 'traveler', label: 'Couple',  emoji: '💑', color: '#7c1d2f', accent: '#fb7185', desc: 'Romance awaits'        },
  { id: 'family',  section: 'traveler', label: 'Family',  emoji: '👨‍👩‍👧‍👦', color: '#1e3a5f', accent: '#60a5fa', desc: 'Memories together'   },
  { id: 'friends', section: 'traveler', label: 'Friends', emoji: '🎉', color: '#4a1d96', accent: '#c084fc', desc: 'Squad goals'            },
];

const CATEGORY_ITEMS: SliderItem[] = [
  { id: 'all',           section: 'category', label: 'All Tours',     emoji: '🌍', color: '#013319', accent: '#f5c624', desc: 'Every experience' },
  { id: 'domestic',      section: 'category', label: 'Domestic',      emoji: '🏞️', color: '#065f46', accent: '#6ee7b7', desc: 'Explore India'    },
  { id: 'international', section: 'category', label: 'International', emoji: '✈️', color: '#1e3a5f', accent: '#93c5fd', desc: 'See the world'     },
  { id: 'adventure',     section: 'category', label: 'Adventure',     emoji: '🏔️', color: '#422006', accent: '#fbbf24', desc: 'Live on the edge'  },
  { id: 'eco',           section: 'category', label: 'Eco Tours',     emoji: '🌿', color: '#14532d', accent: '#86efac', desc: 'Travel green'      },
];

const DIVIDER_ID = '__divider__';
const ALL_ITEMS  = [...TRAVELER_ITEMS, { id: DIVIDER_ID } as SliderItem, ...CATEGORY_ITEMS];

// ── Smart Recommendation Engine (real slugs from tours.ts) ─────────────────
//
//  SOLO  ──────────────────────────────────────────────────────────────────
//  adventure : mountain treks that reward the lone wolf — Tungnath, Kedarkantha,
//              Hampta Pass, Dayara Bugyal (the "not crowded" gems)
//  domestic  : spiritual solo roads — Meghalaya, Dharamshala, Srinagar, Spiti Valley
//  international: backpacker freedom — Vietnam, Sri Lanka, Bhutan, Bali
//  eco       : mindful solo nature — Snow Leopard, Bharatpur Birding, Panna, Gorumara
//
//  COUPLE  ────────────────────────────────────────────────────────────────
//  adventure : "adventure + luxury" — Ladakh, Spiti Valley, Sikkim (stunning backdrops)
//  domestic  : romantic & devotional India — Kashmir, Goa, Rajasthan, Srinagar, Kerala
//  international: exotic romance — Bali, Phuket-Krabi, Maldives, Spain, Bhutan
//  eco       : intimate nature — Kaziranga, Ranthambhore, Sundarbans (private camp feel)
//
//  FAMILY  ────────────────────────────────────────────────────────────────
//  adventure : safe thrills — Nainital+Corbett, Manali-Kasol, Dayara Bugyal
//  domestic  : devotional + historical — Kedarnath, Agra-Mathura-Vrindavan,
//              Golden Triangle, Puri-Bhubaneswar, Gujarat Dwarka-Somnath
//  international: family fun — Singapore, Dubai, Pattaya-Bangkok, Sri Lanka, Kenya
//  eco       : wildlife education — Kaziranga, Kanha, Pench, Gir, Bandhavgarh
//
//  FRIENDS  ───────────────────────────────────────────────────────────────
//  adventure : ZNMD / DCHB vibes — Spiti, Ladakh, Hampta Pass, Manali-Kasol
//  domestic  : YJH vibes — Goa, Manali, Kasol, Meghalaya, Rann of Kutch
//  international: squad international — Pattaya-Bangkok, Phuket-Krabi, Bali,
//                Spain, Vietnam, Dubai
//  eco       : group camps — Pench, Gorumara, Manas, Orchha
// ─────────────────────────────────────────────────────────────────────────

const RECOMMENDATIONS: Record<string, Record<string, Recommendation>> = {

  // ── SOLO ────────────────────────────────────────────────────────────────
  solo: {
    adventure: {
      badge: '🔥 Perfect Match', badgeColor: '#f97316',
      icon: '🏔️',
      headline: 'Built for the Bold Solo Explorer',
      subline: 'Summit Kedarkantha at dawn. Cross Hampta Pass alone. Trek Tungnath before the crowds arrive. These are the trails that reward the lone wolf.',
      tags: ['Kedarkantha','Tungnath','Hampta Pass','Dayara Bugyal','Solo Summit'],
      slugs: ['kedarkantha','tungnath-chopta','hampta-pass','dayara-bugyal'],
    },
    domestic: {
      badge: '🗺️ Solo Explorer', badgeColor: '#0ea5e9',
      icon: '🏞️',
      headline: 'Hidden India, Your Way',
      subline: 'Wander through Meghalaya\'s living root bridges, meditate in Dharamshala, float on Srinagar\'s Dal Lake — no waiting on anyone.',
      tags: ['Meghalaya','Dharamshala','Srinagar','Spiti Valley','Off-beat'],
      slugs: ['meghalaya','dharamshala-kareri-lake','srinagar','spiti-valley'],
    },
    international: {
      badge: '🌐 Solo Wanderer', badgeColor: '#8b5cf6',
      icon: '✈️',
      headline: 'The World is Your Playground',
      subline: 'Motorbike through Vietnam. Find yourself in Bhutan\'s monasteries. Sip Bali sunrise coffee alone. Sri Lanka solo on ₹55K.',
      tags: ['Vietnam','Bhutan','Bali','Sri Lanka','Backpacker'],
      slugs: ['vietnam','bhutan','bali','sri-lanka'],
    },
    eco: {
      badge: '✨ Mindful Solo', badgeColor: '#22c55e',
      icon: '🌿',
      headline: 'Reconnect With Nature, Alone',
      subline: 'Track snow leopards in Spiti. Birdwatch at Bharatpur at dawn. Spot rhinos solo in Panna. Silence is the luxury.',
      tags: ['Snow Leopard','Bharatpur','Panna','Gorumara','Wildlife Solo'],
      slugs: ['snow-leopard','bharatpur-birding','panna','gorumara'],
    },
    all: {
      badge: '👤 Solo Mode', badgeColor: '#34d399',
      icon: '🌍',
      headline: 'Every Tour, Solo-Ready',
      subline: 'From mountain summits to wildlife safaris — all tours available with solo room add-ons, flexible dates and group-join options.',
      tags: ['Flexible Dates','Solo Rooms','Group Join','Any Category'],
      slugs: [],
    },
  },

  // ── COUPLE ──────────────────────────────────────────────────────────────
  couple: {
    adventure: {
      badge: '💥 Adventure + Luxury', badgeColor: '#f97316',
      icon: '🏕️',
      headline: 'Thrill Together, Fall Deeper',
      subline: 'Sunrise on Ladakh\'s Pangong. Stargazing in Spiti. Sikkim\'s misty Kanchenjunga. Adventure that ends with a candlelit dinner under the stars.',
      tags: ['Ladakh','Spiti Valley','Sikkim','Glamping','Couple Trek'],
      slugs: ['ladakh','spiti-valley','sikkim'],
    },
    domestic: {
      badge: '❤️ Romantic India', badgeColor: '#e11d48',
      icon: '🕌',
      headline: 'Exotic Domestic & Devotional Getaways',
      subline: 'Kashmir houseboat for two. Goa sunsets. Rajasthan palace stays. Kerala backwater cruise. India\'s most romantic chapters — together.',
      tags: ['Kashmir','Goa','Rajasthan','Kerala','Srinagar','Palace Stays'],
      slugs: ['kashmir','goa','rajasthan','kerala','srinagar'],
    },
    international: {
      badge: '✈️ Exotic Romance', badgeColor: '#a78bfa',
      icon: '💎',
      headline: 'World-Class Romance Abroad',
      subline: 'Bali temple sunsets. Phuket-Krabi island-hopping. Spain\'s flamenco nights. Bhutan\'s monastery serenity. Crafted for two.',
      tags: ['Bali','Phuket-Krabi','Spain','Bhutan','Fine Dining','Overwater Villas'],
      slugs: ['bali','phuket-krabi','spain','bhutan'],
    },
    eco: {
      badge: '💚 Green Romance', badgeColor: '#22c55e',
      icon: '🌿',
      headline: 'Love in the Lap of Nature',
      subline: 'Spot tigers together at Ranthambhore. Elephant rides in Kaziranga. Sundarbans boat safari at dusk — wild and intimate.',
      tags: ['Ranthambhore','Kaziranga','Sundarbans','Private Camp','Stargazing'],
      slugs: ['ranthambhore','kaziranga','sundarbans'],
    },
    all: {
      badge: '💑 Curated for Two', badgeColor: '#fb7185',
      icon: '💑',
      headline: 'Every Tour, Romance-Ready',
      subline: 'Private rooms, couple packages, honeymoon add-ons — every tour available with a romantic upgrade.',
      tags: ['Honeymoon','Private Tours','Luxury Stays','Couple Packages'],
      slugs: [],
    },
  },

  // ── FAMILY ──────────────────────────────────────────────────────────────
  family: {
    adventure: {
      badge: '🎒 Family Thrills', badgeColor: '#f97316',
      icon: '🌊',
      headline: 'Adventures the Whole Family Loves',
      subline: 'Jim Corbett safari the kids will talk about for years. Nainital lakes. Manali snow. Dayara Bugyal meadows. Safe, guided, unforgettable.',
      tags: ['Jim Corbett','Nainital','Manali-Kasol','Dayara Bugyal','Kid-Safe'],
      slugs: ['nainital-jimcorbett','manali-kasol','dayara-bugyal'],
    },
    domestic: {
      badge: '🙏 Devotional & Historical', badgeColor: '#f59e0b',
      icon: '🛕',
      headline: 'Sacred & Historical India for Families',
      subline: 'Kedarnath darshan. Taj Mahal at sunrise. Golden Triangle for history lovers. Puri Jagannath. Gujarat\'s temples. Faith and heritage — family bonding at its deepest.',
      tags: ['Kedarnath','Golden Triangle','Agra-Mathura','Puri','Gujarat Temples','Char Dham'],
      slugs: ['kedarnath','golden-triangle','agra-mathura-vrindavan','puri-bhubaneswar','gujarat-dwarka-somnath'],
    },
    international: {
      badge: '🌐 Family Fun Abroad', badgeColor: '#3b82f6',
      icon: '🎡',
      headline: 'Give Kids the World',
      subline: 'Universal Studios Singapore. Dubai Atlantis. Pattaya coral islands. Sri Lanka elephants. Kenya safari — memories that outgrow any toy.',
      tags: ['Singapore','Dubai','Pattaya-Bangkok','Sri Lanka','Kenya','Theme Parks'],
      slugs: ['singapore','dubai','pattaya-bangkok','sri-lanka','kenya'],
    },
    eco: {
      badge: '🌱 Wildlife Education', badgeColor: '#16a34a',
      icon: '🐘',
      headline: 'Teach Them to Love the Earth',
      subline: 'Kaziranga rhino rides. Kanha tigers. Pench jungle camps. Gir lions. Children who see wildlife never forget it.',
      tags: ['Kaziranga','Kanha','Pench','Gir','Bandhavgarh','Jungle Camp'],
      slugs: ['kaziranga','kanha','pench','gir','bandhavgarh'],
    },
    all: {
      badge: '👨‍👩‍👧 Family Mode', badgeColor: '#60a5fa',
      icon: '🌍',
      headline: 'Every Tour, Family-Ready',
      subline: 'Family rooms, child menus, guided supervision and age-appropriate pacing — every tour can be tailored for your family.',
      tags: ['Family Rooms','Child Menus','Guided','Comfortable Stays'],
      slugs: [],
    },
  },

  // ── FRIENDS ─────────────────────────────────────────────────────────────
  friends: {
    adventure: {
      badge: '🔥 ZNMD Vibes', badgeColor: '#f97316',
      icon: '⛺',
      headline: 'Zindagi Na Milegi Dobara — Live It',
      subline: 'Spiti road trip. Ladakh bike run. Hampta Pass crossing. Manali after dark. The trip your group will quote for the next 10 years.',
      tags: ['Spiti Valley','Ladakh','Hampta Pass','Manali-Kasol','Road Trip'],
      slugs: ['spiti-valley','ladakh','hampta-pass','manali-kasol'],
    },
    domestic: {
      badge: '🎬 Dil Chahta Hai India', badgeColor: '#f59e0b',
      icon: '🛣️',
      headline: 'Yeh Jawani Hai Deewani — Desi Edition',
      subline: 'Goa nights. Manali snow. Meghalaya waterfalls. Rann of Kutch salt flats. Kasol cafés. India through the lens of friendship.',
      tags: ['Goa','Manali','Meghalaya','Rann of Kutch','Kasol','Road Trips'],
      slugs: ['goa','manali','meghalaya','rann-of-kutch','manali-kasol'],
    },
    international: {
      badge: '✈️ Squad International', badgeColor: '#8b5cf6',
      icon: '🌏',
      headline: 'ZNMD Abroad — Your Crew Deserves This',
      subline: 'Bangkok full-moon party. Phuket island hop. Bali villa with the squad. Spain\'s La Tomatina energy. Vietnam backpacker trail. Go.',
      tags: ['Pattaya-Bangkok','Phuket-Krabi','Bali','Spain','Vietnam','Dubai','Group Deals'],
      slugs: ['pattaya-bangkok','phuket-krabi','bali','spain','vietnam','dubai'],
    },
    eco: {
      badge: '🌿 Green Squad', badgeColor: '#22c55e',
      icon: '🏕️',
      headline: 'Camp, Trek, Repeat',
      subline: 'Pench bonfire nights with the crew. Gorumara jungle camps. Manas river rides. Orchha boat safari. Adventure that doesn\'t leave a footprint.',
      tags: ['Pench','Gorumara','Manas','Orchha','Jungle Camp','Group Camping'],
      slugs: ['pench','gorumara','manas','orchha'],
    },
    all: {
      badge: '🎉 Friends Mode', badgeColor: '#c084fc',
      icon: '🎉',
      headline: 'Tours Built for Groups',
      subline: 'Group rates, shared accommodations, activity-packed itineraries — every tour becomes a blockbuster with your crew.',
      tags: ['Group Rates','Shared Rooms','Activity Packs','Any Category'],
      slugs: [],
    },
  },
};

const DEFAULT_REC: Recommendation = {
  badge: '🌟 Personalise Your Trip', badgeColor: '#f5c624',
  icon: '🗺️',
  headline: 'Find Your Perfect Journey',
  subline: "Pick who's joining and a tour category — we'll instantly match you with the best tours from our collection.",
  tags: ['Solo','Couple','Family','Friends','Adventure','Eco','International'],
  slugs: [],
};

const VISIBLE = 4;

// ── Shared Card ────────────────────────────────────────────────────────────
function ItemCard({
  item, isActive, onClick, compact = false,
}: {
  item: SliderItem; isActive: boolean; onClick: () => void; compact?: boolean;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -4, scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      className="rounded-2xl relative flex flex-col items-center justify-between cursor-pointer select-none overflow-hidden w-full"
      style={{
        minHeight:  compact ? 118 : 168,
        background: isActive
          ? `linear-gradient(145deg, ${item.color}f0, ${item.color})`
          : 'linear-gradient(145deg, #f6f8f6, #ecf0ec)',
        boxShadow: isActive ? `0 12px 32px ${item.accent}44` : '0 2px 6px rgba(0,0,0,0.05)',
        border:    `2px solid ${isActive ? item.accent : 'transparent'}`,
        transition: 'all 0.25s ease',
      }}
    >
      {/* section tag */}
      <div
        className="absolute top-0 left-0 right-0 text-center py-0.5 text-[8px] font-extrabold uppercase tracking-widest"
        style={{ color: isActive ? item.accent : '#ccc' }}
      >
        {item.section === 'traveler' ? 'Traveler' : 'Category'}
      </div>
      {/* glow */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{ background: `radial-gradient(circle at 60% 20%, ${item.accent}, transparent 65%)` }}
      />
      {/* emoji */}
      <div className={`relative z-10 select-none ${compact ? 'text-3xl mt-5' : 'text-5xl mt-7'}`}>
        {item.emoji}
      </div>
      {/* label */}
      <div className="relative z-10 w-full px-2 pb-3 text-center">
        <div
          className="font-extrabold uppercase leading-tight"
          style={{ fontSize: compact ? '10px' : '11px', letterSpacing: '0.14em', color: isActive ? item.accent : item.color }}
        >
          {item.label}
        </div>
        {!compact && (
          <div className="text-[10px] mt-0.5" style={{ color: isActive ? `${item.accent}99` : '#bbb' }}>
            {item.desc}
          </div>
        )}
      </div>
      {/* tick */}
      {isActive && (
        <motion.div
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 18 }}
          className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold z-20"
          style={{ background: item.accent, color: item.color }}
        >✓</motion.div>
      )}
    </motion.button>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function TravelFilterSlider({ onChange }: Props) {
  const [activeTraveler, setActiveTraveler] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [sliderIdx, setSliderIdx]           = useState(0);
  const [isMobile, setIsMobile]             = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalItems = ALL_ITEMS.length;
  const maxIdx     = Math.max(0, totalItems - VISIBLE);

  const rec: Recommendation = activeTraveler
    ? (RECOMMENDATIONS[activeTraveler]?.[activeCategory] ?? DEFAULT_REC)
    : DEFAULT_REC;

  const activeTravelerData = TRAVELER_ITEMS.find(t => t.id === activeTraveler);

  // emit upward — include slugs
  useEffect(() => {
    const slugs = activeTraveler ? rec.slugs : null;
    onChange({ traveler: activeTraveler, category: activeCategory, recommendedSlugs: slugs });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTraveler, activeCategory]);

  // mobile detect
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // auto-rotate
  const resetAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    if (!isMobile) {
      autoRef.current = setInterval(() => setSliderIdx(i => i >= maxIdx ? 0 : i + 1), 2600);
    }
  };
  useEffect(() => {
    resetAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  const go = (dir: -1 | 1) => { setSliderIdx(i => Math.min(maxIdx, Math.max(0, i + dir))); resetAuto(); };
  const handleTraveler = (id: string) => setActiveTraveler(p => p === id ? null : id);
  const handleCategory = (id: string) => setActiveCategory(id);

  // ── Shared Rec Banner ──────────────────────────────────────────────────
  const RecBanner = (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${activeTraveler ?? 'none'}-${activeCategory}`}
        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35 }}
        className="mx-4 mb-4 rounded-2xl p-4 relative overflow-hidden"
        style={{
          background: activeTravelerData
            ? `linear-gradient(135deg, ${activeTravelerData.color}15, ${activeTravelerData.accent}10)`
            : 'linear-gradient(135deg, #f0fdf4, #fefce8)',
          border: `1.5px solid ${activeTravelerData ? `${activeTravelerData.accent}40` : '#e9ecef'}`,
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] rounded-2xl"
          style={{ backgroundImage: 'radial-gradient(circle, #013319 1px, transparent 1px)', backgroundSize: '14px 14px' }}
        />
        <div className="relative z-10 flex items-start gap-3">
          <div className="text-3xl flex-shrink-0">{rec.icon}</div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span
                className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full text-white tracking-wide"
                style={{ background: rec.badgeColor }}
              >{rec.badge}</span>
              {!activeTraveler && (
                <span className="text-[10px] text-gray-400 italic">← Select a traveler type to personalise</span>
              )}
            </div>
            <h3 className="font-extrabold text-sm mb-1 leading-snug" style={{ color: activeTravelerData?.color ?? '#013319' }}>
              {rec.headline}
            </h3>
            <p className="text-[11px] text-gray-500 leading-relaxed mb-2.5">{rec.subline}</p>
            <div className="flex flex-wrap gap-1.5">
              {rec.tags.map(tag => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                  style={{
                    background: activeTravelerData ? `${activeTravelerData.accent}20` : '#fef9c3',
                    color: activeTravelerData?.color ?? '#92400e',
                  }}
                >{tag}</span>
              ))}
            </div>
            {/* show tour count if slugs available */}
            {activeTraveler && rec.slugs.length > 0 && (
              <p className="text-[10px] text-emerald-600 font-bold mt-2">
                ↓ {rec.slugs.length} handpicked tours shown below
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );

  // ── Shared Header ──────────────────────────────────────────────────────
  const Header = (
    <div className="flex items-center justify-between px-5 pt-5 pb-3">
      <div>
        <h2 className="text-base font-extrabold text-[#013319] tracking-tight">Plan Your Trip</h2>
        <p className="text-[11px] text-gray-400 mt-0.5">Who's joining · What kind of tour</p>
      </div>
      <div className="flex gap-2 items-center flex-wrap justify-end">
        {activeTraveler && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            className="text-[11px] font-bold px-2.5 py-1 rounded-full text-white flex items-center gap-1"
            style={{ background: activeTravelerData?.color }}
          >
            {TRAVELER_ITEMS.find(t => t.id === activeTraveler)?.emoji}
            {activeTraveler.charAt(0).toUpperCase() + activeTraveler.slice(1)}
            <button onClick={() => setActiveTraveler(null)} className="ml-0.5 opacity-70 hover:opacity-100">×</button>
          </motion.span>
        )}
        {activeCategory !== 'all' && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            className="text-[11px] font-bold px-2.5 py-1 rounded-full text-white flex items-center gap-1"
            style={{ background: CATEGORY_ITEMS.find(c => c.id === activeCategory)?.color }}
          >
            {CATEGORY_ITEMS.find(c => c.id === activeCategory)?.emoji}
            {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
            <button onClick={() => setActiveCategory('all')} className="ml-0.5 opacity-70 hover:opacity-100">×</button>
          </motion.span>
        )}
      </div>
    </div>
  );

  // ══════════════════════════════════════════════════════════
  // MOBILE — static grids, no slider
  // ══════════════════════════════════════════════════════════
  if (isMobile) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        {Header}
        {/* Traveler 4-grid */}
        <div className="px-4 pb-3">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-gray-300 mb-2 pl-1">Who's Joining?</p>
          <div className="grid grid-cols-4 gap-2">
            {TRAVELER_ITEMS.map(item => (
              <ItemCard key={item.id} item={item} isActive={activeTraveler === item.id} onClick={() => handleTraveler(item.id)} compact />
            ))}
          </div>
        </div>
        <div className="mx-4 my-1 h-px bg-gray-100" />
        {/* Category: 3 + 2 */}
        <div className="px-4 pb-3">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-gray-300 mb-2 pl-1">Tour Category</p>
          <div className="grid grid-cols-3 gap-2 mb-2">
            {CATEGORY_ITEMS.slice(0, 3).map(item => (
              <ItemCard key={item.id} item={item} isActive={activeCategory === item.id} onClick={() => handleCategory(item.id)} compact />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {CATEGORY_ITEMS.slice(3).map(item => (
              <ItemCard key={item.id} item={item} isActive={activeCategory === item.id} onClick={() => handleCategory(item.id)} compact />
            ))}
          </div>
        </div>
        {RecBanner}
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════
  // DESKTOP — rotating slider
  // ══════════════════════════════════════════════════════════
  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
      {Header}
      <p className="text-center text-[11px] text-gray-400 px-5 pb-1">
        Scroll through traveler types & categories — pick one of each for smart recommendations
      </p>

      {/* Track */}
      <div className="px-5 pb-2 overflow-hidden">
        <div
          className="flex gap-3"
          style={{ transform: `translateX(-${sliderIdx * (100 / VISIBLE)}%)`, transition: 'transform 0.52s cubic-bezier(.4,0,.2,1)' }}
        >
          {ALL_ITEMS.map(item => {
            if (item.id === DIVIDER_ID) {
              return (
                <div
                  key="divider"
                  className="flex-shrink-0 flex flex-col items-center justify-center"
                  style={{ width: `calc(${100 / VISIBLE}% - 9px)`, minHeight: 168 }}
                >
                  <div className="h-20 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
                  <div className="my-2 text-[9px] font-extrabold text-gray-300 uppercase tracking-widest select-none" style={{ writingMode: 'vertical-lr' }}>
                    Category
                  </div>
                  <div className="h-20 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
                </div>
              );
            }
            const isTraveler = item.section === 'traveler';
            const isActive   = isTraveler ? activeTraveler === item.id : activeCategory === item.id;
            return (
              <div key={item.id} className="flex-shrink-0" style={{ width: `calc(${100 / VISIBLE}% - 9px)` }}>
                <ItemCard item={item} isActive={isActive} onClick={() => isTraveler ? handleTraveler(item.id) : handleCategory(item.id)} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3 pb-3">
        <button onClick={() => go(-1)} disabled={sliderIdx === 0}
          className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-[#013319] hover:text-white disabled:opacity-20 transition-all text-base leading-none"
        >‹</button>
        <div className="flex gap-1.5 items-center">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button key={i} onClick={() => { setSliderIdx(i); resetAuto(); }}
              className="rounded-full transition-all duration-300"
              style={{ width: sliderIdx === i ? 16 : 5, height: 5, background: sliderIdx === i ? '#013319' : '#d1d5db' }}
            />
          ))}
        </div>
        <button onClick={() => go(1)} disabled={sliderIdx >= maxIdx}
          className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-[#013319] hover:text-white disabled:opacity-20 transition-all text-base leading-none"
        >›</button>
      </div>

      {/* Progress bar */}
      <div className="h-0.5 bg-gray-100 overflow-hidden mb-4 rounded-full mx-auto" style={{ maxWidth: 180 }}>
        <motion.div
          key={sliderIdx} initial={{ width: '0%' }} animate={{ width: '100%' }}
          transition={{ duration: 2.6, ease: 'linear' }}
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(to right, #013319, #f5c624)' }}
        />
      </div>

      {RecBanner}
    </div>
  );
}