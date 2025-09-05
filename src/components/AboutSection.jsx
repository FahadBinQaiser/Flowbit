import React from "react";
import LightRays from "./HeroSection/LightRays";

const AboutSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 sm:px-0 py-24 space-y-10 bg-gradient-to-br from-[#1F2937] via-[#2d1a3a] to-[#111827] rounded-3xl mt-20 shadow-2xl overflow-hidden border border-[#2d1a3a]/40 backdrop-blur-lg">
      {/* Animated Accent Gradient Blob */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-tr from-[#C084FC]/60 via-[#7C3AED]/40 to-transparent rounded-full blur-3xl opacity-60 animate-pulse z-0" />
      <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] via-[#7C3AED] to-[#A5B4FC] drop-shadow-lg tracking-tight">
        About Flowbit
      </h2>
      <p className="body_font max-w-2xl text-gray-200 text-lg md:text-xl leading-relaxed drop-shadow">
        <span className="bg-[#C084FC]/10 px-3 py-1 rounded-xl backdrop-blur-sm">
          Flowbit
        </span>{" "}
        is dedicated to helping SaaS founders create visually stunning and
        high-converting landing pages.
        <br className="hidden md:block" />
        Our team blends design and development expertise to deliver results that
        make your product{" "}
        <span className="text-[#C084FC] font-semibold">stand out</span> in a
        crowded market.
      </p>
      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center z-10">
        <div className="relative group bg-[#111827]/80 border border-[#C084FC]/20 rounded-2xl p-8 shadow-xl w-72 backdrop-blur-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#C084FC]/40 to-transparent rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity" />
          <h3 className="text-2xl font-bold text-[#C084FC] mb-2 tracking-wide">
            Design
          </h3>
          <p className="body_font text-gray-300 text-base">
            Modern, user-focused UI/UX tailored for SaaS products.
          </p>
        </div>
        <div className="relative group bg-[#111827]/80 border border-[#C084FC]/20 rounded-2xl p-8 shadow-xl w-72 backdrop-blur-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-tr from-[#7C3AED]/40 to-transparent rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity" />
          <h3 className="text-2xl font-bold text-[#C084FC] mb-2 tracking-wide">
            Development
          </h3>
          <p className="body_font text-gray-300 text-base">
            Fast, responsive, and scalable landing pages built for conversion.
          </p>
        </div>
      </div>
      {/* Decorative bottom accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-gradient-to-r from-transparent via-[#C084FC]/30 to-transparent blur-2xl opacity-60 rounded-full z-0" />
    </section>
  );
};

export default AboutSection;
