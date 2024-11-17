import React from 'react';

const Footer = () => {
  const links = {
    'Useful links': [
      'How 1gov works',
      'Ministries',
      'Publications',
      'Latest News',
      'Policies',
      'Embassies',
      'Agencies'
    ],
    'More links': [
      'Terms & Conditions',
      'Developer zone',
      'Privacy & Policy',
      'login'
    ],
    'Resources': [
      'services.ng',
      'govnet',
      'NIN Registration'
    ]
  };

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-800 mb-4">{category}</h3>
              <ul className="space-y-2">
                {items.map((item, index) => (
                  <li key={index}>
                    <button className="text-gray-600 hover:text-gray-900">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Follow us</h3>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin', 'youtube'].map((social) => (
                <button
                  key={social}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <span className="sr-only">{social}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img src="/api/placeholder/120/40" alt="1-Gov.ng" className="h-10" />
            </div>
            <div className="text-sm text-gray-600">
              © 2024 1-Gov.ng. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;