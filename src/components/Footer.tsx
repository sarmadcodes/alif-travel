import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Compass size={24} className="text-black" />
              <span className="font-bold text-lg">Alif travels</span>
            </div>
            <p className="text-gray-600 mb-3 text-sm">
              Discover the world's most amazing destinations with our curated travel experiences.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/tours" className="text-gray-600 hover:text-black transition-colors">
                  Tours
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-black transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-black transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Popular Destinations</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  Switzerland
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  Japan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  Greece
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  New Zealand
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-xs">
                <Phone size={14} className="text-black flex-shrink-0" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-xs">
                <Mail size={14} className="text-black flex-shrink-0" />
                <span className="text-gray-600">info@aliftravels.com</span>
              </li>
              <li className="flex items-center space-x-2 text-xs">
                <MapPin size={14} className="text-black flex-shrink-0" />
                <span className="text-gray-600">123 Adventure St, Travel City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6 pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-gray-600 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Wanderlust. All rights reserved. Developed by{" "}
              <a 
                href="https://www.instagram.com/sarmad0" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                sarmad0
                <ExternalLink size={10} className="ml-1" />
              </a>
            </p>

            <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-xs">
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
