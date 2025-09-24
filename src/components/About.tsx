import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Globe, Award, Truck } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About MAK LLC</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the way in sustainable metal and tire recycling with global reach and local expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-blue-900" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Exporting high-quality materials to markets worldwide with established international partnerships.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-blue-900" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">
                Rigorous quality control processes ensure only the finest materials meet our export standards.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-blue-900" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliable Logistics</h3>
              <p className="text-gray-600">
                Efficient supply chain management and logistics ensure timely delivery to global destinations.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              At MAK LLC, we are committed to sustainable resource management through the responsible 
              export of scrap metals and tires from Japan. We bridge the gap between Japanese quality 
              and global demand, ensuring environmental responsibility while delivering exceptional value 
              to our international partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;