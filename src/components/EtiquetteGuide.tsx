import React from 'react';
import { Droplets, Ban, Clock, Heart } from 'lucide-react';

const etiquetteSteps = [
  {
    icon: Droplets,
    title: 'Wash Before Entering',
    description: 'Thoroughly clean yourself at the washing stations before entering the bath'
  },
  {
    icon: Ban,
    title: 'No Swimsuits',
    description: 'Onsen are enjoyed nude. Small towels are provided for modesty while walking'
  },
  {
    icon: Clock,
    title: 'Timing Matters',
    description: 'Avoid bathing right after meals or drinking alcohol'
  },
  {
    icon: Heart,
    title: 'Respect Others',
    description: 'Keep voices low and avoid splashing or swimming'
  }
];

export function EtiquetteGuide() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif mb-4">Onsen Etiquette Guide</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Essential guidelines for enjoying Japanese hot springs respectfully
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {etiquetteSteps.map((step, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6">
              <step.icon className="w-8 h-8 text-gray-700" />
            </div>
            <h3 className="text-xl font-medium mb-4">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-serif mb-8 text-center">Additional Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4">Before Entering</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Remove all clothing in the changing room</li>
              <li>• Take only a small towel into the bathing area</li>
              <li>• Tie up long hair to keep it out of the water</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4">In the Bath</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Enter the water slowly and quietly</li>
              <li>• Keep your small towel out of the water</li>
              <li>• Avoid excessive movement or splashing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}