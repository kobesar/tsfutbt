import React, { useState } from 'react';
import { Search as SearchIcon, Filter } from 'lucide-react';
import type { Town } from '../types';

interface SearchProps {
  towns: Town[];
  onSearch: (results: Town[]) => void;
}

export function Search({ towns, onSearch }: SearchProps) {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({
    region: '',
    minOnsen: 0
  });

  const handleSearch = () => {
    const results = towns.filter(town => {
      const matchesQuery = town.name.toLowerCase().includes(query.toLowerCase()) ||
                          town.nameJp.includes(query) ||
                          town.region.toLowerCase().includes(query.toLowerCase());
      
      const matchesRegion = !filters.region || town.region === filters.region;
      const matchesOnsenCount = town.onsenCount >= filters.minOnsen;

      return matchesQuery && matchesRegion && matchesOnsenCount;
    });

    onSearch(results);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by town name or region..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          
          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Search
          </button>
        </div>

        <div className="mt-4 flex items-center space-x-4 text-sm">
          <Filter className="w-4 h-4 text-gray-400" />
          <select
            value={filters.region}
            onChange={(e) => setFilters(f => ({ ...f, region: e.target.value }))}
            className="rounded border border-gray-200 px-2 py-1"
          >
            <option value="">All Regions</option>
            <option value="Gunma Prefecture">Gunma Prefecture</option>
            <option value="Kanagawa Prefecture">Kanagawa Prefecture</option>
          </select>

          <div className="flex items-center space-x-2">
            <label>Min. Onsen:</label>
            <input
              type="number"
              min="0"
              value={filters.minOnsen}
              onChange={(e) => setFilters(f => ({ ...f, minOnsen: parseInt(e.target.value) }))}
              className="w-16 rounded border border-gray-200 px-2 py-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}