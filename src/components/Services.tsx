import React from 'react';
import { Scissors, Rat as Razor, Bean as Beard } from 'lucide-react';

const ServiceCard = ({ title, price, description, icon: Icon }) => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:shadow-amber-900/20 hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="bg-amber-400 p-3 rounded-lg mr-4">
          <Icon className="h-6 w-6 text-black" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-amber-400 font-semibold">${price}</p>
        </div>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Classic Haircut',
      price: '25',
      description: 'A traditional haircut with clippers and scissors, including a hot towel refresh.',
      icon: Scissors
    },
    {
      title: 'Beard Trim',
      price: '15',
      description: 'Shape and maintain your beard with precision trimming and styling.',
      icon: Beard
    },
    {
      title: 'Luxury Shave',
      price: '30',
      description: 'Experience the ultimate straight razor shave with hot towels and premium after-shave.',
      icon: Razor
    },
    {
      title: 'Hair + Beard Combo',
      price: '35',
      description: 'Complete grooming package with haircut and beard trim for the full transformation.',
      icon: Scissors
    },
    {
      title: 'Kids Haircut',
      price: '20',
      description: 'Gentle haircuts for children under 12, with special care and patience.',
      icon: Scissors
    },
    {
      title: 'Hair Styling',
      price: '15+',
      description: 'Professional styling with premium products for any occasion or everyday look.',
      icon: Scissors
    },
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Premium Services</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            We offer a range of premium grooming services tailored to your individual style.
            From classic cuts to modern trends, our skilled barbers have you covered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#booking" 
            className="bg-amber-400 hover:bg-amber-500 text-black px-8 py-3 rounded font-medium transition-colors inline-block"
          >
            Book a Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;