import React from "react";
import PrimaryTypo from "../atoms/Headings";
import { literatureSurveyData } from "../../constants/LitSurvey";

const LiteratureSurvey = () => {
  return (
    <section id="survey" className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <PrimaryTypo text={literatureSurveyData.heading} />
        <p className="text-gray-700 text-lg mb-8 text-justify">
          {literatureSurveyData.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {literatureSurveyData.graphs.map((graph, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 border border-gray-300"
            >
              <img
                src={graph.imgSrc}
                alt={graph.altText}
                className="w-full h-auto rounded"
              />
              <p className="text-center text-sm text-gray-600 mt-2">
                {graph.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiteratureSurvey;
