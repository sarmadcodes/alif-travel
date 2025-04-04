import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from './SearchBar';

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1520769945061-0a448c463865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 md:mb-6 animate-fade-in">
          Discover Your Next Adventure
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white text-center mb-8 md:mb-12 max-w-2xl animate-fade-in-up">
          Explore the world's most beautiful destinations with our curated travel experiences
        </p>
        <div className="w-full max-w-2xl animate-fade-in-up">
          <SearchBar />
        </div>
        <button 
          onClick={() => navigate('/tours')}
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
        >
          Explore Tours
        </button>
      </div>
    </div>
  );
}