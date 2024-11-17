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

  const renderMainContent = () => {
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
        return (
          <div className="container mx-auto px-4 py-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Citizen Services</h1>
              <div className="space-y-6">
                <p className="text-gray-600">
                  Access a wide range of government services available for Nigerian citizens.
                </p>
                <PopularServices />
              </div>
            </div>
          </div>
        );
      case 'non-citizens':
        return (
          <div className="container mx-auto px-4 py-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Non-Citizen Services</h1>
              <div className="space-y-6">
                <p className="text-gray-600">
                  Government services available for non-citizens and visitors in Nigeria.
                </p>
                <ServicesGrid />
              </div>
            </div>
          </div>
        );
      case 'business':
        return (
          <div className="container mx-auto px-4 py-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Business Services</h1>
              <div className="space-y-6">
                <p className="text-gray-600">
                  Access government services and resources for businesses operating in Nigeria.
                </p>
                <ServicesGrid />
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-800">Page Not Found</h1>
              <button 
                onClick={() => setCurrentPage('home')}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Return Home
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Navigation 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
      />
      <main className="flex-grow">
        {renderMainContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;