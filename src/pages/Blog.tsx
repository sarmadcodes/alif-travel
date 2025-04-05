import React, { useEffect, useState } from 'react';

export function Blog() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <main className="pt-16 min-h-screen bg-white">
      <div 
        className={`max-w-7xl mx-auto px-4 py-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-4xl font-bold mb-8 text-black text-center">
          Alif Travel Blog
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, index) => (
            <div 
              key={index}
              className={`bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all duration-700 hover:shadow-xl transform hover:-translate-y-2`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <div 
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
                  style={{ backgroundImage: `url('/api/placeholder/400/300')` }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">Exploring Beautiful Destinations</h3>
                <p className="text-gray-800 mb-4">Discover the hidden gems and popular attractions with Alif Travel and Tours.</p>
                <button className="text-black font-medium hover:text-gray-700 transition-colors underline">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h2 className="text-2xl font-semibold mb-4 text-black">Featured Story</h2>
            <div className="relative h-64 md:h-96 overflow-hidden rounded-lg shadow-lg mb-4">
              <div 
                className="h-full w-full bg-cover bg-center transform transition-transform duration-10000 hover:scale-105"
                style={{ backgroundImage: `url('/api/placeholder/800/500')` }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-white text-xl font-bold">A Journey Through the Himalayas</h3>
                <p className="text-gray-200">An unforgettable expedition to the roof of the world</p>
              </div>
            </div>
            <p className="text-gray-800">
              Join us as we recount our most breathtaking journey yet, where we guide you through the majestic peaks and serene valleys of the Himalayan mountain range.
            </p>
          </div>
          
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h2 className="text-2xl font-semibold mb-4 text-black">Travel Tips</h2>
            <div className="space-y-4">
              {['Packing Essentials for Any Trip', 'How to Travel on a Budget', 'Best Time to Visit Popular Destinations'].map((tip, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                    <div className="w-6 h-6 bg-black rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-medium text-black">{tip}</h3>
                    <p className="text-gray-700 text-sm">Essential advice from our travel experts</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
