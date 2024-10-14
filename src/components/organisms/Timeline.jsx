import React from 'react'
import { timeline } from '../../constants/Timeline';
import PrimaryTypo from '../atoms/Headings';

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PrimaryTypo text="Project Timeline" />

        <div className="relative">
          <div className="absolute w-1 bg-gray-300 h-full left-1/2 transform -translate-x-1/2"></div>
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div
                key={index}
                className={`flex flex-col sm:items-end ${
                  index % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row"
                } sm:items-start`}
              >
                <div className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full">
                  {event.step}
                </div>

                <div
                  className={`relative md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-8 md:pr-0" : "md:pr-8 md:pl-0"
                  } mt-4 md:mt-0`}
                >
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md m-1">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-500">{event.date}</p>
                    <p className="mt-2 text-gray-700">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

