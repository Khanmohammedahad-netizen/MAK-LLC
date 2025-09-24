import React from 'react';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="home" className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            MAK LLC
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Premium Metal and Tire Export from Japan
          </p>
          <p className="text-lg mb-12 max-w-3xl mx-auto text-blue-50">
            Specializing in high-quality scrap ferrous and non-ferrous metals, 
            and scrap tires exported globally with reliability and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services" 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Our Services
            </a>
            <a 
              href="#contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;