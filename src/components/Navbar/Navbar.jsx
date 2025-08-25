import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className=" bg-transparent max-w-6xl mx-auto my-4 w-full backdrop-blur-lg rounded-2xl shadow-2xl z-50">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="text-2xl body_font text-white">Flowbit</div>

        <div className="hidden md:flex items-center space-x-8">
          {["Home", "Features", "Pricing", "About"].map((link) => (
            <a key={link} href="#" className="relative text-white group">
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#C084FC] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="bg-[#7C3AED] hover:bg-[#C084FC] transition-colors duration-300 cursor-pointer body_font text-white py-2 px-4 rounded">
            Book a CALL
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/20 bg-black/70 backdrop-blur-lg rounded-b-2xl">
          <div className="flex flex-col items-center py-6 space-y-6">
            {["Home", "Features", "Pricing", "About"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white text-lg font-medium hover:text-purple-300 transition"
              >
                {link}
              </a>
            ))}
            <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-md hover:scale-105 transition">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
