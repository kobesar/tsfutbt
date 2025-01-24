import React from 'react';
import { MapPin, Thermometer, Calendar, Clock, Train, CreditCard } from 'lucide-react';
import type { Town, Onsen } from '../types';

interface TownProfileProps {
  town: Town;
  onsens: Onsen[];
}

export function TownProfile({ town, onsens }: TownProfileProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative aspect-[21/9] rounded-xl overflow-hidden mb-8">
        <img
          src={town.image}
          alt={town.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="flex items-center justify-between">
            <h1 className="text-5xl font-serif">{town.name}</h1>
            <p className="text-3xl opacity-90">{town.nameJp}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="flex items-center space-x-4 mb-8 text-gray-600">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{town.region}</span>
            </div>
            <div className="flex items-center">
              <Thermometer className="w-5 h-5 mr-2" />
              <span>{onsens.length} Onsen</span>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-12 leading-relaxed">{town.description}</p>

          <h2 className="text-2xl font-serif mb-6">Featured Onsen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {onsens.map(onsen => (
              <div key={onsen.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="aspect-[3/2] relative">
                  <img
                    src={onsen.images[0]}
                    alt={onsen.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    {onsen.temperature}°C
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-medium">{onsen.name}</h3>
                    <p className="text-sm text-gray-500">{onsen.nameJp}</p>
                  </div>
                  <p className="text-gray-600 mb-4">{onsen.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {onsen.features.map(feature => (
                      <span key={feature} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">¥{onsen.price.toLocaleString()}</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full capitalize">{onsen.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-24">
            <h3 className="text-lg font-medium mb-6">Visitor Information</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">Best Season</span>
                </div>
                <p className="text-sm text-gray-600">Winter (December - February) for snow views</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">Recommended Stay</span>
                </div>
                <p className="text-sm text-gray-600">2-3 days to fully experience the town</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                  <Train className="w-4 h-4" />
                  <span className="font-medium">Access</span>
                </div>
                <p className="text-sm text-gray-600">2.5 hours from Tokyo via JR Line</p>
              </div>
              <div>
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                  <CreditCard className="w-4 h-4" />
                  <span className="font-medium">Average Budget</span>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Accommodation: ¥15,000 - ¥30,000/night</li>
                  <li>Day-use onsen: ¥500 - ¥2,000</li>
                  <li>Meals: ¥3,000 - ¥8,000/day</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t">
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Book Accommodation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}