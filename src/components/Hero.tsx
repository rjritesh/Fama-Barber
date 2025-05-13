import React from 'react';
import { CalendarClock } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-black bg-opacity-70 bg-blend-overlay"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Premium <span className="text-amber-400">Grooming</span> For The Modern Gentleman
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            At Fama Barber Shop, we blend classic techniques with modern styles to give you the perfect look. Experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#booking" 
              className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-8 py-3 rounded inline-flex items-center justify-center transition-colors"
            >
              <CalendarClock className="mr-2 h-5 w-5" />
              Book Appointment
            </a>
            <a 
              href="#services" 
              className="border-2 border-white hover:border-amber-400 text-white hover:text-amber-400 font-medium px-8 py-3 rounded inline-flex items-center justify-center transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-black/80 backdrop-blur-sm p-4 rounded-lg inline-flex items-center">
            <div className="text-green-500 font-medium mr-4">Open Now</div>
            <div className="text-white">Closes 7 pm</div>
            <div className="mx-4 text-gray-400">|</div>
            <div className="text-amber-400 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              4.6 (116+ reviews)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;