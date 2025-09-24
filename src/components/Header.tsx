import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-900">MAK LLC</h1>
            <span className="ml-2 text-sm text-gray-600">Metal & Tire Export</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-900 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-900 transition-colors">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors">Contact</a>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-900 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-900 transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;