import React from 'react';
import { Scissors, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-800">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Scissors className="h-8 w-8 text-amber-400 mr-2" />
              <span className="text-white font-bold text-xl">FAMA BARBER</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              At Fama Barber Shop and Beauty Salon, we blend traditional techniques with modern styles to deliver 
              exceptional grooming services. Our skilled barbers are committed to helping you look and feel your best.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-400 transition-colors group">
                <Facebook className="h-5 w-5 text-white group-hover:text-black" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-400 transition-colors group">
                <Instagram className="h-5 w-5 text-white group-hover:text-black" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-400 transition-colors group">
                <Twitter className="h-5 w-5 text-white group-hover:text-black" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Gallery', 'Reviews', 'Contact', 'Book Now'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">500 N Bell Ave #109</p>
              <p className="mb-2">Denton, TX 76209, United States</p>
              <p className="mb-2">
                <a href="tel:+19406129127" className="hover:text-amber-400 transition-colors">+1 940-612-9127</a>
              </p>
              <p>
                <a href="mailto:info@famabarber.com" className="hover:text-amber-400 transition-colors">info@famabarber.com</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Fama Barber Shop & Beauty Salon. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            {' | '}
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;