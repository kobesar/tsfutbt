import React from 'react';
import { Train, CreditCard, Globe, Clock, Luggage, Map } from 'lucide-react';

const tips = [
  {
    icon: Train,
    title: 'Transportation',
    description: 'Most onsen towns are accessible via JR trains. Consider a JR Pass for multiple destinations.',
    details: [
      'Major towns have direct express trains from Tokyo',
      'Local buses connect train stations to ryokans',
      'Taxis are readily available but expensive'
    ]
  },
  {
    icon: CreditCard,
    title: 'Payment & Budgeting',
    description: 'Many traditional ryokans are cash-only. ATMs are available at convenience stores.',
    details: [
      'Budget ¥15,000-30,000 per night for ryokans',
      'Public baths cost ¥500-1,500 per entry',
      'Always carry some cash for small shops'
    ]
  },
  {
    icon: Globe,
    title: 'Language',
    description: 'Basic Japanese phrases will help, but many tourist areas have English support.',
    details: [
      'Download a translation app',
      'Learn basic onsen-related terms',
      'Most ryokans have some English-speaking staff'
    ]
  },
  {
    icon: Clock,
    title: 'Timing Your Visit',
    description: 'Avoid peak holiday periods for better rates and fewer crowds.',
    details: [
      'Book 2-3 months in advance',
      'Weekdays are less crowded',
      'Many baths are open late into evening'
    ]
  },
  {
    icon: Luggage,
    title: 'What to Pack',
    description: 'Ryokans provide many amenities, but some items are essential.',
    details: [
      'Quick-dry towels for day trips',
      'Comfortable walking shoes',
      'Basic first aid supplies'
    ]
  },
  {
    icon: Map,
    title: 'Navigation',
    description: 'Download offline maps and save key locations before your trip.',
    details: [
      'Screenshot train schedules',
      'Save ryokan address in Japanese',
      'Download offline area maps'
    ]
  }
];

export function TravelTips() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif mb-4">Travel Tips</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Essential information for planning your onsen journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tips.map((tip) => (
          <div key={tip.title} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <tip.icon className="w-6 h-6 text-gray-700" />
              </div>
              <h2 className="text-xl font-medium">{tip.title}</h2>
            </div>
            
            <p className="text-gray-600 mb-6">{tip.description}</p>
            
            <ul className="space-y-3">
              {tip.details.map((detail) => (
                <li key={detail} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2" />
                  <span className="text-sm text-gray-600">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-serif mb-6 text-center">Quick Reference</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="font-medium mb-3">Emergency Numbers</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Police: 110</li>
              <li>Ambulance/Fire: 119</li>
              <li>Japan Visitor Hotline: 050-3816-2787</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-3">Useful Apps</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Google Maps (offline areas)</li>
              <li>Google Translate</li>
              <li>Hyperdia (train schedules)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-3">Best Times to Visit</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Spring: March - May</li>
              <li>Autumn: September - November</li>
              <li>Winter: December - February</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}