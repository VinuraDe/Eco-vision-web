import React from "react";
import heroImage from "../../assets/heroImage.jpg"; 
import { ButtonLink } from "../atoms/Buttons";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${heroImage})`,
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
          <ButtonLink text="See Details" link="#survey" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
