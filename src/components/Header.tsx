import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Scissors className="h-8 w-8 text-amber-400 mr-2" />
            <span className="text-white font-bold text-xl md:text-2xl">FAMA BARBER</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Services', 'Gallery', 'Reviews', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-white hover:text-amber-400 transition-colors font-medium"
              >
                {item}
              </a>
            ))}
            <a 
              href="#booking" 
              className="bg-amber-400 text-black px-4 py-2 rounded font-medium hover:bg-amber-500 transition-colors"
            >
              Book Now
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white hover:text-amber-400 transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-95 z-40 md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {['Home', 'Services', 'Gallery', 'Reviews', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-white hover:text-amber-400 transition-colors text-2xl font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="#booking" 
            className="bg-amber-400 text-black px-6 py-3 rounded text-xl font-medium hover:bg-amber-500 transition-colors mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;