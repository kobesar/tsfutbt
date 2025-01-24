import React from 'react';
import { MapPin, Thermometer } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Town } from '../types';

interface TownCardProps {
  town: Town;
}

export function TownCard({ town }: TownCardProps) {
  return (
    <Link to={`/towns/${town.id}`} className="group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
        <img
          src={town.image}
          alt={town.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm flex items-center">
          <Thermometer className="w-4 h-4 mr-1" />
          <span>{town.onsenCount} onsen</span>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-medium text-gray-900">{town.name}</h3>
          <p className="text-sm text-gray-500">{town.nameJp}</p>
        </div>
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{town.region}</span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">{town.description}</p>
      </div>
    </Link>
  );
}