import { useState } from "react";
import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
    </>
  );
}

export default App;
