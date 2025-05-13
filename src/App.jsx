import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Fama Barber Shop & Beauty Salon';
  }, []);

  return (
    <div className="font-sans bg-black text-white">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Reviews />
      <Contact />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;