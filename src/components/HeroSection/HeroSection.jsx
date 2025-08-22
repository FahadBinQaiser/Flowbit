import React from "react";
const logos = [
  "src/components/logos/google.svg",
  "src/components/logos/linkedin.png",
  "src/components/logos/notion.svg",
];

const HeroSection = () => {
  return (
    <section className="flex space-y-6 text-gray-300 flex-col items-center justify-center h-screen text-center">
      <div className="flex items-center space-x-4">
        <h3 className="body_font text-gray-500">Trusted by</h3>
        <div className="flex items-center space-x-4">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-10 h-10 flex items-center justify-center bg-[#7C3AED] rounded-3xl"
            >
              <img src={logo} alt="logo" className="w-6 h-6 object-contain" />
            </div>
          ))}
        </div>
      </div>

      <h1 className="text-7xl text-balance text-[#C084FC] font-bold">
        Your SaaS is brilliant. Let’s make your landing page prove it.
      </h1>
      <p className="body_font">
        We offer design + development services for SaaS founders, focused on
        high-converting landing pages.
      </p>
      <button className="bg-[#7C3AED] hover:bg-[#C084FC] transition-colors duration-300 cursor-pointer body_font text-white py-2 px-4 rounded">
        Book a CALL
      </button>
    </section>
  );
};
export default HeroSection;
