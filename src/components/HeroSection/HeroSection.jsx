import React from "react";
import LightRays from "./LightRays";
const logos = ["/logos/google.svg", "/logos/linkedin.png", "/logos/notion.svg"];

const HeroSection = () => {
  return (
    <section className="flex space-y-6 px-4 sm:px-0 text-gray-300 flex-col items-center justify-center text-center h-[67vh]">
      <div className="absolute inset-0 h-[100vh] -z-10">
        <LightRays
          raysOrigin="top-center"
          raysColor="#C084FC"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={10}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <div className="flex items-center space-x-4">
        <h3 className="body_font text-gray-500">Trusted by</h3>
        <div className="flex items-center space-x-1">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-10 h-10 flex items-center justify-center bg-[#1F2937] rounded-3xl"
            >
              <img src={logo} alt="logo" className="w-6 h-6 object-contain" />
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-5xl sm:text-5xl md:text-7xl text-pretty sm:text-balance text-[#C084FC] font-bold">
        Your SaaS is brilliant. Let’s make your landing page prove it.
      </h1>
      <p className="body_font">
        We offer design + development services for SaaS founders, focused on
        high-converting landing pages.
      </p>
      <button className="bg-[#C084FC] hover:bg-[#7C3AED] transition-colors duration-300 cursor-pointer body_font text-white py-5 px-20 rounded">
        Book a CALL
      </button>
    </section>
  );
};
export default HeroSection;
