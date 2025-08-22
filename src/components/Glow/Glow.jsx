import React from "react";

const Glow = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute top-32">
      <div className="h-[400px] w-[520px] rounded-full bg-gradient-to-r from-[#7C3AED] via-[#C084FC] to-[#7C3AED] opacity-30 blur-3xl" />
    </div>
  );
};

export default Glow;
