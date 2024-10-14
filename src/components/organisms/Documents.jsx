import React from "react";
import { FaFilePdf } from "react-icons/fa";
import { BsFiletypePpt } from "react-icons/bs";
import { documents, presentations } from "../../constants/Documents";

const DocumentsSection = () => {
  return (
    <section id="documents" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Documents & Presentations
        </h2>

        {/* Presentations Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Presentations
          </h3>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {presentations.map((item, index) => (
              <li
                key={index}
                className="flex flex-col justify-between items-center p-4 bg-gray-100 rounded-md shadow-md h-full"
              >
                <div className="flex flex-col items-center">
                  <BsFiletypePpt className="text-red-500 mb-2 w-16 h-16" />
                  <span className="text-gray-700 font-medium text-center">
                    {item.name}
                  </span>
                </div>
                <div className="mt-4">
                  <a
                    href={item.link}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
                    download
                  >
                    Download
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Documents Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Documents
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((item, index) => (
              <li
                key={index}
                className="flex flex-col justify-between items-center p-4 bg-gray-100 rounded-md shadow-md h-full"
              >
                <div className="flex flex-col items-center">
                  <FaFilePdf className="text-red-500 mb-2 w-16 h-16" />
                  <span className="text-gray-700 font-medium text-center">
                    {item.name}
                  </span>
                </div>
                <div className="mt-4">
                  <a
                    href={item.link}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
                    download
                  >
                    Download
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
