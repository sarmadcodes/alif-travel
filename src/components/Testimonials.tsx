import React from 'react';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    role: 'Adventure Enthusiast',
    content: 'The Swiss Alps tour exceeded all my expectations. The guides were knowledgeable and the views were breathtaking!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    role: 'Photography Lover',
    content: 'An incredible journey through Japan. Every detail was perfectly planned, and the cultural experiences were unforgettable.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-400">
      <div className="max-w-7xl mx-auto bg-gray-400">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">What Our Travelers Say</h2>
        <p className="text-white text-center mb-12">Real experiences from real adventurers</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
