import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80"
          alt="Japanese onsen with snow"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-serif text-white mb-6">
            Discover Japan's Ancient Hot Springs
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Experience the serenity of traditional onsen towns across Japan
          </p>
          <button className="bg-white text-gray-900 px-6 py-3 rounded-full inline-flex items-center space-x-2 hover:bg-gray-100 transition-colors">
            <span>Explore Towns</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}