import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Reviews from './components/Reviews';
import AboutUs from './components/AboutUs';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
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
