import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TownCard } from './components/TownCard';
import { Map } from './components/Map';
import { Search } from './components/Search';
import { TownProfile } from './components/TownProfile';
import { EtiquetteGuide } from './components/EtiquetteGuide';
import { SeasonalGuide } from './components/SeasonalGuide';
import { TravelTips } from './components/TravelTips';
import type { Town, Onsen } from './types';

const featuredTowns = [
  {
    id: '1',
    name: 'Kusatsu',
    nameJp: '草津',
    description: 'Famous for its unique water stirring tradition and one of Japan\'s most highly regarded onsen towns. The central yubatake (hot water field) is an iconic symbol where hot spring water is cooled using traditional methods. Known for its highly acidic waters with antibacterial properties, Kusatsu offers a variety of bathing experiences from historic public baths to modern resort facilities. The town\'s high altitude location provides cool summers and snowy winters, making it a year-round destination.',
    image: 'https://images.unsplash.com/photo-1578469645742-46cae010e5d4?auto=format&fit=crop&q=80',
    location: { lat: 36.6213, lng: 138.5947 },
    onsenCount: 13,
    region: 'Gunma Prefecture'
  },
  {
    id: '2',
    name: 'Hakone',
    nameJp: '箱根',
    description: 'Historic town with views of Mt. Fuji, known for its diverse range of hot springs and rich cultural heritage. A perfect blend of traditional and modern ryokan experiences.',
    image: 'https://images.unsplash.com/photo-1579700427338-869c5b08d704?auto=format&fit=crop&q=80',
    location: { lat: 35.2324, lng: 139.1069 },
    onsenCount: 17,
    region: 'Kanagawa Prefecture'
  }
];

const sampleOnsens: Onsen[] = [
  {
    id: '1',
    name: 'Sainokawara Rotemburo',
    nameJp: '西の河原露天風呂',
    townId: '1',
    description: 'Large outdoor bath surrounded by natural rock formations, offering panoramic views of the mountains. The bath is particularly stunning during snowfall.',
    images: ['https://images.unsplash.com/photo-1579584707409-68b577774b92?auto=format&fit=crop&q=80'],
    features: ['Outdoor', 'Natural Setting', 'Mountain View', 'Mixed Gender'],
    temperature: 42,
    price: 600,
    type: 'outdoor'
  },
  {
    id: '2',
    name: 'Tenzan Onsen',
    nameJp: '天山温泉',
    townId: '2',
    description: 'Multiple baths with different mineral compositions, including a unique milky-white sulfur bath known for its skin-beautifying properties.',
    images: ['https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&q=80'],
    features: ['Indoor/Outdoor', 'Restaurant', 'Private Baths', 'Massage'],
    temperature: 41,
    price: 1200,
    type: 'both'
  },
  {
    id: '3',
    name: 'Otaki-no-yu',
    nameJp: '大滝乃湯',
    townId: '1',
    description: 'Historic bathhouse featuring traditional yumomi water cooling performances. The main bath offers a unique experience with its high-temperature volcanic waters.',
    images: ['https://images.unsplash.com/photo-1545579133-99bb5ab189bd?auto=format&fit=crop&q=80'],
    features: ['Indoor', 'Historic', 'Traditional Architecture', 'Water Shows'],
    temperature: 45,
    price: 800,
    type: 'indoor'
  }
];

function App() {
  const [searchResults, setSearchResults] = useState<Town[]>(featuredTowns);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-serif text-gray-900 mb-4">Featured Onsen Towns</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover these carefully selected destinations known for their exceptional hot springs and traditional atmosphere
                  </p>
                </div>
                <div className="mb-16">
                  <Search towns={featuredTowns} onSearch={setSearchResults} />
                </div>
                <div className="mb-24">
                  <Map towns={searchResults} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {searchResults.map(town => (
                    <TownCard key={town.id} town={town} />
                  ))}
                </div>
              </section>
            </main>
          } />
          <Route path="/towns/:id" element={
            <TownProfile 
              town={featuredTowns[0]}
              onsens={sampleOnsens.filter(onsen => onsen.townId === '1')}
            />
          } />
          <Route path="/etiquette" element={<EtiquetteGuide />} />
          <Route path="/seasonal-guide" element={<SeasonalGuide />} />
          <Route path="/travel-tips" element={<TravelTips />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;