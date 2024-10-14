import React from 'react'
import { technologies } from '../../constants/Technologies';
import PrimaryTypo from '../atoms/Headings';

const TechnologiesSection = () => {
  return (
    <section id="technologies" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PrimaryTypo text="Technologies" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={tech.icon} alt={tech.name} className="h-16 w-16 mb-4" />
              <h3 className="text-lg font-semibold text-gray-700">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
