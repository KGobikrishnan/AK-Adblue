import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Reviews from './components/Reviews';
import AboutUs from './components/AboutUs';
import Location from './components/Location';
import Footer from './components/Footer';

const preloadImages = [
  '/assets/1.jpeg',
  '/assets/1.dng',
  '/assets/2.dng',
  '/assets/hero.jpeg'
];

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Preload images for "takkunu" (instant) loading
    preloadImages.forEach((image) => {
      const img = new Image();
      img.src = image;
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <AboutUs />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
