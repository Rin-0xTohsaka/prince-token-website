import React from 'react';

const StatBox = ({ number, label }) => (
  <div className="bg-green-600 p-6 rounded-lg text-white text-center">
    <div className="text-3xl md:text-4xl font-bold mb-2">{number}</div>
    <div className="text-sm md:text-base text-green-100">{label}</div>
  </div>
);

const Statistics = () => {
  const stats = [
    {
      number: '4241062',
      label: 'Number of Visitors'
    },
    {
      number: '271',
      label: 'Number of digital services available'
    },
    {
      number: '3,502',
      label: 'Number of service requests processed'
    }
  ];

  return (
    <div className="bg-green-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatBox
              key={index}
              number={stat.number}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;