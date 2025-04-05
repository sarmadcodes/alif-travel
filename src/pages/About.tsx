import React, { useEffect, useState } from 'react';

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Add scroll animation handling
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll-animation');
      scrollElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const team = [
    { name: "Sarah Johnson", role: "Founder & CEO" },
    { name: "Michael Chen", role: "Travel Expert" },
    { name: "Aisha Patel", role: "Customer Experience" },
    { name: "David Kim", role: "Destination Specialist" }
  ];
  
  return (
    <main className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-black">
            About Alif Travel and Tours
          </h1>
          <p className="max-w-3xl mx-auto text-gray-800 text-lg">
            Creating unforgettable travel experiences since 2010. We specialize in 
            curating unique journeys that connect travelers with authentic experiences.
          </p>
        </div>
        
        <div 
          className={`mb-20 scroll-animation opacity-0 -translate-y-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : ''
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 order-2 md:order-1">
              <div className="h-64 sm:h-80 md:h-96 bg-gray-100">
                <div 
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url('/api/placeholder/600/800')` }}
                />
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-black">Our Story</h2>
              <p className="text-gray-800 mb-4">
                Alif Travel and Tours was founded with a simple mission: to create meaningful 
                travel experiences that transform and inspire. What began as a small 
                passion project has grown into a trusted travel company serving adventurers 
                from around the world.
              </p>
              <p className="text-gray-800 mb-4">
                We believe travel is more than just visiting new places—it's about 
                making connections, understanding different cultures, and creating 
                memories that last a lifetime.
              </p>
              <p className="text-gray-800">
                Our team of experienced travel experts designs each itinerary with care, 
                ensuring you experience the authentic heart of every destination.
              </p>
            </div>
          </div>
        </div>
        
        <div className={`py-16 bg-gray-50 -mx-4 px-4 scroll-animation opacity-0 -translate-y-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : ''
        }`}>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-black">What Makes Us Different</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Authentic Experiences",
                description: "We focus on creating genuine connections with local cultures and communities."
              },
              {
                title: "Personalized Service",
                description: "Every itinerary is tailored to your preferences and travel style."
              },
              {
                title: "Sustainable Travel",
                description: "We're committed to responsible tourism that benefits local communities."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-gray-200 mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 bg-black rounded-full" />
                </div>
                <h3 className="font-semibold text-lg text-black mb-2">{feature.title}</h3>
                <p className="text-gray-800">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div 
          className={`mt-16 scroll-animation opacity-0 -translate-y-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : ''
          }`}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-black">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center shadow-md transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <div 
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url('/api/placeholder/200/200')` }}
                  />
                </div>
                <h3 className="font-semibold text-lg text-black">{member.name}</h3>
                <p className="text-gray-800">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className={`mt-16 py-12 bg-black text-white rounded-lg shadow-xl scroll-animation opacity-0 -translate-y-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : ''
        }`}>
          <div className="text-center px-4 sm:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Ready For Your Next Adventure?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Let us help you plan your dream vacation. Our travel experts are ready 
              to create a personalized itinerary just for you.
            </p>
            <button className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors">
              Start Planning
            </button>
          </div>
        </div>
      </div>
      
      {/* Removed JSX style tag */}
    </main>
  );
}
