import React from 'react';
import { Sun, Cloud, Leaf, Snowflake } from 'lucide-react';

const seasons = [
  {
    name: 'Spring',
    months: 'March - May',
    icon: Leaf,
    description: 'Cherry blossoms frame outdoor baths in ethereal pink, while mild temperatures make it perfect for onsen hopping.',
    highlights: [
      'Cherry blossom viewing from open-air baths',
      'Comfortable hiking weather',
      'Spring festivals and events'
    ],
    image: 'https://images.unsplash.com/photo-1522623349500-de37a56ea2a5?auto=format&fit=crop&q=80'
  },
  {
    name: 'Summer',
    months: 'June - August',
    icon: Sun,
    description: 'Early morning and evening bathing offers respite from summer heat. Many towns host vibrant festivals.',
    highlights: [
      'Summer festivals and fireworks',
      'Early morning bathing experiences',
      'Lush mountain scenery'
    ],
    image: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&q=80'
  },
  {
    name: 'Autumn',
    months: 'September - November',
    icon: Cloud,
    description: 'Crimson maple leaves create stunning backdrops for outdoor baths. Perfect weather for extended soaking.',
    highlights: [
      'Fall foliage viewing',
      'Harvest season specialties',
      'Ideal temperatures for bathing'
    ],
    image: 'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?auto=format&fit=crop&q=80'
  },
  {
    name: 'Winter',
    months: 'December - February',
    icon: Snowflake,
    description: 'The most magical season for onsen. Snow-covered landscapes and steaming baths create unforgettable scenes.',
    highlights: [
      'Snow-viewing baths',
      'Winter illuminations',
      'Fewer crowds'
    ],
    image: 'https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?auto=format&fit=crop&q=80'
  }
];

export function SeasonalGuide() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif mb-4">Seasonal Onsen Guide</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Each season brings its own unique charm to Japan's onsen towns
        </p>
      </div>

      <div className="space-y-24">
        {seasons.map((season, index) => (
          <div key={season.name} className={`flex flex-col lg:flex-row gap-12 ${
            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
          }`}>
            <div className="lg:w-1/2">
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src={season.image}
                  alt={`${season.name} onsen scene`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <season.icon className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h2 className="text-3xl font-serif">{season.name}</h2>
                  <p className="text-gray-500">{season.months}</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">{season.description}</p>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-medium mb-4">Season Highlights</h3>
                <ul className="space-y-3">
                  {season.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}