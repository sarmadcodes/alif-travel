import React from 'react';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FEATURED_TOURS = [
  {
    id: '1',
    title: 'Majestic Swiss Alps',
    destination: 'Switzerland',
    duration: 7,
    price: 2499,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
  },
  {
    id: '2',
    title: 'Ancient Greece Explorer',
    destination: 'Greece',
    duration: 10,
    price: 2999,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '3',
    title: 'Japanese Culture Tour',
    destination: 'Japan',
    duration: 12,
    price: 3499,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
];

export function FeaturedTours() {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Featured Tours</h2>
        <p className="text-gray-600 text-center mb-12">Discover our most popular adventures</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_TOURS.map((tour) => (
            <div 
              key={tour.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => navigate(`/tours/${tour.id}`)}
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
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600">{tour.duration} days</p>
                    <p className="text-2xl font-bold text-blue-600">${tour.price}</p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/tours/${tour.id}`);
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}