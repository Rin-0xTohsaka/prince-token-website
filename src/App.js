// src/App.js
import React, { useState } from 'react';
import Navigation from './components/layout/Navigation';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ServicesGrid from './components/sections/ServicesGrid';
import Statistics from './components/sections/Statistics';
import PopularServices from './components/sections/PopularServices';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <PopularServices />
            <ServicesGrid />
            <Statistics />
          </>
        );
      case 'citizens':
        return <div className="container mx-auto px-4 py-8">Citizens Services</div>;
      case 'non-citizens':
        return <div className="container mx-auto px-4 py-8">Non-Citizens Services</div>;
      case 'business':
        return <div className="container mx-auto px-4 py-8">Business Services</div>;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;