import React from 'react';

const Hero = () => {
  const popularServices = [
    'Register Births/Marriages/Deaths',
    'Apply for National ID Number (NIN)',
    'Apply/Renew Driver\'s License',
    'Apply/Renew Passport',
    'Renew Digital TV Pass'
  ];

  return (
    <div className="relative bg-green-600 text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to 1-Gov.ng
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            The portal provides Nigerians residing in Nigeria or abroad with access to digital government services
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
      </div>
    </div>
  );
};

export default Hero;