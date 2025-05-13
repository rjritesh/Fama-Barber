import React from 'react';

const Gallery = () => {
  const images = [
    '/assets/cut1.jpg',
    '/assets/cut2.webp',
    '/assets/cut4.jpg',
    '/assets/cut5.webp',
    '/assets/cut6.webp',
    '/assets/cut7.webp',
    '/assets/cut8.jpg',
    '/assets/cut9.webp',
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Work</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Browse through our gallery to see examples of our craftsmanship and the quality of our work.
            We take pride in every cut and style we create.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden group rounded-lg ">
              <img 
                src={image} 
                alt={`Barber shop gallery image ${index + 1}`} 
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">Want to see more of our work?</p>
          <a 
            href="https://www.instagram.com/famabarber" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black px-8 py-3 rounded font-medium transition-colors inline-block"
          >
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;