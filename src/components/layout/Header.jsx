import React from 'react';

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/api/placeholder/40/40" 
            alt="1-Gov.ng Logo" 
            className="h-10"
          />
          <div className="ml-4">
            <h1 className="text-xl font-semibold text-gray-800">Nigerian Prince Services</h1>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:block relative">
            <input
              type="search"
              placeholder="Search"
              className="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg
              className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">
            Login / Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;