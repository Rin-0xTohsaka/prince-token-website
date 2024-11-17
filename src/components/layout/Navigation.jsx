import React, { useState } from 'react';

const Navigation = ({ currentPage, onPageChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { id: 'citizens', title: 'CITIZENS', color: 'bg-blue-500' },
    { id: 'non-citizens', title: 'NON-CITIZENS', color: 'bg-green-500' },
    { id: 'business', title: 'BUSINESS', color: 'bg-orange-500' }
  ];

  const handleNavClick = (pageId) => {
    onPageChange(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavClick('home')} 
              className="flex items-center space-x-2"
            >
              <img 
                src="/api/placeholder/32/32" 
                alt="1-Gov.ng" 
                className="h-8 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`
                  px-6 py-2 rounded-md text-sm font-medium transition-colors
                  ${currentPage === item.id 
                    ? `${item.color} text-white` 
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Mobile search and menu buttons */}
          <div className="flex md:hidden">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 mr-2"
              aria-label="Search"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open menu</span>
              <svg 
                className="w-6 h-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      {searchOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search services..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        </div>
      )}

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`
                  w-full text-left px-3 py-2 rounded-md text-base font-medium
                  ${currentPage === item.id
                    ? `${item.color} text-white`
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;