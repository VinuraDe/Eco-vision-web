import React from 'react'
import PrimaryTypo from '../atoms/Headings';
import { BsFiletypePpt } from 'react-icons/bs';
import { PrimaryButton } from '../atoms/Buttons';
import { documents } from '../../constants/Documents';
import { FaFilePdf } from 'react-icons/fa';

function DocumentSection() {
  return (
    <div>
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Documents</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((item, index) => (
            <li
              key={index}
              className="flex flex-col justify-between items-center p-4 bg-gray-100 rounded-md shadow-md  min-h-[200px]"
            >
              <div className="flex flex-col items-center">
                <FaFilePdf className="text-red-500 mb-2 w-16 h-16" />
                <span className="text-gray-700 font-medium text-center">
                  {item.name}
                </span>
              </div>
              <div className="mt-4">
                <div className="mt-4">
                  <PrimaryButton
                    text="Download"
                    link={item.link}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DocumentSection
