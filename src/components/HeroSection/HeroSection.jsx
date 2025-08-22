import React from "react";
const HeroSection = () => {
  return (
    <section className="flex space-y-6 text-gray-300 flex-col items-center justify-center h-screen text-center">
      <h3 className="body_font">
        Trusted by [logos / client names / placeholder here]
      </h3>
      <h1 className="text-7xl text-balance text-[#C084FC] font-bold">
        Your SaaS is brilliant. Let’s make your landing page prove it.
      </h1>
      <p className="body_font">
        We turn complex SaaS products into landing pages that speak and build
        trust.
      </p>
      <button className="bg-[#7C3AED] hover:bg-[#C084FC] transition-colors duration-300 cursor-pointer body_font text-white py-2 px-4 rounded">
        Book a CALL
      </button>
    </section>
  );
};
export default HeroSection;
