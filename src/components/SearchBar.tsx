import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { tours } from '../data/tours';

export function SearchBar() {
  const [destination, setDestination] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (destination.trim()) {
      const searchTerm = destination.toLowerCase();
      
      // Get matching tours first
      const matchingTours = tours.filter(tour => 
        tour.destination.toLowerCase().includes(searchTerm) ||
        tour.title.toLowerCase().includes(searchTerm)
      );
      
      // Sort them by relevance with improved priority:
      // 1. Exact destination matches
      // 2. Destinations that start with the search term
      // 3. All other matches
      matchingTours.sort((a, b) => {
        const aDestLower = a.destination.toLowerCase();
        const bDestLower = b.destination.toLowerCase();
        
        // First priority: exact matches
        const aExactMatch = aDestLower === searchTerm ? -2 : 0;
        const bExactMatch = bDestLower === searchTerm ? -2 : 0;
        
        // Second priority: starts with search term
        const aStartsWith = aDestLower.startsWith(searchTerm) ? -1 : 0;
        const bStartsWith = bDestLower.startsWith(searchTerm) ? -1 : 0;
        
        // Calculate final score (lower is better)
        const aScore = aExactMatch + aStartsWith;
        const bScore = bExactMatch + bStartsWith;
        
        return aScore - bScore;
      });
      
      // Extract unique destinations, preserving the sorted order
      const uniqueDestinations: string[] = [];
      matchingTours.forEach(tour => {
        if (!uniqueDestinations.includes(tour.destination)) {
          uniqueDestinations.push(tour.destination);
        }
      });
      
      setSuggestions(uniqueDestinations);
    } else {
      setSuggestions([]);
    }
  }, [destination]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (destination.trim()) {
      navigate(`/tours?search=${encodeURIComponent(destination)}`);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setDestination(suggestion);
    setShowSuggestions(false);
    navigate(`/tours?search=${encodeURIComponent(suggestion)}`);
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Where do you want to go?"
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          className="w-full px-6 py-4 text-base md:text-lg rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pl-14 shadow-lg transition-all duration-300"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
        
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full text-left px-6 py-3 hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
      </div>
    </form>
  );
}