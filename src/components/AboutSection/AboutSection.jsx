import React from "react";
import { Box, Code } from "lucide-react";
const AboutSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-24 space-y-10  rounded-3xl mt-20 shadow-2xl overflow-hidden border border-[#2d1a3a]/40 backdrop-blur-lg">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="rounded-full blur-3xl opacity-60 animate-pulse z-0" />
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] via-[#7C3AED] to-[#C084FC] drop-shadow-lg tracking-tight text-pretty">
          Here's what Flowbit can do for you
        </h2>
        <p className="body_font text-balance text-gray-200 text-lg md:text-xl leading-relaxed drop-shadow">
          <span className="bg-[#C084FC]/10 px-3 py-1 rounded-xl backdrop-blur-sm">
            Flowbit
          </span>{" "}
          is dedicated to helping SaaS founders create visually stunning and
          high-converting landing pages. Our team blends design and development
          expertise to deliver results that make your product{" "}
          <span className="text-[#C084FC] font-semibold">stand out</span> in a
          crowded market.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 z-10 place-items-center">
          <div className="relative group bg-gradient-to-br from-[#1e1932]/90 via-[#2d1a3a]/90 to-[#111827]/90 border border-[#C084FC]/30 rounded-3xl p-8 shadow-2xl w-90 md:w-96 backdrop-blur-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(192,132,252,0.25)] hover:border-[#C084FC]/60">
            <div className="absolute -top-8 -right-8 w-28 h-28 bg-gradient-to-br from-[#C084FC]/40 to-transparent rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity" />
            <div className="flex items-center justify-center mb-4">
              <Box className="w-10 h-10 drop-shadow-2xl text-[#7C3AED]" />
            </div>
            <h3 className="text-4xl font-bold text-[#C084FC] mb-2 tracking-wide">
              Design
            </h3>
            <p className="body_font text-pretty text-gray-300">
              Conversion-first UI/UX that guides visitors to act. Every screen
              is optimized to turn clicks into signups and demos not just look
              pretty.
            </p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#C084FC]/40 via-[#7C3AED]/40 to-transparent rounded-b-3xl opacity-70" />
          </div>

          <div className="relative group bg-gradient-to-bl from-[#1e1932]/90 via-[#2d1a3a]/90 to-[#111827]/90 border border-[#7C3AED]/30 rounded-3xl p-8 shadow-2xl w-90 md:w-96 backdrop-blur-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(124,58,237,0.25)] hover:border-[#7C3AED]/60">
            <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-gradient-to-tr from-[#7C3AED]/40 to-transparent rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity" />
            <div className="flex items-center justify-center mb-4">
              <Code className="w-10 h-10 drop-shadow-2xl text-[#7C3AED]" />
            </div>
            <h3 className="text-4xl font-bold text-[#C084FC] mb-2 tracking-wide">
              Development
            </h3>
            <p className="body_font text-gray-300 text-pretty">
              Conversion-first UI/UX that guides visitors to act. Every screen
              is optimized to turn clicks into signups and demos not just look
              pretty.
            </p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#7C3AED]/40 via-[#C084FC]/40 to-transparent rounded-b-3xl opacity-70" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-gradient-to-r from-transparent via-[#C084FC]/30 to-transparent blur-2xl opacity-60 rounded-full z-0" />
    </section>
  );
};

export default AboutSection;
