import React from 'react';
import { Menu, Search, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-serif text-xl text-gray-900">
            Onsen<span className="text-indigo-600">Journey</span>
          </Link>
          
          <div className="hidden sm:flex space-x-8">
            <Link to="/towns" className="text-gray-600 hover:text-gray-900">Towns</Link>
            <Link to="/seasonal-guide" className="text-gray-600 hover:text-gray-900">Seasonal Guide</Link>
            <Link to="/travel-tips" className="text-gray-600 hover:text-gray-900">Travel Tips</Link>
            <Link to="/etiquette" className="text-gray-600 hover:text-gray-900">Etiquette</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="sm:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}