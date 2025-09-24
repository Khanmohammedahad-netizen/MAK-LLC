import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Recycle, Settings, Shield } from 'lucide-react';

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Recycle size={48} />,
      title: "Ferrous Metal Export",
      description: "High-grade steel, iron, and other ferrous metals sourced from Japanese industries and processed to international standards.",
      features: ["Steel scrap", "Iron scrap", "Cast iron", "Stainless steel"]
    },
    {
      icon: <Settings size={48} />,
      title: "Non-Ferrous Metal Export",
      description: "Premium aluminum, copper, brass, and other non-ferrous metals with certified quality and purity levels.",
      features: ["Aluminum scrap", "Copper scrap", "Brass scrap", "Lead scrap"]
    },
    {
      icon: <Shield size={48} />,
      title: "Scrap Tire Export",
      description: "Used tires collected and processed for various applications including fuel, rubber products, and construction materials.",
      features: ["Passenger car tires", "Truck tires", "Industrial tires", "Specialty tires"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive export solutions for scrap metals and tires with unmatched quality and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-blue-900 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-900 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Quality Guarantee</h3>
            <p className="text-lg text-blue-100 mb-6">
              All our exported materials undergo rigorous quality control and meet international standards. 
              We provide detailed documentation and certification for every shipment.
            </p>
            <a 
              href="#contact" 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;