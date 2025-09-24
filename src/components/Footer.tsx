import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">MAK LLC</h3>
            <p className="text-gray-300 mb-4">
              Leading metal and tire export company from Japan, committed to quality, 
              sustainability, and reliable international trade partnerships.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-2" />
                <span className="text-sm">info@makllc.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Ferrous Metal Export</li>
              <li>Non-Ferrous Metal Export</li>
              <li>Scrap Tire Export</li>
              <li>Quality Assurance</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span className="text-sm">+81-XX-XXXX-XXXX</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span className="text-sm">Tokyo, Japan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 MAK LLC. All rights reserved. | Metal and Tire Export Specialists
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;