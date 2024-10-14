import React from "react";

const LiteratureSurvey = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Literature Survey
        </h2>
        <p className="text-gray-700 text-lg mb-8">
          This literature survey provides an overview of key research studies
          related to [Your Research Topic]. It highlights significant findings,
          methodologies, and implications from various sources, emphasizing the
          evolution of knowledge in this field. The collected data suggests a
          growing interest in [specific area of research], illustrating the
          necessity for further investigation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="path/to/your/graph1.png"
              alt="Graph 1"
              className="w-full h-auto rounded"
            />
            <p className="text-center text-sm text-gray-600 mt-2">
              Figure 1: [Description of Graph 1]
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="path/to/your/graph2.png"
              alt="Graph 2"
              className="w-full h-auto rounded"
            />
            <p className="text-center text-sm text-gray-600 mt-2">
              Figure 2: [Description of Graph 2]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiteratureSurvey;
