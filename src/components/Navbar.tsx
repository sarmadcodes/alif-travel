import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  // Set initial isScrolled state based on current route
  const [isScrolled, setIsScrolled] = useState(location.pathname !== '/');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    // Always use solid background for non-home pages
    if (location.pathname !== '/') {
      setIsScrolled(true);
      return;
    }
    
    // For home page, handle scroll events
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/tours', label: 'Tours' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];
  
  const isHomePage = location.pathname === '/';
  
  // Updated navbar classes with backdrop-blur when scrolled
  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled 
      ? ' backdrop-blur-md shadow-md' 
      : 'bg-transparent'
  }`;
  
  const linkClasses = `transition-colors duration-200 ${
    isHomePage
      ? (isScrolled ? 'text-white hover:text-gray-200' : 'text-white hover:text-gray-200')
      : 'text-black hover:text-gray-600'
  }`;
  
  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Compass 
              className={isHomePage ? 'text-white' : 'text-black'} 
              size={32} 
            />
            <span className={`font-bold text-xl ${
              isHomePage ? 'text-white' : 'text-black'
            }`}>
              Alif travels
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${linkClasses} ${
                  location.pathname === link.path ? 'font-semibold' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className={`px-4 py-2 rounded-full ${
              isHomePage
                ? (isScrolled
                  ? 'bg-gray-600 text-white hover:bg-gray-700'
                  : 'bg-white text-black-600 hover:bg-black-50')
                : 'bg-gray-600 text-white hover:bg-gray-700'
            } transition-colors`}>
              Book Now
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isHomePage ? 'text-white' : 'text-black'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button className="w-full px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
