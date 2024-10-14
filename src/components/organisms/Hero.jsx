import React from "react";
// Import the image from your assets folder
import heroImage from "../../assets/heroImage.jpg"; 

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${heroImage})`, // Use the imported image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
          Welcome to Eco-Vision
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl">
          Creating beautiful digital experiences with simplicity and elegance.
        </p>
        <div className="space-x-4">
          <a
            href="#services"
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md text-lg transition"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="bg-white text-gray-800 hover:bg-gray-100 px-6 py-3 rounded-md text-lg transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
