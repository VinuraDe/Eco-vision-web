import React from 'react'
import { BsFiletypePpt } from 'react-icons/bs';
import { presentations } from '../../constants/Documents';
import { PrimaryButton } from '../atoms/Buttons';
import PrimaryTypo, { SecondaryTypo } from '../atoms/Headings';

function PresentationSection() {
  return (
    <div>
      <div className="mt-12">
        <SecondaryTypo text="Presentations" />
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {presentations.map((item, index) => (
            <li
              key={index}
              className="flex flex-col justify-between items-center p-4 bg-gray-100 rounded-md shadow-md min-h-[200px]"
            >
              <div className="flex flex-col items-center">
                <BsFiletypePpt className="text-red-500 mb-2 w-16 h-16" />
                <span className="text-gray-700 font-medium text-center">
                  {item.name}
                </span>
              </div>
              <div className="mt-4">
                <PrimaryButton
                  text="Download"
                  link="https://www.youtube.com/"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PresentationSection
