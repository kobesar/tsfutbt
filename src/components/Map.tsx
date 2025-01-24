import React from 'react';
import { MapPin } from 'lucide-react';
import type { Town } from '../types';

interface MapProps {
  towns: Town[];
  onSelectTown?: (town: Town) => void;
}

export function Map({ towns, onSelectTown }: MapProps) {
  return (
    <div className="bg-gray-100 rounded-lg p-8 relative min-h-[600px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-gray-500">Interactive map will be implemented with a mapping library of your choice</p>
      </div>
      
      <div className="relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-4 max-w-xs">
          <h3 className="font-medium mb-2">Featured Locations</h3>
          <ul className="space-y-2">
            {towns.map(town => (
              <li 
                key={town.id}
                className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded cursor-pointer"
                onClick={() => onSelectTown?.(town)}
              >
                <MapPin className="w-4 h-4 text-gray-500" />
                <span>{town.name}</span>
                <span className="text-sm text-gray-500">{town.nameJp}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}