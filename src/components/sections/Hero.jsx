import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const popularServices = [
    'Invest in Nigerian Prince',
    'Buy Land in Nigeria',
    'Buy real Nigerian Gold',
    'Buy Property in Nigeria',
    'Buy Shares in Nigerian Companies'
  ];

  const slides = [
    {
      title: "Digital Services",
      description: "Access government services online 24/7",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Secure Transactions",
      description: "Safe and encrypted government service portal",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Fast Processing",
      description: "Quick turnaround on all applications",
      image: "/api/placeholder/600/400"
    }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-green-600 text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Popular Services */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Official Princely Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Sharing the wealth of the Nigerian Prince globally
            </p>
            
            <div className="bg-white rounded-lg p-6 mt-8 text-gray-800">
              <h2 className="text-lg font-semibold mb-4 text-green-600">
                Popular Services
              </h2>
              <ul className="space-y-3">
                {popularServices.map((service, index) => (
                  <li key={index} className="flex items-center">
                    <svg 
                      className="w-5 h-5 text-green-500 mr-3" 
                      fill="none" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right side - Slideshow */}
          <div className="flex-1">
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative h-[400px]">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      currentSlide === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-6">
                      <h3 className="text-xl font-semibold mb-2">{slide.title}</h3>
                      <p>{slide.description}</p>
                    </div>
                  </div>
                ))}

                {/* Slide indicators */}
                <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        currentSlide === index ? 'bg-white' : 'bg-white/50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation arrows */}
                <button
                  onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
                  aria-label="Previous slide"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/75 transition-colors"
                  aria-label="Next slide"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;