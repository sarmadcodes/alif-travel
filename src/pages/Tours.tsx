import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import { tours } from '../data/tours';
import type { Tour } from '../types';

export function Tours() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filteredTours, setFilteredTours] = useState<Tour[]>(tours);
  const [selectedDestination, setSelectedDestination] = useState<string>('');
  const [selectedDuration, setSelectedDuration] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');

  useEffect(() => {
    const searchQuery = searchParams.get('search')?.toLowerCase();
    let filtered = [...tours];

    if (searchQuery) {
      filtered = filtered.filter(tour => 
        tour.destination.toLowerCase().includes(searchQuery) ||
        tour.title.toLowerCase().includes(searchQuery)
      );
    }

    if (selectedDestination) {
      filtered = filtered.filter(tour => tour.destination === selectedDestination);
    }

    if (selectedDuration) {
      const [min, max] = selectedDuration.split('-').map(Number);
      filtered = filtered.filter(tour => tour.duration >= min && tour.duration <= max);
    }

    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    setFilteredTours(filtered);
  }, [searchParams, selectedDestination, selectedDuration, sortBy]);

  const destinations = Array.from(new Set(tours.map(tour => tour.destination)));

  // Function to handle navigation to tour details
  const handleTourClick = (tourId: string) => {
    navigate(`/tours/${tourId}`);
  };

  return (
    <main className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 animate-fade-in text-center">Our Tours</h1>
        
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 animate-fade-in">
          <select
            value={selectedDestination}
            onChange={(e) => setSelectedDestination(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="">All Destinations</option>
            {destinations.map(dest => (
              <option key={dest} value={dest}>{dest}</option>
            ))}
          </select>

          <select
            value={selectedDuration}
            onChange={(e) => setSelectedDuration(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="">All Durations</option>
            <option value="1-7">1-7 days</option>
            <option value="8-14">8-14 days</option>
            <option value="15-30">15-30 days</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="">Sort By</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        {/* Tour Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour, index) => (
            <div 
              key={tour.id}
              onClick={() => handleTourClick(tour.id)}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-600">{tour.rating}</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600">{tour.duration} days</p>
                    <p className="text-2xl font-bold text-blue-600">${tour.price}</p>
                  </div>
                  <button 
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the parent div's onClick from firing
                      handleTourClick(tour.id);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
